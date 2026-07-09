// const example1 = '../assets/Products/example-1.jpeg';

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
const { SALT, SAUCEPAN, STOVE, STRAWBERRY, SYRUP } = require('./ingredients');

const COMPOTE_SECTION = 'Compote';
const COOK_COMPOTE = 'Cook Compote';

module.exports = {
    wip: true,
    cardName: 'Fruit Compote',
    name: 'Fruit Compote',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.SAUCE, CATEGORIES.TOPPING],
    genre: [GENRES.FRENCH],
    method: [METHODS.SIMMER],
    type: [TYPES.SAUCE],
    yields: { amount: 2, unit: YIELD_UNITS.CUP },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Fruit Compote', link: 'https://cookieandkate.com/simple-fruit-compote-recipe/', authors: ['Kathryne Taylor'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...STRAWBERRY, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: COMPOTE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.DASH, additionalDetails: '', section: COMPOTE_SECTION },
        { ...SYRUP, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: COMPOTE_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
    ],
    directions: [
        { step: `Over medium-high heat, combine all the ingredients in a saucepan.`, section: COOK_COMPOTE },
        { step: `Bring to a boil stirring occasionally (about 5 minutes for fresh fruits or 10 minutes for frozen fruits).`, section: COOK_COMPOTE },
        { step: `Reduce to medium heat. Mash, if needed, to get a smoother consistency.`, section: COOK_COMPOTE },
        { step: `Let it simmer, thicken and reduce in half (about 5 minutes).`, section: COOK_COMPOTE },
        { step: `Remove from heat. Taste and adjust the sweetness.`, section: COOK_COMPOTE },
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