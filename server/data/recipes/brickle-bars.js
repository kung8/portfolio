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
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { UNSALTED_BUTTER, ALL_PURPOSE_FLOUR, BAKING_POWDER, SALT, WHITE_SUGAR, BROWN_SUGAR, EGG, VANILLA_EXTRACT, ENGLISH_TOFFEE_BITS } = require('./ingredients');

const PREPARATION = 'Preparation';
const DRY_INGREDIENTS = 'Dry Ingredients';
const WET_INGREDIENTS = 'Wet Ingredients';

module.exports = {
    cardName: 'Brickle Bar',
    name: 'Brickle Bar',
    img: plated4,
    recipeAuthor: '',
    recipeFinder: 'Justin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BAR],
    yields: { amount: 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'softened', section: PREPARATION },
        { ...ALL_PURPOSE_FLOUR, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: WET_INGREDIENTS },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_INGREDIENTS },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_INGREDIENTS },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WET_INGREDIENTS },
        { ...ENGLISH_TOFFEE_BITS, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Preheat the oven to 350ºF.', section: PREPARATION },
        { step: 'Grease a baking pan with a butter.', section: PREPARATION, img: butter2 },
        { step: 'In a medium bowl, combine together the dry ingredients.', section: DRY_INGREDIENTS, img: dry2 },
        { step: 'In a separate mixing bowl, combine together butter and the sugars.', section: WET_INGREDIENTS, img: [wet2, wet3] },
        { step: 'Add eggs and vanilla. Mix.', section: WET_INGREDIENTS, img: [wet4, wet7] },
        { step: 'Combine together the dry and wet ingredients.', section: SECTIONS.MAIN, img: [batter1, batter2] },
        { step: 'Add the toffee bits.', section: SECTIONS.MAIN, img: [batter3, batter6] },
        { step: 'Scrape the batter into the baking pan.', section: SECTIONS.MAIN, img: pan1 },
        { step: 'Bake for 30 minutes.', section: SECTIONS.MAIN },
        { step: 'Let it cool for a few minutes.', section: SECTIONS.MAIN, img: bar1 },
        { step: 'Cut these into bars and enjoy!', section: SECTIONS.SERVE, img: plated6 },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};