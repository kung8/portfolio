import { useEffect, useState } from 'react';
import { useCategoryName } from './use-category-name';

const GROCERY_LIST_LOCAL_STORAGE_KEY = 'groceryList';

export const useGroceryList = () => {
    const [show, setShow] = useState(false);
    const [groceryList, setGroceryList] = useState([]);
    const { getCategoryName } = useCategoryName();

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
        const storedGroceryList = getGroceryListFromLocalStorage();
        setGroceryList(storedGroceryList);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        localStorage.setItem(GROCERY_LIST_LOCAL_STORAGE_KEY, JSON.stringify(groceryList));
    }, [groceryList]);

    return { show, setShow, handleClose, handleOpen, groceryList, setGroceryList };
}