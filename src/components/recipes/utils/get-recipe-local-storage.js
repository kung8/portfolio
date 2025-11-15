const getLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
        try {
            return JSON.parse(storedValue);
        } catch {
            return storedValue;
        }
    }
    return defaultValue;
}

const setLocalStorage = (key, value) => {
    if (typeof value === 'object') {
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        localStorage.setItem(key, value);
    }
}

/////////////////////////////////////////////////// USERS INFO ///////////////////////////////////////////////////////
// user name
const RECIPE_APP_USER_BY_LOCAL_STORAGE_KEY = 'recipeAppUser';
export const getRecipeAppUser = () => getLocalStorage(RECIPE_APP_USER_BY_LOCAL_STORAGE_KEY, 'Guest');
export const setRecipeAppUser = (user) => setLocalStorage(RECIPE_APP_USER_BY_LOCAL_STORAGE_KEY, user);

// user email
const RECIPE_APP_USER_EMAIL_LOCAL_STORAGE_KEY = 'recipeAppUserEmail';
export const getRecipeAppUserEmail = () => getLocalStorage(RECIPE_APP_USER_EMAIL_LOCAL_STORAGE_KEY, '');
export const setRecipeAppUserEmail = (email) => setLocalStorage(RECIPE_APP_USER_EMAIL_LOCAL_STORAGE_KEY, email);

// /////////////////////////////////////////////////// USER SETTINGS ///////////////////////////////////////////////////// 
// // (font size, page layout, vendors, preferred vendor, show notes, show figures, show storage, show reheat, show website references, starting day of week)
// const VENDOR_OPTIONS_LOCAL_STORAGE_KEY = 'vendorOptions';
// export const getVendorOptions = () => getLocalStorage(VENDOR_OPTIONS_LOCAL_STORAGE_KEY, []);
// export const setVendorOptions = (options) => setLocalStorage(VENDOR_OPTIONS_LOCAL_STORAGE_KEY, options);

// const DEFAULT_VENDOR_LOCAL_STORAGE_KEY = 'defaultVendor';
// export const getDefaultVendor = () => getLocalStorage(DEFAULT_VENDOR_LOCAL_STORAGE_KEY, '');
// export const setDefaultVendor = (vendor) => setLocalStorage(DEFAULT_VENDOR_LOCAL_STORAGE_KEY, vendor);

export const fontSizeOptions = [
    'Extra Small',
    'Small',
    'Medium',
    'Large',
    'Extra Large',
];
const RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY = 'recipeFontSize';
export const getRecipeFontSize = () => getLocalStorage(RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY, fontSizeOptions[3]); // Default to 'Large'
export const setRecipeFontSize = (size) => setLocalStorage(RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY, size);

// const SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY = 'showRecipeFigures';
// export const getShowRecipeFigures = () => getLocalStorage(SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY, true);
// export const setShowRecipeFigures = (show) => setLocalStorage(SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY, show);

// const SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY = 'showRecipeStorageOptions';
// export const getShowRecipeStorageOptions = () => getLocalStorage(SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY, true);
// export const setShowRecipeStorageOptions = (show) => setLocalStorage(SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY, show);

// const SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY = 'showRecipeReheatOptions';
// export const getShowRecipeReheatOptions = () => getLocalStorage(SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY, true);
// export const setShowRecipeReheatOptions = (show) => setLocalStorage(SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY, show);

// const SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY = 'showRecipeWebsiteReferences';
// export const getShowRecipeWebsiteReferences = () => getLocalStorage(SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY, true);
// export const setShowRecipeWebsiteReferences = (show) => setLocalStorage(SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY, show);

// const SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY = 'showRecipeNotes';
// export const getShowRecipeNotes = () => getLocalStorage(SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY, true);
// export const setShowRecipeNotes = (show) => setLocalStorage(SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY, show);

// const SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY = 'showRecipePageLayout';
// export const getRecipePageLayout = () => getLocalStorage(SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY, 'standard');
// export const setRecipePageLayout = (layout) => setLocalStorage(SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY, layout);

// const STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY = 'startingDayOfWeek';
// export const getStartingDay = () => getLocalStorage(STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY, 'Sunday');
// export const setStartingDay = (day) => setLocalStorage(STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY, day);

// /////////////////////////////////////////////////// GROCERY LIST ////////////////////////////////////////////////////////////
// const GROCERY_LIST_LOCAL_STORAGE_KEY = 'groceryList';
// export const getGroceryList = () => getLocalStorage(GROCERY_LIST_LOCAL_STORAGE_KEY, []);
// export const setGroceryList = (list) => setLocalStorage(GROCERY_LIST_LOCAL_STORAGE_KEY, list);

// const GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY = 'groceryListSortBy';
// export const getGroceryListSortBy = () => getLocalStorage(GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY, 'category');
// export const setGroceryListSortBy = (sortBy) => setLocalStorage(GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY, sortBy);

// /////////////////////////////////////////////////// MEAL PLAN //////////////////////////////////////////////////////////////
// const MEAL_PLAN_LOCAL_STORAGE_KEY = 'mealPlan';
// export const getMealPlan = () => getLocalStorage(MEAL_PLAN_LOCAL_STORAGE_KEY, []);
// export const setMealPlan = (plan) => setLocalStorage(MEAL_PLAN_LOCAL_STORAGE_KEY, plan);

// const MEAL_PLAN_SORT_BY_LOCAL_STORAGE_KEY = 'mealPlanSortBy';
// export const getMealPlanSortBy = () => getLocalStorage(MEAL_PLAN_SORT_BY_LOCAL_STORAGE_KEY, 'date');
// export const setMealPlanSortBy = (sortBy) => setLocalStorage(MEAL_PLAN_SORT_BY_LOCAL_STORAGE_KEY, sortBy);

// //////////////////////////////////////////////////// MODAL VIEW /////////////////////////////////////////////////////////////
// const SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY = 'selectedModalView';
// export const getSelectedModalView = () => getLocalStorage(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY, 'groceryList');
// export const setSelectedModalView = (view) => setLocalStorage(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY, view);

// const RECIPES_GROUPED_BY_LOCAL_STORAGE_KEY = 'recipesGroupedBy';
// export const getRecipesGroupedBy = () => getLocalStorage(RECIPES_GROUPED_BY_LOCAL_STORAGE_KEY, 'none');
// export const setRecipesGroupedBy = (groupedBy) => setLocalStorage(RECIPES_GROUPED_BY_LOCAL_STORAGE_KEY, groupedBy);

// //////////////////////////////////////////////// RECIPES ////////////////////////////////////////////////////////////////
// const RECIPES_FILTERS_LOCAL_STORAGE_KEY = 'recipesFilters';
// export const getRecipesFilters = () => getLocalStorage(RECIPES_FILTERS_LOCAL_STORAGE_KEY, {});
// export const setRecipesFilters = (filters) => setLocalStorage(RECIPES_FILTERS_LOCAL_STORAGE_KEY, filters);

// const RECIPES_FILTER_DRAWER_OPEN_LOCAL_STORAGE_KEY = 'recipesFilterDrawerOpen';
// export const getRecipesFilterDrawerOpen = () => getLocalStorage(RECIPES_FILTER_DRAWER_OPEN_LOCAL_STORAGE_KEY, false);
// export const setRecipesFilterDrawerOpen = (isOpen) => setLocalStorage(RECIPES_FILTER_DRAWER_OPEN_LOCAL_STORAGE_KEY, isOpen);
