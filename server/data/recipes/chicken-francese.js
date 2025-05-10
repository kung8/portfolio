// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, EGG, BONELESS_AND_SKINLESS_CHICKEN_BREAST, OLIVE_OIL, CHICKEN_BROTH, WHITE_WINE, UNSALTED_BUTTER, LEMON, PARSLEY, SALT, BLACK_PEPPER, WATER, CORNSTARCH } = require('./ingredients');

const CHICKEN_SECTION = 'Chicken';
const SAUCE_SECTION = 'Sauce';
const CORNSTARCH_MIXTURE_SECTION = 'Cornstarch Mixture';

const COOK_CHICKEN = 'Cook Chicken';
const PREP_SAUCE = 'Prep Sauce';
const BAKE_CHICKEN = 'Bake Chicken';

module.exports = {
    wip: true,
    cardName: 'Chicken Francese',
    name: 'Chicken Francese',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN, PROTEIN.EGG],
    type: [TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chicken Francese', link: 'https://www.allrecipes.com/recipe/16681/delicious-easy-chicken-francese/' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHICKEN_SECTION },
        { ...EGG, amount: 4, unit: '', additionalDetails: 'beaten', section: CHICKEN_SECTION },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'halved', section: CHICKEN_SECTION },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHICKEN_SECTION },
        { ...CHICKEN_BROTH, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...WHITE_WINE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...LEMON, amount: 2, unit: '', additionalDetails: 'juiced', section: SAUCE_SECTION },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'chopped', section: SAUCE_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SAUCE_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SAUCE_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CORNSTARCH_MIXTURE_SECTION },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CORNSTARCH_MIXTURE_SECTION },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'small bowls' },
        { name: 'large pan' },
        { name: 'plate' },
        { name: 'paper towels' },
        { name: 'saucepan' },
        { name: 'baking dish' },
    ],
    directions: [
        { step: 'Prepare dredging stations: (1) flour and (2) eggs.', section: COOK_CHICKEN },
        { step: 'Dredge chicken in flour. Shake excess off.', section: COOK_CHICKEN },
        { step: 'Dredge into egg. Let excess drip.', section: COOK_CHICKEN },
        { step: 'Dredge in flour again.', section: COOK_CHICKEN },
        { step: 'Line a plate with paper towel.', section: COOK_CHICKEN },
        { step: 'Over medium heat, heat oil in a pan.', section: COOK_CHICKEN },
        { step: 'Add chicken and saute until almost cooked through (about 4 minutes per side).', section: COOK_CHICKEN },
        { step: 'Transfer to the plate.', section: COOK_CHICKEN },
        { step: 'Preheat oven to 300ºF.', section: PREP_SAUCE },
        { step: 'Over medium-low heat, combine the "Sauce" section ingredients.', section: PREP_SAUCE },
        { step: 'Cook until butter melts, stirring occasionally.', section: PREP_SAUCE },
        { step: 'In a small bowl, combine cornstarch and water.', section: PREP_SAUCE },
        { step: 'Add cornstarch mixture to the saucepan. Cook until slightly thickens (about 2 to 3 minutes).', section: PREP_SAUCE },
        { step: 'Add chicken and sauce to the baking dish.', section: BAKE_CHICKEN },
        { step: 'Bake until the chicken is no longer pink and juices are clear (about 10 to 15 minutes).', section: BAKE_CHICKEN },
        { step: 'Enjoy this dish.', section: SECTIONS.SERVE },
    ]
};