// const example = '../assets/Products/example.jpeg';
const { waitTime } = require('./cheesecake-factory-cheesecake');
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, UNITS, YIELD_UNITS } = require('./constants');
const { OLIVE_OIL, YELLOW_ONION, BROWN_LENTILS, CARROTS, GARLIC, KETCHUP, DIJON_MUSTARD, BROWN_SUGAR, CHILI_POWDER, WORCESTERSHIRE_SAUCE, HOT_SAUCE, SALT, BBQ_SAUCE, HAMBURGER_BUNS, LETTUCE, WHITE_ONION, PICKLES, AVOCADO, VEGETABLE_BROTH } = require('./ingredients');

const SAUTE = 'Saute';
const PRESSURE_COOK = 'Pressure Cook';

module.exports = {
    wip: true,
    cardName: 'Lentil Sloppy Joes',
    name: 'Lentil Sloppy Joes',
    img: '',
    recipeCredit: 'Chelsey Hickenlooper',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PRESSURE_COOK],
    protein: [PROTEIN.LENTILS],
    type: [TYPES.BURGER],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: '10 m',
    cookTime: '40 m',
    waitTime: '25 m',
    websites: [
        { label: 'Instant Pot Vegan Lentil Sloppy Joes', link: 'https://cozypeachkitchen.com/instant-pot-vegan-lentil-sloppy-joes/' }
    ],
    separated: true,
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: SAUTE },
        { ...YELLOW_ONION, amount: 1, unit: UNITS.SMALL, additionalDetails: 'finely diced', section: SAUTE },
        { ...CARROTS, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: 'diced', section: SAUTE },
        { ...GARLIC, amount: 3, unit: UNITS.CLOVE, additionalDetails: 'minced', section: SAUTE },
        { ...BROWN_LENTILS, amount: 1, unit: UNITS.CUP, additionalDetails: 'rinsed', section: SECTIONS.SAUCE },
        { ...KETCHUP, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...DIJON_MUSTARD, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHILI_POWDER, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WORCESTERSHIRE_SAUCE, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HOT_SAUCE, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...VEGETABLE_BROTH, amount: 9 / 4, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...BBQ_SAUCE, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.SERVE },
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
        { step: 'Set the Instant Pot to the "saute" function (on "normal" heat and timer for 7 minutes).', type: SAUTE },
        { step: 'Once Instant Pot reads "hot", add olive oil.', type: SAUTE },
        { step: 'Add onions and carrots. Saute in pot until softened and lightly browned (for about 6 minutes).', type: SAUTE },
        { step: 'Add garlic. Saute for 1 minute.', type: SAUTE },
        { step: 'Deglaze with 2 teaspoons of vegetable broth.', type: SAUTE },
        { step: 'Add the lentils and the "Sauce" section ingredients.', type: PRESSURE_COOK },
        { step: 'Cover with the lid and set the pressure vent. Set on high pressure with a 15 minute timer. It will take about 10 minutes to pressurize.', type: PRESSURE_COOK },
        { step: 'Once the timer goes off, allow time for the pressure to release (about 15 minutes).', type: PRESSURE_COOK },
        { step: 'Uncover.', type: PRESSURE_COOK },
        { step: 'Add barbecue sauce. Stir.', type: PRESSURE_COOK },
        { step: 'Serve on toasted buns and top with your favorite toppings.', type: SECTIONS.SERVE },
    ]
};
