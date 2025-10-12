// const example = '../assets/Products/example.jpeg';
const { waitTime } = require('./cheesecake-factory-cheesecake');
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { AVOCADO, BBQ_SAUCE, BROWN_LENTILS, BROWN_SUGAR, CARROT, CHILI_POWDER, DIJON_MUSTARD, GARLIC, HAMBURGER_BUNS, HOT_SAUCE, KETCHUP, LETTUCE, OLIVE_OIL, PICKLES, SALT, VEGETABLE_BROTH, WHITE_ONION, WORCESTERSHIRE_SAUCE, YELLOW_ONION } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Lentil Sloppy Joes',
    name: 'Lentil Sloppy Joes',
    img: '',
    recipeAuthors: ['Cassidy Reeser'],
    recipeFinder: 'Chelsey Hickenlooper',
    available: false,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PRESSURE_COOK],
    protein: [PROTEIN.LENTILS],
    type: [TYPES.BURGER],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Instant Pot Vegan Lentil Sloppy Joes', link: 'https://cozypeachkitchen.com/instant-pot-vegan-lentil-sloppy-joes/' }
    ],
    separated: true,
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUTE },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'finely diced', section: SECTIONS.SAUTE },
        { ...CARROT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.SAUTE },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUTE },
        { ...BROWN_LENTILS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'rinsed', section: SECTIONS.SAUCE },
        { ...KETCHUP, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...DIJON_MUSTARD, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHILI_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WORCESTERSHIRE_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HOT_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...VEGETABLE_BROTH, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...BBQ_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SERVE },
        { ...HAMBURGER_BUNS, amount: 5, unit: '', additionalDetails: '', section: SECTIONS.SERVE },

        { ...LETTUCE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...WHITE_ONION, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PICKLES, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...AVOCADO, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'Instant Pot' },
    ],
    supplies: [
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Set the Instant Pot to the "saute" function (on "normal" heat and timer for 7 minutes).', section: SECTIONS.SAUTE },
        { step: 'Once Instant Pot reads "hot", add olive oil.', section: SECTIONS.SAUTE },
        { step: 'Add onions and carrots. Saute in pot until softened and lightly browned (for about 6 minutes).', section: SECTIONS.SAUTE },
        { step: 'Add garlic. Saute for 1 minute.', section: SECTIONS.SAUTE },
        { step: 'Deglaze with 2 teaspoons of vegetable broth.', section: SECTIONS.SAUTE },
        { step: `Add the lentils and the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PRESSURE_COOK },
        { step: 'Cover with the lid and set the pressure vent. Set on high pressure with a 15 minute timer. It will take about 10 minutes to pressurize.', section: SECTIONS.PRESSURE_COOK },
        { step: 'Once the timer goes off, allow time for the pressure to release (about 15 minutes).', section: SECTIONS.PRESSURE_COOK },
        { step: 'Uncover.', section: SECTIONS.PRESSURE_COOK },
        { step: 'Add barbecue sauce. Stir.', section: SECTIONS.PRESSURE_COOK },
        { step: 'Serve on toasted buns and top with your favorite toppings.', section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'For smaller portions. Microwave until heated through (about 2 minutes).',
        },
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'For larger portions. Over medium heat, reheat until heated through.',
        },
    ],
    mealPrep: true,
};
