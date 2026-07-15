const olio1 = '../assets/Products/spaghetti-aglio-e-olio-1.jpeg';
const olio2 = '../assets/Products/spaghetti-aglio-e-olio-2.jpeg';
const olio3 = '../assets/Products/spaghetti-aglio-e-olio-3.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, GARLIC, LARGE_PAN, OLIVE_OIL, PARSLEY, POT, RED_PEPPER_FLAKES, SALT, SPAGHETTI_NOODLES, STOVE } = require('./ingredients');

const GARLIC_AND_OLIVE_OIL = 'Garlic & Olive Oil';
const TOAST_GARLIC = 'Toast Garlic';

module.exports = {
    cardName: 'Spaghetti Aglio e Olio',
    name: 'Spaghetti Aglio e Olio',
    img: olio3,
    available: true,
    recommended: true,
    createdAt: '2026-06-06 21:07:13',
    modifiedAt: '2026-06-23 22:25:30',
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.SAUTE],
    type: [TYPES.PASTA, TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Spaghetti Aglio e Olio',
            link: 'https://www.allrecipes.com/recipe/222000/spaghetti-aglio-e-olio/',
            authors: ['John Mitzewich'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...SPAGHETTI_NOODLES, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.NOODLES },

        { ...OLIVE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GARLIC_AND_OLIVE_OIL },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'thinly sliced', section: GARLIC_AND_OLIVE_OIL },

        { ...RED_PEPPER_FLAKES, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'or to taste', section: SECTIONS.SPICES },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SPICES },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SPICES },
        { ...PARSLEY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SPICES },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        POT,
        LARGE_PAN,
    ],
    directions: [
        { step: `Over high heat, bring a pot of salted water to a boil.`, section: SECTIONS.COOK_PASTA },
        { step: `Add noodles. Cook until al dente (about 7 to 8 minutes).`, section: SECTIONS.COOK_PASTA },
        { step: `Drain.`, section: SECTIONS.COOK_PASTA },

        { step: `Over medium heat, add olive oil and sliced garlic in a large pan.`, section: TOAST_GARLIC },
        { step: `Once the oil bubbles reduce to medium-low heat.`, section: TOAST_GARLIC },
        { step: `Cook until golden brown (about 5 minutes).`, section: TOAST_GARLIC, img: olio1 },
        { step: `Remove from heat.`, section: TOAST_GARLIC },

        { step: `Add "${SECTIONS.SPICES}" section ingredients to pasta. Toss.`, section: SECTIONS.ASSEMBLE },
        { step: `Add "${GARLIC_AND_OLIVE_OIL}" section ingredients. Toss.`, section: SECTIONS.ASSEMBLE },

        { step: `Serve and enjoy this simple Italian dish!`, section: SECTIONS.SERVE, img: olio2 },
    ],
    notes: [
        { note: `An Italian local said do not add parmesan or it will ruin the freshness of this recipe.` },
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
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium heat, add a drizzle of olive oil to a pan. Add pasta and cook until heated through, stirring occasionally.',
        },
    ],
    mealPrep: true,
};