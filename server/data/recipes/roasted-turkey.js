const plated1 = '../assets/Products/roasted-turkey-plated-1.jpeg';
const breastDown1 = '../assets/Products/roasted-turkey-breast-side-down-1.jpeg';
const breastDown3 = '../assets/Products/roasted-turkey-breast-side-down-3.jpeg';
const butter = '../assets/Products/roasted-turkey-butter.jpeg';
const butterball = '../assets/Products/roasted-turkey-butterball.jpeg';
const cavity1 = '../assets/Products/roasted-turkey-cavity-1.jpeg';
const cooked = '../assets/Products/roasted-turkey-cooked.jpeg';
const dry1 = '../assets/Products/roasted-turkey-dry-1.jpeg';
const ingredients = '../assets/Products/roasted-turkey-ingredients.jpeg';
const partial1 = '../assets/Products/roasted-turkey-partially-cooked-1.jpeg';
const partial2 = '../assets/Products/roasted-turkey-partially-cooked-2.jpeg';
const partial3 = '../assets/Products/roasted-turkey-partially-cooked-3.jpeg';
const rub1 = '../assets/Products/roasted-turkey-rub-1.jpeg';
const rub2 = '../assets/Products/roasted-turkey-rub-2.jpeg';
const rub3 = '../assets/Products/roasted-turkey-rub-3.jpeg';
const rub5 = '../assets/Products/roasted-turkey-rub-5.jpeg';

const turkeyCookingTable = '../assets/Products/cooking-turkey-estimates.png';
const turkeyThawingTable = '../assets/Products/thawing-turkey-estimates.png';
const { CATEGORIES, GENRES, SECTIONS, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
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
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.ROAST],
    protein: [PROTEIN.TURKEY],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 260, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Roast Turkey', link: 'https://cafedelites.com/roast-turkey/' }
    ],
    separated: true,
    ingredients: [
        { ...TURKEY, amount: '', unit: '', additionalDetails: 'desired size', optional: false, section: TURKEY_SECTION },

        { ...UNSALTED_BUTTER, amount: 16, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'softened', optional: false, section: HERB_BUTTER_RUB },
        { ...THYME, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false, section: HERB_BUTTER_RUB },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', optional: false, section: HERB_BUTTER_RUB },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', optional: false, section: HERB_BUTTER_RUB },
        { ...BLACK_PEPPER, amount: 2, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', optional: false, section: HERB_BUTTER_RUB },

        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.HEAD, additionalDetails: 'halved', optional: false, section: CAVITY_FILLING },
        { ...LEMON, amount: 2, unit: '', additionalDetails: 'sliced', optional: false, section: CAVITY_FILLING },
        { ...ROSEMARY, amount: 6, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', optional: false, section: CAVITY_FILLING },
        { ...OLIVE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: TURKEY_SECTION },
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
        { step: 'In a medium bowl, combine together the the herb butter ingredients.', section: HERB_BUTTER_RUB, img: [ingredients, butter, rub1] },
        { step: 'Divide the rub in half. Place half in the fridge.', section: HERB_BUTTER_RUB },

        { step: 'Preheat oven to 425ºF and set oven rack to the lowest level.', section: PREPARING_TURKEY },
        { step: 'Bring turkey to room temperature, clean, and pat dry.', section: PREPARING_TURKEY, img: dry1 },
        { step: 'Loosen the skin of the turkey by gently sliding your fingers between the skin and the meat.', section: PREPARING_TURKEY },
        { step: 'Using your hands, rub half the softened herb butter on the turkey and in between the loosened skin. Then generously season with salt and pepper.', section: PREPARING_TURKEY, img: rub5 },
        { step: 'Place turkey breast-side down and drizzle with part of the oil.', section: PREPARING_TURKEY, img: [breastDown1, rub2] },


        { step: 'Roast uncovered for 30 min for small turkey or 45 min for large turkey.', section: COOKING_TURKEY },
        { step: 'Remove turkey from oven. Turn down the oven to 325ºF.', section: COOKING_TURKEY, img: breastDown3 },
        { step: 'Carefully flip the turkey and baste with pan juice.', section: COOKING_TURKEY },
        { step: 'Stuff the turkey cavity with the "Cavity Filling".', section: COOKING_TURKEY, img: [cavity1, rub3] },
        { step: 'Use a brush to spread some more herb rub on the turkey. Save some for one more slathering.', section: COOKING_TURKEY },
        { step: 'Roast uncovered for another hour.', section: COOKING_TURKEY },
        { step: 'Use a brush to spread the remaining herb rub and roast for an additional 30 min for small turkey or 1 hr for large turkey.', section: COOKING_TURKEY, img: partial1 },
        { step: 'Cook for an additional 30 minutes to 1 hour until the turkey reaches 165ºF. If the turkey is browning too quickly, tent the turkey with some foil.', section: COOKING_TURKEY, img: partial3 },
        { step: 'Let the turkey rest for 20 - 30 min before you carve and serve. Letting it rest allows for moisture and juices to spread throughout the turkey. While the turkey was cooking the juices were evaporated, so it would be dry.', section: COOKING_TURKEY, img: partial2 },
        { step: 'Enjoy the moist turkey slices with many other holiday favorites!', section: SECTIONS.SERVE, img: plated1 },
    ],
    notes: [
        { note: 'Butterball is my favorite brand of turkey.', img: butterball },
        { note: 'Sizes of the turkey: Small = 13 lb or less; large = 14 lb or more.' },
        { note: 'Typically it takes 1 day to thaw 5 pounds of turkey in the fridge.', img: turkeyThawingTable },
        { note: 'Typically you need to cook a turkey for about 13 - 15 min per pound.', img: turkeyCookingTable },
        { note: 'Plan for about 1 lb of turkey per person (or 1.5 lb per person if you want leftovers).' },
        { note: 'Avoid opening the oven door too often. It will cause the oven to lose heat and the turkey will take longer to cook.' },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Add a splash of broth. Cover with a microwave-safe lid and microwave on low power in 1-minute intervals until warmed through.',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Add a little broth. Cover with foil and bake at 300ºF until warmed through (about 10 to 12 minutes per pound).',
        },
    ],
    mealPrep: true,
};