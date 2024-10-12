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
    SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY,
} from '../constants';

export const GroceryListModal = ({
    show,
    handleClose,
    groceryList,
    setGroceryList,
    mealPlan,
    setMealPlan,
    handleSelectedViewChange,
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
            const foundItem = newGroceryList.findIndex((item) => originalItem.index === item.index && originalItem.name === item.name);
            if (foundItem > -1) {
                const updatedItem = { ...originalItem, ...newItemValue };
                newGroceryList[foundItem] = updatedItem;
            }
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
            setMealPlan(prev => [...prev, newItemValue]);
            return;
        }

        setMealPlan(prev => {
            const newMealPlan = [...prev];
            const foundItem = newMealPlan.findIndex(item => originalItem.date === item.date && originalItem.type === item.type);
            if (foundItem > -1) {
                const updatedItem = { ...originalItem, ...newItemValue };
                newMealPlan[foundItem] = updatedItem;
            } else {
                newMealPlan.push(newItemValue);
            }
            return newMealPlan;
        });
    }




    // SHARED
    const [deleteType, setDeleteType] = useState(null);
    const showClass = show || isDeleteIngredientModalOpen || isEditIngredientModalOpen || isDeleteMealPlanModalOpen || isEditMealPlanModalOpen ? 'opened' : '';
    const GROCERY_LIST_VIEW = 'groceryList';
    const MEAL_PLANNING_VIEW = 'mealPlanning';
    const selectedViewFromLocalStorage = localStorage.getItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY);
    const [selectedView, setSelectedView] = useState(selectedViewFromLocalStorage || GROCERY_LIST_VIEW);
    useEffect(() => {
        localStorage.setItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY, selectedView);
        handleSelectedViewChange(selectedView);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedView]);
    const isGroceryList = selectedView === GROCERY_LIST_VIEW;
    const isMealPlanning = selectedView === MEAL_PLANNING_VIEW;

    const checkLayeredOpenedClassName = () => isDeleteIngredientModalOpen || isEditIngredientModalOpen || isDeleteMealPlanModalOpen || isEditMealPlanModalOpen;

    return (
        <>
            <div className="grocery-list-modal-container">
                <div
                    className={`overlay ${showClass} ${checkLayeredOpenedClassName() ? 'layered-opened' : ''}`}
                    onClick={checkLayeredOpenedClassName() ?
                        () => {
                            if (isDeleteIngredientModalOpen) closeDeleteIngredientModal();
                            if (isEditIngredientModalOpen) closeEditIngredientModal();
                            if (isDeleteMealPlanModalOpen) closeDeleteMealPlanModal();
                            if (isEditMealPlanModalOpen) closeEditMealPlanModal();
                        } : handleClose}
                />
                <div className={`grocery-list-modal ${showClass}`}>
                    <GroceryListModalHeader
                        handleClose={handleClose}
                        setSelectedView={setSelectedView}
                        selectedView={selectedView}
                    />
                    {isGroceryList && (
                        <GroceryListModalContent
                            {...{
                                groceryList,
                                setGroceryList,
                                setSortBy: setGroceryListSortBy,
                                sortBy: groceryListSortBy,
                                setIsDeleteIngredientModalOpen,
                                setIsEditIngredientModalOpen,
                                setOriginalItemToEdit,
                                setItemToEdit,
                                setDeleteType,
                                updateItem
                            }}
                        />
                    )}
                    {isMealPlanning && (
                        <MealPlanningModalContent
                            {...{
                                mealPlan,
                                setMealPlan,
                                setIsDeleteMealPlanModalOpen,
                                setIsEditMealPlanModalOpen,
                                setSortBy: setMealPlanSortBy,
                                sortBy: mealPlanSortBy,
                                setOriginalMealToEdit,
                                setMealToEdit,
                                setDeleteType,
                                updateMeal
                            }}
                        />
                    )}
                </div>
            </div>
            {isGroceryList && isDeleteIngredientModalOpen && (
                <DeleteGroceryListModal {...{ closeDeleteIngredientModal, deleteType, setGroceryList }} />
            )}
            {isGroceryList && isEditIngredientModalOpen && originalItemToEdit && (
                <EditGroceryListItemModal
                    itemToEdit={itemToEdit}
                    setItemToEdit={setItemToEdit}
                    originalItemToEdit={originalItemToEdit}
                    updateItem={updateItem}
                    closeEditIngredientModal={closeEditIngredientModal}

                    // when the ingredient is updated, update all the other shared ingredients with the same date
                    updateSharedIngredients={(originalItem, newItem) => {
                        const originalItemStartingDate = originalItem?.mealPlanningDateRange?.[0];
                        const originalItemEndingDate = originalItem?.mealPlanningDateRange?.[1];
                        const originalDate = originalItem?.date;
                        setGroceryList(prev => {
                            const newGroceryList = prev.map((item) => {
                                const matches = originalItem.recipeName === item.recipeName &&
                                    !!item.recipeName && // don't update the ones that don't have a recipe name
                                    originalItemStartingDate === item?.mealPlanningDateRange?.[0] &&
                                    originalItemEndingDate === item?.mealPlanningDateRange?.[1] &&
                                    originalDate === item.date;
                                if (matches) {
                                    return { ...item,  mealPlanningDateRange: newItem.mealPlanningDateRange, date: newItem.date, recipeName: newItem.recipeName };
                                }
                                return item;
                            });
                            return newGroceryList;
                        });
                    }}

                    // only add if the original item didn't have a mealPlanningDateRange and date
                    addMealPlan={(originalItem, newMeal) => {
                        const originalStartDate = originalItem?.mealPlanningDateRange?.[0];
                        const originalEndDate = originalItem?.mealPlanningDateRange?.[1];
                        const originalDate = originalItem?.date;

                        if (!originalStartDate && !originalEndDate && !originalDate) {
                            setMealPlan(prev => [...prev, newMeal]);
                        }
                    }}

                    // when the ingredient's meal plan date is update, need to update the meal plan date as well
                    updateMealPlan={(originalItem, newItem) => {
                        const originalItemStartingDate = originalItem?.mealPlanningDateRange?.[0];
                        const originalItemEndingDate = originalItem?.mealPlanningDateRange?.[1];
                        setMealPlan(prev => prev.map((meal => {
                            const startMealDate = meal?.mealPlanningDateRange?.[0];
                            const endMealDate = meal?.mealPlanningDateRange?.[1];
                            
                            if (startMealDate === originalItemStartingDate && endMealDate === originalItemEndingDate) {
                                return { ...meal, mealPlanningDateRange: newItem.mealPlanningDateRange, date: newItem.date, recipeName: newItem.recipeName };
                            }
                            return meal;
                        })));
                    }}
                />
            )}
            {isMealPlanning && isDeleteMealPlanModalOpen && (
                <DeleteMealPlanModal {...{ closeDeleteMealPlanModal, deleteType, setMealPlan }} />
            )}
            {isMealPlanning && isEditMealPlanModalOpen && (
                <EditMealPlanModal
                    mealToEdit={mealToEdit}
                    setMealToEdit={setMealToEdit}
                    originalMealToEdit={originalMealToEdit}
                    updateMeal={updateMeal}
                    closeEditMealPlanModal={closeEditMealPlanModal}

                    // when the meal plan is updated, update all the ingredients with the same date
                    updateSharedIngredients={(originalMeal, newMeal) => {
                        const originalMealDate = originalMeal.date;
                        const originalStartDate = originalMeal?.mealPlanningDateRange?.[0];
                        const originalEndDate = originalMeal?.mealPlanningDateRange?.[1];
                        const originalRecipeName = originalMeal?.recipeName;

                        const newMealDate = newMeal.date;
                        const newStartDate = newMeal?.mealPlanningDateRange?.[0];
                        const newEndDate = newMeal?.mealPlanningDateRange?.[1];
                        const newRecipeName = newMeal.recipeName;

                        setGroceryList(prev => {
                            const newGroceryList = prev.map((item) => {
                                if (
                                    originalStartDate === item?.mealPlanningDateRange?.[0] &&
                                    originalEndDate === item?.mealPlanningDateRange?.[1] &&
                                    originalMealDate === item?.date &&
                                    originalRecipeName === item.recipeName &&
                                    !!item.recipeName // don't update the ones that don't have a recipe name
                                ) {
                                    return {
                                        ...item,
                                        recipeName: newRecipeName,
                                        mealPlanningDateRange: [newStartDate, newEndDate],
                                        date: newMealDate,
                                    };
                                }
                                return item;
                            });
                            return newGroceryList;
                        });
                    }}
                />
            )}
        </>
    )
}