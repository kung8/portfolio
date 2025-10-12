// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_PAN, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_BREAST, CHICKEN_BROTH, CORNSTARCH, EGG, LARGE_PAN, LEMON, OLIVE_OIL, OVEN, PAPER_TOWELS, PARSLEY, PLATE, SALT, SAUCEPAN, SMALL_BOWL, STOVE, UNSALTED_BUTTER, WATER, WHITE_WINE } = require('./ingredients');

const CORNSTARCH_MIXTURE_SECTION = 'Cornstarch Mixture';

module.exports = {
    wip: true,
    cardName: 'Chicken Francese',
    name: 'Chicken Francese',
    img: '',
    recipeAuthors: ['Elaina'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN, PROTEIN.EGG],
    type: [TYPES.MAIN_COURSE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chicken Francese', link: 'https://www.allrecipes.com/recipe/16681/delicious-easy-chicken-francese/' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...EGG, amount: 4, unit: '', additionalDetails: 'beaten', section: SECTIONS.CHICKEN },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'halved', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CHICKEN_BROTH, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_WINE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON, amount: 2, unit: '', additionalDetails: 'juiced', section: SECTIONS.SAUCE },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'chopped', section: SECTIONS.SAUCE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CORNSTARCH_MIXTURE_SECTION },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CORNSTARCH_MIXTURE_SECTION },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        { ...SMALL_BOWL, amount: 2 },
        LARGE_PAN,
        PLATE,
        PAPER_TOWELS,
        SAUCEPAN,
        BAKING_PAN,
    ],
    directions: [
        { step: 'Prepare dredging stations: (1) flour and (2) eggs.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Dredge chicken in flour. Shake excess off.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Dredge into egg. Let excess drip.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Dredge in flour again.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Line a plate with paper towel.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Over medium heat, heat oil in a pan.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Add chicken and saute until almost cooked through (about 4 minutes per side).', section: SECTIONS.COOK_CHICKEN },
        { step: 'Transfer to the plate.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Preheat oven to 300ºF.', section: SECTIONS.PREP_SAUCE },
        { step: `Over medium-low heat, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE },
        { step: 'Cook until butter melts, stirring occasionally.', section: SECTIONS.PREP_SAUCE },
        { step: 'In a small bowl, combine cornstarch and water.', section: SECTIONS.PREP_SAUCE },
        { step: 'Add cornstarch mixture to the saucepan. Cook until slightly thickens (about 2 to 3 minutes).', section: SECTIONS.PREP_SAUCE },
        { step: 'Add chicken and sauce to the baking dish.', section: SECTIONS.BAKE },
        { step: 'Bake until the chicken is no longer pink and juices are clear (about 10 to 15 minutes).', section: SECTIONS.BAKE },
        { step: 'Enjoy this dish.', section: SECTIONS.SERVE },
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