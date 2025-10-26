import { SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY } from '../constants.js';

export const getShowRecipeNotes = () => {
    const storedShowRecipeNotes = localStorage.getItem(SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY);
    if (storedShowRecipeNotes) return storedShowRecipeNotes === 'true' ? true : false;
    return true;
}