// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { FETTUCCINE_NOODLES, HEAVY_CREAM, PARMIGIANO_REGGIANO, UNSALTED_BUTTER, LEMON_JUICE, LEMON_ZEST, BLACK_PEPPER, SALT } = require('./ingredients');

const COMBINE = 'Combine';

module.exports = {
    wip: true,
    cardName: 'Pasta al Limone',
    name: 'Pasta al Limone',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    type: [TYPES.PASTA],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pasta al Limone', link: 'https://tastefullygrace.com/lemon-pasta-pasta-al-limone/' }
    ],
    separated: true,
    ingredients: [
        { ...FETTUCCINE_NOODLES, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },

        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON_JUICE, amount: 5 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON_ZEST, amount: 5 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...PARMIGIANO_REGGIANO, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: SECTIONS.SAUCE },
        
        { ...PARMIGIANO_REGGIANO, amount: '', unit: '', additionalDetails: 'grated', section: SECTIONS.TOPPINGS },
        { ...LEMON_ZEST, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pan' },
        { name: 'saucepan' },
    ],
    directions: [
        { step: 'Over medium heat, add butter, lemon juice and lemon zest to a large pan. Stir occasionally.', section: SECTIONS.COOK_SAUCE },
        { step: 'Let the butter melt and simmer for 20 seconds.', section: SECTIONS.COOK_SAUCE },
        { step: 'Add the heavy cream, black pepper and salt. Mix.', section: SECTIONS.COOK_SAUCE },
        { step: 'Reduce to medium-low heat. Bring to a gentle simmer. Let it simmer while you cook the pasta.', section: SECTIONS.COOK_SAUCE },

        { step: 'Over medium-high heat, bring a pot of salted water to a boil.', section: SECTIONS.COOK_NOODLES },
        { step: 'Add the pasta and cook until al dente.', section: SECTIONS.COOK_NOODLES },
        { step: 'Drain the pasta.', section: SECTIONS.COOK_NOODLES },

        { step: 'Reduce to low heat. Add the parmesan to the sauce and stir.', section: COMBINE },
        { step: 'Add pasta to the sauce. Combine.', section: COMBINE },
        { step: 'Serve immediately and garnish with more of the toppings as desired.', section: SECTIONS.SERVE },
    ]
};