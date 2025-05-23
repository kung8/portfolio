// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { PAPRIKA, SALT, GARLIC_POWDER, BLACK_PEPPER, ONION_POWDER, OREGANO, CAYENNE_PEPPER, RED_PEPPER_FLAKES, WHITE_RICE, CHICKEN_BROTH, SHRIMP, UNSALTED_BUTTER, GARLIC, PARSLEY } = require('./ingredients');

const CAJUN_SEASONING = 'Cajun Seasoning';

const PREP_CAJUN_SEASONING = 'Prep Cajun Seasoning';
const COOK_RICE = 'Cook Rice';
const COOK_SHRIMP = 'Cook Shrimp';

module.exports = {
    wip: true,
    cardName: 'Cajun Shrimp',
    name: 'Cajun Shrimp',
    img: '',
    recipeAuthor: '',
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
        { ...PAPRIKA, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAJUN_SEASONING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAJUN_SEASONING },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAJUN_SEASONING },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAJUN_SEASONING },
        { ...ONION_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAJUN_SEASONING },
        { ...OREGANO, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAJUN_SEASONING },
        { ...CAYENNE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAJUN_SEASONING },
        { ...RED_PEPPER_FLAKES, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CAJUN_SEASONING },

        { ...WHITE_RICE, amount: 4 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'uncooked', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: 8 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SHRIMP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and deveined', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },

        { ...PARSLEY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'wok' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'In a medium bowl, combine all the "Cajun Seasoning" section ingredients.', section: PREP_CAJUN_SEASONING },
        { step: 'Over medium heat, melt 2 tablespoons in a wok.', section: COOK_RICE },
        { step: 'Add garlic, half of the cajun seasoning and rice. Mix.', section: COOK_RICE },
        { step: 'Add chicken broth. Bring to a boil.', section: COOK_RICE },
        { step: 'Cover and let simmer (about 15 minutes). Stir once or twice.', section: COOK_RICE },
        { step: 'In a mixing bowl, combine melted butter and cajun seasoning. Add shrimp and toss until coated.', section: COOK_SHRIMP },
        { step: 'Add shrimp to the rice. Cover and cook until the shrimp is pink and opaque (about 3 to 5 minutes).', section: COOK_SHRIMP },
        { step: 'Serve this with parsley.', section: SECTIONS.SERVE },
    ]
};