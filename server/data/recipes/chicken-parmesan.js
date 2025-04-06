// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, BLACK_PEPPER, EGG, PANKO_BREADCRUMBS, PARMESAN_CHEESE, ALL_PURPOSE_FLOUR, OLIVE_OIL, TOMATO_SAUCE, MOZZARELLA_CHEESE, BASIL_LEAF, PROVOLONE_CHEESE, SALT } = require('./ingredients');

const CHICKEN_SECTION = 'Chicken';
const DREDGING_SECTION = 'Dredging';
const FRYING_SECTION = 'Frying';
const BAKE_SECTION = 'Baking';

const PREP_CHICKEN = 'Prep Chicken';
const FRY_CHICKEN = 'Fry Chicken';
const BAKE_CHICKEN = 'Bake Chicken';

module.exports = {
    wip: true,
    cardName: 'Chicken Parmesan',
    name: 'Chicken Parmesan',
    img: '',
    recipeAuthor: 'John Mitzewich',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE, METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chicken Parmesan', link: 'https://www.allrecipes.com/recipe/223042/chicken-parmesan/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 4, unit: '', additionalDetails: 'halved', section: CHICKEN_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: CHICKEN_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: CHICKEN_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DREDGING_SECTION },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: DREDGING_SECTION },
        { ...PANKO_BREADCRUMBS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING_SECTION },
        { ...PARMESAN_CHEESE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING_SECTION },
        { ...OLIVE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FRYING_SECTION },
        { ...TOMATO_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BAKE_SECTION },
        { ...MOZZARELLA_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BAKE_SECTION },
        { ...BASIL_LEAF, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BAKE_SECTION },
        { ...PROVOLONE_CHEESE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BAKE_SECTION },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BAKE_SECTION },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BAKE_SECTION },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'ziploc bag' },
        { name: 'meat mallet' },
        { name: 'strainer' },
        { name: 'small bowls' },
        { name: 'large pan' },
        { name: 'baking pan' },
    ],
    directions: [
        { step: 'Preheat the oven to 450ºF.', type: PREP_CHICKEN },
        { step: 'Place the halved chicken breast in a large ziploc bag and on a solid, level surface.', type: PREP_CHICKEN },
        { step: 'Pound the chicken with the smooth side of a meat mallet until it is 1/2 inch thick.', type: PREP_CHICKEN },
        { step: 'Generously season the chicken with salt and pepper.', type: PREP_CHICKEN },
        { step: 'Sprinkle flour over the chicken using a strainer.', type: PREP_CHICKEN },
        { step: 'Set up two bowls for the dredging station: (1) egg and (2) panko breadcrumbs and parmesan.', type: PREP_CHICKEN },
        { step: 'Dip the chicken into the egg dredge then into the breadcrumb mixture. Make sure to get both sides.', type: PREP_CHICKEN },
        { step: 'Allow the chicken to rest for 10 to 15 minutes. This helps the breading adhere to the chicken.', type: PREP_CHICKEN },
        { step: 'Over medium-high heat, heat 1/2 inch olive oil in a large pan.', type: FRY_CHICKEN },
        { step: 'Add the chicken to the hot oil. Cook until golden (about 2 minutes per side). It won\'t be fully cooked, that\'s okay since it\'ll be finished cooking in the oven.', type: FRY_CHICKEN },
        { step: 'Transfer chicken to a baking pan.', type: FRY_CHICKEN },
        { step: 'Top each breast with tomato sauce, mozzarella, basil and provolone.', type: BAKE_CHICKEN },
        { step: 'Sprinkle parmesan and drizzle olive oil.', type: BAKE_CHICKEN },
        { step: 'Bake until the cheese is browned and bubbly and chicken is cooked through (about 15 to 20 minutes).', type: BAKE_CHICKEN },
        { step: 'Enjoy this with pasta or vegetables.', type: SECTIONS.SERVE },
    ]
};