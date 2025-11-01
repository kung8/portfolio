const corn1 = '../assets/Products/buttered-corn-1.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CANNED_SWEET_CORN, HEAVY_CREAM, HONEY, SALT, SAUCEPAN, STOVE, UNSALTED_BUTTER } = require('./ingredients');

const CORN_SECTION = 'Corn';
const CREAM_SECTION = 'Cream';
const HONEY_SECTION = 'Honey';

const COOK_CORN = 'Cook Corn';
const COOK_CREAM = 'Cook Cream';
const COOK_HONEY = 'Cook Honey';

module.exports = {
    cardName: 'Buttered Corn',
    name: 'Buttered Corn',
    img: corn1,
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.VEGETABLE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Buttered Corn', 
            link: 'https://thesaltymarshmallow.com/buttered-corn-recipe/',
            authors: ['Nichole'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CORN_SECTION },
        { ...CANNED_SWEET_CORN, amount: 58, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'drained', section: CORN_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CORN_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CORN_SECTION },
        { ...HEAVY_CREAM, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAM_SECTION },
        { ...HONEY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: HONEY_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
    ],
    directions: [
        { step: 'Over medium heat, melt butter in a saucepan.', section: COOK_CORN },
        { step: 'Add corn, salt and pepper. Cook for 5 to 10 minutes. Stirring occasionally.', section: COOK_CORN },

        { step: 'Add heavy cream. Reduce heat.', section: COOK_CREAM },
        { step: 'Cook until sauce has reduced slightly (about 5 minutes).', section: COOK_CREAM },

        { step: 'Add honey. Cook for 2 minutes.', section: COOK_HONEY },

        { step: 'Serve warm and enjoy this sweet appetizer.', section: SECTIONS.SERVE },
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