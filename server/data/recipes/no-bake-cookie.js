const cookie1 = '../assets/Products/no-bake-cookie-1.jpeg';
const cookie2 = '../assets/Products/no-bake-cookie-2.jpeg';
const cookie3 = '../assets/Products/no-bake-cookie-3.jpeg';
const cookie4 = '../assets/Products/no-bake-cookie-4.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    COCOA_POWDER,
    MILK,
    PEANUT_BUTTER,
    PLATE,
    SALT,
    SAUCEPAN,
    STEEL_OATS,
    STOVE,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WHITE_SUGAR,
} = require('./ingredients');

const SUGAR_MIXTURE = 'Sugar Mixture';
const PEANUT_BUTTER_AND_OAT = 'Peanut Butter and Oat';

const COOK_SUGAR_MIXTURE = 'Cook Sugar Mixture';

module.exports = {
    cardName: 'No Bake Cookies',
    name: 'No Bake Cookies',
    img: cookie4,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    type: [TYPES.COOKIE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.PEANUT],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    protein: [PROTEIN.PEANUT],
    yields: { amount: 24, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Chocolate Peanut Butter No Bake Cookies',
            link: 'https://sallysbakingaddiction.com/chocolate-peanut-butter-no-bake-cookies/',
            authors: ['Sally McKenney'],
            finder: 'Kevin Ung'
        }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },
        { ...WHITE_SUGAR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },
        { ...COCOA_POWDER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },
        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },
        
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PEANUT_BUTTER_AND_OAT },
        { ...PEANUT_BUTTER, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PEANUT_BUTTER_AND_OAT },
        { ...STEEL_OATS, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PEANUT_BUTTER_AND_OAT },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PEANUT_BUTTER_AND_OAT },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        PLATE,
    ],
    directions: [
        { step: `In a saucepan, combine the "${SUGAR_MIXTURE}" section ingredients.`, section: COOK_SUGAR_MIXTURE, img: cookie1 },
        { step: 'Over medium heat, melt sugar mixture. Stir frequently until it boils.', section: COOK_SUGAR_MIXTURE, img: cookie2 },
        { step: 'Let it boils for about 1 minute.', section: COOK_SUGAR_MIXTURE },
        { step: 'Remove from heat.', section: COOK_SUGAR_MIXTURE },

        { step: `Add the "${PEANUT_BUTTER_AND_OAT}" section ingredients. Mix.`, section: SECTIONS.MIX, img: cookie3 },

        { step: 'Spoon and shape dough balls onto plates.', section: SECTIONS.FORM_BALLS },

        { step: 'Let it set for 20 to 30 minutes in the refrigerator.', section: SECTIONS.CHILL },
        
        { step: 'Enjoy!', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};