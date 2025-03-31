import React, { useEffect, useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getAsyncData, useGetData } from '../../../hooks';
import { Loader } from '../../Loader';
import { NonDashboardPage } from '../../Page';
import list from '../../../Assets/list.png';
import { GroceryListModal } from '../grocery-list-modal/GroceryListModal';
import { useGroceryList } from '../hooks/use-grocery-list';
import { EmailRecipe } from '../email-recipe-form/EmailRecipeForm';
import { AddToGroceryListModal } from './AddToGroceryListModal';
import { GROCERY_LIST_VIEW, SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY } from '../constants';
import { categorizeRecipeType } from '../categorize-recipe-type';
import { RecipeImageModal } from './RecipeImageModal';
import { RecipeContext } from './RecipeContext';
import { getIngredientData, handleModalClass } from '../utils';
import { RecipeDetails } from './RecipeDetails';

export const Recipe = ({ match }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const { id } = match.params;
    const { data: recipe = [] } = useGetData('recipes', id);
    const item = recipe[0];
    const [selectedFigure, setSelectedFigure] = useState(null);
    const [selectedFigureLabel, setSelectedFigureLabel] = useState(null);

    const queryClient = useQueryClient();
    const queryKey = ['getData', 'recipes', id];
    const cache = queryClient.getQueryData(queryKey)?.data?.length;

    // allowing users to update yield amounts
    const [appliedYieldAmount, setAppliedYieldAmount] = useState(item?.yields?.amount ?? 1);
    const originalYieldAmount = item?.yields?.amount ?? 1;
    useEffect(() => {
        if (item) {
            setAppliedYieldAmount(item?.yields?.amount ?? 1);
        }
    }, [item]);
    const conversionRate = appliedYieldAmount / originalYieldAmount;

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


    // memoized ingredients
    const localIngredients = useMemo(() => {
        return item?.ingredients?.map(i => ({ ...i, id: i.id ?? generateUUID() })) ?? [];
        // eslint-disable-next-line
    }, [JSON.stringify(item?.ingredients)]);


    useEffect(() => {
        let mounted = true;
        setIsLoaded(false);
        if (cache) {
            setIsLoaded(true);
        } else {
            setTimeout(() => {
                if (mounted) {
                    setIsLoaded(true);
                }
            }, 3000);
        }
        return () => {
            mounted = false;
            setIsLoaded(false);
            setSelectedFigure(null);
            setSelectedFigureLabel(null);
            setSelectedIngredients([]);
        }
        // eslint-disable-next-line
    }, []);

    const separatedIngredients = !!item?.separated && localIngredients &&
        localIngredients.reduce((acc, ingredient) => {
            if (!ingredient.id) ingredient.id = generateUUID();
            if (ingredient.section && !acc[ingredient.section]) acc[ingredient.section] = [];
            if (ingredient.section && acc[ingredient.section]) {
                acc[ingredient.section].push({ ...ingredient, linkId: ingredient.link?.id });
            }
            return acc;
        }, {});

    const formatSeparatedIngredients = () => {
        const finalIngredients = [];
        for (const key in separatedIngredients) {
            const ingredients = separatedIngredients[key];
            finalIngredients.push([key, ingredients]);
        }
        return finalIngredients;
    }

    const formattedIngredients = separatedIngredients && formatSeparatedIngredients();

    const formatSeparatedDirections = () => {
        let figureCount = 1;
        const separatedDirections = item.directions.reduce((acc, direction) => {
            if (direction.type && !acc[direction.type]) acc[direction.type] = [];
            if (direction.type && acc[direction.type]) {
                const newDirection = { ...direction };
                if (direction.video || direction.img) {
                    newDirection.figure = figureCount;
                    figureCount += 1;
                }

                acc[direction.type].push(newDirection);
            }
            return acc;
        }, {});

        const finalDirections = [];

        for (const key in separatedDirections) {
            const directions = separatedDirections[key];
            finalDirections.push([key, directions]);
        }

        return finalDirections;
    }

    const formattedDirections = !!item?.separated && item?.directions ? formatSeparatedDirections() : null;

    const figures = formattedDirections?.flat(2)?.filter(step => step.video || step.img) ?? [];
    const nonSeparatedFigures = item?.directions?.filter(step => step.video || step.img) ?? [];

    useEffect(() => {
        if (selectedFigure) {
            const el = document.getElementById(`figure-${selectedFigure}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
            setSelectedFigure(null);
            setSelectedFigureLabel(null);
        }
    }, [selectedFigure]);

    useEffect(() => {
        if (selectedFigureLabel) {
            const el = document.getElementById(`figure-label-${selectedFigureLabel}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
            setSelectedFigure(null);
            setSelectedFigureLabel(null);
        }
    }, [selectedFigureLabel]);

    // add to grocery list modal
    const { handleClose: handleAddToGroceryListModalClose, handleOpen: handleAddToGroceryListModalOpen } = handleModalClass('.add-to-grocery-list-modal', 'add-to-grocery-list-modal-overlay');



    // image modal
    const { handleClose: handleCloseImageModal, handleOpen: handleOpenImageModal } = handleModalClass('.recipe-image-modal', 'recipe-image-modal-overlay');
    const [selectedRecipeImage, setSelectedRecipeImage] = useState(null);
    const openRecipeImageModal = (image) => {
        handleOpenImageModal();
        setSelectedRecipeImage(image);
    }

    return (
        <NonDashboardPage mainClassName={`recipe page ${isLoaded ? '' : 'isLoading'}`}>
            <NonDashboardPage.Header
                backRoute='/recipes'
                backText='Back to Recipes'
                title={item?.name ?? ''}
                customTitle={(
                    <div className="custom-heading-wrapper">
                        <h1 className="heading">{item?.name ?? ''}</h1>
                        <img
                            src={list}
                            alt="list"
                            className="list-img"
                            onClick={() => {
                                if (showGroceryListModal) closeGroceryListModal();
                                else openGroceryListModal();
                                setShowGroceryListModal(toggle => !toggle);
                            }}
                        />
                    </div>
                )}
            >
                {item?.recipeFinder && (
                    <h4 className="recipe-credit">Credit to {item.recipeFinder}</h4>
                )}
            </NonDashboardPage.Header>
            <RecipeContext.Provider
                value={{
                    appliedYieldAmount,
                    conversionRate,
                    figures,
                    formattedDirections,
                    formattedIngredients,
                    generateUUID,
                    handleAddToGroceryListModalOpen,
                    handleCloseImageModal,
                    item,
                    localIngredients,
                    nonSeparatedFigures,
                    openRecipeImageModal,
                    selectedIngredients,
                    selectedRecipeImage,
                    setAppliedYieldAmount,
                    setSelectedFigure,
                    setSelectedFigureLabel,
                    setSelectedIngredients,
                }}
            >
                {item && isLoaded ? <RecipeDetails /> : (
                    <div className="loader-container">
                        <Loader />
                    </div>
                )}

                {item && isLoaded && <EmailRecipe />}
                <RecipeImageModal />
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

                <div id="add-to-grocery-list-modal-overlay" className="overlay" onClick={handleAddToGroceryListModalClose} />
                <AddToGroceryListModal
                    closeModal={handleAddToGroceryListModalClose}
                    initialType={categorizeRecipeType(item?.category?.[0])}
                    onAdd={async (date, type, mealPlanningDateRange) => {
                        // Adds if it doesn't already exist inside the meal plan
                        const hasMealPlanItem = mealPlan.find(meal =>
                            meal?.recipeName === item.name &&
                            meal?.date === date &&
                            meal?.type === type &&
                            meal?.mealPlanningDateRange?.[0] === mealPlanningDateRange?.[0] &&
                            meal?.mealPlanningDateRange?.[1] === mealPlanningDateRange?.[1]
                        );
                        const newMealPlan = [...mealPlan];
                        if (!hasMealPlanItem) {
                            newMealPlan.push({ id: generateUUID(), recipeName: item.name, date, type, checked: false, mealPlanningDateRange });
                            setMealPlan(newMealPlan);
                        }

                        // Handle selected view for modal
                        localStorage.setItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY, GROCERY_LIST_VIEW);
                        setSelectedView(GROCERY_LIST_VIEW);

                        // Adds to Grocery List
                        const newIngredientsToAdd = await [...groceryList, ...selectedIngredients.map(async item => {
                            if (item.linkId) {
                                const response = await getAsyncData('recipes', item.linkId);
                                return response?.data?.[0]?.ingredients?.map((ingredient) => getIngredientData(response.data[0].name, ingredient, ingredient.id ?? generateUUID()));
                            }
                            return { ...item, checked: false, date, mealPlanningDateRange };
                        })];

                        Promise.all(newIngredientsToAdd).then((newGroceryList) => {
                            setGroceryList(newGroceryList.flat());
                            updateLocalStorage({ groceryList: newGroceryList.flat(), mealPlan: newMealPlan });
                            handleAddToGroceryListModalClose();
                            setTimeout(() => {
                                setShowGroceryListModal(true);
                                openGroceryListModal();
                                setSelectedIngredients([]);
                            }, 500);
                        });
                    }}
                />
            </RecipeContext.Provider>
        </NonDashboardPage>
    )
}