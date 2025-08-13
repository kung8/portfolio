const grilled1 = '../assets/Products/grilled-cheese-sandwich-1.jpeg';
const grilled2 = '../assets/Products/grilled-cheese-sandwich-2.jpeg';
const grilled3 = '../assets/Products/grilled-cheese-sandwich-3.jpeg';
const grilled4 = '../assets/Products/grilled-cheese-sandwich-4.jpeg';
const grilled5 = '../assets/Products/grilled-cheese-sandwich-5.jpeg';
const grilled6 = '../assets/Products/grilled-cheese-sandwich-6.jpeg';
const grilled7 = '../assets/Products/grilled-cheese-sandwich-7.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, REHEAT_METHODS, STORAGE_CONTAINER, STORAGE_LOCATION, STORAGE_DURATION_UNIT } = require('./constants');
const { BREAD, UNSALTED_BUTTER, CHEDDAR_CHEESE } = require('./ingredients');

const GRILL_CHEESE = 'Grill Cheese';

module.exports = {
    cardName: 'Grilled Cheese',
    name: 'Grilled Cheese Sandwich',
    img: grilled6,
    recipeAuthors: ['Sara'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.WESTERN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.SANDWICH],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Grilled Cheese Sandwich', link: 'https://www.allrecipes.com/recipe/23891/grilled-cheese-sandwich/' }
    ],
    separated: true,
    ingredients: [
        { ...BREAD, amount: 2, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'divided', section: SECTIONS.MAIN },
        { ...CHEDDAR_CHEESE, amount: 1, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Over medium heat, preheat a frying pan.', section: GRILL_CHEESE },
        { step: 'Spread half of the butter on a slice of bread. Place on the frying pan with the butter-side down.', section: GRILL_CHEESE, img: [grilled1, grilled2] },
        { step: 'Add slice of cheese.', section: GRILL_CHEESE, img: grilled3 },
        { step: 'Spread the rest of the butter on another slice of bread. Place the butter-side on top.', section: GRILL_CHEESE, img: grilled4 },
        { step: 'Cook until each side has lightly browned and the cheese has melted.', section: GRILL_CHEESE, img: grilled5 },
        { step: 'Enjoy this simple sandwich by itself or with a bowl of tomato soup.', section: SECTIONS.SERVE, img: grilled7 },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until cheese is melted and golden brown (about 10 to 12 minutes per side).',
        },
    ],
    mealPrep: false,
};