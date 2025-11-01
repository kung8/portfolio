const hospitality1 = '../assets/Products/hospitality-chicken-1.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    AIR_FRYER,
    CARROT_CHIP,
    CHICKEN_THIGH,
    FRYING_PAN,
    LARGE_POT,
    MCCORMICK_SEASONING_PACKET,
    OLIVE_OIL,
    SNOW_PEA,
    SPATULA,
    STEAMER,
    STOVE,
} = require('./ingredients');

module.exports = {
    cardName: 'Hospitality Chicken',
    name: 'Hospitality Chicken',
    img: hospitality1,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SOUTHERN],
    method: [METHODS.AIR_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE, TYPES.PROTEIN],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_THIGH, amount: 5, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...MCCORMICK_SEASONING_PACKET, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...SNOW_PEA, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...CARROT_CHIP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.VEGGIES },
        
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'if stir frying', section: SECTIONS.VEGGIES },
    ],
    appliances: [
        AIR_FRYER,
        STOVE,
    ],
    supplies: [
        STEAMER,
        LARGE_POT,
        FRYING_PAN,
        SPATULA,
    ],
    directions: [
        { step: 'Pat the chicken dry.', section: SECTIONS.MARINATE_CHICKEN },
        { step: 'Pour seasoning packet over the chicken.', section: SECTIONS.MARINATE_CHICKEN },
        { step: 'Marinate for at least 30 minutes.', section: SECTIONS.MARINATE_CHICKEN },

        { step: 'Add chicken to air fryer. Air fry at 400ºF until cooked (about 25 to 35 minutes).', section: SECTIONS.AIR_FRY },

        { step: 'Over medium-high heat, steam the peas and carrots until softened (about 8 to 12 minutes).', section: SECTIONS.STEAM },

        { step: 'Serve with rice and enjoy this simple meal that can take you back to the South.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'If you like the veggies a little crispier, you can stir-fry. Stir fry over medium-high heat with a little oil for a few minutes.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};