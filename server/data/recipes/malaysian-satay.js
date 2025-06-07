const satay = '../assets/Products/malaysian-satay.jpeg';
const { CATEGORIES, GENRES, SECTIONS, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const {
    CHICKEN_THIGH,
    SALT,
    GARLIC,
    TURMERIC,
    VEGETABLE_OIL,
    COCONUT_MILK,
    LIGHT_SOY_SAUCE,
    CURRY_POWDER,
    GINGER,
    BROWN_SUGAR,
    FISH_SAUCE,
    BLACK_PEPPER,
    PEANUT_BUTTER,
    LIME_JUICE,
    ASIAN_CHILI_GARLIC_SAUCE,
    WATER,
} = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Malaysian Satay',
    name: 'Malaysian Satay',
    img: satay,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.MARINADE, METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 6, unit: TIME_UNITS.HOUR },
    separated: true,
    websites: [
        // { label: 'Chicken Satay', link: 'https://rasamalaysia.com/recipe-chicken-satay/' }
        { label: 'Chicken Satay', link: 'https://damndelicious.net/2019/06/07/chicken-satay-with-peanut-sauce/' }
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1-inch pieces', section: SECTIONS.MARINADE },
        { ...COCONUT_MILK, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CURRY_POWDER, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...TURMERIC, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...FISH_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MARINADE },

        { ...PEANUT_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIME_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ASIAN_CHILI_GARLIC_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        { name: 'blender' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'ziploc bag' },
        { name: 'bamboo skewer' },
        { name: 'baking sheet' },
        { name: 'aluminum foil' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: `In a ziploc bag, combine the "${SECTIONS.MARINADE}" section ingredients except the chicken. Mix.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: 'Add the chicken pieces. Mix well.', section: SECTIONS.MARINATE_CHICKEN },
        { step: 'Marinate for at least 2 hours (or overnight).', section: SECTIONS.MARINATE_CHICKEN },

        { step: 'Preheat the oven to 450ºF.', section: SECTIONS.BAKE },
        { step: 'Line a baking sheet with foil.', section: SECTIONS.BAKE },
        { step: 'Thread the chicken on skewers.', section: SECTIONS.BAKE },
        { step: 'Brush with oil.', section: SECTIONS.BAKE },
        { step: 'Season with salt and pepper.', section: SECTIONS.BAKE },
        { step: 'Place prepped skewers onto baking sheet.', section: SECTIONS.BAKE },
        { step: 'Bake the satay until cooked through (about 12 to 15 minutes).', section: SECTIONS.BAKE },

        { step: `In a medium bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE },
        { step: 'Add up to 3 tablespoons of water depending on thickness preference.', section: SECTIONS.PREP_SAUCE },

        { step: 'Enjoy this delicious satay with peanut sauce.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Be careful the turmeric may stain your baking sheet so the aluminum foil is recommended.' },
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