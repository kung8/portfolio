// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: '{{cardName}}',
    name: '{{name}}',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: false,
    recommended: false,
    category: '{{category}}',
    genre: '{{genre}}',
    method: '{{method}}',
    protein: '{{protein}}',
    type: '{{type}}',
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        { label: '{{label}}', link: '{{link}}' }
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
        { step: '', section: '' },
    ]
};