const bokChoyChicken = '../assets/Products/bok-choy-chicken.jpeg';
const { CATEGORIES, GENRES, TYPES, PROTEIN } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: bokChoyChicken,
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
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: '', type: '' },
    ]
};