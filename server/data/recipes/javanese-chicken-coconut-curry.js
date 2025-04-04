// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { MACADAMIA_NUT, CORIANDER, SHALLOT, GARLIC, RED_CHILI, WATER, CHICKEN, LEMONGRASS, KAFFIR_LIME_LEAF, CINNAMON_STICK, COCONUT_MILK, FRIED_SHALLOTS, JASMINE_RICE, LIME, GINGER, BROWN_SUGAR, VEGETABLE_OIL } = require('./ingredients');

const SEASON_SECTION = 'Season';
const SHALLOT_MIXTURE_SECTION = 'Shallot Mixture';
const CURRY_SECTION = 'Curry';

const COOK_CURRY = 'Cook Curry';

module.exports = {
    wip: true,
    cardName: 'Chicken Coconut Curry',
    name: 'Javanese Chicken Coconut Curry',
    img: '',
    recipeAuthor: 'Katrina Woodman',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.INDONESIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 70, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Javanese Chicken Coconut Curry', link: 'https://www.taste.com.au/recipes/javanese-chicken-coconut-curry-opor-ayam/ffd7ae57-ebd8-4886-a95b-2e49d067bd19' }
    ],
    separated: true,
    ingredients: [
        { ...MACADAMIA_NUT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SEASON_SECTION },
        { ...CORIANDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SEASON_SECTION },

        { ...SHALLOT, amount: 5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'chopped', section: SHALLOT_MIXTURE_SECTION },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'peeled and chopped', section: SHALLOT_MIXTURE_SECTION },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'chopped', section: SHALLOT_MIXTURE_SECTION },
        { ...RED_CHILI, amount: 1, unit: '', additionalDetails: 'seeded and chopped', section: SHALLOT_MIXTURE_SECTION },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SHALLOT_MIXTURE_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SHALLOT_MIXTURE_SECTION },

        { ...VEGETABLE_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CURRY_SECTION },
        { ...CHICKEN, amount: 2.5, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: CURRY_SECTION },
        { ...LEMONGRASS, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: '', section: CURRY_SECTION },
        { ...KAFFIR_LIME_LEAF, amount: 5, unit: INGREDIENT_UNITS.LEAF, additionalDetails: '', section: CURRY_SECTION },
        { ...CINNAMON_STICK, amount: 1, unit: '', additionalDetails: '', section: CURRY_SECTION },
        { ...COCONUT_MILK, amount: 18, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CURRY_SECTION },

        { ...FRIED_SHALLOTS, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...RED_CHILI, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...LIME, amount: '', unit: '', additionalDetails: 'wedged, optional', section: SECTIONS.TOPPINGS },

        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'blender' },
    ],
    supplies: [
        { name: 'dutch oven pot' },
        { name: 'mortar and pestle' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat a dutch oven pot.', type: COOK_CURRY },
        { step: 'Add macadamia nut and coriander seed. Stir and cook until fragrant (about 2 minutes).', type: COOK_CURRY },
        { step: 'Pound in a mortar and pestle.', type: COOK_CURRY },
        { step: 'Blend together the "Shallot Mixture" section ingredients until chopped.', type: COOK_CURRY },
        { step: 'Over medium-high heat, heat oil in a dutch oven pot.', type: COOK_CURRY },
        { step: 'Cook the chicken in batches until browned (about 8 minutes).', type: COOK_CURRY },
        { step: 'Transfer chicken to plate.', type: COOK_CURRY },
        { step: 'Over medium-low heat, add shallot mixture, lemongrass, kaffir lime, and cinnamon. Stir until fragrant (about 5 minutes).', type: COOK_CURRY },
        { step: 'Add chicken. Toss to coat.', type: COOK_CURRY },
        { step: 'Reduce to low heat. Add coconut milk and cover.', type: COOK_CURRY },
        { step: 'Stir occasionally and cook until chicken is tender (about 30 minutes).', type: COOK_CURRY },
        { step: 'Uncover. Simmer until sauce thickens (about 5 minutes).', type: COOK_CURRY },
        { step: 'Enjoy this over turmeric rice and topped with your favorite toppings.', type: SECTIONS.SERVE },
    ]
};