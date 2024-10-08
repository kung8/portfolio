const mexicanChickenBake = '../assets/Products/mexican-chicken-bake.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN } = require('./constants');
const {} = require('./ingredients');

module.exports = {
    cardName: 'Mexican Chicken Bake',
    name: 'Mexican Chicken Bake',
    img: mexicanChickenBake,
    available: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '50 m - 1 h',
    ingredients: [
        // { name: 'cooked chicken', amount: '2 1/2 c', additionalDetails: '', optional: false },
        // { ...UNSALTED_BUTTER, amount: '1/3 c', additionalDetails: '', optional: false },
        // { ...ALL_PURPOSE_FLOUR, amount: '1/3 c', additionalDetails: '', optional: false },
        // { ...MEDIUM_YELLOW_ONION, amount: '1/3 c', additionalDetails: '', optional: false },
        // { ...SALT, amount: '1/2 tsp', additionalDetails: '', optional: false },
        // { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: '', optional: false },
        // { ...CHICKEN_BROTH, amount: '1 3/4 c', additionalDetails: '', optional: false },
        // { ...MILK, amount: '2/3 c', additionalDetails: '', optional: false },
        // { name: 'frozen peas', amount: '5 oz', additionalDetails: '', optional: false },
        // { name: 'frozen carrots', amount: '5 oz', additionalDetails: '', optional: false },
        // { name: 'refrigerated pie crust', amount: '15 oz', additionalDetails: '', optional: false },
    ],
    appliances: [
        // { name: 'stove' },
    ],
    supplies: [
        // { name: 'aluminum foil' },
        // { name: 'frying pan' },
        // { name: 'rubber spatula' },
        // { name: 'measuring spoons' },
        // { name: 'measuring cups' },
        // { name: 'pie pan' },
    ],
    directions: [
        // { step: 'Heat a pan over medium heat and add butter.', type: SECTIONS.MAIN },
        // { step: 'Add flour, onion, salt, and pepper to pan and cook until bubbling.', type: SECTIONS.MAIN },
        // { step: 'Mix milk and broth into the mixture and stir constantly until boils for 1 minute.', type: SECTIONS.MAIN },
        // { step: 'Mix in chicken, peas, and carrots until hot.', type: SECTIONS.MAIN },
        // { step: 'Preheat the oven to 425ºF.', type: SECTIONS.MAIN },
        // { step: 'Roll the pie crust inside pie pan and add chicken mixture inside.', type: SECTIONS.MAIN },
        // { step: 'Roll the remaining dough on top of the mixture and turn edges over pie pan.', type: SECTIONS.MAIN },
        // { step: 'Bake the pie for 35 minutes or until golden brown.', type: SECTIONS.MAIN },
    ]
};