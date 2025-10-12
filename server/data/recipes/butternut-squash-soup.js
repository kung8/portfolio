// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BLACK_PEPPER, BLENDER, BUTTERNUT_SQUASH, CARROT, CELERY, CHICKEN_BROTH, HEAVY_CREAM, LARGE_POT, MIXING_BOWL, OLIVE_OIL, OVEN, SALT, STOVE, SWEET_POTATO, THYME, UNSALTED_BUTTER, YELLOW_ONION } = require('./ingredients');

const SQUASH_SECTION = 'Squash';
const ROAST_SQUASH = 'Roast Squash';
const SAUTE_VEGGIES = 'Sauté Veggies';

module.exports = {
    wip: true,
    cardName: 'Butternut Squash Soup',
    name: 'Butternut Squash Soup',
    img: '',
    recipeAuthors: ['Lindsay Funston'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.ROAST, METHODS.SIMMER],
    type: [TYPES.SOUP],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
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

        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1, unit: '', additionalDetails: 'chopped', section: SECTIONS.VEGGIES },
        { ...CELERY, amount: 1, unit: INGREDIENT_UNITS.STALK, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...THYME, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },

        { ...CHICKEN_BROTH, amount: 1, unit: INGREDIENT_UNITS.QUART, additionalDetails: '', section: SECTIONS.SOUP },
        { ...HEAVY_CREAM, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
        STOVE,
        BLENDER,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_SHEET,
        LARGE_POT,
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', section: ROAST_SQUASH },
        { step: `In a mixing bowl, combine the "${SQUASH_SECTION}" section ingredients.`, section: ROAST_SQUASH },
        { step: 'On a baking pan, lay out the squash ingredients.', section: ROAST_SQUASH },
        { step: 'Bake until tender (about 30 to 35 minutes).', section: ROAST_SQUASH },

        { step: 'Over medium heat, heat butter and olive oil in a large pot.', section: SAUTE_VEGGIES },
        { step: `Add the rest of the "${SECTIONS.VEGGIES}" section ingredients. Cook until softened (about 7 to 10 minutes).`, section: SAUTE_VEGGIES },
        { step: `Add the "${SECTIONS.SEASONINGS}" section ingredients.`, section: SAUTE_VEGGIES },

        { step: 'Add the roasted squash and potatoes and chicken broth.', section: SECTIONS.MAKE_SOUP },
        { step: 'Simmer for 10 minutes.', section: SECTIONS.MAKE_SOUP },
        { step: 'Carefully transfer to a blender in batches. Blend until creamy.', section: SECTIONS.MAKE_SOUP },

        { step: 'Serve warm and enjoy this Fall season favorite!', section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Cover with a microwave-safe lid or wrap. Heat in 1-minute intervals until warmed through. Stir in between intervals to ensure even heating.',
        },
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over medium-low heat, reheat in a saucepan until heated through (about 5 to 10 minutes). Stir frequently.',
        },
    ],
    mealPrep: true,
};