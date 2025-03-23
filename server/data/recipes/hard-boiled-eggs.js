const egg = '../assets/Products/hard-boiled-egg.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, UNITS, YIELD_UNITS } = require('./constants');
const {
    EGG,
    SALT,
    BLACK_PEPPER,
    OREGANO,
    BASIL,
    UNSALTED_BUTTER,
    YELLOW_ONION,
    RED_BELL_PEPPERS,
} = require('./ingredients');

const EGGS_SECTION = 'Eggs';
const VEGGIES = 'Veggies';

module.exports = {
    cardName: 'Hard Boiled Eggs',
    name: 'Hard Boiled Eggs',
    img: egg,
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.EGG],
    type: [TYPES.PROTEIN],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: '5 m',
    cookTime: '10 m',
    separated: true,
    ingredients: [
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: EGGS_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste and for boiling', section: EGGS_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: EGGS_SECTION },
        { ...OREGANO, amount: '', unit: '', additionalDetails: 'to taste', section: EGGS_SECTION },
        { ...BASIL, amount: '', unit: '', additionalDetails: 'to taste', section: EGGS_SECTION },
        { ...UNSALTED_BUTTER, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: VEGGIES },
        { ...YELLOW_ONION, amount: 1 / 4, unit: UNITS.MEDIUM, additionalDetails: 'diced', section: VEGGIES },
        { ...RED_BELL_PEPPERS, amount: 1, unit: '', additionalDetails: 'diced', section: VEGGIES },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Over medium-high heat, boil water and salt in a saucepan.', type: EGGS_SECTION },
        { step: 'Once water has boiled, carefully add the raw eggs into the saucepan.', type: EGGS_SECTION },
        { step: 'Set a timer for 10 minutes.', type: EGGS_SECTION },
        { step: 'Once the eggs are cooked, peel them and add the preferred seasonings.', type: EGGS_SECTION },
        { step: 'While the eggs are cooking, heat a frying pan over medium-high heat.', type: VEGGIES },
        { step: 'Add a little butter to the frying pan once it\'s hot.', type: VEGGIES },
        { step: 'Brown some diced onion and peppers.', type: VEGGIES },
        { step: 'Combine the eggs and veggies and enjoy a nutritional breakfast (or snack).', type: SECTIONS.SERVE },
    ]
};