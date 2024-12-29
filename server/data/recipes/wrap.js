const wraps = '../assets/Products/wraps.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require('./constants');
const { 
    CHEDDAR_CHEESE,
    COOKED_HAM,
    HONEY_MUSTARD,
    ROMA_TOMATO,
    SPINACH,
    TORTILLA,
} = require('./ingredients');

module.exports = {
    cardName: 'Wraps',
    name: 'Wraps',
    img: wraps,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    type: [TYPES.WRAP],
    yields: '1 serving',
    prepTime: '1 m',
    cookTime: '2 m',
    ingredients: [
        { ...TORTILLA, amount: '1', additionalDetails: '', optional: false },
        { ...COOKED_HAM, amount: '4', additionalDetails: 'preferred', optional: false },
        { ...SPINACH, amount: '', additionalDetails: '', optional: false },
        { ...CHEDDAR_CHEESE, amount: '3', additionalDetails: '', optional: false },
        { ...ROMA_TOMATO, amount: '1/2', additionalDetails: 'sliced', optional: false },
        { ...HONEY_MUSTARD, amount: '', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'plate' },
    ],
    directions: [
        { step: 'Place tortilla on a plate and lay on toppings in the center of tortilla as desired.', type: SECTIONS.MAIN },
        { step: 'Roll the edge towards the center of the tortilla and continue to completely roll wrap.', type: SECTIONS.MAIN },
    ]
}