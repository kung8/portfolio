import { useEffect, useState } from 'react';
import { MEAL_PLAN_LOCAL_STORAGE_KEY } from '../constants';

export const useMealPlanning = () => {
    const [show, setShow] = useState(false);
    const [mealPlan, setMealPlan] = useState([]);

    const handleOpen = () => {
        setShow(true);
        document.querySelector('#root').style.maxHeight = '100vh';
        document.querySelector('#root').style.overflowY = 'hidden';
    }

    const handleClose = () => {
        setShow(false);
        document.querySelector('#root').style.maxHeight = 'none';
        document.querySelector('#root').style.overflowY = 'auto';
    }

    const getMealPlanFromLocalStorage = () => {
        const mealPlan = localStorage.getItem(MEAL_PLAN_LOCAL_STORAGE_KEY);
        if (mealPlan) {
            return JSON.parse(mealPlan);
        }
        return [];
    }

    useEffect(() => {
        const storedMealPlan = getMealPlanFromLocalStorage();
        setMealPlan(storedMealPlan);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        localStorage.setItem(MEAL_PLAN_LOCAL_STORAGE_KEY, JSON.stringify(mealPlan));
    }, [mealPlan]);

    return { show, setShow, handleClose, handleOpen, mealPlan, setMealPlan };
}