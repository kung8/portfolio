const kebabs = '../assets/Products/kebabs.jpeg';
const { CATEGORIES, GENRES, SECTIONS, METHODS, PROTEIN, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    LIGHT_SOY_SAUCE,
    TERIYAKI_SAUCE,
    VEGETABLE_OIL,
    GARLIC_POWDER,
    CHICKEN_THIGH,
    RED_BELL_PEPPER,
    YELLOW_ONION,
    SALT,
    BLACK_PEPPER,
} = require('./ingredients');

module.exports = {
    cardName: 'Kebabs',
    name: 'Chicken Kebabs',
    img: kebabs,
    recipeAuthor: '',
    recipeFinder: '',
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.MIDDLE_EASTERN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD, TYPES.PROTEIN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 180, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...LIGHT_SOY_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...TERIYAKI_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...VEGETABLE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...GARLIC_POWDER, amount: 1, unit: '', additionalDetails: '', optional: false },
        { ...CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', optional: false },
        { ...RED_BELL_PEPPER, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: '', optional: false },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', optional: false },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', optional: false },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'ziploc bag' },
        { name: 'bamboo skewer' },
        { name: 'baking sheet' },
        { name: 'aluminum foil' },
    ],
    directions: [
        { step: 'Make the marinade in a ziploc bag: adding soy sauce, sprite, oil, and garlic powder.', type: SECTIONS.MAIN },
        { step: 'Cut the chicken into 1-inch pieces and marinate for 1 to 3 hours.', type: SECTIONS.MAIN },
        { step: 'Cut the veggies into large pieces.', type: SECTIONS.MAIN },
        { step: 'Preheat oven to 450ºF (whenever you are ready to actually cook).', type: SECTIONS.MAIN },
        { step: 'Place aluminum foil on the baking sheet.', type: SECTIONS.MAIN },
        { step: 'Thread the skewers with chicken and veggies leaving enough space between to allow the pieces to get cooked thoroughly.', type: SECTIONS.MAIN },
        { step: 'Place the finished skewers on the baking sheet with space in between each other.', type: SECTIONS.MAIN },
        { step: 'Once the oven is 450ºF, cook the kebabs for 15 to 25 minutes (cook time will depend on the size of meat).', type: SECTIONS.MAIN },
    ]
};