const chickenPotPie = '../assets/Products/chicken-pot-pie.jpeg';
const { CATEGORIES, SECTIONS } = require('./constants');

module.exports = {
    cardName: 'Chicken Pot Pie',
    name: 'Chicken Pot Pie',
    img: chickenPotPie,
    available: true,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '50 m - 1 h',
    ingredients: [
        { name: 'cooked chicken', amount: '2 1/2 c', additionalDetails: '', optional: false },
        { name: 'butter', amount: '1/3 c', additionalDetails: '', optional: false },
        { name: 'flour', amount: '1/3 c', additionalDetails: '', optional: false },
        { name: 'onion', amount: '1/3 c', additionalDetails: '', optional: false },
        { name: 'salt', amount: '1/2 t', additionalDetails: '', optional: false },
        { name: 'pepper', amount: '1/4 t', additionalDetails: '', optional: false },
        { name: 'chicken broth', amount: '1 3/4 c', additionalDetails: '', optional: false },
        { name: 'milk', amount: '2/3 c', additionalDetails: '', optional: false },
        { name: 'frozen peas', amount: '5 oz', additionalDetails: '', optional: false },
        { name: 'frozen carrots', amount: '5 oz', additionalDetails: '', optional: false },
        { name: 'refrigerated pie crust', amount: '15 oz', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'aluminum foil' },
        { name: 'frying pan' },
        { name: 'rubber spatula' },
        { name: 'measuring spoons' },
        { name: 'measuring cups' },
        { name: 'pie pan' },
    ],
    directions: [
        { step: 'Heat a pan over medium heat and add butter.', type: SECTIONS.MAIN },
        { step: 'Add flour, onion, salt, and pepper to pan and cook until bubbling.', type: SECTIONS.MAIN },
        { step: 'Mix milk and broth into the mixture and stir constantly until boils for 1 minute.', type: SECTIONS.MAIN },
        { step: 'Mix in chicken, peas, and carrots until hot.', type: SECTIONS.MAIN },
        { step: 'Preheat the oven to 425ºF.', type: SECTIONS.MAIN },
        { step: 'Roll the pie crust inside pie pan and add chicken mixture inside.', type: SECTIONS.MAIN },
        { step: 'Roll the remaining dough on top of the mixture and turn edges over pie pan.', type: SECTIONS.MAIN },
        { step: 'Bake the pie for 35 minutes or until golden brown.', type: SECTIONS.MAIN },
    ]
};