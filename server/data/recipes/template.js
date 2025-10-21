// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {  } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: '{{cardName}}',
    name: '{{name}}',
    img: '',
    available: '{{available}}',
    recommended: false,
    category: '{{category}}',
    genre: '{{genre}}',
    method: '{{method}}',
    protein: '{{protein}}',
    type: '{{type}}', 
    allergies: '{{allergies}}',
    diet: '{{diet}}',
    yields: { amount: '{{yields}}', unit: '{{yieldUnit}}' },
    prepTime: { amount: '{{prepTime}}', unit: '{{prepTimeUnit}}' },
    cookTime: { amount: '{{cookTime}}', unit: '{{cookTimeUnit}}' },
    waitTime: { amount: '{{waitTime}}', unit: '{{waitTimeUnit}}' },
    websites: [
        { label: '{{label}}', link: '{{link}}', author: ['{{author}}'], finder: '{{finder}}' }
    ],
    separated: '{{separated}}',
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