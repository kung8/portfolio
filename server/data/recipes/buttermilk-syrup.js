const cooked = '../assets/Products/buttermilk-syrup-cooked.jpeg';
const raw = '../assets/Products/buttermilk-syrup-raw.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, UNITS } = require("./constants");
const {
    WHITE_SUGAR,
    BUTTERMILK,
    UNSALTED_BUTTER,
    BAKING_SODA,
    VANILLA_EXTRACT,
} = require('./ingredients');

module.exports = {
    cardName: 'Buttermilk Syrup',
    name: 'Buttermilk Syrup',
    img: cooked,
    available: true,
    recommended: true,
    category: [CATEGORIES.SAUCE, CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.SAUCE],
    yields: '6 servings',
    prepTime: '5 m',
    cookTime: '5 m',
    websites: [
        { label: 'Buttermilk Syrup', link: 'https://www.allrecipes.com/recipe/239478/grandmas-buttermilk-syrup/' }
    ],
    ingredients: [
        { ...WHITE_SUGAR, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BUTTERMILK, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BAKING_SODA, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...VANILLA_EXTRACT, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Combine sugar, buttermilk, and butter in a saucepan. And heat over medium-high heat until it boils, about 5 minutes. Stir occasionally.', type: SECTIONS.SAUCE, img: raw },
        { step: 'Remove from heat, and add baking soda and vanilla. And stir.', type: SECTIONS.SAUCE },
    ]
};