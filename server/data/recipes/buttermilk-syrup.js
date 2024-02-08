// const cheeseBalls = '../assets/Products/cheese-balls.jpeg';
const { BREAKFAST, SAUCE } = require("./constants");

module.exports = {
    cardName: 'Buttermilk Syrup',
    name: 'Buttermilk Syrup',
    // img: cheeseBalls,
    available: true,
    type: [SAUCE, BREAKFAST],
    yields: '6 servings',
    prepTime: '5 m',
    cookTime: '5 m',
    ingredients: [
        { name: 'white sugar', amount: '1 c', additionalDetails: '', optional: false, section: SAUCE },
        { name: 'buttermilk', amount: '1/2 c', additionalDetails: '', optional: false, section: SAUCE },
        { name: 'butter', amount: '1/2 c', additionalDetails: '', optional: false, section: SAUCE },
        { name: 'baking soda', amount: '1 tsp', additionalDetails: '', optional: false, section: SAUCE },
        { name: 'vanilla extract', amount: '1 tsp', additionalDetails: '', optional: false, section: SAUCE },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'saucepan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Combine sugar, buttermilk, and butter in a saucepan. And heat over medium-high heat until it boils, about 5 minutes. Stir occasionally.', type: SAUCE },
        { step: 'Remove from heat, and add baking soda and vanilla. And stir.', type: SAUCE },
    ]
};