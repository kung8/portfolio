const cooked = '../assets/Products/lemon-chicken-on-lettuce-cooked.jpeg';
const frying = '../assets/Products/lemon-chicken-on-lettuce-frying-chicken.jpeg';
const partially = '../assets/Products/lemon-chicken-on-lettuce-partially-cooked.jpeg';
const rice = '../assets/Products/lemon-chicken-on-lettuce-plated-with-rice.jpeg';
const zoomed = '../assets/Products/lemon-chicken-on-lettuce-plated-zoomed.jpeg';
const plated = '../assets/Products/lemon-chicken-on-lettuce-plated.jpeg';
const raw = '../assets/Products/lemon-chicken-on-lettuce-raw-chicken.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const {
    VEGETABLE_OIL,
    CHICKEN_BREAST,
    LEMON_JUICE,
    LIGHT_SOY_SAUCE,
    CORNSTARCH,
    LETTUCE,
    SALT,
    BLACK_PEPPER,
    WATER,
} = require('./ingredients');

module.exports = {
    cardName: 'Lettuce Chicken',
    name: 'Lemon Chicken on Lettuce',
    img: zoomed,
    recipeAuthor: '',
    recipeFinder: 'Lily Lim',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHICKEN_BREAST, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LETTUCE, amount: 7, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Heat a wok over medium-high heat.', section: SECTIONS.MAIN },
        { step: 'Add vegetable oil and wait until it is hot.', section: SECTIONS.MAIN },
        { step: 'Add chicken to the wok and let it cook without flipping (about 1 to 2 minutes).', section: SECTIONS.MAIN, img: [raw, frying] },
        { step: 'Then flip and cook again for a few minutes.', section: SECTIONS.MAIN, img: partially },
        { step: 'Season the chicken with salt and pepper.', section: SECTIONS.MAIN },
        { step: 'Add soy sauce, water, lemon juice and cornstarch to the chicken.', section: SECTIONS.MAIN, img: cooked },
        { step: 'The cornstarch should thicken the sauce slightly. Add more cornstarch to continuing thickening as preferred.', section: SECTIONS.MAIN },
        { step: 'Serve the lemon chicken over leaves of lettuce with a side of rice.', section: SECTIONS.MAIN, img: [plated, rice] },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};