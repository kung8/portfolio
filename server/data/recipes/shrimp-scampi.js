// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { ANGEL_HAIR_PASTA, UNSALTED_BUTTER, SHRIMP, GARLIC, WHITE_WINE, BLACK_PEPPER, PARMESAN_CHEESE, PARSLEY, LEMON } = require('./ingredients');

const NOODLE_SECTION = 'Noodles';
const SAUCE_SECTION = 'Sauce';

const COOK_NOODLES = 'Cook Noodles';
const COOK_SAUCE = 'Cook Sauce';
const COMBINE = 'Combine';

module.exports = {
    wip: true,
    cardName: 'Shrimp Scampi',
    name: 'Shrimp Scampi',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [],
    protein: [PROTEIN.SHRIMP],
    type: [TYPES.PASTA],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Shrimp Scampi', link: 'https://www.allrecipes.com/recipe/19508/shrimp-scampi/' }
    ],
    separated: true,
    ingredients: [
        { ...ANGEL_HAIR_PASTA, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: NOODLE_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SAUCE_SECTION },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SAUCE_SECTION },
        { ...WHITE_WINE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...PARMESAN_CHEESE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: SECTIONS.TOPPINGS },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...LEMON, amount: 1, unit: '', additionalDetails: 'wedged', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'mixing bowl' },
        { name: 'large saucepan' },
    ],
    directions: [
        { step: 'Over medium-high heat, bring a large pot of salted water to a boil.', section: COOK_NOODLES },
        { step: 'Add angel hair pasta and cook until al dente (about 4 to 5 minutes).', section: COOK_NOODLES },
        { step: 'Drain. Transfer to a mixing bowl.', section: COOK_NOODLES },

        { step: 'Over medium heat, melt butter in a saucepan.', section: COOK_SAUCE },
        { step: 'Add shrimp and garlic. Cook and stir until shrimp turns pink (about 3 to 5 minutes).', section: COOK_SAUCE },
        { step: 'Add white wine and black pepper. Bring to a boil.', section: COOK_SAUCE },
        { step: 'Cook and stir for 30 seconds.', section: COOK_SAUCE },

        { step: 'Pour the sauce over the pasta and mix.', section: COMBINE },

        { step: 'Enjoy this taste of Italy topped with parsley, parmesan and lemon wedges.', section: SECTIONS.SERVE },
    ]
};