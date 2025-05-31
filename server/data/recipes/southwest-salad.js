const salad = '../assets/Products/southwest-salad.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {} = require('./ingredients');

module.exports = {
    cardName: 'Southwest Salad',
    name: 'Southwest Salad',
    img: salad,
    recipeAuthor: '',
    recipeFinder: '',
    available: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SALAD, TYPES.PROTEIN],
    yields: { amount: '', unit: YIELD_UNITS.SERVING },
    prepTime: { amount: '', unit: TIME_UNITS.MINUTE },
    cookTime: { amount: '', unit: TIME_UNITS.MINUTE },
    ingredients: [
        { name: '', amount: '', unit: '', additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: '' },
    ],
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: '', section: '' },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};