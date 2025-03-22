const side = '../assets/Products/ants-on-a-log-side.jpeg';
const straight = '../assets/Products/ants-on-a-log-straight-on.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, UNITS } = require('./constants');
const { CELERY, RAISINS, PEANUT_BUTTER } = require('./ingredients');

module.exports = {
    cardName: 'Ants on a Log',
    name: 'Ants on a Log',
    img: side,
    available: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.VEGETABLE, TYPES.FINGER_FOOD],
    yields: '3 servings',
    prepTime: '3 m',
    separated: false,
    ingredients: [
        { ...CELERY, amount: 4, unit: UNITS.STALK, additionalDetails: '', section: SECTIONS.MAIN },
        { ...RAISINS, amount: '', unit: '', additionalDetails: 'topping', section: SECTIONS.MAIN },
        { ...PEANUT_BUTTER, amount: '', unit: '', additionalDetails: 'topping', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'knife' },
    ],
    directions: [
        { step: 'Cut and clean the celery stalks.', type: SECTIONS.MAIN },
        { step: 'Smear some peanut butter in each cut celery.', type: SECTIONS.MAIN },
        { step: 'Top with as many raisins on the peanut butter.', type: SECTIONS.MAIN },
        { step: 'Enjoy this healthy, nutritious snacks. The only bugs that I would be willing to eat on a regular basis.', type: SECTIONS.MAIN, img: straight },
    ]
};