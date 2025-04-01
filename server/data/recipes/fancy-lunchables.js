const lunchables = '../assets/Products/fancy-lunchables.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const { BUTTER_PICKLE_CHIPS, CHEDDAR_CHEESE, CRACKERS, COOKED_HAM, LETTUCE, ROMA_TOMATO } = require('./ingredients');

module.exports = {
    cardName: 'Fancy Lunchables',
    name: 'Fancy Lunchables',
    img: lunchables,
    recipeAuthor: 'Kevin Ung',
    recipeFinder: '',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...CRACKERS, amount: 12, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COOKED_HAM, amount: 5, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...CHEDDAR_CHEESE, amount: 6, unit: '', additionalDetails: 'sliced or cubed', section: SECTIONS.MAIN },
        { ...LETTUCE, amount: 2, unit: INGREDIENT_UNITS.LEAF, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...BUTTER_PICKLE_CHIPS, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'plate' },
    ],
    directions: [
        { step: 'Assemble together these delicious cracker sandwiches with your favorite toppings.', type: SECTIONS.MAIN },
        { step: 'Go back to simpler times and enjoy these fancy lunchables.', type: SECTIONS.MAIN },
    ]
};