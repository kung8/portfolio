const mochi1 = '../assets/Products/mochi-1.jpeg';
const mochi2 = '../assets/Products/mochi-2.jpeg';
const mochi3 = '../assets/Products/mochi-3.jpeg';
const mochi4 = '../assets/Products/mochi-4.jpeg';
const mochi5 = '../assets/Products/mochi-5.jpeg';
const mochi6 = '../assets/Products/mochi-6.jpeg';
const mochi7 = '../assets/Products/mochi-7.jpeg';
const mochi8 = '../assets/Products/mochi-8.jpeg';
const mochi9 = '../assets/Products/mochi-9.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { WHITE_SUGAR, COLD_WATER, COCONUT_MILK, POTATO_STARCH, MOCHIKO, FOOD_COLORING } = require('./ingredients');

const MOCHI = 'Mochi';
const DUSTING = 'Dusting';

module.exports = {
    cardName: 'Mochi',
    name: 'Japanese Mochi',
    img: mochi8,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.JAPANESE],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: '24 pieces',
    prepTime: '10 m',
    cookTime: '1 hr',
    websites: [
        { label: 'Mochi', link: 'https://www.mochimommy.com/easy-homemade-mochi/' }
    ],
    separated: true,
    ingredients: [
        { ...MOCHIKO, amount: '1 3/4 c', additionalDetails: '', section: MOCHI },
        { ...WHITE_SUGAR, amount: '1 1/4 c', additionalDetails: '', section: MOCHI },
        { ...COLD_WATER, amount: '1 c', additionalDetails: '', section: MOCHI },
        { ...COCONUT_MILK, amount: '3/4 c', additionalDetails: '', section: MOCHI },
        { ...FOOD_COLORING, amount: '1 drop', additionalDetails: 'preferred color', section: MOCHI },
        { ...POTATO_STARCH, amount: '', additionalDetails: 'for dusting', section: DUSTING },
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
        { step: 'In a mixing bowl, combine the "Mochi" ingredients.', type: MOCHI, img: [mochi1, mochi2, mochi3] },
        { step: 'Pour mochi batter into the baking pan.', type: MOCHI, img: mochi4 },
        { step: 'Tightly cover the pan with aluminum foil.', type: MOCHI, img: mochi5 },
        { step: 'Bake until the mochi is cooked through (about 45 to 55 minutes).', type: MOCHI, img: mochi6 },
        { step: 'Let mochi completely cool before dusting.', type: MOCHI },
        { step: 'Dust the mochi with potato starch to prevent sticking.', type: DUSTING },
        { step: 'Cut the mochi into rectangles. Add more starch if needed.', type: DUSTING },
        { step: 'Enjoy these light delicious treats.', type: SECTIONS.SERVE, img: [mochi7, mochi9] },
    ]
};