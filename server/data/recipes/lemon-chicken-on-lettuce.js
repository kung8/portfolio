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
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CHICKEN_BREAST, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },

        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: SECTIONS.SAUCE },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...LETTUCE, amount: 7, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
    ],
    directions: [
        { step: `Over medium-high heat, heat a wok.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Add oil. Wait until it is hot.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Add chicken. Cook without mixing (about 1 to 2 minutes).`, section: SECTIONS.COOK_CHICKEN, img: [lettuce1, lettuce2] },
        { step: `Flip. Cook without mixing for a few minutes.`, section: SECTIONS.COOK_CHICKEN, img: lettuce3 },
        { step: `Season the chicken with salt and pepper.`, section: SECTIONS.COOK_CHICKEN },

        { step: `Add the "${SECTIONS.SAUCE}" section ingredients. Stir until coated.`, section: SECTIONS.COOK_SAUCE },
        { step: `Cook for a few minutes. Add more cornstarch if needed.`, section: SECTIONS.COOK_SAUCE, img: lettuce4 },
        { step: `Serve over leaves of lettuce with a side of rice.`, section: SECTIONS.SERVE, img: [lettuce5, lettuce6] },
    ],
    notes: [
        { note: 'The cornstarch should thicken the sauce slightly. Add more cornstarch to continuing thickening as preferred.' },
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