const { SIDE_DISH, LUNCH, DINNER } = require("./constants");

const bokChoyChicken = '../assets/Products/bok-choy-chicken.jpeg';

module.exports = {
    cardName: '',
    name: '',
    img: bokChoyChicken,
    available: false,
    type: [SIDE_DISH, LUNCH, DINNER],
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