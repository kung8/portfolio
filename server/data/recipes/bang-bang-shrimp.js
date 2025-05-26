// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { SHRIMP, EGG_WHITES, CORNSTARCH, SALT, WHITE_PEPPER, VEGETABLE_OIL, GREEN_ONION, MAYONNAISE, SWEET_CHILI_SAUCE, SRIRACHA_SAUCE, HONEY } = require('./ingredients');

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
        { ...EGG_WHITES, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...WHITE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        
        { ...SHRIMP, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SECTIONS.SHRIMP },
        
        { ...MAYONNAISE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SWEET_CHILI_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SRIRACHA_SAUCE, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...VEGETABLE_OIL, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DEEP_FRY },
        
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
        { step: 'In a mixing bowl, combine the "Seasoning" section ingredients.', section: SECTIONS.PREP_SHRIMP },
        { step: 'Pat shrimp dry with a paper towel.', section: SECTIONS.PREP_SHRIMP },
        { step: 'Add shrimp to bowl. Coat shrimp.', section: SECTIONS.PREP_SHRIMP },

        { step: 'In another mixing bowl, combine the "Sauce" section ingredients.', section: SECTIONS.PREP_SAUCE },
        
        { step: 'Heat oil to 350ºF.', section: SECTIONS.DEEP_FRY },
        { step: 'Lined a plate with paper towel', section: SECTIONS.DEEP_FRY },
        { step: 'Add shrimp. Cook until golden brown (2 to 3 minutes).', section: SECTIONS.DEEP_FRY },
        { step: 'Set them on a plate to drain.', section: SECTIONS.DEEP_FRY },

        { step: 'Toss the fried shrimp in the sauce.', section: COAT_SHRIMP },

        { step: 'Serve this hot topped with green onions.', section: SECTIONS.SERVE },
    ]
};