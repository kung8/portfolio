// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { PORK_BUTT, SALT, GARLIC, LIQUID_SMOKE } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Kalua Pig',
    name: 'Kalua Pig',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Andrew Luke',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.HAWAIIAN],
    method: [METHODS.SLOW_COOK],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE, TYPES.SIDE_DISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 740, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...PORK_BUTT, amount: 4, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'or shoulder', section: SECTIONS.PORK },
        { ...LIQUID_SMOKE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.PORK },
        { ...SALT, amount: 3, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.PORK },
        { ...GARLIC, amount: 12, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.PORK },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'slow cooker' },
    ],
    supplies: [
        { name: 'pan' },
        { name: 'fork' },
    ],
    directions: [
        { step: 'Over high heat, sear all sides of a roast until browned in a pan.', section: SECTIONS.PREP_PORK },
        { step: 'Poke holes into the pork with a fork.', section: SECTIONS.PREP_PORK },
        { step: 'Cut slits into the pork. Stuff the slits with cloves of garlic.', section: SECTIONS.PREP_PORK },
        { step: 'Place roast in slow cooker.', section: SECTIONS.PREP_PORK },
        { step: 'Pour liquid smoke over pork.', section: SECTIONS.PREP_PORK },
        { step: 'Roast until cooked (about 8 to 12 hours).', section: SECTIONS.COOK_PORK },
        { step: 'Remove some of the liquid. Set aside.', section: SECTIONS.COOK_PORK },
        { step: 'Shred pork.', section: SECTIONS.COOK_PORK },
        { step: 'Re-add the liquid.', section: SECTIONS.COOK_PORK },
        { step: 'Enjoy this taste of Hawaii.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.SLOW_COOK,
            instruction: 'Slow cook on low until heated through (about 1 to 2 hours). Best if you have a lot.',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Add a little water. Microwave until heated through (about 3 to 5 minutes).',
        },
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Add a little water. Over medium-low heat, pan fry until heated through.',
        },
    ],
    mealPrep: true,
};