const hamburger = '../assets/Products/hamburger.jpeg';
const { CATEGORIES, SECTIONS, TYPES, GENRES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    BREADCRUMBS,
    CHEDDAR_CHEESE,
    EGG,
    GROUND_TURKEY,
    HAMBURGER_BUNS,
    YELLOW_ONION,
    MUSHROOM,
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
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...GROUND_TURKEY, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BREADCRUMBS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1 / 4, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.MAIN },
        { ...HAMBURGER_BUNS, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...RED_ONION, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PICKLES, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SPINACH, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEDDAR_CHEESE, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...MUSHROOM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
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