const butter = '../assets/Products/buttered-corn-butter.jpeg';
const cooked = '../assets/Products/buttered-corn-cooked.jpeg';
const corn = '../assets/Products/buttered-corn-corn.jpeg';
const cream = '../assets/Products/buttered-corn-cream.jpeg';
const honey = '../assets/Products/buttered-corn-honey.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { UNSALTED_BUTTER, CANNED_SWEET_CORN, SALT, BLACK_PEPPER, HEAVY_CREAM, HONEY } = require('./ingredients');

module.exports = {
    cardName: 'Buttered Corn',
    name: 'Buttered Corn',
    img: cooked,
    recipeAuthor: 'Nichole',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.VEGETABLE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Buttered Corn', link: 'https://thesaltymarshmallow.com/buttered-corn-recipe/' }
    ],
    separated: false,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CANNED_SWEET_CORN, amount: 58, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'drained', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...HEAVY_CREAM, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...HONEY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
    ],
    directions: [
        { step: 'Over medium heat, melt butter in a saucepan.', section: SECTIONS.MAIN, img: butter },
        { step: 'Add corn, salt and pepper. Cook for 5 to 10 minutes. Stirring occasionally.', section: SECTIONS.MAIN, img: corn },
        { step: 'Add heavy cream. Reduce heat.', section: SECTIONS.MAIN, img: cream },
        { step: 'Cook until sauce has reduced slightly (about 5 minutes).', section: SECTIONS.MAIN },
        { step: 'Add honey. Cook for 2 minutes.', section: SECTIONS.MAIN, img: honey },
        { step: 'Serve warm and enjoy this sweet appetizer.', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Cover with a microwave-safe lid or wrap. Heat in 30-second intervals until warmed through. Stir in between intervals to ensure even heating.',
        },
    ],
    mealPrep: true,
};