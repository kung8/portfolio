const pineapple1 = '../assets/Products/hawaiian-grilled-pineapple-1.jpeg';
const pineapple2 = '../assets/Products/hawaiian-grilled-pineapple-2.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BROWN_SUGAR, GRILL, HONEY, PINEAPPLE, SALT, VEGETABLE_OIL, WATER, ZIPLOC_BAG } = require('./ingredients');

const PINEAPPLE_SECTION = 'Pineapple';
const GRILL_SECTION = 'Grill';

const GRILL_PINEAPPLE = 'Grill Pineapple';

module.exports = {
    cardName: 'Hawaiian Grilled Pineapple',
    name: 'Hawaiian Grilled Pineapple',
    img: pineapple2,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH, CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN, GENRES.HAWAIIAN],
    method: [METHODS.GRILL],
    type: [TYPES.FRUIT, TYPES.SIDE_DISH, TYPES.FINGER_FOOD, TYPES.DESSERT],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 6, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Grilled Pineapple', 
            link: 'https://foodfolksandfun.net/grilled-pineapple/',
            authors: ['Jillian Wade'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...PINEAPPLE, amount: 1, unit: '', additionalDetails: 'peeled and cut into 3/4 inch slices', section: PINEAPPLE_SECTION },

        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...HONEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'hot', section: SECTIONS.MARINADE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: '', section: GRILL_SECTION },
    ],
    appliances: [
        GRILL,
    ],
    supplies: [
        ZIPLOC_BAG,
    ],
    directions: [
        { step: `In a ziploc bag, combine the "${SECTIONS.MARINADE}" section ingredients.`, section: SECTIONS.PREP_MARINADE },
        { step: `Add pineapple slices. Seal and shake until pineapple is completely coated.`, section: SECTIONS.PREP_MARINADE },
        { step: `Let it marinate for 15 minutes at room temperature.`, section: SECTIONS.PREP_MARINADE, img: pineapple1 },
        { step: `Add a little oil.`, section: GRILL_PINEAPPLE },
        { step: `Grill slices until heated through (about 2 to 3 minutes).`, section: GRILL_PINEAPPLE },
        { step: `Flip and grill for 2 to 3 minutes.`, section: GRILL_PINEAPPLE },
        { step: `Enjoy these warm.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};