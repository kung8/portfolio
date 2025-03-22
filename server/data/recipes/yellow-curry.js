const curry1 = '../assets/Products/yellow-curry-1.jpeg';
const curry6 = '../assets/Products/yellow-curry-6.jpeg';
const curry8 = '../assets/Products/yellow-curry-8.jpeg';
const curry10 = '../assets/Products/yellow-curry-10.jpeg';
const curry11 = '../assets/Products/yellow-curry-11.jpeg';
const curry12 = '../assets/Products/yellow-curry-12.jpeg';
const curry13 = '../assets/Products/yellow-curry-13.jpeg';
const curry14 = '../assets/Products/yellow-curry-14.jpeg';
const curry15 = '../assets/Products/yellow-curry-15.jpeg';
const curry16 = '../assets/Products/yellow-curry-16.jpeg';
const curry17 = '../assets/Products/yellow-curry-17.jpeg';
const curry18 = '../assets/Products/yellow-curry-18.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, UNITS } = require('./constants');
const { OLIVE_OIL, YELLOW_ONION, BONELESS_AND_SKINLESS_CHICKEN_BREAST, YUKON_GOLD_POTATOES, CARROTS, YELLOW_CURRY_PASTE, GINGER, GARLIC, COCONUT_MILK, CORNSTARCH, FISH_SAUCE, LIME_JUICE, BROWN_SUGAR, CILANTRO, SRIRACHA_SAUCE } = require('./ingredients');

const YELLOW_CURRY_SECTION = 'Yellow Curry';
const MAKE_CURRY = 'Make Curry';

module.exports = {
    cardName: 'Yellow Curry',
    name: 'Thai Yellow Curry',
    img: curry17,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN, PROTEIN.ALTERNATIVE],
    type: [TYPES.CURRY],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '40 m',
    websites: [
        { label: 'Yellow Curry', link: 'https://tastesbetterfromscratch.com/yellow-curry/' }
    ],
    separated: true,
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: UNITS.SMALL, additionalDetails: 'chopped', section: YELLOW_CURRY_SECTION },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 1, unit: UNITS.POUND, additionalDetails: 'cut into thin slices (2 inches long)', section: YELLOW_CURRY_SECTION },
        { ...YUKON_GOLD_POTATOES, amount: 2, unit: '', additionalDetails: '1/2 inch cubes', section: YELLOW_CURRY_SECTION },
        { ...CARROTS, amount: 1, unit: '', additionalDetails: 'thinly sliced', section: YELLOW_CURRY_SECTION },
        { ...YELLOW_CURRY_PASTE, amount: 4, unit: UNITS.TABLESPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...GINGER, amount: 2, unit: UNITS.TEASPOON, additionalDetails: 'grated', section: YELLOW_CURRY_SECTION },
        { ...GARLIC, amount: 2, unit: UNITS.CLOVE, additionalDetails: 'minced', section: YELLOW_CURRY_SECTION },
        { ...COCONUT_MILK, amount: 27, unit: UNITS.OUNCE, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...CORNSTARCH, amount: 2, unit: UNITS.TEASPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...FISH_SAUCE, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...LIME_JUICE, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...BROWN_SUGAR, amount: 3 / 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...SRIRACHA_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
    ],
    directions: [
        { step: 'Over medium-low heat, heat oil in a large pot.', type: MAKE_CURRY, img: curry1 },
        { step: 'Add onion and saute until soften (about 3 to 4 minutes).', type: MAKE_CURRY, img: curry6 },
        { step: 'Add chicken, carrots, and potatoes. Cook for 1 to 2 minutes.', type: MAKE_CURRY, img: curry8 },
        { step: 'Add ginger, garlic and curry paste. Saute for 3 minutes.', type: MAKE_CURRY, img: curry10 },
        { step: 'Add 3/4 of coconut milk.', type: MAKE_CURRY, img: curry11 },
        { step: 'Mix cornstarch into the last quarter of coconut milk. Add this to the pot.', type: MAKE_CURRY, img: [curry12, curry13] },
        { step: 'Bring to a boil.', type: MAKE_CURRY },
        { step: 'Reduce heat to low and simmer until chicken and potatoes are cooked through (about 20 to 30 minutes). Thin curry by adding water if needed.', type: MAKE_CURRY, img: curry14 },
        { step: 'Add fish sauce, brown sugar and lime juice. Simmer for 5 minutes.', type: MAKE_CURRY, img: [curry15, curry16] },
        { step: 'Serve with jasmine rice (or your preferred rice).', type: SECTIONS.SERVE, img: curry18 },
    ],
    notes: [
        { note: 'If you decide to double or triple this amount, you do not need to double or triple the yellow curry paste depending on your spice tolerance. I would suggest for a more mild spice level use 1.5 times for doubled and 2 times for tripled.' },
    ]
};