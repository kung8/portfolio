// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { ANGEL_HAIR_PASTA, OLIVE_OIL, YELLOW_ONION, GARLIC, ROMA_TOMATO, BALSAMIC_VINEGAR, CHICKEN_BROTH, RED_PEPPER_FLAKES, BLACK_PEPPER, BASIL_LEAF, PARMESAN_CHEESE } = require('./ingredients');

const PASTA = 'Pasta';
const TOMATO_SAUCE = 'Tomato Sauce';

const COOK_PASTA = 'Cook Pasta';
const MAKE_SAUCE = 'Make Sauce';
const ASSEMBLE_PASTA = 'Assemble Pasta';

module.exports = {
    wip: true,
    cardName: 'Pasta Pomodoro',
    name: 'Pasta Pomodoro',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.SIMMER],
    type: [TYPES.PASTA],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pasta Pomodoro', link: 'https://www.allrecipes.com/recipe/23847/pasta-pomodoro/' }
    ],
    separated: true,
    ingredients: [
        { ...ANGEL_HAIR_PASTA, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PASTA },
        { ...OLIVE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: TOMATO_SAUCE },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: TOMATO_SAUCE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: TOMATO_SAUCE },
        { ...ROMA_TOMATO, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: TOMATO_SAUCE },
        { ...BALSAMIC_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: TOMATO_SAUCE },
        { ...CHICKEN_BROTH, amount: 10.75, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: TOMATO_SAUCE },
        { ...RED_PEPPER_FLAKES, amount: '', unit: '', additionalDetails: 'to taste', section: TOMATO_SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: TOMATO_SAUCE },
        { ...BASIL_LEAF, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: TOMATO_SAUCE },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Bring a pot of water and salt to a boil.', type: COOK_PASTA },
        { step: 'Add pasta and cook until al dente (about 8 minutes or per package instructions).', type: COOK_PASTA },
        { step: 'Drain and set aside.', type: COOK_PASTA },

        { step: 'Over high heat, add olive oil to a frying pan.', type: MAKE_SAUCE },
        { step: 'Add onions and garlic. Saute until browned.', type: MAKE_SAUCE },
        { step: 'Reduce to medium-high heat.', type: MAKE_SAUCE },
        { step: 'Mix in tomatoes, vinegar and chicken broth. Simmer for about 8 minutes.', type: MAKE_SAUCE },
        { step: 'Add spices and herb. Mix.', type: MAKE_SAUCE },

        { step: 'Add pasta and toss.', type: ASSEMBLE_PASTA },
        { step: 'Simmer for 5 minutes.', type: ASSEMBLE_PASTA },

        { step: 'Serve warm and topped with grated cheese.', type: SECTIONS.SERVE },
    ]
};