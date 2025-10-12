const buttered = '../assets/Products/caramelized-onion-buttered-onion.jpeg';
const caramelized = '../assets/Products/caramelized-onion-caramelized-cooked.jpeg';
const combined = '../assets/Products/caramelized-onion-combined.jpeg';
const cooked = '../assets/Products/caramelized-onion-cooked.jpeg';
const sliced = '../assets/Products/caramelized-onion-thinly-sliced.jpeg';
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

module.exports = {
    cardName: 'Caramelized Onion',
    name: 'Caramelized Onion',
    img: caramelized,
    recipeAuthors: [''],
    recipeFinder: 'Justin Ung',
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
    ingredients: [
        { ...RED_ONION, amount: 1, unit: '', additionalDetails: 'thinly sliced', section: SECTIONS.TOPPING },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...BALSAMIC_VINEGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPING },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPING },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN
    ],
    directions: [
        { step: 'Over medium-high heat, melt butter in a pan.', section: SECTIONS.TOPPING, img: sliced },
        { step: 'Add the red onions and let it brown.', section: SECTIONS.TOPPING, img: buttered },
        { step: 'Add the brown sugar, balsamic vinegar, and soy sauce when the onions begins to brown.', section: SECTIONS.TOPPING },
        { step: 'Stir and cook for about 3 minutes.', section: SECTIONS.TOPPING },
        { step: 'Season with salt and pepper and cook until onions are browned and soft.', section: SECTIONS.TOPPING, img: cooked },
        { step: 'Serve as a topping for pizza, burgers, or meat.', section: SECTIONS.TOPPING, img: combined },
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