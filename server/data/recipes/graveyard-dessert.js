const graveyardDessert = '../assets/Products/graveyard-dessert.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const { CHOCOLATE_PUDDING_CUPS, GUMMY_WORMS, MILANO_COOKIES, OREO_COOKIES } = require('./ingredients');

module.exports = {
    cardName: 'Graveyard Dessert',
    name: 'Graveyard Dessert',
    img: graveyardDessert,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    type: [TYPES.DESSERT],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...CHOCOLATE_PUDDING_CUPS, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...OREO_COOKIES, amount: 1, unit: INGREDIENT_UNITS.PACKAGE, additionalDetails: 'without cream', section: SECTIONS.MAIN },
        { ...MILANO_COOKIES, amount: 1, unit: INGREDIENT_UNITS.PACKAGE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GUMMY_WORMS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'Clear Cups' },
    ],
    directions: [
        { step: 'Fill cups with a layer of chocolate pudding.', type: SECTIONS.MAIN },
        { step: 'Stick one or two gummy worms in the pudding.', type: SECTIONS.MAIN },
        { step: 'Add a layer of crushed Oreo.', type: SECTIONS.MAIN },
        { step: 'Add another layer of pudding and stick a worm through the top.', type: SECTIONS.MAIN },
        { step: 'Break an Milano cookie in half and stick it into the pudding. This is a gravestone.', type: SECTIONS.MAIN },
        { step: 'Sprinkle crushed Oreo around the worm and the gravestone and fill the rest of the layer.', type: SECTIONS.MAIN },
        { step: 'Get creative and have fun! You can add chocolate, sprinkles, and other cookies and candies.', type: SECTIONS.MAIN },
    ]
};