import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import Fuse from 'fuse.js';
import { useDebounce } from 'use-debounce';
import { useGetData } from '../../../hooks';
import { convertToKebabCase } from '../../../utils';
import { NonDashboardPage } from '../../Page';
import { EmptyRecipeContainer } from './EmptyRecipeContainer';
import { GroceryListModal } from '../grocery-list-modal/GroceryListModal';
import { LoaderContainer } from './LoaderContainer';
import { RecipeItem } from './RecipeItem';
import { SearchAndFilterContainer } from './SearchAndFilterContainer';
import { TopArrow } from './TopArrow';
import { useGroceryList } from '../hooks/use-grocery-list';
import { useFilters } from '../hooks/use-filters';
import { EmailRecipe } from '../email-recipe-form/EmailRecipeForm';
import { RecipeFilterModal } from './RecipeFilterModal';
import { handleModalClass } from '../utils/handle-modal-class';
import { GROUPED_BY_NONE, RECIPES_FILTERS_LOCAL_STORAGE_KEY, RECIPES_GROUPED_BY_LOCAL_STORAGE_KEY } from '../constants';
import closeBtn from '../../../Assets/x.png';
import { Legend } from './Legend';
import { RecipeSortFilter } from './RecipeSortFilter';

export const defaultSelectedFilters = {
    category: [],
    diet: [],
    genre: [],
    method: [],
    protein: [],
    type: [],
    image: [],
    wip: [],
    search: '',
};

export const Recipes = ({ history }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', undefined];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;

    const getInitialSelectedFilters = () => {
        const filters = localStorage.getItem(RECIPES_FILTERS_LOCAL_STORAGE_KEY)
        if (filters) {
            return JSON.parse(filters);
        }
        return defaultSelectedFilters;
    };

    const setSelectedFiltersInLocalStorage = (value) => localStorage.setItem(RECIPES_FILTERS_LOCAL_STORAGE_KEY, JSON.stringify(value));

    const [selectedFilters, setSelectedFilters] = useState(getInitialSelectedFilters());
    const [search, setSearch] = useState(selectedFilters.search);
    const [debouncedValue] = useDebounce(search, 300);

    useEffect(() => {
        setSelectedFilters({ ...selectedFilters, search: debouncedValue });
        // eslint-disable-next-line
    }, [debouncedValue]);

    useEffect(() => {
        setSelectedFiltersInLocalStorage(selectedFilters);
        // eslint-disable-next-line
    }, [
        selectedFilters.category,
        selectedFilters.diet,
        selectedFilters.genre,
        selectedFilters.method,
        selectedFilters.protein,
        selectedFilters.type,
        selectedFilters.image,
        selectedFilters.search,
        selectedFilters.wip,
    ])

    const [showArrow, setShowArrow] = useState(false);

    const { data: recipes = [] } = useGetData('recipes');

    const fuse = new Fuse(recipes, {
        keys: [
            'name',
            'cardName',
            // , 'ingredients.name'
            // , 'supplies.name'
        ],
        threshold: 0.4,
        // threshold value
        // closer to 1 => the more broad 
        // Closer to 0 => the more exact
    });

    const matchingSearchResults = fuse.search(search).flatMap(recipe => recipe.item);

    const getInitialGroupedBy = () => {
        const initialGroupedBy = localStorage.getItem(RECIPES_GROUPED_BY_LOCAL_STORAGE_KEY)
        if (initialGroupedBy) return JSON.parse(initialGroupedBy);
        return GROUPED_BY_NONE;
    };

    const setInitialGroupedByInLocalStorage = (value) => localStorage.setItem(RECIPES_GROUPED_BY_LOCAL_STORAGE_KEY, JSON.stringify(value));

    const [groupedBy, setGroupedBy] = useState(getInitialGroupedBy());
    const sortRecipes = (recipes) => {
        if (groupedBy === 'none') return recipes;
        if (groupedBy === 'alphabetic') return recipes.sort((a, b) => a.cardName.localeCompare(b.cardName));
        if (groupedBy === 'genre') return Object.entries(recipes.reduce((acc, recipe, index) => {
            const genre = recipe.genre?.[0];
            if (!genre) return acc;
            if (!acc[genre]) {
                acc[genre] = [];
            }
            acc[genre].push({ ...recipe, id: index });
            return acc;
        }, {})).sort((a, b) => {
            const itemsA = a[1];
            const itemsB = b[1];
            const idA = itemsA[0].id;
            const idB = itemsB[0].id;
            return idA - idB;
        });
    }

    const filteredRecipes = search ? matchingSearchResults : recipes;
    const { filteredRecipeBySelectedFilters } = useFilters({ filteredRecipes, selectedFilters });
    const groupedFilteredRecipes = sortRecipes(filteredRecipeBySelectedFilters);

    const onScroll = () => {
        const scrollHeight = window.scrollY;
        if (scrollHeight > 300 && !showArrow) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        if (!isLoaded) {
            if (cache) {
                setIsLoaded(true);
            } else {
                setTimeout(() => {
                    setIsLoaded(true);
                }, 3000);
            }
        }

        return () => {
            setIsLoaded(false);
            handleCloseFilterModal();
            setShowArrow(false);
            window.removeEventListener('scroll', onScroll);
        }
        // eslint-disable-next-line
    }, []);

    // grocery list modal
    const {
        show: showGroceryListModal,
        setShow: setShowGroceryListModal,
        handleClose: closeGroceryListModal,
        handleOpen: openGroceryListModal,
        groceryList,
        setGroceryList,
        mealPlan,
        setMealPlan,
        updateLocalStorage,
        selectedView,
        setSelectedView,
        generateUUID,
    } = useGroceryList();

    // filters modal
    const [showFiltersModal, setShowFiltersModal] = useState(false);
    const { handleClose: handleCloseFilterModal, handleOpen: handleOpenFilterModal } = handleModalClass('.modal-tray', 'modal-tray-overlay');

    const hasAnyFilters = Object.values(selectedFilters).some(filter => {
        if (Array.isArray(filter)) return filter.length > 0;
        // search is the only string valued filter
        return filter;
    })

    const formattedFilters = Object.entries(selectedFilters).reduce((acc, [key, values]) => {
        let newAcc = [];
        switch (key) {
            case 'image':
                if (values.includes('Yes')) newAcc = [...newAcc, { prop: key, value: 'Yes', label: 'Has Image' }];
                if (values.includes('No')) newAcc = [...newAcc, { prop: key, value: 'No', label: 'No Image' }];
                break;
            case 'wip':
                if (values.includes('Yes')) newAcc = [...newAcc, { prop: key, value: 'Yes', label: 'WIP' }];
                if (values.includes('No')) newAcc = [...newAcc, { prop: key, value: 'No', label: 'Successfully Created' }];
                break;
            case 'search':
                // values is a string
                if (values) {
                    newAcc = [...newAcc, { prop: key, value: values, label: 'Search: ' + values }];
                }
                break;
            case 'category':
            case 'diet':
            case 'genre':
            case 'method':
            case 'protein':
            case 'type':
            default:
                newAcc = [...newAcc, ...values.map(item => ({ prop: key, value: item, label: item }))];
                break;
        }

        return acc.concat(newAcc);
    }, []);

    return (
        <NonDashboardPage
            mainClassName={`recipes ${isLoaded ? '' : 'isLoading'}`}
            onClick={() => {
                handleCloseFilterModal();
                setShowFiltersModal(false);
            }}
        >
            <NonDashboardPage.Header title='Recipes'>
                <SearchAndFilterContainer
                    {...{
                        filterOnClick: () => {
                            if (showFiltersModal) {
                                handleCloseFilterModal();
                                setShowFiltersModal(false);
                            } else {
                                handleOpenFilterModal();
                                setShowFiltersModal(true);
                            }
                            setShowFiltersModal(toggle => !toggle);
                        },
                        hasAnyFilters,
                        imageOnClick: () => {
                            if (showGroceryListModal) closeGroceryListModal();
                            else openGroceryListModal();
                            setShowGroceryListModal(toggle => !toggle);
                        },
                        search,
                        setSearch,
                    }}
                />
            </NonDashboardPage.Header>
            <div className={`filter-chips ${formattedFilters.length > 0 ? 'show' : ''}`}>
                {formattedFilters.map((filter, index) => (
                    <div
                        key={index}
                        className="chip"
                        onClick={() => {
                            if (filter.prop === 'search') {
                                setSearch('');
                                setSelectedFilters({
                                    ...selectedFilters,
                                    [filter.prop]: '',
                                });
                                return;
                            } else {
                                setSelectedFilters({
                                    ...selectedFilters,
                                    [filter.prop]: selectedFilters[filter.prop].filter(item => item !== filter.value),
                                });
                            }
                        }}>
                        <span>{filter.label}</span>
                        <img src={closeBtn} alt="close" />
                    </div>
                ))}
            </div>

            <div
                id="modal-tray-overlay"
                className="overlay"
                onClick={handleCloseFilterModal}
            />
            <RecipeFilterModal
                {...{
                    closeFilters: handleCloseFilterModal,
                    filteredRecipes,
                    hasAnyFilters,
                    resetAllFilters: () => {
                        setSearch('');
                        setSelectedFilters(defaultSelectedFilters)
                    },
                    selectedFilters,
                    setSelectedFilters,
                    totalAvailableRecipes: recipes.filter(item => item.available).length,
                }}
            />
            {isLoaded ? (
                filteredRecipes.length ? (
                    <>
                        {groupedBy === 'genre' ? (
                            groupedFilteredRecipes.map(([genre, recipes]) => (
                                <div className="recipes-grouped-container" key={genre}>
                                    <h4>{genre}</h4>
                                    <div className="recipe-items-container">
                                        {recipes.map((item) =>
                                            <RecipeItem key={item.name} item={item} onClick={() => history.push('/recipes/' + convertToKebabCase(item.name))} />
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="recipe-items-container">
                                {filteredRecipeBySelectedFilters.map((item) =>
                                    <RecipeItem key={item.name} item={item} onClick={() => history.push('/recipes/' + convertToKebabCase(item.name))} />
                                )}
                            </div>
                        )}
                        <div className="legend-container">
                            <Legend />
                            <RecipeSortFilter
                                groupedBy={groupedBy}
                                setGroupedBy={(value) => {
                                    setGroupedBy(value);
                                    setInitialGroupedByInLocalStorage(value);
                                }}
                            />
                        </div>
                    </>
                ) : <EmptyRecipeContainer />
            ) : <LoaderContainer />}

            {isLoaded && (
                <EmailRecipe />
            )}

            {showArrow && <TopArrow />}

            <GroceryListModal
                generateUUID={generateUUID}
                groceryList={groceryList}
                handleClose={() => {
                    closeGroceryListModal();
                    setShowGroceryListModal(false);
                }}
                mealPlan={mealPlan}
                setGroceryList={setGroceryList}
                setMealPlan={setMealPlan}
                updateLocalStorage={updateLocalStorage}
                selectedView={selectedView}
                setSelectedView={setSelectedView}
            />
        </NonDashboardPage>
    )
}

/*
    TODO: add icons on the thumbnails
*/