const sauce1 = '../assets/Products/bbq-sauce-1.jpeg';
const sauce2 = '../assets/Products/bbq-sauce-2.jpeg';
const sauce3 = '../assets/Products/bbq-sauce-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BROWN_SUGAR, DIJON_MUSTARD, GARLIC_POWDER, KETCHUP, PAPRIKA, RICE_WINE_VINEGAR, SALT, SAUCEPAN, STOVE, WATER, WHITE_VINEGAR, WORCESTERSHIRE_SAUCE } = require('./ingredients');

module.exports = {
    cardName: 'Homemade BBQ Sauce',
    name: 'Homemade BBQ Sauce',
    img: sauce3,
    available: true,
    recommended: false,
    category: [CATEGORIES.SAUCE],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    type: [TYPES.SAUCE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'BBQ Sauce', 
            link: 'https://www.joshuaweissman.com/post/mcdonald-s-mcnuggets-but-better',
            authors: ['Joshua Weissman'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...KETCHUP, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WORCESTERSHIRE_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.SAUCE },
        { ...WHITE_VINEGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
    ],
    directions: [
        { step: `In a saucepan, combine the "${SECTIONS.SAUCE}" section ingredients. Whisk.`, section: SECTIONS.PREP_SAUCE, img: [sauce1, sauce2] },
        { step: 'Over medium heat, simmer for 15 to 20 minutes.', section: SECTIONS.SIMMER },
        { step: 'Transfer to a container once the sauce has thickened and cooled.', section: SECTIONS.COOL },
        { step: 'Enjoy with your favorite grilled meats or as a dipping sauce.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};