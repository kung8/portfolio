const tanghulu1 = '../assets/Products/tanghulu-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    SECTIONS,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { BAMBOO_SKEWERS, CANDY_THERMOMETER, GRAPE, STOVE, WATER, WHITE_SUGAR } = require('./ingredients');

const MAKE_TANGHULU = 'Make Tanghulu';

module.exports = {
    cardName: 'Tanghulu',
    name: 'Tanghulu',
    img: tanghulu1,
    available: true,
    recommended: false,
    category: [CATEGORIES.SNACK, CATEGORIES.DESSERT],
    genre: [GENRES.CHINESE],
    method: [METHODS.SIMMER],
    type: [TYPES.DESSERT],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 8, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Tanghulu', link: 'https://yejiskitchenstories.com/strawberry-tanghulu/', authors: ['Yejiskitchenstories'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: '' },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: '' },
        { ...GRAPE, amount: 10, unit: '', additionalDetails: '', section: '' },
    ],
    appliances: [
        STOVE,
        CANDY_THERMOMETER,
    ],
    supplies: [
        { ...BAMBOO_SKEWERS, amount: 2 },
    ],
    directions: [
        { step: `Wash and completely dry grapes (or preferred fruit).`, section: MAKE_TANGHULU },
        { step: `Thread them through a skewer.`, section: MAKE_TANGHULU },
        { step: `Over medium-high heat, combine sugar and water in a saucepan.`, section: MAKE_TANGHULU },
        { step: `Let the sugar dissolve. Use a candy thermometer to read the temperature. Bring the temperature to between 300ºF to 310ºF.`, section: MAKE_TANGHULU },
        { step: `Tilt the pan so the syrup collects on one side. Carefully dip the fruit skewer in the syrup or drizzle syrup over the fruit skewer.`, section: MAKE_TANGHULU },
        { step: `Enjoy!`, section: SECTIONS.SERVE },
    ],
    mealPrep: false,
};