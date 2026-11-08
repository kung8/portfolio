// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_POWDER, BAKING_SHEET, BOX_GRATER, BROWN_SUGAR, CARROT, COOLING_RACK, CREAM_CHEESE, CRYSTAL_SUGAR, EGG, FRYING_PAN, HEAVY_CREAM, MEDIUM_BOWL, MIXING_BOWL, OVEN, PARCHMENT_PAPER, PECANS, POWDERED_SUGAR, PUMPKIN_PIE_SPICE, SALT, STAND_MIXER, STOVE, UNSALTED_BUTTER, VANILLA_EXTRACT, WHISK, WHITE_SUGAR } = require('./ingredients');

const PECAN_SECTION = 'Pecan';
const CARROT_SECTION = 'Carrot';
const SCONE_DOUGH_FLOUR_MIXTURE = 'Scone Dough Flour Mixture';
const SCONE_DOUGH_WET_MIXTURE = 'Scone Dough Wet Mixture';
const CRYSTAL_SUGAR_SECTION = 'Crystal Sugar';
const CREAM_CHEESE_GLAZE_FIRST_PART = 'Cream Cheese Glaze First Part';
const CREAM_CHEESE_GLAZE_SECOND_PART = 'Cream Cheese Glaze Second Part';

const PREP_CARROTS = 'Prep Carrots';
const PREP_PECANS = 'Prep Pecans';
const PREP_SCONES = 'Prep Scones';
const COOK_SCONES = 'Cook Scones';
const DRIZZLE_GLAZE = 'Drizzle Glaze';

module.exports = {
    wip: true,
    cardName: 'Carrot Cake Scones',
    name: 'Carrot Cake Scones',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-11-08 00:57:28',
    modifiedAt: '2026-11-08 00:57:28',
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD, TYPES.DESSERT],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Carrot Cake Scones',
            link: 'https://homeiswheretheboatis.net/2025/03/18/everybunnys-favorite-carrot-cake-scones-with-cream-cheese-glaze/',
            authors: ['Pam and Nancy'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...PECANS, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'toasted and cooled', section: PECAN_SECTION },

        { ...CARROT, amount: 2, unit: '', additionalDetails: 'peeled and grated', section: CARROT_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 7 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SCONE_DOUGH_FLOUR_MIXTURE },
        { ...BAKING_POWDER, amount: 9 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SCONE_DOUGH_FLOUR_MIXTURE },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SCONE_DOUGH_FLOUR_MIXTURE },
        { ...PUMPKIN_PIE_SPICE, amount: 5 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SCONE_DOUGH_FLOUR_MIXTURE },

        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold and cubed', section: SECTIONS.BUTTER },

        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SCONE_DOUGH_WET_MIXTURE },
        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold, plus more for brushing', section: SCONE_DOUGH_WET_MIXTURE },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SCONE_DOUGH_WET_MIXTURE },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SCONE_DOUGH_WET_MIXTURE },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.SPRINKLE, additionalDetails: '', section: SCONE_DOUGH_WET_MIXTURE },

        { ...CRYSTAL_SUGAR, amount: '', unit: '', additionalDetails: '', section: CRYSTAL_SUGAR_SECTION },

        { ...CREAM_CHEESE, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: CREAM_CHEESE_GLAZE_FIRST_PART },
        { ...POWDERED_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'sifted', section: CREAM_CHEESE_GLAZE_FIRST_PART },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CREAM_CHEESE_GLAZE_FIRST_PART },

        { ...HEAVY_CREAM, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CREAM_CHEESE_GLAZE_SECOND_PART },

    ],
    appliances: [
        STOVE,
        STAND_MIXER,
        OVEN,
    ],
    supplies: [
        BOX_GRATER,
        FRYING_PAN,
        COOLING_RACK,
        MEDIUM_BOWL,
        { ...MIXING_BOWL, amount: 2 },
        BAKING_SHEET,
        PARCHMENT_PAPER,
        WHISK,
    ],
    directions: [
        { step: `Peel and grate the carrots. Set aside.`, section: PREP_CARROTS },

        { step: `Over medium heat, toast the pecans in a dry skillet. Heat until fragrant (about 5 minutes). Cool before chopping.`, section: PREP_PECANS },

        { step: `In a stand mixer bowl, combine the "${SCONE_DOUGH_FLOUR_MIXTURE}" section ingredients.`, section: PREP_SCONES },
        { step: `Add cold butter until the mixture resembles coarse crumbs.`, section: PREP_SCONES },
        { step: `Transfer the mixture to a mixing bowl.`, section: PREP_SCONES },
        { step: `Add carrots and pecans. Stir together.`, section: PREP_SCONES },
        { step: `In another mixing bowl, combine the "${SCONE_DOUGH_WET_MIXTURE}" section ingredients.`, section: PREP_SCONES },
        { step: `Make a well in the center of the dry mixture. Slowly pour in the wet mixture.`, section: PREP_SCONES },
        { step: `Gently fold dough until just combined. Avoid overmixing.`, section: PREP_SCONES },
        { step: `Line a baking sheet with parchment paper.`, section: PREP_SCONES },
        { step: `Transfer the dough to the baking sheet.`, section: PREP_SCONES },
        { step: `With floured hands, pat the dough into an 9-inch round about 1 inch thick.`, section: PREP_SCONES },
        { step: `Place the dough in the freezer for 30 minutes.`, section: PREP_SCONES },
        { step: `Slice the dough into 8 wedges.`, section: PREP_SCONES },
        { step: `Separate the wedges about 1 inch apart.`, section: PREP_SCONES },
        { step: `Brush the tops of the scones with cream and sprinkle with crystal sugar.`, section: PREP_SCONES },

        { step: `Heat the oven to 375°F.`, section: COOK_SCONES },
        { step: `Bake until golden brown (about 25 to 30 minutes). Rotating the pan halfway through baking.`, section: COOK_SCONES },
        { step: `Remove scones from the oven.`, section: COOK_SCONES },
        { step: `Transfer the scones to a cooling rack.`, section: COOK_SCONES },

        { step: `In a bowl, combine the "${CREAM_CHEESE_GLAZE_FIRST_PART}" section ingredients.`, section: SECTIONS.MAKE_GLAZE },
        { step: `Add the "${CREAM_CHEESE_GLAZE_SECOND_PART}" section ingredients one tablespoon at a time.`, section: SECTIONS.MAKE_GLAZE },

        { step: `Drizzle over scones.`, section: DRIZZLE_GLAZE },

        { step: `Enjoy these carrot cake scones!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Refrigerate glazed scones.',
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store unglazed scones at room temperature.',
        },
    ],
    mealPrep: true,
};