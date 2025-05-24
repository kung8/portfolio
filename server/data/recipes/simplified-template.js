// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
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
    method: s,
    protein: '{{protein}}',
    type: '{{type}}',
    yields: { amount: '', unit: '{{yieldUnit}}' },
    prepTime: { amount: '{{prepTime}}', unit: '{{prepTimeUnit}}' },
    cookTime: { amount: '{{cookTime}}', unit: '{{cookTimeUnit}}' },
    waitTime: { amount: '{{waitTime}}', unit: '{{waitTimeUnit}}' },
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