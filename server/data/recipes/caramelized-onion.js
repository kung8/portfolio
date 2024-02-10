// const cilantroLimeChicken = '../assets/Products/cilantro-lime-chicken.jpeg';
const { TOPPING } = require("./constants");

module.exports = {
    cardName: 'Caramelized Onion',
    name: 'Caramelized Onion',
    // img: cilantroLimeChicken,
    available: true,
    type: [TOPPING],
    yields: '6 servings',
    prepTime: '2 m',
    cookTime: '15 m',
    ingredients: [
        { name: 'red onion', amount: '1', additionalDetails: 'thinly sliced', optional: false, section: TOPPING },
        { name: 'butter', amount: '2 Tbsp', additionalDetails: '', optional: false, section: TOPPING },
        { name: 'brown sugar', amount: '2 Tbsp', additionalDetails: '', optional: false, section: TOPPING },
        { name: 'balsamic vinegar', amount: '3 Tbsp', additionalDetails: '', optional: false, section: TOPPING },
        { name: 'soy sauce', amount: '1 tsp', additionalDetails: '', optional: false, section: TOPPING },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: TOPPING },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: TOPPING },
    ],
    supplies: [
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Over medium-high heat, melt butter in a pan.', type: TOPPING },
        { step: 'Add the red onions and let it brown.', type: TOPPING },
        { step: 'Add the brown sugar, balsamic vinegar, and soy sauce when the onions begins to brown.', type: TOPPING },
        { step: 'Stir and cook for about 3 minutes.', type: TOPPING },
        { step: 'Season with salt and pepper and cook until onions are browned and soft.', type: TOPPING },
        { step: 'Serve as a topping for pizza, burgers, or meat.', type: TOPPING },
    ]
};