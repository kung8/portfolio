// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CHICKEN_BROTH, GARLIC, KALE, LARGE_POT, MIXING_BOWL, OLIVE_OIL, SALT, SLICED_ALMONDS, STOVE, UNSALTED_BUTTER, WHITE_RICE } = require('./ingredients');

const KALE_SECTION = 'Kale';
const GARLIC_BUTTER_RICE_SECTION = 'Garlic Butter Rice';

module.exports = {
    wip: true,
    cardName: 'Garlic Butter Rice with Kale',
    name: 'Garlic Butter Rice with Kale',
    img: '',
    recipeAuthors: ['Nagi Maehashi'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    type: [TYPES.RICE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Garlic Butter Rice with Kale', link: 'https://www.recipetineats.com/garlic-butter-rice-with-kale-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...KALE, amount: 7, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'just leaves', section: KALE_SECTION },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: KALE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: KALE_SECTION },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: KALE_SECTION },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: GARLIC_BUTTER_RICE_SECTION },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: GARLIC_BUTTER_RICE_SECTION },
        { ...WHITE_RICE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GARLIC_BUTTER_RICE_SECTION },
        { ...CHICKEN_BROTH, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GARLIC_BUTTER_RICE_SECTION },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPINGS },
        { ...SLICED_ALMONDS, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        LARGE_POT,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${KALE_SECTION}" section ingredients. Let it marinate.`, section: '' },
        { step: 'Over medium-high heat, melt butter in a large pot.', section: '' },
        { step: 'Add garlic. Stir and cook until fragrant (about 1 minute).', section: '' },
        { step: 'Add rice. Stir for 10 seconds.', section: '' },
        { step: 'Add broth. Stir and cover.', section: '' },
        { step: 'Turn heat to medium. Cook until liquid is absorbed (about 12 to 15 minutes).', section: '' },
        { step: 'Add kale on top of the rice. Re-cover and remove from heat.', section: '' },
        { step: 'Let the rice rest for 10 to 15 minutes.', section: '' },
        { step: 'Fluff rice with a fork and stir in kale.', section: '' },
        { step: 'Stir in butter, almonds and salt and pepper as desired.', section: '' },
        { step: '', section: '' },
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
            instruction: 'Microwave until heated through, stirring halfway.',
        },
    ],
    mealPrep: true,
};