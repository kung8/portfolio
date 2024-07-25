const riceCrispyBall = '../assets/Products/rice-crispy-ball.jpeg';
const { CATEGORIES, GENRES, METHODS } = require("./constants");

module.exports = {
    cardName: '',
    name: '',
    img: riceCrispyBall,
    available: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    ingredients: [
        { name: '', amount: '', additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: '' },
    ],
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: '', type: '' },
    ]
};