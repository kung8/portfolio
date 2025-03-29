const beefStroganoff = '../assets/Products/beef-stroganoff.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const {
    BEEF,
    YELLOW_ONION,
    MUSHROOM,
    GARLIC,
    UNSALTED_BUTTER,
    BEEF_BROTH,
    SALT,
    WORCESTERSHIRE_SAUCE,
    ALL_PURPOSE_FLOUR,
    SOUR_CREAM,
    SPAGHETTI_NOODLES,
} = require('./ingredients');

module.exports = {
    cardName: 'Beef Stroganoff',
    name: 'Beef Stroganoff',
    img: beefStroganoff,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.RUSSIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    type: [TYPES.NOODLE],
    yields: { amount: 7, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...BEEF, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', optional: false },
        { ...YELLOW_ONION, amount: 4, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', optional: false },
        { ...MUSHROOM, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', optional: false },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', optional: false },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...BEEF_BROTH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...WORCESTERSHIRE_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...SOUR_CREAM, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...SPAGHETTI_NOODLES, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooked', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'frying pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Heat pan over medium-high heat and add butter.', type: SECTIONS.MAIN },
        { step: 'Cook mushroom, garlic, and onion until tender and set aside.', type: SECTIONS.MAIN },
        { step: 'Brown beef.', type: SECTIONS.MAIN },
        { step: 'Add 2 cup of broth, salt and worchestershire sauce until boiling.', type: SECTIONS.MAIN },
        { step: 'Lower heat. Cover and simmer for 15 minutes.', type: SECTIONS.MAIN },
        { step: 'Add remaining broth, flour and vegetables. Heat until boiling. Stir occasionally.', type: SECTIONS.MAIN },
        { step: 'Add sour cream. Heat until hot and solid color.', type: SECTIONS.MAIN },
        { step: 'Serve over noodles.', type: SECTIONS.MAIN },
    ]
};