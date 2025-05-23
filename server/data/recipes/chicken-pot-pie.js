const chickenPotPie = '../assets/Products/chicken-pot-pie.jpeg';
const slice = '../assets/Products/chicken-pot-pie-slice-zoomed.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    UNSALTED_BUTTER,
    ALL_PURPOSE_FLOUR,
    YELLOW_ONION,
    SALT,
    BLACK_PEPPER,
    CHICKEN_BROTH,
    MILK,
    FROZEN_PEAS,
    FROZEN_CARROTS,
    CHICKEN_BREAST,
    REFRIGERATED_PIE_CRUST,
} = require('./ingredients');

module.exports = {
    cardName: 'Chicken Pot Pie',
    name: 'Chicken Pot Pie',
    img: slice,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.BRITISH, GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.DESSERT],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    ingredients: [
        { ...CHICKEN_BREAST, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooked', optional: false },
        { ...UNSALTED_BUTTER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...YELLOW_ONION, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...CHICKEN_BROTH, amount: 7 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...MILK, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...FROZEN_PEAS, amount: 5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', optional: false },
        { ...FROZEN_CARROTS, amount: 5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', optional: false },
        { ...REFRIGERATED_PIE_CRUST, amount: 15, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
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
        { step: 'Heat a pan over medium heat and add butter.', section: SECTIONS.MAIN },
        { step: 'Add flour, onion, salt, and pepper to pan and cook until bubbling.', section: SECTIONS.MAIN },
        { step: 'Mix milk and broth into the mixture and stir constantly until boils for 1 minute.', section: SECTIONS.MAIN },
        { step: 'Mix in chicken, peas, and carrots until hot.', section: SECTIONS.MAIN },
        { step: 'Preheat the oven to 425ºF.', section: SECTIONS.MAIN },
        { step: 'Roll the pie crust inside pie pan and add chicken mixture inside.', section: SECTIONS.MAIN },
        { step: 'Roll the remaining dough on top of the mixture and turn edges over pie pan.', section: SECTIONS.MAIN },
        { step: 'Bake the pie for 35 minutes or until golden brown.', section: SECTIONS.MAIN, img: chickenPotPie },
    ]
};