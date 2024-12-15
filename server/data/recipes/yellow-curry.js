// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { OLIVE_OIL, SMALL_YELLOW_ONION, BONELESS_AND_SKINLESS_CHICKEN_BREAST, YUKON_GOLD_POTATOES, CARROTS, YELLOW_CURRY_PASTE, GINGER, GARLIC, COCONUT_MILK, CORNSTARCH, FISH_SAUCE, LIME_JUICE, BROWN_SUGAR, CILANTRO, SRIRACHA_SAUCE } = require('./ingredients');

const YELLOW_CURRY_SECTION = 'Yellow Curry';
const MAKE_CURRY = 'Make Curry';

module.exports = {
    wip: true,
    cardName: 'Yellow Curry',
    name: 'Thai Yellow Curry',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.THAI],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN, PROTEIN.ALTERNATIVE],
    type: [TYPES.CURRY],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '40 m',
    websites: [
        { label: 'Yellow Curry', link: 'https://tastesbetterfromscratch.com/yellow-curry/' }
    ],
    separated: true,
    ingredients: [
        { ...OLIVE_OIL, amount: '1 Tbsp', additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...SMALL_YELLOW_ONION, amount: '1', additionalDetails: 'chopped', section: YELLOW_CURRY_SECTION },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: '1 lb', additionalDetails: 'cut into thin slices (2 inches long)', section: YELLOW_CURRY_SECTION },
        { ...YUKON_GOLD_POTATOES, amount: '2', additionalDetails: '1/2 inch cubes', section: YELLOW_CURRY_SECTION },
        { ...CARROTS, amount: '1', additionalDetails: 'thinly sliced', section: YELLOW_CURRY_SECTION },
        { ...YELLOW_CURRY_PASTE, amount: '4 Tbsp', additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...GINGER, amount: '2 tsp', additionalDetails: 'grated', section: YELLOW_CURRY_SECTION },
        { ...GARLIC, amount: '2 cloves', additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...COCONUT_MILK, amount: '27 oz', additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...CORNSTARCH, amount: '2 tsp', additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...FISH_SAUCE, amount: '1 tsp', additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...LIME_JUICE, amount: '1 Tbsp', additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...BROWN_SUGAR, amount: '1 1/2 Tbsp', additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...CILANTRO, amount: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...SRIRACHA_SAUCE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
    ],
    directions: [
        { step: 'Over medium-low heat, heat oil in a large pot.', type: MAKE_CURRY },
        { step: 'Add onion and saute until soften (about 3 to 4 minutes).', type: MAKE_CURRY },
        { step: 'Add chicken, carrots, and potatoes. Cook for 1 to 2 minutes.', type: MAKE_CURRY },
        { step: 'Add ginger, garlic and curry paste. Saute for 3 minutes.', type: MAKE_CURRY },
        { step: 'Add 3/4 of coconut milk.', type: MAKE_CURRY },
        { step: 'Mix cornstarch into the last quarter of coconut milk. Add this to the pot.', type: MAKE_CURRY },
        { step: 'Bring to a boil.', type: MAKE_CURRY },
        { step: 'Reduce heat to low and simmer until chicken and potatoes are cooked through (about 20 to 30 minutes). Thin curry by adding water if needed.', type: MAKE_CURRY },
        { step: 'Add fish sauce, brown sugar and lime juice. Simmer for 5 minutes.', type: MAKE_CURRY },
        { step: 'Serve with jasmine rice (or your preferred rice).', type: SECTIONS.SERVE },
    ]
};