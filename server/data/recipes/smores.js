const smores1 = '../assets/Products/smores-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, METHODS, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALUMINUM_FOIL,
    BAKING_SHEET,
    GRAHAM_CRACKER,
    HERSHEY_CHOCOLATE_BAR,
    MARSHMALLOW,
    OVEN,
} = require('./ingredients');

module.exports = {
    cardName: 'S\'mores',
    name: 'S\'mores',
    img: smores1,
    recipeAuthors: ['Kevin Ung'],
    recipeFinder: '',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...GRAHAM_CRACKER, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...MARSHMALLOW, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...HERSHEY_CHOCOLATE_BAR, amount: 6, unit: '', additionalDetails: '', optional: false },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        ALUMINUM_FOIL,
        BAKING_SHEET,
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