const mochi2 = '../assets/Products/mochi-2.jpeg';
const mochi3 = '../assets/Products/mochi-3.jpeg';
const mochi4 = '../assets/Products/mochi-4.jpeg';
const mochi5 = '../assets/Products/mochi-5.jpeg';
const mochi6 = '../assets/Products/mochi-6.jpeg';
const mochi8 = '../assets/Products/mochi-8.jpeg';
const mochi9 = '../assets/Products/mochi-9.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { WHITE_SUGAR, COLD_WATER, COCONUT_MILK, POTATO_STARCH, MOCHIKO, FOOD_COLORING } = require('./ingredients');

const MOCHI = 'Mochi';
const DUSTING = 'Dusting';

module.exports = {
    cardName: 'Mochi',
    name: 'Japanese Mochi',
    img: mochi8,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.JAPANESE],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 24, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Mochi', link: 'https://www.mochimommy.com/easy-homemade-mochi/' }
    ],
    separated: true,
    ingredients: [
        { ...MOCHIKO, amount: 7 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MOCHI },
        { ...WHITE_SUGAR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MOCHI },
        { ...COLD_WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MOCHI },
        { ...COCONUT_MILK, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MOCHI },
        { ...FOOD_COLORING, amount: 1, unit: INGREDIENT_UNITS.DROP, additionalDetails: 'preferred color', section: MOCHI },
        { ...POTATO_STARCH, amount: '', unit: '', additionalDetails: 'for dusting', section: DUSTING },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'glass baking pan' },
        { name: 'aluminum foil' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: MOCHI },
        { step: 'Grease the baking pan.', type: MOCHI },
        { step: 'In a mixing bowl, combine the "Mochi" ingredients.', type: MOCHI, img: [mochi2, mochi3] },
        { step: 'Pour mochi batter into the baking pan.', type: MOCHI, img: mochi4 },
        { step: 'Tightly cover the pan with aluminum foil.', type: MOCHI, img: mochi5 },
        { step: 'Bake until the mochi is cooked through (about 45 to 55 minutes).', type: MOCHI, img: mochi6 },
        { step: 'Let mochi completely cool before dusting.', type: MOCHI },
        { step: 'Dust the mochi with potato starch to prevent sticking.', type: DUSTING },
        { step: 'Cut the mochi into rectangles. Add more starch if needed.', type: DUSTING },
        { step: 'Enjoy these light delicious treats.', type: SECTIONS.SERVE, img: mochi9 },
    ]
};