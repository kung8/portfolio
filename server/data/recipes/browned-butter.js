const butter1 = '../assets/Products/browned-butter-1.jpeg';
const butter2 = '../assets/Products/browned-butter-2.jpeg';
const butter3 = '../assets/Products/browned-butter-3.jpeg';
const butter4 = '../assets/Products/browned-butter-4.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { DRY_MILK_POWDER, SAUCEPAN, STOVE, TUPPERWARE, UNSALTED_BUTTER } = require('./ingredients');

module.exports = {
    cardName: 'Browned Butter',
    name: 'Browned Butter',
    img: butter4,
    available: true,
    recommended: false,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.MELT],
    type: [TYPES.SAUCE],
    yields: { amount: 3 / 2, unit: YIELD_UNITS.CUP },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            bookTitle: 'Knife Drop: Creative Recipes Anyone Can Cook',
            label: 'Browned Butter Chocolate Chip Cookies',
            link: null,
            authors: ['Nick DiGiovanni'],
            finder: 'Justin Ung'
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...DRY_MILK_POWDER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'optional', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE
    ],
    supplies: [
        SAUCEPAN,
        TUPPERWARE,
    ],
    directions: [
        { step: `Over medium-low heat, melt butter in a saucepan.`, section: SECTIONS.MAIN, img: butter1 },
        { step: `Add milk powder. Cook until milk solidifies and becomes golden brown. Stirring.`, section: SECTIONS.MAIN, img: [butter2, butter3] },
        { step: `Remove from heat and let residual heat continue to cook for 30 seconds.`, section: SECTIONS.MAIN },
        { step: `Transfer to tupperware and set aside.`, section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};