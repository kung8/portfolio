// const example1 = '../assets/Products/example-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { COOKING_THERMOMETER, CUPS, FRYING_PAN, HONEY, OLIVE_OIL, PARCHMENT_PAPER, PIZZA_CUTTER, ROLLING_PIN, SAUCEPAN, SESAME_SEEDS, STOVE } = require('./ingredients');

const PASTELI_SECTION = 'Pasteli';
const TOAST_SESAME_SEEDS = 'Toast Sesame Seeds';
const PREP_PARCHMENT_PAPER = 'Prep Parchment Paper';
const COOK_PASTELI = 'Cook Pasteli';
const FORM_PASTELI = 'Form Pasteli';

module.exports = {
    wip: true,
    cardName: 'Greek Pasteli',
    name: 'Greek Pasteli',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.SNACK, CATEGORIES.DESSERT],
    genre: [GENRES.GREEK, GENRES.MEDITERRANEAN, GENRES.MIDDLE_EASTERN],
    method: [METHODS.BAKE, METHODS.SIMMER],
    protein: [],
    type: [TYPES.BAR, TYPES.DESSERT],
    yields: { amount: 20, unit: YIELD_UNITS.BAR },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Pasteli',
            link: 'https://www.olivetomato.com/pasteli-greek-honey-sesame-bars/',
            authors: ['Elena Paravantes'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...SESAME_SEEDS, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PASTELI_SECTION },
        { ...HONEY, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PASTELI_SECTION },

        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'for brushing parchment paper', section: PREP_PARCHMENT_PAPER }
    ],
    appliances: [
        STOVE
    ],
    supplies: [
        FRYING_PAN,
        SAUCEPAN,
        COOKING_THERMOMETER,
        CUPS,
        PARCHMENT_PAPER,
        ROLLING_PIN,
        PIZZA_CUTTER,
    ],
    directions: [
        { step: `Over low heat, toast the sesame seeds in a dry frying pan. You want them toasted a little but not browned. Set aside.`, section: TOAST_SESAME_SEEDS },

        { step: `Lightly brush a little olive oil on two sheets of parchment paper.`, section: PREP_PARCHMENT_PAPER },

        { step: `Over medium heat, heat honey in a saucepan. Let it boil until it reaches 250ºF (about 4 to 5 minutes).`, section: COOK_PASTELI },
        { step: `Bring heat to low.`, section: COOK_PASTELI },
        { step: `Add and stir the sesame seeds into the honey.`, section: COOK_PASTELI },
        { step: `Heat for about 2 to 3 minutes. If you can drop a small amount of it in a glass of water, it should stay in a ball.`, section: COOK_PASTELI },

        { step: `Quickly pour the mixture onto one of the parchment papers.`, section: FORM_PASTELI },
        { step: `Lay the other parchment paper greased side-down.`, section: FORM_PASTELI },
        { step: `Roll out the mixture to about 1/4 inch thickness.`, section: FORM_PASTELI },
        { step: `Remove the top sheet of parchment paper.`, section: FORM_PASTELI },
        { step: `Let it cool (about 15 minutes).`, section: FORM_PASTELI },
        { step: `Cut into bars or squares with a pizza cutter.`, section: FORM_PASTELI },

        { step: `Let it cool completely before serving.`, section: SECTIONS.COOL },

        { step: `Enjoy these Greek/Mediterranean snacks.`, section: SECTIONS.SERVE },
    ],
    notes: [
        {
            note: `Be careful not to burn or add too much color to the sesame seeds.`
        }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.COOL_DRY_PLACE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};