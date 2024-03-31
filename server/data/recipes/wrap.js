const wraps = '../assets/Products/wraps.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require('./constants');

module.exports = {
    cardName: 'Wraps',
    name: 'Wraps',
    img: wraps,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.WESTERN],
    method: [METHODS.RAW],
    type: [TYPES.WRAP],
    yields: '1 serving',
    prepTime: '1 m',
    cookTime: '2 m',
    ingredients: [
        { name: 'tortilla', amount: '1', additionalDetails: '', optional: false },
        { name: 'lunch meat slices', amount: '4', additionalDetails: 'preferred', optional: false },
        { name: 'spinach', amount: '', additionalDetails: '', optional: false },
        { name: 'cheese slices', amount: '3', additionalDetails: '', optional: false },
        { name: 'tomato', amount: '1/2', additionalDetails: 'sliced', optional: false },
        { name: 'honey mustard', amount: '', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'plate' },
    ],
    directions: [
        { step: 'Place tortilla on a plate and lay on toppings in the center of tortilla as desired.', type: SECTIONS.MAIN },
        { step: 'Roll the edge towards the center of the tortilla and continue to completely roll wrap.', type: SECTIONS.MAIN },
    ]
}