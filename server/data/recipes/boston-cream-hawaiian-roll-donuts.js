// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { HAWAIIAN_ROLLS, UNSALTED_BUTTER, VANILLA_INSTANT_PUDDING_MIX, MILK, VANILLA_EXTRACT, SALT, SEMI_SWEET_CHOCOLATE_CHIPS, WHIPPED_TOPPING } = require('./ingredients');

const ROLLS_SECTION = 'Rolls';
const PUDDING_MIX_SECTION = 'Pudding Mix';
const WHIPPED_TOPPING_SECTION = 'Whipped Topping';
const GLAZE_SECTION = 'Glaze';

const PREP_ROLLS = 'Prep Rolls';
const FILL_ROLLS = 'Fill Rolls';
const PREP_GLAZE = 'Prep Glaze';
const GLAZE_ROLLS = 'Glaze Rolls';

module.exports = {
    wip: true,
    cardName: 'Boston Cream Donuts',
    name: 'Boston Cream Donuts',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 1, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: '"Boston Cream Hawaiian Rolls" Donuts', link: 'https://www.allrecipes.com/boston-cream-hawaiian-roll-donuts-recipe-11761347' }
    ],
    separated: true,
    ingredients: [
        { ...HAWAIIAN_ROLLS, amount: 12, unit: INGREDIENT_UNITS.EACH, additionalDetails: '', section: ROLLS_SECTION },
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
        { name: 'oven' },
        { name: 'microwave' },
    ],
    supplies: [
        { name: 'silicon baking mat' },
        { name: 'baking sheet' },
        { name: 'basting brush' },
        { name: 'mixing bowl' },
        { name: 'piping bag' },
        { name: 'medium bowl' },
        { name: 'spatula' },
        { name: '' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: PREP_ROLLS },
        { step: 'Line a baking sheet with a silicon baking mat.', section: PREP_ROLLS },
        { step: 'Place rolls on a baking sheet.', section: PREP_ROLLS },
        { step: 'Brush rolls with melted butter on all sides.', section: PREP_ROLLS },
        { step: 'Bake until lightly brown and toasted (about 5 to 7 minutes).', section: PREP_ROLLS },

        { step: `In a mixing bowl, combine the "${PUDDING_MIX_SECTION}" section ingredients until thickened.`, section: SECTIONS.PREP_FILLING },
        { step: 'Fold in whipped topping.', section: SECTIONS.PREP_FILLING },
        { step: 'Chill until it sets (about 10 minutes).', section: SECTIONS.PREP_FILLING },

        { step: 'Make a small hole in each roll (do not go all the way through).', section: FILL_ROLLS },
        { step: 'Fill each hole with the filling (possibly with a piping bag).', section: FILL_ROLLS },

        { step: 'In a medium bowl, microwave milk until hot (about 30 to 40 seconds).', section: PREP_GLAZE },
        { step: 'Add chocolate chips to milk. Let it melt (about 10 seconds).', section: PREP_GLAZE },
        { step: 'Stir. If needed, microwave until it completely melts (about 15 seconds).', section: PREP_GLAZE },

        { step: 'Dip the tops in the chocolate.', section: GLAZE_ROLLS },
        { step: 'Let the chocolate harden slightly (about 20 minutes at room temperature or 5 to 10 minutes in the fridge).', section: GLAZE_ROLLS },

        { step: 'Enjoy these simplified donuts without having to fry anything.', section: SECTIONS.SERVE },
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