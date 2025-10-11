const degree = '../assets/Products/caramel-apples-248.jpeg';
const boiling = '../assets/Products/caramel-apples-boiling-water.jpeg';
const dipped = '../assets/Products/caramel-apples-dipped-apple.jpeg';
const oreo1 = '../assets/Products/caramel-apples-oreo-topped-1.jpeg';
const oreo2 = '../assets/Products/caramel-apples-oreo-topped-2.jpeg';
const peanut1 = '../assets/Products/caramel-apples-peanut-topped-1.jpeg';
const peanut2 = '../assets/Products/caramel-apples-peanut-topped-2.jpeg';
const peanut3 = '../assets/Products/caramel-apples-peanut-topped-3.jpeg';
const melting = '../assets/Products/caramel-apples-sauce-melting.jpeg';
const mixed = '../assets/Products/caramel-apples-sauce-mixed.jpeg';
const unmixed = '../assets/Products/caramel-apples-sauce-unmixed.jpeg';
const skewered = '../assets/Products/caramel-apples-skewered.jpeg';
const thickened = '../assets/Products/caramel-apples-thickened-sauce.jpeg';
const wax = '../assets/Products/caramel-apples-wax-free-apples.jpeg';
const { GENRES, METHODS, TYPES, CATEGORIES, SECTIONS , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { BAKING_SHEET, GRANNY_SMITH_APPLE, BROWN_SUGAR, SWEETENED_CONDENSED_MILK, CORN_SYRUP, UNSALTED_BUTTER, VANILLA_EXTRACT, STOVE, PARCHMENT_PAPER, BAMBOO_SKEWERS, COOKING_THERMOMETER, SPIDER_STRAINER, TALL_NARROW_POT } = require('./ingredients');

const APPLE = 'Apple';
const CARAMEL = 'Caramel';

module.exports = {
    cardName: 'Caramel Apples',
    name: 'Caramel Apples',
    img: oreo1,
    recipeAuthors: ['onlyxception'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.DESSERT],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Caramel Apples', link: 'https://www.allrecipes.com/recipe/228210/the-best-caramel-apples/' }
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
        { step: 'Over medium-high heat, bring a saucepan of water to a boil.', section: APPLE, img: boiling },
        { step: 'Dip the apples one at a time in the boiling water for a few seconds. I used a spider strainer.', section: APPLE, img: dipped },
        { step: 'Dry with a paper towel to remove the wax from the peel.', section: APPLE },
        { step: 'Set aside and cool for 30 minutes.', section: APPLE, img: wax },
        { step: 'Insert skewers carefully through the apple from the bottom.', section: APPLE, img: skewered },
        { step: 'Line baking sheet with parchment paper.', section: APPLE },
        { step: 'Clip the candy thermometer in the saucepan.', section: CARAMEL },
        { step: 'Over medium-high heat, combine the brown sugar, milk, syrup and butter in a saucepan.', section: CARAMEL, img: unmixed },
        { step: 'Bring to a boil, stirring constantly.', section: CARAMEL, img: [melting, mixed] },
        { step: 'Reduce to medium heat.', section: CARAMEL },
        { step: 'Continue to stir the caramel and cook until caramel reaches 248ºF (about 25 to 30 minutes). The stirring helps prevent the sugars from burning and to help the water evaporate.', section: CARAMEL, img: [degree, thickened] },
        { step: 'Remove from heat.', section: CARAMEL },
        { step: 'Add vanilla and mix.', section: CARAMEL },
        { step: 'Quickly dip apples in caramel and top each with your favorite toppings.', section: SECTIONS.MAIN },
        { step: 'Place each apple on the parchment paper and let them set for 1 hour.', section: SECTIONS.MAIN, img: [oreo2, peanut1, peanut2, peanut3] },
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