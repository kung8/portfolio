const parfait1 = '../assets/Products/parfait-1.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BERRY,
    BOWL,
    CASHEWS,
    GRANOLA,
    HONEY,
    PLAIN_YOGURT,
    SPOON,
    VANILLA_EXTRACT,
} = require('./ingredients');

const PARFAIT_SECTION = 'Parfait';
const PREP_PARFAIT = 'Prep Parfait';

module.exports = {
    cardName: 'Parfait',
    name: 'Parfait',
    img: parfait1,
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    type: [TYPES.DESSERT],
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
        { ...PLAIN_YOGURT, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PARFAIT_SECTION },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'optional', section: PARFAIT_SECTION },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'optional', section: PARFAIT_SECTION },
        { ...GRANOLA, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...BERRY, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...CASHEWS, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
    ],
    supplies: [
        BOWL,
        SPOON,
    ],
    directions: [
        { step: `Fill a bowl with yogurt.`, section: PREP_PARFAIT },
        { step: `Mix in vanilla and honey.`, section: PREP_PARFAIT },
        { step: `Cover with preferred toppings such as granola, fruits, and nuts.`, section: SECTIONS.TOP },

        { step: `Enjoy a light breakfast / snack.`, section: SECTIONS.SERVE },
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