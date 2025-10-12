const parfait = '../assets/Products/parfait.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, TYPES } = require("./constants");
const {
    BERRY,
    CASHEWS,
    GRANOLA,
    HONEY,
    PLAIN_YOGURT,
    VANILLA_EXTRACT,
} = require('./ingredients');

module.exports = {
    cardName: 'Parfait',
    name: 'Parfait',
    img: parfait,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    type: [TYPES.DESSERT],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...PLAIN_YOGURT, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'optional', section: SECTIONS.MAIN },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'optional', section: SECTIONS.MAIN },
        { ...GRANOLA, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.MAIN },
        { ...BERRY, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.MAIN },
        { ...CASHEWS, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'bowl' },
        { name: 'spoon' },
    ],
    directions: [
        { step: 'Fill a bowl with yogurt.', section: SECTIONS.MAIN },
        { step: 'Mix in vanilla and honey.', section: SECTIONS.MAIN },
        { step: 'Cover with preferred toppings such as granola, fruits, and nuts.', section: SECTIONS.MAIN },
        { step: 'Enjoy a light breakfast / snack.', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};