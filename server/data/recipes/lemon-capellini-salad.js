// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { ANGEL_HAIR_PASTA, LEMON, OLIVE_OIL, BLACK_PEPPER, DICED_TOMATO, CAPER, PARSLEY, GARLIC_SALT } = require('./ingredients');

const PASTA_SECTION = 'Pasta';
const LEMON_JUICE_MIXTURE = 'Lemon Juice Mixture';
const SALAD_SECTION = 'Salad';

const COOK_PASTA = 'Cook Pasta';
const ASSEMBLE_SALAD = 'Assemble Salad';

module.exports = {
    wip: true,
    cardName: 'Lemon Capellini Salad',
    name: 'Lemon Capellini Salad',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Justin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.MIX],
    protein: [],
    type: [TYPES.NOODLE, TYPES.SALAD],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Lemon Capellini Salad', link: 'https://iwashyoudry.com/lemon-capellini-salad/' }
    ],
    separated: true,
    ingredients: [
        { ...ANGEL_HAIR_PASTA, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PASTA_SECTION },

        { ...LEMON, amount: 2, unit: '', additionalDetails: 'juiced', section: LEMON_JUICE_MIXTURE },
        { ...OLIVE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: LEMON_JUICE_MIXTURE },
        { ...GARLIC_SALT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: LEMON_JUICE_MIXTURE },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: LEMON_JUICE_MIXTURE },

        { ...DICED_TOMATO, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'seeded', section: SALAD_SECTION },
        { ...CAPER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'drained', section: SALAD_SECTION },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'finely chopped', section: SALAD_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'mixing bowl' },
        { name: '' },
    ],
    directions: [
        { step: 'Over medium-high heat, bring a pot of salted water to a boil.', section: COOK_PASTA },
        { step: 'Add the pasta. Cook until al dente (just a few minutes).', section: COOK_PASTA },
        { step: 'Drain. Rinse in cold water.', section: COOK_PASTA },
        { step: 'In a mixing bowl, combine "Lemon Juice Mixture" section ingredients.', section: ASSEMBLE_SALAD },
        { step: 'Add the pasta and the rest of the ingredients. Toss.', section: ASSEMBLE_SALAD },
        { step: 'Serve this immediately or cover and chill until ready to eat.', section: SECTIONS.SERVE },
    ]
};