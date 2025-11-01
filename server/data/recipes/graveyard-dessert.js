const graveyardDessert1 = '../assets/Products/graveyard-dessert-1.jpeg';
const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const { CHOCOLATE_PUDDING_CUPS, MILANO_COOKIES, OREO_COOKIES } = require('./ingredients');

const GRAVEYARD_DESSERTS = 'Graveyard Desserts';

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
    separated: true,
    ingredients: [
        { ...CHOCOLATE_PUDDING_CUPS, amount: 6, unit: '', additionalDetails: '', section: GRAVEYARD_DESSERTS },
        { ...OREO_COOKIES, amount: 1, unit: INGREDIENT_UNITS.PACKAGE, additionalDetails: 'without cream', section: GRAVEYARD_DESSERTS },
        { ...MILANO_COOKIES, amount: 1, unit: INGREDIENT_UNITS.PACKAGE, additionalDetails: '', section: GRAVEYARD_DESSERTS },
    ],
    supplies: [
        { name: 'clear cups' },
    ],
    directions: [
        { step: 'Fill cups with a layer of chocolate pudding.', section: SECTIONS.ASSEMBLE },
        { step: 'Break a Milano cookie in half and stick it into the pudding. This is a gravestone.', section: SECTIONS.ASSEMBLE },
        { step: 'Add a layer of crushed Oreo around the gravestone and cover the pudding layer.', section: SECTIONS.ASSEMBLE },

        { step: 'Get creative and have fun! You can add chocolate, sprinkles, and other cookies and candies.', section: SECTIONS.SERVE },
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