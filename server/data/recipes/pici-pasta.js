// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, UNITS, YIELD_UNITS } = require('./constants');
const { BABY_SPINACH, ALL_PURPOSE_FLOUR, SALT } = require('./ingredients');

const PREP_DOUGH = 'Prep Dough';
const COOK_DOUGH = 'Cook Dough';

module.exports = {
    wip: true,
    cardName: 'Pici Pasta',
    name: 'Pici Pasta',
    img: '',
    recipeCredit: 'Chelsey Hickenlooper',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BLEND, METHODS.BOIL],
    type: [TYPES.PASTA],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: '30 m',
    cookTime: '5 m',
    websites: [
        { label: 'Pici Pasta', link: 'https://monmackfood.com/vibrant-green-pici-pasta-no-pasta-roller-required/' }
    ],
    separated: false,
    ingredients: [
        { ...BABY_SPINACH, amount: 4.2, unit: UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 6.5, unit: UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'food processor' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
    ],
    directions: [
        { step: 'Add all ingredients to a food processor.', type: PREP_DOUGH },
        { step: 'Blend until it forms a vibrant green, smooth dough.', type: PREP_DOUGH },
        { step: 'Transfer to a clean working station.', type: PREP_DOUGH },
        { step: 'Pinch a teaspoon worth of dough.', type: PREP_DOUGH },
        { step: 'Roll it out to long skinny shapes.', type: PREP_DOUGH },
        { step: 'Repeat for the rest of the dough.', type: PREP_DOUGH },
        { step: 'Bring a pot of salted water to a boil.', type: COOK_DOUGH },
        { step: 'Drop dough into water.', type: COOK_DOUGH },
        { step: 'Cook until the dough floats to the top (about 30 seconds to 1 minute).', type: COOK_DOUGH },
        { step: 'Serve them with your preferred sauce.', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The original chef tops with a garlic butter sauce.' }
    ]
};