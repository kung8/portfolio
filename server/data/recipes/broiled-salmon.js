const salmon1 = '../assets/Products/broiled-salmon-1.jpeg';
const salmon2 = '../assets/Products/broiled-salmon-2.jpeg';
const salmon3 = '../assets/Products/broiled-salmon-3.jpeg';
const salmon4 = '../assets/Products/broiled-salmon-4.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BAKING_SHEET, BLACK_PEPPER, BROWN_SUGAR, GARLIC, LEMON_JUICE, LIGHT_SOY_SAUCE, OLIVE_OIL, OVEN, REFRIGERATOR, SALMON_FISH } = require('./ingredients');

module.exports = {
    cardName: 'Broiled Salmon',
    name: 'Broiled Salmon',
    img: salmon4,
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BROIL],
    protein: [PROTEIN.FISH],
    type: [TYPES.PROTEIN],
    allergies: [ALLERGIES.FISH, ALLERGIES.SOY],
    diet: [DIET.GLUTEN_FREE, DIET.DAIRY_FREE, DIET.NUT_FREE, DIET.EGG_FREE, DIET.LOW_CARB, DIET.LOW_FAT, DIET.LOW_SODIUM, DIET.HIGH_PROTEIN, DIET.KETO, DIET.PALEO, DIET.HALAL, DIET.KOSHER, DIET.NO_PORK, DIET.NO_BEEF, DIET.NO_LAMB, DIET.PESCATARIAN, DIET.NO_SHELLFISH, DIET.NO_RED_MEAT],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Broiled Salmon', link: 'https://www.allrecipes.com/recipe/134137/delicious-salmon/', authors: ['campagnes'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...LIGHT_SOY_SAUCE, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...OLIVE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BROWN_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...SALMON_FISH, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'skin on', section: SECTIONS.FISH },
    ],
    appliances: [
        OVEN,
        REFRIGERATOR,
    ],
    supplies: [
        BAKING_PAN,
        BAKING_SHEET,
    ],
    directions: [
        { step: `In a baking pan, combine the "${SECTIONS.MARINADE}" section ingredients.`, section: SECTIONS.MARINATE_FISH },
        { step: 'Add salmon skin side up. Let it marinate for 4 to 8 hours in the refrigerator.', section: SECTIONS.MARINATE_FISH, img: salmon1 },
        { step: 'Turn on broiler.', section: SECTIONS.BROIL },
        { step: 'Transfer salmon to a baking sheet (or drain the baking pan and use this).', section: SECTIONS.BROIL, img: salmon2 },
        { step: 'Broil until salmon is light brown and flesh flakes (about 7 to 10 minutes).', section: SECTIONS.BROIL, img: salmon3 },
        { step: 'Let salmon rest a few minutes.', section: SECTIONS.BROIL },
        { step: 'Enjoy!', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'I think this recipe needs more work. I think broiling it for 10 minutes is too long on the one side and it does not cook thicker pieces well. Maybe try flipping halfway through or broiling for less time on the first side.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover with foil and bake at 275°F (135°C) until heated through (about 15 minutes).',
        },
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Add a little butter or oil to a pan. Heat over medium until heated through (about a few minutes).',
        },
    ],
    mealPrep: true,
};