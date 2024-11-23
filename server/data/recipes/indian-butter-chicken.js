const browned = '../assets/Products/indian-butter-chicken-browned-onions.jpeg';
const browning = '../assets/Products/indian-butter-chicken-browning-chicken.jpeg';
const chickenSpicesAdded = '../assets/Products/indian-butter-chicken-chicken-and-spices-added.jpeg';
const cooked1 = '../assets/Products/indian-butter-chicken-cooked-1.jpeg';
const cooked2 = '../assets/Products/indian-butter-chicken-cooked-1.jpeg';
const cooked3 = '../assets/Products/indian-butter-chicken-cooked-3.jpeg';
const cooked4 = '../assets/Products/indian-butter-chicken-cooked-4.jpeg';
const creamAdded = '../assets/Products/indian-butter-chicken-cream-added.jpeg';
const cream = '../assets/Products/indian-butter-chicken-cream.jpeg';
const fragrantAdded = '../assets/Products/indian-butter-chicken-fragrant-added.jpeg';
const fragrant = '../assets/Products/indian-butter-chicken-fragrant.jpeg';
const oils = '../assets/Products/indian-butter-chicken-oils.jpeg';
const onion = '../assets/Products/indian-butter-chicken-onion.jpeg';
const plated1 = '../assets/Products/indian-butter-chicken-plated-1.jpeg';
const plated2 = '../assets/Products/indian-butter-chicken-plated-2.jpeg';
const plated3 = '../assets/Products/indian-butter-chicken-plated-3.jpeg';
const plated4 = '../assets/Products/indian-butter-chicken-plated-4.jpeg';
const raw = '../assets/Products/indian-butter-chicken-raw-chicken.jpeg';
const simmering = '../assets/Products/indian-butter-chicken-simmering.jpeg';
const spices = '../assets/Products/indian-butter-chicken-spices.jpeg';
const paste = '../assets/Products/indian-butter-chicken-tomato-paste.jpeg';
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
    img: cooked3,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.INDIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY, TYPES.RICE],
    websites: [
        { label: 'Butter Chicken', link: "https://gimmedelicious.com/easy-20-minute-butter-chicken/" }
    ],
    yields: '4 servings',
    prepTime: '12 - 15 m',
    cookTime: '25 - 30 m',
    ingredients: [
        { ...VEGETABLE_OIL, amount: '1 Tbsp', additionalDetails: '', optional: false },
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: '', optional: false },
        { ...MEDIUM_YELLOW_ONION, amount: '1', additionalDetails: 'diced', optional: false },
        { ...GINGER, amount: '1 tsp', additionalDetails: 'minced', optional: false },
        { ...GARLIC, amount: '3 cloves', additionalDetails: 'minced', optional: false },
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
        { step: 'Add oil and butter to a large cooking pan on medium-high heat.', type: SECTIONS.MAIN, img: oils },
        { step: 'Add the diced onion and cook until light brown.', type: SECTIONS.MAIN, img: [onion, browned] },
        { step: 'Add the ginger and garlic to the pan and cook until aromatic (about 30 seconds).', img: [fragrant, fragrantAdded] },
        { step: 'Add the chicken, spices, and tomato paste to the pan. Cook until the chicken is browned (about 5 to 6 minutes).', img: [raw, spices, chickenSpicesAdded, paste, browning] },
        { step: 'Add the heavy cream and let simmer for 8 to 10 minutes.', type: SECTIONS.MAIN, img: [cream, creamAdded, simmering, cooked1, cooked2, cooked4] },
        { step: 'Serve with rice (and naan or roti is optional and delicious).', type: SECTIONS.MAIN, img: [plated1, plated2, plated3, plated4] },
    ]
};