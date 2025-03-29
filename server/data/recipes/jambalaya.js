// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { OLIVE_OIL, BONELESS_AND_SKINLESS_CHICKEN_BREAST, ANDOUILLE_SAUSAGE, YELLOW_BELL_PEPPER, RED_BELL_PEPPER, GREEN_BELL_PEPPER, CELERY, JALAPENO_PEPPER, WHITE_ONION, GARLIC, CRUSHED_TOMATOES, CHICKEN_BOUILLON, CHICKEN_BROTH, WHITE_RICE, THYME, CAYENNE_PEPPER, BAY_LEAVES, LARGE_SHRIMP, OKRA, SALT, BLACK_PEPPER, PARSLEY, GREEN_ONION, HOT_SAUCE, CAJUN_SEASONING } = require('./ingredients');

const MEAT_SECTION = 'Meat';
const VEGGIES_SECTION = 'Veggies';
const RICE_SECTION = 'Rice';
const SHRIMP_SECTION = 'Shrimp';

const COOK_MEAT = 'Cook Meat';
const COOK_VEGGIES = 'Cook Veggies';
const COOK_RICE = 'Cook Rice';
const COOK_SHRIMP = 'Cook Shrimp';

module.exports = {
    wip: true,
    cardName: 'Jambalaya',
    name: 'Jambalaya',
    img: '',
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
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MEAT_SECTION },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: '', additionalDetails: 'bite sized', section: MEAT_SECTION },
        { ...ANDOUILLE_SAUSAGE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'thinly sliced', section: MEAT_SECTION },

        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGGIES_SECTION },
        { ...YELLOW_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: VEGGIES_SECTION },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: VEGGIES_SECTION },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: VEGGIES_SECTION },
        { ...CELERY, amount: 2, unit: INGREDIENT_UNITS.RIB, additionalDetails: 'diced', section: VEGGIES_SECTION },
        { ...JALAPENO_PEPPER, amount: 2, unit: '', additionalDetails: 'chopped', section: VEGGIES_SECTION },
        { ...WHITE_ONION, amount: 1, unit: '', additionalDetails: 'diced', section: VEGGIES_SECTION },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: VEGGIES_SECTION },

        { ...CRUSHED_TOMATOES, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: RICE_SECTION },
        { ...CHICKEN_BROTH, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_SECTION },
        { ...WHITE_RICE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_SECTION },
        { ...CAJUN_SEASONING, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RICE_SECTION },
        { ...THYME, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICE_SECTION },
        { ...CAYENNE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RICE_SECTION },
        { ...BAY_LEAVES, amount: 1, unit: '', additionalDetails: '', section: RICE_SECTION },

        { ...LARGE_SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SHRIMP_SECTION },
        { ...OKRA, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'thinly sliced', section: SHRIMP_SECTION },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SHRIMP_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SHRIMP_SECTION },

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
        { step: 'Over medium-high heat, heat oil in a large pot.', type: COOK_MEAT },
        { step: 'Add chicken and sausage. Saute until the chicken is cooked through and sausage is browned (about 5 to 7 minutes).', type: COOK_MEAT },
        { step: 'Transfer meats to a plate and set aside.', type: COOK_MEAT },

        { step: 'Over medium-high heat, add oil to the large pot.', type: COOK_VEGGIES },
        { step: 'Add the rest of the "Veggies" section ingredients. If you prefer a mild spice level, leave out the jalapeno peppers.', type: COOK_VEGGIES },
        { step: 'Saute until the onions are softened (about 6 minutes).', type: COOK_VEGGIES },

        { step: 'Add crushed tomatoes, broth, rice, Cajun seasoning, thyme, cayenne pepper, and bay leaf to the large pot. Stir.', type: COOK_RICE },
        { step: 'Cook until it simmers.', type: COOK_RICE },
        { step: 'Reduce to medium-low heat.', type: COOK_RICE },
        { step: 'Cover and simmer until the rice is almost cooked through (about 25 to 30 minutes). Stir every 5 minutes to prevent the rice burning.', type: COOK_RICE },

        { step: 'Add shrimp and okra. Stir.', type: COOK_SHRIMP },
        { step: 'Simmer and stir occasionally. Cook until shrimp is cooked through and pink.', type: COOK_SHRIMP },
        { step: 'Remove the bay leaf and re-add the chicken and sausage.', type: COOK_SHRIMP },
        { step: 'Taste and add salt, pepper and Cajun seasoning as needed.', type: COOK_SHRIMP },

        { step: 'Serve warm with your favorite toppings.', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Fresh or frozen okra can be used. If frozen, just make sure it has thawed.' },
    ],
};