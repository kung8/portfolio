// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { GROUND_PORK, GREEN_ONION, CABBAGE, GARLIC, SESAME_OIL, LIGHT_SOY_SAUCE, SALT, BLACK_PEPPER, VEGETABLE_OIL, WATER, WONTON_WRAPPER } = require('./ingredients');

const WRAPPER_SECTION = 'Wrapper';
const COOK_GYOZAS = 'Cook Gyozas';

module.exports = {
    wip: true,
    cardName: 'Gyoza',
    name: 'Gyoza',
    img: '',
    recipeAuthors: ['Natalya Drozhzhin'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.ASIAN, GENRES.JAPANESE],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.SIDE_DISH, TYPES.FINGER_FOOD],
    yields: { amount: 52, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Gyoza', link: 'https://momsdish.com/gyoza' }
    ],
    separated: true,
    ingredients: [
        { ...WONTON_WRAPPER, amount: 52, unit: '', additionalDetails: '', section: WRAPPER_SECTION },
        { ...GROUND_PORK, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GREEN_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.FILLING },
        { ...CABBAGE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.FILLING },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: '' },
        { ...WATER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pan' },
        { name: 'plate' },
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.ASSEMBLE },
        { step: 'Place a spoonful of filling in the center of each wrapper.', section: SECTIONS.ASSEMBLE },
        { step: 'Brush the wrapper edges with water using your finger and crimp the edges until the gyozas are sealed.', section: SECTIONS.ASSEMBLE },
        { step: 'Place gyozas on a plate(s) and leave space between them to avoid them sticking.', section: SECTIONS.ASSEMBLE },
        { step: 'Over medium-high heat, add oil to a pan.', section: COOK_GYOZAS },
        { step: 'Pan fry gyozas until golden brown (about 3 minutes).', section: COOK_GYOZAS },
        { step: 'Add water. Cover with a lid.', section: COOK_GYOZAS },
        { step: 'Steam for about 3 to 4 minutes.', section: COOK_GYOZAS },
        { step: 'Serve with your favorite sauce.', section: SECTIONS.SERVE },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};