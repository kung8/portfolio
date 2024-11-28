const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    cardName: '',
    name: '',
    img: '',
    available: true,
    recommended: false,
    category: [],
    genre: [],
    method: [],
    protein: [],
    type: [],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    websites: [
        { label: '', link: '' }
    ],
    separated: false,
    ingredients: [
        { ...GENRES, amount: '', additionalDetails: '', section: '' },
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