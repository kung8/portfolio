const turkey1 = '../assets/Products/roast-turkey-1.jpeg';
const turkey2 = '../assets/Products/roast-turkey-2.jpeg';
const turkey3 = '../assets/Products/roast-turkey-3.jpeg';
const turkey4 = '../assets/Products/roast-turkey-4.jpeg';
const turkey5 = '../assets/Products/roast-turkey-5.jpeg';
const turkey6 = '../assets/Products/roast-turkey-6.jpeg';
const turkey7 = '../assets/Products/roast-turkey-7.jpeg';
const turkey8 = '../assets/Products/roast-turkey-8.jpeg';
const turkey9 = '../assets/Products/roast-turkey-9.jpeg';
const turkey10 = '../assets/Products/roast-turkey-10.jpeg';
const turkey11 = '../assets/Products/roast-turkey-11.jpeg';
const turkey12 = '../assets/Products/roast-turkey-12.jpeg';
const turkey13 = '../assets/Products/roast-turkey-13.jpeg';
const turkey14 = '../assets/Products/roast-turkey-14.jpeg';
const turkey15 = '../assets/Products/roast-turkey-15.jpeg';
const turkey16 = '../assets/Products/roast-turkey-16.png';
const turkey17 = '../assets/Products/roast-turkey-17.png';
const turkey18 = '../assets/Products/roast-turkey-18.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    GARLIC,
    LEMON,
    OLIVE_OIL,
    ROSEMARY,
    SALT,
    THYME,
    TURKEY,
    UNSALTED_BUTTER,
} = require('./ingredients');

const TURKEY_SECTION = 'Turkey';
const HERB_BUTTER_RUB = 'Herb Butter Rub';
const CAVITY_FILLING = 'Cavity Filling';
const PREPARING_TURKEY = 'Preparing Turkey';
const COOKING_TURKEY = 'Cooking Turkey';

module.exports = {
    cardName: 'Roast Turkey',
    name: 'Garlic Herb Butter Roast Turkey',
    img: turkey18,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.ROAST],
    protein: [PROTEIN.TURKEY],
    type: [TYPES.PROTEIN],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 260, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Roast Turkey', 
            link: 'https://cafedelites.com/roast-turkey/',
            authors: ['Karina Carrel'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...TURKEY, amount: '', unit: '', additionalDetails: 'desired size', section: TURKEY_SECTION },

        { ...UNSALTED_BUTTER, amount: 16, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'softened', section: HERB_BUTTER_RUB },
        { ...THYME, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: HERB_BUTTER_RUB },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: HERB_BUTTER_RUB },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: HERB_BUTTER_RUB },
        { ...BLACK_PEPPER, amount: 2, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: HERB_BUTTER_RUB },

        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.HEAD, additionalDetails: 'halved', section: CAVITY_FILLING },
        { ...LEMON, amount: 2, unit: '', additionalDetails: 'sliced', section: CAVITY_FILLING },
        { ...ROSEMARY, amount: 6, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', section: CAVITY_FILLING },
        { ...OLIVE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: TURKEY_SECTION },
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
        { step: `In a medium bowl, combine together the the herb butter ingredients.`, section: HERB_BUTTER_RUB, img: [turkey1, turkey2, turkey3] },
        { step: `Divide the rub in half. Place half in the fridge.`, section: HERB_BUTTER_RUB },

        { step: `Preheat oven to 425ºF and set oven rack to the lowest level.`, section: PREPARING_TURKEY },
        { step: `Bring turkey to room temperature, clean, and pat dry.`, section: PREPARING_TURKEY, img: turkey4 },
        { step: `Loosen the skin of the turkey by gently sliding your fingers between the skin and the meat.`, section: PREPARING_TURKEY },
        { step: `Using your hands, rub half the softened herb butter on the turkey and in between the loosened skin. Then generously season with salt and pepper.`, section: PREPARING_TURKEY, img: turkey5 },
        { step: `Place turkey breast-side down and drizzle with part of the oil.`, section: PREPARING_TURKEY, img: [turkey6, turkey7] },

        { step: `Roast uncovered for 30 min for small turkey or 45 min for large turkey.`, section: COOKING_TURKEY },
        { step: `Remove turkey from oven. Turn down the oven to 325ºF.`, section: COOKING_TURKEY, img: turkey8 },
        { step: `Carefully flip the turkey and baste with pan juice.`, section: COOKING_TURKEY },
        { step: `Stuff the turkey cavity with the "Cavity Filling".`, section: COOKING_TURKEY, img: [turkey9, turkey10] },
        { step: `Use a brush to spread some more herb rub on the turkey. Save some for one more slathering.`, section: COOKING_TURKEY },
        { step: `Roast uncovered for another hour.`, section: COOKING_TURKEY },
        { step: `Use a brush to spread the remaining herb rub and roast for an additional 30 min for small turkey or 1 hr for large turkey.`, section: COOKING_TURKEY, img: turkey11 },
        { step: `Cook for an additional 30 minutes to 1 hour until the turkey reaches 165ºF. If the turkey is browning too quickly, tent the turkey with some foil.`, section: COOKING_TURKEY, img: turkey12 },
        { step: `Let the turkey rest for 20 - 30 min before you carve and serve. Letting it rest allows for moisture and juices to spread throughout the turkey. While the turkey was cooking the juices were evaporated, so it would be dry.`, section: COOKING_TURKEY, img: turkey13 },
        { step: `Enjoy the moist turkey slices with many other holiday favorites!`, section: SECTIONS.SERVE, img: turkey14 },
    ],
    notes: [
        { note: 'Butterball is my favorite brand of turkey.', img: turkey15 },
        { note: 'Sizes of the turkey: Small = 13 lb or less; large = 14 lb or more.' },
        { note: 'Typically it takes 1 day to thaw 5 pounds of turkey in the fridge.', img: turkey16 },
        { note: 'Typically you need to cook a turkey for about 13 - 15 min per pound.', img: turkey17 },
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