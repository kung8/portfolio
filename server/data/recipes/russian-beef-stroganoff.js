// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {  } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Beef Stroganoff',
    name: 'Russian Beef Stroganoff',
    img: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.LUNCH,CATEGORIES.DINNER],
    genre: [GENRES.RUSSIAN],
    method: [METHODS.PAN_FRY,METHODS.SIMMER],
    protein: [PROTEIN.BEEF],
    type: [TYPES.NOODLE],
    allergies: [],
    diet: [],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Russian Beef Stroganoff', 
            link: 'https://natashaskitchen.com/beef-stroganoff/',
            authors: ['Natasha Kravchuk'],
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
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};