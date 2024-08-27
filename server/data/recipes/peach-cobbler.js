const pan = '../assets/Products/peach-cobbler-pan.jpeg'
const slice = '../assets/Products/peach-cobbler-slice.jpeg'
const baked = '../assets/Products/peach-cobbler-baked.jpeg'
const butter = '../assets/Products/peach-cobbler-butter.jpeg'
const cinnamon = '../assets/Products/peach-cobbler-cinnamon.jpeg'
const dry = '../assets/Products/peach-cobbler-dry.jpeg'
const melted = '../assets/Products/peach-cobbler-melted-butter.jpeg'
const milk = '../assets/Products/peach-cobbler-milk.jpeg'
const mixed = '../assets/Products/peach-cobbler-mixed.jpeg'
const peaches = '../assets/Products/peach-cobbler-peaches.jpeg'
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const {
    UNSALTED_BUTTER,
    ALL_PURPOSE_FLOUR,
    WHITE_SUGAR,
    BAKING_POWDER,
    SALT,
    MILK,
    CINNAMON,
    CANNED_PEACH,
} = require('./ingredients');

module.exports = {
    cardName: 'Peach Cobbler',
    name: 'Peach Cobbler',
    img: slice,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: '12 servings',
    prepTime: '10 m',
    cookTime: '40 m',
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '6 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_POWDER, amount: '2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MILK, amount: '3/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CANNED_PEACH, amount: '4 c', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...CINNAMON, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'mixing bowl' },
        { name: 'rubber spatula' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'Add butter into the baking pan and place pan in the oven while it preheats.', type: SECTIONS.MAIN, img: butter },
        { step: 'Remove the pan from the oven once the butter has melted.', type: SECTIONS.MAIN, img: melted },
        { step: 'In a mixing bowl, mix together flour, sugar, salt, and baking powder.', type: SECTIONS.MAIN, img: dry },
        { step: 'Combine milk to the mixing bowl.', type: SECTIONS.MAIN, img: milk },
        { step: 'Pour mixture into the baking pan and smooth to an even layer.', type: SECTIONS.MAIN, img: mixed },
        { step: 'Add the canned peaches and its juices to the baking pan.', type: SECTIONS.MAIN, img: peaches },
        { step: 'Generously drizzle cinnamon on top.', type: SECTIONS.MAIN, img: cinnamon },
        { step: 'Bake for 35 to 40 minutes.', type: SECTIONS.MAIN, img: baked },
        { step: 'Serve warm with ice cream.', type: SECTIONS.SERVE, img: pan },
    ]
};