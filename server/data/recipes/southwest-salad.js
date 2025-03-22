const salad = '../assets/Products/southwest-salad.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {} = require('./ingredients');

module.exports = {
    cardName: 'Southwest Salad',
    name: 'Southwest Salad',
    img: salad,
    available: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SALAD, TYPES.PROTEIN],
    yields: ' servings',
    prepTime: 'm',
    cookTime: 'm',
    ingredients: [
        { name: '', amount: '', unit: '', additionalDetails: '', section: '' },
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