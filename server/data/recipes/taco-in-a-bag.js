const taco = '../assets/Products/taco-in-a-bag.jpeg';
const { MAIN, TOPPINGS } = require('./constants');

module.exports = {
    cardName: 'Taco in a Bag',
    name: 'Taco in a Bag',
    img: taco,
    available: true,
    type: 'Lunch / Dinner',
    yields: '3 - 4 servings',
    prepTime: '5 - 10 m',
    cookTime: '10 m',
    separated: true,
    ingredients: [
        { name: 'ground beef', amount: '1 lb', additionalDetails: '', optional: false, section: MAIN },
        { name: 'medium-sized frito chips', amount: '1 bag', additionalDetails: '', optional: false, section: MAIN },
        { name: 'taco seasoning', amount: '', additionalDetails: '', optional: false, section: MAIN },
        { name: 'black bean', amount: '8 oz', additionalDetails: '', optional: false, section: MAIN },
        { name: 'corn', amount: '8 oz', additionalDetails: '', optional: false, section: MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: MAIN },
        { name: 'tomato', amount: '', additionalDetails: 'diced', optional: false, section: TOPPINGS },
        { name: 'green bell peppers', amount: '', additionalDetails: 'diced', optional: false, section: TOPPINGS },
        { name: 'sour cream', amount: '', additionalDetails: '', optional: false, section: TOPPINGS },
        { name: 'shredded cheese', amount: '', additionalDetails: '', optional: false, section: TOPPINGS },
        { name: 'lettuce', amount: '', additionalDetails: 'shredded', optional: false, section: TOPPINGS },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'pan' },
        { name: 'pot' },
        { name: 'spatula' },
        { name: 'cutting board and knife' },
        { name: 'small bowls for toppings' },
        { name: 'serving spoons' },

    ],
    directions: [
        { step: 'Heat up a pan over medium-high heat, and once it is hot add in the ground beef.', type: MAIN },
        { step: 'Follow the directions of the taco seasoning, typically it is adding water and the taco seasoning to the browned ground beef.', type: MAIN },
        { step: 'While the meat is cooking, you can heat up the black beans and corn in a pot with some salt over medium-high heat.', type: MAIN },
        { step: 'Once the meat is cooked and the corn and beans are hot, serve over bowls of frito chips (you could also do actual small bags of fritos, however I think that a large bag is more economical).', type: MAIN },
        { step: 'Layer your taco in a bag (or bowl) with whatever toppings you want and enjoy this simple, fun party in a bag.', type: MAIN },
    ]
};