const kale1 = '../assets/Products/butter-rice-with-kale-1.jpeg';
const kale2 = '../assets/Products/butter-rice-with-kale-2.jpeg';
const kale3 = '../assets/Products/butter-rice-with-kale-3.jpeg';
const kale4 = '../assets/Products/butter-rice-with-kale-4.jpeg';
const kale5 = '../assets/Products/butter-rice-with-kale-5.jpeg';
const kale6 = '../assets/Products/butter-rice-with-kale-6.jpeg';
const kale7 = '../assets/Products/butter-rice-with-kale-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CHICKEN_BROTH, GARLIC, KALE, LARGE_POT, MIXING_BOWL, OLIVE_OIL, SALT, SLICED_ALMONDS, STOVE, UNSALTED_BUTTER, WHITE_RICE } = require('./ingredients');

const KALE_SECTION = 'Kale';
const GARLIC_BUTTER_RICE_SECTION = 'Garlic Butter Rice';
const PREP_KALE = 'Prep Kale';

module.exports = {
    cardName: 'Butter Rice with Kale',
    name: 'Garlic Butter Rice with Kale',
    img: kale6,
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
        {
            label: 'Garlic Butter Rice with Kale',
            link: 'https://www.recipetineats.com/garlic-butter-rice-with-kale-recipe/',
            authors: ['Nagi Maehashi'],
            finder: 'Kevin Ung',
        }
    ],
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
        { step: `In a mixing bowl, combine the "${KALE_SECTION}" section ingredients. Let it marinate.`, section: PREP_KALE },
        { step: `Over medium-high heat, melt butter in a large pot.`, section: SECTIONS.COOK_RICE },
        { step: `Add garlic. Stir and cook until fragrant (about 1 minute).`, section: SECTIONS.COOK_RICE, img: kale1 },
        { step: `Add rice. Stir for 10 seconds.`, section: SECTIONS.COOK_RICE, img: kale2 },
        { step: `Add broth. Stir and cover.`, section: SECTIONS.COOK_RICE },
        { step: `Turn heat to medium. Cook until liquid is absorbed (about 12 to 15 minutes).`, section: SECTIONS.COOK_RICE, img: kale3 },
        { step: `Add kale on top of the rice. Re-cover and remove from heat.`, section: SECTIONS.COOK_RICE, img: kale4 },
        { step: `Let the rice rest for 10 to 15 minutes.`, section: SECTIONS.COOK_RICE },
        { step: `Fluff rice with a fork and stir in kale.`, section: SECTIONS.COOK_RICE },
        { step: `Stir in butter, almonds and salt and pepper as desired.`, section: SECTIONS.COOK_RICE, img: kale5 },
        { step: `Enjoy this with your favorite protein.`, section: SECTIONS.SERVE, img: kale7 },
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