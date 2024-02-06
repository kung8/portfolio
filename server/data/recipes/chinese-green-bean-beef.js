const greenBeanWithBeef = '../assets/Products/green-bean-with-beef.jpeg';
const { DINNER, LUNCH, MAIN } = require('./constants');

module.exports = {
    cardName: 'Green Bean Beef',
    name: 'Green Bean Beef',
    img: greenBeanWithBeef,
    available: true,
    type: [LUNCH, DINNER],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '20 m',
    ingredients: [
        { name: 'green beans', amount: '24 oz', additionalDetails: 'cut to 2" pieces', optional: false },
        { name: 'lean beef chunks', amount: '1 lb', additionalDetails: '', optional: false },
        { name: 'salt', amount: '', additionalDetails: '', optional: false },
        { name: 'black pepper', amount: '', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'cutting board and knife' },
        { name: 'large frying pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Heat frying pan over medium-high heat, and add beef. Cook until browned.', type: MAIN },
        { step: 'Add the green beans into pan and continue to cook until beans are softened. Stir occasionally.', type: MAIN },
        { step: 'Add salt and pepper as desired.', type: MAIN },
        { step: 'Serve over rice and enjoy this Chinese stir-fry.', type: MAIN },
    ]
}