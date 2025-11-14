const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { APPLE_PIE_FILLING, BAKING_PAN, OVEN, SERVING_SPOON, UNSALTED_BUTTER, YELLOW_CAKE_MIX } = require('./ingredients');

const APPLE_DUMP_CAKE_SECTION = 'Apple Dump Cake';

module.exports = {
    wip: true,
    cardName: 'Apple Dump Cake',
    name: 'Apple Dump Cake',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [],
    type: [TYPES.CAKE],
    allergies: [],
    diet: [],
    yields: { amount: 20, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Apple Dump Cake',
            link: 'https://www.allrecipes.com/recipe/244777/apple-pie-cake-mix-cake/',
            authors: ['Marya Marta Krause'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...APPLE_PIE_FILLING, amount: 42, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: APPLE_DUMP_CAKE_SECTION },
        { ...YELLOW_CAKE_MIX, amount: 15.25, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: APPLE_DUMP_CAKE_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: APPLE_DUMP_CAKE_SECTION }
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        { ...BAKING_PAN, additionalDetails: '9x13 inch' },
        SERVING_SPOON,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.PREHEAT_OVEN },

        { step: 'In a baking dish, add apple pie filling.', section: SECTIONS.ASSEMBLE },
        { step: 'Pour cake mix evenly over filling.', section: SECTIONS.ASSEMBLE },
        { step: 'Top with melted butter.', section: SECTIONS.ASSEMBLE },

        { step: 'Bake until golden brown and apple filling is bubbling (about 40 minutes).', section: SECTIONS.BAKE },
        { step: 'Let cool (about 15 minutes).', section: SECTIONS.COOL },
        { step: 'Enjoy this excellent dessert with ice cream!', section: SECTIONS.SERVE }
    ],
    notes: [
        { note: 'Replace with your preferred pie filling.' },
        { note: 'Serve with a large serving spoon instead of cutting like a cake since the base is not very sturdy.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.ITS_OWN_CONTAINER,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Wrap in foil and bake at 350ºF until heat through (about 20 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave for about 30 seconds.',
        },
    ],
    mealPrep: true,
};
