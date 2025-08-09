// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { SWEETENED_CONDENSED_MILK, UNSALTED_BUTTER, SPRINKLES, SEMI_SWEET_CHOCOLATE_CHIPS } = require('./ingredients');

const BRIGADEIRO_SECTION = 'Brigadeiro';

module.exports = {
    wip: true,
    cardName: 'Brigadeiro',
    name: 'Brigadeiro',
    img: '',
    recipeAuthor: 'Camila Hurst',
    recipeFinder: 'Sarah Miller',
    available: true,
    recommended: false,
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
        { name: 'stove' },
        { name: 'refrigerator' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'spatula' },
        { name: 'bowls' },
    ],
    directions: [
        { step: `In a saucepan, combine "${BRIGADEIRO_SECTION}" section ingredients.`, section: SECTIONS.PREP_DOUGH },
        { step: 'Over medium heat, bring to a boil and stir non-stop.', section: SECTIONS.PREP_DOUGH },
        { step: 'Cook until thick and the bottom is visible (about 10 minutes). Dough is ready when a spatula full falls in clumps instead of a steady stream.', section: SECTIONS.PREP_DOUGH },
        { step: 'Transfer to a bowl. Place in the fridge. Chill for 2 hours.', section: SECTIONS.PREP_DOUGH },

        { step: 'In various bowls, prepare sprinkles and other toppings.', section: SECTIONS.ASSEMBLE },
        { step: 'Set out paper cups on a plate.', section: SECTIONS.ASSEMBLE },
        { step: 'Run a little butter between your hands.', section: SECTIONS.ASSEMBLE },
        { step: 'Scoop a spoonful of the dough and roll into a ball.', section: SECTIONS.ASSEMBLE },
        { step: 'Roll balls in sprinkles and/or toppings. Shake in cupped hand to help round the ball.', section: SECTIONS.ASSEMBLE },

        { step: 'Enjoy these Brazilian desserts.', section: SECTIONS.SERVE },
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