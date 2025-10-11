const gyoza1 = '../assets/Products/gyoza-1.jpeg';
const gyoza2 = '../assets/Products/gyoza-2.jpeg';
const gyoza3 = '../assets/Products/gyoza-3.jpeg';
const gyoza4 = '../assets/Products/gyoza-4.jpeg';
const gyoza5 = '../assets/Products/gyoza-5.jpeg';
const gyoza6 = '../assets/Products/gyoza-6.jpeg';
const gyoza7 = '../assets/Products/gyoza-7.jpeg';
const gyoza8 = '../assets/Products/gyoza-8.jpeg';
const gyoza9 = '../assets/Products/gyoza-9.jpeg';

const { img } = require('./choy-sum-with-garlic-sauce');
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { GROUND_PORK, GREEN_ONION, CABBAGE, GARLIC, SESAME_OIL, LIGHT_SOY_SAUCE, SALT, BLACK_PEPPER, VEGETABLE_OIL, WATER, WONTON_WRAPPER, STOVE, FRYING_PAN, PLATE } = require('./ingredients');

const WRAPPER_SECTION = 'Wrapper';
const COOK_GYOZAS = 'Cook Gyozas';

module.exports = {
    cardName: 'Gyoza',
    name: 'Gyoza',
    img: gyoza8,
    recipeAuthors: ['Natalya Drozhzhin'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
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
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        PLATE,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.ASSEMBLE, img: gyoza1 },
        { step: 'Place a spoonful of filling in the center of each wrapper.', section: SECTIONS.ASSEMBLE, img: gyoza2 },
        { step: 'Brush the wrapper edges with water using your finger and crimp the edges until the gyozas are sealed.', section: SECTIONS.ASSEMBLE },
        { step: 'Place gyozas on a plate(s) and leave space between them to avoid them sticking.', section: SECTIONS.ASSEMBLE, img: gyoza3 },
        { step: 'Over medium-high heat, add oil to a pan.', section: COOK_GYOZAS },
        { step: 'Pan fry gyozas until golden brown (about 3 minutes).', section: COOK_GYOZAS, img: [gyoza4, gyoza5] },
        { step: 'Add water. Cover with a lid.', section: COOK_GYOZAS, img: gyoza6 },
        { step: 'Steam for about 3 to 4 minutes.', section: COOK_GYOZAS, img: gyoza7 },
        { step: 'Serve with your favorite sauce.', section: SECTIONS.SERVE, img: gyoza9 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium-low heat, add oil to a pan. Pan fry gyozas. Add a splash of water and cover with a lid. Cook until heated through. Pan fry again until the bottoms are crispy.',
        },
    ],
    mealPrep: true,
};