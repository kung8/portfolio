const log1 = '../assets/Products/ants-on-a-log-1.jpeg';
const log2 = '../assets/Products/ants-on-a-log-2.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CELERY, KNIFE, PEANUT_BUTTER, RAISINS } = require('./ingredients');

module.exports = {
    cardName: 'Ants on a Log',
    name: 'Ants on a Log',
    img: log2,
    recipeAuthors: ['Kevin Ung'],
    available: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.VEGETABLE, TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.PEANUT],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 3, unit: TIME_UNITS.MINUTE },
    separated: false,
    ingredients: [
        { ...CELERY, amount: 4, unit: INGREDIENT_UNITS.STALK, additionalDetails: '', section: SECTIONS.MAIN },
        { ...RAISINS, amount: '', unit: '', additionalDetails: 'topping', section: SECTIONS.MAIN },
        { ...PEANUT_BUTTER, amount: '', unit: '', additionalDetails: 'topping', section: SECTIONS.MAIN },
    ],
    supplies: [
        KNIFE,
    ],
    directions: [
        { step: 'Cut and clean the celery stalks.', section: SECTIONS.MAIN },
        { step: 'Smear some peanut butter in each cut celery.', section: SECTIONS.MAIN },
        { step: 'Top with as many raisins on the peanut butter.', section: SECTIONS.MAIN },
        { step: 'Enjoy this healthy, nutritious snacks. The only bugs that I would be willing to eat on a regular basis.', section: SECTIONS.MAIN, img: log1 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};
