const sandwich1 = '../assets/Products/breakfast-sandwich-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BISCUITS,
    CHEDDAR_CHEESE,
    COOKED_HAM,
    EGG,
    FRYING_PAN,
    SPATULA,
    STOVE,
} = require('./ingredients');
const biscuitsRecipe = require('./biscuits-and-gravy');

const BISCUITS_SECTION = 'Biscuits';
const EGG_SECTION = 'Egg';

const MAKE_BISCUITS = 'Make Biscuits';
const COOK_EGG = 'Cook Egg';

module.exports = {
    cardName: 'Breakfast Sandwich',
    name: 'Breakfast Sandwich',
    img: sandwich1,
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.EGG, PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    allergies: [ALLERGIES.EGG],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...BISCUITS, name: 'biscuit', amount: 1, unit: '', additionalDetails: '', section: BISCUITS_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: EGG_SECTION },
        { ...COOKED_HAM, amount: 1, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.SERVE },
        { ...CHEDDAR_CHEESE, amount: 1, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        SPATULA,
    ],
    directions: [
        {
            step: `Make fresh biscuits either from a pre-made dough or from scratch. Try out this `,
            section: MAKE_BISCUITS,
            link: {
                text: 'biscuit recipe',
                link: `https://kevinung8.com/#/recipes/${biscuitsRecipe.name}`,
                additionalText: '.'
            }
        },
        { step: `Over medium-high heat, melt a little butter in a pan.`, section: COOK_EGG },
        { step: `Cook the egg as how you like it. I prefer for this recipe over medium or sunny side up.`, section: COOK_EGG },
        { step: `Add salt and pepper to your egg.`, section: COOK_EGG },
        { step: `Remove egg from pan.`, section: COOK_EGG },

        { step: `Add the ham slice to the pan and heat each side for 30 seconds.`, section: SECTIONS.ASSEMBLE },
        { step: `Place a slice of cheese on top. Let it melt.`, section: SECTIONS.ASSEMBLE },
        { step: `Cut biscuit. Assemble.`, section: SECTIONS.ASSEMBLE },

        { step: `Enjoy this flaky breakfast sandwich and feel free to fill it with your favorite ingredients.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'For crispy biscuit with a soft inside, wrap the sandwich in foil and bake at 350°F until heated through (about 8 to 10 minutes). Remove foil and bake until biscuit is crisp (about 4 to 6 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'For a soft biscuit, wrap the sandwich in paper towel and microwave until heated through (about 30 to 60 seconds).',
        },
    ],
    mealPrep: true,
}