// const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, UNITS, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, COLD_WATER, SALT, YEAST } = require('./ingredients');

const BAGUETTES = 'Baguettes';

module.exports = {
    wip: true,
    cardName: 'French Baguettes',
    name: 'French Baguettes',
    img: '',
    recipeCredit: 'Sam Giraud-Carrier',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: { amount: 4, unit: YIELD_UNITS.LOAF },
    prepTime: '45 m',
    cookTime: '19 m',
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 6, unit: UNITS.CUP, additionalDetails: '', section: BAGUETTES },
        { ...COLD_WATER, amount: 9 / 4, unit: UNITS.CUP, additionalDetails: '', section: BAGUETTES },
        { ...SALT, amount: 5 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: BAGUETTES },
        { ...YEAST, amount: 9 / 8, unit: UNITS.TEASPOON, additionalDetails: '', section: BAGUETTES },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'baguette pan' },
    ],
    directions: [
        { step: 'In a stand mixer, combine flour and water.', type: SECTIONS.DOUGH },
        { step: 'Let it rest for 10 minutes.', type: SECTIONS.DOUGH },
        { step: 'Mix in salt and yeast.', type: SECTIONS.DOUGH },
        { step: 'Knead until the dough is nice, smooth and elastic (about 10 minutes on low speed).', type: SECTIONS.DOUGH },
        { step: 'Cover and let it raise for 20 minutes.', type: SECTIONS.DOUGH },
        { step: 'Lightly stretch one side of the dough and fold it on itself.', type: SECTIONS.DOUGH },
        { step: 'Repeat the fold two more times every 20 minutes.', type: SECTIONS.DOUGH },
        { step: 'Cover and let the dough double or triple in size.', type: SECTIONS.DOUGH },
        { step: 'Cut the dough into four parts while trying to not lose too much air.', type: SECTIONS.DOUGH },
        { step: 'Lightly stretch them lengthwise and roll to become baguette shape.', type: SECTIONS.DOUGH },
        { step: 'Cover and let the dough rise for at least 45 minutes.', type: SECTIONS.DOUGH },
        { step: 'Place a pan of water on one of the lower oven racks.', type: SECTIONS.BAKE },
        { step: 'Preheat the oven to as hot as your oven can get.', type: SECTIONS.BAKE },
        { step: 'Place the dough on a baguette pan.', type: SECTIONS.BAKE },
        { step: 'Add 1 more cup of water to the baking pan.', type: SECTIONS.BAKE },
        { step: 'Immediately add the baguette pan in the oven.', type: SECTIONS.BAKE },
        { step: 'Lower the temperature to 475ºF and bake until browned (about 19 minutes).', type: SECTIONS.BAKE },
        { step: 'Let it cool.', type: SECTIONS.BAKE },
        { step: 'Enjoy these authentic French baguette with your favorite toppings or by itself.', type: SECTIONS.SERVE },
    ]
};