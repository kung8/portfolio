const cookies1 = '../assets/Products/chocolate-chip-cookies-1.jpeg';
const cookies2 = '../assets/Products/chocolate-chip-cookies-2.jpeg';
const cookies3 = '../assets/Products/chocolate-chip-cookies-3.jpeg';
const cookies4 = '../assets/Products/chocolate-chip-cookies-4.jpeg';
const cookies5 = '../assets/Products/chocolate-chip-cookies-5.jpeg';
const cookies6 = '../assets/Products/chocolate-chip-cookies-6.jpeg';
const cookies7 = '../assets/Products/chocolate-chip-cookies-7.jpeg';
const cookies8 = '../assets/Products/chocolate-chip-cookies-8.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    ALL_PURPOSE_FLOUR,
    BAKING_SODA,
    BROWN_SUGAR,
    EGG,
    HOT_WATER,
    SALT,
    SEMI_SWEET_CHOCOLATE_CHIPS,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WHITE_SUGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Chocolate Chip Cookies',
    name: 'Chocolate Chip Cookies',
    img: cookies8,
    recipeAuthors: ['Kevin Ung'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 3, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', optional: false },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...HOT_WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...ALL_PURPOSE_FLOUR, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking sheets' },
        { name: 'aluminum foil' },
        { name: 'large mixing bowl' },
        { name: 'small bowl' },
        { name: 'rubber spatula' },
        { name: 'measuring cups' },
        { name: 'measuring spoons' },
        { name: 'spoon' },
    ],
    directions: [
        { step: 'Preheat oven to 350 degrees F and lay aluminum foil on baking sheets.', section: SECTIONS.MAIN },
        { step: 'To soften butter: (1) leave in room temperature, or (2) warm in microwave for 20 - 30 seconds on 50% power (but times will vary based on the original softness of butter and microwave model).', section: SECTIONS.MAIN },
        { step: 'Cream together the softened butter, white sugar, and brown sugar in a large mixing bowl.', section: SECTIONS.MAIN, img: cookies1 },
        { step: 'Beat in eggs one at a time and mix in vanilla.', section: SECTIONS.MAIN, img: cookies2 },
        { step: 'Separately combine baking soda, salt, and hot water. Wait a few seconds for the baking soda to dissolve before adding to the batter.', section: SECTIONS.MAIN, img: cookies3 },
        { step: 'Mix flour one cup at a time into the batter.', section: SECTIONS.MAIN, img: cookies4 },
        { step: 'Add chocolate chips.', section: SECTIONS.MAIN, img: cookies5 },
        { step: 'Take a spoonful of batter, ball it up about an inch in diameter, and place on baking sheets.', section: SECTIONS.MAIN, img: cookies6 },
        { step: 'Place the baking sheets in the freezer. Chill up to 24 hours (I think 10 minutes might have been fine). This helps control the spread, deepen the flavor, created crispier edges and chewier cookies, and a more even bake.', section: SECTIONS.MAIN },
        { step: 'Bake for 10 minutes.', section: SECTIONS.MAIN },
        { step: 'Let cool for a few minutes before transferring to a cooling rack.', section: SECTIONS.MAIN },
        { step: 'Enjoy these delicious treats with a cold glass of milk!', section: SECTIONS.MAIN, img: cookies7 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
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