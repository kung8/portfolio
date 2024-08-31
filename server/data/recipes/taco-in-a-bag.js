const taco = '../assets/Products/taco-in-a-bag.jpeg';
const { CATEGORIES, GENRES, SECTIONS, METHODS, PROTEIN } = require('./constants');
const {
    BLACK_BEANS,
    BLACK_PEPPER,
    CHEDDAR_CHEESE,
    CORN,
    GREEN_BELL_PEPPERS,
    GROUND_BEEF,
    LETTUCE,
    SALT,
    SOUR_CREAM,
    FRITOS_CHIPS,
    TACO_SEASONING,
    ROMA_TOMATO,
} = require('./ingredients');

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
        { ...GROUND_BEEF, amount: '1 lb', additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRITOS_CHIPS, amount: '1 medium bag', additionalDetails: '', section: SECTIONS.MAIN },
        { ...TACO_SEASONING, amount: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_BEANS, amount: '8 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORN, amount: '8 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { ...GREEN_BELL_PEPPERS, amount: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { ...SOUR_CREAM, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEDDAR_CHEESE, amount: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...LETTUCE, amount: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
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