// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { DRY_MILK_POWDER, UNSALTED_BUTTER } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Browned Butter',
    name: 'Browned Butter',
    img: '',
    recipeAuthors: [''],
    recipeFinder: 'Justin Ung',
    available: true,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.MELT],
    yields: { amount: 3 / 2, unit: YIELD_UNITS.CUP },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...DRY_MILK_POWDER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'optional', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'tupperware' },
    ],
    directions: [
        { step: 'Over medium-low heat, melt butter in a saucepan.', section: SECTIONS.MAIN },
        { step: 'Add milk powder. Cook until milk solidifies and becomes golden brown. Stirring.', section: SECTIONS.MAIN },
        { step: 'Remove from heat and let residual heat continue to cook for 30 seconds.', section: SECTIONS.MAIN },
        { step: 'Transfer to tupperware and set aside.', section: SECTIONS.MAIN },
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