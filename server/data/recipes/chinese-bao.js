const bao = '../assets/Products/bao.jpeg';
const { CATEGORIES, GENRES, METHODS, TYPES } = require("./constants");

module.exports = {
    cardName: 'Bao',
    name: 'Chinese Bao',
    img: bao,
    available: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.STEAM],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT],
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