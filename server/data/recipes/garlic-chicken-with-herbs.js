const chicken1 = '../assets/Products/garlic-chicken-with-herbs-1.jpeg';
const chicken2 = '../assets/Products/garlic-chicken-with-herbs-2.jpeg';
const chicken3 = '../assets/Products/garlic-chicken-with-herbs-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_THIGH, CHICKEN_BROTH, FRESH_ROSEMARY, FRESH_SAGE, GARLIC, JASMINE_RICE, LARGE_PAN, SALT, STOVE, UNSALTED_BUTTER, WHITE_WINE } = require('./ingredients');

module.exports = {
    cardName: 'Garlic Chicken w/ Herbs',
    name: 'Garlic Chicken with Herbs',
    img: chicken3,
    available: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.MAIN_COURSE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Garlic Chicken', 
            link: "https://www.tasteofhome.com/recipes/garlic-chicken-with-herbs/",
            authors: ['Jan Valdez'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GARLIC, amount: 10, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'halved', section: SECTIONS.MAIN },
        { ...WHITE_WINE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_ROSEMARY, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_SAGE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_PAN,
    ],
    directions: [
        { step: `Season chicken with salt and pepper.`, section: SECTIONS.CHICKEN },
        { step: `Over medium-high heat, heat butter in a pan.`, section: SECTIONS.CHICKEN },
        { step: `Add chicken and brown on both sides.`, section: SECTIONS.CHICKEN },
        { step: `Remove chicken and set aside.`, section: SECTIONS.CHICKEN, img: chicken1 },
        { step: `Over medium-high heat, saute garlic in the same pan.`, section: SECTIONS.MAIN },
        { step: `Cook until golden brown.`, section: SECTIONS.MAIN },
        { step: `Add wine and herbs. Bring to a boil and stir.`, section: SECTIONS.MAIN },
        { step: `Cook until wine is almost evaporated.`, section: SECTIONS.MAIN },
        { step: `Add chicken broth and chicken. Bring to a boil.`, section: SECTIONS.MAIN, img: chicken2 },
        { step: `Reduce heat to low. Cover and simmer (about 10 to 12 minutes).`, section: SECTIONS.MAIN },
        { step: `Cook until the internal temperature of the chicken is at least 165ºF.`, section: SECTIONS.MAIN },
        { step: `Spoon juices over chicken and rice.`, section: SECTIONS.SERVE },
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