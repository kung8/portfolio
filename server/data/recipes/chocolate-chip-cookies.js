const cookies1 = '../assets/Products/chocolate-chip-cookies-1.jpeg';
const cookies2 = '../assets/Products/chocolate-chip-cookies-2.jpeg';
const cookies3 = '../assets/Products/chocolate-chip-cookies-3.jpeg';
const cookies4 = '../assets/Products/chocolate-chip-cookies-4.jpeg';
const cookies5 = '../assets/Products/chocolate-chip-cookies-5.jpeg';
const cookies6 = '../assets/Products/chocolate-chip-cookies-6.jpeg';
const cookies7 = '../assets/Products/chocolate-chip-cookies-7.jpeg';
const cookies8 = '../assets/Products/chocolate-chip-cookies-8.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    ALL_PURPOSE_FLOUR,
    ALUMINUM_FOIL,
    BAKING_SHEET,
    BAKING_SODA,
    BROWN_SUGAR,
    EGG,
    MEASURING_CUPS,
    MEASURING_SPOONS,
    MIXING_BOWL,
    OVEN,
    RUBBER_SPATULA,
    SALT,
    SEMI_SWEET_CHOCOLATE_CHIPS,
    SMALL_BOWL,
    SPOON,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WATER,
    WHITE_SUGAR,
} = require('./ingredients');

const CREAMED_BUTTER = 'Creamed Butter';
const VANILLA_SECTION = 'Vanilla';
const BAKING_SODA_MIXTURE_SECTION = 'Baking Soda Mixture';
const FLOUR_SECTION = 'Flour';
const CHOCOLATE_CHIP_SECTION = 'Chocolate Chips';

const BEAT_EGGS = 'Beat Eggs';
const ADD_VANILLA = 'Add Vanilla';
const DISSOLVE_BAKING_SODA = 'Dissolve Baking Soda';
const ADD_FLOUR = 'Add Flour';
const ADD_CHOCOLATE_CHIPS = 'Add Chocolate Chips';

module.exports = {
    cardName: 'Chocolate Chip Cookies',
    name: 'Chocolate Chip Cookies',
    img: cookies8,
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
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened at room temperature', section: CREAMED_BUTTER },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAMED_BUTTER },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAMED_BUTTER },

        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.EGGS },

        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VANILLA_SECTION },

        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BAKING_SODA_MIXTURE_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'hot', section: BAKING_SODA_MIXTURE_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BAKING_SODA_MIXTURE_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_SECTION },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_CHIP_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        ALUMINUM_FOIL,
        MIXING_BOWL,
        SMALL_BOWL,
        RUBBER_SPATULA,
        MEASURING_CUPS,
        MEASURING_SPOONS,
        SPOON,
    ],
    directions: [
        { step: `Preheat the oven to 375ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Lay aluminum foil on baking sheets.`, section: SECTIONS.PREP_PAN },

        { step: `In a mixing bowl, cream together the softened butter, white sugar, and brown sugar.`, section: SECTIONS.CREAM_BUTTER, img: cookies1 },

        { step: `Beat in eggs one at a time.`, section: BEAT_EGGS, img: cookies2 },

        { step: `Mix in vanilla.`, section: ADD_VANILLA, img: cookies2 },

        { step: `In a small bowl, combine baking soda, salt, and hot water. Dissolve.`, section: DISSOLVE_BAKING_SODA, img: cookies3 },

        { step: `Mix flour one cup at a time.`, section: ADD_FLOUR, img: cookies4 },

        { step: `Add chocolate chips.`, section: ADD_CHOCOLATE_CHIPS, img: cookies5 },

        { step: `Take a spoonful of batter, ball it up about an inch in diameter, and place on baking sheets.`, section: SECTIONS.FORM_BALLS, img: cookies6 },

        { step: `Place the baking sheets in the freezer. Chill for 10 minutes.`, section: SECTIONS.CHILL },

        { step: `Bake until the edges of the cookies are golden brown and the center is soft (about 10 to 12 minutes).`, section: SECTIONS.BAKE },

        { step: `Cool on pan for a few minutes. Transferring to a cooling rack.`, section: SECTIONS.COOL },

        { step: `Enjoy these delicious treats with a cold glass of milk!`, section: SECTIONS.SERVE, img: cookies7 },
    ],
    notes: [
        { note: 'To soften butter: (1) leave in room temperature, or (2) warm in microwave for 20 to 30 seconds on 50% power (but times will vary based on the original softness of butter and microwave model).' },
        { note: 'Freezing the cookie dough before baking helps control the spread, deepen the flavor, create crispier edges and chewier cookies, and a more even bake.' },
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