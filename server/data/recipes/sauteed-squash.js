const squash1 = '../assets/Products/sauteed-squash-1.jpeg';
const squash2 = '../assets/Products/sauteed-squash-2.jpeg';
const squash3 = '../assets/Products/sauteed-squash-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    FRYING_PAN,
    OLIVE_OIL,
    PARMESAN_CHEESE,
    SALT,
    SPATULA,
    STOVE,
    SUMMER_SQUASH,
    THYME,
    UNSALTED_BUTTER,
    YELLOW_ONION,
    ZUCCHINI,
} = require('./ingredients');

const CARAMELIZED_ONION_SECTION = 'Caramelized Onions';

const CARAMELIZE_ONION = 'Caramelize Onion';
const MELT_CHEESE = 'Melt Cheese';

module.exports = {
    cardName: 'Sauteed Squash',
    name: 'Sauteed Squash',
    img: squash3,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Sauteed Zucchini',
            link: "https://www.wellplated.com/sauteed-zucchini/",
            authors: ['Erin Clarke'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CARAMELIZED_ONION_SECTION },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CARAMELIZED_ONION_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', section: CARAMELIZED_ONION_SECTION },

        { ...ZUCCHINI, amount: 3, unit: '', additionalDetails: 'sliced into 2"', section: SECTIONS.VEGGIES },
        { ...SUMMER_SQUASH, amount: 1, unit: '', additionalDetails: 'sliced into 2"', section: SECTIONS.VEGGIES },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...THYME, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },

        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        SPATULA,
    ],
    directions: [
        { step: `Over medium-low heat, heat "${CARAMELIZED_ONION_SECTION}" section ingredients in a pan.`, section: CARAMELIZE_ONION, img: squash1 },
        { step: 'Cook until lightly browned (about 10 minutes).', section: CARAMELIZE_ONION, img: squash1 },

        { step: 'Increase to medium heat.', section: SECTIONS.COOK_VEGGIES },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients.`, section: SECTIONS.COOK_VEGGIES },
        { step: 'Cook until tender (about 10 to 15 minutes). Stirring occasionally.', section: SECTIONS.COOK_VEGGIES },

        { step: 'Remove pan from heat. Add parmesan. Stir until blended.', section: MELT_CHEESE, img: squash2 },

        { step: 'Serve this on the side of any pasta dish.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium-high heat, heat the squash in a single layer in a pan. Let it crisp up on both sides.',
        },
    ],
    mealPrep: true,
};