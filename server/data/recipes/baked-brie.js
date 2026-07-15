const brie1 = '../assets/Products/baked-brie-1.jpeg';
const brie2 = '../assets/Products/baked-brie-2.jpeg';
const brie3 = '../assets/Products/baked-brie-3.jpeg';

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
const { BRIE_CHEESE, BROWN_SUGAR, GRANNY_SMITH_APPLE, KOSHER_SALT, LEMON_JUICE, OVEN, PECANS, PIE_PAN, SALTED_BUTTER, STAND_MIXER, WATER } = require('./ingredients');

const PREP_APPLES = 'Prep Apples';

module.exports = {
    cardName: 'Baked Brie',
    name: 'Baked Brie',
    img: brie3,
    available: true,
    recommended: true,
    createdAt: '2026-04-18 18:04:28',
    modifiedAt: '2026-04-22 20:40:49',
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK, CATEGORIES.DIP],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DIP],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            bookTitle: 'Magnolia Table, Volume 2: A Collection of Recipes for Gathering',
            label: 'Baked Brie',
            link: null,
            authors: ['Joanna Gaines'],
            finder: 'Amanda Strong'
        }
    ],
    ingredients: [
        { ...BRIE_CHEESE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'wheel', section: SECTIONS.CHEESE },

        { ...SALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'room temperature', section: SECTIONS.DIP },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DIP },
        { ...KOSHER_SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.DIP },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DIP },

        { ...PECANS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DIP },

        { ...GRANNY_SMITH_APPLE, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.SERVING },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SERVING },
    ],
    appliances: [
        STAND_MIXER,
        OVEN,
    ],
    supplies: [
        PIE_PAN,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Place brie in the center of the pie pan.`, section: SECTIONS.PREP_DIP },
        { step: `In a stand mixer, combine all the "${SECTIONS.DIP}" section ingredients except the pecans. Mix until it becomes like paste.`, section: SECTIONS.PREP_DIP },
        { step: `Add pecans. Mix until combined.`, section: SECTIONS.PREP_DIP, img: brie1 },
        { step: `Spread this over the brie (about 1 inch thick).`, section: SECTIONS.PREP_DIP, img: brie2 },
        { step: `Bake until the edges look like it is going to spill (about 10 to 15 minutes).`, section: SECTIONS.PREP_DIP },

        { step: `Wash and core the apples. Slice them into wedges.`, section: PREP_APPLES },
        { step: `In a mixing bowl, toss apple wedges in lemon juice to prevent browning.`, section: PREP_APPLES },

        { step: `Serve together and enjoy!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Cover in foil and bake at 350ºF until warmed through, about 10 to 15 minutes.',
        },
    ],
    mealPrep: true,
};