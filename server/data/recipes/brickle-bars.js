const bars1 = '../assets/Products/brickle-bars-1.jpeg';
const bars2 = '../assets/Products/brickle-bars-2.jpeg';
const bars3 = '../assets/Products/brickle-bars-3.jpeg';
const bars4 = '../assets/Products/brickle-bars-4.jpeg';
const bars5 = '../assets/Products/brickle-bars-5.jpeg';
const bars6 = '../assets/Products/brickle-bars-6.jpeg';
const bars7 = '../assets/Products/brickle-bars-7.jpeg';
const bars8 = '../assets/Products/brickle-bars-8.jpeg';
const bars9 = '../assets/Products/brickle-bars-9.jpeg';
const bars10 = '../assets/Products/brickle-bars-10.jpeg';
const bars11 = '../assets/Products/brickle-bars-11.jpeg';
const bars12 = '../assets/Products/brickle-bars-12.jpeg';
const bars13 = '../assets/Products/brickle-bars-13.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_PAN, BAKING_POWDER, BROWN_SUGAR, EGG, ENGLISH_TOFFEE_BITS, MEDIUM_BOWL, MIXING_BOWL, OVEN, SALT, SPATULA, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR } = require('./ingredients');

const PREPARATION = 'Preparation';
const DRY_INGREDIENTS = 'Dry Ingredients';
const WET_INGREDIENTS = 'Wet Ingredients';

module.exports = {
    cardName: 'Brickle Bar',
    name: 'Brickle Bar',
    img: bars13,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BAR],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
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
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
        MEDIUM_BOWL,
        MIXING_BOWL,
        SPATULA,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: PREPARATION },
        { step: 'Grease a baking pan with a butter.', section: PREPARATION, img: bars1 },
        { step: 'In a medium bowl, combine together the dry ingredients.', section: DRY_INGREDIENTS, img: bars2 },
        { step: 'In a separate mixing bowl, combine together butter and the sugars.', section: WET_INGREDIENTS, img: [bars3, bars4] },
        { step: 'Add eggs and vanilla. Mix.', section: WET_INGREDIENTS, img: [bars5, bars6] },
        { step: 'Combine together the dry and wet ingredients.', section: SECTIONS.MAIN, img: [bars7, bars8] },
        { step: 'Add the toffee bits.', section: SECTIONS.MAIN, img: [bars9, bars10] },
        { step: 'Scrape the batter into the baking pan.', section: SECTIONS.MAIN, img: bars11 },
        { step: 'Bake for 30 minutes.', section: SECTIONS.MAIN },
        { step: 'Let it cool for a few minutes.', section: SECTIONS.MAIN, img: bars12 },
        { step: 'Cut these into bars and enjoy!', section: SECTIONS.SERVE },
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