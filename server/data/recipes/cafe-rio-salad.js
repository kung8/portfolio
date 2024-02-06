const cafeRioSalad = '../assets/Products/cafe-rio-salad.jpeg';
const { DINNER, LUNCH } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: cafeRioSalad,
    available: false,
    type: [LUNCH, DINNER],
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