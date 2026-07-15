const compote1 = '../assets/Products/fruit-compote-1.jpeg';
const compote2 = '../assets/Products/fruit-compote-2.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { LEMON_JUICE, SAUCEPAN, STOVE, STRAWBERRY, WHITE_SUGAR } = require('./ingredients');

const COMPOTE_SECTION = 'Compote';
const COOK_COMPOTE = 'Cook Compote';

module.exports = {
    cardName: 'Fruit Compote',
    name: 'Fruit Compote',
    img: compote2,
    available: true,
    recommended: true,
    createdAt: '2026-06-07 01:43:24',
    modifiedAt: '2026-07-12 19:47:33',
    category: [CATEGORIES.SAUCE, CATEGORIES.TOPPING],
    genre: [GENRES.FRENCH],
    method: [METHODS.SIMMER],
    type: [TYPES.SAUCE],
    yields: { amount: 2, unit: YIELD_UNITS.CUP },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Caroline Vance'],
            finder: 'Caroline Vance',
        }
    ],
    ingredients: [
        { ...STRAWBERRY, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'or preferred fruit', section: COMPOTE_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COMPOTE_SECTION },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: COMPOTE_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
    ],
    directions: [
        { step: `Over medium heat, combine all the ingredients in a saucepan.`, section: COOK_COMPOTE },
        { step: `Bring to a boil stirring occasionally.`, section: COOK_COMPOTE, img: compote1 },
        { step: `Once the fruit breaks down, turn the heat to low, and let simmer until the sauce is thick.`, section: COOK_COMPOTE },
        { step: `Let it cool before serving.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `Use your favorite fruit: frozen or fresh.` },
    ],
    store: [
        {
            duration: { amount: 10, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};