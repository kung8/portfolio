import { SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY } from '../constants.js';

export const getShowRecipeFigures = () => {
    const storedShowRecipeFigures = localStorage.getItem(SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY);
    if (storedShowRecipeFigures) return storedShowRecipeFigures === 'true' ? true : false;
    return true;
}