// const rings1 = '../assets/Products/onion-rings-1.jpeg';

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
const { ALL_PURPOSE_FLOUR, BAKING_PAN, BAKING_POWDER, BLACK_PEPPER, BUTTERMILK, CAYENNE_PEPPER, COOLING_RACK, DEEP_FRYER, DILL, EGG, GARLIC_POWDER, JAR_WITH_LID, MAYONNAISE, MILK, MIXING_BOWL, ONION_POWDER, OVEN, PAPER_TOWELS, PAPRIKA, SALT, VEGETABLE_OIL, WHISK, WHITE_SUGAR, YELLOW_ONION } = require('./ingredients');

const SPICY_RANCH_DRESSING = 'Spicy Ranch Dressing';
const FLOUR_DREDGE = 'Flour Dredge';
const EGG_DREDGE = 'Egg Dredge';
const ONION_SECTION = 'Onion';

const PREP_SPICY_RANCH_DRESSING = 'Prep Spicy Ranch Dressing';

module.exports = {
    wip: true,
    cardName: 'Onion Rings',
    name: 'Onion Rings',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-07-18 18:18:32',
    modifiedAt: '2026-07-18 22:55:50',
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.DEEP_FRY],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            bookTitle: 'Magnolia Table, Volume 2: A Collection of Recipes for Gathering',
            label: 'Onion Rings',
            link: null,
            authors: ['Joanna Gaines'],
            finder: 'Hannah Barnes',
        }
    ],
    ingredients: [
        { ...MAYONNAISE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SPICY_RANCH_DRESSING },
        { ...BUTTERMILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SPICY_RANCH_DRESSING },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICY_RANCH_DRESSING },
        { ...ONION_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICY_RANCH_DRESSING },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICY_RANCH_DRESSING },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICY_RANCH_DRESSING },
        { ...CAYENNE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICY_RANCH_DRESSING },
        { ...DILL, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICY_RANCH_DRESSING },
        { ...PAPRIKA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPICY_RANCH_DRESSING },

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.FOR_FRYING },

        { ...ALL_PURPOSE_FLOUR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_DREDGE },
        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_DREDGE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_DREDGE },
        { ...BAKING_POWDER, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_DREDGE },

        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: EGG_DREDGE },
        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: EGG_DREDGE },

        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: '1/2 inch thick rings', section: ONION_SECTION },
    ],
    appliances: [
        DEEP_FRYER,
        OVEN,
    ],
    supplies: [
        JAR_WITH_LID,
        MIXING_BOWL,
        WHISK,
        PAPER_TOWELS,
        COOLING_RACK,
        BAKING_PAN,
    ],
    directions: [
        { step: `In a jar with a lid, combine all the "${SPICY_RANCH_DRESSING}" section ingredients. Cover and shake well to mix.`, section: PREP_SPICY_RANCH_DRESSING },
        { step: `Chill.`, section: PREP_SPICY_RANCH_DRESSING },

        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Line a baking sheet with paper towels and place a wire cooling rack on top.`, section: SECTIONS.PREP_DRIP_STATION },

        { step: `In a deep fryer, heat oil to 375ºF.`, section: SECTIONS.HEAT_OIL },

        { step: `In a mixing bowl, combine the "${FLOUR_DREDGE}" section ingredients.`, section: SECTIONS.PREP_DREDGING_STATION },
        { step: `Add the "${EGG_DREDGE}" section ingredients. Whisk until smooth.`, section: SECTIONS.PREP_DREDGING_STATION },

        { step: `Dredge onion rings in batter. Let excess batter drip off.`, section: SECTIONS.DREDGE },

        { step: `Fry onion rings, 5 to 6 at a time, until golden brown (about 3 minutes). Turn halfway.`, section: SECTIONS.DEEP_FRY },

        { step: `Transfer to drip station.`, section: SECTIONS.DRIP },

        { step: `Keep warm in the oven.`, section: SECTIONS.WARM },

        { step: `Enjoy these hot with the dressing.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store dressing and onion rings separately in the fridge.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through (about 10 minutes).',
        },
    ],
    mealPrep: false,
};