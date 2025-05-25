// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { SHRIMP, EGG_WHITES, CORNSTARCH, SALT, WHITE_PEPPER, VEGETABLE_OIL, GREEN_ONION, MAYONNAISE, SWEET_CHILI_SAUCE, SRIRACHA_SAUCE, HONEY } = require('./ingredients');

const SEASONING_SECTION = 'Seasoning';
const SHRIMP_SECTION = 'Shrimp';
const SAUCE_SECTION = 'Sauce';
const DEEP_FRY_SECTION = 'Deep Fry';

const PREP_SHRIMP = 'Prep Shrimp';
const PREP_SAUCE = 'Prep Sauce';
const DEEP_FRY_SHRIMP = 'Deep Fry Shrimp';
const COAT_SHRIMP = 'Coat Shrimp';

module.exports = {
    wip: true,
    cardName: 'Bang Bang Shrimp',
    name: 'Bang Bang Shrimp',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.SEAFOOD],
    type: [TYPES.PROTEIN, TYPES.SIDE_DISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Bang Bang Shrimp', link: 'https://thestayathomechef.com/bang-bang-shrimp' }
    ],
    separated: true,
    ingredients: [
        { ...EGG_WHITES, amount: 4, unit: '', additionalDetails: '', section: SEASONING_SECTION },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SEASONING_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SEASONING_SECTION },
        { ...WHITE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SEASONING_SECTION },
        
        { ...SHRIMP, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SHRIMP_SECTION },
        
        { ...MAYONNAISE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...SWEET_CHILI_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...SRIRACHA_SAUCE, amount: '', unit: '', additionalDetails: 'to taste', section: SAUCE_SECTION },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },

        { ...VEGETABLE_OIL, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DEEP_FRY_SECTION },
        
        { ...GREEN_ONION, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'deep fryer or stove' },
    ],
    supplies: [
        { name: '2 mixing bowls' },
        { name: 'deep fryer or tall narrow pot' },
        { name: 'plate' },
        { name: 'paper towels' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Seasoning" section ingredients.', section: PREP_SHRIMP },
        { step: 'Pat shrimp dry with a paper towel.', section: PREP_SHRIMP },
        { step: 'Add shrimp to bowl. Coat shrimp.', section: PREP_SHRIMP },

        { step: 'In another mixing bowl, combine the "Sauce" section ingredients.', section: PREP_SAUCE },
        
        { step: 'Heat oil to 350ºF.', section: DEEP_FRY_SHRIMP },
        { step: 'Lined a plate with paper towel', section: DEEP_FRY_SHRIMP },
        { step: 'Add shrimp. Cook until golden brown (2 to 3 minutes).', section: DEEP_FRY_SHRIMP },
        { step: 'Set them on a plate to drain.', section: DEEP_FRY_SHRIMP },

        { step: 'Toss the fried shrimp in the sauce.', section: COAT_SHRIMP },

        { step: 'Serve this hot topped with green onions.', section: SECTIONS.SERVE },
    ]
};