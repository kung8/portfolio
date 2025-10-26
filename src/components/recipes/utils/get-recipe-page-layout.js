import { SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY } from "../constants";

export const pageLayoutOptions = [
    { id: 'standard', label: 'Standard' }, // DESKTOP: ingredients on left, directions on right; MOBILE: ingredients first, directions second
    { id: 'stacked', label: 'Stacked' }, // Ingredients first, directions second (both DESKTOP and MOBILE)
]

export const getRecipePageLayout = () => {
    const storedRecipePageLayout = localStorage.getItem(SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY);
    if (storedRecipePageLayout) return storedRecipePageLayout;
    return 'standard';
}