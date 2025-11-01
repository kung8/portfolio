const satay1 = '../assets/Products/malaysian-satay-1.jpeg';
const satay2 = '../assets/Products/malaysian-satay-2.jpeg';
const satay3 = '../assets/Products/malaysian-satay-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALUMINUM_FOIL,
    ASIAN_CHILI_GARLIC_SAUCE,
    BAKING_SHEET,
    BAMBOO_SKEWERS,
    BLACK_PEPPER,
    BLENDER,
    BROWN_SUGAR,
    CHICKEN_THIGH,
    COCONUT_MILK,
    CURRY_POWDER,
    FISH_SAUCE,
    GARLIC,
    GINGER,
    LIGHT_SOY_SAUCE,
    LIME_JUICE,
    OVEN,
    PEANUT_BUTTER,
    SALT,
    SMALL_BOWL,
    TURMERIC,
    VEGETABLE_OIL,
    WATER,
    ZIPLOC_BAG,
} = require('./ingredients');

const BAKE_PREP_SECTION = 'Bake Prep';

module.exports = {
    cardName: 'Malaysian Satay',
    name: 'Malaysian Satay',
    img: satay3,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.MARINADE, METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.FISH, ALLERGIES.PEANUT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 6, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Chicken Satay', 
            link: 'https://damndelicious.net/2019/06/07/chicken-satay-with-peanut-sauce/',
            authors: ['Chungah Ree'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1 inch pieces', section: SECTIONS.MARINADE },
        { ...COCONUT_MILK, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CURRY_POWDER, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...TURMERIC, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...FISH_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...PEANUT_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIME_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ASIAN_CHILI_GARLIC_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BAKE_PREP_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: BAKE_PREP_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: BAKE_PREP_SECTION },
    ],
    appliances: [
        BLENDER,
        OVEN,
    ],
    supplies: [
        { ...ZIPLOC_BAG, additionalDetails: 'gallon-size' },
        BAMBOO_SKEWERS,
        BAKING_SHEET,
        ALUMINUM_FOIL,
        SMALL_BOWL,
    ],
    directions: [
        { step: `In a ziploc bag, combine the "${SECTIONS.MARINADE}" section ingredients except the chicken. Mix.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: `Add the chicken pieces. Mix well.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: `Marinate for at least 2 hours (or overnight).`, section: SECTIONS.MARINATE_CHICKEN, img: satay1 },

        { step: `Preheat the oven to 450ºF.`, section: SECTIONS.BAKE },
        { step: `Line a baking sheet with foil.`, section: SECTIONS.BAKE },
        { step: `Thread the chicken on skewers.`, section: SECTIONS.BAKE },
        { step: `Brush with oil.`, section: SECTIONS.BAKE },
        { step: `Season with salt and pepper.`, section: SECTIONS.BAKE },
        { step: `Place prepped skewers onto baking sheet.`, section: SECTIONS.BAKE },
        { step: `Bake the satay until cooked through (about 12 to 15 minutes).`, section: SECTIONS.BAKE, img: satay2 },

        { step: `In a medium bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE },
        { step: `Add up to 3 tablespoons of water depending on thickness preference.`, section: SECTIONS.PREP_SAUCE },

        { step: `Enjoy this delicious satay with peanut sauce.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Be careful the turmeric may stain your baking sheet so the aluminum foil is recommended.' },
        { note: 'Make sure to use a baking sheet with a rim since there will be used cooking oils that will remain.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    // reheat: [
    //     // {
    //     //     method: REHEAT_METHODS.BAKE,
    //     //     instruction: '',
    //     // },
    // ],
    mealPrep: true,
};