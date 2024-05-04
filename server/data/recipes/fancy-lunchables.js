const lunchables = '../assets/Products/fancy-lunchables.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require("./constants");

module.exports = {
    cardName: 'Fancy Lunchables',
    name: 'Fancy Lunchables',
    img: lunchables,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.RAW],
    type: [TYPES.FINGER_FOOD],
    yields: '1 servings',
    prepTime: '5 m',
    cookTime: '0 m',
    ingredients: [
        { name: 'preferred cracker', amount: '12', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'ham slices', amount: '5', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'cheese', amount: '6', additionalDetails: 'sliced or cubed', optional: false, section: SECTIONS.MAIN },
        { name: 'lettuce', amount: '2 layers', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'tomato', amount: '1', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'butter pickle chips', amount: '6', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'plate' },
    ],
    directions: [
        { step: 'Assemble together these delicious cracker sandwiches with your favorite toppings.', type: SECTIONS.MAIN },
        { step: 'Go back to simpler times and enjoy these fancy lunchables.', type: SECTIONS.MAIN },
    ]
};