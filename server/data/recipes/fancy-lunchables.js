const lunchables1 = '../assets/Products/fancy-lunchables-1.jpeg';
const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const { BUTTER_PICKLE_CHIPS, CHEDDAR_CHEESE, COOKED_HAM, CRACKERS, LETTUCE, ROMA_TOMATO, PLATE } = require('./ingredients');

const LUNCHABLES = 'Lunchables';

module.exports = {
    cardName: 'Fancy Lunchables',
    name: 'Fancy Lunchables',
    img: lunchables1,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    type: [TYPES.FINGER_FOOD],
    allergies: [],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...CRACKERS, amount: 12, unit: '', additionalDetails: '', section: LUNCHABLES },
        { ...COOKED_HAM, amount: 5, unit: '', additionalDetails: 'sliced', section: LUNCHABLES },
        { ...CHEDDAR_CHEESE, amount: 6, unit: '', additionalDetails: 'sliced or cubed', section: LUNCHABLES },
        { ...LETTUCE, amount: 2, unit: INGREDIENT_UNITS.LEAF, additionalDetails: 'sliced', section: LUNCHABLES },
        { ...ROMA_TOMATO, amount: 1, unit: '', additionalDetails: 'sliced', section: LUNCHABLES },
        { ...BUTTER_PICKLE_CHIPS, amount: 6, unit: '', additionalDetails: '', section: LUNCHABLES },
    ],
    supplies: [
        PLATE,
    ],
    directions: [
        { step: `Assemble together these delicious cracker sandwiches with your favorite toppings.`, section: SECTIONS.ASSEMBLE },
        { step: `Go back to simpler times and enjoy these fancy lunchables.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the ingredients separately. Assemble when ready to eat.',
        },
    ],
    reheat: null,
    mealPrep: false,
};