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
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES , UNITS } = require('./constants');
const { HEAVY_CREAM, VANILLA_BEAN, EGG_YOLKS, HOT_WATER, WHITE_SUGAR } = require('./ingredients');

const CREAM = 'Cream';
const VANILLA_SUGAR = 'Vanilla Sugar';
const BURNING_SUGAR = 'Burning Sugar';

module.exports = {
    cardName: 'Crème Brûlée',
    name: 'Crème Brûlée',
    img: broiled,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.BOIL, METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.DESSERT],
    yields: '6 servings',
    prepTime: '25 m',
    cookTime: '1 h',
    websites: [
        { label: 'Crème Brûlée', link: 'https://www.foodnetwork.com/recipes/alton-brown/creme-brulee-recipe-1916827' },
        { label: 'Vanilla Sugar', link: 'https://sallysbakingaddiction.com/homemade-vanilla-sugar/' }
    ],
    separated: true,
    ingredients: [
        { ...WHITE_SUGAR, amount: 2, unit: UNITS.CUP, additionalDetails: '', section: VANILLA_SUGAR },
        { ...VANILLA_BEAN, amount: 1, unit: '', additionalDetails: 'split and scraped', section: VANILLA_SUGAR },

        { ...HEAVY_CREAM, amount: 1, unit: UNITS.QUART, additionalDetails: '', section: CREAM },
        { ...VANILLA_BEAN, amount: 1, unit: '', additionalDetails: 'split and scraped', section: CREAM },
        { ...EGG_YOLKS, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...HOT_WATER, amount: 2, unit: UNITS.QUART, additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Place sugar in a medium bowl.', type: VANILLA_SUGAR, img: sugar },
        { step: 'Carefully slice the vanilla bean in half lengthwise.', type: VANILLA_SUGAR, img: bean },
        { step: 'Scrape the seeds with a knife and place on top of the sugar.', type: VANILLA_SUGAR, img: vanillaUnmixed },
        { step: 'Use another spoon or knife to scrape off the residual seeds from the knife. Repeat as needed.', type: VANILLA_SUGAR },
        { step: 'Mix and submerge the empty pods in the sugar.', type: VANILLA_SUGAR, img: vanillaMixed },
        { step: 'Keep this at room temperature for up to 2 weeks (for best flavor).', type: VANILLA_SUGAR },

        { step: 'Preheat the oven to 325ºF.', type: SECTIONS.MAIN },
        { step: 'Over medium-high heat, add heavy cream and scraped vanilla beans to a saucepan.', type: SECTIONS.MAIN, img: [beanSaucepan, cream] },
        { step: 'Bring to a boil.', type: SECTIONS.MAIN, img: boiling },
        { step: 'Remove from heat.', type: SECTIONS.MAIN },
        { step: 'Cover and let it set for 15 minutes.', type: SECTIONS.MAIN, img: covered },
        { step: 'Remove the vanilla bean and save to use later.', type: SECTIONS.MAIN },
        { step: 'In a medium bowl, combine the 1/2 cup vanilla sugar and egg yolks. It should be a lighter color.', type: SECTIONS.MAIN, img: [yolksUnmixed, yolksMixed, sugarYolksUnmixed, sugarYolksMixed] },
        { step: 'Slowly add in the cream while stirring.', type: SECTIONS.MAIN },
        { step: 'Pour the batter into the ramekins.', type: SECTIONS.MAIN, img: [ramekins, inRamekins] },
        { step: 'Place the ramekins inside a tall enough baking pan (or a roasting pan).', type: SECTIONS.MAIN },
        { step: 'Fill the pan with hot water until the water comes to halfway up the sides of the ramekins.', type: SECTIONS.MAIN },
        { step: 'Bake until the crème brûlée are set--center will be jiggly (about 60 minutes). I added an additional 15 to 30 minutes on 300ºF.', type: SECTIONS.MAIN, img: [set, setZoomed] },
        { step: 'Remove the ramekins from the pan and chill for at least 2 hours (and up to 3 days).', type: SECTIONS.MAIN },

        { step: 'Let the crème brûlée sit outside of the fridge for at least 30 minutes prior to browning the sugar on top.', type: BURNING_SUGAR },
        { step: 'Evenly spread 1/2 cup of the vanilla sugar between the ramekins.', type: BURNING_SUGAR },
        { step: 'Set the oven rack as close to the top of the oven and turn on the broiler (or around 500ºF).', type: BURNING_SUGAR },
        { step: 'Place the ramekins in the oven once it reaches the temperature.', type: BURNING_SUGAR },
        { step: 'Broil until the sugar is light gold (about 3 to 5 minutes).', type: BURNING_SUGAR },

        { step: 'Let the crème brûlée cool for at least 5 minutes before serving.', type: SECTIONS.SERVE },
    ]
};
