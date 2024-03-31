const roast = '../assets/Products/roast.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, PROTEIN } = require("./constants");

module.exports = {
    cardName: 'Pot Roast',
    name: 'Pot Roast',
    img: roast,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    yields: '6 servings',
    prepTime: '15 m',
    cookTime: '4 h 15 m',
    ingredients: [
        { name: 'beef roast', amount: '3 lb', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'black pepper', amount: '2 sprigs', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'olive oil', amount: '', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'onions', amount: '2', additionalDetails: 'quartered', optional: false, section: SECTIONS.MAIN },
        { name: 'carrots', amount: '8', additionalDetails: 'cut into 2"', optional: false, section: SECTIONS.MAIN },
        { name: 'red wine', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'beef broth', amount: '3 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'fresh rosemary', amount: '2', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'fresh thyme', amount: '2 sprigs', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'oven' },
        { name: 'roasting pan' },
        { name: 'large pan' },
        { name: 'aluminum foil' },
    ],
    directions: [
        { step: 'Preheat oven to 275ºF.', type: SECTIONS.MAIN },
        { step: 'Salt and pepper the beef generously.', type: SECTIONS.MAIN },
        { step: 'Heat the olive oil in large pan over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Brown the onion on both sides. Then set aside in the roasting pan.', type: SECTIONS.MAIN },
        { step: 'Brown the carrots in the same way. Then add it to the roasting pan.', type: SECTIONS.MAIN },
        { step: 'Add a little more oil, and sear the beef on all sides.', type: SECTIONS.MAIN },
        { step: 'Then add beef, red wine, broth, rosemary, and thyme to the roasting pan.', type: SECTIONS.MAIN },
        { step: 'Add red wine, broth, rosemary, and thyme to the roasting pan.', type: SECTIONS.MAIN },
        { step: 'Cover the roasting pan with aluminum foil and roast for 3 hours or until the roast is tender.', type: SECTIONS.MAIN },
    ]
};