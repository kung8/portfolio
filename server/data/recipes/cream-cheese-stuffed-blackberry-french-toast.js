// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Blackberry French Toast',
    name: 'Cream Cheese Stuffed Blackberry French Toast',
    img: '',
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: false,
    recommended: false,
    category: [CATEGORIES.BREAKFAST,CATEGORIES.LUNCH,CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN,GENRES.FRENCH],
    method: [METHODS.PAN_FRY],
    protein: [],
    type: [TYPES.BREAD],
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        { label: 'Cream Cheese Stuffed Blackberry French Toast', link: 'https://recipesfiber.com/cream-cheese-stuffed-blackberry-compote-french-toast/' }
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
            instruction: 'Store the toppings separately from the French Toast.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350°F until heated through (about 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};