// const thaiMassamanCurry = '../assets/Products/thai-massaman-curry.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS, YIELD_UNITS, TIME_UNITS, INGREDIENT_UNITS, SECTIONS, STORAGE_DURATION_UNIT, STORAGE_CONTAINER, STORAGE_LOCATION, REHEAT_METHODS } = require("./constants");
const { VEGETABLE_OIL, COCONUT_MILK, GINGER, CILANTRO, BROWN_SUGAR, FISH_SAUCE, LIME_JUICE, WORCESTERSHIRE_SAUCE, YELLOW_ONION, YUKON_GOLD_POTATO, CARROT, PEANUT_BUTTER, UNSALTED_PEANUT, SRIRACHA_SAUCE, RED_PEPPER_FLAKES, JASMINE_RICE, MASSAMAN_CURRY_PASTE, CHICKEN_BREAST } = require('./ingredients');

const PASTE_SECTION = 'Paste';
const LIQUIDS_SECTION = 'Liquids';
const POTATOES_AND_CARROTS_SECTION = 'Potatoes and Carrots';

const HEAT_PASTE = 'Heat Paste';
const HEAT_LIQUIDS = 'Heat Liquids';
const COOK_POTATOES_AND_CARROTS = 'Cook Potatoes and Carrots';

module.exports = {
    wip: true,
    cardName: 'Massaman Curry',
    name: 'Thai Massaman Curry',
    img: '',
    recipeAuthors: ['Erica Walker'],
    recipeFinder: 'Kevin Ung',
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
        { label: 'Chicken Massaman Curry', link: 'https://www.favfamilyrecipes.com/chicken-massaman-curry/' }
    ],
    separated: true,
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
        { name: 'stove' },
    ],
    supplies: [
        { name: 'peeler' },
        { name: 'knife' },
        { name: 'cutting board' },
        { name: 'pot' },
    ],
    directions: [
        { step: 'Over medium heat, heat oil in pot.', section: HEAT_PASTE },
        { step: 'Turn on a hood fan.', section: HEAT_PASTE },
        { step: 'Add curry paste. Cook and stir (about 2 to 3 minutes).', section: HEAT_PASTE },

        { step: `Add the "${LIQUIDS_SECTION}" section ingredients. Bring to a boil.`, section: HEAT_LIQUIDS },

        { step: 'Add the onion and chicken.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Reduce to a simmer.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Cook until the chicken is white and cooked through (about 5 minutes).', section: SECTIONS.COOK_CHICKEN },
        { step: 'Add the other half of the coconut milk. Bring to a boil.', section: SECTIONS.COOK_CHICKEN },

        { step: `Add the "${POTATOES_AND_CARROTS_SECTION}" section ingredients.`, section: COOK_POTATOES_AND_CARROTS },
        { step: 'Cover with a lid. Simmer until the center of the potatoes are softened.', section: COOK_POTATOES_AND_CARROTS },

        { step: 'Serve over rice. Enjoy this delicious taste of Thailand.', section: SECTIONS.SERVE },
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