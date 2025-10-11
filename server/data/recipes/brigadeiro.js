const brigadeiro1 = '../assets/Products/brigadeiro-1.jpeg';
const brigadeiro2 = '../assets/Products/brigadeiro-2.jpeg';
const brigadeiro3 = '../assets/Products/brigadeiro-3.mp4';
const brigadeiro4 = '../assets/Products/brigadeiro-4.jpeg';
const brigadeiro5 = '../assets/Products/brigadeiro-5.jpeg';
const brigadeiro6 = '../assets/Products/brigadeiro-6.jpeg';
const brigadeiro7 = '../assets/Products/brigadeiro-7.jpeg';
const brigadeiro8 = '../assets/Products/brigadeiro-8.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BOWL, REFRIGERATOR, SAUCEPAN, SEMI_SWEET_CHOCOLATE_CHIPS, SPATULA, SPRINKLES, STOVE, SWEETENED_CONDENSED_MILK, UNSALTED_BUTTER } = require('./ingredients');

const BRIGADEIRO_SECTION = 'Brigadeiro';

module.exports = {
    cardName: 'Brigadeiro',
    name: 'Brigadeiro',
    img: brigadeiro8,
    recipeAuthors: ['Camila Hurst'],
    recipeFinder: 'Sarah Miller',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.BRAZILIAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT],
    yields: { amount: 20, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 2, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Brigadeiro', link: 'https://www.piesandtacos.com/brigadeiro-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...SWEETENED_CONDENSED_MILK, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: BRIGADEIRO_SECTION },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BRIGADEIRO_SECTION },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BRIGADEIRO_SECTION },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.DOLLOP, additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...SPRINKLES, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.ASSEMBLE },
    ],
    appliances: [
        STOVE,
        REFRIGERATOR,
    ],
    supplies: [
        SAUCEPAN,
        SPATULA,
        { ...BOWL, additionalDetails: 'for toppings' },
    ],
    directions: [
        { step: `In a saucepan, combine "${BRIGADEIRO_SECTION}" section ingredients.`, section: SECTIONS.PREP_DOUGH, img: brigadeiro1 },
        { step: 'Over medium heat, bring to a boil and stir non-stop.', section: SECTIONS.PREP_DOUGH, img: brigadeiro2 },
        { step: 'Cook until thick and the bottom is visible (about 10 minutes). Dough is ready when a spatula full falls in clumps instead of a steady stream.', section: SECTIONS.PREP_DOUGH, video: brigadeiro3 },
        { step: 'Transfer to a bowl. Place in the fridge. Chill for 2 hours.', section: SECTIONS.PREP_DOUGH, img: brigadeiro4 },

        { step: 'In various bowls, prepare sprinkles and other toppings.', section: SECTIONS.ASSEMBLE },
        { step: 'Set out paper cups on a plate.', section: SECTIONS.ASSEMBLE, img: brigadeiro5 },
        { step: 'Run a little butter between your hands.', section: SECTIONS.ASSEMBLE },
        { step: 'Scoop a spoonful of the dough and roll into a ball.', section: SECTIONS.ASSEMBLE, img: brigadeiro6 },
        { step: 'Roll balls in sprinkles and/or toppings. Shake in cupped hand to help round the ball (like when rolling a dice).', section: SECTIONS.ASSEMBLE, img: brigadeiro7 },

        { step: 'Enjoy these Brazilian desserts.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'I found it easier to roll all the dough into balls then roll them in the sprinkles so the sprinkles do not stick to your hands.' }
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};