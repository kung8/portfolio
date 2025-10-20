const curry1 = '../assets/Products/khmer-red-curry-1.jpeg';
const curry2 = '../assets/Products/khmer-red-curry-2.jpeg';
const curry3 = '../assets/Products/khmer-red-curry-3.jpeg';
const curry4 = '../assets/Products/khmer-red-curry-4.jpeg';
const curry5 = '../assets/Products/khmer-red-curry-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    CHICKEN_THIGH,
    COCONUT_MILK,
    KAFFIR_LIME_LEAF,
    LEMONGRASS,
    RED_CURRY_PASTE,
    RUSSET_POTATO,
    SALT,
    SPATULA,
    STOVE,
    WATER,
    WOK,
} = require('./ingredients');

module.exports = {
    cardName: 'Khmer Red Curry',
    name: 'Khmer Red Curry',
    img: curry4,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CAMBODIAN, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    allergies: [],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Khmer Red Chicken Curry', link: 'https://cambodiarecipe.com/recipe/khmer-red-chicken-curry/' }
    ],
    separated: false,
    ingredients: [
        { ...CHICKEN_THIGH, amount: 5, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...RED_CURRY_PASTE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...RUSSET_POTATO, amount: 1, unit: '', additionalDetails: 'peeled and cubed', section: SECTIONS.MAIN },
        { ...COCONUT_MILK, amount: 13.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LEMONGRASS, amount: '', unit: '', additionalDetails: 'diagonally sliced', section: SECTIONS.MAIN },
        { ...KAFFIR_LIME_LEAF, amount: 12, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WATER, amount: '', unit: '', additionalDetails: 'warm', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
        SPATULA,
    ],
    directions: [
        { step: 'Over medium-high heat, add red curry paste and coconut milk in a pan.', section: SECTIONS.MAIN, img: curry1 },
        { step: 'Cook and stir until it is well combined.', section: SECTIONS.MAIN, img: curry2 },
        { step: 'Place the lemongrass and kaffir lime leaves in a spice bag.', section: SECTIONS.MAIN, img: curry3 },
        { step: 'Add the chicken, potatoes, and spice bag.', section: SECTIONS.MAIN },
        { step: 'Cook for about 10.', section: SECTIONS.MAIN },
        { step: 'Turn down the heat and let it simmer for 10 to 15 minutes. Cook until the chicken is completely cooked through and the potatoes are softened but not mushy.', section: SECTIONS.MAIN },
        { step: 'Add water or more coconut milk to help thin the curry as desired and cut the spice level.', section: SECTIONS.MAIN },
        { step: 'Serve this delicious Cambodian spicy curry with vermicelli noodles or baked bread.', section: SECTIONS.MAIN, img: curry5 },
    ],
    notes: [
        { note: 'You can really add any structural veggies. I did not like some of the textures of the eggplant when reheated.' },
        { note: 'Green beans does not add much to the taste besides some color and adds crunch as long as you do not overcook it. Make sure to add a little later in the cooking process.' },
        { note: '1/4 cup of the red curry paste is a great spice level (don\'t add any more even if you double or triple the amount).' },
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