// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { BUTTERNUT_SQUASH, SWEET_POTATO, OLIVE_OIL, SALT, BLACK_PEPPER, UNSALTED_BUTTER, YELLOW_ONION, CELERY, CARROT, THYME, CHICKEN_BROTH, HEAVY_CREAM } = require('./ingredients');

const SQUASH_SECTION = 'Squash';
const VEGGIES_SECTION = 'Veggies';
const SEASONING_SECTION = 'Seasoning';
const SOUP_SECTION = 'Soup';

const ROAST_SQUASH = 'Roast Squash';
const SAUTE_VEGGIES = 'Sauté Veggies';
const MAKE_SOUP = 'Make Soup';

module.exports = {
    wip: true,
    cardName: 'Butternut Squash Soup',
    name: 'Butternut Squash Soup',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.ROAST, METHODS.SIMMER],
    type: [TYPES.SOUP],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Butternut Squash Soup', link: 'https://www.delish.com/cooking/recipe-ideas/recipes/a55386/best-roasted-butternut-squash-soup-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...BUTTERNUT_SQUASH, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'peeled, seeded and 1" cubes', section: SQUASH_SECTION },
        { ...SWEET_POTATO, amount: 2, unit: '', additionalDetails: 'peeled and 1" cubes', section: SQUASH_SECTION },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SQUASH_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SQUASH_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SQUASH_SECTION },

        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGGIES_SECTION },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGGIES_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: '', additionalDetails: 'chopped', section: VEGGIES_SECTION },
        { ...CELERY, amount: 1, unit: INGREDIENT_UNITS.STALK, additionalDetails: '', section: VEGGIES_SECTION },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: '', section: VEGGIES_SECTION },
        { ...THYME, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SEASONING_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SEASONING_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SEASONING_SECTION },

        { ...CHICKEN_BROTH, amount: 1, unit: INGREDIENT_UNITS.QUART, additionalDetails: '', section: SOUP_SECTION },
        { ...HEAVY_CREAM, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
        { name: 'blender' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'baking sheet' },
        { name: 'large pot' },
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', section: ROAST_SQUASH },
        { step: 'In a mixing bowl, combine the "Squash" section ingredients.', section: ROAST_SQUASH },
        { step: 'On a baking pan, lay out the squash ingredients.', section: ROAST_SQUASH },
        { step: 'Bake until tender (about 30 to 35 minutes).', section: ROAST_SQUASH },

        { step: 'Over medium heat, heat butter and olive oil in a large pot.', section: SAUTE_VEGGIES },
        { step: 'Add the rest of the "Veggies" section ingredients. Cook until softened (about 7 to 10 minutes).', section: SAUTE_VEGGIES },
        { step: 'Add the "Seasoning" section ingredients.', section: SAUTE_VEGGIES },

        { step: 'Add the roasted squash and potatoes and chicken broth.', section: MAKE_SOUP },
        { step: 'Simmer for 10 minutes.', section: MAKE_SOUP },
        { step: 'Carefully transfer to a blender in batches. Blend until creamy.', section: MAKE_SOUP },

        { step: 'Serve warm and enjoy this Fall season favorite!', section: SECTIONS.SERVE },
    ]
};