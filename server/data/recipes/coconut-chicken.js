// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Coconut Chicken',
    name: 'Coconut Chicken',
    img: '',
    recipeAuthor: '',
    recipeFinder: '',
    available: false,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Coconut Chicken', link: 'https://www.allrecipes.com/recipe/68532/curried-coconut-chicken/' }
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