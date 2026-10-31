const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    CABBAGE,
    CARROT,
    CHILI_OIL,
    CORNSTARCH,
    DARK_SOY_SAUCE,
    EGG,
    GREEN_ONION,
    GROUND_CHICKEN,
    LARGE_PAN,
    LIGHT_SOY_SAUCE,
    MIXING_BOWL,
    OYSTER_SAUCE,
    SESAME_OIL,
    SMALL_BOWL,
    STOVE,
    VEGETABLE_OIL,
    WATER,
    WONTON_WRAPPER,
} = require('./ingredients');

const COOK_DUMPLINGS = 'Cook Dumplings';

module.exports = {
    wip: true,
    cardName: 'Chicken Blanket Dumplings',
    name: 'Chicken Blanket Dumplings',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-10-26 00:05:45',
    modifiedAt: '2026-10-31 08:51:32',
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.PAN_FRY, METHODS.STEAM],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD, TYPES.MAIN_COURSE],
    yields: { amount: 9, unit: YIELD_UNITS.EACH },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 8, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Chicken Blanket Dumplings',
            link: 'https://cicili.tv/15-min-chicken-blanket-dumplings/',
            authors: ['CiCi Li'],
            finder: 'Kevin Ung',
        },
    ],
    ingredients: [
        { ...GROUND_CHICKEN, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.FILLING },
        { ...OYSTER_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...DARK_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.FILLING },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CARROT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...CABBAGE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'finely chopped', section: SECTIONS.FILLING },
        { ...GREEN_ONION, amount: 3, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'minced', section: SECTIONS.FILLING },

        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.OIL },
        
        { ...WONTON_WRAPPER, amount: 9, unit: INGREDIENT_UNITS.SHEET, additionalDetails: '', section: SECTIONS.ASSEMBLE },

        { ...WATER, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.STEAM },

        { ...GREEN_ONION, amount: 1, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'minced', section: SECTIONS.SERVE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SERVE },
        { ...CHILI_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_PAN,
        MIXING_BOWL,
        SMALL_BOWL,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.PREP_FILLING },
        
        { step: `In a pan, add the oil.`, section: COOK_DUMPLINGS },
        { step: `Add filling into portions to the pan.`, section: COOK_DUMPLINGS },
        { step: `Cover each portion with the wonton wrapper.`, section: COOK_DUMPLINGS },
        { step: `Turn on medium heat. Pan fry until the bottom sets (about 1 minute).`, section: COOK_DUMPLINGS },
        { step: `Add water. Cover and steam until the chicken is cooked through (about 5 minutes).`, section: COOK_DUMPLINGS },
        { step: `To crisp the bottom, uncover and cook for another 2 minutes until the bottoms turn golden brown and crispy.`, section: COOK_DUMPLINGS },

        { step: `Enjoy these simplified dumplings. Serve hot with your favorite dipping sauce.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `The egg helps keep the filling tender and the cornstarch helps lock in moisture so the dumplings stay juicy and the bottoms crisp up nicely.` },
        { note: `Do not overcrowd the pan so each dumpling cooks evenly and the bottoms can crisp instead of steam.` },
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
            instruction: 'Over medium heat, heat in a lightly oiled pan until warmed through and the bottoms regain some crispness.',
        },
    ],
    mealPrep: true,
};
