// const cilantroLimeChicken = '../assets/Products/cilantro-lime-chicken.jpeg';
const { CATEGORIES, SECTIONS } = require("./constants");

module.exports = {
    cardName: 'Caramelized Onion',
    name: 'Caramelized Onion',
    // img: cilantroLimeChicken,
    available: true,
    type: [CATEGORIES.TOPPING],
    yields: '6 servings',
    prepTime: '2 m',
    cookTime: '15 m',
    ingredients: [
        { name: 'red onion', amount: '1', additionalDetails: 'thinly sliced', optional: false, section: SECTIONS.TOPPING },
        { name: 'butter', amount: '2 T', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'brown sugar', amount: '2 T', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'balsamic vinegar', amount: '3 T', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'soy sauce', amount: '1 t', additionalDetails: '', optional: false, section: SECTIONS.TOPPING },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.TOPPING },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.TOPPING },
    ],
    supplies: [
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Over medium-high heat, melt butter in a pan.', type: SECTIONS.TOPPING },
        { step: 'Add the red onions and let it brown.', type: SECTIONS.TOPPING },
        { step: 'Add the brown sugar, balsamic vinegar, and soy sauce when the onions begins to brown.', type: SECTIONS.TOPPING },
        { step: 'Stir and cook for about 3 minutes.', type: SECTIONS.TOPPING },
        { step: 'Season with salt and pepper and cook until onions are browned and soft.', type: SECTIONS.TOPPING },
        { step: 'Serve as a topping for pizza, burgers, or meat.', type: SECTIONS.TOPPING },
    ]
};