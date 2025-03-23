// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES , UNITS, YIELD_UNITS } = require('./constants');
const { BACON, LETTUCE, ROMA_TOMATO, BREAD, MAYONNAISE } = require('./ingredients');

const COOK_BACON = 'Cook Bacon';
const ASSEMBLE_SANDWICH = 'Assemble Sandwich';

module.exports = {
    wip: true,
    cardName: 'B.L.T.',
    name: 'B.L.T.',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: '5 m',
    cookTime: '10 m',
    websites: [
        { label: 'B.L.T.', link: 'https://www.allrecipes.com/recipe/209578/blt/' }
    ],
    separated: true,
    ingredients: [
        { ...BACON, amount: 4, unit: UNITS.SLICE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LETTUCE, amount: 2, unit: UNITS.LEAF, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: 2, unit: UNITS.SLICE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BREAD, amount: 2, unit: UNITS.SLICE, additionalDetails: 'toasted', section: SECTIONS.MAIN },
        { ...MAYONNAISE, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Layer the bacon, tomatoes and lettuce on the sandwich.', type: ASSEMBLE_SANDWICH },
        { step: 'Enjoy this simple sandwich.', type: SECTIONS.SERVE },
    ]
};