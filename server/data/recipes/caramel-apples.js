const apples1 = '../assets/Products/caramel-apples-1.jpeg';
const apples2 = '../assets/Products/caramel-apples-2.jpeg';
const apples3 = '../assets/Products/caramel-apples-3.jpeg';
const apples4 = '../assets/Products/caramel-apples-4.jpeg';
const apples5 = '../assets/Products/caramel-apples-5.jpeg';
const apples6 = '../assets/Products/caramel-apples-6.jpeg';
const apples7 = '../assets/Products/caramel-apples-7.jpeg';
const apples8 = '../assets/Products/caramel-apples-8.jpeg';
const apples9 = '../assets/Products/caramel-apples-9.jpeg';
const apples10 = '../assets/Products/caramel-apples-10.jpeg';
const apples11 = '../assets/Products/caramel-apples-11.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BAMBOO_SKEWERS, BROWN_SUGAR, COOKING_THERMOMETER, CORN_SYRUP, GRANNY_SMITH_APPLE, PARCHMENT_PAPER, SPIDER_STRAINER, STOVE, SWEETENED_CONDENSED_MILK, TALL_NARROW_POT, UNSALTED_BUTTER, VANILLA_EXTRACT } = require('./ingredients');

const APPLE = 'Apple';
const CARAMEL = 'Caramel';

module.exports = {
    cardName: 'Caramel Apples',
    name: 'Caramel Apples',
    img: apples11,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Caramel Apples', 
            link: 'https://www.allrecipes.com/recipe/228210/the-best-caramel-apples/',
            author: ['onlyxception'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...GRANNY_SMITH_APPLE, amount: 8, unit: '', additionalDetails: '', section: APPLE },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CARAMEL },
        { ...SWEETENED_CONDENSED_MILK, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: CARAMEL },
        { ...CORN_SYRUP, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CARAMEL },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CARAMEL },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CARAMEL },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        TALL_NARROW_POT,
        BAKING_SHEET,
        PARCHMENT_PAPER,
        BAMBOO_SKEWERS,
        COOKING_THERMOMETER,
        SPIDER_STRAINER,
    ],
    directions: [
        { step: 'Over medium-high heat, bring a saucepan of water to a boil.', section: APPLE, img: apples1 },
        { step: 'Dip the apples one at a time in the boiling water for a few seconds. I used a spider strainer.', section: APPLE, img: apples2 },
        { step: 'Dry with a paper towel to remove the wax from the peel.', section: APPLE },
        { step: 'Set aside and cool for 30 minutes.', section: APPLE, img: apples3 },
        { step: 'Insert skewers carefully through the apple from the bottom.', section: APPLE, img: apples4 },
        { step: 'Line baking sheet with parchment paper.', section: APPLE },
        { step: 'Clip the candy thermometer in the saucepan.', section: CARAMEL },
        { step: 'Over medium-high heat, combine the brown sugar, milk, syrup and butter in a saucepan.', section: CARAMEL, img: apples5 },
        { step: 'Bring to a boil, stirring constantly.', section: CARAMEL, img: [apples6, apples7] },
        { step: 'Reduce to medium heat.', section: CARAMEL },
        { step: 'Continue to stir the caramel and cook until caramel reaches 248ºF (about 25 to 30 minutes). The stirring helps prevent the sugars from burning and to help the water evaporate.', section: CARAMEL, img: [apples8, apples9] },
        { step: 'Remove from heat.', section: CARAMEL },
        { step: 'Add vanilla and mix.', section: CARAMEL },
        { step: 'Quickly dip apples in caramel and top each with your favorite toppings.', section: SECTIONS.MAIN },
        { step: 'Place each apple on the parchment paper and let them set for 1 hour.', section: SECTIONS.MAIN, img: apples10 },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};