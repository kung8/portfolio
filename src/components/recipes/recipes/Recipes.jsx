import { useEffect, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import Fuse from 'fuse.js';
import { useDebounce } from 'use-debounce';

import { useGetData, useGetFeaturedRecipes } from '../../../hooks';
import { convertToKebabCase } from '../../../utils';
import { NonDashboardPage } from '../../Page';
import { EmailRecipe } from '../email-recipe-form/EmailRecipeForm';
import { GroceryListModal } from '../grocery-list-modal/GroceryListModal';
import { useFilters } from '../hooks/use-filters';
import { useGroceryList } from '../hooks/use-grocery-list';
import { EmptyRecipeContainer } from './EmptyRecipeContainer';
import { LoaderContainer } from './LoaderContainer';
import { RecipeItem } from './RecipeItem';
import { TopArrow } from './TopArrow';
import { Legend } from './Legend';
import { RecipeSortFilter } from './RecipeSortFilter';
import { Greeting } from './Greeting';
import { MenuFilter } from './MenuFilter';
import { FilterChips } from './FilterChips';
import { GroceryListIcon } from './GroceryListIcon';
import { RecipeSearchBar } from './RecipeSearchBar';
import { AdvancedFilters } from './AdvancedFilters';
import { getMenuFilterItems } from '../utils/get-menu-filter-items';
import { UploadRecipe } from './UploadRecipe';
import { RECIPE_LISTING_SCREEN_GROUPED_BY_ALPHABETIC, RECIPE_LISTING_SCREEN_GROUPED_BY_GENRE, RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_ASCENDING, RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_DESCENDING, RECIPE_LISTING_SCREEN_GROUPED_BY_NONE, getRecipesFilterDrawerOpenLocalStorageKey, getRecipesFiltersLocalStorageKey, getRecipesGroupedByLocalStorageKey, setRecipesFilterDrawerOpenLocalStorageKey, setRecipesFiltersLocalStorageKey, setRecipesGroupedByLocalStorageKey } from '../utils';

export const defaultSelectedFilters = {
    available: [],
    category: [],
    diet: [],
    genre: [],
    method: [],
    protein: [],
    type: [],
    image: [],
    wip: [],
    ingredients: [],
    search: '',
    recommended: [],
};

export const Recipes = ({ history }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', undefined];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;
    const { data: featuredRecipes = {} } = useGetFeaturedRecipes();

    const [selectedFilters, setSelectedFilters] = useState(getRecipesFiltersLocalStorageKey());
    const [search, setSearch] = useState(selectedFilters.search);
    const [debouncedValue] = useDebounce(search, 300);

    useEffect(() => {
        setSelectedFilters({ ...selectedFilters, search: debouncedValue });
        // eslint-disable-next-line
    }, [debouncedValue]);

    useEffect(() => {
        setRecipesFiltersLocalStorageKey(selectedFilters);
        // eslint-disable-next-line
    }, [
        selectedFilters.available,
        selectedFilters.category,
        selectedFilters.diet,
        selectedFilters.genre,
        selectedFilters.method,
        selectedFilters.protein,
        selectedFilters.type,
        selectedFilters.image,
        selectedFilters.search,
        selectedFilters.wip,
        selectedFilters.ingredients,
        selectedFilters.recommended,
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

    const [groupedBy, setGroupedBy] = useState(getRecipesGroupedByLocalStorageKey());
    const sortRecipes = (recipes) => {
        if (selectedFilters.ingredients?.length) return Object.entries(recipes.reduce((acc, recipe, index) => {
            const overlappingIngredientsCount = getOverlappingIngredientsCount(recipe.ingredients);
            if (!acc[overlappingIngredientsCount]) {
                acc[overlappingIngredientsCount] = [];
            }
            acc[overlappingIngredientsCount].push({ ...recipe, id: index });
            return acc;
        }, {})).sort((a, b) => b[0] - a[0]); // sort by descending order
        if (groupedBy === RECIPE_LISTING_SCREEN_GROUPED_BY_NONE) return recipes;
        if (groupedBy === RECIPE_LISTING_SCREEN_GROUPED_BY_ALPHABETIC) return recipes.sort((a, b) => a.cardName.localeCompare(b.cardName));
        if (groupedBy === RECIPE_LISTING_SCREEN_GROUPED_BY_GENRE) return Object.entries(recipes.reduce((acc, recipe, index) => {
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
        if (groupedBy === RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_ASCENDING) return Object.entries(recipes.reduce((acc, recipe, index) => {
            const ingredientCount = recipe.ingredients.length;
            if (!acc[ingredientCount]) {
                acc[ingredientCount] = [];
            }
            acc[ingredientCount].push({ ...recipe, id: index });
            return acc;
        }, {})).sort((a, b) => a[0] - b[0]); // sort by ascending order        
        if (groupedBy === RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_DESCENDING) return Object.entries(recipes.reduce((acc, recipe, index) => {
            const ingredientCount = recipe.ingredients.length;
            if (!acc[ingredientCount]) {
                acc[ingredientCount] = [];
            }
            acc[ingredientCount].push({ ...recipe, id: index });
            return acc;
        }, {})).sort((a, b) => b[0] - a[0]); // sort by descending order   
    }

    const getOverlappingIngredientsCount = (ingredients) => selectedFilters?.ingredients?.filter((ingredient => ingredients.find(i => i.name === ingredient))).length

    const filteredRecipes = search ? matchingSearchResults : recipes;
    const { filterMapping, filteredRecipeBySelectedFilters } = useFilters({ filteredRecipes, selectedFilters });
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

    const formattedFilters = Object.entries(selectedFilters).reduce((acc, [key, values]) => {
        let newAcc = [];
        switch (key) {
            case 'image':
                if (values.includes('Yes')) newAcc = [...newAcc, { prop: key, value: 'Yes', label: 'Has Image' }];
                if (values.includes('No')) newAcc = [...newAcc, { prop: key, value: 'No', label: 'No Image' }];
                break;
            case 'available':
                if (values.includes('Yes')) newAcc = [...newAcc, { prop: key, value: 'Yes', label: 'Available' }];
                if (values.includes('No')) newAcc = [...newAcc, { prop: key, value: 'No', label: 'Not Available' }];
                break;
            case 'wip':
                if (values.includes('Yes')) newAcc = [...newAcc, { prop: key, value: 'Yes', label: 'WIP' }];
                if (values.includes('No')) newAcc = [...newAcc, { prop: key, value: 'No', label: 'Successfully Created' }];
                break;
            case 'recommended':
                if (values.includes('Yes')) newAcc = [...newAcc, { prop: key, value: 'Yes', label: 'Recommended' }];
                if (values.includes('No')) newAcc = [...newAcc, { prop: key, value: 'No', label: 'Still Perfecting It' }];
                break;
            case 'search':
                // values is a string
                if (values) {
                    newAcc = [...newAcc, { prop: key, value: values, label: 'Search: ' + values }];
                }
                break;
            case 'ingredients':
                newAcc = [...newAcc, ...values.map(item => ({ prop: key, value: item, label: 'Ingredient: ' + item }))];
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

    // filter logic
    const [showFilters, setShowFilters] = useState(getRecipesFilterDrawerOpenLocalStorageKey());
    const menuFilterProps = { selectedFilters, setSelectedFilters };

    return (
        <NonDashboardPage mainClassName={`recipes ${isLoaded ? '' : 'isLoading'}`}>
            <NonDashboardPage.Header title='Recipes'>
                <GroceryListIcon
                    imageOnClick={() => {
                        if (showGroceryListModal) closeGroceryListModal();
                        else openGroceryListModal();
                        setShowGroceryListModal(toggle => !toggle);
                    }}
                />
            </NonDashboardPage.Header>

            <Greeting />

            {process.env.NODE_ENV === 'development' && (
                <UploadRecipe />
            )}

            <FilterChips
                formattedFilters={formattedFilters}
                onChipClick={(filter) => {
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
                }}
                onFilterDrawerClick={() => {
                    const newShowFilters = !showFilters;
                    setShowFilters(newShowFilters);
                    setRecipesFilterDrawerOpenLocalStorageKey(newShowFilters);
                }}
                showFilters={showFilters}
            />

            <RecipeSearchBar
                search={search}
                setSearch={setSearch}
                showFilters={showFilters}
            />

            <div className={`menu-filters-container ${showFilters ? 'show' : ''}`}>
                {featuredRecipes.CATEGORIES && (
                    <MenuFilter
                        label="Categories"
                        items={getMenuFilterItems(featuredRecipes.CATEGORIES)}
                        itemType="category"
                        {...menuFilterProps}
                    />
                )}
                {featuredRecipes.GENRES && (
                    <MenuFilter
                        label="Genres"
                        items={getMenuFilterItems(featuredRecipes.GENRES)}
                        itemType="genre"
                        {...menuFilterProps}
                    />
                )}
                <AdvancedFilters
                    featuredRecipes={featuredRecipes}
                    filterMapping={filterMapping}
                    menuFilterProps={menuFilterProps}
                />
            </div>

            {isLoaded ? (
                filteredRecipes.length ? (
                    <>
                        {groupedBy === RECIPE_LISTING_SCREEN_GROUPED_BY_GENRE ||
                            !!selectedFilters.ingredients?.length ||
                            groupedBy === RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_ASCENDING ||
                            groupedBy === RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_DESCENDING ? groupedFilteredRecipes.map(([genre, recipes]) => {
                                let genreLabel = genre;
                                if (selectedFilters.ingredients?.length) {
                                    const totalSearchIngredientsCount = selectedFilters.ingredients?.length;
                                    genreLabel = `${genre} / ${totalSearchIngredientsCount} matching ingredients`;
                                } else if (groupedBy === RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_ASCENDING || groupedBy === RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_DESCENDING) {
                                    genreLabel += genre === '1' ? ' ingredient' : ' ingredients';
                                }

                                return (
                                    <div className="recipes-grouped-container" key={genre}>
                                        <h4>{genreLabel}</h4>
                                        <div className="recipe-items-container">
                                            {recipes.map((item) =>
                                                <RecipeItem key={item.name} item={item} onClick={() => history.push('/recipes/' + convertToKebabCase(item.name))} />
                                            )}
                                        </div>
                                    </div>
                                )
                            }) : (
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
                                    setRecipesGroupedByLocalStorageKey(value);
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