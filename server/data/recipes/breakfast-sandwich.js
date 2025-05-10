const breakfastSandwich = '../assets/Products/breakfast-sandwich.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS, PROTEIN, SECTIONS , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    EGG,
    COOKED_HAM,
    BISCUITS,
    CHEDDAR_CHEESE,
} = require('./ingredients');

module.exports = {
    cardName: 'Breakfast Sandwich',
    name: 'Breakfast Sandwich',
    img: breakfastSandwich,
    recipeAuthor: 'Kevin Ung',
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
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'spatula' },
    ],
    directions: [
        {
            step: 'Make fresh biscuits either from a pre-made dough or from scratch. Try out this ',
            type: SECTIONS.MAIN,
            link: {
                text: 'biscuit recipe',
                link: 'https://kevinung8.com/#/recipes/southern-biscuits-and-gravy',
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
    ]
}