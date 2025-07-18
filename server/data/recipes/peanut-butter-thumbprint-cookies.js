const cookies1 = '../assets/Products/pb-thumbprint-cookies-1.jpeg';
const cookies2 = '../assets/Products/pb-thumbprint-cookies-2.jpeg';
const cookies3 = '../assets/Products/pb-thumbprint-cookies-3.jpeg';
const cookies4 = '../assets/Products/pb-thumbprint-cookies-4.jpeg';
const cookies5 = '../assets/Products/pb-thumbprint-cookies-5.jpeg';
const cookies6 = '../assets/Products/pb-thumbprint-cookies-6.jpeg';
const cookies7 = '../assets/Products/pb-thumbprint-cookies-7.jpeg';
const cookies8 = '../assets/Products/pb-thumbprint-cookies-8.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { PEANUT_BUTTER, UNSALTED_BUTTER, WHITE_SUGAR, BROWN_SUGAR, SALT, EGG, VANILLA_EXTRACT, ALL_PURPOSE_FLOUR, BAKING_SODA, HERSHEYS_KISSES } = require('./ingredients');

const DRY_INGREDIENTS = 'Dry Ingredients';
const WET_INGREDIENTS = 'Wet Ingredients';
const DRY_2_INGREDIENTS = 'Dry 2 Ingredients';

module.exports = {
    cardName: 'PB Thumbprint Cookies',
    name: 'Peanut Butter Thumbprint Cookies',
    img: cookies8,
    recipeAuthor: '',
    recipeFinder: 'Justin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.COOKIE],
    yields: { amount: '3', unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: '20', unit: TIME_UNITS.MINUTE },
    cookTime: { amount: '10', unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Peanut Butter Blossoms', link: 'https://preppykitchen.com/peanut-butter-blossoms/' }
    ],
    separated: true,
    ingredients: [
        { ...PEANUT_BUTTER, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: DRY_INGREDIENTS },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...EGG, amount: 1, unit: '', additionalDetails: 'room temperature', section: WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WET_INGREDIENTS },
        { ...ALL_PURPOSE_FLOUR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_2_INGREDIENTS },
        { ...BAKING_SODA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_2_INGREDIENTS },
        { ...HERSHEYS_KISSES, amount: 36, unit: '', additionalDetails: 'unwrapped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
    ],
    directions: [
        { step: 'Preheat the oven to 375ºF.', section: SECTIONS.MAKE_DOUGH },
        { step: 'Place silicon baking mat on a baking sheet.', section: SECTIONS.MAKE_DOUGH },
        { step: `In a stand mixer, cream the "${DRY_INGREDIENTS}" section ingredients until combined.`, section: SECTIONS.MAKE_DOUGH, img: [cookies1, cookies2] },
        { step: `Add the "${WET_INGREDIENTS}" section ingredients. Beat together and scrape down.`, section: SECTIONS.MAKE_DOUGH, img: cookies3 },
        { step: `Add the "${DRY_2_INGREDIENTS}" section ingredients. Beat on low until combined.`, section: SECTIONS.MAKE_DOUGH, img: cookies4 },
        { step: 'Form 1-inch balls and place on baking sheet 2 inches apart.', section: SECTIONS.MAKE_DOUGH, img: cookies5 },
        { step: 'Bake until cookies are puffy (for about 8 to 10 minutes).', section: SECTIONS.BAKE, img: cookies6 },
        { step: 'Immediately add and press kisses to the center of the cookie.', section: SECTIONS.BAKE, img: cookies7 },
        { step: 'Let cookies cool completely on the pan.', section: SECTIONS.BAKE },
        { step: 'Enjoy these delicious treats.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Do not do what I did and accidentally leave the spatula in the bowl and turn on the mixer.' },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};