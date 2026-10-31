// const example1 = '../assets/Products/example-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { BLACK_PEPPER, BROCCOLI, CARROT, CHEDDAR_CHEESE, CHICKEN_BOUILLON, CORNSTARCH, GARLIC_POWDER, HEAVY_CREAM, ONION_POWDER, SALT, SLOW_COOKER, UNSALTED_BUTTER, WATER } = require('./ingredients');

const ADD_CHEESE = 'Add Cheese';

module.exports = {
    wip: true,
    cardName: 'Broccoli Cheddar Soup',
    name: 'Broccoli Cheddar Soup',
    img: '',
    available: true,
    recommended: false,
    createdAt: '{{createdAt}}',
    modifiedAt: '2026-10-31 13:56:56',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SLOW_COOK],
    type: [TYPES.SOUP],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 4.5, unit: TIME_UNITS.HOUR },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Broccoli Cheddar Soup',
            link: 'https://www.facebook.com/100088945650113/videos/2243389206616528/',
            authors: ["Caitlyn's Kitchen"],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...BROCCOLI, amount: 5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...ONION_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },

        { ...WATER, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.LIQUIDS },
        { ...CHICKEN_BOUILLON, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.LIQUIDS },
        { ...CORNSTARCH, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.LIQUIDS },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BUTTER },

        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CHEESE },
        { ...CHEDDAR_CHEESE, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CHEESE },
    ],
    appliances: [
        SLOW_COOKER,
    ],
    directions: [
        { step: `In a crockpot, combine the "${SECTIONS.VEGGIES}" section ingredients.`, section: SECTIONS.COOK_VEGGIES },
        { step: `In a mixing bowl, combine the "${SECTIONS.LIQUIDS}" section ingredients.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Add the liquid mixture with the butter to the crockpot.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Cook on low until the vegetables are tender (about 4 hours).`, section: SECTIONS.COOK_VEGGIES },
        { step: `Stir in "${SECTIONS.CHEESE}" section ingredients.`, section: ADD_CHEESE },
        { step: `Cook on high until the cheese is melted (about 30 minutes).`, section: ADD_CHEESE },
        { step: `Enjoy this broccoli cheddar soup in a soup bowl or bread bowl!`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave until heated through (about 2-3 minutes).',
        },
    ],
    mealPrep: true,
};