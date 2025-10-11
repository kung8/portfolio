import { useCallback, useEffect, useState } from 'react';

import { GROCERY_LIST_LOCAL_STORAGE_KEY, GROCERY_LIST_VIEW, MEAL_PLAN_LOCAL_STORAGE_KEY, SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY } from '../constants';
import { handleModalClass } from '../utils';
import { useCategoryName } from './use-category-name';

export const useGroceryList = () => {
    const [show, setShow] = useState(false);

    // GROCERY LIST
    const [groceryList, setGroceryList] = useState([]);
    const { getCategoryName } = useCategoryName();

    const generateUUID = useCallback(() => {
        return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
    }, [])

    const getGroceryListFromLocalStorage = () => {
        let changed = false;
        const groceryList = localStorage.getItem(GROCERY_LIST_LOCAL_STORAGE_KEY);
        if (groceryList) {
            const list = JSON.parse(groceryList).map(ingredient => {
                if (!ingredient.category) {
                    ingredient.category = getCategoryName(ingredient.name);
                }
                // add a unique id to each ingredient item if it doesn't already have one
                if (!ingredient.id) {
                    changed = true;
                    ingredient.id = generateUUID();
                }
                // keep this in here to clean up the index property for existing ingredient items
                if (ingredient.index !== undefined && ingredient.index !== null) {
                    delete ingredient.index;
                    changed = true;
                }

                return ingredient;
            });
            if (changed) {
                localStorage.setItem(GROCERY_LIST_LOCAL_STORAGE_KEY, JSON.stringify(list));
            }
            return list;
        }
        return [];
    }


    // MEAL PLANNING
    const [mealPlan, setMealPlan] = useState([]);
    const getMealPlanFromLocalStorage = () => {
        let changed = false;
        const mealPlan = localStorage.getItem(MEAL_PLAN_LOCAL_STORAGE_KEY);
        if (mealPlan) {
            const parsed = JSON.parse(mealPlan);
            const list = parsed.map(meal => {
                // add a unique id to each meal plan item if it doesn't already have one
                if (!meal.id) {
                    meal.id = generateUUID();
                    changed = true;
                }
                // keep this in here to clean up the index property for existing meal plan items
                if (meal.index !== undefined && meal.index !== null) {
                    delete meal.index;
                    changed = true;
                }
                return meal;
            });
            if (changed) {
                localStorage.setItem(MEAL_PLAN_LOCAL_STORAGE_KEY, JSON.stringify(list));
            }
            return list;
        }
        return [];
    }


    // SHARED
    useEffect(() => {
        const storedGroceryList = getGroceryListFromLocalStorage();
        setGroceryList(storedGroceryList);

        const storedMealPlan = getMealPlanFromLocalStorage();
        setMealPlan(storedMealPlan);
        // eslint-disable-next-line
    }, []);

    const { handleClose, handleOpen } = handleModalClass('.grocery-list-modal', 'grocery-list-modal-overlay');

    const getSelectedViewFromLocalStorage = () => {
        return localStorage.getItem(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY) || GROCERY_LIST_VIEW;
    }
    const [selectedView, setSelectedView] = useState(getSelectedViewFromLocalStorage());

    return {
        show,
        setShow,
        groceryList,
        setGroceryList,
        mealPlan,
        setMealPlan,
        generateUUID,
        handleClose,
        handleOpen,
        updateLocalStorage: ({ groceryList, mealPlan }) => {
            if (groceryList) localStorage.setItem(GROCERY_LIST_LOCAL_STORAGE_KEY, JSON.stringify(groceryList));
            if (mealPlan) localStorage.setItem(MEAL_PLAN_LOCAL_STORAGE_KEY, JSON.stringify(mealPlan));
        },
        selectedView,
        setSelectedView,
    };
}