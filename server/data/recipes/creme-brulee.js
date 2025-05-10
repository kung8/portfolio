const boiling = '../assets/Products/creme-brulee-boiling-cream.jpeg';
const broiled = '../assets/Products/creme-brulee-broiled.jpeg';
const covered = '../assets/Products/creme-brulee-covered.jpeg';
const cream = '../assets/Products/creme-brulee-cream.jpeg';
const yolksMixed = '../assets/Products/creme-brulee-egg-yolks-mixed.jpeg';
const yolksUnmixed = '../assets/Products/creme-brulee-egg-yolks-unmixed.jpeg';
const inRamekins = '../assets/Products/creme-brulee-in-ramekins.jpeg';
const ramekins = '../assets/Products/creme-brulee-ramekins.jpeg';
const setZoomed = '../assets/Products/creme-brulee-set-zoomed.jpeg';
const set = '../assets/Products/creme-brulee-set.jpeg';
const sugar = '../assets/Products/creme-brulee-sugar.jpeg';
const beanSaucepan = '../assets/Products/creme-brulee-vanilla-bean-in-saucepan.jpeg';
const bean = '../assets/Products/creme-brulee-vanilla-bean.jpeg';
const vanillaMixed = '../assets/Products/creme-brulee-vanilla-sugar-mixed.jpeg';
const vanillaUnmixed = '../assets/Products/creme-brulee-vanilla-sugar-unmixed.jpeg';
const sugarYolksMixed = '../assets/Products/creme-brulee-vanilla-sugar-with-yolks-mixed.jpeg';
const sugarYolksUnmixed = '../assets/Products/creme-brulee-vanilla-sugar-with-yolks-unmixed.jpeg';
const { waitTime } = require('./cheesecake-factory-cheesecake');
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { HEAVY_CREAM, VANILLA_BEAN, EGG_YOLK, HOT_WATER, WHITE_SUGAR } = require('./ingredients');

const CREAM = 'Cream';
const VANILLA_SUGAR = 'Vanilla Sugar';
const BURNING_SUGAR = 'Burning Sugar';

module.exports = {
    cardName: 'Crème Brûlée',
    name: 'Crème Brûlée',
    img: broiled,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.BOIL, METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.DESSERT],
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
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: '2 medium bowls' },
        { name: 'saucepan' },
        { name: '6 ramekins' },
        { name: 'baking pan' },
    ],
    directions: [
        { step: 'Place sugar in a medium bowl.', section: VANILLA_SUGAR, img: sugar },
        { step: 'Carefully slice the vanilla bean in half lengthwise.', section: VANILLA_SUGAR, img: bean },
        { step: 'Scrape the seeds with a knife and place on top of the sugar.', section: VANILLA_SUGAR, img: vanillaUnmixed },
        { step: 'Use another spoon or knife to scrape off the residual seeds from the knife. Repeat as needed.', section: VANILLA_SUGAR },
        { step: 'Mix and submerge the empty pods in the sugar.', section: VANILLA_SUGAR, img: vanillaMixed },
        { step: 'Keep this at room temperature for up to 2 weeks (for best flavor).', section: VANILLA_SUGAR },

        { step: 'Preheat the oven to 325ºF.', section: SECTIONS.MAIN },
        { step: 'Over medium-high heat, add heavy cream and scraped vanilla beans to a saucepan.', section: SECTIONS.MAIN, img: [beanSaucepan, cream] },
        { step: 'Bring to a boil.', section: SECTIONS.MAIN, img: boiling },
        { step: 'Remove from heat.', section: SECTIONS.MAIN },
        { step: 'Cover and let it set for 15 minutes.', section: SECTIONS.MAIN, img: covered },
        { step: 'Remove the vanilla bean and save to use later.', section: SECTIONS.MAIN },
        { step: 'In a medium bowl, combine the 1/2 cup vanilla sugar and egg yolks. It should be a lighter color.', section: SECTIONS.MAIN, img: [yolksUnmixed, yolksMixed, sugarYolksUnmixed, sugarYolksMixed] },
        { step: 'Slowly add in the cream while stirring.', section: SECTIONS.MAIN },
        { step: 'Pour the batter into the ramekins.', section: SECTIONS.MAIN, img: [ramekins, inRamekins] },
        { step: 'Place the ramekins inside a tall enough baking pan (or a roasting pan).', section: SECTIONS.MAIN },
        { step: 'Fill the pan with hot water until the water comes to halfway up the sides of the ramekins.', section: SECTIONS.MAIN },
        { step: 'Bake until the crème brûlée are set--center will be jiggly (about 60 minutes). I added an additional 15 to 30 minutes on 300ºF.', section: SECTIONS.MAIN, img: [set, setZoomed] },
        { step: 'Remove the ramekins from the pan and chill for at least 2 hours (and up to 3 days).', section: SECTIONS.MAIN },

        { step: 'Let the crème brûlée sit outside of the fridge for at least 30 minutes prior to browning the sugar on top.', section: BURNING_SUGAR },
        { step: 'Evenly spread 1/2 cup of the vanilla sugar between the ramekins.', section: BURNING_SUGAR },
        { step: 'Set the oven rack as close to the top of the oven and turn on the broiler (or around 500ºF).', section: BURNING_SUGAR },
        { step: 'Place the ramekins in the oven once it reaches the temperature.', section: BURNING_SUGAR },
        { step: 'Broil until the sugar is light gold (about 3 to 5 minutes).', section: BURNING_SUGAR },

        { step: 'Let the crème brûlée cool for at least 5 minutes before serving.', section: SECTIONS.SERVE },
    ]
};
