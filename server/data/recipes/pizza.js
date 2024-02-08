const pizza = '../assets/Products/pizza.jpeg';
const pizzaDough = '../assets/Products/pizza-dough.jpeg';
const { LUNCH, DINNER } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: pizza,
    available: false,
    type: [LUNCH, DINNER],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    ingredients: [
        { name: '', amount: '', additionalDetails: '', optional: false, section: '' },
        { name: '', amount: '', additionalDetails: '', optional: false, section: '' },
        { name: '', amount: '', additionalDetails: '', optional: false, section: '' },
        { name: '', amount: '', additionalDetails: '', optional: false, section: '' },
        { name: '', amount: '', additionalDetails: '', optional: false, section: '' },
        { name: '', amount: '', additionalDetails: '', optional: false, section: '' },
    ],
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: '', type: '' },
    ]
};