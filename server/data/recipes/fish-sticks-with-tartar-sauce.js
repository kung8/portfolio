// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, REHEAT_METHODS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, YIELD_UNITS } = require('./constants');
const {  } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Fish Sticks with Tartar Sauce',
    name: 'Fish Sticks with Tartar Sauce',
    img: '',
    available: false,
    recommended: false,
    createdAt: '01/21/2025 22:25:49',
    modifiedAt: '11/14/2025 23:38:52',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [],
    protein: [],
    type: [],
    yields: { amount: '', unit: YIELD_UNITS.SERVING },
    prepTime: { amount: '', unit: TIME_UNITS.MINUTE },
    cookTime: { amount: '', unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: '', 
            link: '',
            authors: [''],
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
    mealPrep: false,
};