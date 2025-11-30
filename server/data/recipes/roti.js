// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { DRYING_CLOTH, FRYING_PAN, GHEE, MIXING_BOWL, ROLLING_PIN, STOVE, WATER, WHEAT_FLOUR } = require('./ingredients');

const MAKE_ROTI = 'Make Roti';
const COOK_ROTI = 'Cook Roti';
const COOK_ROTI_INDUCTION = 'Cook Roti on Induction Stove';
const COOK_ROTI_OPEN_FLAME = 'Cook Roti on Open Flame';

module.exports = {
    wip: true,
    cardName: 'Roti',
    name: 'Roti (or Chapati)',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.INDIAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.BREAD],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Roti',
            link: 'https://www.cookwithmanali.com/roti-recipe/',
            authors: ['Manali Singh'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...WHEAT_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WATER, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'or as needed', section: SECTIONS.DOUGH },
        { ...WHEAT_FLOUR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DUSTING },
        { ...GHEE, amount: '', unit: '', additionalDetails: 'for brushing', section: SECTIONS.BRUSH },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        DRYING_CLOTH,
        ROLLING_PIN,
        FRYING_PAN,
    ],
    directions: [
        { step: `In a mixing bowl, add flour.`, section: SECTIONS.MAKE_DOUGH },
        { step: `Slowly add water and mix with your hands. Mix until the dough comes together.`, section: SECTIONS.MAKE_DOUGH },
        { step: `Knead and fold until the dough is soft and pliable.`, section: SECTIONS.MAKE_DOUGH },
        { step: `Cover with a damp cloth. Let rise for 30 minutes.`, section: SECTIONS.MAKE_DOUGH },

        { step: `Knead a little.`, section: MAKE_ROTI },
        { step: `Divide into equal parts.`, section: MAKE_ROTI },
        { step: `Work with one ball at a time. Cover remaining with damp cloth to prevent it from drying out.`, section: MAKE_ROTI },
        { step: `Roll out the ball until smooth.`, section: MAKE_ROTI },
        { step: `Flatten it a little and there is no cracks.`, section: MAKE_ROTI },
        { step: `Dust counter with flour.`, section: MAKE_ROTI },
        { step: `Coat dough in flour on all sides.`, section: MAKE_ROTI },
        { step: `In another spot on the counter, roll out the dough until it is 5 to 6 inch circles. Add more flour as needed.`, section: MAKE_ROTI },
        { step: `Set aside. Do not stack.`, section: MAKE_ROTI },

        { step: `Follow the "${COOK_ROTI_OPEN_FLAME}" or "${COOK_ROTI_INDUCTION}" steps depending on what method you have available to you.`, section: COOK_ROTI, referenceType: 'directions' },

        { step: `Shake off excess flour.`, section: COOK_ROTI_OPEN_FLAME },
        { step: `Over medium-high heat, heat a frying pan.`, section: COOK_ROTI_OPEN_FLAME },
        { step: `Once it is hot, place roti in pan.`, section: COOK_ROTI_OPEN_FLAME },
        { step: `Cook until the top side bubbles up (about 15 to 30 seconds).`, section: COOK_ROTI_OPEN_FLAME },
        { step: `Flip.`, section: COOK_ROTI_OPEN_FLAME },
        { step: `Cook the second side until there are some brown spots all over (about 45 seconds to 1 minute).`, section: COOK_ROTI_OPEN_FLAME },
        { step: `Use a tong to heat the first side over direct flame until puffed up.`, section: COOK_ROTI_OPEN_FLAME },
        { step: `Flip and heat the second side over direct flame. Avoid burning it.`, section: COOK_ROTI_OPEN_FLAME },

        { step: `Shake off excess flour.`, section: COOK_ROTI_INDUCTION },
        { step: `Over medium-high heat, heat a frying pan.`, section: COOK_ROTI_INDUCTION },
        { step: `Once it is hot, place roti in pan.`, section: COOK_ROTI_INDUCTION },
        { step: `Cook until small bubble forms on top (about 30 to 40 seconds).`, section: COOK_ROTI_INDUCTION },
        { step: `Flip.`, section: COOK_ROTI_INDUCTION },
        { step: `Cook the second side until there are some brown spots all over (about 1 to 2 minutes).`, section: COOK_ROTI_INDUCTION },
        { step: `Flip back to the first side.`, section: COOK_ROTI_INDUCTION },
        { step: `Cook until brown spots (about a few seconds).`, section: COOK_ROTI_INDUCTION },

        { step: `Immediately brush with ghee.`, section: SECTIONS.BRUSH },
        { step: `Serve warm with your favorite dal, curry, or vegetables.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: ' Add more water if the dough is too hard or flour if the dough is too sticky.' },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.COVERED,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Cover with damp cloth and microwave for 30 seconds.',
        },
    ],
    mealPrep: true,
};