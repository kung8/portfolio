const curry1 = '../assets/Products/indian-butter-chicken-1.jpeg';
const curry2 = '../assets/Products/indian-butter-chicken-2.jpeg';
const curry3 = '../assets/Products/indian-butter-chicken-3.jpeg';
const curry4 = '../assets/Products/indian-butter-chicken-4.jpeg';
const curry5 = '../assets/Products/indian-butter-chicken-5.jpeg';
const curry6 = '../assets/Products/indian-butter-chicken-6.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    BONELESS_AND_SKINLESS_CHICKEN_BREAST,
    CHILI_POWDER,
    CUMIN,
    FRYING_PAN,
    GARAM_MASALA,
    GARLIC,
    GINGER,
    HEAVY_CREAM,
    JASMINE_RICE,
    MEASURING_SPOONS,
    MEDIUM_BOWL,
    MIXING_BOWL,
    MUSTARD_SEED,
    SALT,
    SPATULA,
    STOVE,
    TOMATO_PASTE,
    UNSALTED_BUTTER,
    VEGETABLE_OIL,
    YELLOW_ONION,
} = require('./ingredients');

const ONION_SECTION = 'Onion';
const CHICKEN_AND_SPICES = 'Chicken and Spices';
const CREAM_SECTION = 'Cream Section';

const COOK_ONION = 'Cook Onion';
const COOK_AROMATICS = 'Cook Aromatics';

module.exports = {
    cardName: 'Indian Butter Chicken',
    name: 'Indian Butter Chicken',
    img: curry5,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.INDIAN, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY, TYPES.RICE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Butter Chicken',
            link: "https://gimmedelicious.com/easy-20-minute-butter-chicken/",
            authors: ['Layla Atik'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ONION_SECTION },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: ONION_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: ONION_SECTION },

        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced', section: SECTIONS.AROMATICS },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.AROMATICS },

        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '1/2" pieces', section: CHICKEN_AND_SPICES },
        { ...TOMATO_PASTE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN_AND_SPICES },
        { ...GARAM_MASALA, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN_AND_SPICES },
        { ...CHILI_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_AND_SPICES },
        { ...MUSTARD_SEED, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_AND_SPICES },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_AND_SPICES },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: CHICKEN_AND_SPICES },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: CHICKEN_AND_SPICES },

        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAM_SECTION },

        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: 'cooked', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        MIXING_BOWL,
        MEDIUM_BOWL,
        SPATULA,
        MEASURING_SPOONS,
    ],
    directions: [
        { step: 'Over medium-high heat, add oil and butter to a large pan.', section: COOK_ONION },
        { step: 'Add onion. Cook until light brown.', section: COOK_ONION },

        { step: `Add the "${SECTIONS.AROMATICS}" section ingredients. Cook until fragrant (about 30 seconds).`, section: COOK_AROMATICS },

        { step: `Add the "${CHICKEN_AND_SPICES}" section ingredients. Brown chicken (about 5 to 6 minutes).`, section: SECTIONS.COOK_CHICKEN, img: [curry1, curry2] },

        { step: 'Add heavy cream. Simmer for 8 to 10 minutes.', section: SECTIONS.SIMMER, img: [curry3, curry4] },

        { step: 'Serve with rice (and naan or roti is optional and delicious).', section: SECTIONS.SERVE, img: curry6 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};