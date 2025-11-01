// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CHICKEN_BROTH, PICANTE_SAUCE, VEGETABLE_OIL, WHITE_RICE, YELLOW_ONION } = require('./ingredients');

const RICE_SECTION = 'Rice';
const COOK_RICE = 'Cook Rice';

module.exports = {
    wip: true,
    cardName: 'Spanish Rice',
    name: 'Spanish Rice',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.LATIN, GENRES.SPANISH],
    method: [METHODS.SIMMER],
    type: [TYPES.RICE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Spanish Rice', 
            link: 'https://www.allrecipes.com/recipe/33385/best-spanish-rice/',
            authors: ['Angela Sims'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RICE_SECTION },
        { ...YELLOW_ONION, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: RICE_SECTION },
        { ...WHITE_RICE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'uncooked', section: RICE_SECTION },
        { ...CHICKEN_BROTH, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_SECTION },
        { ...PICANTE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RICE_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot with lid' },
    ],
    directions: [
        { step: 'Over medium heat, heat oil to a large pot.', section: COOK_RICE },
        { step: 'Add onion. Cook and stir until tender (about 5 minutes).', section: COOK_RICE },
        { step: 'Add rice. Cook and stir until rice is golden brown.', section: COOK_RICE },
        { step: 'Add chicken broth and picante sauce.', section: COOK_RICE },
        { step: 'Turn heat to low.', section: COOK_RICE },
        { step: 'Cover and simmer until there is no more liquid (about 15 to 20 minutes).', section: COOK_RICE },
        { step: 'Enjoy this with your favorite toppings or main dishes.', section: SECTIONS.SERVE },
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