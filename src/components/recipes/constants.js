// LOCAL STORAGE KEYS
export const GROCERY_LIST_LOCAL_STORAGE_KEY = 'groceryList';
export const GROCERY_LIST_SORT_BY_LOCAL_STORAGE_KEY = 'groceryListSortBy';
export const MEAL_PLAN_LOCAL_STORAGE_KEY = 'mealPlan';
export const MEAL_PLAN_SORT_BY_LOCAL_STORAGE_KEY = 'mealPlanSortBy';
export const SELECTED_MODAL_VIEW_LOCAL_STORAGE_KEY = 'selectedModalView';
export const STARTING_DAY_OF_WEEK_LOCAL_STORAGE_KEY = 'startingDayOfWeek';
export const RECIPES_FILTERS_LOCAL_STORAGE_KEY = 'recipesFilters';
export const RECIPES_FILTER_DRAWER_OPEN_LOCAL_STORAGE_KEY = 'recipesFilterDrawerOpen';
export const RECIPES_GROUPED_BY_LOCAL_STORAGE_KEY = 'recipesGroupedBy';
export const VENDOR_OPTIONS_LOCAL_STORAGE_KEY = 'vendorOptions';
export const DEFAULT_VENDOR_LOCAL_STORAGE_KEY = 'defaultVendor';
export const RECIPE_FONT_SIZE_LOCAL_STORAGE_KEY = 'recipeFontSize';
export const SHOW_RECIPE_FIGURES_LOCAL_STORAGE_KEY = 'showRecipeFigures';
export const SHOW_RECIPE_STORAGE_OPTIONS_LOCAL_STORAGE_KEY = 'showRecipeStorageOptions';
export const SHOW_RECIPE_REHEAT_OPTIONS_LOCAL_STORAGE_KEY = 'showRecipeReheatOptions';
export const SHOW_RECIPE_WEBSITE_REFERENCES_LOCAL_STORAGE_KEY = 'showRecipeWebsiteReferences';
export const SHOW_RECIPE_NOTES_LOCAL_STORAGE_KEY = 'showRecipeNotes';
export const SHOW_RECIPE_PAGE_LAYOUT_LOCAL_STORAGE_KEY = 'showRecipePageLayout';

// MODAL VIEWS
export const GROCERY_LIST_VIEW = 'groceryList';
export const MEAL_PLANNING_VIEW = 'mealPlanning';

// DATE FORMATS
export const DATE_FORMAT = 'M/D/YYYY';
export const READABLE_SHORT_DATE = 'MMM D';
export const READABLE_SHORT_DATE_WITH_YEAR = 'MMM D, YYYY';
export const READABLE_SHORT_DATE_WITH_DAY_OF_WEEK = 'dddd (MMM D)';

// MEAL TYPES
export const MEAL_PLAN_MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];

// GROUPED BY OPTIONS
export const GROUPED_BY_NONE = 'none';
export const GROUPED_BY_ALPHABETIC = 'alphabetic';
export const GROUPED_BY_RANDOM = 'random';
export const GROUPED_BY_GENRE = 'genre';
export const GROUPED_BY_CATEGORY = 'category';
export const GROUPED_BY_INGREDIENTS_COUNT_ASCENDING = 'ingredientCountAscending';
export const GROUPED_BY_INGREDIENTS_COUNT_DESCENDING = 'ingredientCountDescending';

export const GROUPED_BY_OPTIONS = [
    { id: GROUPED_BY_NONE, label: 'Default' },
    { id: GROUPED_BY_ALPHABETIC, label: 'Alphabetic' },
    // { id: GROUPED_BY_RANDOM, label: 'random' },
    { id: GROUPED_BY_GENRE, label: 'Genre' },
    // { id: GROUPED_BY_CATEGORY, label: 'Meal Category' },
    { id: GROUPED_BY_INGREDIENTS_COUNT_ASCENDING, label: 'Ingredients Count (ASC)' },
    { id: GROUPED_BY_INGREDIENTS_COUNT_DESCENDING, label: 'Ingredients Count (DESC)' },
];