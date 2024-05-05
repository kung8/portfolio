const broccoliBeef = '../assets/Products/chinese-broccoli-beef.jpeg';
const { CATEGORIES, GENRES, TYPES, PROTEIN } = require("./constants");

module.exports = {
    cardName: 'Broccoli Beef',
    name: 'Chinese Broccoli Beef',
    img: broccoliBeef,
    available: false,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    protein: [PROTEIN.CHICKEN],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    ingredients: [
        { name: '', amount: '', additionalDetails: '', optional: false, section: '' },
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