const guacamole1 = '../assets/Products/guacamole-1.jpeg';
const guacamole2 = '../assets/Products/guacamole-2.jpeg';
const guacamole3 = '../assets/Products/guacamole-3.jpeg';
const guacamole4 = '../assets/Products/guacamole-4.jpeg';
const guacamole5 = '../assets/Products/guacamole-5.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { AVOCADO, LIME, SALT, ROMA_TOMATO, YELLOW_ONION, CILANTRO, GARLIC, CAYENNE_PEPPER } = require('./ingredients');

module.exports = {
    cardName: 'Guacamole',
    name: 'Guacamole',
    img: guacamole5,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DIP],
    genre: [GENRES.MEXICAN],
    method: [METHODS.MIX],
    type: [TYPES.DIP],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Guacamole', link: 'https://www.allrecipes.com/recipe/14231/guacamole/' }
    ],
    separated: true,
    ingredients: [
        { ...AVOCADO, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIME, amount: 1, unit: '', additionalDetails: 'juiced', section: SECTIONS.MAIN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: 2, unit: '', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...CILANTRO, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CAYENNE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Slice the avocados in half and remove the pit.', section: SECTIONS.MAIN, img: guacamole1 },
        { step: 'In a medium bowl, mash avocado.', section: SECTIONS.MAIN, img: guacamole2 },
        { step: 'Add the lime juice and salt. Mix.', section: SECTIONS.MAIN, img: guacamole3 },
        { step: 'Add the garlic, tomatoes, onion, and cilantro. Mix.', section: SECTIONS.MAIN, img: guacamole4 },
        { step: 'Add the cayenne. Mix.', section: SECTIONS.MAIN },
        { step: 'Cover and chill for 1 hour.', section: SECTIONS.MAIN },
        { step: 'Serve with your favorite chips.', section: SECTIONS.SERVE },
    ]
};