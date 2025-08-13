// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { OLIVE_OIL, BONELESS_AND_SKINLESS_CHICKEN_BREAST, ANDOUILLE_SAUSAGE, YELLOW_BELL_PEPPER, RED_BELL_PEPPER, GREEN_BELL_PEPPER, CELERY, JALAPENO_PEPPER, WHITE_ONION, GARLIC, CRUSHED_TOMATOES, CHICKEN_BOUILLON, CHICKEN_BROTH, WHITE_RICE, THYME, CAYENNE_PEPPER, BAY_LEAF, LARGE_SHRIMP, OKRA, SALT, BLACK_PEPPER, PARSLEY, GREEN_ONION, HOT_SAUCE, CAJUN_SEASONING } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Jambalaya',
    name: 'Jambalaya',
    img: '',
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CAJUN, GENRES.CREOLE],
    method: [METHODS.SAUTE, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN, PROTEIN.PORK, PROTEIN.SHRIMP],
    type: [TYPES.RICE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Jambalaya', link: 'https://www.gimmesomeoven.com/jambalaya-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MEAT },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: '', additionalDetails: 'bite sized', section: SECTIONS.MEAT },
        { ...ANDOUILLE_SAUSAGE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'thinly sliced', section: SECTIONS.MEAT },

        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...YELLOW_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...CELERY, amount: 2, unit: INGREDIENT_UNITS.RIB, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...JALAPENO_PEPPER, amount: 2, unit: '', additionalDetails: 'chopped', section: SECTIONS.VEGGIES },
        { ...WHITE_ONION, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.VEGGIES },

        { ...CRUSHED_TOMATOES, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.RICE },
        { ...CHICKEN_BROTH, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.RICE },
        { ...WHITE_RICE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.RICE },
        { ...CAJUN_SEASONING, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...THYME, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...CAYENNE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.RICE },
        { ...BAY_LEAF, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.RICE },

        { ...LARGE_SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SECTIONS.SHRIMP },
        { ...OKRA, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'thinly sliced', section: SECTIONS.SHRIMP },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SHRIMP },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SHRIMP },

        { ...PARSLEY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...HOT_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat oil in a large pot.', section: SECTIONS.COOK_MEAT },
        { step: 'Add chicken and sausage. Saute until the chicken is cooked through and sausage is browned (about 5 to 7 minutes).', section: SECTIONS.COOK_MEAT },
        { step: 'Transfer meats to a plate and set aside.', section: SECTIONS.COOK_MEAT },

        { step: 'Over medium-high heat, add oil to the large pot.', section: SECTIONS.COOK_VEGGIES },
        { step: `Add the rest of the "${SECTIONS.VEGGIES}" section ingredients. If you prefer a mild spice level, leave out the jalapeno peppers.`, section: SECTIONS.COOK_VEGGIES },
        { step: 'Saute until the onions are softened (about 6 minutes).', section: SECTIONS.COOK_VEGGIES },

        { step: 'Add crushed tomatoes, broth, rice, Cajun seasoning, thyme, cayenne pepper, and bay leaf to the large pot. Stir.', section: SECTIONS.COOK_RICE },
        { step: 'Cook until it simmers.', section: SECTIONS.COOK_RICE },
        { step: 'Reduce to medium-low heat.', section: SECTIONS.COOK_RICE },
        { step: 'Cover and simmer until the rice is almost cooked through (about 25 to 30 minutes). Stir every 5 minutes to prevent the rice burning.', section: SECTIONS.COOK_RICE },

        { step: 'Add shrimp and okra. Stir.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Simmer and stir occasionally. Cook until shrimp is cooked through and pink.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Remove the bay leaf and re-add the chicken and sausage.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Taste and add salt, pepper and Cajun seasoning as needed.', section: SECTIONS.COOK_SHRIMP },

        { step: 'Serve warm with your favorite toppings.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Fresh or frozen okra can be used. If frozen, just make sure it has thawed.' },
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