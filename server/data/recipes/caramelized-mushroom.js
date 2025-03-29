const combined = '../assets/Products/caramelized-mushroom-combined.jpeg';
const cooked = '../assets/Products/caramelized-mushroom-cooked.jpeg';
const cooking = '../assets/Products/caramelized-mushroom-cooking.jpeg';
const raw = '../assets/Products/caramelized-mushroom-raw.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const {
    MUSHROOM,
    UNSALTED_BUTTER,
    BROWN_SUGAR,
    LIGHT_SOY_SAUCE,
    SALT,
    BLACK_PEPPER,
    BALSAMIC_VINEGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Caramelized Mushroom',
    name: 'Caramelized Mushroom',
    img: cooked,
    available: true,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 2, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...MUSHROOM, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...BALSAMIC_VINEGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPING },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.TOPPING },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Over medium-high heat, melt butter in a pan.', type: SECTIONS.TOPPING },
        { step: 'Add the mushroom and let it brown.', type: SECTIONS.TOPPING, img: raw },
        { step: 'Add the brown sugar, balsamic vinegar, and soy sauce when the mushroom begins to brown.', type: SECTIONS.TOPPING },
        { step: 'Stir and cook for about 3 minutes.', type: SECTIONS.TOPPING, img: cooking },
        { step: 'Season with salt and pepper and cook until mushrooms are browned and soft.', type: SECTIONS.TOPPING },
        { step: 'Serve as a topping for pizza, burgers, or meat.', type: SECTIONS.TOPPING, img: combined },
    ]
};