// const rolls1 = '../assets/Products/texas-roadhouse-butter-rolls-1.jpeg';

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
const { BOWL, CINNAMON, HONEY, OVEN, POWDERED_SUGAR, ROLLS, SALT, UNSALTED_BUTTER } = require('./ingredients');

const TEXAS_ROADHOUSE_BUTTER = 'Texas Roadhouse Butter';
const BREAD_ROLLS_SECTIONS = 'Bread Rolls';

const MAKE_TEXAS_ROADHOUSE_BUTTER = 'Make Texas Roadhouse Butter';
const WARM_UP_ROLLS = 'Warm Up Rolls';

module.exports = {
    wip: true,
    cardName: 'Texas Roadhouse Butter Rolls',
    name: 'Texas Roadhouse Butter Rolls',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-06-10 20:46:27',
    modifiedAt: '2026-06-10 20:46:55',
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.MIX],
    type: [TYPES.DIP],
    yields: { amount: 8, unit: YIELD_UNITS.TABLESPOON },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 60, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Texas Roadhouse Butter',
            link: 'https://thecozycook.com/copycat-texas-roadhouse-butter/',
            authors: ['Stephanie'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 8, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'at room temperature', section: TEXAS_ROADHOUSE_BUTTER },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: TEXAS_ROADHOUSE_BUTTER },
        { ...POWDERED_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: TEXAS_ROADHOUSE_BUTTER },
        { ...HONEY, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: TEXAS_ROADHOUSE_BUTTER },
        { ...CINNAMON, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: TEXAS_ROADHOUSE_BUTTER },
        { ...ROLLS, amount: 12, unit: '', additionalDetails: '', section: BREAD_ROLLS_SECTIONS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BOWL,
    ],
    directions: [
        { step: `Let butter come to room temperature (about 1 hour).`, section: MAKE_TEXAS_ROADHOUSE_BUTTER },
        { step: `In a bowl, combine the "${TEXAS_ROADHOUSE_BUTTER}" section ingredients.`, section: MAKE_TEXAS_ROADHOUSE_BUTTER },
        { step: `Warm up store-bought rolls (or cook frozen rolls or make your own homemade rolls).`, section: WARM_UP_ROLLS },
        { step: `Serve the butter over your warm rolls and enjoy!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: `Store the butter in an airtight container in the fridge for up to 3 days.`
        },
    ],
    mealPrep: true,
};