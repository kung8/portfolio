const drunken1 = '../assets/Products/drunken-noodles-1.jpeg';
const drunken2 = '../assets/Products/drunken-noodles-2.jpeg';
const drunken3 = '../assets/Products/drunken-noodles-3.jpeg';
const drunken4 = '../assets/Products/drunken-noodles-4.jpeg';
const drunken5 = '../assets/Products/drunken-noodles-5.jpeg';
const drunken6 = '../assets/Products/drunken-noodles-6.jpeg';
const drunken7 = '../assets/Products/drunken-noodles-7.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { SWEET_SOY_SAUCE, OYSTER_SAUCE, FISH_SAUCE, WHITE_SUGAR, SRIRACHA_SAUCE, GARLIC, THAI_BASIL, PEANUT_OIL, EGGS, SERRANO_PEPPERS, LARGE_SHRIMP, WHITE_ONION, FRESH_RICE_NOODLES, GRAPE_TOMATOES } = require('./ingredients');

const MAKE_SAUCE = 'Make Sauce';
const COOK_NOODLES = 'Cook Noodles';

module.exports = {
    cardName: 'Drunken Noodles',
    name: 'Drunken Noodles',
    img: drunken6,
    recipeCredit: 'Amanda Berg',
    available: true,
    recommended: true,
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
        { ...SWEET_SOY_SAUCE, amount: '4 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: '2 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FISH_SAUCE, amount: '3 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: '2 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SRIRACHA_SAUCE, amount: '2 tsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: '2 tsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...THAI_BASIL, amount: '6 - 8 leaves', unit: '', additionalDetails: 'long thin strips/chiffonade', section: SECTIONS.SAUCE },

        { ...PEANUT_OIL, amount: '3 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.NOODLES },
        { ...GARLIC, amount: '2 - 3', unit: '', additionalDetails: 'minced', section: SECTIONS.NOODLES },
        { ...EGGS, amount: '2', unit: '', additionalDetails: '', section: SECTIONS.NOODLES },
        { ...SERRANO_PEPPERS, amount: '1 - 2', unit: '', additionalDetails: 'thinly sliced', section: SECTIONS.NOODLES },
        { ...LARGE_SHRIMP, amount: '6 - 8', unit: '', additionalDetails: 'peeled and deveined', section: SECTIONS.NOODLES },
        { ...WHITE_ONION, amount: '1/2 medium', unit: '', additionalDetails: 'sliced', section: SECTIONS.NOODLES },
        { ...FRESH_RICE_NOODLES, amount: '16 oz', unit: '', additionalDetails: '', section: SECTIONS.NOODLES },
        { ...THAI_BASIL, amount: '1 c', unit: '', additionalDetails: 'packed', section: SECTIONS.NOODLES },
        { ...GRAPE_TOMATOES, amount: '1/2 c', unit: '', additionalDetails: '', section: SECTIONS.NOODLES },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'small bowl' },
        { name: 'wok' },
    ],
    directions: [
        { step: 'In a small bowl, combine the "Sauce" section ingredients.', type: MAKE_SAUCE, img: drunken1 },
        { step: 'Over high heat, add oil to a wok.', type: COOK_NOODLES },
        { step: 'Add garlic and cook until light brown.', type: COOK_NOODLES, img: drunken2 },
        { step: 'Add eggs and serrano peppers. Lightly scramble and cook until it is barely set (about 1 minute).', type: COOK_NOODLES, img: drunken3 },
        { step: 'Add shrimp and onion. Cook and fold until shrimp becomes pink (about 1 minute).', type: COOK_NOODLES, img: drunken4 },
        { step: 'Add noodles, basil, tomatoes and sauce. Stir and cook (about 3 minutes). Be sure to scrape the bottom.', type: COOK_NOODLES, img: drunken5 },
        { step: 'Cook until the noodles are cooked and coated (about 1 minute).', type: COOK_NOODLES },
        { step: 'Enjoy this dish warm!', type: SECTIONS.SERVE, img: drunken7 },
    ],
    notes: [
        { note: 'Make sure the fresh rice noodles are thawed and at room temperature before cooking.', },
        { note: 'I would recommend using thicker flat noodles for this dish.', },
        { note: 'It was difficult to prevent the noodles from breaking into tiny pieces. But handling it less and making sure it cooks enough with the sauce, can all help it from breaking.' },
        { note: 'When I made this dish I had not updated the sauce ingredient amounts (i.e. it is now doubled). I\'m more used to a saucier drunken noodle dish. I will remake this dish and update the images.', }
    ]
};