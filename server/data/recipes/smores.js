const smores = '../assets/Products/smores.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const {
    GRAHAM_CRACKER,
    MARSHMALLOW,
    HERSHEY_CHOCOLATE_BAR,
} = require('./ingredients');

module.exports = {
    cardName: 'S\'mores',
    name: 'S\'mores',
    img: smores,
    recipeAuthor: 'Kevin Ung',
    recipeFinder: '',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...GRAHAM_CRACKER, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...MARSHMALLOW, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...HERSHEY_CHOCOLATE_BAR, amount: 6, unit: '', additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'aluminum foil' },
        { name: 'baking sheet' },
    ],
    directions: [
        { step: 'Lay aluminum foil on baking sheet and turn on oven to broil.', section: SECTIONS.MAIN },
        { step: 'Place graham cracker halves on baking sheet and place marshmallows on each half.', section: SECTIONS.MAIN },
        { step: 'Bake inside the oven for about 3 minutes (or browned as desired).', section: SECTIONS.MAIN },
        { step: 'Take tray out and add graham crackers with 3 pieces of chocolate.', section: SECTIONS.MAIN },
        { step: 'Flip marshmallow and bake for an additional 2 minutes.', section: SECTIONS.MAIN },
        { step: 'Enjoy the sweet tastes of a campfire indoors.', section: SECTIONS.MAIN },
    ],
    store: null,
    reheat: null,
    mealPrep: false,
};