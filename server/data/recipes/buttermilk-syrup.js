// const cheeseBalls = '../assets/Products/cheese-balls.jpeg';
const { CATEGORIES, SECTIONS } = require("./constants");

module.exports = {
    cardName: 'Buttermilk Syrup',
    name: 'Buttermilk Syrup',
    // img: cheeseBalls,
    available: true,
    type: [CATEGORIES.SAUCE, CATEGORIES.BREAKFAST],
    yields: '6 servings',
    prepTime: '5 m',
    cookTime: '5 m',
    ingredients: [
        { name: 'white sugar', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'buttermilk', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'butter', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'baking soda', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { name: 'vanilla extract', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'saucepan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Combine sugar, buttermilk, and butter in a saucepan. And heat over medium-high heat until it boils, about 5 minutes. Stir occasionally.', type: SECTIONS.SAUCE },
        { step: 'Remove from heat, and add baking soda and vanilla. And stir.', type: SECTIONS.SAUCE },
    ]
};