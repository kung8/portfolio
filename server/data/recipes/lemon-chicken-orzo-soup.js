const soup1 = '../assets/Products/lemon-chicken-orzo-soup-1.jpeg';
const soup2 = '../assets/Products/lemon-chicken-orzo-soup-2.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAY_LEAF, BONELESS_AND_SKINLESS_CHICKEN_BREAST, CARROT, CELERY, CHICKEN_BROTH, CUTTING_BOARD, KNIFE, LARGE_POT, LEEK, LEMON, OLIVE_OIL, ORZO, SALT, STOVE, THYME, WATER } = require('./ingredients');

const VEGGIES_SECTION = 'Veggies';
const SIMMER_SECTION = 'Simmer';
const ORZO_SECTION = 'Orzo';

const COOK_VEGGIES = 'Cook Veggies';
const SIMMER = 'Simmer';
const CUT_CHICKEN = 'Cut Chicken';
const COOK_ORZO = 'Cook Orzo';
const ADD_FINISHING_TOUCHES = 'Add Finishing Touches';

module.exports = {
    cardName: 'Lemon Chicken Orzo Soup',
    name: 'Lemon Chicken Orzo Soup',
    img: soup2,
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SOUP],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Lemon Chicken-Orzo Soup',
            link: 'https://www.thepioneerwoman.com/food-cooking/recipes/a39296200/lemon-chicken-orzo-soup-recipe/',
            authors: ['Ree Drummond'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGGIES_SECTION },
        { ...CARROT, amount: 4, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'thinly sliced', section: VEGGIES_SECTION },
        { ...CELERY, amount: 3, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'chopped', section: VEGGIES_SECTION },
        { ...LEEK, amount: 2, unit: '', additionalDetails: 'halved length-wise and sliced, only white and light green parts', section: VEGGIES_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VEGGIES_SECTION },

        { ...THYME, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SIMMER_SECTION },
        { ...LEMON, amount: 1, unit: '', additionalDetails: '4 strips lemon zest and 1/4 cup lemon juice', section: SIMMER_SECTION },
        { ...BAY_LEAF, amount: 2, unit: '', additionalDetails: '', section: SIMMER_SECTION },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'bone-in and skin-on', section: SIMMER_SECTION },
        { ...CHICKEN_BROTH, amount: 2, unit: INGREDIENT_UNITS.QUART, additionalDetails: '', section: SIMMER_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SIMMER_SECTION },

        { ...ORZO, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: ORZO_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        CUTTING_BOARD,
        KNIFE,
    ],
    directions: [
        { step: `Over medium heat, heat oil in a large pot.`, section: COOK_VEGGIES },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients. Cook until leeks soften (about 5 minutes).`, section: COOK_VEGGIES },

        { step: `Add all the "${SECTIONS.SIMMER}" section ingredients except the lemon juice. Bring to a simmer.`, section: SIMMER },
        { step: `Cook until the chicken is cooked through and tender (about 20 to 25 minutes).`, section: SIMMER },

        { step: `Transfer the chicken to a cutting board. Let it cool slightly.`, section: CUT_CHICKEN },
        { step: `Cut the chicken into bite-size pieces.`, section: CUT_CHICKEN },

        { step: `Add the orzo to the soup. Simmer and cook until tender (about 8 to 10 minutes).`, section: COOK_ORZO },
        { step: `Re-add the chicken. Cook for a few minutes.`, section: COOK_ORZO },
        { step: `Remove the lemon zest and bay leaves.`, section: COOK_ORZO },

        { step: `Taste and adjust with the salt and lemon juice.`, section: ADD_FINISHING_TOUCHES, img: soup1 },

        { step: `Enjoy this simple soup dish.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `I did not like the taste of the dill in this soup, so I am omitting it from the ingredients.` },
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
    ],
    mealPrep: true,
};