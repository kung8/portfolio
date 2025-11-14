// Fried Chicken with Crystal Hot Honey - Extracted from cookbook image
const { CATEGORIES, GENRES, METHODS, PROTEIN, TYPES, YIELD_UNITS, TIME_UNITS, SECTIONS, INGREDIENT_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { WATER, BONELESS_AND_SKINLESS_CHICKEN_THIGH, BUTTERMILK, ALL_PURPOSE_FLOUR, GARLIC_POWDER, SMOKED_PAPRIKA, CAYENNE_PEPPER, BLACK_PEPPER, GRAPESEED_OIL, HONEY, LEMON_ZEST, LEMON_JUICE, CRYSTAL_HOT_SAUCE, BOWL, WHISK, THERMOMETER, SALT, SAUCEPAN, MIXING_BOWL, STOVE, FREEZER, PLASTIC_WRAP, LARGE_POT, PLATE, BAKING_SHEET, PAPER_TOWELS, COOLING_RACK, WHITE_SUGAR } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Hot Honey Fried Chicken',
    name: 'Fried Chicken with Crystal Hot Honey',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER],
    genre: [GENRES.SOUTHERN],
    method: [METHODS.FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.MAIN_COURSE],
    allergies: [],
    diet: [],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 90, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            bookTitle: 'Food Between Friends',
            label: 'Fried Chicken with Crystal Hot Honey',
            link: null,
            authors: ['Julie Tanous'],
            finder: 'Hannah'
        }
    ],
    ingredients: [
        // Marinade
        { ...WATER, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CRYSTAL_HOT_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },

        // Chicken
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...BUTTERMILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BATTER },
        { ...CRYSTAL_HOT_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BATTER },
        { ...SALT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BATTER },
        { ...LEMON_ZEST, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'finely grated', section: SECTIONS.BATTER },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BATTER },

        // Coating
        { ...ALL_PURPOSE_FLOUR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.COATING },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.COATING },
        { ...SMOKED_PAPRIKA, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.COATING },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.COATING },
        { ...CAYENNE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.COATING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.COATING },

        { ...GRAPESEED_OIL, amount: '', unit: '', additionalDetails: 'for deep frying', section: SECTIONS.COATING },

        // Crystal Hot Honey
        { ...HONEY, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CRYSTAL_HOT_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        STOVE,
        FREEZER,
    ],
    supplies: [
        SAUCEPAN,
        MIXING_BOWL,
        PLASTIC_WRAP,
        { ...BOWL, amount: 2 },
        WHISK,
        LARGE_POT,
        PLATE,
        BAKING_SHEET,
        PAPER_TOWELS,
        COOLING_RACK,
        THERMOMETER,
    ],
    directions: [
        { step: `In a saucepan, combine the "${SECTIONS.MARINADE}" section ingredients.`, section: SECTIONS.PREP_MARINADE },
        { step: `Over medium-high heat, stir until everything dissolves.`, section: SECTIONS.PREP_MARINADE },
        { step: `Cool down marinade in the freezer (about 30 minutes).`, section: SECTIONS.PREP_MARINADE },

        { step: `In a mixing bowl, combine the chicken and the marinade.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: `Cover. Marinate in fridge (at least 1 hour and up to 12 hours).`, section: SECTIONS.MARINATE_CHICKEN },

        { step: `In a shallow bowl, combine the "${SECTIONS.BATTER}" section ingredients.`, section: SECTIONS.PREP_BATTER },

        { step: `In another shallow bowl, combine the "${SECTIONS.COATING}" section ingredients.`, section: SECTIONS.PREP_COATING },

        { step: `Over medium heat, heat 1-inch of oil in a large pot. Bring oil to 350ºF.`, section: SECTIONS.HEAT_OIL },

        { step: `Set aside a plate(s) for the coated chicken.`, section: SECTIONS.DREDGE },
        { step: `Work chicken one at a time. Pick up chicken over marinade and let excess drip back into bowl.`, section: SECTIONS.DREDGE },
        { step: `Dredge chicken in the buttermilk mixture.`, section: SECTIONS.DREDGE },
        { step: `Dredge chicken in the flour mixture. Shake off any excess flour.`, section: SECTIONS.DREDGE },
        { step: `Set coated chicken on a plate.`, section: SECTIONS.DREDGE },

        { step: `Line a baking sheet with paper towels and place a wire rack on top.`, section: SECTIONS.FRY },
        { step: `Fry in batches. Fry and flip a couple of times until golden brown with an internal temperature of 165ºF (about 6 minutes).`, section: SECTIONS.FRY },
        { step: `Transfer to wire rack to drain.`, section: SECTIONS.FRY },
        { step: `Let the oil get back to 350ºF between batches.`, section: SECTIONS.FRY },

        { step: `In a small bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE },

        { step: `Enjoy the taste of southern cuisine.`, section: SECTIONS.SERVE },
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
            instruction: 'Bake at 375ºF until heated through (about 10 to 15 minutes).',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 375ºF until heated through (about 4 to 5 minutes). Flip halfway through.',
        },
    ],
    mealPrep: true,
};