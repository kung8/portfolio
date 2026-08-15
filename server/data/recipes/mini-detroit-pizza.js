const pizza1 = '../assets/Products/mini-detroit-pizza-1.jpeg';
const pizza2 = '../assets/Products/mini-detroit-pizza-2.jpeg';
const pizza3 = '../assets/Products/mini-detroit-pizza-3.jpeg';
const pizza4 = '../assets/Products/mini-detroit-pizza-4.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALL_PURPOSE_FLOUR, COOLING_RACK, HOT_HONEY, MINI_BREAD_PAN, MOZZARELLA_CHEESE, OLIVE_OIL, OVEN, PARMESAN_CHEESE, PEPPERONI, PIZZA_SAUCE, RUBBER_SPATULA, SALT, WATER, WHITE_SUGAR, YEAST } = require('./ingredients');

module.exports = {
    cardName: 'Mini Detroit Pizza',
    name: 'Mini Detroit Pizza',
    img: pizza4,
    available: true,
    recommended: true,
    createdAt: '2026-08-12 22:15:35',
    modifiedAt: '2026-08-15 15:18:30',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.ALTERNATIVE, PROTEIN.PORK],
    type: [TYPES.FINGER_FOOD, TYPES.PIZZA],
    yields: { amount: 8, unit: YIELD_UNITS.SLICE },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 16, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 145, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Mini Detroit Pizza',
            link: 'https://www.youtube.com/shorts/GRTjFnLknTY',
            authors: ['@davespizzaoven'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...YEAST, amount: 1.5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...OLIVE_OIL, amount: 2.5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },

        { ...PIZZA_SAUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...MOZZARELLA_CHEESE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PEPPERONI, amount: '', unit: '', additionalDetails: 'mini', section: SECTIONS.TOPPINGS },
        { ...HOT_HONEY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PARMESAN_CHEESE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        { ...MINI_BREAD_PAN, additionalDetails: '8 pockets' },
        RUBBER_SPATULA,
        COOLING_RACK,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.DOUGH}" section ingredients until there are no clumps.`, section: SECTIONS.MAKE_DOUGH },
        { step: `Add about 1/6 cup in each loaf spot. Flatten the dough with a spatula.`, section: SECTIONS.MAKE_DOUGH },
        { step: `Cover. Let it double in size for about 2 hours.`, section: SECTIONS.MAKE_DOUGH },
        { step: `Use a spatula to clean up the edges.`, section: SECTIONS.MAKE_DOUGH, img: [pizza1, pizza2] },

        { step: `Preheat the oven to 500ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Parbake for 6 minutes.`, section: SECTIONS.PARBAKE, img: pizza3 },
        { step: `Transfer to cooling rack. Let it cool for 20 minutes.`, section: SECTIONS.PARBAKE },

        { step: `Build the pizza as desired.`, section: SECTIONS.ASSEMBLE },
        { step: `Bake for 10 minutes.`, section: SECTIONS.BAKE },
        { step: `Let it rest for 5 minutes in pan.`, section: SECTIONS.REST },
        { step: `Enjoy these delicious pizzas topped with whatever!`, section: SECTIONS.SERVE },
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
            instruction: 'Bake pizza at 375ºF until cheese bubbles and crust is golden brown (about 8 to 12 minutes).',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Bake pizza at 350ºF until warmed through (about 4 to 6 minutes).',
        },
    ],
    mealPrep: true,
};