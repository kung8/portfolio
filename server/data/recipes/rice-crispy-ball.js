const riceCrispyBall = '../assets/Products/rice-crispy-ball.jpeg';
const { CATEGORIES } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: riceCrispyBall,
    available: false,
    type: [CATEGORIES.DESSERT],
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