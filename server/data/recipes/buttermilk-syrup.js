// const cheeseBalls = '../assets/Products/cheese-balls.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require("./constants");

module.exports = {
    cardName: 'Buttermilk Syrup',
    name: 'Buttermilk Syrup',
    // img: cheeseBalls,
    available: true,
    category: [CATEGORIES.SAUCE, CATEGORIES.BREAKFAST],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.SAUCE],
    yields: '6 servings',
    prepTime: '5 m',
    cookTime: '5 m',
    websites: [
        'https://www.allrecipes.com/recipe/239478/grandmas-buttermilk-syrup/'
    ],
    ingredients: [
        { name: 'white sugar', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'buttermilk', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'butter', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'baking soda', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'vanilla extract', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Combine sugar, buttermilk, and butter in a saucepan. And heat over medium-high heat until it boils, about 5 minutes. Stir occasionally.', type: SECTIONS.SAUCE },
        { step: 'Remove from heat, and add baking soda and vanilla. And stir.', type: SECTIONS.SAUCE },
    ]
};