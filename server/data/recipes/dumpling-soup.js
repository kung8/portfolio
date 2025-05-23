const dumpling1 = '../assets/Products/dumpling-soup-1.jpeg';
const dumpling2 = '../assets/Products/dumpling-soup-2.jpeg';
const dumpling3 = '../assets/Products/dumpling-soup-3.jpeg';
const dumpling4 = '../assets/Products/dumpling-soup-4.jpeg';
const dumpling5 = '../assets/Products/dumpling-soup-5.jpeg';
const dumpling6 = '../assets/Products/dumpling-soup-6.jpeg';
const dumpling7 = '../assets/Products/dumpling-soup-7.jpeg';
const dumpling8 = '../assets/Products/dumpling-soup-8.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { VEGETABLE_OIL, SESAME_OIL, CARROT, GREEN_ONION, GARLIC, GROUND_GINGER, CHICKEN_BROTH, DUMPLINGS, BABY_SPINACH, LIGHT_SOY_SAUCE, SRIRACHA_SAUCE, MISO_PASTE, CHILI_OIL } = require('./ingredients');

const VEGGIES_SECTION = 'Veggies';
const MISO_PASTE_MIXTURE = 'Miso Paste Mixture';
const SOUP_SECTION = 'Soup';

const MAKE_SOUP = 'Make Soup';

module.exports = {
    cardName: 'Dumpling Soup',
    name: 'Dumpling Soup',
    img: dumpling7,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN],
    method: [METHODS.SIMMER],
    type: [TYPES.SOUP],
    yields: { amount: 2, unit: YIELD_UNITS.QUART },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Dumpling Soup', link: 'https://www.thepioneerwoman.com/food-cooking/recipes/a44190393/dumpling-soup-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGGIES_SECTION },
        { ...SESAME_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VEGGIES_SECTION },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: VEGGIES_SECTION },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: VEGGIES_SECTION },
        { ...GROUND_GINGER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VEGGIES_SECTION },
        { ...GREEN_ONION, amount: 5, unit: '', additionalDetails: 'thinly sliced, separate the whites and greens', section: VEGGIES_SECTION },

        { ...MISO_PASTE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MISO_PASTE_MIXTURE },
        { ...CHICKEN_BROTH, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MISO_PASTE_MIXTURE },

        { ...CHICKEN_BROTH, amount: 11 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SOUP_SECTION },
        { ...DUMPLINGS, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SOUP_SECTION },
        { ...BABY_SPINACH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SOUP_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SOUP_SECTION },

        { ...SRIRACHA_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHILI_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LIGHT_SOY_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'Over medium heat, heat oils in a large pot.', section: MAKE_SOUP },
        { step: 'Add all the "Veggies" section ingredients except the green parts of the green onions (This will be added later as a topping).', section: MAKE_SOUP, img: dumpling1 },
        { step: 'Cook and stir until softened (about 2 to 3 minutes).', section: MAKE_SOUP },

        { step: 'In a small bowl, combine the "Miso Paste Mixture" section ingredients.', section: MAKE_SOUP, img: dumpling2 },
        { step: 'Add the miso paste mixture and the broth to the pot. Bring to a boil.', section: MAKE_SOUP, img: dumpling3 },

        { step: 'Add dumpling. Bring to a simmer. Cook until dumplings are heated through (about 3 to 5 minutes).', section: MAKE_SOUP, img: dumpling4 },

        { step: 'Add spinach. Cook until it wilts (about 1 to 2 minutes).', section: MAKE_SOUP, img: dumpling5 },

        { step: 'Add soy sauce and the green parts of the green onions.', section: MAKE_SOUP, img: dumpling6 },
        { step: 'Serve hot topped with your preferred condiments.', section: SECTIONS.SERVE, img: dumpling8 },
    ],
    notes: [
        { note: 'Chili oil makes it so good!' },
    ]
};