const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BASIL_LEAF, BOWL, COLANDER, GARLIC, HEAVY_CREAM, LARGE_PAN, LARGE_POT, OLIVE_OIL, PARMESAN_CHEESE, PENNE, RED_PEPPER_FLAKES, SALT, SPATULA, STOVE, TOMATO_PASTE, YELLOW_ONION } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Penne alla Vodka',
    name: 'Penne alla Vodka',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-11-01 21:02:07',
    modifiedAt: '2026-11-01 21:02:07',
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.SAUTE, METHODS.SIMMER],
    type: [TYPES.PASTA, TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Penne alla Vodka Without Vodka',
            link: 'https://nofrillskitchen.com/penne-alla-vodka-without-vodka-recipe/',
            authors: ['No Frills Kitchen'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...PENNE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.PASTA },
        { ...SALT, amount: '', unit: '', additionalDetails: 'for pasta water', section: SECTIONS.PASTA },

        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.OIL },

        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.VEGGIES },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },

        { ...RED_PEPPER_FLAKES, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TOMATO_PASTE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...BASIL_LEAF, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        BOWL,
        COLANDER,
        LARGE_PAN,
        SPATULA,
    ],
    directions: [
        { step: `Over high heat, bring a pot of salted water to a boil.`, section: SECTIONS.COOK_PASTA },
        { step: `Add pasta. Cook until pasta is almost al dente (about 7 to 9 minutes, about 2 minutes less than package instructions). It will be finished cooking to al dente in the sauce.`, section: SECTIONS.COOK_PASTA },
        { step: `Reserve about 1 cup of pasta water.`, section: SECTIONS.COOK_PASTA },
        { step: `Drain the pasta.`, section: SECTIONS.COOK_PASTA },

        { step: `Over medium heat, heat olive oil in a large pan.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients.`, section: SECTIONS.COOK_SAUCE },
        { step: `Cook, stirring occasionally, until the onion is softened and translucent and the garlic is lightly browned (about 5 minutes).`, section: SECTIONS.COOK_SAUCE },
        { step: `Add red pepper flakes. Cook until fragrant (about 1 to 2 minutes).`, section: SECTIONS.COOK_SAUCE },
        { step: `Add the tomato paste. Cook until paste darkens slightly and is sticky (about 2 minutes).`, section: SECTIONS.COOK_SAUCE },
        { step: `Add about 1/4 cup of pasta water. Stir to loosen the sauce and deglaze the pan.`, section: SECTIONS.COOK_SAUCE },
        { step: `Reduce to low heat.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add cream. Stir until well combined.`, section: SECTIONS.COOK_SAUCE },

        { step: `Add pasta to the sauce. Toss to coat. Cook until the pasta is al dente, adding splashes of reserved pasta water as needed to loosen the sauce.`, section: SECTIONS.ASSEMBLE },
        { step: `Turn off the heat. Add parmesan and toss.`, section: SECTIONS.ASSEMBLE },

        { step: `Serve topped with additional parmesan and basil leaves.`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Reheat gently in a pan over low heat, adding a splash of water to loosen the sauce as needed.',
        },
    ],
    mealPrep: true,
};
