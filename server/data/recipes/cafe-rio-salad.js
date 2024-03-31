const cafeRioSalad = '../assets/Products/cafe-rio-salad.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS, PROTEIN } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: cafeRioSalad,
    available: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.MEXICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.SALAD],
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