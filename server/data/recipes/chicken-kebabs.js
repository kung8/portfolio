const kebabs = '../assets/Products/kebabs.jpeg';
const { CATEGORIES, GENRES, SECTIONS, METHODS, PROTEIN, TYPES } = require('./constants');

module.exports = {
    cardName: 'Kebabs',
    name: 'Chicken Kebabs',
    img: kebabs,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.ASIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD, TYPES.MEAT],
    yields: '6 servings',
    prepTime: '10 m',
    cookTime: '25 - 30 m',
    ingredients: [
        { name: 'soy sauce', amount: '1/2 c', additionalDetails: '', optional: false },
        { name: 'teriyaki sauce', amount: '1/2 c', additionalDetails: '', optional: false },
        { name: 'vegetable oil', amount: '1/2 c', additionalDetails: '', optional: false },
        { name: 'garlic powder', amount: '1', additionalDetails: '', optional: false },
        { name: 'chicken', amount: '2 lbs', additionalDetails: '', optional: false },
        { name: 'bell pepper', amount: '2', additionalDetails: '', optional: false },
        { name: 'onion', amount: '1', additionalDetails: '', optional: false },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false },
    ],
    supplies: [
        { name: 'cutting board + knife' },
        { name: 'ziploc bag' },
        { name: 'bamboo skewer' },
        { name: 'oven' },
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