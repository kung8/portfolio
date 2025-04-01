const cooked = '../assets/Products/baked-breaded-chicken-cooked.jpeg';
const breadedRaw = '../assets/Products/baked-breaded-chicken-breaded-raw.jpeg';
const breading = '../assets/Products/baked-breaded-chicken-breading.jpeg';
const oil = '../assets/Products/baked-breaded-chicken-oil.jpeg';
const plated = '../assets/Products/baked-breaded-chicken-plated.jpeg';
const seasoned = '../assets/Products/baked-breaded-chicken-seasoned.jpeg';
const full = '../assets/Products/basil-pesto-meal-plated.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    BREADCRUMBS,
    PANKO_BREADCRUMBS,
    PARMESAN_CHEESE,
    BASIL,
    OREGANO,
    ONION_POWDER,
    BLACK_PEPPER,
    OLIVE_OIL,
    GARLIC,
    PAPRIKA,
    CHICKEN_BREAST,
    SALT
} = require('./ingredients');

const BREADING = 'Breading';
const DREDGING = 'Dredging';

module.exports = {
    cardName: 'Baked Breaded Chicken',
    name: 'Baked Breaded Chicken',
    img: plated,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 8, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Baked Breaded Chicken', link: "https://www.eazypeazymealz.com/baked-breaded-chicken/" }
    ],
    separated: true,
    ingredients: [
        { ...BREADCRUMBS, amount: 1/2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BREADING },
        { ...PANKO_BREADCRUMBS, amount: 1/2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BREADING },
        { ...PARMESAN_CHEESE, amount: 2/3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BREADING },
        { ...BASIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BREADING },
        { ...OREGANO, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BREADING },
        { ...ONION_POWDER, amount: 1/2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BREADING },
        { ...BLACK_PEPPER, amount: 1/4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BREADING },
        { ...OLIVE_OIL, amount: 1/4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: DREDGING },
        { ...PAPRIKA, amount: 1/2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DREDGING },
        { ...CHICKEN_BREAST, amount: 6, unit: INGREDIENT_UNITS.PIECE, additionalDetails: 'halved', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
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