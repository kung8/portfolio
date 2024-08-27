const phillyCheesesteak = '../assets/Products/philly-cheesesteak.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {
    BEEF,
    OLIVE_OIL,
    MEDIUM_YELLOW_ONION,
    RED_BELL_PEPPERS,
    MOZZARELLA_CHEESE,
    SALT,
    BLACK_PEPPER,
    HOAGIE_BREAD,
} = require('./ingredients');

module.exports = {
    cardName: 'Philly Cheesesteak',
    name: 'Philly Cheesesteak',
    img: phillyCheesesteak,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '20 m',
    ingredients: [
        { ...BEEF, amount: '1 lb', additionalDetails: 'thinly sliced', optional: false },
        { ...OLIVE_OIL, amount: '1 tsp', additionalDetails: '', optional: false },
        { ...MEDIUM_YELLOW_ONION, amount: '1', additionalDetails: 'sliced', optional: false },
        { ...RED_BELL_PEPPERS, amount: '3', additionalDetails: 'sliced', optional: false },
        { ...MOZZARELLA_CHEESE, amount: '16 slices', additionalDetails: '', optional: false },
        { ...SALT, amount: '', additionalDetails: 'minced', optional: false },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'minced', optional: false },
        { ...HOAGIE_BREAD, amount: '8', additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pan' },
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'medium bowl' },
        { name: 'plate' },
    ],
    directions: [
        { step: 'Heat pan over medium-high heat and place slices of beef in pan. Cook until close to brown. Set aside.', type: SECTIONS.MAIN },
        { step: 'Add oil to pan over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Add onions and bell pepper slices into pan and caramelize.', type: SECTIONS.MAIN },
        { step: 'Open up hoagie bread and layer with meat, cheese and vegetables to your hearts content.', type: SECTIONS.MAIN },
        { step: 'Enjoy the taste of freedom!', type: SECTIONS.MAIN },
    ],
};