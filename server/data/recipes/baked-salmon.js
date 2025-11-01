// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BLACK_PEPPER, OVEN, SALMON_FISH, SALT } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Baked Salmon',
    name: 'Baked Salmon',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.FISH],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    allergies: [],
    diet: [],
    yields: { amount: '', unit: '' },
    prepTime: { amount: '', unit: '' },
    cookTime: { amount: '', unit: '' },
    waitTime: { amount: '', unit: '' },
    websites: [
        {
            label: 'Oven Baked Salmon',
            link: 'https://www.foodnetwork.com/recipes/oven-baked-salmon-recipe-1911951',
            authors: ['Kathleen Daelemans'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...SALMON_FISH, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'cut into 4 pieces', section: '' },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: '' },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: '' },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
    ],
    directions: [
        { step: `Preheat oven to 450ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Season salmon with salt and black pepper.`, section: SECTIONS.PREP_FISH },
        { step: `In a baking pan, place salmon skin side down.`, section: SECTIONS.PREP_FISH },

        { step: `Bake until salmon is cooked through (about 12 to 15 minutes).`, section: SECTIONS.BAKE },

        { step: `Enjoy this simple dish with your favorite sides and grain.`, section: SECTIONS.SERVE },
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
            instruction: 'Cover with foil and bake at 275°F (135°C) until heated through (about 15 minutes).',
        },
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Add a little butter or oil to a pan. Heat over medium until heated through (about a few minutes).',
        },
    ],
    mealPrep: false,
};