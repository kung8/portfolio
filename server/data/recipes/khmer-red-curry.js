const raw = '../assets/Products/khmer-red-curry-raw.jpeg';
const paste = '../assets/Products/khmer-red-curry-paste-and-milk.jpeg';
const leaves = '../assets/Products/khmer-red-curry-lime-leaves.jpeg';
const cooked = '../assets/Products/khmer-red-curry-cooked.jpeg';
const bread = '../assets/Products/khmer-red-curry-with-bread.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    CHICKEN_THIGH,
    RED_CURRY_PASTE,
    COCONUT_MILK,
    LEMONGRASS,
    KAFFIR_LIME_LEAVES,
    WARM_WATER,
    SALT,
    BLACK_PEPPER,
} = require('./ingredients');

module.exports = {
    cardName: 'Khmer Red Curry',
    name: 'Khmer Red Curry',
    img: leaves,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CAMBODIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    yields: '6 servings',
    prepTime: '7 m',
    cookTime: '25 m',
    websites: [
        'https://cambodiarecipe.com/recipe/khmer-red-chicken-curry/'
    ],
    separated: false,
    ingredients: [
        { ...CHICKEN_THIGH, amount: '5 lbs', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...RED_CURRY_PASTE, amount: '1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COCONUT_MILK, amount: '13.5 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LEMONGRASS, amount: '', additionalDetails: 'diagonally sliced', section: SECTIONS.MAIN },
        { ...KAFFIR_LIME_LEAVES, amount: '10 - 12', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WARM_WATER, amount: '', additionalDetails: 'to thin', section: SECTIONS.MAIN },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok or pot' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Prep the lemongrass and chicken.', type: SECTIONS.MAIN, img: raw },
        { step: 'Over medium-high heat, add red curry paste and coconut milk in a pan.', type: SECTIONS.MAIN, img: paste },
        { step: 'Cook and stir until it is well combined.', type: SECTIONS.MAIN },
        { step: 'Add the chicken, leaves, and lemongrass.', type: SECTIONS.MAIN },
        { step: 'Cook for about 10 minutes.', type: SECTIONS.MAIN },
        { step: 'Turn down the heat and let it simmer for 10 minutes.', type: SECTIONS.MAIN },
        { step: 'Add water or more coconut milk to help thin the curry as desired and cut the spice level.', type: SECTIONS.MAIN, img: cooked },
        { step: 'Serve this delicious Cambodian spicy curry with vermicelli noodles or baked bread.', type: SECTIONS.MAIN, img: bread },
    ]
};