const pomodoro1 = '../assets/Products/pasta-pomodoro-1.jpeg';
const pomodoro2 = '../assets/Products/pasta-pomodoro-2.jpeg';
const pomodoro3 = '../assets/Products/pasta-pomodoro-3.jpeg';
const pomodoro4 = '../assets/Products/pasta-pomodoro-4.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ANGEL_HAIR_PASTA, BAKING_PAN, BALSAMIC_VINEGAR, BASIL_LEAF, BLACK_PEPPER, BREADCRUMBS, CHICKEN_BROTH, EGG, FRYING_PAN, GARLIC, GROUND_BEEF, ITALIAN_SEASONING, OLIVE_OIL, ONION_POWDER, OVEN, PARMESAN_CHEESE, POT, RED_PEPPER_FLAKES, ROMA_TOMATO, SALT, STOVE, YELLOW_ONION } = require('./ingredients');

const MEATBALL_SECTION = 'Meatball';
const COOK_MEATBALLS = 'Cook Meatballs';

module.exports = {
    cardName: 'Pasta Pomodoro',
    name: 'Pasta Pomodoro',
    img: pomodoro4,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.SIMMER],
    type: [TYPES.PASTA],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Pasta Pomodoro',
            link: 'https://www.allrecipes.com/recipe/23847/pasta-pomodoro/',
            authors: ['Dinah'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: MEATBALL_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: MEATBALL_SECTION },
        { ...BREADCRUMBS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MEATBALL_SECTION },
        { ...ITALIAN_SEASONING, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MEATBALL_SECTION },
        { ...ONION_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MEATBALL_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: MEATBALL_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: MEATBALL_SECTION },

        { ...ANGEL_HAIR_PASTA, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.PASTA },
        { ...OLIVE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...ROMA_TOMATO, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.SAUCE },
        { ...BALSAMIC_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHICKEN_BROTH, amount: 10.75, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RED_PEPPER_FLAKES, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...BASIL_LEAF, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: SECTIONS.SAUCE },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        BAKING_PAN,
        POT,
        FRYING_PAN,
    ],
    directions: [
        { step: `Preheat oven to 350ºF.`, section: COOK_MEATBALLS },
        { step: `In a mixing bowl, combine the "${MEATBALL_SECTION}" section ingredients.`, section: COOK_MEATBALLS },
        { step: `Line a baking sheet with parchment paper.`, section: COOK_MEATBALLS },
        { step: `Form 1.5 inch balls and place in baking pan.`, section: COOK_MEATBALLS, img: pomodoro1 },
        { step: `Bake until cooked through (about 20 to 25 minutes).`, section: COOK_MEATBALLS },
        { step: `Optionally, broil for 2-3 minutes to brown the outside. Set aside.`, section: COOK_MEATBALLS },

        { step: `Bring a pot of water and salt to a boil.`, section: SECTIONS.COOK_PASTA },
        { step: `Add pasta and cook until al dente (about 8 minutes or per package instructions).`, section: SECTIONS.COOK_PASTA },
        { step: `Drain and set aside.`, section: SECTIONS.COOK_PASTA },

        { step: `Over high heat, add olive oil to a frying pan.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add onions and garlic. Saute until browned.`, section: SECTIONS.COOK_SAUCE },
        { step: `Reduce to medium-high heat.`, section: SECTIONS.COOK_SAUCE },
        { step: `Mix in tomatoes, vinegar and chicken broth. Simmer for about 8 minutes.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add spices and herb. Mix.`, section: SECTIONS.COOK_SAUCE, img: pomodoro2 },

        { step: `Add pasta and toss.`, section: SECTIONS.ASSEMBLE },
        { step: `Simmer for 5 minutes.`, section: SECTIONS.ASSEMBLE, img: pomodoro3 },

        { step: `Serve warm and topped with grated cheese.`, section: SECTIONS.SERVE },
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
            instruction: 'Microwave in 30 second intervals, stirring in between, until heated through.',
        },
    ],
    mealPrep: true,
};