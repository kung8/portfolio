const parmesan1 = '../assets/Products/chicken-parmesan-1.jpeg';
const parmesan2 = '../assets/Products/chicken-parmesan-2.jpeg';
const parmesan3 = '../assets/Products/chicken-parmesan-3.jpeg';
const parmesan4 = '../assets/Products/chicken-parmesan-4.jpeg';
const parmesan5 = '../assets/Products/chicken-parmesan-5.jpeg';
const parmesan6 = '../assets/Products/chicken-parmesan-6.jpeg';
const parmesan7 = '../assets/Products/chicken-parmesan-7.jpeg';
const parmesan8 = '../assets/Products/chicken-parmesan-8.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_PAN, BAKING_SHEET, BASIL_LEAF, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_BREAST, COOLING_RACK, EGG, LARGE_PAN, MEAT_MALLET, MOZZARELLA_CHEESE, OLIVE_OIL, OVEN, PANKO_BREADCRUMBS, PARMESAN_CHEESE, PROVOLONE_CHEESE, SALT, SMALL_BOWL, STOVE, STRAINER, TOMATO_SAUCE, ZIPLOC_BAG } = require('./ingredients');

const CHICKEN_SECTION = 'Chicken';
const DREDGING_SECTION = 'Dredging';
const FRYING_SECTION = 'Frying';
const BAKE_SECTION = 'Baking';

const PREP_CHICKEN = 'Prep Chicken';
const FRY_CHICKEN = 'Fry Chicken';
const BAKE_CHICKEN = 'Bake Chicken';

module.exports = {
    cardName: 'Chicken Parmesan',
    name: 'Chicken Parmesan',
    img: parmesan8,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE, METHODS.DEEP_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    allergies: [ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Chicken Parmesan', 
            link: 'https://www.allrecipes.com/recipe/223042/chicken-parmesan/',
            authors: ['John Mitzewich'],
            finder: 'Kevin Ung', 
        }
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
        OVEN,
        STOVE,
    ],
    supplies: [
        { ...ZIPLOC_BAG, additionalDetails: 'gallon-size' },
        MEAT_MALLET,
        STRAINER,
        { ...SMALL_BOWL, amount: 2 },
        LARGE_PAN,
        BAKING_SHEET,
        COOLING_RACK,
        BAKING_PAN,
    ],
    directions: [
        { step: 'Preheat the oven to 450ºF.', section: PREP_CHICKEN },
        { step: 'Place the halved chicken breast in a large ziploc bag and on a solid, level surface.', section: PREP_CHICKEN },
        { step: 'Pound the chicken with the smooth side of a meat mallet until it is 1/2 inch thick.', section: PREP_CHICKEN },
        { step: 'Generously season the chicken with salt and pepper.', section: PREP_CHICKEN, img: parmesan1 },
        { step: 'Sprinkle flour over the chicken using a strainer.', section: PREP_CHICKEN },
        { step: 'Set up two bowls for the dredging station: (1) egg and (2) panko breadcrumbs and parmesan.', section: PREP_CHICKEN },
        { step: 'Dip the chicken into the egg dredge then into the breadcrumb mixture. Make sure to get both sides.', section: PREP_CHICKEN, img: parmesan2 },
        { step: 'Allow the chicken to rest for 10 to 15 minutes. This helps the breading adhere to the chicken.', section: PREP_CHICKEN },
        { step: 'Over medium-high heat, heat 1/2 inch olive oil in a large pan.', section: FRY_CHICKEN },
        { step: 'Add the chicken to the hot oil. Cook until golden (about 2 minutes per side). It won\'t be fully cooked, that\'s okay since it\'ll be finished cooking in the oven.', section: FRY_CHICKEN, img: parmesan3 },
        { step: 'Line a baking sheet with foil and place a wire rack on top.', section: FRY_CHICKEN },
        { step: 'Transfer the chicken to the wire rack to drain.', section: FRY_CHICKEN, img: parmesan4 },
        { step: 'Transfer chicken to a baking pan.', section: FRY_CHICKEN },
        { step: 'Top each breast with tomato sauce, mozzarella, basil and provolone.', section: BAKE_CHICKEN, img: parmesan5 },
        { step: 'Sprinkle parmesan and drizzle olive oil.', section: BAKE_CHICKEN, img: parmesan6 },
        { step: 'Bake until the cheese is browned and bubbly and chicken is cooked through (about 15 to 20 minutes).', section: BAKE_CHICKEN, img: parmesan7 },
        { step: 'Enjoy this with pasta or vegetables.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'This jumped to one of my favorite recipes. This came out perfect and hope you enjoy it as much as I did.' }
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
            method: REHEAT_METHODS.BAKE,
            instruction: 'Place chicken parm on a wire rack on a baking sheet. Bake at 350ºF until heated through and crispy (about 10 to 15 minutes).',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 400ºF until heated through and crispy (about 8 to 10 minutes).',
        },
    ],
    mealPrep: true,
};