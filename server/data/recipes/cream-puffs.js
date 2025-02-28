const baked7 = '../assets/Products/cream-puffs-baked-7.jpeg';
const butter = '../assets/Products/cream-puffs-butter.jpeg';
const doled2 = '../assets/Products/cream-puffs-doled-2.jpeg';
const filled = '../assets/Products/cream-puffs-filled.jpeg';
const filling3 = '../assets/Products/cream-puffs-filling-3.jpeg';
const ball = '../assets/Products/cream-puffs-flour-ball.jpeg';
const flour = '../assets/Products/cream-puffs-flour.jpeg';
const batter = '../assets/Products/cream-puffs-pastry-batter.jpeg';
const plated2 = '../assets/Products/cream-puffs-plated-2.jpeg';
const plated11 = '../assets/Products/cream-puffs-plated-11.jpeg';
const sliced2 = '../assets/Products/cream-puffs-sliced-2.jpeg';
const vanilla = '../assets/Products/cream-puffs-vanilla-pudding-mix.jpeg';

const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { VANILLA_INSTANT_PUDDING_MIX, HEAVY_CREAM, MILK, UNSALTED_BUTTER, COLD_WATER, SALT, ALL_PURPOSE_FLOUR, EGGS, PORK_PATE } = require('./ingredients');

const PUFF = 'Puff';

module.exports = {
    cardName: 'Cream Puffs',
    name: 'Cream Puffs',
    img: plated11,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH, GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT, TYPES.PASTRY],
    yields: '8 puffs',
    prepTime: '30 m',
    cookTime: '30 m',
    websites: [
        { label: 'Cream Puffs', link: 'https://www.allrecipes.com/recipe/15869/cream-puffs/' }
    ],
    separated: true,
    ingredients: [
        { ...VANILLA_INSTANT_PUDDING_MIX, amount: '2 - 3.5 oz', additionalDetails: '', section: SECTIONS.FILLING },
        { ...HEAVY_CREAM, amount: '2 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...MILK, amount: '1 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...UNSALTED_BUTTER, amount: '1/2 c', additionalDetails: '', section: PUFF },
        { ...COLD_WATER, amount: '1 c', additionalDetails: '', section: PUFF },
        { ...SALT, amount: '1/4 tsp', additionalDetails: '', section: PUFF },
        { ...ALL_PURPOSE_FLOUR, amount: '1 c', additionalDetails: '', section: PUFF },
        { ...EGGS, amount: '4', additionalDetails: '', section: PUFF },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: '2 mixing bowls' },
        { name: 'large pot' },
        { name: 'baking sheet' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine together the filling ingredients.', type: SECTIONS.FILLING, img: [vanilla, filling3] },
        { step: 'Cover and chill until it sets.', type: SECTIONS.FILLING },
        { step: 'Preheat the over to 425ºF.', type: PUFF },
        { step: 'Over medium-high heat, bring a large pot of water and butter to a boil.', type: PUFF, img: butter },
        { step: 'Add in flour and salt. Mix until it becomes a ball.', type: PUFF, img: [flour, ball] },
        { step: 'Transfer to a mixing bowl.', type: PUFF },
        { step: 'Beat eggs in one at a time.', type: PUFF, img: batter },
        { step: 'Place spoonful of batter on a baking sheet, a few inches apart.', type: PUFF, img: doled2 },
        { step: 'Bake until golden brown (about 20 to 25 minutes). Centers will be dry.', type: PUFF },
        { step: 'Let cool.', type: PUFF, img: baked7 },
        { step: 'Either carefully split the puffs and fill with the cream filling or pipe into the shell.', type: SECTIONS.ASSEMBLY, img: [sliced2, filled] },
        { step: 'Enjoy these delicious desserts.', type: SECTIONS.SERVE, img: plated2 },
    ]
};