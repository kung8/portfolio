const penyet1 = '../assets/Products/ayam-penyet-1.jpeg';
const penyet2 = '../assets/Products/ayam-penyet-2.jpeg';
const penyet3 = '../assets/Products/ayam-penyet-3.jpeg';
const penyet4 = '../assets/Products/ayam-penyet-4.jpeg';
const penyet5 = '../assets/Products/ayam-penyet-5.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CHICKEN_THIGH, CORIANDER_POWDER, CURRY_LEAF, FRYING_PAN, GARLIC, GINGER, KEY_LIME_JUICE, LARGE_POT, LEMON_BASIL, MORTAR_AND_PESTLE, RED_CHILI, ROMA_TOMATO, SALT, SHALLOT, SHRIMP_PASTE, STOVE, VEGETABLE_OIL, WATER, WHITE_SUGAR } = require('./ingredients');

const GINGER_PASTE_SECTION = 'Ginger Paste';
const SAMBAL_SECTION = 'Sambal';
const CHICKEN_SECTION = 'Chicken';

const MAKE_GINGER_PASTE = 'Make Ginger Paste';
const BOIL_CHICKEN = 'Boil Chicken';
const FRY_CHICKEN = 'Fry Chicken';
const MAKE_SAMBAL = 'Make Sambal';

module.exports = {
    cardName: 'Ayam Penyet',
    name: 'Indonesian Ayam Penyet',
    img: penyet5,
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.INDONESIAN],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Ayam Penyet', 
            link: 'https://www.allrecipes.com/recipe/264557/ayam-penyet-pedas-indonesian-spicy-penyet-chicken/',
            authors: ['deravi'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...GARLIC, amount: 5, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'peeled', section: GINGER_PASTE_SECTION },
        { ...SHALLOT, amount: 1, unit: '', additionalDetails: 'chopped', section: GINGER_PASTE_SECTION },
        { ...GINGER, amount: 1.5, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'peeled and chopped', section: GINGER_PASTE_SECTION },
        // { ...GALANGAL, amount: '', unit: INGREDIENT_UNITS., additionalDetails: '', section: GINGER_PASTE_SECTION },
        { ...CORIANDER_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: GINGER_PASTE_SECTION },
        { ...SALT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: GINGER_PASTE_SECTION },
        { ...CHICKEN_THIGH, amount: 4, unit: '', additionalDetails: '', section: CHICKEN_SECTION },
        { ...WATER, amount: 1.25, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHICKEN_SECTION },
        { ...CURRY_LEAF, amount: 2, unit: '', additionalDetails: '', section: CHICKEN_SECTION },
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SECTION },

        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAMBAL_SECTION },
        { ...SHALLOT, amount: 2, unit: '', additionalDetails: 'chopped', section: SAMBAL_SECTION },
        { ...ROMA_TOMATO, amount: 1 / 2, unit: '', additionalDetails: 'chopped', section: SAMBAL_SECTION },
        { ...RED_CHILI, amount: 11, unit: '', additionalDetails: 'finely chopped', section: SAMBAL_SECTION },
        { ...KEY_LIME_JUICE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAMBAL_SECTION },
        { ...SHRIMP_PASTE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAMBAL_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAMBAL_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAMBAL_SECTION },
        { ...LEMON_BASIL, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: '', section: SAMBAL_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MORTAR_AND_PESTLE,
        LARGE_POT,
        FRYING_PAN,
    ],
    directions: [
        { step: `In a mortar, combine the "${GINGER_PASTE_SECTION}" section ingredients. Pound into a paste.`, section: MAKE_GINGER_PASTE, img: [penyet1, penyet2] },
        { step: `In a pot, combine the ginger paste, chicken, water and curry leaves.`, section: BOIL_CHICKEN },
        { step: `Over high heat, bring the water to a boil.`, section: BOIL_CHICKEN, img: penyet3 },
        { step: `Reduce heat. Let simmer until cooked through (about 20 minutes).`, section: BOIL_CHICKEN, img: penyet4 },
        { step: `Over medium-high heat, heat oil in a pan.`, section: FRY_CHICKEN },
        { step: `Add the boiled chicken to the pan. Fry until golden brown (about 5 to 10 minutes).`, section: FRY_CHICKEN },

        { step: `Over medium heat, heat oil in the pan.`, section: MAKE_SAMBAL },
        { step: `Add shallots, tomato, and red chilies. Cook for 2 minutes.`, section: MAKE_SAMBAL },
        { step: `Transfer to a mortar.`, section: MAKE_SAMBAL },
        { step: `Add the rest of the sambal ingredients.`, section: MAKE_SAMBAL },
        { step: `Pound into a paste.`, section: MAKE_SAMBAL },
        { step: `Set aside.`, section: MAKE_SAMBAL },

        { step: `Serve and enjoy this with a side of sambal or top with "Javanese Chicken Coconut Curry".`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'It wasn\'t quite like what I had in Singapore, but it was still delicious. I would recommend deep frying it and actually dredging the chicken in panko breadcrumbs after it has been boiled. I will try this next time.' },
        { note: 'If you want to eat my favorite Ayam Penyet in the world, go to "Riverside Indonesian BBQ" in the Kopitiam food court at Plaza Singapura.' }
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