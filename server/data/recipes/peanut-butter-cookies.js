const cookies1 = '../assets/Products/peanut-butter-cookies-1.jpeg';
const cookies2 = '../assets/Products/peanut-butter-cookies-2.jpeg';
const cookies3 = '../assets/Products/peanut-butter-cookies-3.jpeg';
const cookies4 = '../assets/Products/peanut-butter-cookies-4.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_POWDER, BAKING_SHEET, BROWN_SUGAR, EGG, OVEN, PEANUT_BUTTER, SALT, SILICONE_BAKING_MAT, STAND_MIXER, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR } = require('./ingredients');

module.exports = {
    cardName: 'Peanut Butter Cookies',
    name: 'Peanut Butter Cookies',
    img: cookies4,
    available: true,
    recommended: false,
    createdAt: '2024-12-10 07:37:58',
    modifiedAt: '2026-06-02 22:17:08',
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.COOKIE],
    yields: { amount: 3 / 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Peanut Butter Cookies', 
            link: 'https://preppykitchen.com/peanut-butter-cookies-recipe/',
            authors: ['John Kanell'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PEANUT_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_POWDER, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        STAND_MIXER,
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        SILICONE_BAKING_MAT,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `In a stand mixer, cream together butter, white sugar, and brown sugar.`, section: SECTIONS.MAIN },
        { step: `Mix in salt.`, section: SECTIONS.MAIN },
        { step: `Mix in egg and vanilla.`, section: SECTIONS.MAIN },
        { step: `Mix in peanut butter.`, section: SECTIONS.MAIN },
        { step: `Mix in flour and baking powder.`, section: SECTIONS.MAIN },
        { step: `Place the silicon baking mat on the baking sheet.`, section: SECTIONS.MAIN },
        { step: `Form one inch dough balls and place on the mats.`, section: SECTIONS.MAIN, img: cookies1 },
        { step: `Flatten the cookies with a fork to form a crisscross pattern.`, section: SECTIONS.MAIN, img: [cookies2, cookies3] },
        { step: `Bake for 10 minutes.`, section: SECTIONS.MAIN },
        { step: `Let cookies completely cool before transferring. They will continue to set while on the baking sheet.`, section: SECTIONS.MAIN },
        { step: `Enjoy these light, delicious cookies.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
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