const lemonChickenOnLettuce = '../assets/Products/lemon-chicken-on-lettuce.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");

module.exports = {
    cardName: 'Lettuce Chicken',
    name: 'Lemon Chicken on Lettuce',
    img: lemonChickenOnLettuce,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '4 servings',
    prepTime: '5 m',
    cookTime: '15 m',
    ingredients: [
        { name: 'vegetable oil', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'chicken', amount: '1.5 lb', additionalDetails: 'sliced', optional: false, section: SECTIONS.MAIN },
        { name: 'lemon juice', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'soy sauce', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'water', amount: '2 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'cornstarch', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'lettuce', amount: '7 oz', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'salt', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { name: 'pepper', amount: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
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