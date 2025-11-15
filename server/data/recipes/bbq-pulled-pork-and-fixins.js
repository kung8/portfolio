const pork1 = '../assets/Products/bbq-pulled-pork-1.jpeg';
const pork2 = '../assets/Products/bbq-pulled-pork-2.jpeg';
const pork3 = '../assets/Products/bbq-pulled-pork-3.jpeg';
const pork4 = '../assets/Products/bbq-pulled-pork-4.jpeg';
const pork5 = '../assets/Products/bbq-pulled-pork-5.jpeg';

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, REHEAT_METHODS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require("./constants");
const {
    APPLE_CIDER_VINEGAR,
    BBQ_SAUCE,
    BRIOCHE_BUNS,
    BROWN_SUGAR,
    CHICKEN_BROTH,
    CHILI_POWDER,
    FORK,
    GARLIC,
    PORK_ROAST,
    SLOW_COOKER,
    SLOW_COOKER_LINER,
    THYME,
    VEGETABLE_OIL,
    WORCESTERSHIRE_SAUCE,
    YELLOW_MUSTARD,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'BBQ Pulled Pork',
    name: 'BBQ Pulled Pork',
    img: pork5,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SOUTHERN, GENRES.BBQ, GENRES.AMERICAN],
    method: [METHODS.SLOW_COOK],
    protein: [PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 6, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: '',
            link: '',
            authors: [''],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.PORK },
        { ...PORK_ROAST, amount: 4, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.PORK },

        { ...BROWN_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...CHILI_POWDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'chopped', section: SECTIONS.DRY_INGREDIENTS },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'diced', section: SECTIONS.DRY_INGREDIENTS },
        { ...THYME, amount: 1.5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },

        { ...BBQ_SAUCE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...APPLE_CIDER_VINEGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...CHICKEN_BROTH, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...YELLOW_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...WORCESTERSHIRE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },

        { ...BRIOCHE_BUNS, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        SLOW_COOKER,
    ],
    supplies: [
        SLOW_COOKER_LINER,
        { ...FORK, amount: 2 },
    ],
    directions: [
        { step: `Line a slow cooker with a liner to make cleaning quick.`, section: SECTIONS.PREP_PORK },
        { step: `Pour the vegetable oil into the slow cooker.`, section: SECTIONS.PREP_PORK },
        { step: `In a small bowl, combine the "${SECTIONS.DRY_INGREDIENTS}" section ingredients.`, section: SECTIONS.PREP_PORK },
        { step: `Place roast in the slow cooker and massage the pork with the dry ingredient.`, section: SECTIONS.PREP_PORK, img: pork1 },
        { step: `Add the "${SECTIONS.WET_INGREDIENTS}" section ingredients.`, section: SECTIONS.PREP_PORK },

        { step: `Cover. Cook on high for 5 to 6 hours (or on low for 10 to 12 hours).`, section: SECTIONS.COOK_PORK, img: pork2 },
        { step: `Shred the pork with two forks.`, section: SECTIONS.COOK_PORK, img: [pork3, pork4] },
        { step: `Return shredded pork to soak in more of the sauce.`, section: SECTIONS.COOK_PORK },

        { step: `Serve on toasted brioche buns with your favorite sides.`, section: SECTIONS.SERVE },
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
            instruction: 'Cover with foil and bake at 250ºF until heated through (about 30 minutes).',
        },
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over low heat, warm the pulled pork in a covered pot. You may need to add a splash of water or broth to keep it moist. Stir occasionally until heated through (about 20 to 30 minutes).',
        },
    ],
    mealPrep: true,
};