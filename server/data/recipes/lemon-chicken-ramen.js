const bowled = '../assets/Products/lemon-chicken-ramen-bowled.jpeg';
const zoomed = '../assets/Products/lemon-chicken-ramen-bowled-zoomed.jpeg';
const flour = '../assets/Products/lemon-chicken-ramen-flour.jpeg';
const floured = '../assets/Products/lemon-chicken-ramen-floured-chicken.jpeg';
const fryingChicken = '../assets/Products/lemon-chicken-ramen-frying-chicken.jpeg';
const garlic = '../assets/Products/lemon-chicken-ramen-garlic.jpeg';
const spices = '../assets/Products/lemon-chicken-ramen-spices.jpeg';
const fryingSpices = '../assets/Products/lemon-chicken-ramen-frying-spices.jpeg';
const noodles = '../assets/Products/lemon-chicken-ramen-with-noodles.jpeg';
const broth = '../assets/Products/lemon-chicken-ramen-broth.jpeg';
const brothChicken = '../assets/Products/lemon-chicken-ramen-broth-with-chicken.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { CHICKEN_BREAST, ALL_PURPOSE_FLOUR, OLIVE_OIL, GARLIC, SALT, BLACK_PEPPER, PAPRIKA, OREGANO, RED_PEPPER_FLAKES, CHICKEN_BROTH, LEMON, LIGHT_CREAM, FRESH_RAMEN_NOODLES, CILANTRO, GREEN_ONION, SESAME_SEEDS, SNOW_PEA } = require('./ingredients');

module.exports = {
    cardName: 'Lemon Chicken Ramen',
    name: 'Lemon Chicken Ramen',
    img: zoomed,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SOUP, TYPES.NOODLE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Lemon Chicken Ramen', link: "https://myriadrecipes.com/lemon-chicken-ramen/" }
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_BREAST, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
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
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'cutting board' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Mix together flour, salt and black pepper.', section: SECTIONS.CHICKEN, img: flour },
        { step: 'Coat the chicken in the flour mixture.', section: SECTIONS.CHICKEN, img: floured },
        { step: 'Over medium heat, heat up olive oil in a large pot.', section: SECTIONS.CHICKEN },
        { step: 'Add chicken breast to pot and cook until each side is golden brown (about 3 minutes each side).', section: SECTIONS.CHICKEN, img: fryingChicken },
        { step: 'Transfer chicken to a cutting board and set aside. It will be cut later.', section: SECTIONS.CHICKEN },
        { step: 'Over medium heat, add garlic, paprika, oregano, and red pepper flakes to the large pot (could be the one that was used for the chicken).', section: SECTIONS.BROTH, img: [garlic, spices] },
        { step: 'Stir and cook until fragrant (about 1 minute).', section: SECTIONS.BROTH, img: fryingSpices },
        { step: 'Stir in chicken broth, lemon juice and light cream.', section: SECTIONS.BROTH, img: broth },
        { step: 'Place the chicken in the broth and cover the pot. Cook for 5 to 10 minutes.', section: SECTIONS.MAIN, img: brothChicken },
        { step: 'Transfer the chicken back to the cutting board.', section: SECTIONS.MAIN },
        { step: 'Add the noodles into the broth and cook for 2 to 3 minutes.', section: SECTIONS.MAIN, img: noodles },
        { step: 'Slice up the chicken to be topped on the ramen.', section: SECTIONS.MAIN },
        { step: 'Divide the noodles into two bowls, pour over broth and top the bowls with the chicken, lemon slice, vegetables and sesame seeds.', section: SECTIONS.SERVE, img: bowled },
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