const egg = '../assets/Products/hard-boiled-egg.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

const EGGS = 'Eggs';
const VEGGIES = 'Veggies';

module.exports = {
    cardName: 'Hard Boiled Eggs',
    name: 'Hard Boiled Eggs',
    img: egg,
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.EGG],
    type: [TYPES.PROTEIN],
    yields: '1 serving',
    prepTime: '5 m',
    cookTime: '10 m',
    separated: true,
    ingredients: [
        { name: 'eggs', amount: '2', additionalDetails: '', optional: false, section: EGGS },
        { name: 'salt', amount: '', additionalDetails: 'to taste and for boiling', optional: false, section: EGGS },
        { name: 'black pepper', amount: '', additionalDetails: 'to taste', optional: false, section: EGGS },
        { name: 'oregano', amount: '', additionalDetails: 'to taste', optional: false, section: EGGS },
        { name: 'basil', amount: '', additionalDetails: 'to taste', optional: false, section: EGGS },
        { name: 'butter', amount: '1 Tbsp', additionalDetails: '', optional: false, section: VEGGIES },
        { name: 'onion', amount: '1/4', additionalDetails: 'diced', optional: false, section: VEGGIES },
        { name: 'bell pepper', amount: '1', additionalDetails: 'diced', optional: false, section: VEGGIES },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Over medium-high heat, boil water and salt in a saucepan.', type: EGGS },
        { step: 'Once water has boiled, carefully add the raw eggs into the saucepan.', type: EGGS },
        { step: 'Set a timer for 10 minutes.', type: EGGS },
        { step: 'Once the eggs are cooked, peel them and add the preferred seasonings.', type: EGGS },
        { step: 'While the eggs are cooking, heat a frying pan over medium-high heat.', type: VEGGIES },
        { step: 'Add a little butter to the frying pan once it\'s hot.', type: VEGGIES },
        { step: 'Brown some diced onion and peppers.', type: VEGGIES },
        { step: 'Combine the eggs and veggies and enjoy a nutritional breakfast (or snack).', type: SECTIONS.SERVE },
    ]
};