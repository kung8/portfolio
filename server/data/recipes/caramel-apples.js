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
const { GENRES, METHODS, TYPES, CATEGORIES, SECTIONS } = require('./constants');
const { GRANNY_SMITH_APPLES, BROWN_SUGAR, SWEETENED_CONDENSED_MILK, CORN_SYRUP, UNSALTED_BUTTER, VANILLA_EXTRACT } = require('./ingredients');

const APPLE = 'Apple';
const CARAMEL = 'Caramel';

module.exports = {
    cardName: 'Caramel Apples',
    name: 'Caramel Apples',
    img: oreo1,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.DESSERT],
    yields: '8 servings',
    prepTime: '15 m',
    cookTime: '30 m',
    websites: [
        { label: 'Caramel Apples', link: 'https://www.allrecipes.com/recipe/228210/the-best-caramel-apples/' }
    ],
    separated: true,
    ingredients: [
        { ...GRANNY_SMITH_APPLES, amount: '8', additionalDetails: '', section: APPLE },
        { ...BROWN_SUGAR, amount: '2 c', additionalDetails: '', section: CARAMEL },
        { ...SWEETENED_CONDENSED_MILK, amount: '14 oz', additionalDetails: '', section: CARAMEL },
        { ...CORN_SYRUP, amount: '1 c', additionalDetails: '', section: CARAMEL },
        { ...UNSALTED_BUTTER, amount: '1 c', additionalDetails: '', section: CARAMEL },
        { ...VANILLA_EXTRACT, amount: '2 tsp', additionalDetails: '', section: CARAMEL },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'tall, narrow saucepan' },
        { name: 'baking sheet' },
        { name: 'parchment paper' },
        { name: 'bamboo skewers' },
        { name: 'candy thermometer' },
        { name: 'spider strainer' },
    ],
    directions: [
        { step: 'Over medium-high heat, bring a saucepan of water to a boil.', type: APPLE, img: boiling },
        { step: 'Dip the apples one at a time in the boiling water for a few seconds. I used a spider strainer.', type: APPLE, img: dipped },
        { step: 'Dry with a paper towel to remove the wax from the peel.', type: APPLE },
        { step: 'Set aside and cool for 30 minutes.', type: APPLE, img: wax },
        { step: 'Insert skewers carefully through the apple from the bottom.', type: APPLE, img: skewered },
        { step: 'Line baking sheet with parchment paper.', type: APPLE },
        { step: 'Clip the candy thermometer in the saucepan.', type: CARAMEL },
        { step: 'Over medium-high heat, combine the brown sugar, milk, syrup and butter in a saucepan.', type: CARAMEL, img: unmixed },
        { step: 'Bring to a boil, stirring constantly.', type: CARAMEL, img: [melting, mixed] },
        { step: 'Reduce to medium heat.', type: CARAMEL },
        { step: 'Continue to stir the caramel and cook until caramel reaches 248ºF (about 25 to 30 minutes). The stirring helps prevent the sugars from burning and to help the water evaporate.', type: CARAMEL, img: [degree, thickened] },
        { step: 'Remove from heat.', type: CARAMEL },
        { step: 'Add vanilla and mix.', type: CARAMEL },
        { step: 'Quickly dip apples in caramel and top each with your favorite toppings.', type: SECTIONS.MAIN },
        { step: 'Place each apple on the parchment paper and let them set for 1 hour.', type: SECTIONS.MAIN, img: [oreo2, peanut1, peanut2, peanut3] },
    ]
};