// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { CANNED_GREEN_BEANS, CREAM_OF_MUSHROOM, MILK, LIGHT_SOY_SAUCE, BLACK_PEPPER, SALT, CRISPY_FRIED_ONIONS } = require('./ingredients');

module.exports = {
    cardName: 'Green Bean Casserole',
    name: 'Green Bean Casserole',
    img: '',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.CASSEROLE],
    yields: '8 servings',
    prepTime: '5 m',
    cookTime: '45 m',
    websites: [
        { label: 'Green Bean Casserole', link: 'https://www.spendwithpennies.com/classic-green-bean-casserole/' }
    ],
    separated: true,
    ingredients: [
        { ...CANNED_GREEN_BEANS, amount: '4 c can', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CREAM_OF_MUSHROOM, amount: '10.5 oz can', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MILK, amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIGHT_SOY_SAUCE, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '1/4 tsp', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...CRISPY_FRIED_ONIONS, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CRISPY_FRIED_ONIONS, amount: '1/2 c', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'Combine together all the ingredients in the baking dish (only the 1 cup fried onions).', type: SECTIONS.MAIN },
        { step: 'Bake until bubbly (about 30 to 35 minutes).', type: SECTIONS.MAIN },
        { step: 'Remove from the oven and mix.', type: SECTIONS.MAIN },
        { step: 'Top with the 1/2 cup crispy fried onions.', type: SECTIONS.MAIN },
        { step: 'Bake until golden (about 10 minutes).', type: SECTIONS.MAIN },
        { step: 'Serve this dish warm at your next holiday feast.', type: SECTIONS.SERVE },
    ]
};