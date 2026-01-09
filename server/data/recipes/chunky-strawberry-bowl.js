const bowl1 = '../assets/Products/chunky-strawberry-bowl-1.jpeg';
const bowl2 = '../assets/Products/chunky-strawberry-bowl-2.jpeg';
const bowl3 = '../assets/Products/chunky-strawberry-bowl-3.jpeg';
const bowl4 = '../assets/Products/chunky-strawberry-bowl-4.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    SECTIONS,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALMOND_MILK, BANANA, BLENDER, BOWL, CUTTING_BOARD, FROZEN_BANANAS, FROZEN_STRAWBERRIES, GREEK_YOGURT, KNIFE, NATURES_PATH_ORGANIC_PUMPKIN_SEED_AND_FLAX_GRANOLA, PEANUT_BUTTER, STRAWBERRY } = require('./ingredients');

const SMOOTHIE_SECTION = 'Smoothie Bowl';

module.exports = {
    cardName: 'Chunky Strawberry Bowl',
    name: 'Chunky Strawberry Bowl',
    img: bowl4,
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.SNACK, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.SMOOTHIE],
    yields: { amount: 28, unit: YIELD_UNITS.OUNCE },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Chunky Strawberry Bowl',
            link: 'https://www.pinterest.com/pin/copycat-jamba-juice-chunky-strawberry-topper-bowl--1548181108883468/',
            authors: ['Jessica Schmid'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...ALMOND_MILK, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SMOOTHIE_SECTION },
        { ...PEANUT_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SMOOTHIE_SECTION },
        { ...GREEK_YOGURT, amount: 5.3, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SMOOTHIE_SECTION },
        { ...FROZEN_STRAWBERRIES, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SMOOTHIE_SECTION },
        { ...FROZEN_BANANAS, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SMOOTHIE_SECTION },
        { ...NATURES_PATH_ORGANIC_PUMPKIN_SEED_AND_FLAX_GRANOLA, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SMOOTHIE_SECTION },

        { ...NATURES_PATH_ORGANIC_PUMPKIN_SEED_AND_FLAX_GRANOLA, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BANANA, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...STRAWBERRY, amount: 3, unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        BLENDER
    ],
    supplies: [
        BOWL,
        CUTTING_BOARD,
        KNIFE
    ],
    directions: [
        { step: `In a blender, combine the smoothie ingredients. Blend to your desired consistency.`, section: SECTIONS.BLEND, img: bowl1 },
        { step: `Pour the smoothie into a bowl and top with your favorite ingredients.`, section: SECTIONS.ASSEMBLE, img: bowl2 },
        { step: `Enjoy this simple Jamba Juice Chunky Strawberry Bowl copycat.`, section: SECTIONS.SERVE, img: bowl3 },
    ],
    notes: [
        { note: `Feel free to customize the ingredients and ratios in the smoothie and the toppings to your liking!` },
    ],
    mealPrep: false,
};