const pasta1 = '../assets/Products/creamy-tuscan-chicken-pasta-1.jpeg';
const pasta2 = '../assets/Products/creamy-tuscan-chicken-pasta-2.jpeg';
const pasta3 = '../assets/Products/creamy-tuscan-chicken-pasta-3.jpeg';
const pasta4 = '../assets/Products/creamy-tuscan-chicken-pasta-4.jpeg';
const pasta5 = '../assets/Products/creamy-tuscan-chicken-pasta-5.jpeg';
const pasta6 = '../assets/Products/creamy-tuscan-chicken-pasta-6.jpeg';
const pasta7 = '../assets/Products/creamy-tuscan-chicken-pasta-7.jpeg';
const pasta8 = '../assets/Products/creamy-tuscan-chicken-pasta-8.jpeg';
const pasta9 = '../assets/Products/creamy-tuscan-chicken-pasta-9.jpeg';
const pasta10 = '../assets/Products/creamy-tuscan-chicken-pasta-10.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, SALT, BLACK_PEPPER, OLIVE_OIL, UNSALTED_BUTTER, GARLIC, SUN_DRIED_TOMATOES, ITALIAN_SEASONING, HEAVY_CREAM, MILK, PARMESAN_CHEESE, BABY_SPINACH, PENNE } = require('./ingredients');

const COMBINE = 'Combine';

module.exports = {
    cardName: 'Creamy Tuscan Chicken',
    name: 'Creamy Tuscan Chicken Pasta',
    img: pasta9,
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
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...SUN_DRIED_TOMATOES, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'drained', section: SECTIONS.SAUCE },
        { ...ITALIAN_SEASONING, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...HEAVY_CREAM, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.PASTA },
        { ...MILK, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.PASTA },
        { ...PARMESAN_CHEESE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: SECTIONS.PASTA },
        { ...PENNE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.PASTA },

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
        { step: 'Pat chicken dry.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Season chicken with salt and pepper.', section: SECTIONS.COOK_CHICKEN, img: pasta1 },
        { step: 'Over medium-high heat, heat olive oil in a dutch oven pot.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Add chicken to pot. Cook until both sides are browned (for about 3 to 4 minutes).', section: SECTIONS.COOK_CHICKEN, img: pasta2 },
        { step: 'Remove the chicken from the pot and place on a cutting board.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Cut the chicken into 1 inch pieces. Set aside.', section: SECTIONS.COOK_CHICKEN, img: pasta3 },

        { step: 'Over medium heat, melt butter in the dutch oven pot.', section: SECTIONS.COOK_SAUCE },
        { step: `Add the rest of the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.COOK_SAUCE, img: pasta4 },
        { step: 'Saute until it becomes fragrant.', section: SECTIONS.COOK_SAUCE },

        { step: `Add the "${SECTIONS.PASTA}" section ingredients to the pot. Stir.`, section: SECTIONS.COOK_PASTA, img: pasta5 },
        { step: 'Cook until the pasta is al dente (for about 10 minutes). Stir occasionally.', section: SECTIONS.COOK_PASTA, img: pasta6 },

        { step: 'Add chicken and cook until the chicken is almost cooked through.', section: COMBINE, img: pasta7 },
        { step: 'Add the spinach and cook until it wilts (about 1 to 2 minutes).', section: COMBINE, img: pasta8 },

        { step: 'Enjoy this Italian dish warm.', section: SECTIONS.SERVE, img: pasta10 },
    ],
    notes: [
        { note: 'This dish was really good but a little dry which caused it to stick to the pot. I have increased the liquids ratio 3:2 from the original recipe. If you have the time I think the "Marry Me Chicken" recipe was overall better, but for a quicker meal this turned out well.' },
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