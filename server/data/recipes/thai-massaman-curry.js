const curry1 = '../assets/Products/massaman-curry-1.jpeg';
const curry2 = '../assets/Products/massaman-curry-2.jpeg';
const curry3 = '../assets/Products/massaman-curry-3.jpeg';
const curry4 = '../assets/Products/massaman-curry-4.jpeg';
const curry5 = '../assets/Products/massaman-curry-5.jpeg';
const curry6 = '../assets/Products/massaman-curry-6.jpeg';
const curry7 = '../assets/Products/massaman-curry-7.jpeg';
const curry8 = '../assets/Products/massaman-curry-8.jpeg';
const curry9 = '../assets/Products/massaman-curry-9.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const { BROWN_SUGAR, CARROT, CHICKEN_BREAST, CILANTRO, COCONUT_MILK, CUTTING_BOARD, FISH_SAUCE, GINGER, JASMINE_RICE, KNIFE, LIME_JUICE, MASSAMAN_CURRY_PASTE, PEANUT_BUTTER, PEELER, POT, RED_PEPPER_FLAKES, SRIRACHA_SAUCE, STOVE, UNSALTED_PEANUT, VEGETABLE_OIL, WORCESTERSHIRE_SAUCE, YELLOW_ONION, YUKON_GOLD_POTATO } = require('./ingredients');

const PASTE_SECTION = 'Paste';
const LIQUIDS_SECTION = 'Liquids';
const POTATOES_AND_CARROTS_SECTION = 'Potatoes and Carrots';

const HEAT_PASTE = 'Heat Paste';
const HEAT_LIQUIDS = 'Heat Liquids';
const COOK_POTATOES_AND_CARROTS = 'Cook Potatoes and Carrots';

module.exports = {
    cardName: 'Massaman Curry',
    name: 'Thai Massaman Curry',
    img: curry9,
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    type: [TYPES.CURRY, TYPES.RICE],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Chicken Massaman Curry', 
            link: 'https://www.favfamilyrecipes.com/chicken-massaman-curry/',
            authors: ['Erica Walker'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PASTE_SECTION },
        { ...MASSAMAN_CURRY_PASTE, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PASTE_SECTION },

        { ...COCONUT_MILK, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: LIQUIDS_SECTION },
        { ...GINGER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: LIQUIDS_SECTION },
        { ...CILANTRO, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: LIQUIDS_SECTION },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: LIQUIDS_SECTION },
        { ...FISH_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: LIQUIDS_SECTION },
        { ...LIME_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: LIQUIDS_SECTION },
        { ...WORCESTERSHIRE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: LIQUIDS_SECTION },

        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'thinly sliced', section: SECTIONS.CHICKEN },
        { ...CHICKEN_BREAST, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'thinly sliced', section: SECTIONS.CHICKEN },
        { ...COCONUT_MILK, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...YUKON_GOLD_POTATO, amount: 4, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'peeled and cubed', section: POTATOES_AND_CARROTS_SECTION },
        { ...CARROT, amount: 2, unit: '', additionalDetails: 'peeled and sliced', section: POTATOES_AND_CARROTS_SECTION },
        { ...PEANUT_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: POTATOES_AND_CARROTS_SECTION },
        { ...UNSALTED_PEANUT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: POTATOES_AND_CARROTS_SECTION },
        { ...SRIRACHA_SAUCE, amount: '', unit: '', additionalDetails: 'to taste', section: POTATOES_AND_CARROTS_SECTION },
        { ...RED_PEPPER_FLAKES, amount: '', unit: '', additionalDetails: 'to taste', section: POTATOES_AND_CARROTS_SECTION },

        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        PEELER,
        KNIFE,
        CUTTING_BOARD,
        POT,
    ],
    directions: [
        { step: `Over medium heat, heat oil in pot.`, section: HEAT_PASTE },
        { step: `Turn on a hood fan.`, section: HEAT_PASTE },
        { step: `Add curry paste. Cook and stir (about 2 to 3 minutes).`, section: HEAT_PASTE, img: curry1 },

        { step: `Add the "${LIQUIDS_SECTION}" section ingredients. Bring to a boil.`, section: HEAT_LIQUIDS, img: [curry2, curry3, curry4, curry5] },

        { step: `Add the onion and chicken.`, section: SECTIONS.COOK_CHICKEN, img: curry6 },
        { step: `Reduce to a simmer.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Cook until the chicken is white and cooked through (about 5 minutes).`, section: SECTIONS.COOK_CHICKEN },
        { step: `Add the other half of the coconut milk. Bring to a boil.`, section: SECTIONS.COOK_CHICKEN },

        { step: `Add the "${POTATOES_AND_CARROTS_SECTION}" section ingredients.`, section: COOK_POTATOES_AND_CARROTS, img: curry7 },
        { step: `Cover with a lid. Simmer until the center of the potatoes are softened.`, section: COOK_POTATOES_AND_CARROTS, img: curry8 },

        { step: `Serve over rice. Enjoy this delicious taste of Thailand.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Do not worry there will be enough liquid in this curry dish. The solid ingredients will cook down and will release some water.' },
        { note: 'I have not been able to perfect the taste and flavor. I did not feel the fusion of ingredients specifically the peanut-based ingredients.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Let it cool to room temperature before storing in an airtight container in the fridge.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over medium-low heat, reheat in a pot until warmed through. Stir occasionally.',
        },
    ],
    mealPrep: true,
};