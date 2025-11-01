const pie1 = '../assets/Products/no-bake-pumpkin-pie-1.jpeg';
const pie2 = '../assets/Products/no-bake-pumpkin-pie-2.jpeg';
const pie3 = '../assets/Products/no-bake-pumpkin-pie-3.jpeg';
const pie4 = '../assets/Products/no-bake-pumpkin-pie-4.jpeg';
const pie5 = '../assets/Products/no-bake-pumpkin-pie-5.jpeg';
const pie6 = '../assets/Products/no-bake-pumpkin-pie-6.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CREAM_CHEESE, GRAHAM_CRACKER_PIE_CRUST, MILK, PUMPKIN_PIE_SPICE, PUMPKIN_PUREE, SEMI_SWEET_CHOCOLATE_BAR, VANILLA_EXTRACT, VANILLA_INSTANT_PUDDING_MIX, WHIPPED_TOPPING, WHITE_SUGAR } = require('./ingredients');

const PUMPKIN_PUREE_FILLING_SECTION = 'Pumpkin Puree Filling';
const CREAM_CHEESE_LAYER_SECTION = 'Cream Cheese Layer';

const CREATE_PUMPKIN_PUREE_LAYER = 'Create Pumpkin Puree Layer';
const CREATE_CREAM_CHEESE_LAYER = 'Create Cream Cheese Layer';

module.exports = {
    cardName: 'No Bake Pumpkin Pie',
    name: 'No Bake Pumpkin Pie',
    img: pie6,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.CHILLED],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'No Bake Pumpkin Dessert', 
            link: 'https://www.crazyforcrust.com/bake-pumpkin-dessert/',
            authors: ['Dorothy Kern'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...GRAHAM_CRACKER_PIE_CRUST, amount: 1, unit: '', additionalDetails: '10 inch', section: '' },

        { ...VANILLA_INSTANT_PUDDING_MIX, amount: 3.4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PUMPKIN_PUREE_FILLING_SECTION },
        { ...MILK, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PUMPKIN_PUREE_FILLING_SECTION },
        { ...PUMPKIN_PUREE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PUMPKIN_PUREE_FILLING_SECTION },
        { ...PUMPKIN_PIE_SPICE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PUMPKIN_PUREE_FILLING_SECTION },

        { ...CREAM_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: CREAM_CHEESE_LAYER_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAM_CHEESE_LAYER_SECTION },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CREAM_CHEESE_LAYER_SECTION },
        { ...WHIPPED_TOPPING, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CREAM_CHEESE_LAYER_SECTION },

        { ...SEMI_SWEET_CHOCOLATE_BAR, amount: '', unit: '', additionalDetails: 'grated', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stand or hand mixer' },
    ],
    supplies: [
        { name: 'pie pan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'In a mixing bowl or stand mixer, combine the pudding mix and milk. Mix.', section: CREATE_PUMPKIN_PUREE_LAYER },
        { step: `Add the rest of the "${PUMPKIN_PUREE_FILLING_SECTION}" section ingredients. Mix until smooth.`, section: CREATE_PUMPKIN_PUREE_LAYER, img: pie1 },
        { step: 'Pour into the pie crust.', section: CREATE_PUMPKIN_PUREE_LAYER, img: pie2 },

        { step: 'In the mixing bowl, beat the cream cheese.', section: CREATE_CREAM_CHEESE_LAYER, img: pie3 },
        { step: `Add the rest of the "${CREAM_CHEESE_LAYER_SECTION}" section ingredients.`, section: CREATE_CREAM_CHEESE_LAYER, img: pie4 },
        { step: 'Spread over the pumpkin layer.', section: CREATE_CREAM_CHEESE_LAYER, img: pie5 },

        { step: 'Top with chocolate shavings.', section: SECTIONS.TOPPINGS },
        { step: 'Chill the pie until ready to serve.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Chill the chocolate bar beforehand to make it easier to grate.' },
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