const asparagus1 = '../assets/Products/roasted-asparagus-1.jpeg';
const asparagus2 = '../assets/Products/roasted-asparagus-2.jpeg';
const asparagus3 = '../assets/Products/roasted-asparagus-3.jpeg';
const asparagus4 = '../assets/Products/roasted-asparagus-4.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, ASPARAGUS, BAKING_SHEET, BLACK_PEPPER, LEMON_JUICE, OLIVE_OIL, OVEN, PARMESAN_CHEESE, RED_PEPPER_FLAKES, SALT, UNSALTED_BUTTER } = require('./ingredients');

module.exports = {
    cardName: 'Roasted Asparagus',
    name: 'Roasted Asparagus',
    img: asparagus4,
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.VEGETABLE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Roasted Asparagus', 
            link: 'https://cookieandkate.com/perfect-roasted-asparagus-recipe/',
            authors: ['Kathryne Taylor'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...ASPARAGUS, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.VEGGIES },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.VEGGIES },

        { ...PARMESAN_CHEESE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...LEMON_JUICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...RED_PEPPER_FLAKES, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        ALUMINUM_FOIL,
    ],
    directions: [
        { step: `Preheat the oven to 425ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line a baking sheet with foil.`, section: SECTIONS.PREP_PAN },
        { step: `Snap the asparagus by sharply bending the asparagus near the base. Discard these woody parts.`, section: SECTIONS.PREP_VEGGIES },
        { step: `Place the asparagus on the baking sheet in a single layer.`, section: SECTIONS.PREP_VEGGIES },
        { step: `Drizzle olive oil over asparagus.`, section: SECTIONS.PREP_VEGGIES },
        { step: `Season with salt and pepper.`, section: SECTIONS.PREP_VEGGIES, img: asparagus1 },
        { step: `Bake until asparagus is soft (about 10 to 12 minutes for thin asparagus, or 15 to 20 minutes for thick asparagus).`, section: SECTIONS.BAKE, img: asparagus2 },
        { step: `Serve topped with your favorite toppings.`, section: SECTIONS.SERVE, img: asparagus3 },
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
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through (for about 5 to 8 minutes).',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 400ºF until heated through (for about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};