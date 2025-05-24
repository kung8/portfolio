// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { ICE_CREAM, MOCHIKO, CORNSTARCH } = require('./ingredients');

const MOCHI_SECTION = 'Mochi';
const DUSTING_SECTION = 'Dusting';

const MELT_ICE_CREAM = 'Melt Ice Cream';
const HEAT_MOCHIKO = 'Heat Mochiko';
const FORM_MOCHI = 'Form Mochi';

module.exports = {
    wip: true,
    cardName: 'Easy Mochi',
    name: 'Easy Mochi',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.SNACK, CATEGORIES.DESSERT],
    genre: [GENRES.JAPANESE],
    method: [METHODS.MELT, METHODS.MICROWAVE, METHODS.KNEAD],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 3, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Mochi', link: 'https://parade.com/food/two-ingredient-mochi' }
    ],
    separated: true,
    ingredients: [
        { ...ICE_CREAM, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'any flavor', section: MOCHI_SECTION },
        { ...MOCHIKO, amount: 11, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MOCHI_SECTION },
        { ...CORNSTARCH, amount: '', unit: '', additionalDetails: 'dusting and needed', section: DUSTING_SECTION },
    ],
    appliances: [
        { name: 'microwave' },
    ],
    supplies: [
        { name: 'glass mixing bowl' },
        { name: 'plastic wrap' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'In a glass mixing bowl, let ice cream completely melt at room temperature (about 1 hour).', section: MELT_ICE_CREAM },
        { step: 'Add mochiko.', section: HEAT_MOCHIKO },
        { step: 'Cover the bowl with plastic wrap. Poke a few small holes in the plastic wrap.', section: HEAT_MOCHIKO },
        { step: 'Microwave for 1 minute. Uncover and mix.', section: HEAT_MOCHIKO },
        { step: 'Recover. Microwave for 90 seconds.', section: HEAT_MOCHIKO },
        { step: 'Let cool for a minute.', section: HEAT_MOCHIKO },
        { step: 'Use a spatula to knead and fold the mochi. Knead until solid but still pliable.', section: FORM_MOCHI },
        { step: 'Dust with cornstarch if still sticky.', section: FORM_MOCHI },
        { step: 'Cut mochi to your desired size and shape.', section: FORM_MOCHI },
        { step: 'Enjoy this easy mochi dish!', section: SECTIONS.SERVE },
    ]
};