// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { BABY_SPINACH, ALL_PURPOSE_FLOUR, SALT } = require('./ingredients');

const PREP_DOUGH = 'Prep Dough';
const COOK_DOUGH = 'Cook Dough';

module.exports = {
    wip: true,
    cardName: 'Pici Pasta',
    name: 'Pici Pasta',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Chelsey Hickenlooper',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BLEND, METHODS.BOIL],
    type: [TYPES.PASTA],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pici Pasta', link: 'https://monmackfood.com/vibrant-green-pici-pasta-no-pasta-roller-required/' }
    ],
    separated: false,
    ingredients: [
        { ...BABY_SPINACH, amount: 4.2, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 6.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'food processor' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
    ],
    directions: [
        { step: 'Add all ingredients to a food processor.', section: PREP_DOUGH },
        { step: 'Blend until it forms a vibrant green, smooth dough.', section: PREP_DOUGH },
        { step: 'Transfer to a clean working station.', section: PREP_DOUGH },
        { step: 'Pinch a teaspoon worth of dough.', section: PREP_DOUGH },
        { step: 'Roll it out to long skinny shapes.', section: PREP_DOUGH },
        { step: 'Repeat for the rest of the dough.', section: PREP_DOUGH },
        { step: 'Bring a pot of salted water to a boil.', section: COOK_DOUGH },
        { step: 'Drop dough into water.', section: COOK_DOUGH },
        { step: 'Cook until the dough floats to the top (about 30 seconds to 1 minute).', section: COOK_DOUGH },
        { step: 'Serve them with your preferred sauce.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The original chef tops with a garlic butter sauce.' }
    ]
};