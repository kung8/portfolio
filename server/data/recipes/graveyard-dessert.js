const graveyardDessert = '../assets/Products/graveyard-dessert.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS } = require("./constants");

module.exports = {
    cardName: 'Graveyard Dessert',
    name: 'Graveyard Dessert',
    img: graveyardDessert,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.RAW],
    yields: ' servings',
    prepTime: '7 m',
    cookTime: '0 m',
    ingredients: [
        { name: 'chocolate pudding cups', amount: '6', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'Oreo cookies', amount: 'package of', additionalDetails: 'without cream', optional: false, section: SECTIONS.MAIN },
        { name: 'Milano cookies', amount: 'package of', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'gummy worms', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
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