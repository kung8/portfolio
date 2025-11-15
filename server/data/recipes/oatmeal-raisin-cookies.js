const raisin = '../assets/Products/oatmeal-raisin-cookies-1.jpeg';
const raw = '../assets/Products/oatmeal-raisin-cookies-2.jpeg';
const cooled = '../assets/Products/oatmeal-raisin-cookies-3.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_POWDER,
    BAKING_SODA,
    BROWN_SUGAR,
    EGG,
    MIXING_BOWL,
    OVEN,
    RAISINS,
    SALT,
    SEMI_SWEET_CHOCOLATE_CHIPS,
    SILICONE_BAKING_MAT,
    SPATULA,
    STEEL_OATS,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WHITE_SUGAR,
} = require('./ingredients');

const OAT_SECTION = 'Oats';
const RAISIN_SECTION = 'Raisins';
const CHOCOLATE_SECTION = 'Chocolate Chips';

const ADD_WET_INGREDIENTS = 'Add Wet Ingredients';
const ADD_OATS = 'Add Oats';
const ADD_RAISINS = 'Add Raisins';
const ADD_CHOCOLATE_CHIPS = 'Add Chocolate Chips';
const FORM_BALLS = 'Form Balls';

module.exports = {
    cardName: 'Oatmeal Raisin Cookies',
    name: 'Oatmeal Raisin Cookies',
    img: cooled,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 4, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 13, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Oatmeal Raisin Cookies',
            link: "https://www.food.com/recipe/oatmeal-raisin-cookies-35813",
            authors: ['Bev I Am'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },

        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: SECTIONS.WET_INGREDIENTS },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },

        { ...STEEL_OATS, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'non-instant', section: OAT_SECTION },
        { ...RAISINS, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RAISIN_SECTION },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        SPATULA,
        SILICONE_BAKING_MAT,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `In a mixing bowl, add flour, baking soda, baking powder, salt, and sugars until well combined.`, section: SECTIONS.PREP_DRY_INGREDIENTS },
        { step: `Slowly add the softened butter, eggs, and vanilla. Mix as each component is added.`, section: ADD_WET_INGREDIENTS },
        { step: `Mix as you slowly add the oats.`, section: ADD_OATS },
        { step: `Mix as you slowly add the raisins.`, section: ADD_RAISINS, img: raisin },
        { step: `Optionally add chocolate chips.`, section: ADD_CHOCOLATE_CHIPS },
        { step: `Shape the dough into 1 inch balls. Place them onto a baking sheet.`, section: FORM_BALLS, img: raw },
        { step: `Bake until the cookies are golden brown (about 12 to 13 minutes).`, section: SECTIONS.BAKE },
        { step: `Remove the cookies from the oven. Let the cookies sit on the baking sheet for at least 2 minutes before transferring to a cooling rack.`, section: SECTIONS.COOL },
        { step: `Enjoy these crispy treats.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};