const banhTieu = '../assets/Products/banh-tieu.jpeg';
const { MAIN, APPETIZER, SNACK } = require('./constants');

module.exports = {
    cardName: '',
    name: '',
    img: banhTieu,
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