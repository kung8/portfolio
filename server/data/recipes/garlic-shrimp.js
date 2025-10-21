// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { GARLIC, LEMON_JUICE, OLIVE_OIL, OVEN, PARSLEY, RED_PEPPER_FLAKES, SALT, SHRIMP, SLOTTED_SPOON, STOVE, UNSALTED_BUTTER, WATER, WOK } = require('./ingredients');

const COOK_SHRIMP = 'Cook shrimp';

module.exports = {
    wip: true,
    cardName: 'Garlic Shrimp',
    name: 'Garlic Shrimp',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.ITALIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.SHRIMP],
    type: [TYPES.MAIN_COURSE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.SHELLFISH],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.PESCATARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Garlic Shrimp', 
            link: 'https://www.allrecipes.com/recipe/220597/simple-garlic-shrimp/',
            author: ['John Mitzewich'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...OLIVE_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...RED_PEPPER_FLAKES, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LEMON_JUICE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'divided into four pieces', section: SECTIONS.MAIN },
        { ...PARSLEY, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'divided', section: SECTIONS.MAIN },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'as needed', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        WOK,
        SLOTTED_SPOON,
    ],
    directions: [
        { step: 'Over high heat, heat oil in a wok until it begins to smoke.', section: COOK_SHRIMP },
        { step: 'Add shrimp. Cook without stirring for 1 minute.', section: COOK_SHRIMP },
        { step: 'Season shrimp with salt. Cook until shrimp becomes pink (about 1 minute).', section: COOK_SHRIMP },
        { step: 'Add garlic and red pepper flakes. Cook and stir (about 1 minute).', section: COOK_SHRIMP },
        { step: 'Add lemon juice, 1 butter piece, and half of the parsley. Cook until butter melts (about 1 minute).', section: COOK_SHRIMP },
        { step: 'Reduce to low heat. Add in the rest of the butter.', section: COOK_SHRIMP },
        { step: 'Cook and stir until the sauce is thickened and shrimp are pink and opaque (about 2 to 3 minutes).', section: COOK_SHRIMP },
        { step: 'Transfer shrimp to a mixing bowl with a slotted spoon.', section: COOK_SHRIMP },
        { step: 'Cook butter sauce for about 2 minutes. If it is too thick, add water 1 teaspoon at a time.', section: COOK_SHRIMP },
        { step: 'Enjoy this dish with rice or noodles. Top with the sauce and parsley.', section: SECTIONS.SERVE },
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