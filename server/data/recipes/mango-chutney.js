// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CARDAMOM, CINNAMON, CLOVES, CORIANDER, CUMIN, GARLIC, GINGER, LARGE_POT, MANGO, MASHER, NIGELLA_SEED, RED_CHILI, SALT, STOVE, TURMERIC, VEGETABLE_OIL, WHITE_SUGAR, WHITE_VINEGAR } = require('./ingredients');

const MANGO_SECTION = 'Mango';
const COOK_SPICES = 'Cook Spices';
const COOK_MANGO = 'Cook Mango';

module.exports = {
    wip: true,
    cardName: 'Mango Chutney',
    name: 'Mango Chutney',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.SAUCE],
    genre: [GENRES.INDIAN],
    method: [METHODS.SIMMER],
    type: [TYPES.DIP],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 2.5, unit: YIELD_UNITS.PINT },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Mango Chutney', 
            link: 'https://www.daringgourmet.com/indian-mango-chutney/',
            authors: ['Kimberly Killebrew'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...RED_CHILI, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...NIGELLA_SEED, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CORIANDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CUMIN, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...TURMERIC, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CARDAMOM, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CLOVES, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CINNAMON, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MANGO_SECTION },
        { ...MANGO, amount: 5, unit: '', additionalDetails: 'peeled and diced', section: MANGO_SECTION },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MANGO_SECTION },
        { ...WHITE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MANGO_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        MASHER,
    ],
    directions: [
        { step: 'Over medium-high heat, heat oil in a large pot.', section: SECTIONS.COOK_VEGGIES },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients. Saute for 1 minute.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Add the "${SECTIONS.SEASONINGS}" section ingredients. Saute for 1 minute.`, section: COOK_SPICES },
        { step: `Add the "${MANGO_SECTION}" section ingredients. Stir and bring to a boil.`, section: COOK_MANGO },
        { step: 'Reduce to medium-low heat.', section: COOK_MANGO },
        { step: 'Let it simmer for 1 hour.', section: COOK_MANGO },
        { step: 'Remove from heat and let it cool.', section: COOK_MANGO },
        { step: 'Optionally mash using a potato masher.', section: COOK_MANGO },
        { step: 'Enjoy this with samosas, grilled meats, sandwiches, wraps and whatever you want.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};