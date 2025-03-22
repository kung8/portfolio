const cooked = '../assets/Products/lemon-chicken-on-lettuce-cooked.jpeg';
const frying = '../assets/Products/lemon-chicken-on-lettuce-frying-chicken.jpeg';
const partially = '../assets/Products/lemon-chicken-on-lettuce-partially-cooked.jpeg';
const rice = '../assets/Products/lemon-chicken-on-lettuce-plated-with-rice.jpeg';
const zoomed = '../assets/Products/lemon-chicken-on-lettuce-plated-zoomed.jpeg';
const plated = '../assets/Products/lemon-chicken-on-lettuce-plated.jpeg';
const raw = '../assets/Products/lemon-chicken-on-lettuce-raw-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, UNITS } = require("./constants");
const {
    VEGETABLE_OIL,
    CHICKEN_BREAST,
    LEMON_JUICE,
    LIGHT_SOY_SAUCE,
    WARM_WATER,
    CORNSTARCH,
    LETTUCE,
    SALT,
    BLACK_PEPPER,
} = require('./ingredients');

module.exports = {
    cardName: 'Lettuce Chicken',
    name: 'Lemon Chicken on Lettuce',
    img: zoomed,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '4 servings',
    prepTime: '5 m',
    cookTime: '15 m',
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHICKEN_BREAST, amount: 3 / 2, unit: UNITS.POUND, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...LEMON_JUICE, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WARM_WATER, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LETTUCE, amount: 7, unit: UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
    ],
    directions: [
        { step: 'Heat a wok over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Add vegetable oil and wait until it is hot.', type: SECTIONS.MAIN },
        { step: 'Add chicken to the wok and let it cook without flipping (about 1 to 2 minutes).', type: SECTIONS.MAIN, img: [raw, frying] },
        { step: 'Then flip and cook again for a few minutes.', type: SECTIONS.MAIN, img: partially },
        { step: 'Season the chicken with salt and pepper.', type: SECTIONS.MAIN },
        { step: 'Add soy sauce, water, lemon juice and cornstarch to the chicken.', type: SECTIONS.MAIN, img: cooked },
        { step: 'The cornstarch should thicken the sauce slightly. Add more cornstarch to continuing thickening as preferred.', type: SECTIONS.MAIN },
        { step: 'Serve the lemon chicken over leaves of lettuce with a side of rice.', type: SECTIONS.MAIN, img: [plated, rice] },
    ]
};