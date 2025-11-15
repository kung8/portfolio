// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TYPES } = require('./constants');
const {  } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Thai Peanut Salad',
    name: 'Thai Peanut Salad',
    img: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.THAI],
    method: [METHODS.BLEND, METHODS.MIX],
    protein: [],
    type: [TYPES.SALAD],
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        { 
            label: 'Thai Peanut Salad', 
            link: 'https://www.onceuponachef.com/recipes/thai-crunch-salad-with-peanut-dressing.html',
            authors: ['Jennifer Segal'],
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
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the salad and dressing separately. Dressing can remain good for up to a week.'
        },
    ],
    reheat: null,
    mealPrep: true,
};