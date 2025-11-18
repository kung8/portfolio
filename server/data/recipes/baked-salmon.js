const salmon1 = '../assets/Products/baked-salmon-1.jpeg';
const salmon2 = '../assets/Products/baked-salmon-2.jpeg';
const salmon3 = '../assets/Products/baked-salmon-3.jpeg';
const salmon4 = '../assets/Products/baked-salmon-4.jpeg';
const salmon5 = '../assets/Products/baked-salmon-5.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BLACK_PEPPER, CAPER, LEMON_JUICE, OLIVE_OIL, OVEN, PARSLEY, RED_WINE_VINEGAR, SALMON_FISH, SALT, SHALLOT, SLICED_ALMONDS } = require('./ingredients');

const SALMON_SECTION = 'Salmon';
const SHALLOT_MARINADE_SECTION = 'Shallot Marinade';
const CAPER_MIXTURE_SECTION = 'Caper Mixture';
const LEMON_AND_OIL = 'Lemon and Oil';

const MARINATE_SHALLOTS = 'Marinate Shallots';
const ASSEMBLE_SALSA = 'Assemble Salsa';

module.exports = {
    cardName: 'Baked Salmon',
    name: 'Baked Salmon',
    img: salmon5,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.FISH],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Oven Baked Salmon',
            link: 'https://www.foodnetwork.com/recipes/oven-baked-salmon-recipe-1911951',
            authors: ['Kathleen Daelemans'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...SHALLOT, amount: 1, unit: '', additionalDetails: 'minced', section: SHALLOT_MARINADE_SECTION },
        { ...RED_WINE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SHALLOT_MARINADE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SHALLOT_MARINADE_SECTION },

        { ...CAPER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'rinsed and chopped', section: CAPER_MIXTURE_SECTION },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: CAPER_MIXTURE_SECTION },
        { ...SLICED_ALMONDS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: CAPER_MIXTURE_SECTION },
        
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: LEMON_AND_OIL },
        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: 'to taste', section: LEMON_AND_OIL },
        
        { ...SALMON_FISH, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'cut into 4 pieces', section: SALMON_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SALMON_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SALMON_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
    ],
    directions: [
        { step: `In a small bowl, combine "${SHALLOT_MARINADE_SECTION}" section ingredients.`, section: MARINATE_SHALLOTS },
        { step: `Let it marinate for 30 minutes.`, section: MARINATE_SHALLOTS, img: salmon1 },

        { step: `Add the "${CAPER_MIXTURE_SECTION}" section ingredients to the marinated shallots.`, section: ASSEMBLE_SALSA },
        { step: `Add the "${LEMON_AND_OIL}" section ingredients. Mix. Taste and adjust seasonings.`, section: ASSEMBLE_SALSA, img: salmon2 },
        
        { step: `Preheat oven to 450ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Season salmon with salt and black pepper.`, section: SECTIONS.PREP_FISH },
        { step: `In a baking pan, place salmon skin side down.`, section: SECTIONS.PREP_FISH, img: salmon3 },

        { step: `Bake until salmon is cooked through (about 12 to 15 minutes).`, section: SECTIONS.BAKE, img: salmon4 },

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