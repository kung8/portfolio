const ramen1 = '../assets/Products/lemon-chicken-ramen-1.jpeg';
const ramen2 = '../assets/Products/lemon-chicken-ramen-2.jpeg';
const ramen3 = '../assets/Products/lemon-chicken-ramen-3.jpeg';
const ramen4 = '../assets/Products/lemon-chicken-ramen-4.jpeg';
const ramen5 = '../assets/Products/lemon-chicken-ramen-5.jpeg';
const ramen6 = '../assets/Products/lemon-chicken-ramen-6.jpeg';
const ramen7 = '../assets/Products/lemon-chicken-ramen-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BLACK_PEPPER, CHICKEN_BREAST, CHICKEN_BROTH, CILANTRO, CUTTING_BOARD, FRESH_RAMEN_NOODLES, GARLIC, GREEN_ONION, KNIFE, LARGE_POT, LEMON, LIGHT_CREAM, OLIVE_OIL, OREGANO, PAPRIKA, RED_PEPPER_FLAKES, SALT, SESAME_SEEDS, SNOW_PEA, STOVE } = require('./ingredients');

module.exports = {
    cardName: 'Lemon Chicken Ramen',
    name: 'Lemon Chicken Ramen',
    img: ramen7,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SOUP, TYPES.NOODLE],
    allergies: [ALLERGIES.GLUTEN, ALLERGIES.SESAME, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Lemon Chicken Ramen', 
            link: "https://myriadrecipes.com/lemon-chicken-ramen/",
            authors: ['Emily Roz'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...CHICKEN_BREAST, amount: 2, unit: '', additionalDetails: 'halved', section: SECTIONS.CHICKEN },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.BROTH },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BROTH },
        { ...OREGANO, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BROTH },
        { ...RED_PEPPER_FLAKES, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BROTH },
        { ...CHICKEN_BROTH, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BROTH },
        { ...LEMON, amount: 1 / 2, unit: '', additionalDetails: 'juiced', section: SECTIONS.BROTH },
        { ...LIGHT_CREAM, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BROTH },
        { ...FRESH_RAMEN_NOODLES, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: 'sliced diagonally', section: SECTIONS.TOPPINGS },
        { ...LEMON, amount: 1 / 2, unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...SNOW_PEA, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SESAME_SEEDS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        CUTTING_BOARD,
        KNIFE,
    ],
    directions: [
        { step: `Mix together flour, salt and black pepper.`, section: SECTIONS.CHICKEN },
        { step: `Coat the chicken in the flour mixture.`, section: SECTIONS.CHICKEN, img: ramen1 },
        { step: `Over medium heat, heat up olive oil in a large pot.`, section: SECTIONS.CHICKEN },
        { step: `Add chicken breast to pot and cook until each side is golden brown (about 3 minutes each side).`, section: SECTIONS.CHICKEN, img: ramen2 },
        { step: `Transfer chicken to a cutting board and set aside. It will be cut later.`, section: SECTIONS.CHICKEN },
        { step: `Over medium heat, add garlic, paprika, oregano, and red pepper flakes to the large pot (could be the one that was used for the chicken).`, section: SECTIONS.BROTH },
        { step: `Stir and cook until fragrant (about 1 minute).`, section: SECTIONS.BROTH, img: ramen3 },
        { step: `Stir in chicken broth, lemon juice and light cream.`, section: SECTIONS.BROTH, img: ramen4 },
        { step: `Place the chicken in the broth and cover the pot. Cook for 5 to 10 minutes.`, section: SECTIONS.MAIN, img: ramen5 },
        { step: `Transfer the chicken back to the cutting board.`, section: SECTIONS.MAIN },
        { step: `Add the noodles into the broth and cook for 2 to 3 minutes.`, section: SECTIONS.MAIN, img: ramen6 },
        { step: `Slice up the chicken to be topped on the ramen.`, section: SECTIONS.MAIN },
        { step: `Divide the noodles into two bowls, pour over broth and top the bowls with the chicken, lemon slice, vegetables and sesame seeds.`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over medium-low heat, reheat until heated through. Add a little chicken stock if needed.',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave until heated through.',
        },
    ],
    mealPrep: true,
};