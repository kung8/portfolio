const thaiMassamanCurry = '../assets/Products/thai-massaman-curry.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS } = require("./constants");
const {} = require('./ingredients');

module.exports = {
    cardName: 'Massaman Curry',
    name: 'Thai Massaman Curry',
    img: thaiMassamanCurry,
    available: false,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.THAI],
    method: [METHODS.SIMMER],
    type: [TYPES.CURRY, TYPES.RICE],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    ingredients: [
        { name: '', amount: '', additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: '' },
    ],
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: '', type: '' },
    ]
};