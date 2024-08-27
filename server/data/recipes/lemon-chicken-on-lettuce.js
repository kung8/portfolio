const lemonChickenOnLettuce = '../assets/Products/lemon-chicken-on-lettuce.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");
const {
    VEGETABLE_OIL,
    CHICKEN_BREAST,
    LEMON_JUICE,
    LIGHT_SOY_SAUCE,
    WARM_WATER,
    CORNSTARCH,
    LETTUCE,
    SALT,
    BLACK_PEPPER,
} = require('./ingredients');

module.exports = {
    cardName: 'Lettuce Chicken',
    name: 'Lemon Chicken on Lettuce',
    img: lemonChickenOnLettuce,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: '4 servings',
    prepTime: '5 m',
    cookTime: '15 m',
    ingredients: [
        { ...VEGETABLE_OIL, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHICKEN_BREAST, amount: '1.5 lb', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...LEMON_JUICE, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIGHT_SOY_SAUCE, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...WARM_WATER, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: '2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LETTUCE, amount: '7 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
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