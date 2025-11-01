const curry1 = '../assets/Products/yellow-curry-1.jpeg';
const curry2 = '../assets/Products/yellow-curry-2.jpeg';
const curry3 = '../assets/Products/yellow-curry-3.jpeg';
const curry4 = '../assets/Products/yellow-curry-4.jpeg';
const curry5 = '../assets/Products/yellow-curry-5.jpeg';
const curry6 = '../assets/Products/yellow-curry-6.jpeg';
const curry7 = '../assets/Products/yellow-curry-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, BROWN_SUGAR, CARROT, CILANTRO, COCONUT_MILK, CORNSTARCH, FISH_SAUCE, GARLIC, GINGER, LIME_JUICE, OLIVE_OIL, SRIRACHA_SAUCE, YELLOW_CURRY_PASTE, YELLOW_ONION, YUKON_GOLD_POTATO } = require('./ingredients');

const YELLOW_CURRY_SECTION = 'Yellow Curry';
const MAKE_CURRY = 'Make Curry';

module.exports = {
    cardName: 'Yellow Curry',
    name: 'Thai Yellow Curry',
    img: curry7,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN, PROTEIN.ALTERNATIVE],
    type: [TYPES.CURRY],
    allergies: [ALLERGIES.FISH],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Yellow Curry', 
            link: 'https://tastesbetterfromscratch.com/yellow-curry/',
            authors: ['Lauren Allen'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: YELLOW_CURRY_SECTION },
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into thin slices (2 inches long)', section: YELLOW_CURRY_SECTION },
        { ...YUKON_GOLD_POTATO, amount: 2, unit: '', additionalDetails: '1/2 inch cubes', section: YELLOW_CURRY_SECTION },
        { ...CARROT, amount: 1, unit: '', additionalDetails: 'thinly sliced', section: YELLOW_CURRY_SECTION },
        { ...YELLOW_CURRY_PASTE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'grated', section: YELLOW_CURRY_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: YELLOW_CURRY_SECTION },
        { ...COCONUT_MILK, amount: 27, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...FISH_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...LIME_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...BROWN_SUGAR, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: YELLOW_CURRY_SECTION },
        { ...CILANTRO, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
        { ...SRIRACHA_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
    ],
    directions: [
        { step: `Over medium-low heat, heat oil in a large pot.`, section: MAKE_CURRY },
        { step: `Add onion and saute until soften (about 3 to 4 minutes).`, section: MAKE_CURRY, img: curry1 },
        { step: `Add chicken, carrots, and potatoes. Cook for 1 to 2 minutes.`, section: MAKE_CURRY, img: curry2 },
        { step: `Add ginger, garlic and curry paste. Saute for 3 minutes.`, section: MAKE_CURRY, img: curry3 },
        { step: `Add 3/4 of coconut milk.`, section: MAKE_CURRY, img: curry4 },
        { step: `Mix cornstarch into the last quarter of coconut milk. Add this to the pot.`, section: MAKE_CURRY, img: [curry5, curry6] },
        { step: `Bring to a boil.`, section: MAKE_CURRY },
        { step: `Reduce heat to low and simmer until chicken and potatoes are cooked through (about 20 to 30 minutes). Thin curry by adding water if needed.`, section: MAKE_CURRY },
        { step: `Add fish sauce, brown sugar and lime juice. Simmer for 5 minutes.`, section: MAKE_CURRY },
        { step: `Serve with jasmine rice (or your preferred rice).`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'If you decide to double or triple this amount, you do not need to double or triple the yellow curry paste depending on your spice tolerance. I would suggest for a more mild spice level use 1.5 times for doubled and 2 times for tripled.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store rice and curry separately.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave until heated through (about 3 to 5 minutes). Stirring occasionally.',
        },
    ],
    mealPrep: true,
};