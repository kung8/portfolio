const getLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
        try {
            if (storedValue === 'true') return true;
            if (storedValue === 'false') return false;
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
export const getRecipeAppUserLocalStorageKey = () => getLocalStorage(RECIPE_APP_USER_BY_LOCAL_STORAGE_KEY, 'Guest');
export const setRecipeAppUserLocalStorageKey = (user) => setLocalStorage(RECIPE_APP_USER_BY_LOCAL_STORAGE_KEY, user);

// user email
const RECIPE_APP_USER_EMAIL_LOCAL_STORAGE_KEY = 'recipeAppUserEmail';
export const getRecipeAppUserEmailLocalStorageKey = () => getLocalStorage(RECIPE_APP_USER_EMAIL_LOCAL_STORAGE_KEY, '');
export const setRecipeAppUserEmailLocalStorageKey = (email) => setLocalStorage(RECIPE_APP_USER_EMAIL_LOCAL_STORAGE_KEY, email);

/////////////////////////////////////////////////// USER SETTINGS ///////////////////////////////////////////////////// 
// vendor options
const defaultVendorOptions = [
    'Walmart',
    'Costco',
    'Smith\'s',
    'WinCo',
    'Macey\'s',
    'Trader Joe\'s',
    'Target',
    'Ocean Mart',
    'Amazon',
    // 'Whole Foods',
    // 'H-Mart',
    // 'Giant',
    // 'Safeway',
    // 'Kroger',
    // 'Aldi',
    // 'Sam\'s Club',
];
const VENDOR_OPTIONS_LOCAL_STORAGE_KEY = 'vendorOptions';
export const getVendorOptionsLocalStorageKey = () => getLocalStorage(VENDOR_OPTIONS_LOCAL_STORAGE_KEY, defaultVendorOptions);
export const setVendorOptionsLocalStorageKey = (options) => setLocalStorage(VENDOR_OPTIONS_LOCAL_STORAGE_KEY, options);

const DEFAULT_VENDOR_LOCAL_STORAGE_KEY = 'defaultVendor';
export const getDefaultVendorLocalStorageKey = () => getLocalStorage(DEFAULT_VENDOR_LOCAL_STORAGE_KEY, '');
export const setDefaultVendorLocalStorageKey = (vendor) => setLocalStorage(DEFAULT_VENDOR_LOCAL_STORAGE_KEY, vendor);

// recipe font size
export const fontSizeOptions = [
    'Extra Small',
    'Small',
    'Medium',
    'Large',
    'Extra Large',
];
const RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY = 'recipeFontSize';
export const getRecipeFontSizeLocalStorageKey = () => getLocalStorage(RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY, fontSizeOptions[3]); // Default to 'Large'
export const setRecipeFontSizeLocalStorageKey = (size) => setLocalStorage(RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY, size);

// show recipe figures
const SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY = 'showRecipeFigures';
export const getShowRecipeFiguresLocalStorageKey = () => getLocalStorage(SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY, true);
export const setShowRecipeFiguresLocalStorageKey = (show) => setLocalStorage(SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY, show);

// show recipe storage options
const SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY = 'showRecipeStorageOptions';
export const getShowRecipeStorageOptionsLocalStorageKey = () => getLocalStorage(SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY, true);
export const setShowRecipeStorageOptionsLocalStorageKey = (show) => setLocalStorage(SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY, show);

// show recipe reheat options
const SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY = 'showRecipeReheatOptions';
export const getShowRecipeReheatOptionsLocalStorageKey = () => getLocalStorage(SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY, true);
export const setShowRecipeReheatOptionsLocalStorageKey = (show) => setLocalStorage(SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY, show);

// show recipe website references
const SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY = 'showRecipeWebsiteReferences';
export const getShowRecipeWebsiteReferencesLocalStorageKey = () => getLocalStorage(SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY, true);
export const setShowRecipeWebsiteReferencesLocalStorageKey = (show) => setLocalStorage(SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY, show);

// show recipe notes
const SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY = 'showRecipeNotes';
export const getShowRecipeNotesLocalStorageKey = () => getLocalStorage(SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY, true);
export const setShowRecipeNotesLocalStorageKey = (show) => setLocalStorage(SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY, show);

// recipe page layout
export const pageLayoutOptions = [
    { id: 'standard', label: 'Standard' }, // DESKTOP: ingredients on left, directions on right; MOBILE: ingredients first, directions second
    { id: 'stacked', label: 'Stacked' }, // Ingredients first, directions second (both DESKTOP and MOBILE)
]
const SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY = 'showRecipePageLayout';
export const getRecipePageLayoutLocalStorageKey = () => getLocalStorage(SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY, 'standard');
export const setRecipePageLayoutLocalStorageKey = (layout) => setLocalStorage(SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY, layout);

// starting day of the week
export const weekdayOptions = [
    { label: 'Sun', value: 'sunday' },
    { label: 'Mon', value: 'monday' },
    { label: 'Tue', value: 'tuesday' },
    { label: 'Wed', value: 'wednesday' },
    { label: 'Thu', value: 'thursday' },
    { label: 'Fri', value: 'friday' },
    { label: 'Sat', value: 'saturday' }
];
const STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY = 'startingDayOfWeek';
export const getStartingDayLocalStorageKey = () => getLocalStorage(STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY, weekdayOptions[0].value);
export const setStartingDayLocalStorageKey = (day) => setLocalStorage(STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY, day);

// /////////////////////////////////////////////////// GROCERY LIST ////////////////////////////////////////////////////////////
// const GROCERY_LIST_LOCAL_STORAGE_KEY = 'groceryList';
// export const getGroceryList = () => getLocalStorage(GROCERY_LIST_LOCAL_STORAGE_KEY, []);
// export const setGroceryList = (list) => setLocalStorage(GROCERY_LIST_LOCAL_STORAGE_KEY, list);

// sort by for grocery list (e.g. date, category, vendor)
export const GROCERY_LIST_SORT_BY_CATEGORY = 'category';
export const GROCERY_LIST_SORT_BY_DATE = 'date';
export const GROCERY_LIST_SORT_BY_VENDOR = 'vendor';
export const groceryListSortByOptions = [
    { id: GROCERY_LIST_SORT_BY_CATEGORY, label: 'Category' },
    { id: GROCERY_LIST_SORT_BY_DATE, label: 'Date' },
    { id: GROCERY_LIST_SORT_BY_VENDOR, label: 'Vendor' },
]
const GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY = 'groceryListSortBy';
export const getGroceryListSortByLocalStorageKey = () => getLocalStorage(GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY, GROCERY_LIST_SORT_BY_CATEGORY);
export const setGroceryListSortByLocalStorageKey = (sortBy) => setLocalStorage(GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY, sortBy);

// /////////////////////////////////////////////////// MEAL PLAN //////////////////////////////////////////////////////////////
// const MEAL_PLAN_LOCAL_STORAGE_KEY = 'mealPlan';
// export const getMealPlan = () => getLocalStorage(MEAL_PLAN_LOCAL_STORAGE_KEY, []);
// export const setMealPlan = (plan) => setLocalStorage(MEAL_PLAN_LOCAL_STORAGE_KEY, plan);

// display for meal plan (e.g. daily, weekly, monthly)
export const MEAL_PLAN_SORT_BY_DAILY = 'daily';
export const MEAL_PLAN_SORT_BY_WEEKLY = 'weekly';
export const MEAL_PLAN_SORT_BY_MONTHLY = 'monthly';
export const mealPlanSortByOptions = [
    { id: MEAL_PLAN_SORT_BY_DAILY, label: 'Daily' },
    { id: MEAL_PLAN_SORT_BY_WEEKLY, label: 'Weekly' },
    { id: MEAL_PLAN_SORT_BY_MONTHLY, label: 'Monthly' }
];
const MEAL_PLAN_SORT_BY_LOCAL_STORAGE_KEY = 'mealPlanSortBy';
export const getMealPlanSortByLocalStorageKey = () => getLocalStorage(MEAL_PLAN_SORT_BY_LOCAL_STORAGE_KEY, MEAL_PLAN_SORT_BY_DAILY);
export const setMealPlanSortByLocalStorageKey = (sortBy) => setLocalStorage(MEAL_PLAN_SORT_BY_LOCAL_STORAGE_KEY, sortBy);

// //////////////////////////////////////////////////// MODAL VIEW /////////////////////////////////////////////////////////////
export const GROCERY_LIST_VIEW = 'groceryList';
export const MEAL_PLANNING_VIEW = 'mealPlanning';
export const selectedModalViewOptions = [
    { id: GROCERY_LIST_VIEW, label: 'Grocery List' },
    { id: MEAL_PLANNING_VIEW, label: 'Meal Planning' },
];
const SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY = 'selectedModalView';
export const getSelectedModalViewLocalStorageKey = () => getLocalStorage(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY, GROCERY_LIST_VIEW);
export const setSelectedModalViewLocalStorageKey = (view) => setLocalStorage(SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY, view);

//////////////////////////////////////////////// RECIPES LISTING PAGE ////////////////////////////////////////////////////////////////
// recipes grouped by for display on the recipes listing pages
export const RECIPE_LISTING_SCREEN_GROUPED_BY_NONE = 'none';
export const RECIPE_LISTING_SCREEN_GROUPED_BY_ALPHABETIC = 'alphabetic';
export const RECIPE_LISTING_SCREEN_GROUPED_BY_RANDOM = 'random';
export const RECIPE_LISTING_SCREEN_GROUPED_BY_GENRE = 'genre';
export const RECIPE_LISTING_SCREEN_GROUPED_BY_CATEGORY = 'category';
export const RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_ASCENDING = 'ingredientCountAscending';
export const RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_DESCENDING = 'ingredientCountDescending';
const RECIPES_GROUPED_BY_LOCAL_STORAGE_KEY = 'recipesGroupedBy';
export const recipeListingScreenGroupedByOptions = [
    { id: RECIPE_LISTING_SCREEN_GROUPED_BY_NONE, label: 'Default' },
    { id: RECIPE_LISTING_SCREEN_GROUPED_BY_ALPHABETIC, label: 'Alphabetic' },
    // { id: GROUPED_BY_RANDOM, label: 'random' },
    { id: RECIPE_LISTING_SCREEN_GROUPED_BY_GENRE, label: 'Genre' },
    // { id: GROUPED_BY_CATEGORY, label: 'Meal Category' },
    { id: RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_ASCENDING, label: 'Ingredients Count (ASC)' },
    { id: RECIPE_LISTING_SCREEN_GROUPED_BY_INGREDIENTS_COUNT_DESCENDING, label: 'Ingredients Count (DESC)' },
];
export const getRecipesGroupedByLocalStorageKey = () => getLocalStorage(RECIPES_GROUPED_BY_LOCAL_STORAGE_KEY, RECIPE_LISTING_SCREEN_GROUPED_BY_NONE);
export const setRecipesGroupedByLocalStorageKey = (groupedBy) => setLocalStorage(RECIPES_GROUPED_BY_LOCAL_STORAGE_KEY, groupedBy);

// selected recipe filters to apply on the recipes listing pages (e.g. category, genre, method, type) 
export const defaultSelectedFilters = {
    available: [],
    category: [],
    diet: [],
    genre: [],
    method: [],
    protein: [],
    type: [],
    image: [],
    wip: [],
    ingredients: [],
    search: '',
    recommended: [],
};
const RECIPES_FILTERS_LOCAL_STORAGE_KEY = 'recipesFilters';
export const getRecipesFiltersLocalStorageKey = () => ({
    ...defaultSelectedFilters,
    ...getLocalStorage(RECIPES_FILTERS_LOCAL_STORAGE_KEY, defaultSelectedFilters),
});
export const setRecipesFiltersLocalStorageKey = (filters) => setLocalStorage(RECIPES_FILTERS_LOCAL_STORAGE_KEY, filters);

// recipe filters drawer open/close state
const RECIPES_FILTER_DRAWER_OPEN_LOCAL_STORAGE_KEY = 'recipesFilterDrawerOpen';
export const getRecipesFilterDrawerOpenLocalStorageKey = () => getLocalStorage(RECIPES_FILTER_DRAWER_OPEN_LOCAL_STORAGE_KEY, false);
export const setRecipesFilterDrawerOpenLocalStorageKey = (isOpen) => setLocalStorage(RECIPES_FILTER_DRAWER_OPEN_LOCAL_STORAGE_KEY, isOpen);
