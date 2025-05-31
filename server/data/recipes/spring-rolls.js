// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Spring Rolls',
    name: 'Spring Rolls',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: false,
    recommended: false,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.CHINESE],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        { label: 'Spring Rolls', link: 'https://www.recipetineats.com/spring-rolls/' }
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
    mealPrep: false,
};