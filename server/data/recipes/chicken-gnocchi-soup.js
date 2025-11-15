// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BABY_SPINACH, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_THIGH, CARROT, CELERY, CHICKEN_BROTH, DUTCH_OVEN_POT, GARLIC, GNOCCHI, HALF_AND_HALF, OLIVE_OIL, SALT, STOVE, THYME, YELLOW_ONION } = require('./ingredients');

const GARLIC_SECTION = 'Garlic';
const FLOUR_SECTION = 'Flour';
const CHICKEN_BROTH_SECTION = 'Chicken Broth';
const GNOCCHI_SECTION = 'Gnocchi';
const SPINACH_AND_CREAM_SECTIONS = 'Spinach and Half and Half';

const COOK_GARLIC = 'Cook Garlic';
const COOK_FLOUR = 'Cook Flour';
const COOK_CHICKEN_BROTH = 'Cook Chicken Broth';
const COOK_GNOCCHI = 'Cook Gnocchi';
const COOK_SPINACH = 'Cook Spinach';

module.exports = {
    wip: true,
    cardName: 'Chicken Gnocchi Soup',
    name: 'Chicken Gnocchi Soup',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SOUP],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Chicken Gnocchi Soup', 
            link: 'https://www.thepioneerwoman.com/food-cooking/recipes/a40772957/chicken-gnocchi-soup-recipe/',
            authors: ['Sloane Layton'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...CARROT, amount: 3, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'peeled and chopped', section: SECTIONS.VEGGIES },
        { ...CELERY, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'chopped', section: SECTIONS.VEGGIES },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'chopped', section: GARLIC_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_SECTION },
        { ...CHICKEN_BROTH, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHICKEN_BROTH_SECTION },
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1 inch pieces', section: SECTIONS.CHICKEN },
        { ...THYME, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GNOCCHI, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'dried', section: GNOCCHI_SECTION },
        { ...BABY_SPINACH, amount: 5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'chopped', section: SPINACH_AND_CREAM_SECTIONS },
        { ...HALF_AND_HALF, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SPINACH_AND_CREAM_SECTIONS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        DUTCH_OVEN_POT,
    ],
    directions: [
        { step: `Over medium heat, heat oil in a dutch oven pot.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Add the rest of the "${SECTIONS.VEGGIES}" section ingredients.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Cook until the veggies are softened, stirring occasionally (about 9 to 11 minutes).`, section: SECTIONS.COOK_VEGGIES },
        { step: `Add garlic. Cook for 1 minute.`, section: COOK_GARLIC },
        { step: `Add flour. Cook and stir constatntly until vegetables are coated (about 1 minute).`, section: COOK_FLOUR },
        { step: `Slowly stir in chicken broth. Bring to a simmer.`, section: COOK_CHICKEN_BROTH },
        { step: `Add the "${SECTIONS.CHICKEN}" section ingredients. Bring to a simmer.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Reduce to medium-low heat. Simmer until the chicken is cooked (about 5 minutes).`, section: SECTIONS.COOK_CHICKEN },
        { step: `Add gnocchi. Cover and cook until tender and fluffy, stirring occasionally (about 4 to 5 minutes).`, section: COOK_GNOCCHI },
        { step: `Add the "${SPINACH_AND_CREAM_SECTIONS}" section ingredients. Cook and stir until spinach is tender (about 1 to 2 minutes).`, section: COOK_SPINACH },
        { step: `Remove from heat. Season with salt and pepper as desired.`, section: COOK_SPINACH },
        { step: `Enjoy this soup dish.`, section: SECTIONS.SERVE },
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