const roast = '../assets/Products/roast.jpeg';
const { LUNCH, DINNER } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: roast,
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