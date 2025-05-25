const pie1 = '../assets/Products/frozen-mud-pie-1.jpeg';
const pie2 = '../assets/Products/frozen-mud-pie-2.jpeg';
const pie3 = '../assets/Products/frozen-mud-pie-3.jpeg';
const pie4 = '../assets/Products/frozen-mud-pie-4.jpeg';
const pie5 = '../assets/Products/frozen-mud-pie-5.jpeg';
const pie6 = '../assets/Products/frozen-mud-pie-6.jpeg';
const pie7 = '../assets/Products/frozen-mud-pie-7.jpeg';
const pie8 = '../assets/Products/frozen-mud-pie-8.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { OREO_COOKIES, UNSALTED_BUTTER, CHOCOLATE_ICE_CREAM, WHIPPED_CREAM, UNSALTED_PEANUT, HOT_FUDGE_SAUCE } = require('./ingredients');

const CRUST_SECTION = 'Crust';
const ICE_CREAM_FILLING_SECTION = 'Ice Cream Filling';
const HOT_FUDGE_SECTION = 'Hot Fudge';

const MAKE_CRUST = 'Make Crust';
const ADD_ICE_CREAM = 'Add Ice Cream';
const ADD_HOT_FUDGE = 'Add Hot Fudge';
const ADD_TOPPINGS = 'Add Toppings';

module.exports = {
    cardName: 'Frozen Mud Pie',
    name: 'Frozen Mud Pie',
    img: pie8,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.FREEZE],
    type: [TYPES.DESSERT, TYPES.PIE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 195, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Frozen Mud Pie', link: 'https://www.facebook.com/photo.php?fbid=122096829650877256' }
    ],
    separated: true,
    ingredients: [
        { ...OREO_COOKIES, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'crushed cookies', section: CRUST_SECTION },
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: CRUST_SECTION },
        { ...CHOCOLATE_ICE_CREAM, amount: 1, unit: INGREDIENT_UNITS.QUART, additionalDetails: 'softened', section: ICE_CREAM_FILLING_SECTION },
        { ...HOT_FUDGE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: HOT_FUDGE_SECTION },
        { ...OREO_COOKIES, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'crushed cookies', section: SECTIONS.TOPPINGS },
        { ...WHIPPED_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...UNSALTED_PEANUT, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'freezer' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'pie pan' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Crust" section ingredients.', section: MAKE_CRUST, img: [pie1, pie2, pie3] },
        { step: 'Pour the mixture into a pie pan.', section: MAKE_CRUST, img: pie4 },
        { step: 'Freeze until set (about 15 minutes).', section: MAKE_CRUST },

        { step: 'Evenly spread the ice cream in the crust.', section: ADD_ICE_CREAM, img: pie5 },
        { step: 'Freeze for 30 minutes.', section: ADD_ICE_CREAM },

        { step: 'Drizzle the hot fudge in any desired pattern.', section: ADD_HOT_FUDGE, img: pie6 },
        { step: 'Freeze for 30 minutes.', section: ADD_HOT_FUDGE },

        { step: 'Top pie with your favorite toppings.', section: ADD_TOPPINGS, img: pie7 },
        { step: 'Freeze for at least 2 hours or overnight.', section: ADD_TOPPINGS },

        { step: 'Serve this topped with any other favorite toppings.', section: SECTIONS.SERVE },
    ], 
    notes: [
        { note: 'I ended up having issues with drizzling the hot fudge. I ended up pouring it and then using a wooden skewer to drag the chocolate in a random pattern.' }
    ]
};