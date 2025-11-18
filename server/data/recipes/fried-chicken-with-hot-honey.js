const honey1 = '../assets/Products/fried-chicken-with-hot-honey-1.jpeg';
const honey2 = '../assets/Products/fried-chicken-with-hot-honey-2.jpeg';
const honey3 = '../assets/Products/fried-chicken-with-hot-honey-3.jpeg';
const honey4 = '../assets/Products/fried-chicken-with-hot-honey-4.jpeg';
const honey5 = '../assets/Products/fried-chicken-with-hot-honey-5.jpeg';
const honey6 = '../assets/Products/fried-chicken-with-hot-honey-6.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_THIGH, BOWL, BUTTERMILK, CAYENNE_PEPPER, COOLING_RACK, CRYSTAL_HOT_SAUCE, FREEZER, GARLIC_POWDER, GRAPESEED_OIL, HONEY, LARGE_POT, LEMON_JUICE, LEMON_ZEST, MIXING_BOWL, PAPER_TOWELS, PLASTIC_WRAP, PLATE, SALT, SAUCEPAN, SMOKED_PAPRIKA, STOVE, THERMOMETER, WATER, WHISK, WHITE_SUGAR } = require('./ingredients');

module.exports = {
    cardName: 'Hot Honey Fried Chicken',
    name: 'Fried Chicken with Hot Honey',
    img: honey6,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER],
    genre: [GENRES.SOUTHERN],
    method: [METHODS.FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.MAIN_COURSE],
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

        { step: `In a mixing bowl, combine the chicken and the marinade.`, section: SECTIONS.MARINATE_CHICKEN, img: honey1 },
        { step: `Cover. Marinate in fridge (at least 1 hour and up to 12 hours).`, section: SECTIONS.MARINATE_CHICKEN },

        { step: `In a shallow bowl, combine the "${SECTIONS.BATTER}" section ingredients.`, section: SECTIONS.PREP_BATTER },

        { step: `In another shallow bowl, combine the "${SECTIONS.COATING}" section ingredients.`, section: SECTIONS.PREP_COATING },

        { step: `Over medium heat, heat 1-inch of oil in a large pot. Bring oil to 350ºF.`, section: SECTIONS.HEAT_OIL },

        { step: `Set aside a plate(s) for the coated chicken.`, section: SECTIONS.DREDGE },
        { step: `Work chicken one at a time. Pick up chicken over marinade and let excess drip back into bowl.`, section: SECTIONS.DREDGE },
        { step: `Dredge chicken in the buttermilk mixture.`, section: SECTIONS.DREDGE },
        { step: `Dredge chicken in the flour mixture. Shake off any excess flour.`, section: SECTIONS.DREDGE },
        { step: `Set coated chicken on a plate.`, section: SECTIONS.DREDGE, img: honey2 },

        { step: `Line a baking sheet with paper towels and place a wire rack on top.`, section: SECTIONS.FRY },
        { step: `Fry in batches. Fry and flip a couple of times until golden brown with an internal temperature of 165ºF (about 6 minutes).`, section: SECTIONS.FRY, img: honey3 },
        { step: `Transfer to wire rack to drain.`, section: SECTIONS.FRY, img: honey4 },
        { step: `Let the oil get back to 350ºF between batches.`, section: SECTIONS.FRY },

        { step: `In a small bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE },

        { step: `Enjoy the taste of southern cuisine.`, section: SECTIONS.SERVE, img: honey5 },
    ],
    notes: [
        { note: `Do not worry the marinade is very watery and will not "lose" flavor. The buttermilk and flour dredges will make up the flavor profile of this dish.` },
        { note: `For extra crispy chicken, double dredge the chicken by repeating the batter and coating steps before frying.` },
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