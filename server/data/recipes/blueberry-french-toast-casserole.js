// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'French Toast Casserole',
    name: 'Blueberry French Toast Casserole',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: false,
    recommended: false,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.CASSEROLE],
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        { label: 'Blueberry French Toast Casserole', link: 'https://mixandmatchmama.com/2025/06/blueberry-french-toast-casserole-3/' }
    ],
    separated: true,
    ingredients: [
        { ...GENRES, amount: '', unit: '', additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: '' },
    ],
    supplies: [
        { name: '' },
    ],
    directions: [
        { step: '', section: '' },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};