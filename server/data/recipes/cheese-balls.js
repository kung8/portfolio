const cheeseBalls = '../assets/Products/cheese-balls.jpeg';
const { APPETIZER, SNACK } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: cheeseBalls,
    available: false,
    type: [SNACK, APPETIZER],
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