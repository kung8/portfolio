const mushroom1 = '../assets/Products/caramelized-mushroom-1.jpeg';
const mushroom2 = '../assets/Products/caramelized-mushroom-2.jpeg';
const mushroom3 = '../assets/Products/caramelized-mushroom-3.jpeg';
const mushroom4 = '../assets/Products/caramelized-mushroom-4.jpeg';

const { CATEGORIES, SECTIONS, GENRES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS, TYPES, ALLERGIES, DIET } = require("./constants");
const {
    BALSAMIC_VINEGAR,
    BLACK_PEPPER,
    BROWN_SUGAR,
    FRYING_PAN,
    LIGHT_SOY_SAUCE,
    MUSHROOM,
    SALT,
    STOVE,
    UNSALTED_BUTTER,
} = require('./ingredients');

const CARAMELIZED_MUSHROOMS = 'Caramelized Mushrooms';
const CARAMELIZE_MUSHROOMS = 'Caramelize Mushrooms';

module.exports = {
    cardName: 'Caramelized Mushroom',
    name: 'Caramelized Mushroom',
    img: mushroom4,
    available: true,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 2, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Justin Ung'],
            finder: 'Justin Ung'
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CARAMELIZED_MUSHROOMS },
        { ...MUSHROOM, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CARAMELIZED_MUSHROOMS },

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
        { step: 'Over medium-high heat, melt butter in a pan.', section: CARAMELIZE_MUSHROOMS },
        { step: 'Add the mushroom and let it brown.', section: CARAMELIZE_MUSHROOMS, img: mushroom1 },

        { step: `When the mushroom begins to brown, add the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.COOK_SAUCE },
        { step: 'Stir. Cook for 3 minutes.', section: SECTIONS.COOK_SAUCE, img: mushroom2 },
        { step: 'Season with salt and pepper. Cook until mushrooms are browned and soft.', section: SECTIONS.COOK_SAUCE },

        { step: 'Serve as a topping for pizza, burgers, or meat.', section: SECTIONS.SERVE, img: mushroom3 },
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