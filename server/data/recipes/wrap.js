const wrap1 = '../assets/Products/wrap-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    CHEDDAR_CHEESE,
    COOKED_HAM,
    HONEY_MUSTARD,
    ROMA_TOMATO,
    SPINACH,
    TORTILLA,
} = require('./ingredients');

module.exports = {
    cardName: 'Wraps',
    name: 'Wraps',
    img: wrap1,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    type: [TYPES.WRAP],
    allergies: [ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 2, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            author: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...TORTILLA, amount: 1, unit: '', additionalDetails: '', optional: false },
        { ...COOKED_HAM, amount: 4, unit: '', additionalDetails: 'preferred', optional: false },
        { ...SPINACH, amount: '', unit: '', additionalDetails: '', optional: false },
        { ...CHEDDAR_CHEESE, amount: 3, unit: '', additionalDetails: '', optional: false },
        { ...ROMA_TOMATO, amount: 1 / 2, unit: '', additionalDetails: 'sliced', optional: false },
        { ...HONEY_MUSTARD, amount: '', unit: '', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'plate' },
    ],
    directions: [
        { step: 'Place tortilla on a plate and lay on toppings in the center of tortilla as desired.', section: SECTIONS.MAIN },
        { step: 'Roll the edge towards the center of the tortilla and continue to completely roll wrap.', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: false,
}