const spices = '../assets/Products/baked-chicken-spices.jpeg';
const oil = '../assets/Products/baked-chicken-oil.jpeg';
const rawChicken = '../assets/Products/baked-chicken-raw-zoomed.jpeg';
const pan = '../assets/Products/baked-chicken-cooked.jpeg';
const plated = '../assets/Products/baked-chicken-plated.jpeg';
const full = '../assets/Products/baked-chicken-plated-full.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, REHEAT_METHODS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require("./constants");
const {
    CHICKEN_DRUMSTICKS,
    OLIVE_OIL,
    SALT,
    BLACK_PEPPER,
    GARLIC_POWDER,
    PAPRIKA,
    CAYENNE_PEPPER
} = require('./ingredients');

module.exports = {
    cardName: 'Baked Chicken',
    name: 'Baked Chicken',
    img: pan,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...CHICKEN_DRUMSTICKS, amount: 10, unit: INGREDIENT_UNITS.PIECE, additionalDetails: 'skin on', section: SECTIONS.MAIN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CAYENNE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'basting brush' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', section: SECTIONS.MAIN },
        { step: 'Place the chicken in the baking pan in a single layer.', section: SECTIONS.MAIN },
        { step: 'Mix the dry seasoning together.', section: SECTIONS.MAIN, img: spices },
        { step: 'Then add the oil.', section: SECTIONS.MAIN, img: oil },
        { step: 'Once all is mixed, use the basting brush to coat the top of the chicken.', section: SECTIONS.MAIN, img: rawChicken },
        { step: 'Bake the chicken for 40 - 50 minutes, or until the internal temperature reaches 165ºF.', section: SECTIONS.MAIN, img: pan },
        { step: 'Move them out of the pan so the oils does not gelatinize.', section: SECTIONS.MAIN, img: plated },
        { step: 'Serve with rice and your favorite veggies.', section: SECTIONS.SERVE, img: full },
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
            instruction: 'Bake at 350ºF until it reaches an internal temperature of 165ºF (about 20 to 25 minutes).',
        },
    ],
    mealPrep: true,
};