const hamburger = '../assets/Products/hamburger.jpeg';
const { CATEGORIES, SECTIONS, TYPES, GENRES, METHODS, PROTEIN } = require('./constants');
const {
    BREADCRUMBS,
    CHEDDAR_CHEESE,
    EGGS,
    GROUND_TURKEY,
    HAMBURGER_BUNS,
    MEDIUM_YELLOW_ONION,
    MUSHROOMS,
    PICKLES,
    RED_ONION,
    ROMA_TOMATO,
    SPINACH,
} = require('./ingredients');

module.exports = {
    cardName: 'Hamburger',
    name: 'Hamburger',
    img: hamburger,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.WESTERN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    yields: '8 servings',
    prepTime: '5 m',
    cookTime: '50 m',
    separated: true,
    ingredients: [
        { ...GROUND_TURKEY, amount: '3 lbs', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGGS, amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BREADCRUMBS, amount: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MEDIUM_YELLOW_ONION, amount: '1/4', additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...HAMBURGER_BUNS, amount: '8', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...RED_ONION, amount: '1', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PICKLES, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SPINACH, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEDDAR_CHEESE, amount: '8', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...MUSHROOMS, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'aluminum foil' },
        { name: 'large mixing bowl' },
    ],
    directions: [
        { step: 'Preheat oven to 425ºF.', type: SECTIONS.MAIN },
        { step: 'Mix together turkey, egg, bread crumb, and onion inside mixing bowl.', type: SECTIONS.MAIN },
        { step: 'Ball up meat mixture and flatten into patties.', type: SECTIONS.MAIN },
        { step: 'Place aluminum foil on baking sheet.', type: SECTIONS.MAIN },
        { step: 'Place patties on baking sheet and bake for 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Broil for 5 minutes.', type: SECTIONS.MAIN },
        { step: 'Serve on hamburger bun with preferred toppings and condiments (and fries or preferred side optional).', type: SECTIONS.MAIN },
    ]
};