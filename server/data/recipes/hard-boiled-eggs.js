const egg = '../assets/Products/hard-boiled-egg.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const {
    EGG,
    SALT,
    BLACK_PEPPER,
    OREGANO,
    BASIL,
    UNSALTED_BUTTER,
    YELLOW_ONION,
    RED_BELL_PEPPER,
} = require('./ingredients');

const EGGS_SECTION = 'Eggs';
const VEGGIES = 'Veggies';

module.exports = {
    cardName: 'Hard Boiled Eggs',
    name: 'Hard Boiled Eggs',
    img: egg,
    recipeAuthors: ['Kevin Ung'],
    recipeFinder: '',
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    protein: [PROTEIN.EGG],
    type: [TYPES.PROTEIN],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: EGGS_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste and for boiling', section: EGGS_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: EGGS_SECTION },
        { ...OREGANO, amount: '', unit: '', additionalDetails: 'to taste', section: EGGS_SECTION },
        { ...BASIL, amount: '', unit: '', additionalDetails: 'to taste', section: EGGS_SECTION },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGGIES },
        { ...YELLOW_ONION, amount: 1 / 4, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: VEGGIES },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Over medium-high heat, boil water and salt in a saucepan.', section: EGGS_SECTION },
        { step: 'Once water has boiled, carefully add the raw eggs into the saucepan.', section: EGGS_SECTION },
        { step: 'Set a timer for 10 minutes.', section: EGGS_SECTION },
        { step: 'Once the eggs are cooked, peel them and add the preferred seasonings.', section: EGGS_SECTION },
        { step: 'While the eggs are cooking, heat a frying pan over medium-high heat.', section: VEGGIES },
        { step: 'Add a little butter to the frying pan once it\'s hot.', section: VEGGIES },
        { step: 'Brown some diced onion and peppers.', section: VEGGIES },
        { step: 'Combine the eggs and veggies and enjoy a nutritional breakfast (or snack).', section: SECTIONS.SERVE },
    ],
    store: null,
    reheat: null,
    mealPrep: false,
};