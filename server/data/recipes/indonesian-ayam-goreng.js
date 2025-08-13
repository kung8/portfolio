// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Ayam Goreng',
    name: 'Indonesian Ayam Goreng',
    img: '',
    recipeAuthors: ['Sophia Young'],
    recipeFinder: 'Kevin Ung',
    available: false,
    recommended: false,
    category: [CATEGORIES.LUNCH,CATEGORIES.DINNER],
    genre: [GENRES.INDONESIAN],
    method: [METHODS.BAKE,METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN,TYPES.MAIN_COURSE],
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        { label: 'Indonesian Ayam Goreng', link: 'https://www.taste.com.au/recipes/indonesian-fried-chicken/f24fe781-bbc9-4a12-b270-f53abb2ce6e7' }
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