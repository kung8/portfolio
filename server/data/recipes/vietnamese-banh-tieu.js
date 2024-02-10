const banhTieu = '../assets/Products/banh-tieu.jpeg';
const { CATEGORIES, SECTIONS } = require('./constants');

module.exports = {
    cardName: '',
    name: '',
    img: banhTieu,
    available: false,
    type: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
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