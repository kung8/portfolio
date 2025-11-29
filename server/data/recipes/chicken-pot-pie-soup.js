// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, BLACK_PEPPER, CARROT, CELERY, CHEDDAR_CHEESE, CHICKEN_BROTH, HEAVY_CREAM, LARGE_POT, OVEN, PARCHMENT_PAPER, PARSLEY, REFRIGERATED_PIE_CRUST, ROTISSERIE_CHICKEN, SALT, SALTED_BUTTER, STOVE, THYME, TURMERIC, WHITE_WINE, YELLOW_ONION } = require('./ingredients');

const CRUST_DIPPERS = 'Crust Dippers';
const SOUP_VEGGIES = 'Soup Veggies';
const SOUP_SEASONINGS = 'Soup Seasonings';
const SOUP_BASE = 'Soup Base';
const SOUP_CHICKEN = 'Soup Chicken';
const CREAMS = 'Creams';

module.exports = {
    wip: true,
    cardName: 'Chicken Pot Pie Soup',
    name: 'Chicken Pot Pie Soup',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.BRITISH, GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER, METHODS.SAUTE, METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SOUP],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Chicken Pot Pie Soup',
            link: 'https://www.thepioneerwoman.com/food-cooking/recipes/a61997037/chicken-pot-pie-soup-recipe/',
            authors: ['Ree Drummond'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...REFRIGERATED_PIE_CRUST, amount: 2, unit: INGREDIENT_UNITS.WHOLE, additionalDetails: '9-inch', section: CRUST_DIPPERS },
        { ...CHEDDAR_CHEESE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: CRUST_DIPPERS },
        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CRUST_DIPPERS },

        { ...SALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SOUP_VEGGIES },

        { ...CELERY, amount: 3, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'diced', section: SOUP_VEGGIES },
        { ...CARROT, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'peeled and diced', section: SOUP_VEGGIES },
        { ...YELLOW_ONION, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SOUP_VEGGIES },
        { ...THYME, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SOUP_VEGGIES },

        { ...TURMERIC, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SOUP_SEASONINGS },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SOUP_SEASONINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SOUP_SEASONINGS },

        { ...ALL_PURPOSE_FLOUR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SOUP_BASE },
        { ...WHITE_WINE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SOUP_BASE },
        { ...CHICKEN_BROTH, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SOUP_BASE },

        { ...ROTISSERIE_CHICKEN, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SOUP_CHICKEN },
        { ...PARSLEY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SOUP_CHICKEN },

        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAMS },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        { ...BAKING_SHEET, amount: 2 },
        PARCHMENT_PAPER,
        LARGE_POT,
    ],
    directions: [
        { step: `Preheat the oven to 375°F.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Line sheet pans with parchment paper.`, section: SECTIONS.PREP_PAN },

        { step: `Unroll pie crust on baking sheets.`, section: SECTIONS.PREP_CRUST },
        { step: `Sprinkle cheese and parsley over crust. Press lightly.`, section: SECTIONS.PREP_CRUST },
        { step: `Bake until edges are golden, the cheese is bubbly and crust is cooked through (about 12 to 14 minutes).`, section: SECTIONS.PREP_CRUST },
        { step: `Let cool.`, section: SECTIONS.PREP_CRUST },

        { step: `Over medium heat, melt butter in a large pot.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Add the "${SOUP_VEGGIES}" section ingredients.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Add the "${SOUP_SEASONINGS}" section ingredients.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Stir and cook until begin to soften (about 3 to 4 minutes).`, section: SECTIONS.COOK_VEGGIES },

        { step: `Add flour. Combine and cook (about 1 to 2 minutes).`, section: SECTIONS.COOK_SOUP },
        { step: `While stirring, slowly pour in the "${SOUP_BASE}" section ingredients.`, section: SECTIONS.COOK_SOUP },
        { step: `Add the "${SOUP_CHICKEN}" section ingredients. Bring to a boil and let thicken.`, section: SECTIONS.COOK_SOUP },
        { step: `Add cream. Taste and adjust as needed.`, section: SECTIONS.COOK_SOUP },

        { step: `Enjoy this simple soup dish with pieces of the crust.`, section: SECTIONS.SERVE },
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
            instruction: 'Microwave until heated through.',
        },
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over low heat, bring soup to a simmer, stirring occasionally until heated through.',
        },
    ],
    mealPrep: true,
};