// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Yor\'s Stew',
    name: 'Yor\'s Stew',
    img: '',
    recipeAuthor: '',
    recipeFinder: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.LUNCH,CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.EGG,PROTEIN.PORK],
    type: [TYPES.CURRY],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 2, unit: TIME_UNITS.HOUR },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Yor\'s Stew', link: 'https://glutenfreewithme.com/yors-stew-inspired-by-spy-x-family-gluten-free/#google_vignette' }
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
        { step: '', type: '' },
    ]
};