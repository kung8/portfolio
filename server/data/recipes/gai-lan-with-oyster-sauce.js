const gaiLan1 = '../assets/Products/gai-lan-with-oyster-sauce-1.jpeg';
const gaiLan2 = '../assets/Products/gai-lan-with-oyster-sauce-2.jpeg';
const gaiLan3 = '../assets/Products/gai-lan-with-oyster-sauce-3.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { STOVE, WOK, GAI_LAN, WATER, OLIVE_OIL, SALT, OYSTER_SAUCE, COLANDER } = require('./ingredients');

const GAI_LAN_SECTION = 'Gai Lan';
const BOILED_WATER = 'Boiled Water';
const BOIL_GAI_LAN = 'Boil Gai Lan';
const CUT_GAI_LAN = 'Cut Gai Lan';
const SAUTE_GAI_LAN = 'Sauté Gai Lan';

module.exports = {
    cardName: 'Gai Lan Stir Fry',
    name: 'Gai Lan with Oyster Sauce',
    img: gaiLan3,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.BOIL, METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 3, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chinese Broccoli with Oyster Sauce', link: 'https://www.madewithlau.com/recipes/chinese-broccoli-oyster-sauce', authors: ['Chef Lau'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...GAI_LAN, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: GAI_LAN_SECTION },
        { ...WATER, amount: 8, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BOILED_WATER },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BOILED_WATER },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BOILED_WATER },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.STIR_FRY },
        { ...OYSTER_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.STIR_FRY },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
        COLANDER,
    ],
    directions: [
        { step: `In a colander, rinse the gai lan under water.`, section: BOIL_GAI_LAN },
        { step: `Over medium-high heat, add the "${BOILED_WATER}" section ingredients to a wok. Bring to a boil.`, section: BOIL_GAI_LAN },
        { step: `Add the gai lan. Submerge in water.`, section: BOIL_GAI_LAN },
        { step: `Cook until it is bright green (about 2 to 3 minutes).`, section: BOIL_GAI_LAN, img: gaiLan1 },

        { step: `Transfer the gai lan to the colander to drain.`, section: CUT_GAI_LAN },
        { step: `Cut the gai lan into 2 to 3 inch pieces.`, section: CUT_GAI_LAN, img: gaiLan2 },

        { step: `In the wok, heat the olive oil.`, section: SAUTE_GAI_LAN },
        { step: `Add the gai lan and oyster sauce. Mix to coat and cook for 2 to 3 minutes.`, section: SAUTE_GAI_LAN },

        { step: `Enjoy this simple side dish with rice and your favorite dishes.`, section: SECTIONS.SERVE },
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
    mealPrep: true,
};