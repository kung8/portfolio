// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { KETCHUP, BROWN_SUGAR, PAPRIKA, GARLIC_POWDER, SALT, DIJON_MUSTARD, WORCESTERSHIRE_SAUCE, WHITE_VINEGAR, COLD_WATER, RICE_WINE_VINEGAR } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Homemade BBQ Sauce',
    name: 'Homemade BBQ Sauce',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.SAUCE],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    type: [TYPES.SAUCE],
    yields: ' servings',
    prepTime: '5 m',
    cookTime: '20 m',
    websites: [
        { label: 'BBQ Sauce', link: 'https://www.joshuaweissman.com/post/mcdonald-s-mcnuggets-but-better' }
    ],
    separated: false,
    ingredients: [
        { ...KETCHUP, amount: '1 c', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: '1/4 c', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PAPRIKA, amount: '1 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC_POWDER, amount: '1 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: '1 1/2 tsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...DIJON_MUSTARD, amount: '1 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WORCESTERSHIRE_SAUCE, amount: '2 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RICE_WINE_VINEGAR, amount: '1 1/2 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...COLD_WATER, amount: '1/2 c', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_VINEGAR, amount: '3 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
    ],
    directions: [
        { step: 'Combine all the ingredients in a saucepan. Whisk.', type: SECTIONS.SAUCE },
        { step: 'Over medium heat, simmer for 15 to 20 minutes.', type: SECTIONS.SAUCE },
        { step: 'Transfer to a container once the sauce has thickened and cooled.', type: SECTIONS.SAUCE },
    ]
};