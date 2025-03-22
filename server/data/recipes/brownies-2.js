// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { WHITE_SUGAR, ALL_PURPOSE_FLOUR, COCOA_POWDER, POWDERED_SUGAR, SEMI_SWEET_CHOCOLATE_CHIPS, SEA_SALT, EGGS, OLIVE_OIL, WARM_WATER, VANILLA_EXTRACT, CANOLA_OIL } = require('./ingredients');

const DRY_SECTION = 'Dry';
const WET_SECTION = 'Wet';

const PREP_BROWNIES = 'Prep Brownies';
const BAKE_BROWNIES = 'Bake Brownies';

module.exports = {
    wip: true,
    cardName: 'Brownies 2',
    name: 'Brownies 2',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BROWNIE],
    yields: '16 servings',
    prepTime: '5 m',
    cookTime: '45 m',
    websites: [
        { label: 'Brownies', link: 'https://www.loveandlemons.com/brownies-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...WHITE_SUGAR, amount: '1 c', unit: '', additionalDetails: '', section: DRY_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: '3/4 c', unit: '', additionalDetails: '', section: DRY_SECTION },
        { ...COCOA_POWDER, amount: '2/3 c', unit: '', additionalDetails: '', section: DRY_SECTION },
        { ...POWDERED_SUGAR, amount: '1/2 c', unit: '', additionalDetails: '', section: DRY_SECTION },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: '1/2 c', unit: '', additionalDetails: '', section: DRY_SECTION },
        { ...SEA_SALT, amount: '3/4 tsp', unit: '', additionalDetails: '', section: DRY_SECTION },

        { ...EGGS, amount: '2', unit: '', additionalDetails: '', section: WET_SECTION },
        { ...CANOLA_OIL, amount: '1/2 c', unit: '', additionalDetails: '', section: WET_SECTION },
        { ...WARM_WATER, amount: '2 Tbsp', unit: '', additionalDetails: '', section: WET_SECTION },
        { ...VANILLA_EXTRACT, amount: '1/2 tsp', unit: '', additionalDetails: '', section: WET_SECTION },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: '8 x 8 baking pan' },
        { name: 'cooking spray' },
        { name: 'parchment paper' },
    ],
    directions: [
        { step: 'Preheat the oven to 325ºF.', type: PREP_BROWNIES },
        { step: 'Spray an 8 x 8 baking pan with cooking spray and line with a parchment paper.', type: PREP_BROWNIES },
        { step: 'In a medium bowl, combine the "Dry" section ingredients.', type: PREP_BROWNIES },
        { step: 'In a mixing bowl, combine the "Wet" section ingredients.', type: PREP_BROWNIES },
        { step: 'Add the dry batter to the wet batter and stir until just combined. It will be thick.', type: PREP_BROWNIES },
        { step: 'Use a spatula to pour and smooth the batter into the pan.', type: PREP_BROWNIES },
        { step: 'Bake until an inserted toothpick comes out clean (about 40 to 48 minutes).', type: BAKE_BROWNIES },
        { step: 'Let it completely cool (about 2 hours). It will be gooey in the middle and will continue to set.', type: SECTIONS.SERVE },
        { step: 'Slice and enjoy!', type: SECTIONS.SERVE },
    ]
};