const browned = '../assets/Products/indian-butter-chicken-browned-onions.jpeg';
const browning = '../assets/Products/indian-butter-chicken-browning-chicken.jpeg';
const cooked3 = '../assets/Products/indian-butter-chicken-cooked-3.jpeg';
const creamAdded = '../assets/Products/indian-butter-chicken-cream-added.jpeg';
const cream = '../assets/Products/indian-butter-chicken-cream.jpeg';
const fragrantAdded = '../assets/Products/indian-butter-chicken-fragrant-added.jpeg';
const fragrant = '../assets/Products/indian-butter-chicken-fragrant.jpeg';
const oils = '../assets/Products/indian-butter-chicken-oils.jpeg';
const onion = '../assets/Products/indian-butter-chicken-onion.jpeg';
const plated3 = '../assets/Products/indian-butter-chicken-plated-3.jpeg';
const simmering = '../assets/Products/indian-butter-chicken-simmering.jpeg';
const spices = '../assets/Products/indian-butter-chicken-spices.jpeg';
const paste = '../assets/Products/indian-butter-chicken-tomato-paste.jpeg';

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const {
    VEGETABLE_OIL,
    UNSALTED_BUTTER,
    YELLOW_ONION,
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
    STOVE,
    FRYING_PAN,
    MEDIUM_BOWL,
    SPATULA,
    MEASURING_SPOONS,
    MIXING_BOWL,
} = require('./ingredients');

module.exports = {
    cardName: 'Indian Butter Chicken',
    name: 'Indian Butter Chicken',
    img: cooked3,
    recipeAuthors: ['Layla Atik'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.INDIAN, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY, TYPES.RICE],
    websites: [
        { label: 'Butter Chicken', link: "https://gimmedelicious.com/easy-20-minute-butter-chicken/" }
    ],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', optional: false },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced', optional: false },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', optional: false },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '1/2" pieces', optional: false },
        { ...TOMATO_PASTE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...GARAM_MASALA, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...CHILI_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...MUSTARD_SEED, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', optional: false },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'to taste', optional: false },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: 'cooked', optional: false },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        MIXING_BOWL,
        MEDIUM_BOWL,
        SPATULA,
        MEASURING_SPOONS,
    ],
    directions: [
        { step: 'Add oil and butter to a large cooking pan on medium-high heat.', section: SECTIONS.MAIN, img: oils },
        { step: 'Add the diced onion and cook until light brown.', section: SECTIONS.MAIN, img: [onion, browned] },
        { step: 'Add the ginger and garlic to the pan and cook until aromatic (about 30 seconds).', img: [fragrant, fragrantAdded] },
        { step: 'Add the chicken, spices, and tomato paste to the pan. Cook until the chicken is browned (about 5 to 6 minutes).', img: [spices, paste, browning] },
        { step: 'Add the heavy cream and let simmer for 8 to 10 minutes.', section: SECTIONS.MAIN, img: [cream, creamAdded, simmering] },
        { step: 'Serve with rice (and naan or roti is optional and delicious).', section: SECTIONS.MAIN, img: plated3 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};