const pepper1 = '../assets/Products/peperoni-grigliati-1.jpeg';
const pepper2 = '../assets/Products/peperoni-grigliati-2.jpeg';
const pepper3 = '../assets/Products/peperoni-grigliati-3.jpeg';

const {
    CATEGORIES, 
    GENRES,
    INGREDIENT_UNITS, 
    METHODS, 
    REHEAT_METHODS, 
    SECTIONS, 
    STORAGE_CONTAINER, 
    STORAGE_DURATION_UNIT, 
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES, 
    YIELD_UNITS 
} = require('./constants');
const { ALUMINUM_FOIL, BAKING_SHEET, BASIL, GARLIC, OLIVE_OIL, OVEN, PARSLEY, RED_BELL_PEPPER, SALT } = require('./ingredients');

const BELL_PEPPER_SECTION = 'Bell Pepper';

const PREP_PEPPERS = 'Prep Peppers';
const PEEL_PEPPERS = 'Peel Peppers';

module.exports = {
    cardName: 'Peperoni Grigliati',
    name: 'Peperoni Grigliati',
    img: pepper3,
    available: true,
    recommended: true,
    createdAt: '2026-06-07 23:25:41',
    modifiedAt: '2026-07-04 20:12:36',
    category: [CATEGORIES.LUNCH,CATEGORIES.DINNER,CATEGORIES.SIDE_DISH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.GRILL],
    type: [TYPES.VEGETABLE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Peperoni Grigliati', link: 'https://blog.giallozafferano.it/ilchiccodimais/peperoni-grigliati-ricetta-contorno/', authors: ['thecornchip'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...RED_BELL_PEPPER, amount: 2, unit: '', additionalDetails: '', section: BELL_PEPPER_SECTION },
        { ...OLIVE_OIL, amount: 5, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...BASIL, amount: 5, unit: INGREDIENT_UNITS.LEAF, additionalDetails: 'chopped', section: SECTIONS.MARINADE },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: 'chopped', section: SECTIONS.MARINADE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MARINADE },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        ALUMINUM_FOIL,
    ],
    directions: [
        { step: `Line a baking sheet with aluminum foil.`, section: SECTIONS.PREP_PAN },
        { step: `Preheat the oven to broil on high heat and set rack to the highest level.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Wash and dry the bell peppers.`, section: PREP_PEPPERS },
        { step: `Slice peppers in half length-wise.`, section: PREP_PEPPERS },
        { step: `Place bell peppers on the baking sheet in a single layer. Press down on them to flatten.`, section: PREP_PEPPERS },
        { step: `Lightly brush with a little olive oil.`, section: PREP_PEPPERS },
        { step: `Broil until the skin blisters (about 3 to 5 minutes). Flip every few minutes to get both sides.`, section: SECTIONS.BROIL, img: pepper1 },
        { step: `Once taken out of the oven, immediately transfer the peppers to a ziploc bag and seal for 20 to 30 minutes.`, section: PEEL_PEPPERS, img: pepper2 },
        { step: `Optionally peel the skin off the peppers.`, section: PEEL_PEPPERS },
        { step: `In a mixing bowl, place the peppers and add "${SECTIONS.MARINADE}" section ingredients.`, section: SECTIONS.MARINATE },

        { step: `Chill in the fridge for at least 2 hours.`, section: SECTIONS.CHILL },
        
        { step: `Enjoy these grilled peppers in your favorite sandwiches, pasta and pizza dishes.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over low heat, warm peppers with their marinade in a pan until warmed through (2 to 4 minutes).',
        },
    ],
    mealPrep: true,
};