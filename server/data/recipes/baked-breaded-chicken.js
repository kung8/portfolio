const cooked = '../assets/Products/baked-breaded-chicken-cooked.jpeg';
const breadedRaw = '../assets/Products/baked-breaded-chicken-breaded-raw.jpeg';
const breading = '../assets/Products/baked-breaded-chicken-breading.jpeg';
const oil = '../assets/Products/baked-breaded-chicken-oil.jpeg';
const plated = '../assets/Products/baked-breaded-chicken-plated.jpeg';
const seasoned = '../assets/Products/baked-breaded-chicken-seasoned.jpeg';
const full = '../assets/Products/basil-pesto-meal-plated.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

const BREADING = 'Breading';
const DREDGING = 'Dredging';

module.exports = {
    cardName: 'Baked Breaded Chicken',
    name: 'Baked Breaded Chicken',
    img: plated,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: '6 servings',
    prepTime: '8 m',
    cookTime: '30 m',
    websites: [
        "https://www.eazypeazymealz.com/baked-breaded-chicken/"
    ],
    separated: true,
    ingredients: [
        { name: 'bread crumb', amount: '1/2 c', additionalDetails: '', section: BREADING },
        { name: 'panko', amount: '1/2 c', additionalDetails: '', section: BREADING },
        { name: 'parmesan', amount: '2/3 c', additionalDetails: '', section: BREADING },
        { name: 'basil', amount: '1 tsp', additionalDetails: '', section: BREADING },
        { name: 'oregano', amount: '1 tsp', additionalDetails: '', section: BREADING },
        { name: 'onion powder', amount: '1/2 tsp', additionalDetails: '', section: BREADING },
        { name: 'black pepper', amount: '1/4 tsp', additionalDetails: '', section: BREADING },
        { name: 'olive oil', amount: '1/4 c', additionalDetails: '', section: DREDGING },
        { name: 'garlic', amount: '2 cloves', additionalDetails: 'minced', section: DREDGING },
        { name: 'paprika', amount: '1/2 tsp', additionalDetails: '', section: DREDGING },
        { name: 'chicken breast', amount: '6', additionalDetails: 'halved', section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'season', section: SECTIONS.MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'season', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'shallow dish' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'In a shallow dish, combine the breading ingredients.', type: BREADING, img: breading },
        { step: 'In a small bowl, combine the dredging ingredients.', type: DREDGING, img: oil },
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'Season the chicken with salt and black pepper generously.', type: SECTIONS.MAIN, img: seasoned },
        { step: 'Dip the chicken in the dredging bowl then dip the chicken into the breading. Make sure to cover all of it.', type: SECTIONS.MAIN },
        { step: 'Place the breaded chicken in a baking dish.', type: SECTIONS.MAIN, img: breadedRaw },
        { step: 'Bake for 30 to 35 minutes or until the chicken is cooked all the way through with an internal temperature of at least 165ºF.', type: SECTIONS.MAIN, img: cooked },
        { step: 'Enjoy this chicken with your favorite grain dish.', type: SECTIONS.MAIN, img: full },
    ]
};