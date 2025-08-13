// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { ANGEL_HAIR_PASTA, OLIVE_OIL, YELLOW_ONION, GARLIC, ROMA_TOMATO, BALSAMIC_VINEGAR, CHICKEN_BROTH, RED_PEPPER_FLAKES, BLACK_PEPPER, BASIL_LEAF, PARMESAN_CHEESE } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Pasta Pomodoro',
    name: 'Pasta Pomodoro',
    img: '',
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.SIMMER],
    type: [TYPES.PASTA],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pasta Pomodoro', link: 'https://www.allrecipes.com/recipe/23847/pasta-pomodoro/' }
    ],
    separated: true,
    ingredients: [
        { ...ANGEL_HAIR_PASTA, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.PASTA },
        { ...OLIVE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...ROMA_TOMATO, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.SAUCE },
        { ...BALSAMIC_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHICKEN_BROTH, amount: 10.75, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RED_PEPPER_FLAKES, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...BASIL_LEAF, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.SAUCE },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Bring a pot of water and salt to a boil.', section: SECTIONS.COOK_PASTA },
        { step: 'Add pasta and cook until al dente (about 8 minutes or per package instructions).', section: SECTIONS.COOK_PASTA },
        { step: 'Drain and set aside.', section: SECTIONS.COOK_PASTA },

        { step: 'Over high heat, add olive oil to a frying pan.', section: SECTIONS.COOK_SAUCE },
        { step: 'Add onions and garlic. Saute until browned.', section: SECTIONS.COOK_SAUCE },
        { step: 'Reduce to medium-high heat.', section: SECTIONS.COOK_SAUCE },
        { step: 'Mix in tomatoes, vinegar and chicken broth. Simmer for about 8 minutes.', section: SECTIONS.COOK_SAUCE },
        { step: 'Add spices and herb. Mix.', section: SECTIONS.COOK_SAUCE },

        { step: 'Add pasta and toss.', section: SECTIONS.ASSEMBLE },
        { step: 'Simmer for 5 minutes.', section: SECTIONS.ASSEMBLE },

        { step: 'Serve warm and topped with grated cheese.', section: SECTIONS.SERVE },
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