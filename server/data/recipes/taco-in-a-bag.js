const taco1 = '../assets/Products/taco-in-a-bag-1.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_BEANS,
    BLACK_PEPPER,
    CHEDDAR_CHEESE,
    CORN,
    CUTTING_BOARD,
    FRITOS_CHIPS,
    FRYING_PAN,
    GREEN_BELL_PEPPER,
    GROUND_BEEF,
    KNIFE,
    LETTUCE,
    POT,
    ROMA_TOMATO,
    SALT,
    SERVING_SPOON,
    SMALL_BOWL,
    SOUR_CREAM,
    SPATULA,
    STOVE,
    TACO_SEASONING,
} = require('./ingredients');

module.exports = {
    cardName: 'Taco in a Bag',
    name: 'Taco in a Bag',
    img: taco1,
    available: true,
    recommended: true,
    createdAt: '2024-02-04 15:23:00',
    modifiedAt: '2026-10-20 22:38:03',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.TACO],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRITOS_CHIPS, amount: 1, unit: INGREDIENT_UNITS.BAG, additionalDetails: '', section: SECTIONS.MAIN },
        { ...TACO_SEASONING, amount: '', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_BEANS, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORN, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: '', unit: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { ...GREEN_BELL_PEPPER, amount: '', unit: '', additionalDetails: 'diced', section: SECTIONS.TOPPINGS },
        { ...SOUR_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEDDAR_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...LETTUCE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        POT,
        SPATULA,
        CUTTING_BOARD,
        KNIFE,
        { ...SMALL_BOWL, additionalDetails: 'toppings' },
        SERVING_SPOON,
    ],
    directions: [
        { step: `Over medium-high heat, heat a pan.`, section: SECTIONS.MAIN },
        { step: `Add ground beef. Brown beef and crumble it as it cooks.`, section: SECTIONS.MAIN },
        { step: `Drain if excess fat remains.`, section: SECTIONS.MAIN },
        { step: `Add water and the taco seasoning.`, section: SECTIONS.MAIN },
        { step: `Warm up the black beans and corn while the meat is cooking.`, section: SECTIONS.MAIN },
        { step: `Enjoy this simple, fun party in a bag.`, section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store ingredients separately.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Add a little water. Microwave in 30 second intervals until heated through. Stir in between intervals.',
        },
    ],
    mealPrep: true,
};