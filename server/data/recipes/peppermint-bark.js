// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { SEMI_SWEET_CHOCOLATE_CHIPS, WHITE_CHOCOLATE_CHIPS, PEPPERMINT_EXTRACT, CANDY_CANES } = require('./ingredients');

module.exports = {
    cardName: 'Peppermint Bark',
    name: 'Peppermint Bark',
    img: '',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.MELT, METHODS.CHILLED],
    type: [TYPES.DESSERT],
    yields: '16 servings',
    prepTime: '10 m',
    cookTime: '5 m',
    websites: [
        "https://www.dinneratthezoo.com/peppermint-bark-recipe/"
    ],
    separated: false,
    ingredients: [
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: '12 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_CHOCOLATE_CHIPS, amount: '16 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...PEPPERMINT_EXTRACT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CANDY_CANES, amount: '3/4 c', additionalDetails: 'crushed', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'microwave' },
    ],
    supplies: [
        { name: '2 microwaveable bowls' },
        { name: 'parchment paper' },
        { name: 'baking sheet' },
        { name: 'spatula' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Place some parchment paper on a baking sheet.', type: SECTIONS.MAIN },
        { step: 'In a microwaveable bowl, melt the semisweet chocolate chips in 30 second intervals.', type: SECTIONS.MAIN },
        { step: 'Pour the chocolate on the parchment paper and carefully spread until it\'s a thin layer of chocolate.', type: SECTIONS.MAIN },
        { step: 'Chill in the fridge to help it partially set (up to 10 minutes). Any more time past that will cause it to not stick to the melted white chocolate layer.', type: SECTIONS.MAIN },
        { step: 'Repeat the melting process for the white chocolate chips.', type: SECTIONS.MAIN },
        { step: 'Mix in peppermint extract.', type: SECTIONS.MAIN },
        { step: 'Spread the melted white chocolate over the semisweet chocolate.', type: SECTIONS.MAIN },
        { step: 'Sprinkle the crushed candy cane over the white chocolate.', type: SECTIONS.MAIN },
        { step: 'Chill in the fridge until the chocolate is completely set (about 20 minutes).', type: SECTIONS.MAIN },
        { step: 'Take the bark and let it sit at room temperature before cutting (about 20 minutes).', type: SECTIONS.MAIN },
        { step: 'Using a sharp knife, cut through the bark and enjoy.', type: SECTIONS.MAIN },
    ]
};