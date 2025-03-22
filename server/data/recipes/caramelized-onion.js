const buttered = '../assets/Products/caramelized-onion-buttered-onion.jpeg';
const caramelized = '../assets/Products/caramelized-onion-caramelized-cooked.jpeg';
const combined = '../assets/Products/caramelized-onion-combined.jpeg';
const cooked = '../assets/Products/caramelized-onion-cooked.jpeg';
const sliced = '../assets/Products/caramelized-onion-thinly-sliced.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS, UNITS } = require("./constants");
const {
    RED_ONION,
    UNSALTED_BUTTER,
    BROWN_SUGAR,
    LIGHT_SOY_SAUCE,
    SALT,
    BLACK_PEPPER,
    BALSAMIC_VINEGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Caramelized Onion',
    name: 'Caramelized Onion',
    img: caramelized,
    available: true,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    yields: '6 servings',
    prepTime: '2 m',
    cookTime: '15 m',
    ingredients: [
        { ...RED_ONION, amount: 1, unit: '', additionalDetails: 'thinly sliced', section: SECTIONS.TOPPING },
        { ...UNSALTED_BUTTER, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...BROWN_SUGAR, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...BALSAMIC_VINEGAR, amount: 3, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPING },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPING },
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
        { step: 'Over medium-high heat, melt butter in a pan.', type: SECTIONS.TOPPING, img: sliced },
        { step: 'Add the red onions and let it brown.', type: SECTIONS.TOPPING, img: buttered },
        { step: 'Add the brown sugar, balsamic vinegar, and soy sauce when the onions begins to brown.', type: SECTIONS.TOPPING },
        { step: 'Stir and cook for about 3 minutes.', type: SECTIONS.TOPPING },
        { step: 'Season with salt and pepper and cook until onions are browned and soft.', type: SECTIONS.TOPPING, img: cooked },
        { step: 'Serve as a topping for pizza, burgers, or meat.', type: SECTIONS.TOPPING, img: combined },
    ]
};