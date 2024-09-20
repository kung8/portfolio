// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { GRANNY_SMITH_APPLES, UNSALTED_BUTTER, ALL_PURPOSE_FLOUR, WHITE_SUGAR, BROWN_SUGAR, COLD_WATER, DOUBLE_CRUST_PIE_CRUST } = require('./ingredients');

module.exports = {
    cardName: 'Apple Pie',
    name: 'Apple Pie',
    img: '',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE, METHODS.SIMMER],
    type: [TYPES.DESSERT, TYPES.PIE],
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '70 m',
    websites: [
        "https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/"
    ],
    separated: false,
    ingredients: [
        { ...GRANNY_SMITH_APPLES, amount: '8', additionalDetails: '', section: '' },
        { ...UNSALTED_BUTTER, amount: '1/2 c', additionalDetails: '', section: '' },
        { ...ALL_PURPOSE_FLOUR, amount: '3 Tbsp', additionalDetails: '', section: '' },
        { ...WHITE_SUGAR, amount: '1/2 c', additionalDetails: '', section: '' },
        { ...BROWN_SUGAR, amount: '1/2 c', additionalDetails: '', section: '' },
        { ...COLD_WATER, amount: '1/4 c', additionalDetails: '', section: '' },
        { ...DOUBLE_CRUST_PIE_CRUST, amount: '1', additionalDetails: 'thawed', section: '' },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'pie pan' },
    ],
    directions: [
        { step: 'Peel and cut the apple into thin slices.', type: SECTIONS.MAIN },
        { step: 'Preheat the oven to 425ºF.', type: SECTIONS.MAIN },
        { step: 'Over medium heat, melt butter in a saucepan.', type: SECTIONS.MAIN },
        { step: 'Add flour and mix until it becomes a paste and fragrant (about 1 to 2 minutes).', type: SECTIONS.MAIN },
        { step: 'Add sugar and water. Bring to a boil.', type: SECTIONS.MAIN },
        { step: 'Lower to low heat. Simmer (about 3 to 5 minutes).', type: SECTIONS.MAIN },
        { step: 'Remove from heat.', type: SECTIONS.MAIN },
        { step: 'Position one pastry crust in a pie pan.', type: SECTIONS.MAIN },
        { step: 'Roll the second pastry crust so it grows about 1 inch on all sides.', type: SECTIONS.MAIN },
        { step: 'Cut the pastry into 8 1-inch strip.', type: SECTIONS.MAIN },
        { step: 'Add the apple slices to the pie pan (a slight mound is fine).', type: SECTIONS.MAIN },
        { step: 'Lay out four of the pastry strips vertically evenly spaced.', type: SECTIONS.MAIN },
        { step: 'Weave the remaining pastry strips horizontally and alternating.', type: SECTIONS.MAIN },
        { step: 'Fold the lattice over the pie, trim any excess, and pinch.', type: SECTIONS.MAIN },
        { step: 'Pour the sugar mixture over the lattice and make sure that it (1) gets onto the apples and (2) does not spill over the sides.', type: SECTIONS.MAIN },
        { step: 'Bake for 15 minutes.', type: SECTIONS.MAIN },
        { step: 'Reduce to 350ºF and bake until apples are soft (about 35 to 45 minutes).', type: SECTIONS.MAIN },
        { step: 'Enjoy a taste of America\'s traditional dessert al la mode (i.e. topped with ice cream) or all by itself.', type: SECTIONS.MAIN },
    ]
};