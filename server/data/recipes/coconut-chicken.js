// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, SALT, BLACK_PEPPER, VEGETABLE_OIL, CURRY_POWDER, YELLOW_ONION, GARLIC, DICED_TOMATO, TOMATO_SAUCE, WHITE_SUGAR, COCONUT_MILK } = require('./ingredients');

const CHICKEN_SECTION = 'Chicken';
const VEGETABLE_SECTION = 'Vegetable';
const CURRY_SECTION = 'Curry';
const SEASON_CHICKEN = 'Season Chicken';
const COOK_VEGETABLES = 'Cook Vegetables';
const COOK_CHICKEN = 'Cook Chicken';
const COOK_CURRY = 'Cook Curry';

module.exports = {
    wip: true,
    cardName: 'Coconut Chicken',
    name: 'Coconut Chicken',
    img: '',
    recipeAuthor: '',
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
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1/2 inch pieces', section: CHICKEN_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: CHICKEN_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: CHICKEN_SECTION },
        { ...VEGETABLE_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGETABLE_SECTION },
        { ...CURRY_POWDER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: VEGETABLE_SECTION },
        { ...YELLOW_ONION, amount: 1 / 2, unit: '', additionalDetails: 'thinly sliced', section: VEGETABLE_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: VEGETABLE_SECTION },
        { ...DICED_TOMATO, amount: 14.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CURRY_SECTION },
        { ...COCONUT_MILK, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CURRY_SECTION },
        { ...TOMATO_SAUCE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CURRY_SECTION },
        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CURRY_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'large pan' },
        { name: '' },
    ],
    directions: [
        { step: 'In a medium bowl, combine the "Chicken" section ingredients. Set aside.', type: SEASON_CHICKEN },
        { step: 'Over medium-high heat, add oil to a large pan.', type: COOK_VEGETABLES },
        { step: 'Add curry powder to hot oil. Cook for 1 minute.', type: COOK_VEGETABLES },
        { step: 'Add garlic and onions. Cook for 1 minute.', type: COOK_VEGETABLES },
        { step: 'Add chicken. Stir or lightly toss to coat chicken in curry oil.', type: COOK_CHICKEN },
        { step: 'Reduce to medium heat and cook until chicken is no longer pink in the center and chicken juice is clear (about 7 to 10 minutes). Occasionally stir.', type: COOK_CHICKEN },
        { step: 'Mix in the remaining ingredients. Cover and simmer, occasionally stirring, for about 30 to 40 minutes.', type: COOK_CURRY },
        { step: 'Enjoy this dish over rice.', type: SECTIONS.SERVE },
    ]
};