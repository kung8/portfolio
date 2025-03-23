const guacamole1 = '../assets/Products/guacamole-1.jpeg';
const guacamole2 = '../assets/Products/guacamole-2.jpeg';
const guacamole3 = '../assets/Products/guacamole-3.jpeg';
const guacamole4 = '../assets/Products/guacamole-4.jpeg';
const guacamole5 = '../assets/Products/guacamole-5.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, UNITS, YIELD_UNITS } = require('./constants');
const { AVOCADO, LIME, SALT, ROMA_TOMATO, YELLOW_ONION, CILANTRO, GARLIC, CAYENNE_PEPPER } = require('./ingredients');

module.exports = {
    cardName: 'Guacamole',
    name: 'Guacamole',
    img: guacamole5,
    available: true,
    recommended: true,
    category: [CATEGORIES.DIP],
    genre: [GENRES.MEXICAN],
    method: [METHODS.MIX],
    type: [TYPES.DIP],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: '10 m',
    waitTime: '1 h',
    websites: [
        { label: 'Guacamole', link: 'https://www.allrecipes.com/recipe/14231/guacamole/' }
    ],
    separated: true,
    ingredients: [
        { ...AVOCADO, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIME, amount: 1, unit: '', additionalDetails: 'juiced', section: SECTIONS.MAIN },
        { ...SALT, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: 2, unit: '', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...CILANTRO, amount: 3, unit: UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 1, unit: UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CAYENNE_PEPPER, amount: 1, unit: UNITS.PINCH, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Slice the avocados in half and remove the pit.', type: SECTIONS.MAIN, img: guacamole1 },
        { step: 'In a medium bowl, mash avocado.', type: SECTIONS.MAIN, img: guacamole2 },
        { step: 'Add the lime juice and salt. Mix.', type: SECTIONS.MAIN, img: guacamole3 },
        { step: 'Add the garlic, tomatoes, onion, and cilantro. Mix.', type: SECTIONS.MAIN, img: guacamole4 },
        { step: 'Add the cayenne. Mix.', type: SECTIONS.MAIN },
        { step: 'Cover and chill for 1 hour.', type: SECTIONS.MAIN },
        { step: 'Serve with your favorite chips.', type: SECTIONS.SERVE },
    ]
};