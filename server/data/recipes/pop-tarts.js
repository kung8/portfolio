const tart1 = '../assets/Products/pop-tarts-1.jpeg';
const tart2 = '../assets/Products/pop-tarts-2.jpeg';
const tart3 = '../assets/Products/pop-tarts-3.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, MILK, OVEN, PARCHMENT_PAPER, POWDERED_SUGAR, REFRIGERATED_PIE_CRUST, STRAWBERRY_JAM } = require('./ingredients');

const POP_TARTS_SECTION = 'Pop Tarts';
const GLAZE_SECTION = 'Glaze';

const COOK_POP_TARTS = 'Cook Pop Tarts';
const MAKE_GLAZE = 'Make Glaze';

module.exports = {
    cardName: 'Pop Tarts',
    name: 'Pop Tarts',
    img: tart3,
    recipeAuthors: ['Tracy'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.SNACK, CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD, TYPES.PASTRY],
    yields: { amount: 1, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pop Tarts', link: 'https://bakingmischief.com/what-to-do-with-leftover-pie-dough/' }
    ],
    separated: true,
    ingredients: [
        { ...REFRIGERATED_PIE_CRUST, amount: 1, unit: '', additionalDetails: '', section: POP_TARTS_SECTION },
        { ...STRAWBERRY_JAM, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: POP_TARTS_SECTION },
        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: GLAZE_SECTION },
        { ...POWDERED_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GLAZE_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        PARCHMENT_PAPER,
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', section: COOK_POP_TARTS },
        { step: 'Line a baking sheet with parchment paper.', section: COOK_POP_TARTS },
        { step: 'Roll out and cut pie crust dough into rectangular pieces (2 per each pop tart).', section: COOK_POP_TARTS },
        { step: 'Place pieces on the baking sheet.', section: COOK_POP_TARTS },
        { step: 'Add preferred jam in the center of each piece.', section: COOK_POP_TARTS, img: tart1 },
        { step: 'Place the other rectangular piece on top.', section: COOK_POP_TARTS },
        { step: 'Use a fork to crimp each pop tart to seal the edges.', section: COOK_POP_TARTS },
        { step: 'Poke holes through the top to let steam to escape.', section: COOK_POP_TARTS, img: tart2 },
        { step: 'Bake until golden (about 10 to 15 minutes).', section: COOK_POP_TARTS },
        { step: 'In a small bowl, combine milk and powdered sugar. Mix until it forms a thick glaze.', section: MAKE_GLAZE },
        { step: 'Optionally spread glaze and enjoy!', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'This is a great way to use any excess pie crust dough.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through (about 10 minutes).',
        },
    ],
    mealPrep: true,
};