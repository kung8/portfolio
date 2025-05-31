// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, REHEAT_METHODS, STORAGE_CONTAINER, STORAGE_LOCATION, STORAGE_DURATION_UNIT } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Apple Dump Cake',
    name: 'Apple Dump Cake',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: false,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [],
    type: [TYPES.DESSERT],
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        { label: 'Apple Dump Cake', link: 'https://www.allrecipes.com/recipe/244777/apple-pie-cake-mix-cake/' }
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
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.ITS_OWN_CONTAINER,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Wrap in foil and bake at 350ºF until heat through (about 20 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave for about 30 seconds.',
        },
    ],
    mealPrep: true,
};