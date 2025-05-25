// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { LIGHT_SOY_SAUCE, BROWN_SUGAR, OLIVE_OIL, YELLOW_MUSTARD, CAJUN_SEASONING, GARLIC, UNSALTED_BUTTER, SHRIMP, SALT, BLACK_PEPPER, GREEN_ONION } = require('./ingredients');

const SAUCE_SECTION = 'Sauce';
const SHRIMP_SECTION = 'Shrimp';
const COOK_SECTION = 'Cook';

const COOK_SAUCE = 'Cook Sauce';
const COOK_SHRIMP = 'Cook Shrimp';

module.exports = {
    wip: true,
    cardName: 'Cajun Garlic Butter Shrimp',
    name: 'Cajun Garlic Butter Shrimp',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN, GENRES.SOUTHERN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.SEAFOOD],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE, TYPES.SIDE_DISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Cajun Garlic Butter Shrimp', link: 'https://therecipecritic.com/cajun-garlic-butter-shrimp/' }
    ],
    separated: true,
    ingredients: [
        { ...LIGHT_SOY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...YELLOW_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...CAJUN_SEASONING, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SAUCE_SECTION },

        { ...SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SHRIMP_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SHRIMP_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SHRIMP_SECTION },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: COOK_SECTION },
        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'pan' },
        { name: '' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Sauce" section ingredients.', section: COOK_SAUCE },
        { step: 'Over medium-high heat, heat a pan.', section: COOK_SAUCE },
        { step: 'Add butter and sauce. Cook until the butter has melted (about 2 minutes).', section: COOK_SAUCE },

        { step: 'Pat shrimp dry with a paper towel.', section: COOK_SHRIMP },
        { step: 'Add shrimp. Coat.', section: COOK_SHRIMP },
        { step: 'Cook until shrimp is opaque and cooked (about 4 to 5 minutes).', section: COOK_SHRIMP },

        { step: 'Serve with green onions.', section: SECTIONS.SERVE },
    ]
};