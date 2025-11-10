const hamburger1 = '../assets/Products/hamburger-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALUMINUM_FOIL,
    BREADCRUMBS,
    CHEDDAR_CHEESE,
    EGG,
    GROUND_TURKEY,
    HAMBURGER_BUNS,
    MIXING_BOWL,
    MUSHROOM,
    OVEN,
    PICKLES,
    RED_ONION,
    ROMA_TOMATO,
    SPINACH,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Hamburger',
    name: 'Hamburger',
    img: hamburger1,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    allergies: [ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...GROUND_TURKEY, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.HAMBURGER },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.HAMBURGER },
        { ...BREADCRUMBS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.HAMBURGER },
        { ...YELLOW_ONION, amount: 1 / 4, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.HAMBURGER },

        { ...HAMBURGER_BUNS, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...RED_ONION, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PICKLES, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SPINACH, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEDDAR_CHEESE, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...MUSHROOM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        ALUMINUM_FOIL,
        MIXING_BOWL,
    ],
    directions: [
        { step: `Preheat oven to 425ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Place aluminum foil on baking sheet.`, section: SECTIONS.PREP_PAN },
        { step: `In a mixing bowl, combine the "${SECTIONS.HAMBURGER}" section ingredients.`, section: SECTIONS.MAKE_HAMBURGER },
        { step: `Ball up meat mixture and flatten into patties.`, section: SECTIONS.MAKE_HAMBURGER },
        { step: `Place patties on baking sheet and bake for 30 minutes.`, section: SECTIONS.BAKE },
        { step: `Broil for 5 minutes.`, section: SECTIONS.BROIL },
        { step: `Serve on hamburger bun with preferred toppings and condiments (and fries or preferred side optional).`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store ingredients separately. Store buns at room temperature.',
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