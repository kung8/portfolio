// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, CATEGORIES, UNITS, YIELD_UNITS } = require('./constants');
const { DRY_MILK_POWDER, UNSALTED_BUTTER } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Browned Butter',
    name: 'Browned Butter',
    img: '',
    available: true,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.MELT],
    yields: { amount: 3 / 2, unit: YIELD_UNITS.CUP },
    prepTime: '1 m',
    cookTime: '5 m',
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 3 / 2, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...DRY_MILK_POWDER, amount: 1 / 3, unit: UNITS.CUP, additionalDetails: 'optional', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'tupperware' },
    ],
    directions: [
        { step: 'Over medium-low heat, melt butter in a saucepan.', type: SECTIONS.MAIN },
        { step: 'Add milk powder. Cook until milk solidifies and becomes golden brown. Stirring.', type: SECTIONS.MAIN },
        { step: 'Remove from heat and let residual heat continue to cook for 30 seconds.', type: SECTIONS.MAIN },
        { step: 'Transfer to tupperware and set aside.', type: SECTIONS.MAIN },
        { step: 'Use right away or store in the fridge to use later.', type: SECTIONS.STORE },
    ]
};