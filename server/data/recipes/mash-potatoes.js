// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { YUKON_GOLD_POTATOES, GARLIC, SALTED_BUTTER, UNSALTED_BUTTER, MILK, SALT, BLACK_PEPPER, GREEN_ONIONS, SOUR_CREAM, CHEDDAR_CHEESE, CHIVES } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Mash Potatoes',
    name: 'Mash Potatoes',
    img: '',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BOIL, METHODS.MASH],
    type: [TYPES.SIDE_DISH],
    yields: '10 servings',
    prepTime: '15 m',
    cookTime: '20 m',
    websites: [
        { label: 'Mash Potatoes', link: 'https://www.spendwithpennies.com/how-to-make-mashed-potatoes/' }
    ],
    separated: true,
    ingredients: [
        { ...YUKON_GOLD_POTATOES, amount: '4 lbs', additionalDetails: 'peeled and quartered', section: SECTIONS.MAIN },
        { ...GARLIC, amount: '3 cloves', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '1/3 c', additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...MILK, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...GREEN_ONIONS, amount: '', additionalDetails: 'thinly sliced', section: SECTIONS.TOPPINGS },
        { ...SOUR_CREAM, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEDDAR_CHEESE, amount: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...CHIVES, amount: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'masher' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Place quartered potatoes, salt, and garlic in a pot of cold water.', type: SECTIONS.MAIN },
        { step: 'Bring pot to a boil.', type: SECTIONS.MAIN },
        { step: 'Cook uncovered until tender (about 15 minutes)', type: SECTIONS.MAIN },
        { step: 'Drain. Transfer to a mixing bowl.', type: SECTIONS.MAIN },
        { step: 'In large pot, heat milk until warm.', type: SECTIONS.MAIN },
        { step: 'Add melted butter to the potatoes and mash.', type: SECTIONS.MAIN },
        { step: 'Pour warm milk into the potatoes a little at a time while mashing.', type: SECTIONS.MAIN },
        { step: 'Season with salt and pepper until desired taste.', type: SECTIONS.MAIN },
        { step: 'Serve hot as a side dish. Top mashed potatoes with gravy and your favorite toppings.', type: SECTIONS.SERVE },
    ]
};