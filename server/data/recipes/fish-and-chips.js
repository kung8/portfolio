// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Fish and Chips',
    name: 'Fish and Chips',
    img: '',
    recipeCredit: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.BRITISH],
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