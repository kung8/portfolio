// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { FETTUCCINE_NOODLES, HEAVY_CREAM, PARMIGIANO_REGGIANO, UNSALTED_BUTTER, LEMON_JUICE, LEMON_ZEST, BLACK_PEPPER, SALT } = require('./ingredients');

const NOODLES_SECTION = 'Noodles';
const SAUCE_SECTION = 'Sauce';

const COOK_SAUCE = 'Cook Sauce';
const COOK_NOODLES = 'Cook Noodles';
const COMBINE = 'Combine';

module.exports = {
    wip: true,
    cardName: 'Pasta al Limone',
    name: 'Pasta al Limone',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    type: [TYPES.PASTA],
    yields: '4 servings',
    prepTime: '15 m',
    cookTime: '15 m',
    websites: [
        { label: 'Pasta al Limone', link: 'https://tastefullygrace.com/lemon-pasta-pasta-al-limone/' }
    ],
    separated: true,
    ingredients: [
        { ...FETTUCCINE_NOODLES, amount: '16 oz', unit: '', additionalDetails: '', section: NOODLES_SECTION },
        
        { ...UNSALTED_BUTTER, amount: '4 Tbsp', unit: '', additionalDetails: '', section: SAUCE_SECTION },
        { ...LEMON_JUICE, amount: '2 1/2 Tbsp', unit: '', additionalDetails: '', section: SAUCE_SECTION },
        { ...LEMON_ZEST, amount: '1 1/4 tsp', unit: '', additionalDetails: '', section: SAUCE_SECTION },
        { ...HEAVY_CREAM, amount: '1 1/4 c', unit: '', additionalDetails: '', section: SAUCE_SECTION },
        { ...BLACK_PEPPER, amount: '1 tsp', unit: '', additionalDetails: '', section: SAUCE_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SAUCE_SECTION },
        { ...PARMIGIANO_REGGIANO, amount: '1/2 c', unit: '', additionalDetails: 'grated', section: SAUCE_SECTION },
        
        
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
        { step: 'Over medium heat, add butter, lemon juice and lemon zest to a large pan. Stir occasionally.', type: COOK_SAUCE },
        { step: 'Let the butter melt and simmer for 20 seconds.', type: COOK_SAUCE },
        { step: 'Add the heavy cream, black pepper and salt. Mix.', type: COOK_SAUCE },
        { step: 'Reduce to medium-low heat. Bring to a gentle simmer. Let it simmer while you cook the pasta.', type: COOK_SAUCE },

        { step: 'Over medium-high heat, bring a pot of salted water to a boil.', type: COOK_NOODLES },
        { step: 'Add the pasta and cook until al dente.', type: COOK_NOODLES },
        { step: 'Drain the pasta.', type: COOK_NOODLES },

        { step: 'Reduce to low heat. Add the parmesan to the sauce and stir.', type: COMBINE },
        { step: 'Add pasta to the sauce. Combine.', type: COMBINE },
        { step: 'Serve immediately and garnish with more of the toppings as desired.', type: SECTIONS.SERVE },
    ]
};