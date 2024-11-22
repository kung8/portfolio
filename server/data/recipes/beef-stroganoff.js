const beefStroganoff = '../assets/Products/beef-stroganoff.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS } = require('./constants');
const {
    BEEF,
    MEDIUM_YELLOW_ONION,
    MUSHROOMS,
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
    genre: [GENRES.AMERICAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    type: [TYPES.NOODLE],
    yields: '7 servings',
    prepTime: '10 - 12 m',
    cookTime: '45 m',
    ingredients: [
        { ...BEEF, amount: '3 lbs', additionalDetails: 'sliced', optional: false },
        { ...MEDIUM_YELLOW_ONION, amount: '4', additionalDetails: 'sliced', optional: false },
        { ...MUSHROOMS, amount: '1 lb', additionalDetails: 'sliced', optional: false },
        { ...GARLIC, amount: '2', additionalDetails: 'minced', optional: false },
        { ...UNSALTED_BUTTER, amount: '1/2 c', additionalDetails: '', optional: false },
        { ...BEEF_BROTH, amount: '3 c', additionalDetails: '', optional: false },
        { ...SALT, amount: '1 tsp', additionalDetails: '', optional: false },
        { ...WORCESTERSHIRE_SAUCE, amount: '2 tsp', additionalDetails: '', optional: false },
        { ...ALL_PURPOSE_FLOUR, amount: '1/2 c', additionalDetails: '', optional: false },
        { ...SOUR_CREAM, amount: '3 c', additionalDetails: '', optional: false },
        { ...SPAGHETTI_NOODLES, amount: '6 c', additionalDetails: 'cooked', optional: false },
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