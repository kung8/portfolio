// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { MIXING_BOWL, ANGEL_HAIR_PASTA, UNSALTED_BUTTER, SHRIMP, GARLIC, WHITE_WINE, BLACK_PEPPER, PARMESAN_CHEESE, PARSLEY, LEMON, STOVE, LARGE_POT, SAUCEPAN } = require('./ingredients');

const COMBINE = 'Combine';

module.exports = {
    wip: true,
    cardName: 'Shrimp Scampi',
    name: 'Shrimp Scampi',
    img: '',
    recipeAuthors: ['Rncoggins'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [],
    protein: [PROTEIN.SHRIMP],
    type: [TYPES.PASTA],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Shrimp Scampi', link: 'https://www.allrecipes.com/recipe/19508/shrimp-scampi/' }
    ],
    separated: true,
    ingredients: [
        { ...ANGEL_HAIR_PASTA, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_WINE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PARMESAN_CHEESE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: SECTIONS.TOPPINGS },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...LEMON, amount: 1, unit: '', additionalDetails: 'wedged', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        MIXING_BOWL,
        SAUCEPAN,
    ],
    directions: [
        { step: 'Over medium-high heat, bring a large pot of salted water to a boil.', section: SECTIONS.COOK_NOODLES },
        { step: 'Add angel hair pasta and cook until al dente (about 4 to 5 minutes).', section: SECTIONS.COOK_NOODLES },
        { step: 'Drain. Transfer to a mixing bowl.', section: SECTIONS.COOK_NOODLES },

        { step: 'Over medium heat, melt butter in a saucepan.', section: SECTIONS.COOK_SAUCE },
        { step: 'Add shrimp and garlic. Cook and stir until shrimp turns pink (about 3 to 5 minutes).', section: SECTIONS.COOK_SAUCE },
        { step: 'Add white wine and black pepper. Bring to a boil.', section: SECTIONS.COOK_SAUCE },
        { step: 'Cook and stir for 30 seconds.', section: SECTIONS.COOK_SAUCE },

        { step: 'Pour the sauce over the pasta and mix.', section: COMBINE },

        { step: 'Enjoy this taste of Italy topped with parsley, parmesan and lemon wedges.', section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Over low heat, add a little oil to a wok. Add shrimp scampi with the shrimp in a single layer. Stir-fry until heated through (about 2 to 3 minutes). Add a little water if the sauce is too dry.',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Cover with a damp paper towel. Microwave on low in 30-second intervals until heated through. Stir between intervals and add a little water if the sauce is too dry.',
        },
    ],
    mealPrep: true,
};