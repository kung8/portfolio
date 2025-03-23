const mexicanChickenBake = '../assets/Products/mexican-chicken-bake.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN , UNITS, YIELD_UNITS } = require('./constants');
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
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: '10 m',
    cookTime: '50 m - 1 h',
    ingredients: [
        // { name: 'cooked chicken', amount: 5 / 2, unit: UNITS.CUP, additionalDetails: '', optional: false },
        // { ...UNSALTED_BUTTER, amount: 1/3, unit: UNITS.CUP, additionalDetails: '', optional: false },
        // { ...ALL_PURPOSE_FLOUR, amount: 1/3, unit: UNITS.CUP, additionalDetails: '', optional: false },
        // { ...YELLOW_ONION, amount: 1/3, unit: UNITS.CUP, additionalDetails: '', optional: false },
        // { ...SALT, amount: 1/2, unit: UNITS.TEASPOON, additionalDetails: '', optional: false },
        // { ...BLACK_PEPPER, amount: 1/4, unit: UNITS.TEASPOON, additionalDetails: '', optional: false },
        // { ...CHICKEN_BROTH, amount: '1 3/4', unit: UNITS.CUP, additionalDetails: '', optional: false },
        // { ...MILK, amount: 2/3, unit: UNITS.CUP, additionalDetails: '', optional: false },
        // { name: 'frozen peas', amount: 5, unit: UNITS.OUNCE, additionalDetails: '', optional: false },
        // { name: 'frozen carrots', amount: 5, unit: UNITS.OUNCE, additionalDetails: '', optional: false },
        // { name: 'refrigerated pie crust', amount: 15, unit: UNITS.OUNCE, additionalDetails: '', optional: false },
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