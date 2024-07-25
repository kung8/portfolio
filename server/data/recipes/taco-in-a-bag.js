const taco = '../assets/Products/taco-in-a-bag.jpeg';
const { CATEGORIES, GENRES, SECTIONS, METHODS, PROTEIN } = require('./constants');

module.exports = {
    cardName: 'Taco in a Bag',
    name: 'Taco in a Bag',
    img: taco,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.MEXICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    yields: '3 - 4 servings',
    prepTime: '5 - 10 m',
    cookTime: '10 m',
    separated: true,
    ingredients: [
        { name: 'ground beef', amount: '1 lb', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'medium-sized frito chips', amount: '1 bag', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'taco seasoning', amount: '', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'black bean', amount: '8 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'corn', amount: '8 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { name: 'tomato', amount: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { name: 'green bell peppers', amount: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { name: 'sour cream', amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { name: 'shredded cheese', amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { name: 'lettuce', amount: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pan' },
        { name: 'pot' },
        { name: 'spatula' },
        { name: 'cutting board and knife' },
        { name: 'small bowls for SECTIONS.toppings' },
        { name: 'serving spoons' },
    ],
    directions: [
        { step: 'Heat up a pan over medium-high heat, and once it is hot add in the ground beef.', type: SECTIONS.MAIN },
        { step: 'Follow the directions of the taco seasoning, typically it is adding water and the taco seasoning to the browned ground beef.', type: SECTIONS.MAIN },
        { step: 'While the meat is cooking, you can heat up the black beans and corn in a pot with some salt over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Once the meat is cooked and the corn and beans are hot, serve over bowls of frito chips (you could also do actual small bags of fritos, however I think that a large bag is more economical).', type: SECTIONS.MAIN },
        { step: 'Layer your taco in a bag (or bowl) with whatever SECTIONS.toppings you want and enjoy this simple, fun party in a bag.', type: SECTIONS.MAIN },
    ]
};