const bars1 = '../assets/Products/brickle-bars-1.jpeg';
const bars2 = '../assets/Products/brickle-bars-2.jpeg';
const bars3 = '../assets/Products/brickle-bars-3.jpeg';
const bars4 = '../assets/Products/brickle-bars-4.jpeg';
const bars5 = '../assets/Products/brickle-bars-5.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_PAN, BAKING_POWDER, BROWN_SUGAR, EGG, ENGLISH_TOFFEE_BITS, MEDIUM_BOWL, MIXING_BOWL, OVEN, SALT, SPATULA, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR } = require('./ingredients');

const PREPARATION = 'Preparation';
const DRY_INGREDIENTS = 'Dry Ingredients';
const WET_INGREDIENTS = 'Wet Ingredients';

module.exports = {
    cardName: 'Brickle Bar',
    name: 'Brickle Bar',
    img: bars5,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BAR],
    yields: { amount: 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Nick DiGiovanni'],
            finder: 'Justin Ung'
        }
    ],
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
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
        MEDIUM_BOWL,
        MIXING_BOWL,
        SPATULA,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Grease a baking pan with a butter.`, section: SECTIONS.PREP_PAN },

        { step: `In a medium bowl, combine together the dry ingredients.`, section: DRY_INGREDIENTS },
        { step: `In a separate mixing bowl, combine butter and the sugars.`, section: WET_INGREDIENTS },
        { step: `Add eggs and vanilla. Mix.`, section: WET_INGREDIENTS },
        { step: `Mix the dry and wet ingredients.`, section: SECTIONS.MAIN, img: bars1 },
        { step: `Add the toffee bits.`, section: SECTIONS.MAIN, img: bars2 },
        { step: `Scrape the batter into the baking pan.`, section: SECTIONS.MAIN, img: bars3 },
        { step: `Bake for 30 minutes.`, section: SECTIONS.MAIN },
        { step: `Let it cool for a few minutes.`, section: SECTIONS.MAIN, img: bars4 },
        { step: `Cut these into bars and enjoy!`, section: SECTIONS.SERVE },
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