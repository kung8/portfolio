const frenchToast = '../assets/Products/french-toast.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require("./constants");
const {
    EGGS,
    VANILLA_EXTRACT,
    CINNAMON,
    MILK,
    BREAD,
    UNSALTED_BUTTER,
} = require('./ingredients');

module.exports = {
    cardName: 'French Toast',
    name: 'French Toast',
    img: frenchToast,
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.BREAD],
    yields: '2 servings',
    prepTime: '5 m',
    cookTime: '8 - 10 m',
    ingredients: [
        { ...EGGS, amount: '2', additionalDetails: '', optional: false },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', optional: false },
        { ...CINNAMON, amount: '1 tsp', additionalDetails: '', optional: false },
        { ...MILK, amount: '3/4 c', additionalDetails: '', optional: false },
        { ...BREAD, amount: '8', additionalDetails: '', optional: false },
        { ...UNSALTED_BUTTER, amount: '8', additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'stove' },
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