const casserole1 = '../assets/Products/stuffed-pepper-casserole-1.jpeg';
const casserole2 = '../assets/Products/stuffed-pepper-casserole-2.jpeg';
const casserole3 = '../assets/Products/stuffed-pepper-casserole-3.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BLACK_PEPPER, CHEDDAR_CHEESE, DICED_TOMATO, FRYING_PAN, GARLIC_POWDER, GREEN_BELL_PEPPER, GROUND_BEEF, OVEN, RED_BELL_PEPPER, SALT, STOVE, WHITE_RICE, YELLOW_ONION } = require('./ingredients');

const REST_OF_FILLING_SECTION = 'Rest of Filling';
const COOK_INGREDIENTS = 'Cook Ingredients';
const COOK_CASSEROLE = 'Cook Casserole';

module.exports = {
    cardName: 'Stuffed Pepper Casserole',
    name: 'Stuffed Pepper Casserole',
    img: casserole3,
    available: true,
    recommended: true,
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
        {
            label: 'Stuffed Pepper Casserole',
            link: 'https://recipesfiber.com/stuffed-pepper-casserole/',
            authors: ['Patricia'],
            finder: 'Kevin Ung',
        }
    ],
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
        OVEN,
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        BAKING_PAN,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Over medium heat, brown ground beef until no longer pink over a pan.`, section: COOK_INGREDIENTS },
        { step: `Drain.`, section: COOK_INGREDIENTS },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients. Saute until vegetables are tender (about 5 minutes).`, section: COOK_INGREDIENTS },
        { step: `Add the "${REST_OF_FILLING_SECTION}" section ingredients. Mix and let simmer for 2 to 3 minutes.`, section: COOK_INGREDIENTS, img: casserole1 },

        { step: `Transfer to baking pan.`, section: COOK_CASSEROLE },
        { step: `Top with shredded cheese.`, section: COOK_CASSEROLE, img: casserole2 },
        { step: `Bake until cheese is golden and bubbly (about 20 minutes).`, section: COOK_CASSEROLE },
        { step: `Let it rest for a few minutes.`, section: COOK_CASSEROLE },

        { step: `Enjoy this recipe made easier as a casserole dish!`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `The casserole was a little dry. The only liquid component is from the diced tomatoes. Make sure the rice is not dry before it is added to the pan.` },
        { note: `I feel this recipe will be added to the regular rotation. Easy to make and tastes great!` },
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