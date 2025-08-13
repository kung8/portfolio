const katsu1 = '../assets/Products/katsu-1.jpeg';
const katsu2 = '../assets/Products/katsu-2.jpeg';
const katsu3 = '../assets/Products/katsu-3.jpeg';
const katsu4 = '../assets/Products/katsu-4.jpeg';
const katsu5 = '../assets/Products/katsu-5.jpeg';
const katsu6 = '../assets/Products/katsu-6.jpeg';
const katsu7 = '../assets/Products/katsu-7.jpeg';
const katsu8 = '../assets/Products/katsu-8.jpeg';

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const {
    CHICKEN_BREAST,
    VEGETABLE_OIL,
    EGG,
    PANKO_BREADCRUMBS,
    ALL_PURPOSE_FLOUR,
    SALT,
    JASMINE_RICE,
    CABBAGE,
    ROMA_TOMATO,
    LEMON,
    PORK_LOIN,
} = require('./ingredients');

const DREDGING_STATION_SECTION = 'Dredging Station';

module.exports = {
    cardName: 'Japanese Chicken Katsu',
    name: 'Japanese Chicken Katsu',
    recipeAuthors: ['Namiko Hirasawa Chen'],
    recipeFinder: 'Aldin Pope',
    img: katsu8,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { label: 'Chicken Katsu', link: 'https://www.justonecookbook.com/chicken-katsu/' }
    ],
    ingredients: [
        { ...CHICKEN_BREAST, amount: 4, unit: '', additionalDetails: 'or ' + PORK_LOIN.name, section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DREDGING_STATION_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: DREDGING_STATION_SECTION },
        { ...PANKO_BREADCRUMBS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING_STATION_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DEEP_FRY },
        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
        { ...CABBAGE, amount: 1 / 4, unit: '', additionalDetails: 'julienne', section: SECTIONS.TOPPINGS },
        { ...ROMA_TOMATO, amount: 2, unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...LEMON, amount: '', unit: '', additionalDetails: 'wedges', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'small-based pot' },
        { name: 'measuring cups' },
        { name: 'measuring spoons' },
        { name: 'cutting boards' },
        { name: 'knives' },
        { name: 'small bowls (for dredging)' },
        { name: 'long-handled tongs' },
        { name: 'cooking thermometer' },
        { name: 'cooling rack' },
        { name: 'large plate' },
        { name: 'oven mitts' },
        { name: 'paper towels' },
    ],
    directions: [
        { step: 'Pat the meat dry.', section: SECTIONS.MAIN },
        { step: 'Season the chicken with salt.', section: SECTIONS.MAIN },
        { step: 'Set up the three dredging stations in separate small bowls: (1) flour, (2) egg, and (3) panko bread crumbs.', section: SECTIONS.MAIN, img: katsu1 },
        { step: 'First dredge the chicken in flour and shake off any excess. A good way to do this is playing pat-a-cake with it between each hand. Be sure to keep it over the flour station.', section: SECTIONS.MAIN, img: katsu2 },
        { step: 'Dip it inside the egg bowl.', section: SECTIONS.MAIN, img: katsu3 },
        { step: 'Finally put it inside the panko bread crumbs bowl and make sure that it is well coated.', section: SECTIONS.MAIN, img: katsu4 },
        { step: 'Place the finished chicken on a plate that will be fried soon. Repeat the dredging process for each of the chicken breasts.', section: SECTIONS.MAIN, img: katsu5 },
        { step: 'Heat oil in a pot over medium heat until it gets to about 350 ºF. You can use a cooking thermometer to gauge this.', section: SECTIONS.MAIN },
        { step: 'Be careful as the oil is very hot by this point, so be sure to wear oven mitts to help protect your hands from getting burned.', section: SECTIONS.MAIN },
        { step: 'Place the chicken breast in the hot oil, and cook for 3 - 4 minutes per side.', section: SECTIONS.MAIN, img: katsu6 },
        { step: 'Place the finished chicken breast on a cooling rack lined with about 2 paper towel layers', section: SECTIONS.MAIN, img: katsu7 },
        { step: 'Repeat this for each chicken breast.', section: SECTIONS.MAIN },
        { step: 'Serve with rice and optionally with tomato, cabbage, and lemon slices (squeezed over chicken, or cabbage, or both) and enjoy this Japanese goodness!', section: SECTIONS.MAIN },
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
}