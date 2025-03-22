const bar1 = '../assets/Products/brickle-bars-1.jpeg';
const batter1 = '../assets/Products/brickle-bars-batter-1.jpeg';
const batter2 = '../assets/Products/brickle-bars-batter-2.jpeg';
const batter3 = '../assets/Products/brickle-bars-batter-3.jpeg';
const batter6 = '../assets/Products/brickle-bars-batter-6.jpeg';
const butter2 = '../assets/Products/brickle-bars-butter-2.jpeg';
const dry2 = '../assets/Products/brickle-bars-dry-2.jpeg';
const pan1 = '../assets/Products/brickle-bars-pan-1.jpeg';
const wet2 = '../assets/Products/brickle-bars-wet-2.jpeg';
const wet3 = '../assets/Products/brickle-bars-wet-3.jpeg';
const wet4 = '../assets/Products/brickle-bars-wet-4.jpeg';
const wet7 = '../assets/Products/brickle-bars-wet-7.jpeg';
const plated4 = '../assets/Products/brickle-bars-plated-4.jpeg';
const plated6 = '../assets/Products/brickle-bars-plated-6.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { UNSALTED_BUTTER, ALL_PURPOSE_FLOUR, BAKING_POWDER, SALT, WHITE_SUGAR, BROWN_SUGAR, EGGS, VANILLA_EXTRACT, ENGLISH_TOFFEE_BITS } = require('./ingredients');

const PREPARATION = 'Preparation';
const DRY_INGREDIENTS = 'Dry Ingredients';
const WET_INGREDIENTS = 'Wet Ingredients';

module.exports = {
    cardName: 'Brickle Bar',
    name: 'Brickle Bar',
    img: plated4,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BAR],
    yields: '24 bars',
    prepTime: '10 m',
    cookTime: '30 m',
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', unit: '', additionalDetails: 'softened', section: PREPARATION },
        { ...ALL_PURPOSE_FLOUR, amount: '1 1/2 c', unit: '', additionalDetails: '', section: DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: '2 tsp', unit: '', additionalDetails: '', section: DRY_INGREDIENTS },
        { ...SALT, amount: '1/2 tsp', unit: '', additionalDetails: '', section: DRY_INGREDIENTS },
        { ...UNSALTED_BUTTER, amount: '1/2 c', unit: '', additionalDetails: 'softened', section: WET_INGREDIENTS },
        { ...WHITE_SUGAR, amount: '1 c', unit: '', additionalDetails: '', section: WET_INGREDIENTS },
        { ...BROWN_SUGAR, amount: '1/2 c', unit: '', additionalDetails: '', section: WET_INGREDIENTS },
        { ...EGGS, amount: '2', unit: '', additionalDetails: '', section: WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: '1 tsp', unit: '', additionalDetails: '', section: WET_INGREDIENTS },
        { ...ENGLISH_TOFFEE_BITS, amount: '8 oz', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'medium bowl' },
        { name: 'mixing bowl' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: PREPARATION },
        { step: 'Grease a baking pan with a butter.', type: PREPARATION, img: butter2 },
        { step: 'In a medium bowl, combine together the dry ingredients.', type: DRY_INGREDIENTS, img: dry2 },
        { step: 'In a separate mixing bowl, combine together butter and the sugars.', type: WET_INGREDIENTS, img: [wet2, wet3] },
        { step: 'Add eggs and vanilla. Mix.', type: WET_INGREDIENTS, img: [wet4, wet7] },
        { step: 'Combine together the dry and wet ingredients.', type: SECTIONS.MAIN, img: [batter1, batter2] },
        { step: 'Add the toffee bits.', type: SECTIONS.MAIN, img: [batter3, batter6] },
        { step: 'Scrape the batter into the baking pan.', type: SECTIONS.MAIN, img: pan1 },
        { step: 'Bake for 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Let it cool for a few minutes.', type: SECTIONS.MAIN, img: bar1 },
        { step: 'Cut these into bars and enjoy!', type: SECTIONS.SERVE, img: plated6 },
    ]
};