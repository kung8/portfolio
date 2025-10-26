import { SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY } from '../constants.js';

export const getShowRecipeStorageOptions = () => {
    const storedShowRecipeStorageOptions = localStorage.getItem(SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY);
    if (storedShowRecipeStorageOptions) return storedShowRecipeStorageOptions === 'true' ? true : false;
    return true;
}