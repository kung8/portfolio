const hamburger = '../assets/Products/hamburger.jpeg';
const { CATEGORIES, SECTIONS } = require('./constants');

module.exports = {
    cardName: 'Hamburger',
    name: 'Hamburger',
    img: hamburger,
    available: true,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    yields: '8 servings',
    prepTime: '5 m',
    cookTime: '50 m',
    separated: true,
    ingredients: [
        { name: 'ground turkey', amount: '3 lbs', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'egg', amount: '1', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'bread crumb', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'onion', amount: '1/4', additionalDetails: 'diced', optional: false, section: SECTIONS.MAIN },
        { name: 'hamburger bun', amount: '8', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'red onion', amount: '1', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'pickle', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'tomato', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'spinach', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'cheese slices', amount: '8', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
        { name: 'mushroom', amount: '', additionalDetails: '', optional: false, section: SECTIONS.TOPPINGS },
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