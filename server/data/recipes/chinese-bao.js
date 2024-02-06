const bao = '../assets/Products/bao.jpeg';
const { APPETIZER } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: bao,
    available: false,
    type: [APPETIZER, SNACK],
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