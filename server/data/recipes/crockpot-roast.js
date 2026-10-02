const roast1 = '../assets/Products/crockpot-roast-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { CARROT, CROCK_POT, DRY_BROWN_GRAVY_MIX, DRY_ITALIAN_DRESSING_MIX, PORK_ROAST, POTATO, RANCH_DIP_DRESSING, WATER, YELLOW_ONION } = require('./ingredients');

const DRY_MIXES = 'Dry Mixes';

module.exports = {
    cardName: 'Crock Pot Roast',
    name: 'Crock Pot Roast',
    img: roast1,
    available: true,
    recommended: false,
    createdAt: '2026-10-02 09:35:58',
    modifiedAt: '2026-10-02 09:35:58',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SLOW_COOK],
    protein: [PROTEIN.BEEF, PROTEIN.PORK],
    type: [TYPES.MAIN_COURSE, TYPES.PROTEIN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 9, unit: TIME_UNITS.HOUR },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Crock Pot Roast', link: 'https://www.food.com/recipe/to-die-for-crock-pot-roast-27208', authors: ['Yooper'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...PORK_ROAST, amount: 5, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'or beef roast', section: SECTIONS.ROAST },
        { ...DRY_BROWN_GRAVY_MIX, amount: 1.74, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: DRY_MIXES },
        { ...DRY_ITALIAN_DRESSING_MIX, amount: 1.4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: DRY_MIXES },
        { ...RANCH_DIP_DRESSING, amount: 2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: DRY_MIXES },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.WATER },
        { ...POTATO, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...CARROT, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },
    ],
    appliances: [
        CROCK_POT,
    ],
    // supplies: [],
    directions: [
        { step: `Place the roast in the crock pot.`, section: SECTIONS.COOK_ROAST },
        { step: `In a small bowl, combine the "${DRY_MIXES}" section ingredients.`, section: SECTIONS.COOK_ROAST },
        { step: `Sprinkle the mixture over the roast.`, section: SECTIONS.COOK_ROAST },
        { step: `Pour water around the roast.`, section: SECTIONS.COOK_ROAST },
        { step: `Cook on low for 7 to 9 hours.`, section: SECTIONS.COOK_ROAST },
        { step: `Add preferred vegetables around 2 to 3 hours before the roast is done cooking.`, section: SECTIONS.COOK_ROAST },
        { step: `Enjoy your roast with rolls and your favorite side dishes.`, section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave until heated through (about 3 to 5 minutes).',
        },
    ],
    mealPrep: true,
};