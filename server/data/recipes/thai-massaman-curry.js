const thaiMassamanCurry = '../assets/Products/thai-massaman-curry.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Massaman Curry',
    name: 'Thai Massaman Curry',
    img: thaiMassamanCurry,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: false,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    type: [TYPES.CURRY, TYPES.RICE],
    yields: { amount: '', unit: YIELD_UNITS.SERVING },
    prepTime: { amount: '', unit: TIME_UNITS.MINUTE },
    cookTime: { amount: '', unit: TIME_UNITS.MINUTE },
    waitTime: { amount: '', unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chicken Massaman Curry', link: 'https://www.favfamilyrecipes.com/chicken-massaman-curry/' }
    ],
    separated: true,
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
        { step: '', section: '' },
    ]
};