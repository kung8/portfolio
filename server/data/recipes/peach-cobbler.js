const pan = '../assets/Products/peach-cobbler-pan.jpeg'
const slice = '../assets/Products/peach-cobbler-slice.jpeg'
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');

module.exports = {
    cardName: 'Peach Cobbler',
    name: 'Peach Cobbler',
    img: slice,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: '12 servings',
    prepTime: '10 m',
    cookTime: '40 m',
    ingredients: [
        { name: 'butter', amount: '6 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'flour', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'sugar', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'baking powder', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '1/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'milk', amount: '3/4 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'canned peach', amount: '4 c', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'ground cinnamon', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
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
        { step: 'Add butter into the baking pan and place pan in the oven while it preheats.', type: SECTIONS.MAIN },
        { step: 'Remove the pan from the oven once the butter has melted.', type: SECTIONS.MAIN },
        { step: 'In a mixing bowl, mix together flour, sugar, salt, and baking powder.', type: SECTIONS.MAIN },
        { step: 'Combine milk to the mixing bowl.', type: SECTIONS.MAIN },
        { step: 'Pour mixture into the baking pan and smooth to an even layer.', type: SECTIONS.MAIN },
        { step: 'Add the canned peaches and its juices to the baking pan.', type: SECTIONS.MAIN },
        { step: 'Generously sprinkle cinnamon on top.', type: SECTIONS.MAIN },
        { step: 'Bake for 35 to 40 minutes.', type: SECTIONS.MAIN },
        { step: 'Serve warm with ice cream.', type: SECTIONS.SERVE, img: pan },
    ]
};