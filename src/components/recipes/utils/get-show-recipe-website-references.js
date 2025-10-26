import { SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY } from '../constants.js';

export const getShowRecipeWebsiteReferences = () => {
    const storedShowRecipeWebsitesReferences = localStorage.getItem(SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY);
    if (storedShowRecipeWebsitesReferences) return storedShowRecipeWebsitesReferences === 'true' ? true : false;
    return true;
}