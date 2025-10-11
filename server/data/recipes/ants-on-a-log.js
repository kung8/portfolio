const side = '../assets/Products/ants-on-a-log-side.jpeg';
const straight = '../assets/Products/ants-on-a-log-straight-on.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { CELERY, RAISINS, PEANUT_BUTTER, KNIFE } = require('./ingredients');

module.exports = {
    cardName: 'Ants on a Log',
    name: 'Ants on a Log',
    img: side,
    recipeAuthors: ['Kevin Ung'],
    available: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.VEGETABLE, TYPES.FINGER_FOOD],
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
        { step: 'Enjoy this healthy, nutritious snacks. The only bugs that I would be willing to eat on a regular basis.', section: SECTIONS.MAIN, img: straight },
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
