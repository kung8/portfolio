import React, { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
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

export const Recipes = ({ history }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', undefined];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;
    const [search, setSearch] = useState('');
    const initialSelectedFilters = {
        category: [],
        diet: [],
        genre: [],
        method: [],
        protein: [],
        type: [],
    }
    const [selectedFilters, setSelectedFilters] = useState(initialSelectedFilters);
    const [showArrow, setShowArrow] = useState(false);

    const { data: recipes = [] } = useGetData('recipes');

    const filteredRecipes = recipes.filter(item => {
        if (search === '') return item;
        const searchValue = search.toLowerCase();
        if (
            item.name.toLowerCase().includes(searchValue) ||
            item.cardName.toLowerCase().includes(searchValue) ||
            item.ingredients?.some(ingredient => ingredient.name.toLowerCase().includes(searchValue)) ||
            item.supplies?.some(supply => supply.name.toLowerCase().includes(searchValue))
        ) return item;
        return null;
    });

    const { filteredRecipeBySelectedFilters } = useFilters({ filteredRecipes, selectedFilters });

    const onScroll = () => {
        const scrollHeight = window.scrollY;
        if (scrollHeight > 300 && !showArrow) {
            setShowArrow(true);
        } else {
            if (showArrow) setShowArrow(false);
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
            setSearch('');
            handleCloseFilterModal();
            setShowArrow(false);
            setSelectedFilters(initialSelectedFilters);
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
    } = useGroceryList();

    // filters modal
    const [showFiltersModal, setShowFiltersModal] = useState(false);
    const { handleClose: handleCloseFilterModal, handleOpen: handleOpenFilterModal } = handleModalClass('.modal-tray', 'modal-tray-overlay');

    return (
        <NonDashboardPage
            mainClassName={`recipes ${isLoaded ? '' : 'isLoading'}`}
            onClick={() => handleCloseFilterModal()}
        >
            <NonDashboardPage.Header title='Recipes'>
                <SearchAndFilterContainer
                    {...{
                        filterOnClick: () => {
                            if (showFiltersModal) handleCloseFilterModal();
                            else handleOpenFilterModal();
                            setShowFiltersModal((toggle) => !toggle);
                        },
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

            <div
                id="modal-tray-overlay"
                className="overlay"
                onClick={handleCloseFilterModal}
            />
            <RecipeFilterModal
                {...{
                    closeFilters: handleCloseFilterModal,
                    filteredRecipes,
                    selectedFilters,
                    setSelectedFilters,
                    totalAvailableRecipes: recipes.filter(item => item.available).length,
                }}
            />
            {isLoaded ? (
                filteredRecipes.length ? (
                    <>
                        <div className="recipe-items-container">
                            {filteredRecipeBySelectedFilters.map((item) =>
                                <RecipeItem key={item.name} item={item} onClick={() => history.push('/recipes/' + convertToKebabCase(item.name))} />
                            )}
                        </div>
                        <p className="chef-recommended-container">
                            <span className="heart" />
                            <span>= Chef (AKA me) Recommended</span>
                        </p>
                    </>
                ) : <EmptyRecipeContainer />
            ) : <LoaderContainer />}

            {isLoaded && (
                <EmailRecipe />
            )}

            {showArrow && <TopArrow />}

            <GroceryListModal
                groceryList={groceryList}
                handleClose={() => {
                    closeGroceryListModal();
                    setShowGroceryListModal(false);
                }}
                mealPlan={mealPlan}
                setGroceryList={setGroceryList}
                setMealPlan={setMealPlan}
                updateLocalStorage={updateLocalStorage}
            />
        </NonDashboardPage>
    )
}

/*
    TODO: add icons on the thumbnails
*/