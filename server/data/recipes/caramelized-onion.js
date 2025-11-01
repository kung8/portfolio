const onion1 = '../assets/Products/caramelized-onion-1.jpeg';
const onion2 = '../assets/Products/caramelized-onion-2.jpeg';
const onion3 = '../assets/Products/caramelized-onion-3.jpeg';
const onion4 = '../assets/Products/caramelized-onion-4.jpeg';
const onion5 = '../assets/Products/caramelized-onion-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BALSAMIC_VINEGAR,
    BLACK_PEPPER,
    BROWN_SUGAR,
    FRYING_PAN,
    LIGHT_SOY_SAUCE,
    RED_ONION,
    SALT,
    STOVE,
    UNSALTED_BUTTER,
} = require('./ingredients');

const CARAMELIZED_ONIONS = 'Caramelized Onions';
const CARAMELIZE_ONIONS = 'Caramelize Onions';

module.exports = {
    cardName: 'Caramelized Onion',
    name: 'Caramelized Onion',
    img: onion5,
    available: true,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 2, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Justin Ung'],
            finder: 'Justin Ung'
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CARAMELIZED_ONIONS },
        { ...RED_ONION, amount: 1, unit: '', additionalDetails: 'thinly sliced', section: CARAMELIZED_ONIONS },
        
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BALSAMIC_VINEGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN
    ],
    directions: [
        { step: `Over medium-high heat, melt butter in a pan.`, section: CARAMELIZE_ONIONS, img: onion1 },
        { step: `Add the red onions and let it brown.`, section: CARAMELIZE_ONIONS, img: onion2 },

        { step: `When the onion begins to brown, add the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.COOK_SAUCE },
        { step: `Stir. Cook for 3 minutes.`, section: SECTIONS.COOK_SAUCE },
        { step: `Season with salt and pepper. Cook until onions are browned and soft.`, section: SECTIONS.COOK_SAUCE, img: onion3 },

        { step: `Serve as a topping for pizza, burgers, or meat.`, section: SECTIONS.TOPPING, img: onion4 },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over low heat, reheat in a pan until warmed through.',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave for 30 second intervals. Stir between intervals.',
        },
    ],
    mealPrep: true,
};