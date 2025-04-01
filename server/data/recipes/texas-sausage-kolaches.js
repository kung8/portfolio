// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Texas Sausage Kolaches',
    name: 'Texas Sausage Kolaches',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: false,
    recommended: false,
    category: [CATEGORIES.BREAKFAST,CATEGORIES.LUNCH,CATEGORIES.DINNER],
    genre: [GENRES.CZECH],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG,PROTEIN.PORK],
    type: [TYPES.MAIN_COURSE,TYPES.FINGER_FOOD],
    yields: { amount: 20, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 70, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Texas Sausage Kolaches', link: 'https://www.allrecipes.com/recipe/268998/texas-sausage-kolaches-klobasneks/' }
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