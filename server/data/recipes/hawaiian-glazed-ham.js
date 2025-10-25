const ham1 = '../assets/Products/hawaiian-glazed-ham-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BONE_IN_HAM, BROWN_SUGAR, CANNED_PINEAPPLE_SLICES, MARASCHINO_CHERRIES, YELLOW_MUSTARD } = require('./ingredients');

const HAM_SECTION = 'Ham';

const PREP_OVEN = 'Prep Oven';
const PREP_HAM = 'Prep Ham';
const BAKE_HAM = 'Bake Ham';

module.exports = {
    cardName: 'Hawaiian Glazed Ham',
    name: 'Hawaiian Glazed Ham',
    img: ham1,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.HAWAIIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 20, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 2, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Hoku\'s Grammy'],
            finder: 'Hoku\'s Grammy'
        }
    ],
    separated: true,
    ingredients: [
        { ...BONE_IN_HAM, amount: 15, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: HAM_SECTION },
        { ...YELLOW_MUSTARD, amount: 10, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: HAM_SECTION },
        { ...BROWN_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: HAM_SECTION },
        { ...CANNED_PINEAPPLE_SLICES, amount: 40, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: HAM_SECTION },
        { ...MARASCHINO_CHERRIES, amount: 10, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'pitted and stemless', section: HAM_SECTION },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'roasting pan' },
        { name: 'toothpicks' },
        { name: 'baster' },
    ],
    directions: [
        { step: 'Preheat the oven to 325ºF.', section: PREP_OVEN },
        { step: 'If the bone-in ham is not already pre-sliced, slice the ham until it is about an inch from the bone and about 1/2 inch thick. You are keeping the ham on the bone.', section: PREP_HAM },
        { step: 'Place the bone-in ham within a roasting pan.', section: PREP_HAM },
        { step: 'Lather the ham with mustard and make sure to get in between the slices.', section: PREP_HAM },
        { step: 'Add brown sugar to the ham and massage all over and in between the slices.', section: PREP_HAM },
        { step: 'Cover the ham with pineapple slices and pin them in with toothpicks.', section: PREP_HAM },
        { step: 'Place the cherries in center of each pineapple slices and pin them with toothpicks.', section: PREP_HAM },
        { step: 'Pour the pineapple and maraschino cherry juices over the ham.', section: PREP_HAM },
        { step: 'Cover the ham with tin foil.', section: PREP_HAM },
        { step: 'Place the ham in the oven and bake until heated (for about 45 minutes to an hour).', section: BAKE_HAM },
        { step: 'Increase the oven to 400ºF and remove the foil.', section: BAKE_HAM },
        { step: 'Baste the ham with its juices regularly and bake until it browns (for about 20 to 45 minutes).', section: BAKE_HAM },
        { step: 'Enjoy this delicious while it is still warm.', section: SECTIONS.SERVE },
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
            instruction: 'Cover loosely with foil. Bake at 325ºF until heated through (about 10 minutes per pound).',
        },
    ],
    mealPrep: true,
};