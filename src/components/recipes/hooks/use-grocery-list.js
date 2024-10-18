import { useEffect, useState } from 'react';
import { useCategoryName } from './use-category-name';
import { GROCERY_LIST_LOCAL_STORAGE_KEY, MEAL_PLAN_LOCAL_STORAGE_KEY } from '../constants';
import { handleModalClass } from '../utils/handle-modal-class';

export const useGroceryList = () => {
    const [show, setShow] = useState(false);
    const [groceryList, setGroceryList] = useState([]);
    const { getCategoryName } = useCategoryName();

    const getGroceryListFromLocalStorage = () => {
        const groceryList = localStorage.getItem(GROCERY_LIST_LOCAL_STORAGE_KEY);
        if (groceryList) {
            return JSON.parse(groceryList).map(ingredient => {
                if (!ingredient.category) {
                    ingredient.category = getCategoryName(ingredient.name);
                }
                return ingredient;
            });
        }
        return [];
    }

    useEffect(() => {
        localStorage.setItem(GROCERY_LIST_LOCAL_STORAGE_KEY, JSON.stringify(groceryList));
    }, [groceryList]);





    // MEAL PLANNING
    const [mealPlan, setMealPlan] = useState([]);
    const getMealPlanFromLocalStorage = () => {
        const mealPlan = localStorage.getItem(MEAL_PLAN_LOCAL_STORAGE_KEY);
        if (mealPlan) {
            return JSON.parse(mealPlan);
        }
        return [];
    }

    useEffect(() => {
        localStorage.setItem(MEAL_PLAN_LOCAL_STORAGE_KEY, JSON.stringify(mealPlan));
    }, [mealPlan]);





    // SHARED
    useEffect(() => {
        const storedGroceryList = getGroceryListFromLocalStorage();
        setGroceryList(storedGroceryList);

        const storedMealPlan = getMealPlanFromLocalStorage();
        setMealPlan(storedMealPlan);
        // eslint-disable-next-line
    }, []);





    const { handleClose, handleOpen } = handleModalClass('.grocery-list-modal', 'grocery-list-modal-overlay');

    return {
        show,
        setShow,
        groceryList,
        setGroceryList,
        mealPlan,
        setMealPlan,
        handleClose,
        handleOpen,
    };
}