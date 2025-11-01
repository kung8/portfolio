// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {  } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Apple Dumplings',
    name: 'Apple Dumplings',
    img: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [],
    diet: [],
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        { 
            label: 'Apple Dumplings', 
            link: 'https://www.allrecipes.com/recipe/18980/apple-dumplings-i/', 
            authors: ['Allrecipes Member'],
            finder: 'Kevin Ung',
        }
    ],
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
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.ITS_OWN_CONTAINER,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Wrap in foil and bake at 350ºF until heated through and crust is crispy (about 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};