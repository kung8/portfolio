const baked1 = '../assets/Products/rosemary-fries-baked-1.jpeg';
const baked2 = '../assets/Products/rosemary-fries-baked-2.jpeg';
const plated2 = '../assets/Products/rosemary-fries-plated-2.jpeg';
const seasoned = '../assets/Products/rosemary-fries-seasoned.jpeg';
const seasonings1 = '../assets/Products/rosemary-fries-seasonings-1.jpeg';
const seasonings2 = '../assets/Products/rosemary-fries-seasonings-2.jpeg';
const tray2 = '../assets/Products/rosemary-fries-tray-2.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { OLIVE_OIL, ROSEMARY, GARLIC, CORNSTARCH, SALT, BLACK_PEPPER, SWEET_POTATO } = require('./ingredients');

module.exports = {
    cardName: 'Rosemary Fries',
    name: 'Rosemary Fries',
    img: baked2,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Rosemary Sweet Potato Fries', link: 'https://www.tasteofhome.com/recipes/rosemary-sweet-potato-fries/' }
    ],
    separated: false,
    ingredients: [
        { ...OLIVE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROSEMARY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SWEET_POTATO, amount: 3, unit: '', additionalDetails: 'or preferred potato, peeled and 1/4 inch julienned strip', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: '2 baking sheets' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Preheat oven to 425ºF.', section: SECTIONS.MAIN },
        { step: 'Prepare baking sheet with cooking spray.', section: SECTIONS.MAIN },
        { step: 'In a mixing bowl, combine all the herbs, spices and liquids.', section: SECTIONS.MAIN, img: [seasonings1, seasonings2] },
        { step: 'Add the potatoes. Mix.', section: SECTIONS.MAIN, img: seasoned },
        { step: 'Arrange the fries in a single layer on baking sheet.', section: SECTIONS.MAIN, img: tray2 },
        { step: 'Bake until tender and lightly browned (for about 30 to 35 minutes). Turn occasionally.', section: SECTIONS.MAIN, img: baked1 },
        { step: 'Enjoy this delicious side!', section: SECTIONS.MAIN, img: plated2 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until heated through and crispy (about 3 to 5 minutes).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 400ºF until heated through and crispy (about 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};