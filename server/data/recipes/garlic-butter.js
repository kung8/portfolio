const butter = '../assets/Products/garlic-butter.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { UNSALTED_BUTTER, GARLIC, PARSLEY, CHIVE, LEMON_JUICE } = require('./ingredients');

const MIX = 'Mix';

module.exports = {
    cardName: 'Garlic Butter',
    name: 'Garlic Butter',
    img: butter,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.AMERICAN],
    method: [METHODS.MIX],
    type: [TYPES.SAUCE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 3, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Garlic Butter', link: 'https://www.spendwithpennies.com/best-homemade-garlic-butter/' }
    ],
    separated: false,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...CHIVE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'In a medium bowl, combine all the ingredients.', section: MIX },
        { step: 'Enjoy this with your favorite bread, pasta or vegetables.', section: SECTIONS.SERVE },
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