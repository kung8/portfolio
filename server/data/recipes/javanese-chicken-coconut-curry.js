// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { MACADAMIA_NUT, CORIANDER, SHALLOT, GARLIC, RED_CHILI, WATER, CHICKEN, LEMONGRASS, KAFFIR_LIME_LEAF, CINNAMON_STICK, COCONUT_MILK, FRIED_SHALLOTS, JASMINE_RICE, LIME, GINGER, BROWN_SUGAR, VEGETABLE_OIL } = require('./ingredients');

const SHALLOT_MIXTURE_SECTION = 'Shallot Mixture';

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
        { ...MACADAMIA_NUT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CORIANDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },

        { ...SHALLOT, amount: 5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'chopped', section: SHALLOT_MIXTURE_SECTION },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'peeled and chopped', section: SHALLOT_MIXTURE_SECTION },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'chopped', section: SHALLOT_MIXTURE_SECTION },
        { ...RED_CHILI, amount: 1, unit: '', additionalDetails: 'seeded and chopped', section: SHALLOT_MIXTURE_SECTION },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SHALLOT_MIXTURE_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SHALLOT_MIXTURE_SECTION },

        { ...VEGETABLE_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CURRY },
        { ...CHICKEN, amount: 2.5, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CURRY },
        { ...LEMONGRASS, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: '', section: SECTIONS.CURRY },
        { ...KAFFIR_LIME_LEAF, amount: 5, unit: INGREDIENT_UNITS.LEAF, additionalDetails: '', section: SECTIONS.CURRY },
        { ...CINNAMON_STICK, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.CURRY },
        { ...COCONUT_MILK, amount: 18, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.CURRY },

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
        { step: 'Over medium-high heat, heat a dutch oven pot.', section: SECTIONS.COOK_CURRY },
        { step: 'Add macadamia nut and coriander seed. Stir and cook until fragrant (about 2 minutes).', section: SECTIONS.COOK_CURRY },
        { step: 'Pound in a mortar and pestle.', section: SECTIONS.COOK_CURRY },
        { step: `Blend together the "${SHALLOT_MIXTURE_SECTION}" section ingredients until chopped.`, section: SECTIONS.COOK_CURRY },
        { step: 'Over medium-high heat, heat oil in a dutch oven pot.', section: SECTIONS.COOK_CURRY },
        { step: 'Cook the chicken in batches until browned (about 8 minutes).', section: SECTIONS.COOK_CURRY },
        { step: 'Transfer chicken to plate.', section: SECTIONS.COOK_CURRY },
        { step: 'Over medium-low heat, add shallot mixture, lemongrass, kaffir lime, and cinnamon. Stir until fragrant (about 5 minutes).', section: SECTIONS.COOK_CURRY },
        { step: 'Add chicken. Toss to coat.', section: SECTIONS.COOK_CURRY },
        { step: 'Reduce to low heat. Add coconut milk and cover.', section: SECTIONS.COOK_CURRY },
        { step: 'Stir occasionally and cook until chicken is tender (about 30 minutes).', section: SECTIONS.COOK_CURRY },
        { step: 'Uncover. Simmer until sauce thickens (about 5 minutes).', section: SECTIONS.COOK_CURRY },
        { step: 'Enjoy this over turmeric rice and topped with your favorite toppings.', section: SECTIONS.SERVE },
    ]
};