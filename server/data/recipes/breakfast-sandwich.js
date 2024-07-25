const breakfastSandwich = '../assets/Products/breakfast-sandwich.jpeg';
const { CATEGORIES, GENRES, TYPES, METHODS, PROTEIN, SECTIONS } = require('./constants');

module.exports = {
    cardName: 'Breakfast Sandwich',
    name: 'Breakfast Sandwich',
    img: breakfastSandwich,
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.EGG, PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    yields: '1 serving',
    prepTime: '5 m',
    cookTime: '10 m',
    ingredients: [
        { name: 'large egg', amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'ham slice', amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'fresh biscuit', amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'cheese slice', amount: '1', additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Over medium-high heat, melt a little butter in a pan.', type: SECTIONS.MAIN },
        { step: 'Cook the egg as how you like it. I prefer for this recipe over medium or sunny side up.', type: SECTIONS.MAIN },
        { step: 'Add salt and pepper to your egg.', type: SECTIONS.MAIN },
        { step: 'Remove egg from pan.', type: SECTIONS.MAIN },
        { step: 'Add the ham slice to the pan and heat each side for 30 seconds.', type: SECTIONS.MAIN },
        { step: 'Place a slice of cheese on the ham so it melts.', type: SECTIONS.MAIN },
        { step: 'Make a sandwich with these ingredients and enjoy this fresh breakfast sandwich.', type: SECTIONS.MAIN },
    ]
}