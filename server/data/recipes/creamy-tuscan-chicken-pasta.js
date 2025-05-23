// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, SALT, BLACK_PEPPER, OLIVE_OIL, UNSALTED_BUTTER, GARLIC, SUN_DRIED_TOMATOES, ITALIAN_SEASONING, HEAVY_CREAM, MILK, PARMESAN_CHEESE, BABY_SPINACH, PENNE } = require('./ingredients');

const CHICKEN_SECTION = 'Chicken';
const SAUCE_SECTION = 'Sauce';
const PASTA_SECTION = 'Pasta';

const COOK_CHICKEN = 'Cook Chicken';
const MAKE_SAUCE = 'Make Sauce';
const COOK_PASTA = 'Cook Pasta';
const COMBINE = 'Combine';

module.exports = {
    wip: true,
    cardName: 'Creamy Tuscan Chicken',
    name: 'Creamy Tuscan Chicken Pasta',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.SIMMER, METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PASTA],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Creamy Tuscan Chicken Pasta', link: 'https://cravinghomecooked.com/creamy-tuscan-chicken-pasta/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: CHICKEN_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SECTION },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN_SECTION },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SAUCE_SECTION },
        { ...SUN_DRIED_TOMATOES, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'drained', section: SAUCE_SECTION },
        { ...ITALIAN_SEASONING, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },

        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PASTA_SECTION },
        { ...MILK, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PASTA_SECTION },
        { ...PARMESAN_CHEESE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: PASTA_SECTION },
        { ...PENNE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PASTA_SECTION },

        { ...BABY_SPINACH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'dutch oven' },
        { name: 'cutting board' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Pat chicken dry.', section: COOK_CHICKEN },
        { step: 'Season chicken with salt and pepper.', section: COOK_CHICKEN },
        { step: 'Over medium-high heat, heat olive oil in a dutch oven pot.', section: COOK_CHICKEN },
        { step: 'Add chicken to pot. Cook until both sides are browned (for about 3 to 4 minutes).', section: COOK_CHICKEN },
        { step: 'Remove the chicken from the pot and place on a cutting board.', section: COOK_CHICKEN },
        { step: 'Cut the chicken into 1 inch pieces. Set aside.', section: COOK_CHICKEN },

        { step: 'Over medium heat, melt butter in the dutch oven pot.', section: MAKE_SAUCE },
        { step: 'Add the rest of the "Sauce" section ingredients.', section: MAKE_SAUCE },
        { step: 'Saute until it becomes fragrant.', section: MAKE_SAUCE },

        { step: 'Add the "Pasta" section ingredients to the pot. Stir.', section: COOK_PASTA },
        { step: 'Cook until the pasta is al dente (for about 10 minutes). Stir occasionally.', section: COOK_PASTA },

        { step: 'Add chicken and cook until the chicken is almost cooked through.', section: COMBINE },
        { step: 'Add the spinach and cook until it wilts (about 1 to 2 minutes).', section: COMBINE },

        { step: 'Enjoy this Italian dish.', section: SECTIONS.SERVE },
    ]
};