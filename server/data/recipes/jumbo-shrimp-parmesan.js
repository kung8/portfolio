// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_SHEET, BLACK_PEPPER, BREADCRUMBS, GARLIC, LEMON, MIXING_BOWL, OLIVE_OIL, OVEN, PARMESAN_CHEESE, SALT, SHRIMP, SMALL_BOWL, UNSALTED_BUTTER } = require('./ingredients');

const DREDGING_STATION = 'Dredging Station';
const BAKING_SECTION = 'Baking';

module.exports = {
    wip: true,
    cardName: 'Jumbo Shrimp Parmesan',
    name: 'Jumbo Shrimp Parmesan',
    img: '',
    recipeAuthors: ['Marie C'],
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
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_SHEET,
        ALUMINUM_FOIL,
        SMALL_BOWL,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.MARINADE}" section ingredients (all except the shrimp).`, section: SECTIONS.MARINATE_SHRIMP },
        { step: 'Add shrimp and toss until the shrimp is coated.', section: SECTIONS.MARINATE_SHRIMP },
        { step: 'Refrigerate for 1 hour.', section: SECTIONS.MARINATE_SHRIMP },
        { step: 'Preheat the oven to 475ºF.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Line a baking sheet with aluminum foil.', section: SECTIONS.COOK_SHRIMP },
        { step: `In a small bowl, combine "${DREDGING_STATION}" section ingredients.`, section: SECTIONS.COOK_SHRIMP },
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