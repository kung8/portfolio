import React, { useEffect, useState } from 'react';
import { DeleteGroceryListModal } from './DeleteGroceryListModal';
import { EditGroceryListItemModal } from './EditGroceryListItemModal';
import { DeleteMealPlanModal } from './DeleteMealPlanModal';
import { EditMealPlanModal } from './EditMealPlanModal';
import { GroceryListModalHeader } from './GroceryListModalHeader';
import { GroceryListModalContent } from './GroceryListModalContent';
import { MealPlanningModalContent } from './MealPlanningModalContent';
import {
    GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY,
    MEAL_PLAN_SORT_BY_LOCAL_STORAGE_KEY,
    GROCERY_LIST_VIEW,
    MEAL_PLANNING_VIEW,
    STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY,
} from '../constants';
import { ApplyToIngredientsInPlannedMealModal } from './ApplyToIngredientsInPlannedMealModal';
import { SettingsModal } from './SettingsModal';
import { getStartingDay } from '../utils';

export const GroceryListModal = ({
    generateUUID,
    groceryList,
    handleClose,
    mealPlan,
    setGroceryList,
    setMealPlan,
    updateLocalStorage,
    selectedView,
    setSelectedView,
}) => {
    // INGREDIENTS
    const [isDeleteIngredientModalOpen, setIsDeleteIngredientModalOpen] = useState(false);
    const [isEditIngredientModalOpen, setIsEditIngredientModalOpen] = useState(false);
    const [originalItemToEdit, setOriginalItemToEdit] = useState(null);
    const [itemToEdit, setItemToEdit] = useState(null);
    const groceryListSortByFromLocalStorage = localStorage.getItem(GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY);
    const [groceryListSortBy, setGroceryListSortBy] = useState(groceryListSortByFromLocalStorage || 'category');
    useEffect(() => {
        localStorage.setItem(GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY, groceryListSortBy);
    }, [groceryListSortBy]);

    const closeDeleteIngredientModal = () => {
        setIsDeleteIngredientModalOpen(false);
        setDeleteType(null);
    }

    const closeEditIngredientModal = () => {
        setIsEditIngredientModalOpen(false);
        setOriginalItemToEdit(null);
        setItemToEdit(null);
    }

    const updateItem = (originalItem, newItemValue) => {
        setGroceryList(prev => {
            const newGroceryList = [...prev];
            const foundItem = newGroceryList.findIndex((item) => originalItem.id === item.id);
            if (foundItem > -1) {
                const updatedItem = { ...originalItem, ...newItemValue };
                newGroceryList[foundItem] = updatedItem;
            }
            updateLocalStorage({ groceryList: newGroceryList })
            return newGroceryList;
        });
    }

    // MEAL PLANNING
    const [isDeleteMealPlanModalOpen, setIsDeleteMealPlanModalOpen] = useState(false);
    const [isEditMealPlanModalOpen, setIsEditMealPlanModalOpen] = useState(false);
    const [originalMealToEdit, setOriginalMealToEdit] = useState(null);
    const [mealToEdit, setMealToEdit] = useState(null);
    const mealPlanSortByFromLocalStorage = localStorage.getItem(MEAL_PLAN_SORT_BY_LOCAL_STORAGE_KEY);
    const [mealPlanSortBy, setMealPlanSortBy] = useState(mealPlanSortByFromLocalStorage || 'daily');
    useEffect(() => {
        localStorage.setItem(MEAL_PLAN_SORT_BY_LOCAL_STORAGE_KEY, mealPlanSortBy);
    }, [mealPlanSortBy]);

    const closeDeleteMealPlanModal = () => {
        setIsDeleteMealPlanModalOpen(false);
        setDeleteType(null);
    }

    const closeEditMealPlanModal = () => {
        setIsEditMealPlanModalOpen(false);
        setOriginalMealToEdit(null);
        setMealToEdit(null);
    }

    const updateMeal = (originalItem, newItemValue) => {
        if (!originalItem) {
            setMealPlan(prev => {
                const newMealPlan = [...prev, newItemValue];
                updateLocalStorage({ mealPlan: newMealPlan });
                return newMealPlan;
            });
            return;
        }

        setMealPlan(prev => {
            const newMealPlan = [...prev];
            const foundItem = newMealPlan.findIndex(item => originalItem.id === item.id);
            if (foundItem > -1) {
                const updatedItem = { ...originalItem, ...newItemValue };
                newMealPlan[foundItem] = updatedItem;
            } else {
                newMealPlan.push(newItemValue);
            }
            updateLocalStorage({ mealPlan: newMealPlan });
            return newMealPlan;
        });
    }



    // SHARED
    const [deleteType, setDeleteType] = useState(null);
    const isGroceryList = selectedView === GROCERY_LIST_VIEW;
    const isMealPlanning = selectedView === MEAL_PLANNING_VIEW;
    const checkLayeredOpenedClassName = () => isDeleteIngredientModalOpen || isEditIngredientModalOpen || isDeleteMealPlanModalOpen || isEditMealPlanModalOpen || isApplyToIngredientsInPlannedMealModalOpen || isSettingsModalOpen;



    // APPLY TO INGREDIENTS IN PLANNED MEAL
    const [isApplyToIngredientsInPlannedMealModalOpen, setIsApplyToIngredientsInPlannedMealModalOpen] = useState(false);
    const [appliedOriginalItem, setAppliedOriginalItem] = useState(null);
    const [appliedItem, setAppliedItem] = useState(null);
    const handleApply = (originalItem, newItem) => {
        const ogItem = originalItem || appliedOriginalItem;
        const newItemValue = newItem || appliedItem;

        const originalItemStartingDate = ogItem?.mealPlanningDateRange?.[0];
        const originalItemEndingDate = ogItem?.mealPlanningDateRange?.[1];
        const originalDate = ogItem?.date;
        const originalRecipeName = ogItem?.recipeName;

        setGroceryList(prev => {
            const newGroceryList = prev.map((item) => {
                const matches =
                    originalRecipeName === item?.recipeName &&
                    !!item?.recipeName && // don't update the ones that don't have a recipe name
                    originalItemStartingDate === item?.mealPlanningDateRange?.[0] &&
                    originalItemEndingDate === item?.mealPlanningDateRange?.[1] &&
                    originalDate === item?.date;
                if (matches) {
                    return { ...item, mealPlanningDateRange: newItemValue?.mealPlanningDateRange, date: newItemValue?.date, recipeName: newItemValue?.recipeName };
                }
                return item;
            });
            updateLocalStorage({ groceryList: newGroceryList });
            return newGroceryList;
        });
    }
    const closeApplyModal = () => {
        setIsApplyToIngredientsInPlannedMealModalOpen(false);
        setAppliedOriginalItem(null);
        setAppliedItem(null);
    }



    // SETTINGS MODAL
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
    const [startingDay, setStartingDay] = useState(getStartingDay());
    const closeSettingsModal = () => {
        setIsSettingsModalOpen(false);
    }
    const updateStartingDay = (day) => {
        localStorage.setItem(STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY, day);
    }



    return (
        <>
            <div className="grocery-list-modal-container">
                <div
                    id="grocery-list-modal-overlay"
                    className="overlay"
                    onClick={checkLayeredOpenedClassName() ? undefined : handleClose}
                />
                <div
                    id="grocery-list-modal-action-overlay"
                    className={`overlay ${checkLayeredOpenedClassName() ? 'layered-opened' : ''}`}
                    onClick={checkLayeredOpenedClassName() ?
                        () => {
                            if (isDeleteIngredientModalOpen) closeDeleteIngredientModal();
                            if (isEditIngredientModalOpen) closeEditIngredientModal();
                            if (isDeleteMealPlanModalOpen) closeDeleteMealPlanModal();
                            if (isEditMealPlanModalOpen) closeEditMealPlanModal();
                            if (isApplyToIngredientsInPlannedMealModalOpen) closeApplyModal();
                            if (isSettingsModalOpen) closeSettingsModal();
                        } : handleClose}
                />
                <div className="grocery-list-modal">
                    <GroceryListModalHeader
                        handleClose={handleClose}
                        setSelectedView={setSelectedView}
                        selectedView={selectedView}
                        openSettingsModal={() => setIsSettingsModalOpen(true)}
                    />
                    {isGroceryList && (
                        <GroceryListModalContent
                            {...{
                                generateUUID,
                                groceryList,
                                setGroceryList,
                                setSortBy: setGroceryListSortBy,
                                sortBy: groceryListSortBy,
                                setIsDeleteIngredientModalOpen,
                                setIsEditIngredientModalOpen,
                                setOriginalItemToEdit,
                                setItemToEdit,
                                setDeleteType,
                                updateItem,
                                updateLocalStorage,
                            }}
                        />
                    )}
                    {isMealPlanning && (
                        <MealPlanningModalContent
                            {...{
                                generateUUID,
                                mealPlan,
                                setMealPlan,
                                setIsDeleteMealPlanModalOpen,
                                setIsEditMealPlanModalOpen,
                                setSortBy: setMealPlanSortBy,
                                sortBy: mealPlanSortBy,
                                setOriginalMealToEdit,
                                setMealToEdit,
                                setDeleteType,
                                startingDay,
                                updateMeal,
                                updateLocalStorage,
                            }}
                        />
                    )}
                </div>
            </div>
            {isGroceryList && isDeleteIngredientModalOpen && (
                <DeleteGroceryListModal {...{ closeDeleteIngredientModal, deleteType, setGroceryList, updateLocalStorage }} />
            )}
            {isGroceryList && isEditIngredientModalOpen && originalItemToEdit && (
                <EditGroceryListItemModal
                    itemToEdit={itemToEdit}
                    setItemToEdit={setItemToEdit}
                    originalItemToEdit={originalItemToEdit}
                    updateItem={updateItem}
                    generateUUID={generateUUID}
                    closeEditIngredientModal={closeEditIngredientModal}

                    // when the ingredient is updated, update all the other shared ingredients with the same date
                    updateSharedIngredients={(originalItem, newItem) => {
                        const originalItemStartingDate = originalItem?.mealPlanningDateRange?.[0];
                        const originalItemEndingDate = originalItem?.mealPlanningDateRange?.[1];

                        // check to see if there are any additional ingredients for the same recipe name, date, and mealPlanningDateRange
                        const hasExistingGroceryListItem = groceryList.find(item =>
                            originalItem.recipeName === item.recipeName &&
                            !!item.recipeName && // don't update the ones that don't have a recipe name
                            originalItemStartingDate === item?.mealPlanningDateRange?.[0] &&
                            originalItemEndingDate === item?.mealPlanningDateRange?.[1] &&
                            originalItem.name !== item.name
                        );
                        if (hasExistingGroceryListItem) {
                            setIsApplyToIngredientsInPlannedMealModalOpen(true);
                            setAppliedOriginalItem(originalItem);
                            setAppliedItem(newItem);
                        }
                    }}

                    // only add if the original item didn't have a mealPlanningDateRange and date and ONLY if the meal plan doesn't already have the meal (doesn't matter about the purchase date)
                    addMealPlan={(newMeal, originalItem) => {
                        const hasExistingMealPlan = mealPlan.find(meal => {
                            const startMealDate = meal?.mealPlanningDateRange?.[0];
                            const endMealDate = meal?.mealPlanningDateRange?.[1];
                            const originalStartMealDate = originalItem?.mealPlanningDateRange?.[0];
                            const originalEndMealDate = originalItem?.mealPlanningDateRange?.[1];
                            return startMealDate === originalStartMealDate && endMealDate === originalEndMealDate && meal.recipeName === originalItem.recipeName;
                        });

                        // only add if (1) the meal doesn't already exist and (2) the newMeal has the required fields: recipeName and mealPlanningDateRange
                        if (!hasExistingMealPlan && newMeal.recipeName && newMeal.mealPlanningDateRange?.[0] && newMeal.mealPlanningDateRange?.[1]) {
                            setMealPlan(prev => {
                                const newMealPlan = [...prev, newMeal];
                                updateLocalStorage({ mealPlan: newMealPlan });
                                return newMealPlan;
                            });
                        }
                    }}

                    // when the ingredient's meal plan date is update, need to update the meal plan date as well
                    updateMealPlan={(originalItem, newItem) => {
                        const originalItemStartingDate = originalItem?.mealPlanningDateRange?.[0];
                        const originalItemEndingDate = originalItem?.mealPlanningDateRange?.[1];
                        setMealPlan(prev => {
                            const newMealPlan = prev.map((meal => {
                                const startMealDate = meal?.mealPlanningDateRange?.[0];
                                const endMealDate = meal?.mealPlanningDateRange?.[1];
                                const originalRecipeName = originalItem?.recipeName;
                                const mealRecipeName = meal?.recipeName;

                                if (startMealDate === originalItemStartingDate && endMealDate === originalItemEndingDate && originalRecipeName === mealRecipeName) {
                                    return { ...meal, mealPlanningDateRange: newItem.mealPlanningDateRange, date: newItem.date, recipeName: newItem.recipeName };
                                }
                                return meal;
                            }));
                            updateLocalStorage({ mealPlan: newMealPlan });
                            return newMealPlan;
                        });
                    }}
                />
            )}
            {isMealPlanning && isDeleteMealPlanModalOpen && (
                <DeleteMealPlanModal {...{ closeDeleteMealPlanModal, deleteType, setMealPlan, updateLocalStorage }} />
            )}
            {isMealPlanning && isEditMealPlanModalOpen && (
                <EditMealPlanModal
                    generateUUID={generateUUID}
                    mealToEdit={mealToEdit}
                    setMealToEdit={setMealToEdit}
                    originalMealToEdit={originalMealToEdit}
                    updateMeal={updateMeal}
                    closeEditMealPlanModal={closeEditMealPlanModal}

                    // when the meal plan is updated, update all the ingredients with the same date
                    updateSharedIngredients={(originalMeal, newMeal) => handleApply(originalMeal, newMeal)}
                />
            )}
            {isApplyToIngredientsInPlannedMealModalOpen && (
                <ApplyToIngredientsInPlannedMealModal
                    closeModal={closeApplyModal}
                    handleApply={() => {
                        handleApply();
                        closeApplyModal();
                    }}
                />
            )}
            {isSettingsModalOpen && (
                <SettingsModal
                    closeModal={closeSettingsModal}
                    handleApply={() => {
                        updateStartingDay(startingDay);
                        closeSettingsModal();
                    }}
                    setStartingDay={setStartingDay}
                    startingDay={startingDay}
                />
            )}
        </>
    )
}