const soupBowl = '../assets/Products/soup-bowl.jpeg';
const { MAIN } = require('./constants');

module.exports = {
    cardName: '',
    name: '',
    img: soupBowl,
    available: false,
    type: '',
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