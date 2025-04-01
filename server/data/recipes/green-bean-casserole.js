const casserole1 = '../assets/Products/green-bean-casserole-1.jpeg';
const casserole2 = '../assets/Products/green-bean-casserole-2.jpeg';
const casserole3 = '../assets/Products/green-bean-casserole-3.jpeg';
const casserole4 = '../assets/Products/green-bean-casserole-4.jpeg';
const mix1 = '../assets/Products/green-bean-casserole-mix-1.jpeg';
const mix2 = '../assets/Products/green-bean-casserole-mix-2.jpeg';
const mix3 = '../assets/Products/green-bean-casserole-mix-3.jpeg';
const mix4 = '../assets/Products/green-bean-casserole-mix-4.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { CANNED_GREEN_BEANS, CREAM_OF_MUSHROOM, MILK, LIGHT_SOY_SAUCE, BLACK_PEPPER, SALT, CRISPY_FRIED_ONIONS } = require('./ingredients');

const CASSEROLE = 'Casserole';

module.exports = {
    cardName: 'Green Bean Casserole',
    name: 'Green Bean Casserole',
    img: casserole4,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.CASSEROLE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Green Bean Casserole', link: 'https://www.spendwithpennies.com/classic-green-bean-casserole/' }
    ],
    separated: true,
    ingredients: [
        { ...CANNED_GREEN_BEANS, amount: 58, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'drained', section: CASSEROLE },
        { ...CREAM_OF_MUSHROOM, amount: 10.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CASSEROLE },
        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CASSEROLE },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CASSEROLE },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CASSEROLE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: CASSEROLE },
        { ...CRISPY_FRIED_ONIONS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CASSEROLE },
        { ...CRISPY_FRIED_ONIONS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: CASSEROLE },
        { step: 'Combine all the "Casserole" ingredients in the baking dish.', type: CASSEROLE, img: [mix1, mix2, mix3] },
        { step: 'Bake until bubbly (about 30 to 35 minutes).', type: CASSEROLE },
        { step: 'Remove from the oven and mix.', type: CASSEROLE, img: mix4 },
        { step: 'Top with the crispy fried onions.', type: SECTIONS.TOPPINGS, img: [casserole1, casserole2, casserole3] },
        { step: 'Bake until golden (about 10 minutes).', type: SECTIONS.TOPPINGS },
        { step: 'Serve this dish warm at your next holiday feast.', type: SECTIONS.SERVE },
    ]
};