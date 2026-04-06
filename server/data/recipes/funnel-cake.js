// const example1 = '../assets/Products/example-1.jpeg';

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
const { ALL_PURPOSE_FLOUR, BAKING_POWDER, BAKING_SHEET, COOLING_RACK, DEEP_FRYER_OR_STOVE, EGG, LIQUID_MEASURING_CUP, MILK, MIXING_BOWL, PAPER_TOWELS, POT, POWDERED_SUGAR, SALT, STRAINER, VANILLA_EXTRACT, VEGETABLE_OIL, WHISK, WHITE_SUGAR } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Funnel Cake',
    name: 'Funnel Cake',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK, CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN, GENRES.SOUTHERN],
    method: [METHODS.DEEP_FRY],
    type: [TYPES.DESSERT, TYPES.FINGER_FOOD],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Funnel Cake',
            link: 'https://sugarspunrun.com/funnel-cake-recipe',
            authors: ['Sam Merritt'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRY_INGREDIENTS },

        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.WET_INGREDIENTS },

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.OIL },

        { ...POWDERED_SUGAR, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        DEEP_FRYER_OR_STOVE,
    ],
    supplies: [
        { ...MIXING_BOWL, amount: 2 },
        WHISK,
        POT,
        BAKING_SHEET,
        PAPER_TOWELS,
        COOLING_RACK,
        LIQUID_MEASURING_CUP,
        STRAINER,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.DRY_INGREDIENTS}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: `In another mixing bowl, combine the "${SECTIONS.WET_INGREDIENTS}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: `Slowly pour dry ingredients into the wet ingredients while whisking. Whisk until combined.`, section: SECTIONS.PREP_BATTER },
        { step: `Set aside.`, section: SECTIONS.PREP_BATTER },

        { step: `Heat 2 to 3 inches of oil in a deep fryer (or pot on a stove). Bring oil to 370 to 375ºF.`, section: SECTIONS.FRY },
        { step: `Line a baking sheet with paper towels and place a cooling rack on top.`, section: SECTIONS.FRY },
        { step: `Measure out about 1/2 cup of batter in a liquid measuring cup.`, section: SECTIONS.FRY },
        { step: `Carefully drizzle batter into the oil following a thin swirling, criss-cross pattern (have fun with this).`, section: SECTIONS.FRY },
        { step: `Fry until both sides are golden brown (about 90 seconds per side).`, section: SECTIONS.FRY },
        { step: `Transfer to drip station.`, section: SECTIONS.FRY },
        { step: `Repeat for the remaining batter and wait for the oil to reach the right temperature range between batches.`, section: SECTIONS.FRY },

        { step: `Serve topped with generous powedered sugar.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `If the batter is too thick add a little more milk to get the batter to a pourable consistency (up to an additional 3/4 cup).` },
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
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until warmed through and crispy again (about 3 to 4 minutes).',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until warmed through and crispy again (about 5 to 8 minutes).',
        },
    ],
    mealPrep: true,
};