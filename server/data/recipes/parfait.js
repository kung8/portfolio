const parfait1 = '../assets/Products/parfait-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
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
    img: parfait1,
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.TREE_NUT],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
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