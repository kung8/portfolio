const brownies = '../assets/Products/brownies.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require("./constants");

module.exports = {
    cardName: 'Brownies',
    name: 'Brownies',
    img: brownies,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: '12 servings',
    prepTime: '7 m',
    cookTime: '35 m',
    ingredients: [
        { name: 'butter', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'cocoa powder', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'sugar', amount: '2 1/4 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '3/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'vanilla', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'eggs', amount: '3 large', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'flour', amount: '1 1/4 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'baking pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Preheat oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'Grease and add a little cocoa powder on the baking pan.', type: SECTIONS.MAIN },
        { step: 'Melt butter in the microwave.', type: SECTIONS.MAIN },
        { step: 'In a mixing bowl, combine melted butter, cocoa powder, and sugar. Mix well.', type: SECTIONS.MAIN },
        { step: 'Add salt, vanilla, and eggs and mix.', type: SECTIONS.MAIN },
        { step: 'Mix in the flour.', type: SECTIONS.MAIN },
        { step: 'Spread the batter into the baking pan.', type: SECTIONS.MAIN },
        { step: 'Bake for 30 to 35 minutes or until a toothpick comes out clean.', type: SECTIONS.MAIN },
    ]
};