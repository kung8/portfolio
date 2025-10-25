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
    websites: [
        { 
            label: 'Butter Chicken', 
            link: "https://gimmedelicious.com/easy-20-minute-butter-chicken/",
            authors: ['Layla Atik'],
            finder: 'Kevin Ung', 
        }
    ],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', optional: false },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced', optional: false },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', optional: false },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '1/2" pieces', optional: false },
        { ...TOMATO_PASTE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...GARAM_MASALA, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...CHILI_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...MUSTARD_SEED, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', optional: false },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', optional: false },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: 'cooked', optional: false },
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
        { step: 'Add oil and butter to a large cooking pan on medium-high heat.', section: SECTIONS.MAIN },
        { step: 'Add the diced onion and cook until light brown.', section: SECTIONS.MAIN },
        { step: 'Add the ginger and garlic to the pan and cook until aromatic (about 30 seconds).' },
        { step: 'Add the chicken, spices, and tomato paste to the pan. Cook until the chicken is browned (about 5 to 6 minutes).', img: [curry1, curry2] },
        { step: 'Add the heavy cream and let simmer for 8 to 10 minutes.', section: SECTIONS.MAIN, img: [curry3, curry4] },
        { step: 'Serve with rice (and naan or roti is optional and delicious).', section: SECTIONS.MAIN, img: curry6 },
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