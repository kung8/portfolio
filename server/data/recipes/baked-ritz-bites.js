const bites1 = '../assets/Products/baked-ritz-bites-1.jpeg';
const bites2 = '../assets/Products/baked-ritz-bites-2.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_SHEET, BUTTER_PICKLE_CHIPS, EVERYTHING_BAGEL_SEASONING, HAVARTI_CHEESE, OVEN, RITZ_CRACKERS } = require('./ingredients');

module.exports = {
    cardName: 'Baked Ritz Bites',
    name: 'Baked Ritz Bites',
    img: bites2,
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.SIDE_DISH, TYPES.FINGER_FOOD],
    allergies: [],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 3, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Cheesy Ritz Pickle Bites',
            link: 'https://natalie-mason.com/cheesy-ritz-pickle-bites/',
            authors: ['Natalie Mason'],
            finder: 'Kevin Ung',
        }
    ],
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
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line a baking sheet with aluminum foil.`, section: SECTIONS.ASSEMBLE },
        { step: `Lay out ritz crackers on baking sheet in a single row.`, section: SECTIONS.ASSEMBLE },
        { step: `Layer each cracker with a pickle and cheese.`, section: SECTIONS.ASSEMBLE },
        { step: `Sprinkle everything bagel seasoning over each.`, section: SECTIONS.ASSEMBLE, img: bites1 },
        { step: `Bake until the cheese has melted (about 5 to 10 minutes).`, section: SECTIONS.BAKE },
        { step: `Enjoy this delicious quick snack.`, section: SECTIONS.SERVE },
    ],
    store: null,
    reheat: null,
    mealPrep: false,
};