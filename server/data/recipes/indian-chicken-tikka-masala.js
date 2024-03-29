const chickenTikkaMasala = '../assets/Products/chicken-tikka-masala.jpeg';
const { CATEGORIES } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: chickenTikkaMasala,
    available: false,
    type: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
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