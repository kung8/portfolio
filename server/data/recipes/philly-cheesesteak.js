const phillyCheesesteak = '../assets/Products/philly-cheesesteak.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN , UNITS, YIELD_UNITS } = require('./constants');
const {
    OLIVE_OIL,
    RED_BELL_PEPPERS,
    SALT,
    BLACK_PEPPER,
    HOAGIE_BREAD,
    BEEF_RIBEYE_STEAK,
    YELLOW_ONION,
    MUSHROOMS,
    PROVOLONE_CHEESE,
} = require('./ingredients');

module.exports = {
    cardName: 'Philly Cheesesteak',
    name: 'Philly Cheesesteak',
    img: phillyCheesesteak,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: '20 m',
    cookTime: '25 m',
    websites: [
        { label: 'Philly Cheesesteak', link: 'https://momsdish.com/easy-philly-cheesesteak' }
    ],
    ingredients: [
        { ...BEEF_RIBEYE_STEAK, amount: 2, unit: UNITS.POUND, additionalDetails: 'thin strips', optional: false },
        { ...RED_BELL_PEPPERS, amount: 2, unit: '', additionalDetails: 'sliced strips', optional: false },
        { ...YELLOW_ONION, amount: 1, unit: UNITS.LARGE, additionalDetails: 'sliced strips', optional: false },
        { ...MUSHROOMS, amount: 1, unit: UNITS.POUND, additionalDetails: 'sliced', optional: true },
        { ...PROVOLONE_CHEESE, amount: 1, unit: UNITS.POUND, additionalDetails: '', optional: false },
        { ...OLIVE_OIL, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...SALT, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...BLACK_PEPPER, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...HOAGIE_BREAD, amount: 6, unit: '', additionalDetails: '', optional: false },
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
        { step: 'Over high heat, heat oil in pan.', type: SECTIONS.MAIN },
        { step: 'Add onions, bell peppers and mushrooms into pan and caramelize. Saute until browned and set aside.', type: SECTIONS.MAIN },
        { step: 'In same pan, add beef and season with salt and pepper. Cook until beef is cooked and Set aside.', type: SECTIONS.MAIN },
        { step: 'Re-add the veggies to pan and stir.', type: SECTIONS.MAIN },
        { step: 'Layer cheese slices and melt (about a minute).', type: SECTIONS.MAIN },
        { step: 'Optionally toast the buns. Open up hoagie bread and layer with meat, cheese and vegetables to your hearts content.', type: SECTIONS.MAIN },
        { step: 'Enjoy the taste of freedom!', type: SECTIONS.MAIN },
    ],
};