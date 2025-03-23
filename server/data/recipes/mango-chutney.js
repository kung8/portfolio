// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { VEGETABLE_OIL, GINGER, GARLIC, RED_CHILI, CORIANDER, CUMIN, TURMERIC, CARDAMOM, CLOVES, CINNAMON, SALT, MANGOES, WHITE_SUGAR, WHITE_VINEGAR, NIGELLA_SEED } = require('./ingredients');

const VEGGIES_SECTION = 'Veggies';
const SPICES_SECTION = 'Spices';
const MANGO_SECTION = 'Mango';

const COOK_VEGGIES = 'Cook Veggies';
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
    yields: { amount: 2.5, unit: YIELD_UNITS.PINT },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Mango Chutney', link: 'https://www.daringgourmet.com/indian-mango-chutney/' }
    ],
    separated: true,
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGGIES_SECTION },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VEGGIES_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: VEGGIES_SECTION },
        { ...RED_CHILI, amount: 1, unit: '', additionalDetails: '', section: VEGGIES_SECTION },
        { ...NIGELLA_SEED, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES_SECTION },
        { ...CORIANDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES_SECTION },
        { ...CUMIN, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES_SECTION },
        { ...TURMERIC, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES_SECTION },
        { ...CARDAMOM, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES_SECTION },
        { ...CLOVES, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES_SECTION },
        { ...CINNAMON, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICES_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MANGO_SECTION },
        { ...MANGOES, amount: 5, unit: '', additionalDetails: 'peeled and diced', section: MANGO_SECTION },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MANGO_SECTION },
        { ...WHITE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MANGO_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'potato masher' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat oil in a large pot.', type: COOK_VEGGIES },
        { step: 'Add the "Veggies" section ingredients. Saute for 1 minute.', type: COOK_VEGGIES },
        { step: 'Add the "Spices" section ingredients. Saute for 1 minute.', type: COOK_SPICES },
        { step: 'Add the "Mango" section ingredients. Stir and bring to a boil.', type: COOK_MANGO },
        { step: 'Reduce to medium-low heat.', type: COOK_MANGO },
        { step: 'Let it simmer for 1 hour.', type: COOK_MANGO },
        { step: 'Remove from heat and let it cool.', type: COOK_MANGO },
        { step: 'Optionally mash using a potato masher.', type: COOK_MANGO },
        { step: 'Enjoy this with samosas, grilled meats, sandwiches, wraps and whatever you want.', type: SECTIONS.SERVE },
        { step: 'You can store the chutney in a sealed jar for up to 2 months in the fridge or several months in the freezer.', type: SECTIONS.STORE },
    ]
};