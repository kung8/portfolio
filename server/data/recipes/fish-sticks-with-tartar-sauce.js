// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Fish Sticks with Tartar Sauce',
    name: 'Fish Sticks with Tartar Sauce',
    img: '',
    recipeCredit: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [],
    protein: [],
    type: [],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    websites: [
        { label: '', link: '' }
    ],
    separated: true,
    ingredients: [
        { ...GENRES, amount: '', unit: '', additionalDetails: '', section: '' },
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