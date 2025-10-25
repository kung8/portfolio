const curry1 = '../assets/Products/indian-chicken-tikka-masala-1.jpeg';
const curry2 = '../assets/Products/indian-chicken-tikka-masala-2.jpeg';
const curry3 = '../assets/Products/indian-chicken-tikka-masala-3.jpeg';
const curry4 = '../assets/Products/indian-chicken-tikka-masala-4.jpeg';
const curry5 = '../assets/Products/indian-chicken-tikka-masala-5.jpeg';
const curry6 = '../assets/Products/indian-chicken-tikka-masala-6.jpeg';
const curry7 = '../assets/Products/indian-chicken-tikka-masala-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, CAYENNE_PEPPER, CINNAMON, CUMIN, CURRY_POWDER, GARLIC, GHEE, GINGER, HEAVY_CREAM, LARGE_PAN, LARGE_POT, PAPRIKA, SALT, STOVE, TOMATO_SAUCE, TURMERIC, VEGETABLE_OIL, WHITE_SUGAR, YELLOW_ONION } = require('./ingredients');

module.exports = {
    cardName: 'Chicken Tikka Masala',
    name: 'Chicken Tikka Masala',
    img: curry6,
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.INDIAN, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.CURRY, TYPES.RICE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 75, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { 
            label: 'Chicken Tikka Masala', 
            link: "https://www.allrecipes.com/recipe/228293/curry-stand-chicken-tikka-masala-sauce",
            authors: ['Chris Bellers'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...GHEE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...CUMIN, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CAYENNE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CINNAMON, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TURMERIC, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TOMATO_SAUCE, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PAPRIKA, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 4, unit: '', additionalDetails: '1 inch pieces', section: SECTIONS.CHICKEN },
        { ...CURRY_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        LARGE_PAN,
    ],
    directions: [
        { step: 'Over medium heat, heat ghee in a large pot.', section: SECTIONS.SAUCE },
        { step: 'Add onions. Cook and stir until it becomes translucent (about 5 minutes).', section: SECTIONS.SAUCE },
        { step: 'Add garlic. Cook and stir until fragrant (about 1 minute).', section: SECTIONS.SAUCE },
        { step: 'Add cumin, salt, ginger, cayenne pepper, cinnamon, and turmeric. Cook and stir until fragrant (about 2 minutes).', section: SECTIONS.SAUCE },
        { step: 'Add tomato sauce. Bring to a boil and reduce to low heat.', section: SECTIONS.SAUCE, img: curry1 },
        { step: 'Simmer sauce for 10 minutes.', section: SECTIONS.SAUCE },
        { step: 'Add cream, sugar and paprika.', section: SECTIONS.SAUCE, img: curry2 },
        { step: 'Bring to a simmer and cook until sauce has thickened (about 10 to 15 minutes).', section: SECTIONS.SAUCE, img: curry3 },
        { step: 'Over medium heat, heat vegetable oil in a large pan.', section: SECTIONS.MAIN },
        { step: 'Add chicken and curry powder.', section: SECTIONS.MAIN },
        { step: 'Sear chicken until lightly browned (about 3 minutes). It is fine to not be cooked all the way through.', section: SECTIONS.MAIN, img: curry4 },
        { step: 'Transfer chicken to the sauce. Simmer until sauce is cooked through (about 30 minutes).', section: SECTIONS.MAIN, img: curry5 },
        { step: 'Add salt and sugar to taste.', section: SECTIONS.MAIN },
        { step: 'Serve with rice and naan or roti.', section: SECTIONS.MAIN, img: curry7 },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};