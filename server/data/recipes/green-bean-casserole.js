const casserole1 = '../assets/Products/green-bean-casserole-1.jpeg';
const casserole2 = '../assets/Products/green-bean-casserole-2.jpeg';
const casserole3 = '../assets/Products/green-bean-casserole-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CANNED_GREEN_BEANS, CREAM_OF_MUSHROOM, CRISPY_FRIED_ONIONS, LIGHT_SOY_SAUCE, MILK, SALT, OVEN, BAKING_PAN } = require('./ingredients');

module.exports = {
    cardName: 'Green Bean Casserole',
    name: 'Green Bean Casserole',
    img: casserole3,
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.CASSEROLE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Green Bean Casserole', 
            link: 'https://www.spendwithpennies.com/classic-green-bean-casserole/',
            authors: ['Holly Nilsson'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...CANNED_GREEN_BEANS, amount: 58, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'drained', section: SECTIONS.CASSEROLE },
        { ...CREAM_OF_MUSHROOM, amount: 10.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', section: SECTIONS.CASSEROLE },
        { ...CRISPY_FRIED_ONIONS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CASSEROLE },
        { ...CRISPY_FRIED_ONIONS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `In a baking pan, combine all the "${SECTIONS.CASSEROLE}" section ingredients.`, section: SECTIONS.PREP_CASSEROLE, img: [casserole1, casserole2] },
        { step: `Bake until bubbly (about 30 to 35 minutes).`, section: SECTIONS.BAKE },
        { step: `Remove from the oven and mix.`, section: SECTIONS.BAKE },
        { step: `Top with the crispy fried onions.`, section: SECTIONS.BAKE },
        { step: `Bake until golden (about 10 minutes).`, section: SECTIONS.BAKE },
        { step: `Serve this dish warm at your next holiday feast.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};