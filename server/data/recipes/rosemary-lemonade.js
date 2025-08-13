const boiled = '../assets/Products/rosemary-lemonade-boiled.jpeg';
const zoomed = '../assets/Products/rosemary-lemonade-pitcher-zoomed.jpeg';
const pitcher = '../assets/Products/rosemary-lemonade-pitcher.jpeg';
const rosemary = '../assets/Products/rosemary-lemonade-rosemary.jpeg';
const sugar = '../assets/Products/rosemary-lemonade-sugar.jpeg';
const sweet = '../assets/Products/rosemary-lemonade-sweet-mix.jpeg';
const water = '../assets/Products/rosemary-lemonade-water.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { FRESH_ROSEMARY, WHITE_SUGAR, HONEY, LEMON_JUICE, ICE, LEMON, WATER } = require('./ingredients');

module.exports = {
    cardName: 'Rosemary Lemonade',
    name: 'Rosemary Lemonade',
    img: zoomed,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DRINK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.MIX],
    type: [TYPES.DRINK],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Rosemary Lemonade', link: "https://www.tasteofhome.com/recipes/rosemary-lemonade/" }
    ],
    separated: true,
    ingredients: [
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.MAIN },
        { ...FRESH_ROSEMARY, amount: 2, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...HONEY, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LEMON_JUICE, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WATER, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.MAIN },
        { ...ICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
        { ...LEMON, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.SERVE },
        { ...FRESH_ROSEMARY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'pitcher' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat 2 cups of water in a saucepan. Bring to a boil.', section: SECTIONS.MAIN, img: water },
        { step: 'Add rosemary sprigs and cover with a lid. Reduce to low heat and simmer for 10 minutes.', section: SECTIONS.MAIN, img: rosemary },
        { step: 'Take out the rosemary.', section: SECTIONS.MAIN, img: boiled },
        { step: 'Add honey and sugar. Mix until dissolved.', section: SECTIONS.MAIN, img: sugar },
        { step: 'Transfer sugar mixture to a pitcher. Place in the fridge for 15 minutes.', section: SECTIONS.MAIN, img: sweet },
        { step: 'Add lemon juice and cold water.', section: SECTIONS.SERVE, img: pitcher },
        { step: 'Serve with ice, lemon slices, and more rosemary.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};