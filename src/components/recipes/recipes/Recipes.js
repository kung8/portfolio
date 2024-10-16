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
import { useMealPlanning } from '../hooks/use-meal-planning';
import { SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY } from '../constants';
import { RecipeFilterModal } from './RecipeFilterModal';
import { handleModalClass } from '../utils/handle-modal-class';

export const Recipes = ({ history }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', undefined];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;
    const [search, setSearch] = useState('');
    const [showFilters, setShowFilters] = useState(false);
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
            setShowFilters(false);
            setShowArrow(false);
            setSelectedFilters(initialSelectedFilters);
            window.removeEventListener('scroll', onScroll);
        }
        // eslint-disable-next-line
    }, []);

    const { show: showGroceryList, setShow: setShowGroceryList, handleClose: closeGroceryListModal, handleOpen: openGroceryListModal, groceryList, setGroceryList } = useGroceryList();
    const { show: showMealPlanning, setShow: setShowMealPlanning, handleClose: closeMealPlanningModal, handleOpen: openMealPlanningModal, mealPlan, setMealPlan } = useMealPlanning();
    const { filteredRecipeBySelectedFilters } = useFilters({ filteredRecipes, selectedFilters });

    const getModalClose = () => {
        const selectedModalView = localStorage.getItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY);
        if (selectedModalView === 'mealPlanning') {
            closeMealPlanningModal();
        } else if (selectedModalView === 'groceryList') {
            closeGroceryListModal();
        }
    }

    const getModalOpen = () => {
        const selectedModalView = localStorage.getItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY);
        if (selectedModalView === 'mealPlanning') {
            openMealPlanningModal();
        } else if (selectedModalView === 'groceryList') {
            openGroceryListModal();
        }
    }

    useEffect(() => {
        handleModalClass(showFilters, '.modal-tray', 'modal-tray-overlay');
    }, [showFilters]);

    return (
        <NonDashboardPage
            mainClassName={`recipes ${isLoaded ? '' : 'isLoading'}`}
            onClick={() => {
                if (!showFilters) return;
                const filtersContainer = document.querySelector('.filters-container');
                if (filtersContainer) filtersContainer.classList.add('is-closing');
                setTimeout(() => {
                    if (filtersContainer) filtersContainer.classList.remove('is-closing');
                    setShowFilters(false);
                }, 300);
            }}
        >
            <NonDashboardPage.Header title='Recipes'>
                <SearchAndFilterContainer
                    {...{
                        filteredRecipes,
                        search,
                        selectedFilters,
                        setSearch,
                        setSelectedFilters,
                        setShow: setShowFilters,
                        show: showFilters,
                        totalAvailableRecipes: recipes.filter(item => item.available).length,
                        groceryList,
                        handleClose: getModalClose,
                        handleOpen: getModalOpen,
                        showGroceryList,
                        setGroceryList,
                        imageOnClick: () => {
                            const selectedModalView = localStorage.getItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY);
                            if (selectedModalView === 'mealPlanning') {
                                if (showMealPlanning) {
                                    closeMealPlanningModal();
                                } else {
                                    openMealPlanningModal();
                                }
                            } else if (selectedModalView === 'groceryList') {
                                if (showGroceryList) {
                                    closeGroceryListModal();
                                } else {
                                    openGroceryListModal();
                                }
                            }
                        },
                    }}
                />
            </NonDashboardPage.Header>

            <div id="modal-tray-overlay" className="overlay" onClick={() => setShowFilters(false)} />
            <RecipeFilterModal {...{
                filteredRecipes,
                search,
                selectedFilters,
                setSearch,
                setSelectedFilters,
                setShow: setShowFilters,
                totalAvailableRecipes: recipes.filter(item => item.available).length,
                closeFilters: () => setShowFilters(false)
            }} />

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
                handleClose={getModalClose}
                handleSelectedViewChange={(newSelectedView) => {
                    setShowMealPlanning(newSelectedView === 'mealPlanning');
                    setShowGroceryList(newSelectedView === 'groceryList');
                }}
                mealPlan={mealPlan}
                setGroceryList={setGroceryList}
                setMealPlan={setMealPlan}
                show={showGroceryList || showMealPlanning}
                showGroceryList={showGroceryList}
            />
        </NonDashboardPage>
    )
}

/*
    TODO: add icons on the thumbnails
*/