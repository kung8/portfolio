// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { WHITE_SUGAR, ALL_PURPOSE_FLOUR, COCOA_POWDER, POWDERED_SUGAR, SEMI_SWEET_CHOCOLATE_CHIPS, SEA_SALT, EGG, VANILLA_EXTRACT, CANOLA_OIL, WATER } = require('./ingredients');

const DRY_SECTION = 'Dry';
const WET_SECTION = 'Wet';

module.exports = {
    wip: true,
    cardName: 'Brownies 2',
    name: 'Brownies 2',
    img: '',
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BROWNIE],
    yields: { amount: 16, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Brownies', link: 'https://www.loveandlemons.com/brownies-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_SECTION },
        { ...COCOA_POWDER, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_SECTION },
        { ...POWDERED_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_SECTION },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_SECTION },
        { ...SEA_SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_SECTION },

        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: WET_SECTION },
        { ...CANOLA_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: WET_SECTION },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WET_SECTION },
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
        { step: 'Preheat the oven to 325ºF.', section: SECTIONS.PREP_BATTER },
        { step: 'Spray an 8 x 8 baking pan with cooking spray and line with a parchment paper.', section: SECTIONS.PREP_BATTER },
        { step: `In a medium bowl, combine the "${DRY_SECTION}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: `In a mixing bowl, combine the "${WET_SECTION}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: 'Add the dry batter to the wet batter and stir until just combined. It will be thick.', section: SECTIONS.PREP_BATTER },
        { step: 'Use a spatula to pour and smooth the batter into the pan.', section: SECTIONS.PREP_BATTER },
        { step: 'Bake until an inserted toothpick comes out clean (about 40 to 48 minutes).', section: SECTIONS.BAKE },
        { step: 'Let it completely cool (about 2 hours). It will be gooey in the middle and will continue to set.', section: SECTIONS.SERVE },
        { step: 'Slice and enjoy!', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};