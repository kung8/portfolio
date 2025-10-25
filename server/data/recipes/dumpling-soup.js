const dumpling1 = '../assets/Products/dumpling-soup-1.jpeg';
const dumpling2 = '../assets/Products/dumpling-soup-2.jpeg';
const dumpling3 = '../assets/Products/dumpling-soup-3.jpeg';
const dumpling4 = '../assets/Products/dumpling-soup-4.jpeg';
const dumpling5 = '../assets/Products/dumpling-soup-5.jpeg';
const dumpling6 = '../assets/Products/dumpling-soup-6.jpeg';
const dumpling7 = '../assets/Products/dumpling-soup-7.jpeg';
const dumpling8 = '../assets/Products/dumpling-soup-8.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BABY_SPINACH, CARROT, CHICKEN_BROTH, CHILI_OIL, DUMPLINGS, GARLIC, GREEN_ONION, GROUND_GINGER, LARGE_POT, LIGHT_SOY_SAUCE, MISO_PASTE, SESAME_OIL, SMALL_BOWL, SRIRACHA_SAUCE, STOVE, VEGETABLE_OIL } = require('./ingredients');

const MISO_PASTE_MIXTURE = 'Miso Paste Mixture';

module.exports = {
    cardName: 'Dumpling Soup',
    name: 'Dumpling Soup',
    img: dumpling7,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN],
    method: [METHODS.SIMMER],
    type: [TYPES.SOUP],
    allergies: [ALLERGIES.SESAME],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 2, unit: YIELD_UNITS.QUART },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Dumpling Soup', 
            link: 'https://www.thepioneerwoman.com/food-cooking/recipes/a44190393/dumpling-soup-recipe/',
            authors: ['Leah Perez'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...SESAME_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.VEGGIES },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.VEGGIES },
        { ...GROUND_GINGER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...GREEN_ONION, amount: 5, unit: '', additionalDetails: 'thinly sliced, separate the whites and greens', section: SECTIONS.VEGGIES },

        { ...MISO_PASTE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MISO_PASTE_MIXTURE },
        { ...CHICKEN_BROTH, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MISO_PASTE_MIXTURE },

        { ...CHICKEN_BROTH, amount: 11 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SOUP },
        { ...DUMPLINGS, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.SOUP },
        { ...BABY_SPINACH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SOUP },
        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SOUP },

        { ...SRIRACHA_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHILI_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LIGHT_SOY_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        SMALL_BOWL,
    ],
    directions: [
        { step: 'Over medium heat, heat oils in a large pot.', section: SECTIONS.MAKE_SOUP },
        { step: `Add all the "${SECTIONS.VEGGIES}" section ingredients except the green parts of the green onions (This will be added later as a topping).`, section: SECTIONS.MAKE_SOUP, img: dumpling1 },
        { step: 'Cook and stir until softened (about 2 to 3 minutes).', section: SECTIONS.MAKE_SOUP },

        { step: `In a small bowl, combine the "${MISO_PASTE_MIXTURE}" section ingredients.`, section: SECTIONS.MAKE_SOUP, img: dumpling2 },
        { step: 'Add the miso paste mixture and the broth to the pot. Bring to a boil.', section: SECTIONS.MAKE_SOUP, img: dumpling3 },

        { step: 'Add dumpling. Bring to a simmer. Cook until dumplings are heated through (about 3 to 5 minutes).', section: SECTIONS.MAKE_SOUP, img: dumpling4 },

        { step: 'Add spinach. Cook until it wilts (about 1 to 2 minutes).', section: SECTIONS.MAKE_SOUP, img: dumpling5 },

        { step: 'Add soy sauce and the green parts of the green onions.', section: SECTIONS.MAKE_SOUP, img: dumpling6 },
        { step: 'Serve hot topped with your preferred condiments.', section: SECTIONS.SERVE, img: dumpling8 },
    ],
    notes: [
        { note: 'Chili oil makes it so good!' },
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