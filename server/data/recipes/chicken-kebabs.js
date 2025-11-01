const kebabs1 = '../assets/Products/chicken-kebabs-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALUMINUM_FOIL,
    BAKING_SHEET,
    BAMBOO_SKEWERS,
    BLACK_PEPPER,
    CHICKEN_THIGH,
    CUTTING_BOARD,
    GARLIC_POWDER,
    KNIFE,
    LIGHT_SOY_SAUCE,
    OVEN,
    RED_BELL_PEPPER,
    SALT,
    TERIYAKI_SAUCE,
    VEGETABLE_OIL,
    YELLOW_ONION,
    ZIPLOC_BAG,
} = require('./ingredients');

module.exports = {
    cardName: 'Kebabs',
    name: 'Chicken Kebabs',
    img: kebabs1,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.MIDDLE_EASTERN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD, TYPES.PROTEIN],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 180, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    separated: false,
    ingredients: [
        { ...LIGHT_SOY_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '' },
        { ...TERIYAKI_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '' },
        { ...VEGETABLE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '' },
        { ...GARLIC_POWDER, amount: 1, unit: '', additionalDetails: '' },
        { ...CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '' },
        { ...RED_BELL_PEPPER, amount: 2, unit: '', additionalDetails: '' },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: '' },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste' },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste' },
    ],
    appliances: [
        OVEN
    ],
    supplies: [
        CUTTING_BOARD,
        KNIFE,
        { ...ZIPLOC_BAG, additionalDetails: 'gallon-size' },
        BAMBOO_SKEWERS,
        BAKING_SHEET,
        ALUMINUM_FOIL,
    ],
    directions: [
        { step: 'Make the marinade in a ziploc bag: adding soy sauce, sprite, oil, and garlic powder.', section: SECTIONS.MAIN },
        { step: 'Cut the chicken into 1 inch pieces and marinate for 1 to 3 hours.', section: SECTIONS.MAIN },
        { step: 'Cut the veggies into large pieces.', section: SECTIONS.MAIN },
        { step: 'Preheat oven to 450ºF (whenever you are ready to actually cook).', section: SECTIONS.MAIN },
        { step: 'Place aluminum foil on the baking sheet.', section: SECTIONS.MAIN },
        { step: 'Thread the skewers with chicken and veggies leaving enough space between to allow the pieces to get cooked thoroughly.', section: SECTIONS.MAIN },
        { step: 'Place the finished skewers on the baking sheet with space in between each other.', section: SECTIONS.MAIN },
        { step: 'Once the oven is 450ºF, cook the kebabs for 15 to 25 minutes (cook time will depend on the size of meat).', section: SECTIONS.MAIN },
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
            instruction: 'Wrap in foil and bake at 350ºF until heated through (about 30 minutes).',
        },
    ],
    mealPrep: false,
};