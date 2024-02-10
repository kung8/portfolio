const lunchables = '../assets/Products/fancy-lunchables.jpeg';
const { CATEGORIES } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: lunchables,
    available: false,
    type: [CATEGORIES.LUNCH],
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