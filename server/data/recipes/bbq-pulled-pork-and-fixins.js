const garlic = '../assets/Products/bbq-pulled-pork-garlic.jpeg';
const beforePulled = '../assets/Products/bbq-pulled-pork-finished-before-pulled.jpeg';
const finished = '../assets/Products/bbq-pulled-pork-finished.jpeg';
const pulled = '../assets/Products/bbq-pulled-pork-pulled.jpeg';
const covered = '../assets/Products/bbq-pulled-pork-covered.jpeg';
const dryWithPork = '../assets/Products/bbq-pulled-pork-dry-mixed-with-pork.jpeg';
const mixed = '../assets/Products/bbq-pulled-pork-dry-mixed.jpeg';
const dry = '../assets/Products/bbq-pulled-pork-dry.jpeg';
const liner = '../assets/Products/bbq-pulled-pork-liner.jpeg';
const raw = '../assets/Products/bbq-pulled-pork-raw-pork.jpeg';
const wet = '../assets/Products/bbq-pulled-pork-wet.jpeg';
const plate1 = '../assets/Products/bbq-pulled-pork-full-plate-1.jpeg';
const plate2 = '../assets/Products/bbq-pulled-pork-full-plate-2.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, REHEAT_METHODS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, DIET } = require("./constants");
const {
    APPLE_CIDER_VINEGAR,
    BBQ_SAUCE,
    BRIOCHE_BUNS,
    BROWN_SUGAR,
    CHICKEN_BROTH,
    CHILI_POWDER,
    FORK,
    GARLIC,
    PORK_ROAST,
    SLOW_COOKER,
    SLOW_COOKER_LINER,
    THYME,
    VEGETABLE_OIL,
    WORCESTERSHIRE_SAUCE,
    YELLOW_MUSTARD,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'BBQ Pulled Pork',
    name: 'BBQ Pulled Pork',
    img: finished,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SOUTHERN, GENRES.BBQ, GENRES.AMERICAN],
    method: [METHODS.SLOW_COOK],
    protein: [PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 6, unit: TIME_UNITS.HOUR },
    ingredients: [
        { ...PORK_ROAST, amount: 4, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.FILLING },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...BROWN_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CHILI_POWDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'chopped', section: SECTIONS.FILLING },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...THYME, amount: 1.5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...BBQ_SAUCE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...APPLE_CIDER_VINEGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CHICKEN_BROTH, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...YELLOW_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WORCESTERSHIRE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...BRIOCHE_BUNS, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        SLOW_COOKER,
    ],
    supplies: [
        SLOW_COOKER_LINER,
        { ...FORK, amount: 2 },
    ],
    directions: [
        { step: 'Line a slow cooker with a liner to make cleaning quick.', section: SECTIONS.FILLING, img: liner },
        { step: 'Pour the vegetable oil into the slow cooker.', section: SECTIONS.FILLING },
        { step: 'Place roast in the slow cooker and massage the pork with the dry ingredient.', section: SECTIONS.FILLING, img: [garlic, raw, dry, mixed, dryWithPork] },
        { step: 'Pour the wet ingredients into the slow cooker.', section: SECTIONS.FILLING, img: wet },
        { step: 'Cover and cook on high for 5 - 6 hours (or on low for 10 - 12 hours).', section: SECTIONS.FILLING, img: covered },
        { step: 'Shred the pork with two forks.', section: SECTIONS.FILLING, img: [beforePulled, pulled] },
        { step: 'Return shredded pork to soak in more of the sauce.', section: SECTIONS.FILLING },
        { step: 'Fill the brioche buns with pulled pork.', section: SECTIONS.MAIN },
        { step: 'Serve with coleslaw, baked beans, homemade macaroni and cheese, and any other favorite fixins\'.', section: SECTIONS.MAIN, img: [plate1, plate2] },
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
            instruction: 'Cover with foil and bake at 250ºF until heated through (about 30 minutes).',
        },
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over low heat, warm the pulled pork in a covered pot. You may need to add a splash of water or broth to keep it moist. Stir occasionally until heated through (about 20 to 30 minutes).',
        },
    ],
    mealPrep: true,
};