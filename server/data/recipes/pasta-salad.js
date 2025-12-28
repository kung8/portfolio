const salad1 = '../assets/Products/pasta-salad-1.jpeg';
const salad2 = '../assets/Products/pasta-salad-2.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BABY_ARUGULA, BASIL_LEAF, BLACK_PEPPER, CHERRY_TOMATO, CHICKPEA, CUCUMBER, DIJON_MUSTARD, FETA_CHEESE, FUSILLI_PASTA, GARLIC, ITALIAN_SEASONING, LARGE_POT, LEMON_JUICE, MINT_LEAF, MIXING_BOWL, OLIVE_OIL, PARSLEY, PINE_NUTS, RED_PEPPER_FLAKES, SALT, SMALL_BOWL, STOVE } = require('./ingredients');

module.exports = {
    cardName: 'Pasta Salad',
    name: 'Pasta Salad',
    img: salad2,
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BOIL, METHODS.MIX],
    type: [TYPES.NOODLE, TYPES.SALAD, TYPES.VEGETABLE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVINGS },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Pasta Salad',
            link: 'https://www.loveandlemons.com/pasta-salad/',
            authors: ['Jeanine'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...FUSILLI_PASTA, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'uncooked', section: SECTIONS.SALAD },
        { ...CHERRY_TOMATO, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'halved', section: SECTIONS.SALAD },
        { ...CHICKPEA, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'drained and rinsed', section: SECTIONS.SALAD },
        { ...BABY_ARUGULA, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SALAD },
        { ...CUCUMBER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'thin slices and halved', section: SECTIONS.SALAD },
        { ...FETA_CHEESE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'crumbled', section: SECTIONS.SALAD },
        { ...BASIL_LEAF, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.SALAD },
        { ...PARSLEY, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'minced', section: SECTIONS.SALAD },
        { ...MINT_LEAF, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.SALAD },
        { ...PINE_NUTS, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SALAD },

        { ...OLIVE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...LEMON_JUICE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.DRESSING },
        { ...ITALIAN_SEASONING, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...RED_PEPPER_FLAKES, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },

        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPINGS },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPINGS },
        { ...LEMON_JUICE, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPINGS },
        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        SMALL_BOWL,
        MIXING_BOWL,
    ],
    directions: [
        { step: `Over medium-high heat, bring a large pot of salted water to a boil.`, section: SECTIONS.COOK_PASTA },
        { step: `Cook pasta to al dente.`, section: SECTIONS.COOK_PASTA },
        { step: `Drain.`, section: SECTIONS.COOK_PASTA },
        { step: `Toss it in a little oil.`, section: SECTIONS.COOK_PASTA },
        { step: `Let it cool to room temperature.`, section: SECTIONS.COOK_PASTA },

        { step: `In a small bowl, combine the "${SECTIONS.DRESSING}" section ingredients.`, section: SECTIONS.PREP_DRESSING, img: salad1 },

        { step: `In a mixing bowl, combine the "${SECTIONS.SALAD}" section ingredients.`, section: SECTIONS.ASSEMBLE },
        { step: `Pour the dressing over the salad. Toss.`, section: SECTIONS.ASSEMBLE },

        { step: `Enjoy this simple pasta salad dish with more toppings if desired!`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The dressing will have a strong flavor, but once it is combined with the pasta salad it will mellow out.', section: '' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};