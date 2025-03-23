const pigsInABlanket = '../assets/Products/pigs-in-a-blanket.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS , UNITS, YIELD_UNITS } = require('./constants');
const { CROISSANT_DOUGH, EGG, MINI_HOT_DOG } = require('./ingredients');

module.exports = {
    cardName: 'Pigs In A Blanket',
    name: 'Pigs In A Blanket',
    img: pigsInABlanket,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: '10 m',
    cookTime: '15 m',
    ingredients: [
        { ...CROISSANT_DOUGH, amount: 2, unit: UNITS.CAN, additionalDetails: '', optional: false },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...MINI_HOT_DOG, amount: 14, unit: UNITS.OUNCE, additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'aluminum foil' },
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'basting brush' },
        { name: 'plate' },
    ],
    directions: [
        { step: 'Preheat oven to 375ºF and line baking sheet with aluminum foil.', type: SECTIONS.MAIN },
        { step: 'Tubs of croissant dough usually make about 8 croissants. Cut each croissant dough triangle into thirds.', type: SECTIONS.MAIN },
        { step: 'Place hot dog on one end of the croissant piece and roll until it is snugly wrapped inside its blanket.', type: SECTIONS.MAIN },
        { step: 'Separate the egg white and the yolk. Lightly brush some of the yolk over the blanket to create a seal.', type: SECTIONS.MAIN },
        { step: 'Bake for about 12 - 15 min or until golden brown.', type: SECTIONS.MAIN },
        { step: 'Serve with your favorite condiment, and enjoy this easy tailgate hors d\'oeuvre!', type: SECTIONS.MAIN },
    ],
};