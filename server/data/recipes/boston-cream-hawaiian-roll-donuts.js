const donut1 = '../assets/Products/boston-cream-hawaiian-rolls-donuts-1.jpeg';
const donut2 = '../assets/Products/boston-cream-hawaiian-rolls-donuts-2.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BASTING_BRUSH, HAWAIIAN_ROLLS, MEDIUM_BOWL, MICROWAVE, MILK, MIXING_BOWL, OVEN, PIPING_BAG, SALT, SEMI_SWEET_CHOCOLATE_CHIPS, SILICONE_BAKING_MAT, SPATULA, UNSALTED_BUTTER, VANILLA_EXTRACT, VANILLA_INSTANT_PUDDING_MIX, WHIPPED_TOPPING } = require('./ingredients');

const ROLLS_SECTION = 'Rolls';
const PUDDING_MIX_SECTION = 'Pudding Mix';
const WHIPPED_TOPPING_SECTION = 'Whipped Topping';
const GLAZE_SECTION = 'Glaze';

const PREP_ROLLS = 'Prep Rolls';
const FILL_ROLLS = 'Fill Rolls';
const PREP_GLAZE = 'Prep Glaze';
const GLAZE_ROLLS = 'Glaze Rolls';

module.exports = {
    cardName: 'Boston Cream Donuts',
    name: 'Boston Cream Hawaiian Rolls Donuts',
    img: donut2,
    available: true,
    recommended: true,
    createdAt: '2025-07-06 15:38:28',
    modifiedAt: '2026-05-31 18:16:10',
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 1, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: '"Boston Cream Hawaiian Rolls" Donuts', 
            link: 'https://www.allrecipes.com/boston-cream-hawaiian-roll-donuts-recipe-11761347',
            authors: ['Nicole McLaughlin'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...HAWAIIAN_ROLLS, amount: 12, unit: '', additionalDetails: '', section: ROLLS_SECTION },
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: ROLLS_SECTION },

        { ...VANILLA_INSTANT_PUDDING_MIX, amount: 3.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PUDDING_MIX_SECTION },
        { ...MILK, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PUDDING_MIX_SECTION },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PUDDING_MIX_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: PUDDING_MIX_SECTION },

        { ...WHIPPED_TOPPING, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WHIPPED_TOPPING_SECTION },

        { ...MILK, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GLAZE_SECTION },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: GLAZE_SECTION },
    ],
    appliances: [
        OVEN,
        MICROWAVE,
    ],
    supplies: [
        SILICONE_BAKING_MAT,
        BAKING_SHEET,
        BASTING_BRUSH,
        MIXING_BOWL,
        PIPING_BAG,
        MEDIUM_BOWL,
        SPATULA
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line a baking sheet with a silicon baking mat.`, section: PREP_ROLLS },
        { step: `Place rolls on a baking sheet.`, section: PREP_ROLLS },
        { step: `Brush rolls with melted butter on all sides.`, section: PREP_ROLLS },
        { step: `Bake until lightly brown and toasted (about 5 to 7 minutes).`, section: PREP_ROLLS },

        { step: `In a mixing bowl, combine the "${PUDDING_MIX_SECTION}" section ingredients until thickened.`, section: SECTIONS.PREP_FILLING },
        { step: `Fold in whipped topping.`, section: SECTIONS.PREP_FILLING },
        { step: `Chill until it sets (about 10 minutes).`, section: SECTIONS.PREP_FILLING },

        { step: `Make a small hole in each roll (do not go all the way through).`, section: FILL_ROLLS },
        { step: `Fill each hole with the filling (possibly with a piping bag or a funnel).`, section: FILL_ROLLS, img: donut1 },

        { step: `In a medium bowl, microwave milk until hot (about 30 to 40 seconds).`, section: PREP_GLAZE },
        { step: `Add chocolate chips to milk. Let it melt (about 10 seconds).`, section: PREP_GLAZE },
        { step: `Stir. If needed, microwave until it completely melts (about 15 seconds).`, section: PREP_GLAZE },

        { step: `Dip the tops in the chocolate.`, section: GLAZE_ROLLS },
        { step: `Let the chocolate harden slightly (about 20 minutes at room temperature or 5 to 10 minutes in the fridge).`, section: GLAZE_ROLLS },

        { step: `Enjoy these simplified donuts without having to fry anything.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};