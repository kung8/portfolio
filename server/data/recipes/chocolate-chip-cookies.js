const cookieDough = '../assets/Products/cookie-dough.jpeg';
const activated = '../assets/Products/chocolate-chip-cookies-activated-baking-soda.jpeg';
const bakingSoda = '../assets/Products/chocolate-chip-cookies-baking-soda.jpeg';
const batter = '../assets/Products/chocolate-chip-cookies-batter-without-chocolate-chips.jpeg';
const chocolateChips = '../assets/Products/chocolate-chip-cookies-batter.jpeg';
const creamed1 = '../assets/Products/chocolate-chip-cookies-creamed-sugar-1.jpeg';
const creamed2 = '../assets/Products/chocolate-chip-cookies-creamed-sugar-2.jpeg';
const eggs = '../assets/Products/chocolate-chip-cookies-eggs.jpeg';
const flour = '../assets/Products/chocolate-chip-cookies-flour.jpeg';
const mixedEggs = '../assets/Products/chocolate-chip-cookies-mixed-eggs.jpeg';
const softened = '../assets/Products/chocolate-chip-cookies-softened-butter.jpeg';
const vanilla = '../assets/Products/chocolate-chip-cookies-vanilla.jpeg';
const plated = '../assets/Products/chocolate-chip-cookies-plated.jpeg';
const zoomed = '../assets/Products/chocolate-chip-cookies-plated-zoomed.jpeg';

const { CATEGORIES, SECTIONS, GENRES, METHODS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_LOCATION, STORAGE_DURATION_UNIT, STORAGE_CONTAINER } = require("./constants");
const {
    UNSALTED_BUTTER,
    WHITE_SUGAR,
    EGG,
    VANILLA_EXTRACT,
    BAKING_SODA,
    HOT_WATER,
    SALT,
    ALL_PURPOSE_FLOUR,
    SEMI_SWEET_CHOCOLATE_CHIPS,
    BROWN_SUGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Chocolate Chip Cookies',
    name: 'Chocolate Chip Cookies',
    img: zoomed,
    recipeAuthors: ['Kevin Ung'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
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
        { step: 'To soften butter: (1) leave in room temperature, or (2) warm in microwave for 20 - 30 seconds on 50% power (but times will vary based on the original softness of butter and microwave model).', section: SECTIONS.MAIN, img: softened },
        { step: 'Cream together the softened butter, white sugar, and brown sugar in a large mixing bowl.', section: SECTIONS.MAIN, img: [creamed1, creamed2] },
        { step: 'Beat in eggs one at a time and mix in vanilla.', section: SECTIONS.MAIN, img: [eggs, mixedEggs, vanilla] },
        { step: 'Separately combine baking soda, salt, and hot water. Wait a few seconds for the baking soda to dissolve before adding to the batter.', section: SECTIONS.MAIN, img: [bakingSoda, activated] },
        { step: 'Mix flour one cup at a time into the batter.', section: SECTIONS.MAIN, img: [flour, batter] },
        { step: 'Add chocolate chips.', section: SECTIONS.MAIN, img: chocolateChips },
        { step: 'Take a spoonful of batter, ball it up about an inch in diameter, and place on baking sheets.', section: SECTIONS.MAIN, img: cookieDough },
        { step: 'Place the baking sheets in the freezer. Chill up to 24 hours (I think 10 minutes might have been fine). This helps control the spread, deepen the flavor, created crispier edges and chewier cookies, and a more even bake.', section: SECTIONS.MAIN },
        { step: 'Bake for 10 minutes.', section: SECTIONS.MAIN },
        { step: 'Let cool for a few minutes before transferring to a cooling rack.', section: SECTIONS.MAIN },
        { step: 'Enjoy these delicious treats with a cold glass of milk!', section: SECTIONS.MAIN, img: plated },
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