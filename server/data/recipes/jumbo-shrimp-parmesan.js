// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , UNITS, YIELD_UNITS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Jumbo Shrimp Parmesan',
    name: 'Jumbo Shrimp Parmesan',
    img: '',
    available: false,
    recommended: false,
    category: [],
    genre: [],
    method: [],
    protein: [],
    type: [],
    yields: { amount: '', unit: YIELD_UNITS.SERVING },
    prepTime: 'm',
    cookTime: 'm',
    websites: [
        { label: 'Jumbo Shrimp Parmesan', link: 'https://www.food.com/recipe/jumbo-shrimp-parmesan-42169' }
    ],
    separated: false,
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