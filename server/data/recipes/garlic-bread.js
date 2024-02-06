const garlicBread = '../assets/Products/garlic-bread.jpeg';
const { APPETIZER, SIDE_DISH } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: garlicBread,
    available: false,
    type: [APPETIZER, SIDE_DISH],
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