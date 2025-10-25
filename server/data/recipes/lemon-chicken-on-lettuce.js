const lettuce1 = '../assets/Products/lemon-chicken-on-lettuce-1.jpeg';
const lettuce2 = '../assets/Products/lemon-chicken-on-lettuce-2.jpeg';
const lettuce3 = '../assets/Products/lemon-chicken-on-lettuce-3.jpeg';
const lettuce4 = '../assets/Products/lemon-chicken-on-lettuce-4.jpeg';
const lettuce5 = '../assets/Products/lemon-chicken-on-lettuce-5.jpeg';
const lettuce6 = '../assets/Products/lemon-chicken-on-lettuce-6.jpeg';
const lettuce7 = '../assets/Products/lemon-chicken-on-lettuce-7.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BLACK_PEPPER,
    CHICKEN_BREAST,
    CORNSTARCH,
    LEMON_JUICE,
    LETTUCE,
    LIGHT_SOY_SAUCE,
    SALT,
    STOVE,
    VEGETABLE_OIL,
    WATER,
    WOK,
} = require('./ingredients');

module.exports = {
    cardName: 'Lettuce Chicken',
    name: 'Lemon Chicken on Lettuce',
    img: lettuce7,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Lily Lim'],
            finder: 'Lily Lim'
        }
    ],
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
        STOVE,
    ],
    supplies: [
        WOK,
    ],
    directions: [
        { step: 'Heat a wok over medium-high heat.', section: SECTIONS.MAIN },
        { step: 'Add vegetable oil and wait until it is hot.', section: SECTIONS.MAIN },
        { step: 'Add chicken to the wok and let it cook without flipping (about 1 to 2 minutes).', section: SECTIONS.MAIN, img: [lettuce1, lettuce2] },
        { step: 'Then flip and cook again for a few minutes.', section: SECTIONS.MAIN, img: lettuce3 },
        { step: 'Season the chicken with salt and pepper.', section: SECTIONS.MAIN },
        { step: 'Add soy sauce, water, lemon juice and cornstarch to the chicken.', section: SECTIONS.MAIN, img: lettuce4 },
        { step: 'The cornstarch should thicken the sauce slightly. Add more cornstarch to continuing thickening as preferred.', section: SECTIONS.MAIN },
        { step: 'Serve the lemon chicken over leaves of lettuce with a side of rice.', section: SECTIONS.MAIN, img: [lettuce5, lettuce6] },
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