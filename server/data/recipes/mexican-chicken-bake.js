const mexicanChickenBake = '../assets/Products/mexican-chicken-bake.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    cardName: 'Mexican Chicken Bake',
    name: 'Mexican Chicken Bake',
    img: mexicanChickenBake,
    available: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    yields: { amount: '', unit: YIELD_UNITS.SERVING },
    prepTime: { amount: '', unit: TIME_UNITS.MINUTE },
    cookTime: { amount: '', unit: TIME_UNITS.MINUTE },
    websites: [
        { label: '', link: '' }
    ],
    separated: true,
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