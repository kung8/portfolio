const butter = '../assets/Products/no-bake-cookie-butter.jpeg';
const melted = '../assets/Products/no-bake-cookie-melted.jpeg';
const oat = '../assets/Products/no-bake-cookie-oat.jpeg';
const all = '../assets/Products/no-bake-cookie-all.jpeg';
const finished = '../assets/Products/no-bake-cookie-finished.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    COCOA_POWDER,
    MILK,
    PEANUT_BUTTER,
    PLATE,
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
    img: finished,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    type: [TYPES.COOKIE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.PEANUT],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    protein: [PROTEIN.PEANUT],
    yields: { amount: 32, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 7 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...COCOA_POWDER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PEANUT_BUTTER, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...STEEL_OATS, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        PLATE,
    ],
    directions: [
        { step: 'Add sugar, cocoa, butter and milk into a saucepan.', section: SECTIONS.MAIN, img: butter },
        { step: 'Over medium heat, melt down and stir frequently until it boils.', section: SECTIONS.MAIN, img: melted },
        { step: 'Let it boils for about 60 seconds.', section: SECTIONS.MAIN },
        { step: 'Remove from heat and add the vanilla, peanut butter and oats.', section: SECTIONS.MAIN, img: oat },
        { step: 'Mix well.', section: SECTIONS.MAIN },
        { step: 'Spoon and shape dough balls onto plates.', section: SECTIONS.MAIN, img: all },
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