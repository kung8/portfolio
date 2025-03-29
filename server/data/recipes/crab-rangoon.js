// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Crab Rangoon',
    name: 'Crab Rangoon',
    img: '',
    available: false,
    recommended: false,
    category: [],
    genre: [],
    method: [],
    protein: [],
    type: [],
    yields: { amount: '', unit: YIELD_UNITS.SERVING },
    prepTime: { amount: '', unit: TIME_UNITS.MINUTE },
    cookTime: { amount: '', unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Crab Rangoon', link: 'https://recipesown.com/crab-rangoon-bombs-recipe/?fbclid=IwY2xjawHkXj5leHRuA2FlbQIxMQABHW6MmH3u3sZrK4dRskpVDYuPDXHHzA_GVRLrcxYhFFtTUsHT3ELRnVuneg_aem_rmkFE7uWsjW5_ZB-DT6ovA' }
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