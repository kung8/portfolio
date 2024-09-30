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

export const Recipes = ({ history }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', undefined];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
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
            setShow(false);
            setShowArrow(false);
            setSelectedFilters(initialSelectedFilters);
            window.removeEventListener('scroll', onScroll);
        }
        // eslint-disable-next-line
    }, []);

    const resetShownFilters = () => {
        if (!show) return;
        const filtersContainer = document.querySelector('.filters-container');
        if (filtersContainer) filtersContainer.classList.add('is-closing');
        setTimeout(() => {
            if (filtersContainer) filtersContainer.classList.remove('is-closing');
            setShow(false);
        }, 300);
    }

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

    const imageOnClick = () => {
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
    }

    const filterProps = {
        filteredRecipes,
        search,
        selectedFilters,
        setSearch,
        setSelectedFilters,
        setShow,
        // setShownFilters,
        show,
        // shownFilters,
        totalAvailableRecipes: recipes.filter(item => item.available).length,
    };

    const groceryListProps = {
        groceryList,
        handleClose: getModalClose,
        handleOpen: getModalOpen,
        showGroceryList,
        setGroceryList,
    };

    const handleSelectedViewChange = (newSelectedView) => {
        setShowMealPlanning(newSelectedView === 'mealPlanning');
        setShowGroceryList(newSelectedView === 'groceryList');
    }    

    useEffect(() => {
        const rootId = document.getElementById('root');
        if (show) {
            rootId.style.overflowY = 'hidden';
            rootId.style.height = '100vh';
        } else {
            rootId.style.overflowY = '';
            rootId.style.height = '';
        }
        // eslint-disable-next-line
    }, [show]);

    return (
        <NonDashboardPage mainClassName={`recipes ${isLoaded ? '' : 'isLoading'}`} onClick={resetShownFilters}>
            <NonDashboardPage.Header title='Recipes'>
                <SearchAndFilterContainer {...{ ...filterProps, ...groceryListProps, imageOnClick }} />
            </NonDashboardPage.Header>

            {show && <RecipeFilterModal {...{ ...filterProps, closeFilters: () => setShow(false) }} />}

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

            {(showGroceryList || showMealPlanning) && (
                <GroceryListModal
                    {...{
                        ...groceryListProps,
                        show: showGroceryList || showMealPlanning,
                        mealPlan,
                        setMealPlan,
                        handleSelectedViewChange,
                    }}
                />
            )}
        </NonDashboardPage>
    )
}

/*
    TODO: add icons on the thumbnails
*/