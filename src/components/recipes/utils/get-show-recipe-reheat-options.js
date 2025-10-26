import { SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY } from "../constants";

export const getShowRecipeReheatOptions = () => {
    const storedShowRecipeReheatOptions = localStorage.getItem(SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY);
    if (storedShowRecipeReheatOptions) return storedShowRecipeReheatOptions === 'true' ? true : false;
    return true;
}