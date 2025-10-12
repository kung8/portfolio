const cookedZoomed = '../assets/Products/oatmeal-raisin-cookies-zoomed.jpeg';
const cooled = '../assets/Products/oatmeal-raisin-cookies-cooled.jpeg';
const dry = '../assets/Products/oatmeal-raisin-cookies-dry-ingredients.jpeg';
const liquid = '../assets/Products/oatmeal-raisin-cookies-liquid-added.jpeg';
const oatmeal = '../assets/Products/oatmeal-raisin-cookies-oatmeal-added.jpeg';
const plated = '../assets/Products/oatmeal-raisin-cookies-plated.jpeg';
const raisin = '../assets/Products/oatmeal-raisin-cookies-raisins-added.jpeg';
const raw = '../assets/Products/oatmeal-raisin-cookies-raw-pan.jpeg';
const chocolate = '../assets/Products/oatmeal-raisin-cookies-with-chocolate-chip.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
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
    SILICON_BAKING_MAT,
    SPATULA,
    STEEL_OATS,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WHITE_SUGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Oatmeal Raisin Cookies',
    name: 'Oatmeal Raisin Cookies',
    img: cookedZoomed,
    recipeAuthors: ['Bev I Am'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 13, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Oatmeal Raisin Cookies', link: "https://www.food.com/recipe/oatmeal-raisin-cookies-35813" }
    ],
    separated: false,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: SECTIONS.MAIN },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...STEEL_OATS, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'non-instant', section: SECTIONS.MAIN },
        { ...RAISINS, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        SPATULA,
        SILICON_BAKING_MAT,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'In a mixing bowl, add flour, baking soda, baking powder, salt, and sugars until well combined.', section: SECTIONS.MAIN, img: dry },
        { step: 'Slowly add the softened butter, eggs, and vanilla. Mix as each component is added.', section: SECTIONS.MAIN, img: liquid },
        { step: 'Mix as you slowly add the oats.', section: SECTIONS.MAIN, img: oatmeal },
        { step: 'Mix as you slowly add the raisins.', section: SECTIONS.MAIN, img: raisin },
        { step: 'Optionally add chocolate chips.', section: SECTIONS.MAIN },
        { step: 'Shape the dough into 1 inch balls. Place them onto a baking sheet.', section: SECTIONS.MAIN, img: raw },
        { step: 'Bake until the cookies are golden brown (about 12 to 13 minutes).', section: SECTIONS.MAIN, img: chocolate },
        { step: 'Remove the cookies from the oven. Let the cookies sit on the baking sheet for at least 2 minutes before transferring to a cooling rack.', section: SECTIONS.MAIN, img: cooled },
        { step: 'Enjoy these crispy treats.', section: SECTIONS.MAIN, img: plated },
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