const parfait = '../assets/Products/parfait.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS } = require("./constants");

module.exports = {
    cardName: 'Parfait',
    name: 'Parfait',
    img: parfait,
    available: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN, GENRES.EUROPEAN],
    method: [METHODS.RAW],
    yields: '2 servings',
    prepTime: '1 m',
    cookTime: '1 m',
    ingredients: [
        { name: 'plain yogurt', amount: '2 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'vanilla', amount: '1 Tbsp', additionalDetails: 'optional', optional: true, section: SECTIONS.MAIN },
        { name: 'honey', amount: '1 Tbsp', additionalDetails: 'optional', optional: true, section: SECTIONS.MAIN },
        { name: 'granola', amount: '', additionalDetails: 'optional', optional: true, section: SECTIONS.MAIN },
        { name: 'berries', amount: '', additionalDetails: 'optional', optional: true, section: SECTIONS.MAIN },
        { name: 'cashews', amount: '', additionalDetails: 'optional', optional: true, section: SECTIONS.MAIN },
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