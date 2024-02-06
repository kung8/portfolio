const lunchables = '../assets/Products/fancy-lunchables.jpeg';
const { LUNCH } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: lunchables,
    available: false,
    type: [LUNCH],
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