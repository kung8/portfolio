const hospitality1 = '../assets/Products/hospitality-chicken-1.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
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
            author: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: 5, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', optional: false },
        { ...MCCORMICK_SEASONING_PACKET, amount: 1, unit: '', additionalDetails: '', optional: false },
        { ...SNOW_PEA, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', optional: false },
        { ...CARROT_CHIP, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', optional: false },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
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
        { step: 'Pat dry the chicken, then marinade chicken with seasoning packet and let it sit for at least 30 minutes', section: SECTIONS.MAIN },
        { step: 'Add chicken to air fryer and bake at 400ºF for 25 min (or until cooked).', section: SECTIONS.MAIN },
        { step: 'While chicken is cooking, steam the peas and carrots over a medium-high heat for about 8 - 12 min (or until softened).', section: SECTIONS.MAIN },
        { step: 'Optional: If you like it a little crispy you can slightly grill the peas and carrots for that stir-fry taste. Heat frying pan over medium-high heat and add just a little oil. Add snow peas and carrot to pan and cook for a few minutes or until desired level of char.', section: SECTIONS.MAIN },
        { step: 'Serve with rice and enjoy this simple meal that can take you back to the South.', section: SECTIONS.MAIN },
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