const mixedPan = '../assets/Products/sauteed-squash-mixed-in-pan.jpeg';
const mixed = '../assets/Products/sauteed-squash-mixed.jpeg';
const oil = '../assets/Products/sauteed-squash-oil-in-pan.jpeg';
const onions = '../assets/Products/sauteed-squash-onions.jpeg';
const plated = '../assets/Products/sauteed-squash-plated.jpeg';
const raw = '../assets/Products/sauteed-squash-raw.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const {
    OLIVE_OIL,
    UNSALTED_BUTTER,
    YELLOW_ONION,
    SALT,
    BLACK_PEPPER,
    THYME,
    PARMESAN_CHEESE,
    ZUCCHINI,
    SUMMER_SQUASH,
} = require('./ingredients');

module.exports = {
    cardName: 'Sauteed Squash',
    name: 'Sauteed Squash',
    img: plated,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Sauteed Zucchini', link: "https://www.wellplated.com/sauteed-zucchini/" }
    ],
    separated: false,
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...ZUCCHINI, amount: 3, unit: '', additionalDetails: 'sliced into 2"', section: SECTIONS.MAIN },
        { ...SUMMER_SQUASH, amount: 1, unit: '', additionalDetails: 'sliced into 2"', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...THYME, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Over medium-low heat, heat oil, onion, and butter in a pan. Cook until lightly browned (about 10 minutes).', section: SECTIONS.MAIN, img: [oil, onions] },
        { step: 'Increase to medium heat and add salt, black pepper, thyme, and squash and zucchini medley.', section: SECTIONS.MAIN, img: [raw] },
        { step: 'Cook until cooked (about 10 to 15 minutes). Stirring occasionally.', section: SECTIONS.MAIN, img: [mixedPan] },
        { step: 'Add parmesan and stir until well blended. I recommend removing the pan from heat, the residual heat should be enough to melt the cheese.', section: SECTIONS.MAIN, img: mixed },
        { step: 'Serve this on the side of any pasta dish.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium-high heat, heat the squash in a single layer in a pan. Let it crisp up on both sides.',
        },
    ],
    mealPrep: true,
};