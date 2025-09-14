// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { GROUND_BEEF, YELLOW_ONION, GREEN_BELL_PEPPER, RED_BELL_PEPPER, DICED_TOMATO, WHITE_RICE, CHEDDAR_CHEESE, GARLIC_POWDER, SALT, BLACK_PEPPER } = require('./ingredients');

const REST_OF_FILLING_SECTION = 'Rest of Filling';
const COOK_INGREDIENTS = 'Cook Ingredients';
const COOK_CASSEROLE = 'Cook Casserole';

module.exports = {
    wip: true,
    cardName: 'Stuffed Pepper Casserole',
    name: 'Stuffed Pepper Casserole',
    img: '',
    recipeAuthors: ['Patricia'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.CASSEROLE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Stuffed Pepper Casserole', link: 'https://recipesfiber.com/stuffed-pepper-casserole/' }
    ],
    separated: true,
    ingredients: [
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BEEF },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...DICED_TOMATO, amount: 14.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'with juice', section: REST_OF_FILLING_SECTION },
        { ...WHITE_RICE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooked', section: REST_OF_FILLING_SECTION },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: REST_OF_FILLING_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: REST_OF_FILLING_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: REST_OF_FILLING_SECTION },
        { ...CHEDDAR_CHEESE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'baking pan' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: COOK_INGREDIENTS },
        { step: 'Over medium heat, brown ground beef until no longer pink.', section: COOK_INGREDIENTS },
        { step: 'Drain.', section: COOK_INGREDIENTS },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients. Saute until vegetables are tender (about 5 minutes).`, section: COOK_INGREDIENTS },
        { step: `Add the "${REST_OF_FILLING_SECTION}" section ingredients. Mix and let simmer for 2 to 3 minutes.`, section: COOK_INGREDIENTS },
        { step: 'Transfer to baking pan.', section: COOK_CASSEROLE },
        { step: 'Top with shredded cheese.', section: COOK_CASSEROLE },
        { step: 'Bake until cheese is golden and bubbly (about 20 minutes).', section: COOK_CASSEROLE },
        { step: 'Let it rest for a few minutes.', section: COOK_CASSEROLE },
        { step: 'Enjoy this recipe made easier as a casserole dish!', section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil and bake at 350ºF until heated through (about 20 to 30 minutes).',
        },
    ],
    mealPrep: true,
};