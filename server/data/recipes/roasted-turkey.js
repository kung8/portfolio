const turkey = '../assets/Products/roast-turkey.jpeg';
const turkeyCookingTable = '../assets/Products/cooking-turkey-estimates.png';
const turkeyThawingTable = '../assets/Products/thawing-turkey-estimates.png';
const { CATEGORIES, GENRES, SECTIONS, METHODS, PROTEIN } = require('./constants');
const {
    TURKEY,
    LEMON,  
    GARLIC,
    OLIVE_OIL,
    UNSALTED_BUTTER,
    THYME,
    ROSEMARY,
    SALT,
    BLACK_PEPPER,
} = require('./ingredients');

module.exports = {
    cardName: 'Roast Turkey',
    name: 'Garlic Herb Butter Roast Turkey',
    img: turkey,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.ROAST],
    protein: [PROTEIN.TURKEY],
    yields: '10 servings (recipe based on 14 lb)',
    prepTime: '20 m',
    cookTime: '2 h 15 m - 4 h 20 m',
    ingredients: [
        { ...TURKEY, amount: '', additionalDetails: 'desired size', optional: false },
        { ...LEMON, amount: '2', additionalDetails: 'sliced', optional: false },
        { ...GARLIC, amount: '3.5 heads', additionalDetails: '3 heads halved, 1/2 head minced', optional: false },
        { ...OLIVE_OIL, amount: '2 c', additionalDetails: '3 heads halved, 1/2 head minced', optional: false },
        { ...UNSALTED_BUTTER, amount: '4 oz', additionalDetails: '', optional: false },
        { ...THYME, amount: '1 tsp + more as desired', additionalDetails: '', optional: false },
        { ...ROSEMARY, amount: '1 tsp + more as desired', additionalDetails: '', optional: false },
        { ...SALT, amount: '', additionalDetails: 'minced', optional: false },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'minced', optional: false },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'roasting pan' },
        { name: '2 tongs' },
        { name: 'medium bowl' },
        { name: 'basting brush' },
        { name: 'internal thermometer' },
    ],
    directions: [
        { step: 'Note: Typically you need to cook a turkey for about 13 - 15 min per pound. Small = 13 lb or less; large = 14 lb or more. Refer to additional resources to plan for thawing and cooking estimates (figures 1 and 2, respectively).', type: SECTIONS.MAIN, img: turkeyThawingTable },
        { step: 'Preheat oven to 425ºF and set oven rack to the lowest level.', type: SECTIONS.MAIN },
        { step: 'Bring turkey to room temperature, clean, and pat dry.', type: SECTIONS.MAIN },
        { step: 'Stuff garlic halves, lemon slices, and the additional amount of rosemary and thyme into the cavity of the turkey (note reserve at least the 1 tsp of each for the rub)', type: SECTIONS.MAIN },
        { step: 'In a medium bowl, combine melted butter, thyme, rosemary, 1/2 head of minced garlic as the rub.', type: SECTIONS.MAIN },
        { step: 'Rub half the mixture on the turkey, especially underneath the skin, and generously season with salt and pepper. Reserve half of the rub for later.', type: SECTIONS.MAIN },
        { step: 'Place turkey breast-side down and drizzle with oil.', type: SECTIONS.MAIN },
        { step: 'Roast uncovered for 30 min for small turkey or 45 min for large turkey.', type: SECTIONS.MAIN, img: turkeyCookingTable},
        { step: 'Turn turkey over and baste with pan juice.', type: SECTIONS.MAIN },
        { step: 'Use a brush to spread some more herb rub on the turkey. Save some for one more slathering.', type: SECTIONS.MAIN },
        { step: 'Turn oven to 325ºF and roast uncovered for another hour.', type: SECTIONS.MAIN },
        { step: 'Use a brush to spread the remaining herb rub and roast for an additional 30 min for small turkey or 1 hr for large turkey.', type: SECTIONS.MAIN },
        { step: 'Note: for large turkey you may need to cook for an additional 30 min to an hour, check the internal temperature - it should have a temperature of 165ºF.', type: SECTIONS.MAIN },
        { step: 'Tent the turkey with some foil (leaving some space between foil and turkey for it to breathe) and let it rest for 20 - 30 min before you carve and serve.', type: SECTIONS.MAIN },
        { step: 'Enjoy the moist turkey slices with many other holiday favorites!', type: SECTIONS.MAIN },
    ],
};