const chicken1 = '../assets/Products/chicken-ramen-1.jpeg';

const bokChoy1 = '../assets/Products/bok-choy-1.jpeg';
const bokChoy2 = '../assets/Products/bok-choy-2.jpeg';
const bokChoy3 = '../assets/Products/bok-choy-3.jpeg';
const bokChoy6 = '../assets/Products/bok-choy-6.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BABY_BOK_CHOY,
    BLACK_PEPPER,
    CHICKEN_BREAST,
    COLANDER,
    DUTCH_OVEN_POT,
    LIGHT_SOY_SAUCE,
    OLIVE_OIL,
    OVEN,
    POT,
    SALT,
    SESAME_SEEDS,
    STOVE,
    UNSALTED_BUTTER,
    WOK,
} = require('./ingredients');

module.exports = {
    cardName: 'Bok Choy Chicken',
    name: 'Bok Choy Chicken',
    img: bokChoy3,
    available: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.BLANCH, METHODS.ROAST, METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.VEGETABLE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...CHICKEN_BREAST, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BABY_BOK_CHOY, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: 'for wok', section: SECTIONS.MAIN },
        { ...SESAME_SEEDS, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        POT,
        WOK,
        DUTCH_OVEN_POT,
        COLANDER,
    ],
    directions: [
        { step: `Preheat the oven to 375ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Generously season the chicken breast with salt and pepper.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Over medium heat, melt butter in an oven-safe pan or pot.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Add the chicken and cook until each side is golden brown (about 4 to 6 minutes each side)`, section: SECTIONS.COOK_CHICKEN, img: chicken1 },
        { step: `Place the pot with chicken in the oven and roast until the chicken is cooked all the way through (about 15 to 25 minutes, depending on the chicken thickness and the oven).`, section: SECTIONS.COOK_CHICKEN },
        { step: `Remove from the oven and transfer the chicken to a cutting board. Cut the chicken into slices and cover with tin-foil to keep warm.`, section: SECTIONS.COOK_CHICKEN },

        { step: `Cut the ends of the baby bok choy so that each leaf is free and wash carefully to clean each leaf.`, section: SECTIONS.MAIN, img: bokChoy1 },
        { step: `While the chicken is roasting in the oven for the last couple of minutes, boil a pot of water over medium-high heat.`, section: SECTIONS.MAIN },
        { step: `Blanch your bok choy by placing it the boiling water for 3 to 4 minutes. This should only soften the vegetables.`, section: SECTIONS.MAIN, img: bokChoy2 },
        { step: `Once your chicken is out of the oven and cooled a little, slice up the chicken.`, section: SECTIONS.MAIN },
        { step: `Over medium-high heat, add a little oil to the wok and get it ready to transfer the drained bok choy.`, section: SECTIONS.MAIN },
        { step: `Turn off the heat for the pot. Remove the bok choy from the water and add it to the wok.`, section: SECTIONS.MAIN },
        { step: `Add salt and pepper and let the bok choy wilt a little (about 2 minutes). Stir or toss to prevent burning or sticking and help cover the leaves with a little oil.`, section: SECTIONS.MAIN },
        { step: `Add the chopped up chicken and combine.`, section: SECTIONS.MAIN },
        { step: `Add soy sauce and stir for a minute. Turn off the heat for the wok.`, section: SECTIONS.MAIN },

        { step: `Serve this with some sesame seeds and rice.`, section: SECTIONS.SERVE, img: bokChoy6 },
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