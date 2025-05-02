const blt1 = '../assets/Products/blt-1.jpeg';
const blt2 = '../assets/Products/blt-2.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { BACON, LETTUCE, ROMA_TOMATO, BREAD, MAYONNAISE } = require('./ingredients');

const COOK_BACON = 'Cook Bacon';
const ASSEMBLE_SANDWICH = 'Assemble Sandwich';

module.exports = {
    cardName: 'B.L.T.',
    name: 'B.L.T.',
    img: blt2,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'B.L.T.', link: 'https://www.allrecipes.com/recipe/209578/blt/' }
    ],
    separated: true,
    ingredients: [
        { ...BACON, amount: 4, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LETTUCE, amount: 2, unit: INGREDIENT_UNITS.LEAF, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: 2, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BREAD, amount: 2, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'toasted', section: SECTIONS.MAIN },
        { ...MAYONNAISE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'toaster' },
    ],
    supplies: [
        { name: 'plate' },
        { name: 'paper towels' },
        { name: 'frying pan' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Line a plate with paper towels.', type: COOK_BACON },
        { step: 'Over medium-high heat, cook bacon in a frying pan until browned (about 10 minutes).', type: COOK_BACON },
        { step: 'Let the bacon drain on the paper towel.', type: COOK_BACON },
        { step: 'Spread the mayo on a slice of toasted bread.', type: ASSEMBLE_SANDWICH },
        { step: 'Layer the bacon, tomatoes and lettuce on the sandwich.', type: ASSEMBLE_SANDWICH, img: blt1 },
        { step: 'Enjoy this simple sandwich.', type: SECTIONS.SERVE },
    ]
};