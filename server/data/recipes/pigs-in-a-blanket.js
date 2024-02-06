const pigsInABlanket = '../assets/Products/pigs-in-a-blanket.jpeg';
const { APPETIZER, MAIN } = require('./constants');

module.exports = {
    cardName: 'Pigs In A Blanket',
    name: 'Pigs In A Blanket',
    img: pigsInABlanket,
    available: true,
    type: [APPETIZER],
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '15 m',
    ingredients: [
        { name: 'croissant dough', amount: '2 can of', additionalDetails: '', optional: false },
        { name: 'egg', amount: '2', additionalDetails: '', optional: false },
        { name: 'mini hot dogs', amount: '14 oz', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'oven' },
        { name: 'baking sheet' },
        { name: 'aluminum foil' },
        { name: 'cutting board + knife' },
        { name: 'basting brush' },
        { name: 'plate' },
    ],
    directions: [
        { step: 'Preheat oven to 375ºF and line baking sheet with aluminum foil.', type: MAIN },
        { step: 'Tubs of croissant dough usually make about 8 croissants. Cut each croissant dough triangle into thirds.', type: MAIN },
        { step: 'Place hot dog on one end of the croissant piece and roll until it is snugly wrapped inside its blanket.', type: MAIN },
        { step: 'Separate the egg white and the yolk. Lightly brush some of the yolk over the blanket to create a seal.', type: MAIN },
        { step: 'Bake for about 12 - 15 min or until golden brown.', type: MAIN },
        { step: 'Serve with your favorite condiment, and enjoy this easy tailgate hors d\'oeuvre!', type: MAIN },
    ],
};