const cookies1 = '../assets/Products/browned-butter-chocolate-chip-cookies-1.jpeg';
const cookies2 = '../assets/Products/browned-butter-chocolate-chip-cookies-2.jpeg';
const cookies3 = '../assets/Products/browned-butter-chocolate-chip-cookies-3.jpeg';
const cookies4 = '../assets/Products/browned-butter-chocolate-chip-cookies-4.jpeg';
const cookies5 = '../assets/Products/browned-butter-chocolate-chip-cookies-5.jpeg';
const cookies6 = '../assets/Products/browned-butter-chocolate-chip-cookies-6.jpeg';
const cookies7 = '../assets/Products/browned-butter-chocolate-chip-cookies-7.jpeg';
const cookies8 = '../assets/Products/browned-butter-chocolate-chip-cookies-8.jpeg';
const cookies9 = '../assets/Products/browned-butter-chocolate-chip-cookies-9.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, BAKING_SODA, BROWNED_BUTTER, BROWN_SUGAR, CAKE_FLOUR, COOLING_RACK, CORNSTARCH, EGG, EGG_YOLK, MILK_CHOCOLATE, MIXING_BOWL, OVEN, SALT, SAUCEPAN, SEMI_SWEET_CHOCOLATE_CHIPS, SILICONE_BAKING_MAT, STOVE, VANILLA_EXTRACT, WALNUTS, WHITE_SUGAR } = require('./ingredients');

const BROWNED_BUTTER_SECTION = 'Browned Butter';
const SUGARS = 'Sugars';
const EGGS_SECTION = 'Eggs';
const FLOURS = 'Flours';

module.exports = {
    cardName: 'Browned Butter Cookies',
    name: 'Browned Butter Chocolate Chip Cookies',
    img: cookies8,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.COOKIE],
    yields: { amount: 3 / 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 11, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            bookTitle: 'Knife Drop: Creative Recipes Anyone Can Cook',
            label: 'Browned Butter Chocolate Chip Cookies',
            link: null,
            authors: ['Nick DiGiovanni'],
            finder: 'Justin Ung'
        }
    ],
    ingredients: [
        { ...BROWNED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BROWNED_BUTTER_SECTION, link: { id: 'browned-butter', url: 'recipes/browned-butter' } },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGARS },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGARS },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SUGARS },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: EGGS_SECTION },
        { ...EGG_YOLK, amount: 1, unit: '', additionalDetails: '', section: EGGS_SECTION },
        { ...CAKE_FLOUR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOURS },
        { ...ALL_PURPOSE_FLOUR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOURS },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOURS },
        { ...BAKING_SODA, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOURS },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOURS },
        { ...MILK_CHOCOLATE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'chopped', section: SECTIONS.FILLING },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WALNUTS, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.FILLING },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        SAUCEPAN,
        MIXING_BOWL,
        SILICONE_BAKING_MAT,
        BAKING_SHEET,
        COOLING_RACK,
    ],
    directions: [
        { step: `Preheat the oven to 415ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Place silicon baking mats on baking sheets.`, section: SECTIONS.MAIN },
        { step: `In a mixing bowl, combine the "Sugars" ingredients.`, section: SECTIONS.MAIN, img: cookies1 },
        { step: `Add the "Eggs" ingredients one at a time.`, section: SECTIONS.MAIN, img: cookies2 },
        { step: `Add the "Flours" ingredients.`, section: SECTIONS.MAIN, img: cookies3 },
        { step: `Add the "Filling" ingredients. Mix together. Dough will be crumbly. But you can add 1 to 2 tablespoons of water if you feel it will not stick together.`, section: SECTIONS.MAIN, img: cookies4 },
        { step: `Divide the dough into 8 to 24 mounds (depending on how large you want the cookies). They will look about the same when they finish.`, section: SECTIONS.MAIN, img: [cookies5, cookies6] },
        { step: `Bake until golden brown (about 8 to 11 minutes).`, section: SECTIONS.MAIN, img: cookies7 },
        { step: `Let the cookies cool on a cooling rack (about 10 minutes).`, section: SECTIONS.MAIN },
        { step: `Enjoy these warm, fluffy, gooey treats.`, section: SECTIONS.MAIN, img: cookies9 },
    ],
    store: [
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};