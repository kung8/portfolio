// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { BACON, YUKON_GOLD_POTATO, CHEDDAR_CHEESE, GARLIC, DIJON_MUSTARD, SALT, BLACK_PEPPER, CHIVE, SOUR_CREAM, OVEN, STOVE, FRYING_PAN, SLOTTED_SPOON, BAKING_PAN } = require('./ingredients');

const COOK_BACON = 'Cook Bacon';

module.exports = {
    wip: true,
    cardName: 'Mississippi Mud Potatoes',
    name: 'Mississippi Mud Potatoes',
    img: '',
    recipeAuthors: ['Janette Zepeda'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.SOUTHERN],
    method: [METHODS.BAKE, METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.CASSEROLE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 75, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Mississippi Mud Potatoes', link: 'https://www.thekitchn.com/mississippi-mud-potatoes-recipe-23713064' }
    ],
    separated: true,
    ingredients: [
        { ...BACON, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'cut into 1/4 inch pieces', section: SECTIONS.CASSEROLE },
        { ...YUKON_GOLD_POTATO, amount: 5 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and diced', section: SECTIONS.CASSEROLE },
        { ...SOUR_CREAM, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...CHEDDAR_CHEESE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.CASSEROLE },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CASSEROLE },

        { ...CHEDDAR_CHEESE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHIVE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        SLOTTED_SPOON,
        BAKING_PAN,
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', section: SECTIONS.PREHEAT_OVEN },
        { step: 'Over medium heat, cook the bacon pieces until crispy (about 8 to 10 minutes).', section: COOK_BACON },
        { step: 'Transfer bacon to a small bowl with a slotted spoon.', section: COOK_BACON },
        { step: `In a mixing bowl, combine just half of the bacon with the remaining "${SECTIONS.CASSEROLE}" section ingredients.`, section: SECTIONS.ASSEMBLE },
        { step: 'Transfer the potato mixture to a baking dish in an even layer.', section: SECTIONS.ASSEMBLE },
        { step: 'Bake until the potatoes are tender (about 1 hour).', section: SECTIONS.BAKE },
        { step: 'Remove the baking dish from the oven.', section: SECTIONS.BAKE },
        { step: 'Turn the oven to broil.', section: SECTIONS.BROIL },
        { step: 'Top the casserole with cheese.', section: SECTIONS.BROIL },
        { step: 'Broil the casserole until the cheese is melted and browned (about 2 to 3 minutes).', section: SECTIONS.BROIL },
        { step: 'Let casserole cool for about 10 minutes.', section: SECTIONS.BROIL },
        { step: 'Enjoy this casserole dish topped with bacon and chives.', section: SECTIONS.SERVE },
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
            instruction: 'Bake at 375ºF until heated through (about 20 minutes).',
        },
    ],
    mealPrep: true,
};