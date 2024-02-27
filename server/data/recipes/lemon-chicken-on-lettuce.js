const lemonChickenOnLettuce = '../assets/Products/lemon-chicken-on-lettuce.jpeg';
const { CATEGORIES, SECTIONS } = require("./constants");

module.exports = {
    cardName: 'Lettuce Chicken',
    name: 'Lemon Chicken on Lettuce',
    img: lemonChickenOnLettuce,
    available: true,
    type: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    yields: '4 servings',
    prepTime: '5 m',
    cookTime: '15 m',
    ingredients: [
        { name: 'vegetable oil', amount: '1 T', additionalDetails: '', optional: false, section: '' },
        { name: 'chicken', amount: '1.5 lb', additionalDetails: 'sliced', optional: false, section: '' },
        { name: 'lemon juice', amount: '2 T', additionalDetails: '', optional: false, section: '' },
        { name: 'soy sauce', amount: '1 T', additionalDetails: '', optional: false, section: '' },
        { name: 'water', amount: '2 T', additionalDetails: '', optional: false, section: '' },
        { name: 'cornstarch', amount: '2 t', additionalDetails: '', optional: false, section: '' },
        { name: 'lettuce', amount: '7 oz', additionalDetails: '', optional: false, section: '' },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: '' },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: '' },
    ],
    supplies: [
        { name: 'stove' },
        { name: 'wok' },
    ],
    directions: [
        { step: 'Heat a wok over medium-high heat.', type: SECTIONS.MAIN },
        { step: 'Add vegetable oil and wait until it is hot.', type: SECTIONS.MAIN },
        { step: 'Add chicken to the wok and let it cook without flipping (about 1 to 2 minutes).', type: SECTIONS.MAIN },
        { step: 'Then flip and cook again for a few minutes.', type: SECTIONS.MAIN },
        { step: 'Season the chicken with salt and pepper.', type: SECTIONS.MAIN },
        { step: 'Add soy sauce, water, lemon juice and cornstarch to the chicken.', type: SECTIONS.MAIN },
        { step: 'The cornstarch should thicken the sauce slightly. Add more cornstarch to continuing thickening as preferred.', type: SECTIONS.MAIN },
        { step: 'Serve the lemon chicken over leaves of lettuce with a side of rice.', type: SECTIONS.MAIN },
    ]
};