// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { SWEET_SOY_SAUCE, OYSTER_SAUCE, FISH_SAUCE, WHITE_SUGAR, SRIRACHA_SAUCE, GARLIC, THAI_BASIL, PEANUT_OIL, EGGS, SERRANO_PEPPERS, LARGE_SHRIMP, WHITE_ONION, FRESH_RICE_NOODLES, GRAPE_TOMATOES } = require('./ingredients');

const MAKE_SAUCE = 'Make Sauce';
const COOK_NOODLES = 'Cook Noodles';

module.exports = {
    wip: true,
    cardName: 'Drunken Noodles',
    name: 'Drunken Noodles',
    img: '',
    recipeCredit: 'Amanda Berg',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.SHRIMP],
    type: [TYPES.NOODLE],
    yields: '2 servings',
    prepTime: '20 m',
    cookTime: '20 m',
    websites: [
        { label: 'Drunken Noodles', link: 'https://www.foodnetwork.com/recipes/my-famous-drunken-noodles-3827989?fbclid=IwY2xjawIfTmlleHRuA2FlbQIxMAABHVqvQu2XwUkyb_68QE5482xWyQggrknFtByQl4kjDwlqFUsOQo0_ThKjQA_aem_eAwibywVvwmX2-nPbsMtdg' }
    ],
    separated: true,
    ingredients: [
        { ...SWEET_SOY_SAUCE, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FISH_SAUCE, amount: '1 1/2 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SRIRACHA_SAUCE, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: '1 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...THAI_BASIL, amount: '6 - 8 leaves', additionalDetails: 'long thin strips/chiffonade', section: SECTIONS.SAUCE },

        { ...PEANUT_OIL, amount: '3 Tbsp', additionalDetails: '', section: SECTIONS.NOODLES },
        { ...GARLIC, amount: '2 - 3', additionalDetails: 'minced', section: SECTIONS.NOODLES },
        { ...EGGS, amount: '2', additionalDetails: '', section: SECTIONS.NOODLES },
        { ...SERRANO_PEPPERS, amount: '1 - 2', additionalDetails: 'thinly sliced', section: SECTIONS.NOODLES },
        { ...LARGE_SHRIMP, amount: '6 - 8', additionalDetails: 'peeled and deveined', section: SECTIONS.NOODLES },
        { ...WHITE_ONION, amount: '1/2 medium', additionalDetails: 'sliced', section: SECTIONS.NOODLES },
        { ...FRESH_RICE_NOODLES, amount: '4 c', additionalDetails: '', section: SECTIONS.NOODLES },
        { ...THAI_BASIL, amount: '1 c', additionalDetails: 'packed', section: SECTIONS.NOODLES },
        { ...GRAPE_TOMATOES, amount: '1/2 c', additionalDetails: '', section: SECTIONS.NOODLES },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'small bowl' },
        { name: 'wok' },
    ],
    directions: [
        { step: 'In a small bowl, combine the "Sauce" section ingredients.', type: MAKE_SAUCE },
        { step: 'Over high heat, add oil to a wok.', type: COOK_NOODLES },
        { step: 'Add garlic and cook until light brown.', type: COOK_NOODLES },
        { step: 'Add eggs and serrano peppers. Lightly scramble and cook until it is barely set (about 1 minute).', type: COOK_NOODLES },
        { step: 'Add shrimp and onion. Cook and fold until shrimp becomes pink (about 1 minute).', type: COOK_NOODLES },
        { step: 'Add noodles, basil, tomatoes and sauce. Stir and cook (about 3 minutes). Be sure to scrape the bottom.', type: COOK_NOODLES },
        { step: 'Cook until the noodles are cooked and coated (about 1 minute).', type: COOK_NOODLES },
        { step: 'Enjoy this dish warm!', type: SECTIONS.SERVE },
    ]
};