const roast = '../assets/Products/roast.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const {
    BEEF_ROAST,
    BLACK_PEPPER,
    SALT,
    OLIVE_OIL,
    YELLOW_ONION,
    CARROT,
    RED_WINE_VINEGAR,
    BEEF_BROTH,
    FRESH_ROSEMARY,
    FRESH_THYME,
} = require('./ingredients');

module.exports = {
    cardName: 'Pot Roast',
    name: 'Pot Roast',
    img: roast,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 255, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pot Roast', link: 'https://www.foodnetwork.com/recipes/ina-garten/pot-roast-recipe-1941651' }
    ],
    ingredients: [
        { ...BEEF_ROAST, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: 2, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'quartered', section: SECTIONS.MAIN },
        { ...CARROT, amount: 8, unit: '', additionalDetails: 'cut into 2"', section: SECTIONS.MAIN },
        { ...RED_WINE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BEEF_BROTH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_ROSEMARY, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_THYME, amount: 2, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'roasting pan' },
        { name: 'large pan' },
        { name: 'aluminum foil' },
    ],
    directions: [
        { step: 'Preheat oven to 275ºF.', section: SECTIONS.MAIN },
        { step: 'Salt and pepper the beef generously.', section: SECTIONS.MAIN },
        { step: 'Heat the olive oil in large pan over medium-high heat.', section: SECTIONS.MAIN },
        { step: 'Brown the onion on both sides. Then set aside in the roasting pan.', section: SECTIONS.MAIN },
        { step: 'Brown the carrots in the same way. Then add it to the roasting pan.', section: SECTIONS.MAIN },
        { step: 'Add a little more oil, and sear the beef on all sides.', section: SECTIONS.MAIN },
        { step: 'Then add beef, red wine, broth, rosemary, and thyme to the roasting pan.', section: SECTIONS.MAIN },
        { step: 'Add red wine, broth, rosemary, and thyme to the roasting pan.', section: SECTIONS.MAIN },
        { step: 'Cover the roasting pan with aluminum foil and roast for 3 hours or until the roast is tender.', section: SECTIONS.MAIN },
    ]
};