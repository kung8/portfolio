const kalua1 = '../assets/Products/kalua-pig-1.jpeg';
const kalua2 = '../assets/Products/kalua-pig-2.jpeg';
const kalua3 = '../assets/Products/kalua-pig-3.jpeg';
const kalua4 = '../assets/Products/kalua-pig-4.jpeg';
const kalua5 = '../assets/Products/kalua-pig-5.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { FORK, FRYING_PAN, GARLIC, LIQUID_SMOKE, PORK_BUTT, SALT, SLOW_COOKER, STOVE } = require('./ingredients');

module.exports = {
    cardName: 'Kalua Pig',
    name: 'Kalua Pig',
    img: kalua4,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.HAWAIIAN],
    method: [METHODS.SLOW_COOK],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE, TYPES.SIDE_DISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 740, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Andrew Luke'],
            finder: 'Andrew Luke'
        },
        {
            label: 'Kalua Pig',
            link: 'https://www.lecremedelacrumb.com/slow-cooker-kalua-pork/',
            authors: ['Tiffany'],
            finder: 'Kevin Ung'
        },
    ],
    ingredients: [
        { ...PORK_BUTT, amount: 4, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'or shoulder', section: SECTIONS.PORK },
        { ...LIQUID_SMOKE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.PORK },
        { ...SALT, amount: 3, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.PORK },
        { ...GARLIC, amount: 12, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.PORK },
    ],
    appliances: [
        STOVE,
        SLOW_COOKER,
    ],
    supplies: [
        FRYING_PAN,
        FORK,
    ],
    directions: [
        { step: `Over high heat, sear all sides of a roast until browned in a pan.`, section: SECTIONS.PREP_PORK, img: kalua1 },
        { step: `Poke holes into the pork with a fork.`, section: SECTIONS.PREP_PORK },
        { step: `Cut slits into the pork. Stuff the slits with cloves of garlic.`, section: SECTIONS.PREP_PORK, img: kalua2 },
        { step: `Place roast in slow cooker.`, section: SECTIONS.PREP_PORK },
        { step: `Pour liquid smoke over pork.`, section: SECTIONS.PREP_PORK },

        { step: `Roast on low until cooked (about 8 to 12 hours).`, section: SECTIONS.COOK_PORK, img: kalua3 },
        { step: `Shred pork with forks.`, section: SECTIONS.COOK_PORK },
        { step: `Enjoy this taste of Hawaii.`, section: SECTIONS.SERVE, img: kalua5 },
    ],
    notes: [
        { note: `You do not need to add more liquid smoke than the recipe calls for.` },
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
            method: REHEAT_METHODS.SLOW_COOK,
            instruction: 'Slow cook on low until heated through (about 1 to 2 hours). Best if you have a lot.',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Add a little water. Microwave until heated through (about 3 to 5 minutes).',
        },
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Add a little water. Over medium-low heat, pan fry until heated through.',
        },
    ],
    mealPrep: true,
};