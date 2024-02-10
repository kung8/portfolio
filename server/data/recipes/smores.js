const smores = '../assets/Products/smores.jpeg';
const { CATEGORIES, SECTIONS } = require('./constants');

module.exports = {
    cardName: 'S\'mores',
    name: 'S\'mores',
    img: smores,
    available: true,
    type: [CATEGORIES.DESSERT],
    yields: '2 servings',
    prepTime: '1 m',
    cookTime: '5 m',
    ingredients: [
        { name: 'graham cracker', amount: '2', additionalDetails: '', optional: false },
        { name: 'marshmallow', amount: '2', additionalDetails: '', optional: false },
        { name: 'Hershey chocolate pieces', amount: '6', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'aluminum foil' },
        { name: 'baking sheet' },
        { name: 'oven' },
    ],
    directions: [
        { step: 'Lay aluminum foil on baking sheet and turn on oven to broil.', type: SECTIONS.MAIN },
        { step: 'Place graham cracker halves on baking sheet and place marshmallows on each half.', type: SECTIONS.MAIN },
        { step: 'Bake inside the oven for about 3 minutes (or browned as desired).', type: SECTIONS.MAIN },
        { step: 'Take tray out and add graham crackers with 3 pieces of chocolate.', type: SECTIONS.MAIN },
        { step: 'Flip marshallow and bake for an additional 2 minutes.', type: SECTIONS.MAIN },
        { step: 'Enjoy the sweet tastes of a campfire indoors.', type: SECTIONS.MAIN },
    ]
};