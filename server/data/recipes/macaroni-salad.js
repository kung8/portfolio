const macaroni = '../assets/Products/macaroni-salad.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, UNITS, YIELD_UNITS } = require('./constants');
const {
    ELBOW_MACARONI,
    MAYONNAISE,
    WHITE_VINEGAR,
    WHITE_SUGAR,
    YELLOW_MUSTARD,
    SALT,
    BLACK_PEPPER,
    YELLOW_ONION,
    CELERY,
    GREEN_BELL_PEPPERS,
} = require('./ingredients');

module.exports = {
    cardName: 'Macaroni Salad',
    name: 'Macaroni Salad',
    img: macaroni,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.NOODLE],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: '20 m',
    cookTime: '10 m',
    ingredients: [
        { ...ELBOW_MACARONI, amount: 4, unit: UNITS.CUP, additionalDetails: '', optional: false },
        { ...MAYONNAISE, amount: 1, unit: UNITS.CUP, additionalDetails: '', optional: false },
        { ...WHITE_VINEGAR, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: '', optional: false },
        { ...WHITE_SUGAR, amount: 2 / 3, unit: UNITS.CUP, additionalDetails: '', optional: false },
        { ...YELLOW_MUSTARD, amount: 5 / 2, unit: UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...SALT, amount: 3 / 2, unit: UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...YELLOW_ONION, amount: 1, unit: UNITS.MEDIUM, additionalDetails: 'diced', optional: false },
        { ...CELERY, amount: 2, unit: UNITS.STALK, additionalDetails: 'sliced', optional: false },
        { ...GREEN_BELL_PEPPERS, amount: 1, unit: '', additionalDetails: 'diced', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'large mixing bowl' },
        { name: 'rubber spatula' },
        { name: 'strainer' },
    ],
    directions: [
        { step: 'Over a high heat boil water and salt in a large pot.', type: SECTIONS.MAIN },
        { step: 'Once the water boils, add the pasta and cook for about 8 - 10 minutes or until tender.', type: SECTIONS.MAIN },
        { step: 'Rinse the pasta under cold water and drain in colander.', type: SECTIONS.MAIN },
        { step: 'In the mixing bowl, combine the mayo, vinegar, sugar, mustard, salt, and pepper until well mixed.', type: SECTIONS.MAIN },
        { step: 'Then combine the onions, celery, green pepper, and pasta.', type: SECTIONS.MAIN },
        { step: 'Best to refrigerate at least 4 hours (or even overnight).', type: SECTIONS.MAIN },
        { step: 'Enjoy this sweet, creamy, fresh appetizer while you relax with some relaxing Hawaiian music.', type: SECTIONS.MAIN },
    ]
};