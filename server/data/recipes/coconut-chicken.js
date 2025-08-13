const curry1 = '../assets/Products/coconut-chicken-curry-1.jpeg';
const curry2 = '../assets/Products/coconut-chicken-curry-2.jpeg';
const curry3 = '../assets/Products/coconut-chicken-curry-3.jpeg';
const curry4 = '../assets/Products/coconut-chicken-curry-4.jpeg';
const curry5 = '../assets/Products/coconut-chicken-curry-5.jpeg';
const curry6 = '../assets/Products/coconut-chicken-curry-6.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, SALT, BLACK_PEPPER, VEGETABLE_OIL, CURRY_POWDER, YELLOW_ONION, GARLIC, DICED_TOMATO, TOMATO_SAUCE, WHITE_SUGAR, COCONUT_MILK } = require('./ingredients');

module.exports = {
    cardName: 'Coconut Chicken',
    name: 'Coconut Chicken',
    img: curry6,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Coconut Chicken', link: 'https://www.allrecipes.com/recipe/68532/curried-coconut-chicken/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1/2 inch pieces', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.CHICKEN },
        { ...VEGETABLE_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...CURRY_POWDER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1 / 2, unit: '', additionalDetails: 'thinly sliced', section: SECTIONS.VEGGIES },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.VEGGIES },
        { ...DICED_TOMATO, amount: 14.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.CURRY },
        { ...COCONUT_MILK, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.CURRY },
        { ...TOMATO_SAUCE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.CURRY },
        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CURRY },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'large pan' },
    ],
    directions: [
        { step: `In a medium bowl, combine the "${SECTIONS.CHICKEN}" section ingredients. Set aside.`, section: SECTIONS.SEASON },
        { step: 'Over medium-high heat, add oil to a large pan.', section: SECTIONS.COOK_VEGGIES },
        { step: 'Add curry powder to hot oil. Cook for 1 minute.', section: SECTIONS.COOK_VEGGIES, img: curry1 },
        { step: 'Add garlic and onions. Cook for 1 minute.', section: SECTIONS.COOK_VEGGIES, img: curry2 },
        { step: 'Add chicken. Stir or lightly toss to coat chicken in curry oil.', section: SECTIONS.COOK_CHICKEN, img: curry3 },
        { step: 'Reduce to medium heat and cook until chicken is no longer pink in the center and chicken juice is clear (about 7 to 10 minutes). Occasionally stir.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Mix in the remaining ingredients. Cover and simmer, occasionally stirring, for about 30 to 40 minutes.', section: SECTIONS.COOK_CURRY, img: curry4 },
        { step: 'Enjoy this dish over rice.', section: SECTIONS.SERVE, img: curry5 },
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