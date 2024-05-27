const raw = '../assets/Products/khmer-red-curry-raw.jpeg';
const paste = '../assets/Products/khmer-red-curry-paste-and-milk.jpeg';
const leaves = '../assets/Products/khmer-red-curry-lime-leaves.jpeg';
const cooked = '../assets/Products/khmer-red-curry-cooked.jpeg';
const bread = '../assets/Products/khmer-red-curry-with-bread.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');

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
        { name: 'chicken thigh', amount: '5 lbs', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'red curry paste', amount: '1/4 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'coconut milk', amount: '13.5 oz', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'lemongrass', amount: '', additionalDetails: 'diagonally sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'kaffir lime leaves', amount: '10 - 12', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'water', amount: '', additionalDetails: 'to thin', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
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