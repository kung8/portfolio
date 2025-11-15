const syrup1 = '../assets/Products/buttermilk-syrup-1.jpeg';
const syrup2 = '../assets/Products/buttermilk-syrup-2.jpeg';

const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require("./constants");
const {
    BAKING_SODA,
    BUTTERMILK,
    SAUCEPAN,
    SPATULA,
    STOVE,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WHITE_SUGAR,
} = require('./ingredients');

const SUGAR_MIXTURE = 'Sugar Mixture';
const FOAM_MIXTURE = 'Foam Mixture';

const COOK_SUGAR_MIXTURE = 'Cook Sugar Mixture';
const MIX_FOAM_MIXTURE = 'Mix Foam Mixture';

module.exports = {
    cardName: 'Buttermilk Syrup',
    name: 'Buttermilk Syrup',
    img: syrup2,
    available: true,
    recommended: true,
    category: [CATEGORIES.SAUCE, CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.SAUCE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Buttermilk Syrup',
            link: 'https://www.allrecipes.com/recipe/239478/grandmas-buttermilk-syrup/',
            authors: ['Katie Madrian'],
            finder: 'Camille Pockrus',
        }
    ],
    ingredients: [
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },
        { ...BUTTERMILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },

        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FOAM_MIXTURE },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FOAM_MIXTURE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        SPATULA,
    ],
    directions: [
        { step: `In a saucepan, combine "${SUGAR_MIXTURE}" section ingredients.`, section: COOK_SUGAR_MIXTURE, img: syrup1 },
        { step: `Over medium-high heat, bring to a boil (about 5 minutes). Stir occasionally.`, section: COOK_SUGAR_MIXTURE, img: syrup1 },
        { step: `Remove from heat.`, section: COOK_SUGAR_MIXTURE },

        { step: `Add baking soda and vanilla. Stir.`, section: MIX_FOAM_MIXTURE },

        { step: `Enjoy this over your favorite breakfast foods.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave in 15 second intervals until heated through. Stir in between intervals to ensure even heating.',
        },
    ],
    mealPrep: true,
};