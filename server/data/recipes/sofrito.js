const sofrito1 = '../assets/Products/sofrito-1.jpeg';
const sofrito2 = '../assets/Products/sofrito-2.jpeg';
const sofrito3 = '../assets/Products/sofrito-3.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLENDER, CILANTRO, GARLIC, GREEN_BELL_PEPPER, ROMA_TOMATO, YELLOW_ONION } = require('./ingredients');

const SOFRITO_SECTION = 'Sofrito';

module.exports = {
    cardName: 'Sofrito',
    name: 'Sofrito',
    img: sofrito3,
    available: true,
    recommended: false,
    createdAt: '2026-04-05 00:18:07',
    modifiedAt: '2026-04-22 20:40:49',
    category: [CATEGORIES.DINNER],
    genre: [GENRES.PUERTO_RICAN, GENRES.CARIBBEAN],
    method: [METHODS.BLEND],
    type: [TYPES.MAIN_COURSE],
    yields: { amount: 2, unit: YIELD_UNITS.CUP },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Sofrito',
            link: 'https://www.thekitchn.com/freezer-sofrito-tip-23433318',
            authors: ['Illyanna Maisonet'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...ROMA_TOMATO, amount: 2, unit: '', additionalDetails: 'quartered', section: SOFRITO_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: '', additionalDetails: 'quartered', section: SOFRITO_SECTION },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'smashed', section: SOFRITO_SECTION },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'quartered', section: SOFRITO_SECTION },
        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: 'chopped', section: SOFRITO_SECTION },
    ],
    appliances: [
        BLENDER,
    ],
    directions: [
        { step: `In a blender, blend the tomatoes.`, section: SECTIONS.BLEND, img: sofrito1 },
        { step: `Add onion and garlic. Blend.`, section: SECTIONS.BLEND },
        { step: `Add bell peppers and cilantro. Blend.`, section: SECTIONS.BLEND, img: sofrito2 },
        { step: `Enjoy this latin vegetable base for other dishes.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 6, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: false,
};