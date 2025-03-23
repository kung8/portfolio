const biscuits = '../assets/Products/ted-lasso-biscuits.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    UNSALTED_BUTTER,
    POWDERED_SUGAR,
    ALL_PURPOSE_FLOUR,
    SALT,
} = require('./ingredients');

module.exports = {
    cardName: 'Lasso Biscuits',
    name: 'Ted Lasso Biscuits',
    img: biscuits,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    yields: { amount: 15, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 60, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'at room temperature', section: SECTIONS.MAIN },
        { ...POWDERED_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'baking pan' },
        { name: 'electric/standing mixer' },
    ],
    directions: [
        { step: 'Place butter in mixing bowl and beat until fluffy (about 3 to 5 minutes).', type: SECTIONS.MAIN },
        { step: 'Gradually add powdered sugar while butter is mixing.', type: SECTIONS.MAIN },
        { step: 'Add flour and salt to the bowl and continue mixing on low speed.', type: SECTIONS.MAIN },
        { step: 'Pour batter into the baking pan and refrigerate for about 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Slice into rectangles.', type: SECTIONS.MAIN },
        { step: 'Preheat the oven to 300ºF whenever ready to bake.', type: SECTIONS.MAIN },
        { step: 'Bake until the biscuits are golden brown (about 45 to 60 minutes).', type: SECTIONS.MAIN },
        { step: 'Enjoy these biscuits while you watch or re-watch the Ted Lasso television show. Cheers!', type: SECTIONS.MAIN },
    ]
};