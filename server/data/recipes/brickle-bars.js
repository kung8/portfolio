const plated1 = '../assets/Products/brickle-bars-plated-1.jpeg';
const plated2 = '../assets/Products/brickle-bars-plated-2.jpeg';
const plated3 = '../assets/Products/brickle-bars-plated-3.jpeg';
const plated4 = '../assets/Products/brickle-bars-plated-4.jpeg';
const plated5 = '../assets/Products/brickle-bars-plated-5.jpeg';
const plated6 = '../assets/Products/brickle-bars-plated-6.jpeg';
const plated7 = '../assets/Products/brickle-bars-plated-7.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
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
        { step: 'Grease a baking pan with a butter.', type: PREPARATION },
        { step: 'In a medium bowl, combine together the dry ingredients.', type: DRY_INGREDIENTS },
        { step: 'In a separate mixing bowl, combine together butter and the sugars.', type: WET_INGREDIENTS },
        { step: 'Add eggs and vanilla. Mix.', type: WET_INGREDIENTS },
        { step: 'Combine together the dry and wet ingredients.', type: SECTIONS.MAIN },
        { step: 'Add the toffee bits.', type: SECTIONS.MAIN },
        { step: 'Scrape the batter into the baking pan.', type: SECTIONS.MAIN },
        { step: 'Bake for 30 minutes.', type: SECTIONS.MAIN },
        { step: 'Let it cool for a few minutes.', type: SECTIONS.MAIN },
        { step: 'Cut these into bars and enjoy!', type: SECTIONS.SERVE, img: [plated1, plated2, plated3, plated4, plated5, plated6, plated7] },
    ]
};