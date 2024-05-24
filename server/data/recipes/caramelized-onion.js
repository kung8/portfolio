const buttered = '../assets/Products/caramelized-onion-buttered-onion.jpeg';
const caramelized = '../assets/Products/caramelized-onion-caramelized-cooked.jpeg';
const combined = '../assets/Products/caramelized-onion-combined.jpeg';
const cooked = '../assets/Products/caramelized-onion-cooked.jpeg';
const sliced = '../assets/Products/caramelized-onion-thinly-sliced.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS } = require("./constants");

module.exports = {
    cardName: 'Caramelized Onion',
    name: 'Caramelized Onion',
    img: caramelized,
    available: true,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.AMERICAN, GENRES.WESTERN],
    method: [METHODS.SAUTE],
    yields: '6 servings',
    prepTime: '2 m',
    cookTime: '15 m',
    ingredients: [
        { name: 'red onion', amount: '1', additionalDetails: 'thinly sliced', optional: false, section: SECTIONS.TOPPING },
        { name: 'butter', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'brown sugar', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'balsamic vinegar', amount: '3 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'soy sauce', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.TOPPING },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.TOPPING },
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