const roast1 = '../assets/Products/pot-roast-1.jpeg';
const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    ALUMINUM_FOIL,
    BEEF_BROTH,
    BEEF_ROAST,
    BLACK_PEPPER,
    CARROT,
    FRESH_ROSEMARY,
    FRESH_THYME,
    LARGE_PAN,
    OLIVE_OIL,
    OVEN,
    RED_WINE_VINEGAR,
    ROASTING_PAN,
    SALT,
    YELLOW_ONION,
} = require('./ingredients');

const HERBS_AND_LIQUIDS = 'Herbs and Liquids';

const SEAR = 'Sear';

module.exports = {
    cardName: 'Pot Roast',
    name: 'Pot Roast',
    img: roast1,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.MAIN_COURSE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 255, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Pot Roast', 
            link: 'https://www.foodnetwork.com/recipes/ree-drummond/perfect-pot-roast-recipe-2118771',
            authors: ['Ree Drummond'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...BEEF_ROAST, amount: 3, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BEEF },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.BEEF },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.BEEF },
        
        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'quartered', section: SECTIONS.VEGGIES },
        { ...CARROT, amount: 8, unit: '', additionalDetails: 'cut into 2-inch slices', section: SECTIONS.VEGGIES },
        
        { ...RED_WINE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: HERBS_AND_LIQUIDS },
        { ...BEEF_BROTH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: HERBS_AND_LIQUIDS },
        { ...FRESH_ROSEMARY, amount: 2, unit: '', additionalDetails: '', section: HERBS_AND_LIQUIDS },
        { ...FRESH_THYME, amount: 2, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', section: HERBS_AND_LIQUIDS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        LARGE_PAN,
        ROASTING_PAN,
        ALUMINUM_FOIL,
    ],
    directions: [
        { step: `Preheat oven to 275ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Salt and pepper the beef generously.`, section: SECTIONS.PREP_BEEF },

        { step: `Over medium-high heat, heat olive oil in a large pan.`, section: SEAR },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients. Brown on both sides. Transfer to the roasting pan.`, section: SEAR },
        { step: `In the same pan, add a little more oil.`, section: SEAR },
        { step: `Sear the beef on all sides. Transfer beef to the roasting pan.`, section: SEAR },
        
        { step: `In the roasting pan, add the "${HERBS_AND_LIQUIDS}" section ingredients.`, section: SECTIONS.PREP_PAN },
        { step: `Cover the roasting pan with aluminum foil.`, section: SECTIONS.PREP_PAN },

        { step: `Roast until tender (about 3 hours).`, section: SECTIONS.BAKE },

        { step: `Enjoy this simple roast.`, section: SECTIONS.SERVE },
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
            instruction: 'Cover with foil and bake at 300ºF until heated through.',
        },
    ],
    mealPrep: true,
};