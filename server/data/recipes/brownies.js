const plated = '../assets/Products/brownies-plated.jpeg';
const pan = '../assets/Products/brownies-pan.jpeg';
const zoomed = '../assets/Products/brownies-zoomed.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require("./constants");
const {
    UNSALTED_BUTTER,
    WHITE_SUGAR,
    SALT,
    VANILLA_EXTRACT,
    EGGS,
    ALL_PURPOSE_FLOUR,
    COCOA_POWDER,
} = require('./ingredients');

module.exports = {
    cardName: 'Brownies',
    name: 'Brownies',
    img: plated,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: '12 servings',
    prepTime: '7 m',
    cookTime: '35 m',
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COCOA_POWDER, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '2 1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '3/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGGS, amount: '3 large', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: '1 1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Bake for 30 to 35 minutes or until a toothpick comes out clean.', type: SECTIONS.MAIN, img: [pan, zoomed] },
    ]
};