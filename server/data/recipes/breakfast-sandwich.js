const breakfastSandwich = '../assets/Products/breakfast-sandwich.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS, PROTEIN, SECTIONS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const {
    EGG,
    COOKED_HAM,
    BISCUITS,
    CHEDDAR_CHEESE,
    STOVE,
    FRYING_PAN,
    SPATULA,
} = require('./ingredients');
const biscuits = require('./biscuits-and-gravy');

module.exports = {
    cardName: 'Breakfast Sandwich',
    name: 'Breakfast Sandwich',
    img: breakfastSandwich,
    recipeAuthors: ['Kevin Ung'],
    recipeFinder: '',
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.EGG, PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COOKED_HAM, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BISCUITS, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHEDDAR_CHEESE, amount: 1, unit: '', additionalDetails: 'slice', section: SECTIONS.MAIN },
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
            step: 'Make fresh biscuits either from a pre-made dough or from scratch. Try out this ',
            section: SECTIONS.MAIN,
            link: {
                text: 'biscuit recipe',
                link: `https://kevinung8.com/#/recipes/${biscuits.name}`,
                additionalText: '.'
            }
        },
        { step: 'Over medium-high heat, melt a little butter in a pan.', section: SECTIONS.MAIN },
        { step: 'Cook the egg as how you like it. I prefer for this recipe over medium or sunny side up.', section: SECTIONS.MAIN },
        { step: 'Add salt and pepper to your egg.', section: SECTIONS.MAIN },
        { step: 'Remove egg from pan.', section: SECTIONS.MAIN },
        { step: 'Add the ham slice to the pan and heat each side for 30 seconds.', section: SECTIONS.MAIN },
        { step: 'Place a slice of cheese on the ham so it melts.', section: SECTIONS.MAIN },
        { step: 'Make a sandwich with these ingredients and enjoy this fresh breakfast sandwich.', section: SECTIONS.MAIN },
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