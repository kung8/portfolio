const frenchToast = '../assets/Products/french-toast.jpeg';
const { CATEGORIES, SECTIONS } = require("./constants");

module.exports = {
    cardName: 'French Toast',
    name: 'French Toast',
    img: frenchToast,
    available: true,
    type: [CATEGORIES.BREAKFAST],
    yields: '2 servings',
    prepTime: '5 m',
    cookTime: '8 - 10 m',
    ingredients: [
        { name: 'egg', amount: '2', additionalDetails: '', optional: false },
        { name: 'vanilla', amount: '1 tsp', additionalDetails: '', optional: false },
        { name: 'cinnamon', amount: '1 tsp', additionalDetails: '', optional: false },
        { name: 'milk', amount: '3/4 c', additionalDetails: '', optional: false },
        { name: 'bread', amount: '8', additionalDetails: '', optional: false },
        { name: 'butter', amount: '8', additionalDetails: '', optional: false },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'frying pan' },
        { name: 'rubber spatula' },
        { name: 'measuring spoon' },
        { name: 'measuring cup' },
    ],
    directions: [
        { step: 'Mix eggs, vanilla, cinnamon, and milk together.', type: SECTIONS.MAIN },
        { step: 'Dredge bread in on both sides in batter one at a time right before frying.', type: SECTIONS.MAIN },
        { step: 'Heat a frying pan over medium heat and add some butter to pan.', type: SECTIONS.MAIN },
        { step: 'Brown each side of bread (about 30 seconds on each side).', type: SECTIONS.MAIN },
        { step: 'Serve and add fruits, syrup, and all your favorite toppings.', type: SECTIONS.MAIN },
    ]
};