// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { SHRIMP, OLIVE_OIL, GARLIC, SALT, BLACK_PEPPER, BREADCRUMBS, PARMESAN_CHEESE, UNSALTED_BUTTER, LEMON } = require('./ingredients');

const DREDGING_STATION = 'Dredging Station';
const BAKING_SECTION = 'Baking';

module.exports = {
    wip: true,
    cardName: 'Jumbo Shrimp Parmesan',
    name: 'Jumbo Shrimp Parmesan',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.SHRIMP],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Jumbo Shrimp Parmesan', link: 'https://www.food.com/recipe/jumbo-shrimp-parmesan-42169' }
    ],
    separated: true,
    ingredients: [
        { ...SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled, deveined, tail on', section: SECTIONS.MARINADE },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MARINADE },

        { ...BREADCRUMBS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING_STATION },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING_STATION },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BAKING_SECTION },
        { ...LEMON, amount: 1, unit: '', additionalDetails: 'wedged', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'baking sheet' },
        { name: 'aluminum foil' },
        { name: 'shallow bowl' },
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.MARINADE}" section ingredients (all except the shrimp).`, section: SECTIONS.MARINATE_SHRIMP },
        { step: 'Add shrimp and toss until the shrimp is coated.', section: SECTIONS.MARINATE_SHRIMP },
        { step: 'Refrigerate for 1 hour.', section: SECTIONS.MARINATE_SHRIMP },
        { step: 'Preheat the oven to 475ºF.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Line a baking sheet with aluminum foil.', section: SECTIONS.COOK_SHRIMP },
        { step: 'In a shallow bowl, combine breadcrumbs and cheese.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Coat the shrimp in the breadcrumb mixture.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Place the shrimp on a baking sheet in a single layer.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Drizzle the melted butter over the shrimp.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Bake until the shrimp is cooked (about 10 minutes).', section: SECTIONS.COOK_SHRIMP },
        { step: 'Serve with lemon wedges.', section: SECTIONS.SERVE },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};