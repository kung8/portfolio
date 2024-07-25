const biscuits = '../assets/Products/ted-lasso-biscuits.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require('./constants');

module.exports = {
    cardName: 'Lasso Biscuits',
    name: 'Ted Lasso Biscuits',
    img: biscuits,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN, GENRES.BRITISH],
    method: [METHODS.BAKE],
    yields: '15 servings',
    prepTime: '20 m',
    cookTime: '60 m',
    ingredients: [
        { name: 'unsalted butter', amount: '2 sticks', additionalDetails: 'at room temperature', section: SECTIONS.MAIN },
        { name: 'powdered sugar', amount: '3/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'flour', amount: '2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'baking pan' },
        { name: 'electric/standing mixer' },
    ],
    directions: [
        { step: 'Place butter in mixing bowl and beat until fluffy (about 3 to 5 minutes).', type: SECTIONS.MAIN },
        { step: 'Gradually add powdered sugar while butter is mixing.', type: SECTIONS.MAIN },
        { step: 'Add flour and salt to the bowl and continue mixing on low speed.', type: SECTIONS.MAIN },
        { step: 'Pour batter into the baking pan and refrigerate for about 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Slice into rectangles.', type: SECTIONS.MAIN },
        { step: 'Preheat the oven to 300ºF whenever ready to bake.', type: SECTIONS.MAIN },
        { step: 'Bake until the biscuits are golden brown (about 45 to 60 minutes).', type: SECTIONS.MAIN },
        { step: 'Enjoy these biscuits while you watch or re-watch the Ted Lasso television show. Cheers!', type: SECTIONS.MAIN },
    ]
};