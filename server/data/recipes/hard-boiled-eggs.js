const egg = '../assets/Products/hard-boiled-egg.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    EGGS,
    SALT,
    BLACK_PEPPER,
    OREGANO,
    BASIL,
    UNSALTED_BUTTER,
    MEDIUM_YELLOW_ONION,
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
    yields: '1 serving',
    prepTime: '5 m',
    cookTime: '10 m',
    separated: true,
    ingredients: [
        { ...EGGS, amount: '2', additionalDetails: '', section: EGGS_SECTION },
        { ...SALT, amount: '', additionalDetails: 'to taste and for boiling', section: EGGS_SECTION },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: EGGS_SECTION },
        { ...OREGANO, amount: '', additionalDetails: 'to taste', section: EGGS_SECTION },
        { ...BASIL, amount: '', additionalDetails: 'to taste', section: EGGS_SECTION },
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', section: VEGGIES },
        { ...MEDIUM_YELLOW_ONION, amount: '1/4', additionalDetails: 'diced', section: VEGGIES },
        { ...RED_BELL_PEPPERS, amount: '1', additionalDetails: 'diced', section: VEGGIES },
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