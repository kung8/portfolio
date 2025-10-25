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
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...COCOA_POWDER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PEANUT_BUTTER, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...STEEL_OATS, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        PLATE,
    ],
    directions: [
        { step: 'Add sugar, cocoa, butter and milk into a saucepan.', section: SECTIONS.MAIN, img: cookie1 },
        { step: 'Over medium heat, melt down and stir frequently until it boils.', section: SECTIONS.MAIN, img: cookie2 },
        { step: 'Let it boils for about 60 seconds.', section: SECTIONS.MAIN },
        { step: 'Remove from heat. Add vanilla and peanut butter.', section: SECTIONS.MAIN },
        { step: 'Add oats and salt.', section: SECTIONS.MAIN, img: cookie3 },
        { step: 'Mix well.', section: SECTIONS.MAIN },
        { step: 'Spoon and shape dough balls onto plates.', section: SECTIONS.MAIN },
        { step: 'Let it set for 20 to 30 minutes in the refrigerator.', section: SECTIONS.MAIN },
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