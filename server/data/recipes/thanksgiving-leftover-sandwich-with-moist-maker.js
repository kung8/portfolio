const sandwich1 = '../assets/Products/thanksgiving-leftover-sandwich-with-moist-maker-1.jpeg';
const sandwich2 = '../assets/Products/thanksgiving-leftover-sandwich-with-moist-maker-2.jpeg';
const sandwich3 = '../assets/Products/thanksgiving-leftover-sandwich-with-moist-maker-3.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CRANBERRY_SAUCE, ITALIAN_BREAD, LETTUCE, MAYONNAISE, PLATE, SAUCEPAN, SLICER_TOMATO, STOVE, STUFFING_MIX, TURKEY, TURKEY_GRAVY } = require('./ingredients');
const turkey = require('./roast-turkey');

const PREP_INGREDIENTS = 'Prep Ingredients';

module.exports = {
    cardName: 'Thanksgiving Sandwich',
    name: 'Thanksgiving Leftover Sandwich with Moist Maker',
    img: sandwich1,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SANDWICH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Turkey Moist Maker Sandwich',
            link: 'https://dinnerthendessert.com/turkey-moist-maker-sandwich/',
            authors: ['Sabrina Snyder'],
            finder: 'Kevin Ung',
        },
        {
            label: 'Friends season 5 episode 9',
            link: 'https://www.youtube.com/watch?v=AeKizzQpPpY',
            authors: ['Ross Gellar'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...TURKEY, amount: 12, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.MAIN, link: { id: turkey.name, url: `recipes/${turkey.name}` } },
        { ...TURKEY_GRAVY, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...STUFFING_MIX, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooked', section: SECTIONS.MAIN },
        { ...ITALIAN_BREAD, amount: 12, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'toasted', section: SECTIONS.MAIN },
        { ...MAYONNAISE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LETTUCE, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SLICER_TOMATO, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CRANBERRY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN }
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        PLATE,
    ],
    directions: [
        { step: `Cook stuffing per stuffing mix directions.`, section: PREP_INGREDIENTS },
        { step: `Cook gravy per packaging.`, section: PREP_INGREDIENTS },
        { step: `Warm up roast turkey slices.`, section: PREP_INGREDIENTS },

        { step: `Toast bread.`, section: SECTIONS.ASSEMBLE },
        { step: `Spread mayo on one side of each bread slice.`, section: SECTIONS.ASSEMBLE },
        { step: `Dip one bread slice in the gravy to soak the`, section: SECTIONS.ASSEMBLE },
        { step: `Assemble sandwiches: lettuce, stuffing, tomato, moist maker, turkey, and cranberry sauce.`, section: SECTIONS.ASSEMBLE, img: sandwich2 },

        { step: `Enjoy this Ross Gellar inspired sandwich even at work.`, section: SECTIONS.SERVE, img: sandwich3 },
    ],
    notes: [
        { note: `The cranberry sauce complements the turkey and stuffing but can be overpowering if too much is used. Adjust to your taste preference.` },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store ingredients separately. Assemble before eating.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Reheat turkey slices in oven at 350°F until warmed through (about 10 to 15 minutes).',
        },
        {
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Simmer gravy on stove over low heat, stirring occasionally, until warmed through.',
        },
    ],
    mealPrep: true,
};