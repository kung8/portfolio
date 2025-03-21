const thaiMassamanCurry = '../assets/Products/thai-massaman-curry.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS } = require("./constants");
const {} = require('./ingredients');

module.exports = {
    cardName: 'Massaman Curry',
    name: 'Thai Massaman Curry',
    img: thaiMassamanCurry,
    available: false,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    type: [TYPES.CURRY, TYPES.RICE],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    ingredients: [
        { name: '', amount: '', unit: '', additionalDetails: '', section: '' },
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