const hamburger = '../assets/Products/hamburger.jpeg';
const { DINNER, LUNCH, MAIN, TOPPINGS } = require('./constants');

module.exports = {
    cardName: 'Hamburger',
    name: 'Hamburger',
    img: hamburger,
    available: true,
    type: [LUNCH, DINNER],
    yields: '8 servings',
    prepTime: '5 m',
    cookTime: '50 m',
    separated: true,
    ingredients: [
        { name: 'ground turkey', amount: '3 lbs', additionalDetails: '', optional: false, section: MAIN },
        { name: 'egg', amount: '1', additionalDetails: '', optional: false, section: MAIN },
        { name: 'bread crumb', amount: '', additionalDetails: '', optional: false, section: MAIN },
        { name: 'onion', amount: '1/4', additionalDetails: 'diced', optional: false, section: MAIN },
        { name: 'hamburger bun', amount: '8', additionalDetails: '', optional: false, section: TOPPINGS },
        { name: 'red onion', amount: '1', additionalDetails: '', optional: false, section: TOPPINGS },
        { name: 'pickle', amount: '', additionalDetails: '', optional: false, section: TOPPINGS },
        { name: 'tomato', amount: '', additionalDetails: '', optional: false, section: TOPPINGS },
        { name: 'spinach', amount: '', additionalDetails: '', optional: false, section: TOPPINGS },
        { name: 'cheese slices', amount: '8', additionalDetails: '', optional: false, section: TOPPINGS },
        { name: 'mushroom', amount: '', additionalDetails: '', optional: false, section: TOPPINGS },
    ],
    supplies: [
        { name: 'aluminum foil' },
        { name: 'large mixing bowl' },
    ],
    directions: [
        { step: 'Preheat oven to 425ºF.', type: MAIN },
        { step: 'Mix together turkey, egg, bread crumb, and onion inside mixing bowl.', type: MAIN },
        { step: 'Ball up meat mixture and flatten into patties.', type: MAIN },
        { step: 'Place aluminum foil on baking sheet.', type: MAIN },
        { step: 'Place patties on baking sheet and bake for 30 minutes.', type: MAIN },
        { step: 'Broil for 5 minutes.', type: MAIN },
        { step: 'Serve on hamburger bun with preferred toppings and condiments (and fries or preferred side optional).', type: MAIN },
    ]
};