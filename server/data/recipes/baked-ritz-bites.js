const bites1 = '../assets/Products/baked-ritz-bites-1.jpeg';
const bites2 = '../assets/Products/baked-ritz-bites-2.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_SHEET, BUTTER_PICKLE_CHIPS, EVERYTHING_BAGEL_SEASONING, HAVARTI_CHEESE, OVEN, RITZ_CRACKERS } = require('./ingredients');

const PREP_CRACKER_BITES = 'Prep Cracker Bites';
const BAKE_CRACKER_BITES = 'Bake Cracker Bites';

module.exports = {
    cardName: 'Baked Ritz Bites',
    name: 'Baked Ritz Bites',
    img: bites2,
    recipeAuthors: ['Natalie Mason'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.SIDE_DISH, TYPES.FINGER_FOOD],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 3, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Cheesy Ritz Pickle Bites', link: 'https://natalie-mason.com/cheesy-ritz-pickle-bites/' }
    ],
    separated: true,
    ingredients: [
        { ...RITZ_CRACKERS, amount: 32, unit: '', additionalDetails: '', section: '' },
        { ...HAVARTI_CHEESE, amount: 6, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'cut into cracker sized squares', section: '' },
        { ...BUTTER_PICKLE_CHIPS, amount: 32, unit: '', additionalDetails: '', section: '' },
        { ...EVERYTHING_BAGEL_SEASONING, amount: '', unit: '', additionalDetails: 'to taste', section: '' },
    ],
    appliances: [
        OVEN
    ],
    supplies: [
        BAKING_SHEET,
        ALUMINUM_FOIL,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: PREP_CRACKER_BITES },
        { step: 'Line a baking sheet with aluminum foil.', section: PREP_CRACKER_BITES },
        { step: 'Lay out ritz crackers on baking sheet in a single row.', section: PREP_CRACKER_BITES },
        { step: 'Layer each cracker with a pickle and cheese.', section: PREP_CRACKER_BITES },
        { step: 'Sprinkle everything bagel seasoning over each.', section: PREP_CRACKER_BITES, img: bites1 },
        { step: 'Bake until the cheese has melted (about 5 to 10 minutes).', section: BAKE_CRACKER_BITES },
        { step: 'Enjoy this delicious quick snack.', section: SECTIONS.SERVE },
    ],
    store: null,
    reheat: null,
    mealPrep: false,
};