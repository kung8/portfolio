const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CAYENNE_PEPPER, CRUSHED_TOMATOES, GARLIC, LARGE_POT, OLIVE_OIL, PARMESAN_CHEESE, PARSLEY, PENNE, POT, RED_PEPPER_FLAKES, SALT, STOVE, WATER, WHITE_SUGAR } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: "Penne Arrabbiata",
    name: "Penne Arrabbiata",
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-11-07 11:18:00',
    modifiedAt: '2026-11-07 11:18:00',
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.SAUTE, METHODS.SIMMER],
    type: [TYPES.PASTA, TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: "Penne all'Arrabbiata (Spicy Tomato Pasta)",
            link: 'https://www.recipetineats.com/penne-all-arrabbiata-spicy-tomato-pasta/',
            authors: ['Nagi Maehashi'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...PENNE, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.PASTA },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.PASTA },

        { ...OLIVE_OIL, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...CAYENNE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.WHOLE, additionalDetails: 'finely chopped', section: SECTIONS.SAUCE },
        { ...RED_PEPPER_FLAKES, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CRUSHED_TOMATOES, amount: 28, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1 + 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'optionally cuts sourness', section: SECTIONS.SAUCE },
        { ...WATER, amount: '', unit: '', additionalDetails: 'a splash, to rinse tomato can', section: SECTIONS.SAUCE },

        { ...PARMESAN_CHEESE, amount: '', unit: '', additionalDetails: 'finely grated', section: SECTIONS.TOPPINGS },
        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'finely chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        POT,
        LARGE_POT,
    ],
    directions: [
        { step: `Over medium-high heat, bring a large pot of salted water to a boil.`, section: SECTIONS.COOK_PASTA },
        { step: `Cook the penne in the boiling water according to package directions. Before draining, reserve about 1 cup of the starchy pasta water.`, section: SECTIONS.COOK_PASTA },
        { step: `Drain pasta.`, section: SECTIONS.COOK_PASTA },

        { step: `Over medium heat, heat oil in a large pot.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add garlic. Cook briefly.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add cayenne and red pepper flakes. Cook until the garlic is lightly golden and fragrant.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add crushed tomatoes, salt, and black pepper. Rinse the tomato can with a splash of water and pour it into the pot.`, section: SECTIONS.COOK_SAUCE },
        { step: `Bring the sauce to a gentle simmer.`, section: SECTIONS.COOK_SAUCE },
        { step: `Lower heat. Cook for 15 minutes, stirring occasionally.`, section: SECTIONS.COOK_SAUCE },
        { step: `Taste and add sugar if the sauce is too sour.`, section: SECTIONS.COOK_SAUCE },
        
        { step: `Add pasta and about 1/2 cup of reserved pasta water to the sauce. Toss until sauce clings to pasta, adding more pasta water as needed.`, section: SECTIONS.ASSEMBLE },

        { step: `Enjoy topped with grated parmesan and parsley.`, section: SECTIONS.SERVE },
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
            instruction: 'Add a splash of water to the pasta and sauce. Over low heat, gently reheat until warmed through.',
        },
    ],
    mealPrep: true,
};
