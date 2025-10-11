const sauce1 = '../assets/Products/bbq-sauce-1.jpeg';
const sauce2 = '../assets/Products/bbq-sauce-2.jpeg';
const sauce3 = '../assets/Products/bbq-sauce-3.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { KETCHUP, BROWN_SUGAR, PAPRIKA, GARLIC_POWDER, SALT, DIJON_MUSTARD, WORCESTERSHIRE_SAUCE, WHITE_VINEGAR, RICE_WINE_VINEGAR, WATER, STOVE, SAUCEPAN } = require('./ingredients');

module.exports = {
    cardName: 'Homemade BBQ Sauce',
    name: 'Homemade BBQ Sauce',
    img: sauce3,
    recipeAuthors: ['Joshua Weissman'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.SAUCE],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    type: [TYPES.SAUCE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'BBQ Sauce', link: 'https://www.joshuaweissman.com/post/mcdonald-s-mcnuggets-but-better' }
    ],
    separated: false,
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
        { step: 'Combine all the ingredients in a saucepan. Whisk.', section: SECTIONS.SAUCE, img: [sauce1, sauce2] },
        { step: 'Over medium heat, simmer for 15 to 20 minutes.', section: SECTIONS.SAUCE },
        { step: 'Transfer to a container once the sauce has thickened and cooled.', section: SECTIONS.SAUCE },
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