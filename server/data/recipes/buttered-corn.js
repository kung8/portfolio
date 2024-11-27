// const buttered = '../assets/Products/buttered-corn.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { UNSALTED_BUTTER, CANNED_SWEET_CORN, SALT, BLACK_PEPPER, HEAVY_CREAM, HONEY } = require('./ingredients');

module.exports = {
    cardName: 'Buttered Corn',
    name: 'Buttered Corn',
    img: '',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.VEGETABLE],
    yields: '6 servings',
    prepTime: '5 m',
    cookTime: '20 m',
    websites: [
        { label: 'Buttered Corn', link: 'https://thesaltymarshmallow.com/buttered-corn-recipe/' }
    ],
    separated: false,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '4 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CANNED_SWEET_CORN, amount: '2 lb', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...HEAVY_CREAM, amount: '1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...HONEY, amount: '1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
    ],
    directions: [
        { step: 'Over medium heat, melt butter in a saucepan.', type: SECTIONS.MAIN },
        { step: 'Add corn, salt and pepper. Cook for 5 to 10 minutes. Stirring occasionally.', type: SECTIONS.MAIN },
        { step: 'Add heavy cream. Reduce heat.', type: SECTIONS.MAIN },
        { step: 'Cook until sauce hass reduced slightly (about 5 minutes).', type: SECTIONS.MAIN },
        { step: 'Add honey. Cook for 2 minutes.', type: SECTIONS.MAIN },
        { step: 'Serve warm.', type: SECTIONS.MAIN },
    ]
};