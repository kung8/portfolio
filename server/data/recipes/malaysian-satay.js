const satay = '../assets/Products/malaysian-satay.jpeg';
const { CATEGORIES, GENRES, SECTIONS, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const {
    CHICKEN_THIGH,
    SALT,
    GARLIC,
    TURMERIC,
    VEGETABLE_OIL,
    CUCUMBER,
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

const SATAY_SECTION = 'Satay';
const PEANUT_SAUCE_SECTION = 'Peanut Sauce';

const MARINATE_CHICKEN = 'Marinate Chicken';
const COOK_SATAY = 'Cook Satay';
const MAKE_PEANUT_SAUCE = 'Make Peanut Sauce';

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
        { ...CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1-inch pieces', section: SATAY_SECTION },
        { ...COCONUT_MILK, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SATAY_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SATAY_SECTION },
        { ...CURRY_POWDER, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SATAY_SECTION },
        { ...TURMERIC, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SATAY_SECTION },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SATAY_SECTION },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SATAY_SECTION },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SATAY_SECTION },
        { ...FISH_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SATAY_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SATAY_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SATAY_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SATAY_SECTION },

        { ...PEANUT_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PEANUT_SAUCE_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PEANUT_SAUCE_SECTION },
        { ...LIME_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PEANUT_SAUCE_SECTION },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PEANUT_SAUCE_SECTION },
        { ...ASIAN_CHILI_GARLIC_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PEANUT_SAUCE_SECTION },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PEANUT_SAUCE_SECTION },
        { ...WATER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PEANUT_SAUCE_SECTION },
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
        { step: 'In a ziploc bag, combine the "Marinade" section ingredients except the chicken. Mix.', section: MARINATE_CHICKEN },
        { step: 'Add the chicken pieces. Mix well.', section: MARINATE_CHICKEN },
        { step: 'Marinate for at least 2 hours (or overnight).', section: MARINATE_CHICKEN },

        { step: 'Preheat the oven to 450ºF.', section: COOK_SATAY },
        { step: 'Line a baking sheet with foil.', section: COOK_SATAY },
        { step: 'Thread the chicken on skewers.', section: COOK_SATAY },
        { step: 'Brush with oil.', section: COOK_SATAY },
        { step: 'Season with salt and pepper.', section: COOK_SATAY },
        { step: 'Place prepped skewers onto baking sheet.', section: COOK_SATAY },
        { step: 'Bake the satay until cooked through (about 12 to 15 minutes).', section: COOK_SATAY },

        { step: 'In a medium bowl, combine the "Peanut Sauce" section ingredients.', section: MAKE_PEANUT_SAUCE },
        { step: 'Add up to 3 tablespoons of water depending on thickness preference.', section: MAKE_PEANUT_SAUCE },

        { step: 'Enjoy this delicious satay with peanut sauce.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Be careful the turmeric may stain your baking sheet so the aluminum foil is recommended.' },
    ]
};