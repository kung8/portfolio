// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {  } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Naan 2',
    name: 'Naan 2',
    img: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.APPETIZER,CATEGORIES.SIDE_DISH],
    genre: [GENRES.INDIAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    allergies: [],
    diet: [],
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        { 
            label: 'Naan 2', 
            link: 'https://www.thekitchn.com/naan-recipe-23711933',
            authors: ['Janette Zepeda'],
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
        { step: ``, section: '' },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave for 10 to 15 seconds until warm. Then over medium heat, pan fry with a little oil until browned on both sides.',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until warmed through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};