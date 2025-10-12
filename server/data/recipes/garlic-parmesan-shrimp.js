// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { AIR_FRYER, GARLIC, GARLIC_POWDER, LEMON_PEPPER, MIXING_BOWL, OLIVE_OIL, PARMIGIANO_REGGIANO, SALT, SHRIMP } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Garlic Parmesan Shrimp',
    name: 'Garlic Parmesan Shrimp',
    img: '',
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.APPETIZER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.AIR_FRY],
    protein: [PROTEIN.SEAFOOD],
    type: [TYPES.PROTEIN, TYPES.SIDE_DISH],
    allergies: [ALLERGIES.SHELLFISH],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.PESCATARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Garlic Parmesan Shrimp', link: 'https://www.facebook.com/61554695044027/posts/air-fryer-garlic-parmesan-shrimprecipe1-bag-frozen-shrimp-thawed-shelled-and-dev/122200538708156501/' }
    ],
    separated: true,
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...LEMON_PEPPER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced', section: SECTIONS.SEASONINGS },
        { ...PARMIGIANO_REGGIANO, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.SEASONINGS },

        { ...SHRIMP, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'thawed, shelled and deveined', section: SECTIONS.SHRIMP },
    ],
    appliances: [
        AIR_FRYER,
    ],
    supplies: [
        MIXING_BOWL,
    ],
    directions: [
        { step: `In a mixing bowl, combine all "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.PREP_SHRIMP },
        { step: 'Pat shrimp dry with a paper towel.', section: SECTIONS.PREP_SHRIMP },
        { step: 'Add shrimp to the bowl. Coat the shrimp.', section: SECTIONS.PREP_SHRIMP },
        { step: 'In an air fryer, place shrimp in a single layer.', section: SECTIONS.COOK_SHRIMP },
        { step: 'Cook at 360ºF for 10 minutes (flipping about halfway).', section: SECTIONS.COOK_SHRIMP },
        { step: 'Enjoy this with cocktail sauce or in a pasta or salad.', section: SECTIONS.SERVE },
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