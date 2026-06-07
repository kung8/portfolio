// const example1 = '../assets/Products/example-1.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, COLANDER, PECORINO_ROMANO, SAUCEPAN, SPAGHETTI_NOODLES, STOVE, TONGS, UNSALTED_BUTTER } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Cacio e Pepe',
    name: 'Cacio e Pepe',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.SAUTE],
    type: [TYPES.PASTA, TYPES.MAIN_COURSE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Cacio e Pepe',
            link: 'https://www.spoonforkbacon.com/cacio-e-pepe-recipe/',
            authors: ['Teri & Jenny'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...SPAGHETTI_NOODLES, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PECORINO_ROMANO, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        COLANDER,
        TONGS,
    ],
    directions: [
        { step: `Over high heat, bring a saucepan of salted water to a boil.`, section: SECTIONS.COOK_NOODLES },
        { step: `Cook pasta until al dente (about 6 to 8 minutes or per package).`, section: SECTIONS.COOK_NOODLES },
        { step: `Reserve 2/3 cup of pasta water. Drain.`, section: SECTIONS.COOK_NOODLES },

        { step: `Over low heat, re-add pasta to saucepan.`, section: SECTIONS.SAUTE },
        { step: `Add pasta water and butter. Toss until butter is melted and pasta is coated.`, section: SECTIONS.SAUTE },
        { step: `Add cheese and black pepper.`, section: SECTIONS.SAUTE },

        { step: `Serve and optionally top with more cheese.`, section: SECTIONS.SERVE },
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
            instruction: 'Add a splash of water. Over medium-low, stirring frequently until heated through.',
        },
    ],
    mealPrep: true,
};