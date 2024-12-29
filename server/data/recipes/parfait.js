const parfait = '../assets/Products/parfait.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS } = require("./constants");
const {
    PLAIN_YOGURT,
    VANILLA_EXTRACT,
    HONEY,
    GRANOLA,
    BERRIES,
    CASHEWS,
} = require('./ingredients');

module.exports = {
    cardName: 'Parfait',
    name: 'Parfait',
    img: parfait,
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    yields: '2 servings',
    prepTime: '1 m',
    cookTime: '1 m',
    ingredients: [
        { ...PLAIN_YOGURT, amount: '2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: '1 Tbsp', additionalDetails: 'optional', section: SECTIONS.MAIN },
        { ...HONEY, amount: '1 Tbsp', additionalDetails: 'optional', section: SECTIONS.MAIN },
        { ...GRANOLA, amount: '', additionalDetails: 'optional', section: SECTIONS.MAIN },
        { ...BERRIES, amount: '', additionalDetails: 'optional', section: SECTIONS.MAIN },
        { ...CASHEWS, amount: '', additionalDetails: 'optional', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'bowl' },
        { name: 'spoon' },
    ],
    directions: [
        { step: 'Fill a bowl with yogurt.', type: SECTIONS.MAIN },
        { step: 'Mix in vanilla and honey.', type: SECTIONS.MAIN },
        { step: 'Cover with preferred toppings such as granola, fruits, and nuts.', type: SECTIONS.MAIN },
        { step: 'Enjoy a light breakfast / snack.', type: SECTIONS.MAIN },
    ]
};