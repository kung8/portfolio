const brulee1 = '../assets/Products/creme-brulee-1.jpeg';
const brulee2 = '../assets/Products/creme-brulee-2.jpeg';
const brulee3 = '../assets/Products/creme-brulee-3.jpeg';
const brulee4 = '../assets/Products/creme-brulee-4.jpeg';
const brulee5 = '../assets/Products/creme-brulee-5.jpeg';
const brulee6 = '../assets/Products/creme-brulee-6.jpeg';
const brulee7 = '../assets/Products/creme-brulee-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, EGG_YOLK, HEAVY_CREAM, HOT_WATER, MEDIUM_BOWL, OVEN, RAMEKIN, SAUCEPAN, STOVE, VANILLA_BEAN, WHITE_SUGAR } = require('./ingredients');

const CREAM = 'Cream';
const VANILLA_SUGAR = 'Vanilla Sugar';
const BURNING_SUGAR = 'Burning Sugar';

module.exports = {
    cardName: 'Crème Brûlée',
    name: 'Crème Brûlée',
    img: brulee7,
    recipeAuthors: ['Alton Brown', 'Sally McKenney'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.BOIL, METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    waitTime: { amount: 2, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Crème Brûlée', link: 'https://www.foodnetwork.com/recipes/alton-brown/creme-brulee-recipe-1916827' },
        { label: 'Vanilla Sugar', link: 'https://sallysbakingaddiction.com/homemade-vanilla-sugar/' }
    ],
    separated: true,
    ingredients: [
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: VANILLA_SUGAR },
        { ...VANILLA_BEAN, amount: 1, unit: '', additionalDetails: 'split and scraped', section: VANILLA_SUGAR },

        { ...HEAVY_CREAM, amount: 1, unit: INGREDIENT_UNITS.QUART, additionalDetails: '', section: CREAM },
        { ...VANILLA_BEAN, amount: 1, unit: '', additionalDetails: 'split and scraped', section: CREAM },
        { ...EGG_YOLK, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...HOT_WATER, amount: 2, unit: INGREDIENT_UNITS.QUART, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        { ...MEDIUM_BOWL, amount: 2 },
        SAUCEPAN,
        { ...RAMEKIN, amount: 6 },
        BAKING_PAN,
    ],
    directions: [
        { step: 'Place sugar in a medium bowl.', section: VANILLA_SUGAR },
        { step: 'Carefully slice the vanilla bean in half lengthwise.', section: VANILLA_SUGAR },
        { step: 'Scrape the seeds with a knife and place on top of the sugar.', section: VANILLA_SUGAR },
        { step: 'Use another spoon or knife to scrape off the residual seeds from the knife. Repeat as needed.', section: VANILLA_SUGAR },
        { step: 'Mix and submerge the empty pods in the sugar.', section: VANILLA_SUGAR, img: brulee1 },

        { step: 'Preheat the oven to 325ºF.', section: SECTIONS.MAIN },
        { step: 'Over medium-high heat, add heavy cream and scraped vanilla beans to a saucepan.', section: SECTIONS.MAIN, img: [brulee2, brulee3] },
        { step: 'Bring to a boil.', section: SECTIONS.MAIN },
        { step: 'Remove from heat.', section: SECTIONS.MAIN },
        { step: 'Cover and let it set for 15 minutes.', section: SECTIONS.MAIN },
        { step: 'Remove the vanilla bean and save to use later.', section: SECTIONS.MAIN },
        { step: 'In a medium bowl, combine the 1/2 cup vanilla sugar and egg yolks. It should be a lighter color.', section: SECTIONS.MAIN, img: brulee4 },
        { step: 'Slowly add in the cream while stirring.', section: SECTIONS.MAIN },
        { step: 'Pour the batter into the ramekins.', section: SECTIONS.MAIN, img: brulee5 },
        { step: 'Place the ramekins inside a tall enough baking pan (or a roasting pan).', section: SECTIONS.MAIN },
        { step: 'Fill the pan with hot water until the water comes to halfway up the sides of the ramekins.', section: SECTIONS.MAIN },
        { step: 'Bake until the crème brûlée are set--center will be jiggly (about 60 minutes). I added an additional 15 to 30 minutes on 300ºF.', section: SECTIONS.MAIN, img: brulee6 },
        { step: 'Remove the ramekins from the pan and chill for at least 2 hours (and up to 3 days).', section: SECTIONS.MAIN },

        { step: 'Let the crème brûlée sit outside of the fridge for at least 30 minutes prior to browning the sugar on top.', section: BURNING_SUGAR },
        { step: 'Evenly spread 1/2 cup of the vanilla sugar between the ramekins.', section: BURNING_SUGAR },
        { step: 'Set the oven rack as close to the top of the oven and turn on the broiler (or around 500ºF).', section: BURNING_SUGAR },
        { step: 'Place the ramekins in the oven once it reaches the temperature.', section: BURNING_SUGAR },
        { step: 'Broil until the sugar is light gold (about 3 to 5 minutes).', section: BURNING_SUGAR },

        { step: 'Let the crème brûlée cool for at least 5 minutes before serving.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the sugar topping separately from the crème brûlée. The sugar topping can be stored in an airtight container at room temperature for up to 2 weeks.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BROIL,
            instruction: 'Broil for 3 to 5 minutes until the sugar is light gold.',
        },
    ],
    mealPrep: true,
};
