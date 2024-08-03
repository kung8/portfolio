const mixedPan = '../assets/Products/sauteed-squash-mixed-in-pan.jpeg';
const mixed = '../assets/Products/sauteed-squash-mixed.jpeg';
const oil = '../assets/Products/sauteed-squash-oil-in-pan.jpeg';
const onions = '../assets/Products/sauteed-squash-onions.jpeg';
const plated = '../assets/Products/sauteed-squash-plated.jpeg';
const raw = '../assets/Products/sauteed-squash-raw.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

module.exports = {
    cardName: 'Sauteed Squash',
    name: 'Sauteed Squash',
    img: plated,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    yields: '4 servings',
    prepTime: '5 m',
    cookTime: '25 m',
    websites: [
        "https://www.wellplated.com/sauteed-zucchini/"
    ],
    separated: false,
    ingredients: [
        { name: 'olive oil', amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'butter', amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'yellow onion', amount: '1', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { name: 'zucchini', amount: '3', additionalDetails: 'sliced into 2"', section: SECTIONS.MAIN },
        { name: 'summer squash', amount: '1', additionalDetails: 'sliced into 2"', section: SECTIONS.MAIN },
        { name: 'salt', amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'black pepper', amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'thyme', amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'parmesan', amount: '1/4 c', additionalDetails: 'shredded', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Over medium-low heat, heat oil, onion, and butter in a pan. Cook until lightly browned (about 10 minutes).', type: SECTIONS.MAIN, img: [oil, onions] },
        { step: 'Increase to medium heat and add salt, black pepper, thyme, and squash and zucchini medley.', type: SECTIONS.MAIN, img: [raw] },
        { step: 'Cook until cooked (about 10 to 15 minutes). Stirring occasionally.', type: SECTIONS.MAIN, img: [mixedPan] },
        { step: 'Add parmesan and stir until well blended. I recommend removing the pan from heat, the residual heat should be enough to melt the cheese.', type: SECTIONS.MAIN, img: mixed },
        { step: 'Serve this on the side of any pasta dish.', type: SECTIONS.SERVE },
    ]
};