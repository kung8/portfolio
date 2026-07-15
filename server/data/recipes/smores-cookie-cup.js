// const example1 = '../assets/Products/example-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    SECTIONS,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { AIR_FRYER, MINI_GRAHAM_CRACKER_PIE_CRUST, MINI_MARSHMALLOWS, REFRIGERATED_COOKIE_DOUGH, SEMI_SWEET_CHOCOLATE_CHIPS, SPOON, VANILLA_ICE_CREAM } = require('./ingredients');

const COOKIE_PIE = 'Cookie Pie';
const PREP_DESSERT = 'Prep Dessert';

module.exports = {
    wip: true,
    cardName: "S'mores Cookie Cup",
    name: "S'mores Cookie Cup",
    img: '',
    available: true,
    recommended: false,
    createdAt: '04/05/2026 22:10:41',
    modifiedAt: '04/05/2026 22:10:41',
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.AIR_FRY],
    type: [TYPES.DESSERT],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: "S'mores Cookie Cup", link: 'https://www.facebook.com/61552163908203/videos/722477680835461/', authors: ['Jen Glufling'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...MINI_GRAHAM_CRACKER_PIE_CRUST, amount: 2, unit: '', additionalDetails: '', section: COOKIE_PIE },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1 / 4, unit: INGREDIENT_UNITS, additionalDetails: '', section: COOKIE_PIE },
        { ...MINI_MARSHMALLOWS, amount: 1 / 4, unit: INGREDIENT_UNITS, additionalDetails: '', section: COOKIE_PIE },
        { ...REFRIGERATED_COOKIE_DOUGH, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'or smallest amount', section: COOKIE_PIE },
        { ...VANILLA_ICE_CREAM, amount: '', unit: '', additionalDetails: 'or preferred flavor', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        AIR_FRYER,
    ],
    supplies: [
        SPOON,
    ],
    directions: [
        { step: `Fill each pie crust with chocolate chip and marshmallows.`, section: PREP_DESSERT },
        { step: `Scoop some of the cookie dough and flatten to fit the width of the crust.`, section: PREP_DESSERT },
        { step: `Air fry at 325ºF for 10 minutes.`, section: SECTIONS.AIR_FRY },
        { step: `Make an indentation in the center with the back of a spoon.`, section: SECTIONS.SERVE },
        { step: `Serve this with a scoop of ice cream.`, section: SECTIONS.SERVE },
    ],
    mealPrep: false,
};