const curry1 = '../assets/Products/khmer-red-curry-1.jpeg';
const curry2 = '../assets/Products/khmer-red-curry-2.jpeg';
const curry3 = '../assets/Products/khmer-red-curry-3.jpeg';
const curry4 = '../assets/Products/khmer-red-curry-4.jpeg';
const curry5 = '../assets/Products/khmer-red-curry-5.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
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

const COCONUT_MILK_SECTION = 'Coconut Milk';
const CHICKEN_AND_POTATOES_SECTION = 'Chicken and Potatoes';
const THINNER_SECTION = 'Thinner';

const PREP_SPICE_BAG = 'Prep Spice Bag';
const COOK_CHICKEN_AND_POTATOES = 'Cook Chicken and Potatoes'
const THIN_CURRY = 'Thin Curry';

module.exports = {
    cardName: 'Khmer Red Curry',
    name: 'Khmer Red Curry',
    img: curry4,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CAMBODIAN, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Khmer Red Chicken Curry',
            link: 'https://cambodiarecipe.com/recipe/khmer-red-chicken-curry/',
            authors: ['Cambodia Recipe'],
            finder: 'Kevin Ung',
        }
    ],
    separated: true,
    ingredients: [
        { ...RED_CURRY_PASTE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COCONUT_MILK_SECTION },
        { ...COCONUT_MILK, amount: 13.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: COCONUT_MILK_SECTION },

        { ...LEMONGRASS, amount: '', unit: '', additionalDetails: 'diagonally sliced', section: SECTIONS.AROMATICS },
        { ...KAFFIR_LIME_LEAF, amount: 12, unit: '', additionalDetails: '', section: SECTIONS.AROMATICS },

        { ...RUSSET_POTATO, amount: 1, unit: '', additionalDetails: 'peeled and cubed', section: CHICKEN_AND_POTATOES_SECTION },
        { ...CHICKEN_THIGH, amount: 5, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: CHICKEN_AND_POTATOES_SECTION },

        { ...WATER, amount: '', unit: '', additionalDetails: 'warm', section: THINNER_SECTION },

        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
        SPATULA,
    ],
    directions: [
        { step: 'Over medium-high heat, add red curry paste and coconut milk in a pan.', section: SECTIONS.COOK_MILK, img: curry1 },
        { step: 'Cook and stir until it is well combined.', section: SECTIONS.COOK_MILK, img: curry2 },

        { step: `Place the "${SECTIONS.AROMATICS}" section ingredients in a spice bag.`, section: PREP_SPICE_BAG, img: curry3 },

        { step: `Add the "${CHICKEN_AND_POTATOES_SECTION}" section ingredients and the spice bag.`, section: COOK_CHICKEN_AND_POTATOES },
        { step: 'Cook for about 10 minutes.', section: COOK_CHICKEN_AND_POTATOES },

        { step: 'Turn down the heat and let it simmer for 10 to 15 minutes. Cook until the chicken is completely cooked through and the potatoes are softened but not mushy.', section: SECTIONS.SIMMER },

        { step: 'Add water or more coconut milk to help thin the curry as desired and cut the spice level.', section: THIN_CURRY },

        { step: `Optionally add "${SECTIONS.SEASONINGS}" section ingredients as desired.`, section: SECTIONS.SEASON },

        { step: 'Serve this delicious Cambodian spicy curry with vermicelli noodles or baked bread.', section: SECTIONS.SERVE, img: curry5 },
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
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over medium heat, add a little water or coconut milk to help loosen the curry. Stir occasionally until heated through.',
        },
    ],
    mealPrep: true,
};