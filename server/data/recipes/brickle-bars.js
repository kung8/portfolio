const bar1 = '../assets/Products/brickle-bars-1.jpeg';
const bar2 = '../assets/Products/brickle-bars-2.jpeg';
const bar3 = '../assets/Products/brickle-bars-3.jpeg';
const batter1 = '../assets/Products/brickle-bars-batter-1.jpeg';
const batter2 = '../assets/Products/brickle-bars-batter-2.jpeg';
const batter3 = '../assets/Products/brickle-bars-batter-3.jpeg';
const batter4 = '../assets/Products/brickle-bars-batter-4.jpeg';
const batter5 = '../assets/Products/brickle-bars-batter-5.jpeg';
const batter6 = '../assets/Products/brickle-bars-batter-6.jpeg';
const butter1 = '../assets/Products/brickle-bars-butter-1.jpeg';
const butter2 = '../assets/Products/brickle-bars-butter-2.jpeg';
const dry1 = '../assets/Products/brickle-bars-dry-1.jpeg';
const dry2 = '../assets/Products/brickle-bars-dry-2.jpeg';
const pan1 = '../assets/Products/brickle-bars-pan-1.jpeg';
const pan2 = '../assets/Products/brickle-bars-pan-2.jpeg';
const pan3 = '../assets/Products/brickle-bars-pan-3.jpeg';
const pan4 = '../assets/Products/brickle-bars-pan-4.jpeg';
const wet1 = '../assets/Products/brickle-bars-wet-1.jpeg';
const wet2 = '../assets/Products/brickle-bars-wet-2.jpeg';
const wet3 = '../assets/Products/brickle-bars-wet-3.jpeg';
const wet4 = '../assets/Products/brickle-bars-wet-4.jpeg';
const wet5 = '../assets/Products/brickle-bars-wet-5.jpeg';
const wet6 = '../assets/Products/brickle-bars-wet-6.jpeg';
const wet7 = '../assets/Products/brickle-bars-wet-7.jpeg';
const plated1 = '../assets/Products/brickle-bars-plated-1.jpeg';
const plated2 = '../assets/Products/brickle-bars-plated-2.jpeg';
const plated3 = '../assets/Products/brickle-bars-plated-3.jpeg';
const plated4 = '../assets/Products/brickle-bars-plated-4.jpeg';
const plated5 = '../assets/Products/brickle-bars-plated-5.jpeg';
const plated6 = '../assets/Products/brickle-bars-plated-6.jpeg';
const plated7 = '../assets/Products/brickle-bars-plated-7.jpeg';
const plated8 = '../assets/Products/brickle-bars-plated-8.jpeg';
const plated9 = '../assets/Products/brickle-bars-plated-9.jpeg';
const plated10 = '../assets/Products/brickle-bars-plated-10.jpeg';
const plated11 = '../assets/Products/brickle-bars-plated-11.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { UNSALTED_BUTTER, ALL_PURPOSE_FLOUR, BAKING_POWDER, SALT, WHITE_SUGAR, BROWN_SUGAR, EGGS, VANILLA_EXTRACT, ENGLISH_TOFFEE_BITS } = require('./ingredients');

const PREPARATION = 'Preparation';
const DRY_INGREDIENTS = 'Dry Ingredients';
const WET_INGREDIENTS = 'Wet Ingredients';

module.exports = {
    cardName: 'Brickle Bar',
    name: 'Brickle Bar',
    img: plated11,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BAR],
    yields: '24 bars',
    prepTime: '10 m',
    cookTime: '30 m',
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1 Tbsp', additionalDetails: 'softened', section: PREPARATION },
        { ...ALL_PURPOSE_FLOUR, amount: '1 1/2 c', additionalDetails: '', section: DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: '2 tsp', additionalDetails: '', section: DRY_INGREDIENTS },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: DRY_INGREDIENTS },
        { ...UNSALTED_BUTTER, amount: '1/2 c', additionalDetails: 'softened', section: WET_INGREDIENTS },
        { ...WHITE_SUGAR, amount: '1 c', additionalDetails: '', section: WET_INGREDIENTS },
        { ...BROWN_SUGAR, amount: '1/2 c', additionalDetails: '', section: WET_INGREDIENTS },
        { ...EGGS, amount: '2', additionalDetails: '', section: WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', section: WET_INGREDIENTS },
        { ...ENGLISH_TOFFEE_BITS, amount: '8 oz', additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Grease a baking pan with a butter.', type: PREPARATION, img: [butter1, butter2] },
        { step: 'In a medium bowl, combine together the dry ingredients.', type: DRY_INGREDIENTS, img: [dry1, dry2] },
        { step: 'In a separate mixing bowl, combine together butter and the sugars.', type: WET_INGREDIENTS, img: [wet1, wet2, wet3] },
        { step: 'Add eggs and vanilla. Mix.', type: WET_INGREDIENTS, img: [wet4, wet5, wet6, wet7] },
        { step: 'Combine together the dry and wet ingredients.', type: SECTIONS.MAIN, img: [batter1, batter2] },
        { step: 'Add the toffee bits.', type: SECTIONS.MAIN, img: [batter3, batter4, batter5, batter6] },
        { step: 'Scrape the batter into the baking pan.', type: SECTIONS.MAIN, img: [pan1, pan2, pan3, pan4] },
        { step: 'Bake for 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Let it cool for a few minutes.', type: SECTIONS.MAIN, img: [bar1, bar2, bar3] },
        { step: 'Cut these into bars and enjoy!', type: SECTIONS.SERVE, img: [plated1, plated2, plated3, plated4, plated5, plated6, plated7, plated8, plated9, plated10] },
    ]
};