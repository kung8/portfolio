const bbq = '../assets/Products/bbq-pulled-pork.jpeg';
const { CATEGORIES } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: bbq,
    available: false,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
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