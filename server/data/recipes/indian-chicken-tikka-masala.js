const chickenTikkaMasala = '../assets/Products/chicken-tikka-masala.jpeg';
const { SIDE_DISH, LUNCH, DINNER } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: chickenTikkaMasala,
    available: false,
    type: [SIDE_DISH, LUNCH, DINNER],
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