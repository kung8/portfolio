const plated = '../assets/Products/roasted-turkey-plated.jpeg';
const breastDown1 = '../assets/Products/roasted-turkey-breast-side-down-1.jpeg';
const breastDown2 = '../assets/Products/roasted-turkey-breast-side-down-2.jpeg';
const breastDown3  = '../assets/Products/roasted-turkey-breast-side-down-3.jpeg';
const butter = '../assets/Products/roasted-turkey-butter.jpeg';
const butterball = '../assets/Products/roasted-turkey-butterball.jpeg';
const cavity1 = '../assets/Products/roasted-turkey-cavity-1.jpeg';
const cavity2 = '../assets/Products/roasted-turkey-cavity-2.jpeg';
const cooked = '../assets/Products/roasted-turkey-cooked.jpeg';
const dry1 = '../assets/Products/roasted-turkey-dry-1.jpeg';
const dry2 = '../assets/Products/roasted-turkey-dry-2.jpeg';
const ingredients = '../assets/Products/roasted-turkey-ingredients.jpeg';
const partial1 = '../assets/Products/roasted-turkey-partially-cooked-1.jpeg';
const partial2 = '../assets/Products/roasted-turkey-partially-cooked-2.jpeg';
const partial3 = '../assets/Products/roasted-turkey-partially-cooked-3.jpeg';
const rub1 = '../assets/Products/roasted-turkey-rub-1.jpeg';
const rub2 = '../assets/Products/roasted-turkey-rub-2.jpeg';
const rub3 = '../assets/Products/roasted-turkey-rub-3.jpeg';
const rub4 = '../assets/Products/roasted-turkey-rub-4.jpeg';
const rub5 = '../assets/Products/roasted-turkey-rub-5.jpeg';
const rub6 = '../assets/Products/roasted-turkey-rub-6.jpeg';

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

const TURKEY_SECTION = 'Turkey';
const HERB_BUTTER_RUB = 'Herb Butter Rub';
const CAVITY_FILLING = 'Cavity Filling';
const PREPARING_TURKEY = 'Preparing Turkey';
const COOKING_TURKEY = 'Cooking Turkey';

module.exports = {
    cardName: 'Roast Turkey',
    name: 'Garlic Herb Butter Roast Turkey',
    img: cooked,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.ROAST],
    protein: [PROTEIN.TURKEY],
    yields: '12 servings',
    prepTime: '20 m',
    cookTime: '2 h 15 m - 4 h 20 m',
    websites: [
        { label: 'Roast Turkey', link: 'https://cafedelites.com/roast-turkey/' }
    ],
    separated: true,
    ingredients: [
        { ...TURKEY, amount: '', additionalDetails: 'desired size', optional: false, section: TURKEY_SECTION },

        { ...UNSALTED_BUTTER, amount: '16 Tbsp', additionalDetails: 'softened', optional: false, section: HERB_BUTTER_RUB },
        { ...THYME, amount: '2 Tbsp', additionalDetails: '', optional: false, section: HERB_BUTTER_RUB },
        { ...GARLIC, amount: '4 cloves', additionalDetails: 'minced', optional: false, section: HERB_BUTTER_RUB },
        { ...SALT, amount: '2 pinch', additionalDetails: '', optional: false, section: HERB_BUTTER_RUB },
        { ...BLACK_PEPPER, amount: '2 pinch', additionalDetails: '', optional: false, section: HERB_BUTTER_RUB },

        { ...GARLIC, amount: '3 heads', additionalDetails: 'halved', optional: false, section: CAVITY_FILLING },
        { ...LEMON, amount: '2', additionalDetails: 'sliced', optional: false, section: CAVITY_FILLING },
        { ...ROSEMARY, amount: '6 sprigs', additionalDetails: '', optional: false, section: CAVITY_FILLING },
        { ...OLIVE_OIL, amount: '1/2 c', additionalDetails: '', optional: false, section: TURKEY_SECTION },
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
        { step: 'In a medium bowl, combine together the the herb butter ingredients.', type: HERB_BUTTER_RUB, img: [ingredients, butter, rub1, rub2, rub3] },
        { step: 'Divide the rub in half. Place half in the fridge.', type: HERB_BUTTER_RUB },

        { step: 'Preheat oven to 425ºF and set oven rack to the lowest level.', type: PREPARING_TURKEY },
        { step: 'Bring turkey to room temperature, clean, and pat dry.', type: PREPARING_TURKEY, img: [dry1, dry2] },
        { step: 'Loosen the skin of the turkey by gently sliding your fingers between the skin and the meat.', type: PREPARING_TURKEY },
        { step: 'Rub half the mixture on the turkey and in between the loosened skin and generously season with salt and pepper. I like the butter rub to be softened for between the skin and melted for the skin. I use my hand when stuffing it in between the skin and use a brush for the skin.', type: PREPARING_TURKEY, img: rub6 },
        { step: 'Place turkey breast-side down and drizzle with part of the oil.', type: PREPARING_TURKEY, img: [breastDown1, breastDown2] },
        
        
        { step: 'Roast uncovered for 30 min for small turkey or 45 min for large turkey.', type: COOKING_TURKEY },
        { step: 'Remove turkey from oven. Turn down the oven to 325ºF.', type: COOKING_TURKEY, img: breastDown3 },
        { step: 'Carefully flip the turkey and baste with pan juice.', type: COOKING_TURKEY, img: partial1 },
        { step: 'Stuff the turkey cavity with the "Cavity Filling".', type: COOKING_TURKEY, img: [cavity1, rub4, rub5] },
        { step: 'Use a brush to spread some more herb rub on the turkey. Save some for one more slathering.', type: COOKING_TURKEY },
        { step: 'Roast uncovered for another hour.', type: COOKING_TURKEY },
        { step: 'Use a brush to spread the remaining herb rub and roast for an additional 30 min for small turkey or 1 hr for large turkey.', type: COOKING_TURKEY, img: partial2 },
        { step: 'Cook for an additional 30 minutes to 1 hour until the turkey reaches 165ºF. If the turkey is browning too quickly, tent the turkey with some foil.', type: COOKING_TURKEY, img: partial3 },
        { step: 'Let the turkey rest for 20 - 30 min before you carve and serve. Letting it rest allows for moisture and juices to spread throughout the turkey. While the turkey was cooking the juices were evaporated, so it would be dry.', type: COOKING_TURKEY },
        { step: 'Enjoy the moist turkey slices with many other holiday favorites!', type: SECTIONS.SERVE, img: plated },
    ],
    notes: [
        { note: 'Butterball is my favorite brand of turkey.', img: butterball },
        { note: 'Sizes of the turkey: Small = 13 lb or less; large = 14 lb or more.' },
        { note: 'Typically it takes 1 day to thaw 5 pounds of turkey in the fridge.', img: turkeyThawingTable },
        { note: 'Typically you need to cook a turkey for about 13 - 15 min per pound.', img: turkeyCookingTable },
        { note: 'Plan for about 1 lb of turkey per person (or 1.5 lb per person if you want leftovers).' },
        { note: 'Avoid opening the oven door too often. It will cause the oven to lose heat and the turkey will take longer to cook.' },
    ]
};