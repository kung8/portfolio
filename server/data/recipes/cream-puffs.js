// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { VANILLA_INSTANT_PUDDING_MIX, HEAVY_CREAM, MILK, UNSALTED_BUTTER, COLD_WATER, SALT, ALL_PURPOSE_FLOUR, EGGS } = require('./ingredients');

const PUFF = 'Puff';

module.exports = {
    cardName: 'Cream Puffs',
    name: 'Cream Puffs',
    img: '',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH, GENRES.ITALIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT, TYPES.PASTRY],
    yields: '20 servings',
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
        { step: 'In a mixing bowl, combine together the filling ingredients.', type: SECTIONS.FILLING },
        { step: 'Cover and chill until it sets.', type: SECTIONS.FILLING },
        { step: 'Preheat the over to 425ºF.', type: PUFF },
        { step: 'Over medium-high heat, bring a large pot of water and butter to a boil.', type: PUFF },
        { step: 'Add in flour and salt. Mix until it becomes a ball.', type: PUFF },
        { step: 'Transfer to a mixing bowl.', type: PUFF },
        { step: 'Beat eggs in one at a time.', type: PUFF },
        { step: 'Place spoonful of batter on a baking sheet, a few inches apart.', type: PUFF },
        { step: 'Bake until golden brown (about 20 to 25 minutes). Centers will be dry.', type: PUFF },
        { step: 'Let cool.', type: PUFF },
        { step: 'Either carefully split the puffs and fill with the cream filling or pipe into the shell.', type: SECTIONS.ASSEMBLY },
        { step: 'Enjoy these delicious desserts.', type: SECTIONS.SERVE },
    ]
};