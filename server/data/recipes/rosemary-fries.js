const baked1 = '../assets/Products/rosemary-fries-baked-1.jpeg';
const baked2 = '../assets/Products/rosemary-fries-baked-2.jpeg';
const plated2 = '../assets/Products/rosemary-fries-plated-2.jpeg';
const seasoned = '../assets/Products/rosemary-fries-seasoned.jpeg';
const seasonings1 = '../assets/Products/rosemary-fries-seasonings-1.jpeg';
const seasonings2 = '../assets/Products/rosemary-fries-seasonings-2.jpeg';
const tray2 = '../assets/Products/rosemary-fries-tray-2.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { OLIVE_OIL, ROSEMARY, GARLIC, CORNSTARCH, SALT, BLACK_PEPPER, SWEET_POTATOES } = require('./ingredients');

module.exports = {
    cardName: 'Rosemary Fries',
    name: 'Rosemary Fries',
    img: baked2,
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '30 m',
    websites: [
        { label: 'Rosemary Sweet Potato Fries', link: 'https://www.tasteofhome.com/recipes/rosemary-sweet-potato-fries/' }
    ],
    separated: false,
    ingredients: [
        { ...OLIVE_OIL, amount: '3 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROSEMARY, amount: '1 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: '1 clove', unit: '', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: '1 tsp', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '3/4 tsp', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '1/8 tsp', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SWEET_POTATOES, amount: '3', unit: '', additionalDetails: 'or preferred potato, peeled and 1/4 inch julienned strip', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: '2 baking sheets' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Preheat oven to 425ºF.', type: SECTIONS.MAIN },
        { step: 'Prepare baking sheet with cooking spray.', type: SECTIONS.MAIN },
        { step: 'In a mixing bowl, combine all the herbs, spices and liquids.', type: SECTIONS.MAIN, img: [seasonings1, seasonings2] },
        { step: 'Add the potatoes. Mix.', type: SECTIONS.MAIN, img: seasoned },
        { step: 'Arrange the fries in a single layer on baking sheet.', type: SECTIONS.MAIN, img: tray2 },
        { step: 'Bake until tender and lightly browned (for about 30 to 35 minutes). Turn occasionally.', type: SECTIONS.MAIN, img: baked1 },
        { step: 'Enjoy this delicious side!', type: SECTIONS.MAIN, img: plated2 },
    ]
};