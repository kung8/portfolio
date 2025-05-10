// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { CHEDDAR_CHEESE, MILK, KODIAK_CAKE_MIX, BREAKFAST_SAUSAGE } = require('./ingredients');

const SAUSAGE_BALL_SECTION = 'Sausage Balls';
const PREP_SAUSAGE_BALLS = 'Prep Sausage Balls';
const BAKE_SAUSAGE_BALLS = 'Bake Sausage Balls';

module.exports = {
    wip: true,
    cardName: 'Breakfast Sausage Balls',
    name: 'Breakfast Sausage Balls',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE, TYPES.FINGER_FOOD],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 27, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Breakfast Sausage Balls', link: 'https://www.simplyrecipes.com/breakfast-sausage-balls-recipe-11701329' }
    ],
    separated: true,
    ingredients: [
        { ...BREAKFAST_SAUSAGE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SAUSAGE_BALL_SECTION },
        { ...KODIAK_CAKE_MIX, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUSAGE_BALL_SECTION },
        { ...CHEDDAR_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SAUSAGE_BALL_SECTION },
        { ...MILK, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'or as needed', section: SAUSAGE_BALL_SECTION },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'parchment paper' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: PREP_SAUSAGE_BALLS },
        { step: 'Line a baking sheet with parchment paper.', section: PREP_SAUSAGE_BALLS },
        { step: 'In a mixing bowl, combine together all the ingredients besides the milk.', section: PREP_SAUSAGE_BALLS },
        { step: 'Add milk as needed. Mix until incorporated and everything is sticking together.', section: PREP_SAUSAGE_BALLS },
        { step: 'Form 3-inch balls.', section: PREP_SAUSAGE_BALLS },
        { step: 'Place each ball one inch apart on the baking sheet.', section: BAKE_SAUSAGE_BALLS },
        { step: 'Bake until the bottoms are browned and cooked through (about 24 to 27 minutes).', section: BAKE_SAUSAGE_BALLS },
        { step: 'Enjoy these sausage balls warm!', section: SECTIONS.SERVE },
        { step: 'Air fry at 350ºF for 3 to 4 minutes.', section: SECTIONS.REHEAT },
    ]
};