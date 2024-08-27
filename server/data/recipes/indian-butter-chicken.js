const butterChicken = '../assets/Products/indian-butter-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require('./constants');
const {
    VEGETABLE_OIL,
    UNSALTED_BUTTER,
    MEDIUM_YELLOW_ONION,
    GINGER,
    GARLIC,
    TOMATO_PASTE,
    CHILI_POWDER,
    MUSTARD_SEED,
    GARAM_MASALA,
    CUMIN,
    SALT,
    BLACK_PEPPER,
    HEAVY_CREAM,
    JASMINE_RICE,
    BONELESS_AND_SKINLESS_CHICKEN_BREAST,
} = require('./ingredients');

module.exports = {
    cardName: 'Indian Butter Chicken',
    name: 'Indian Butter Chicken',
    img: butterChicken,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.INDIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY, TYPES.RICE],
    websites: [
        "https://gimmedelicious.com/easy-20-minute-butter-chicken/"
    ],
    yields: '4 servings',
    prepTime: '12 - 15 m',
    cookTime: '25 - 30 m',
    ingredients: [
        { ...VEGETABLE_OIL, amount: '1 Tbsp', additionalDetails: '', optional: false },
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', optional: false },
        { ...MEDIUM_YELLOW_ONION, amount: '1', additionalDetails: 'diced', optional: false },
        { ...GINGER, amount: '1 tsp', additionalDetails: 'minced', optional: false },
        { ...GARLIC, amount: '3', additionalDetails: 'minced', optional: false },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: '2 lbs', additionalDetails: '1/2" pieces', optional: false },
        { ...TOMATO_PASTE, amount: '4 Tbsp', additionalDetails: '', optional: false },
        { ...GARAM_MASALA, amount: '1 Tbsp', additionalDetails: '', optional: false },
        { ...CHILI_POWDER, amount: '1 tsp', additionalDetails: '', optional: false },
        { ...MUSTARD_SEED, amount: '1 tsp', additionalDetails: '', optional: false },
        { ...CUMIN, amount: '1 tsp', additionalDetails: '', optional: false },
        { ...SALT, amount: '1 tsp', additionalDetails: 'to taste', optional: false },
        { ...BLACK_PEPPER, amount: '1/4 tsp', additionalDetails: 'to taste', optional: false },
        { ...HEAVY_CREAM, amount: '1 c', additionalDetails: '', optional: false },
        { ...JASMINE_RICE, amount: 'cooked', additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'large mixing bowl' },
        { name: 'medium bowl' },
        { name: 'spatula' },
        { name: 'measuring spoons' },
    ],
    directions: [
        { step: 'Add oil and butter to a large cooking pan on medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Add the diced onion and cook until light brown.', type: SECTIONS.MAIN },
        { step: 'Add the ginger and garlic to the pan and cook until aromatic (about 30 seconds).' },
        { step: 'Add the chicken, spices, and tomato paste to the pan. Cook until the chicken is browned (about 5 to 6 minutes).' },
        { step: 'Add the heavy cream and let simmer for 8 to 10 minutes.', type: SECTIONS.MAIN },
        { step: 'Serve with rice (and naan or roti is optional and delicious).', type: SECTIONS.MAIN },
    ]
};