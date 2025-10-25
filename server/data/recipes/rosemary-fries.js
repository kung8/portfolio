const fries1 = '../assets/Products/rosemary-fries-1.jpeg';
const fries2 = '../assets/Products/rosemary-fries-2.jpeg';
const fries3 = '../assets/Products/rosemary-fries-3.jpeg';
const fries4 = '../assets/Products/rosemary-fries-4.jpeg';
const fries5 = '../assets/Products/rosemary-fries-5.jpeg';
const fries6 = '../assets/Products/rosemary-fries-6.jpeg';
const fries7 = '../assets/Products/rosemary-fries-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BLACK_PEPPER, CORNSTARCH, GARLIC, MIXING_BOWL, OLIVE_OIL, OVEN, ROSEMARY, SALT, SWEET_POTATO } = require('./ingredients');

module.exports = {
    cardName: 'Rosemary Fries',
    name: 'Rosemary Fries',
    img: fries7,
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Rosemary Sweet Potato Fries', 
            link: 'https://www.tasteofhome.com/recipes/rosemary-sweet-potato-fries/',
            authors: ['Jackie Gregston'],
            finder: 'Kevin Ung', 
        }
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
        OVEN,
    ],
    supplies: [
        { ...BAKING_SHEET, amount: 2 },
        MIXING_BOWL,
    ],
    directions: [
        { step: 'Preheat oven to 425ºF.', section: SECTIONS.MAIN },
        { step: 'Prepare baking sheet with cooking spray.', section: SECTIONS.MAIN },
        { step: 'In a mixing bowl, combine all the herbs, spices and liquids.', section: SECTIONS.MAIN, img: [fries1, fries2] },
        { step: 'Add the potatoes. Mix.', section: SECTIONS.MAIN, img: fries3 },
        { step: 'Arrange the fries in a single layer on baking sheet.', section: SECTIONS.MAIN, img: fries4 },
        { step: 'Bake until tender and lightly browned (for about 30 to 35 minutes). Turn occasionally.', section: SECTIONS.MAIN, img: fries5 },
        { step: 'Enjoy this delicious side!', section: SECTIONS.MAIN, img: fries6 },
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