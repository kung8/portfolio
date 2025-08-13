// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: '{{cardName}}',
    name: '{{name}}',
    img: '',
    recipeAuthors: ['{{recipeAuthor}}'],
    recipeFinder: '{{recipeFinder}}',
    available: '{{available}}',
    recommended: false,
    category: '{{category}}',
    genre: '{{genre}}',
    method: '{{method}}',
    protein: '{{protein}}',
    type: '{{type}}',
    yields: { amount: '{{yields}}', unit: '{{yieldUnit}}' },
    prepTime: { amount: '{{prepTime}}', unit: '{{prepTimeUnit}}' },
    cookTime: { amount: '{{cookTime}}', unit: '{{cookTimeUnit}}' },
    waitTime: { amount: '{{waitTime}}', unit: '{{waitTimeUnit}}' },
    websites: [
        { label: '{{label}}', link: '{{link}}' }
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