const cooked = '../assets/Products/baked-breaded-chicken-cooked.jpeg';
const breadedRaw = '../assets/Products/baked-breaded-chicken-breaded-raw.jpeg';
const breading = '../assets/Products/baked-breaded-chicken-breading.jpeg';
const oil = '../assets/Products/baked-breaded-chicken-oil.jpeg';
const plated = '../assets/Products/baked-breaded-chicken-plated.jpeg';
const seasoned = '../assets/Products/baked-breaded-chicken-seasoned.jpeg';
const full = '../assets/Products/basil-pesto-meal-plated.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BAKING_PAN,
    BASIL,
    BLACK_PEPPER,
    BREADCRUMBS,
    CHICKEN_BREAST,
    GARLIC,
    MIXING_BOWL,
    OLIVE_OIL,
    ONION_POWDER,
    OREGANO,
    OVEN,
    PANKO_BREADCRUMBS,
    PAPRIKA,
    PARMESAN_CHEESE,
    SALT,
    SMALL_BOWL,
} = require('./ingredients');

const BREADING = 'Breading';
const DREDGING = 'Dredging';

module.exports = {
    cardName: 'Baked Breaded Chicken',
    name: 'Baked Breaded Chicken',
    img: plated,
    recipeAuthors: ['Rachael'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    allergies: [ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 8, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Baked Breaded Chicken', link: "https://www.eazypeazymealz.com/baked-breaded-chicken/" }
    ],
    separated: true,
    ingredients: [
        { ...BREADCRUMBS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BREADING },
        { ...PANKO_BREADCRUMBS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BREADING },
        { ...PARMESAN_CHEESE, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BREADING },
        { ...BASIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BREADING },
        { ...OREGANO, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BREADING },
        { ...ONION_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BREADING },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BREADING },

        { ...OLIVE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: DREDGING },
        { ...PAPRIKA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DREDGING },
        { ...CHICKEN_BREAST, amount: 6, unit: INGREDIENT_UNITS.PIECE, additionalDetails: 'halved', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN
    ],
    supplies: [
        BAKING_PAN,
        MIXING_BOWL,
        SMALL_BOWL,
    ],
    directions: [
        { step: 'In a mixing bowl, combine the breading ingredients.', section: BREADING, img: breading },
        { step: 'In a small bowl, combine the dredging ingredients.', section: DREDGING, img: oil },
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'Season the chicken with salt and black pepper generously.', section: SECTIONS.MAIN, img: seasoned },
        { step: 'Dip the chicken in the dredging bowl then dip the chicken into the breading. Make sure to cover all of it.', section: SECTIONS.MAIN },
        { step: 'Place the breaded chicken in a baking dish.', section: SECTIONS.MAIN, img: breadedRaw },
        { step: 'Bake for 30 to 35 minutes or until the chicken is cooked all the way through with an internal temperature of at least 165ºF.', section: SECTIONS.MAIN, img: cooked },
        { step: 'Enjoy this chicken with your favorite grain dish.', section: SECTIONS.MAIN, img: full },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 375ºF until heated through and breading is crispy (about 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};