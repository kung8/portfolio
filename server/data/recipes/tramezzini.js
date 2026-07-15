const tramezzini1 = '../assets/Products/tramezzini-1.jpeg';
const tramezzini2 = '../assets/Products/tramezzini-2.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    PROTEIN,
    SECTIONS,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { KNIFE, LETTUCE, MAYONNAISE, MOZZARELLA_CHEESE, PICKLES, ROMA_TOMATO, TURKEY, WHITE_BREAD } = require('./ingredients');

const NON_VEGETARIAN = 'Non-Vegetarian';
const VEGETARIAN = 'Vegetarian';

module.exports = {
    wip: true,
    cardName: 'Tramezzini',
    name: 'Tramezzini',
    img: '',
    available: true,
    recommended: false,
    createdAt: '06/08/2026 23:07:33',
    modifiedAt: '06/08/2026 23:07:33',
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.ITALIAN],
    method: [METHODS.ASSEMBLE],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.SANDWICH],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...WHITE_BREAD, amount: 10, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.BREAD },

        { ...MAYONNAISE, amount: '', unit: '', additionalDetails: '', section: NON_VEGETARIAN },
        { ...MOZZARELLA_CHEESE, amount: '', unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: NON_VEGETARIAN },
        { ...TURKEY, amount: '', unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: NON_VEGETARIAN },
        { ...PICKLES, amount: '', unit: '', additionalDetails: '', section: NON_VEGETARIAN },

        { ...MAYONNAISE, amount: '', unit: '', additionalDetails: '', section: VEGETARIAN },
        { ...MOZZARELLA_CHEESE, amount: '', unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: VEGETARIAN },
        { ...LETTUCE, amount: '', unit: '', additionalDetails: '', section: VEGETARIAN },
        { ...ROMA_TOMATO, amount: '', unit: '', additionalDetails: 'sliced', section: VEGETARIAN },
    ],
    supplies: [
        KNIFE,
    ],
    directions: [
        { step: `Cut the crust off each slice of bread (cut into square shape).`, section: SECTIONS.ASSEMBLE },
        { step: `Spread a light layer of mayo of each slice of bread.`, section: SECTIONS.ASSEMBLE },
        { step: `On one slice of bread layer the desired toppings.`, section: SECTIONS.ASSEMBLE },
        { step: `Place the other slice of bread on top.`, section: SECTIONS.ASSEMBLE },
        { step: `Cut the sandwich diagonally in half.`, section: SECTIONS.ASSEMBLE },
        { step: `Enjoy these simple Italian appetizers.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `You can mix and match whatever you want inside these tea sandwiches.`, img: [tramezzini1, tramezzini2] },
    ],
    mealPrep: false,
};