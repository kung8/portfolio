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

const WRAP_SECTION = 'Wrap';

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
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    separated: true,
    ingredients: [
        { ...TORTILLA, amount: 1, unit: '', additionalDetails: '', section: WRAP_SECTION },
        { ...COOKED_HAM, amount: 4, unit: '', additionalDetails: 'preferred', section: SECTIONS.FILLING },
        { ...SPINACH, amount: '', unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...CHEDDAR_CHEESE, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...ROMA_TOMATO, amount: 1 / 2, unit: '', additionalDetails: 'sliced', section: SECTIONS.FILLING },
        { ...HONEY_MUSTARD, amount: '', unit: '', additionalDetails: '', section: SECTIONS.FILLING },
    ],
    supplies: [
        { name: 'plate' },
    ],
    directions: [
        { step: 'On a plate, place tortilla.', section: SECTIONS.ASSEMBLE },
        { step: 'Lay desired toppings in the center of tortilla.', section: SECTIONS.ASSEMBLE },

        { step: 'Roll the side closest to you towards the center.', section: SECTIONS.WRAP },
        { step: 'Fold over the left and right side.', section: SECTIONS.WRAP },
        { step: 'Continue rolling the rest of the wrap.', section: SECTIONS.WRAP },
        
        { step: 'Enjoy!', section: SECTIONS.SERVE },
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