const mixedPan = '../assets/Products/sauteed-squash-mixed-in-pan.jpeg';
const mixed = '../assets/Products/sauteed-squash-mixed.jpeg';
const oil = '../assets/Products/sauteed-squash-oil-in-pan.jpeg';
const onions = '../assets/Products/sauteed-squash-onions.jpeg';
const plated = '../assets/Products/sauteed-squash-plated.jpeg';
const raw = '../assets/Products/sauteed-squash-raw.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, UNITS, YIELD_UNITS } = require('./constants');
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
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    type: [TYPES.VEGETABLE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: '5 m',
    cookTime: '25 m',
    websites: [
        { label: 'Sauteed Zucchini', link: "https://www.wellplated.com/sauteed-zucchini/" }
    ],
    separated: false,
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1, unit: UNITS.MEDIUM, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...ZUCCHINI, amount: 3, unit: '', additionalDetails: 'sliced into 2"', section: SECTIONS.MAIN },
        { ...SUMMER_SQUASH, amount: 1, unit: '', additionalDetails: 'sliced into 2"', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...THYME, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Over medium-low heat, heat oil, onion, and butter in a pan. Cook until lightly browned (about 10 minutes).', type: SECTIONS.MAIN, img: [oil, onions] },
        { step: 'Increase to medium heat and add salt, black pepper, thyme, and squash and zucchini medley.', type: SECTIONS.MAIN, img: [raw] },
        { step: 'Cook until cooked (about 10 to 15 minutes). Stirring occasionally.', type: SECTIONS.MAIN, img: [mixedPan] },
        { step: 'Add parmesan and stir until well blended. I recommend removing the pan from heat, the residual heat should be enough to melt the cheese.', type: SECTIONS.MAIN, img: mixed },
        { step: 'Serve this on the side of any pasta dish.', type: SECTIONS.SERVE },
    ]
};