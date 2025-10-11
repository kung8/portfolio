// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CAYENNE_PEPPER, CHICKEN_BROTH, GARLIC, GARLIC_POWDER, MEDIUM_BOWL, MIXING_BOWL, ONION_POWDER, OREGANO, PAPRIKA, PARSLEY, RED_PEPPER_FLAKES, SALT, SHRIMP, STOVE, UNSALTED_BUTTER, WHITE_RICE, WOK } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Cajun Shrimp',
    name: 'Cajun Shrimp',
    img: '',
    recipeAuthors: ['Tiffany'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CAJUN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.SHRIMP],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Cajun Shrimp', link: 'https://www.lecremedelacrumb.com/cajun-shrimp-and-rice-skillet/' }
    ],
    separated: true,
    ingredients: [
        { ...PAPRIKA, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...ONION_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...OREGANO, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CAYENNE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...RED_PEPPER_FLAKES, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },

        { ...WHITE_RICE, amount: 4 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'uncooked', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: 8 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },

        { ...PARSLEY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE
    ],
    supplies: [
        MEDIUM_BOWL,
        WOK,
        MIXING_BOWL,
    ],
    directions: [
        { step: `In a medium bowl, combine all the "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.PREP_SEASONINGS },
        { step: 'Over medium heat, melt 2 tablespoons in a wok.', section: SECTIONS.COOK_RICE },
        { step: 'Add garlic, half of the cajun seasoning and rice. Mix.', section: SECTIONS.COOK_RICE },
        { step: 'Add chicken broth. Bring to a boil.', section: SECTIONS.COOK_RICE },
        { step: 'Cover and let simmer (about 15 minutes). Stir once or twice.', section: SECTIONS.COOK_RICE },
        { step: 'In a mixing bowl, combine melted butter and cajun seasoning. Add shrimp and toss until coated.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Add shrimp to the rice. Cover and cook until the shrimp is pink and opaque (about 3 to 5 minutes).', section: SECTIONS.COOK_SHRIMP },
        { step: 'Serve this with parsley.', section: SECTIONS.SERVE },
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
    mealPrep: false,
};