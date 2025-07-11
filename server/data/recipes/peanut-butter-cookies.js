const cookies1 = '../assets/Products/peanut-butter-cookies-1.jpeg';
const cookies2 = '../assets/Products/peanut-butter-cookies-2.jpeg';
const cookies3 = '../assets/Products/peanut-butter-cookies-3.jpeg';
const cookies4 = '../assets/Products/peanut-butter-cookies-4.jpeg';
const cookies5 = '../assets/Products/peanut-butter-cookies-5.jpeg';
const cookies6 = '../assets/Products/peanut-butter-cookies-6.jpeg';
const cookies8 = '../assets/Products/peanut-butter-cookies-8.jpeg';
const cookies9 = '../assets/Products/peanut-butter-cookies-9.jpeg';
const cookies10 = '../assets/Products/peanut-butter-cookies-10.jpeg';
const cookies11 = '../assets/Products/peanut-butter-cookies-11.jpeg';
const cookies12 = '../assets/Products/peanut-butter-cookies-12.jpeg';
const cookies13 = '../assets/Products/peanut-butter-cookies-13.jpeg';
const cookies14 = '../assets/Products/peanut-butter-cookies-14.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { ALL_PURPOSE_FLOUR, UNSALTED_BUTTER, PEANUT_BUTTER, BROWN_SUGAR, WHITE_SUGAR, VANILLA_EXTRACT, EGG, BAKING_POWDER, SALT } = require('./ingredients');

module.exports = {
    cardName: 'Peanut Butter Cookies',
    name: 'Peanut Butter Cookies',
    img: cookies13,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.COOKIE],
    yields: { amount: 3 / 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Peanut Butter Cookies', link: 'https://preppykitchen.com/peanut-butter-cookies-recipe/' }
    ],
    separated: false,
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
        { name: 'stand mixer' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'In a stand mixer, cream together butter, white sugar, and brown sugar.', section: SECTIONS.MAIN, img: [cookies1, cookies2] },
        { step: 'Mix in salt.', section: SECTIONS.MAIN, img: cookies3 },
        { step: 'Mix in egg and vanilla.', section: SECTIONS.MAIN, img: cookies4 },
        { step: 'Mix in peanut butter.', section: SECTIONS.MAIN, img: [cookies5, cookies6] },
        { step: 'Mix in flour and baking powder.', section: SECTIONS.MAIN, img: [cookies8, cookies9] },
        { step: 'Place the silicon baking mat on the baking sheet.', section: SECTIONS.MAIN },
        { step: 'Form one inch dough balls and place on the mats.', section: SECTIONS.MAIN, img: cookies10 },
        { step: 'Flatten the cookies with a fork to form a crisscross pattern.', section: SECTIONS.MAIN, img: [cookies11, cookies12] },
        { step: 'Bake for 10 minutes.', section: SECTIONS.MAIN, img: cookies14 },
        { step: 'Let cookies completely cool before transferring. They will continue to set while on the baking sheet.', section: SECTIONS.MAIN },
        { step: 'Enjoy these light, delicious cookies.', section: SECTIONS.SERVE },
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