const graveyardDessert1 = '../assets/Products/graveyard-dessert-1.jpeg';
const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const { CHOCOLATE_PUDDING_CUPS, GUMMY_WORMS, MILANO_COOKIES, OREO_COOKIES } = require('./ingredients');

module.exports = {
    cardName: 'Graveyard Dessert',
    name: 'Graveyard Dessert',
    img: graveyardDessert1,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    type: [TYPES.DESSERT],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...CHOCOLATE_PUDDING_CUPS, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...OREO_COOKIES, amount: 1, unit: INGREDIENT_UNITS.PACKAGE, additionalDetails: 'without cream', section: SECTIONS.MAIN },
        { ...MILANO_COOKIES, amount: 1, unit: INGREDIENT_UNITS.PACKAGE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GUMMY_WORMS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    supplies: [
        { name: 'clear cups' },
    ],
    directions: [
        { step: 'Fill cups with a layer of chocolate pudding.', section: SECTIONS.MAIN },
        { step: 'Stick one or two gummy worms in the pudding.', section: SECTIONS.MAIN },
        { step: 'Add a layer of crushed Oreo.', section: SECTIONS.MAIN },
        { step: 'Add another layer of pudding and stick a worm through the top.', section: SECTIONS.MAIN },
        { step: 'Break an Milano cookie in half and stick it into the pudding. This is a gravestone.', section: SECTIONS.MAIN },
        { step: 'Sprinkle crushed Oreo around the worm and the gravestone and fill the rest of the layer.', section: SECTIONS.MAIN },
        { step: 'Get creative and have fun! You can add chocolate, sprinkles, and other cookies and candies.', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};