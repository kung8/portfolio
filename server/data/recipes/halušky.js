// const halušky1 = '../assets/Products/halušky-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { CARAWAY_SEEDS, EGG_NOODLES, GREEN_CABBAGE, UNSALTED_BUTTER, YELLOW_ONION, GARLIC, ITALIAN_SEASONING, SALT, BLACK_PEPPER, STOVE, POT, COLANDER, FRYING_PAN } = require('./ingredients');

const FRAGRANCES = 'Fragrances';
const CABBAGE_MIXTURE = 'Cabbage Mixture';

module.exports = {
    wip: true,
    cardName: 'Halušky',
    name: 'Halušky',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-06-10 23:35:40',
    modifiedAt: '2026-06-10 23:35:40',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SLOVAKIAN, GENRES.POLISH, GENRES.HUNGARIAN, GENRES.AUSTRIAN, GENRES.UKRAINIAN],
    method: [METHODS.SAUTE],
    type: [TYPES.NOODLE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Halušky', link: 'https://sweetcsdesigns.com/cabbage-and-noodles/', authors: ['Courtney Odell'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...EGG_NOODLES, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },

        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FRAGRANCES },
        { ...YELLOW_ONION, amount: 1, unit: '', additionalDetails: 'diced', section: FRAGRANCES },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: FRAGRANCES },

        { ...GREEN_CABBAGE, amount: 1, unit: '', additionalDetails: 'diced', section: CABBAGE_MIXTURE },
        { ...CARAWAY_SEEDS, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CABBAGE_MIXTURE },
        { ...ITALIAN_SEASONING, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CABBAGE_MIXTURE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: CABBAGE_MIXTURE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: CABBAGE_MIXTURE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        POT,
        COLANDER,
        FRYING_PAN,
    ],
    directions: [
        { step: `Over medium-high heat, bring a pot of salted water to a boil.`, section: SECTIONS.COOK_NOODLES },
        { step: `Add egg noodles. Cook according package directions.`, section: SECTIONS.COOK_NOODLES },
        { step: `Drain. Reserve 1/2 cup of pasta water.`, section: SECTIONS.COOK_NOODLES },

        { step: `Over medium heat, melt butter in a pan.`, section: SECTIONS.ASSEMBLE },
        { step: `Add onion. Cook until soft and translucent (about 5 to 6 minutes).`, section: SECTIONS.ASSEMBLE },
        { step: `Add garlic. Cook until fragrant (about 30 seconds).`, section: SECTIONS.ASSEMBLE },
        { step: `Add the "${CABBAGE_MIXTURE}" section ingredients. Saute until cabbage softens and caramelize (about 10 to 12 minutes). If the pan gets too dry, add some pasta water.`, section: SECTIONS.ASSEMBLE },
        { step: `Add noodles and toss. Taste and adjust as needed.`, section: SECTIONS.ASSEMBLE },

        { step: `Enjoy this dish warm.`, section: SECTIONS.SERVE },
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
            instruction: 'Over medium heat, add a little butter or water to a pan. Add noodles and saute until warmed through (about 5 to 8 minutes).',
        },
    ],
    mealPrep: true,
};