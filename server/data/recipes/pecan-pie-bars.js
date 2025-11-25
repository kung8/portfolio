const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_PAN, BROWN_SUGAR, CORNSTARCH, EGG, MAPLE_SYRUP, OVEN, PECANS, SALT, SAUCEPAN, STOVE, UNSALTED_BUTTER, VANILLA_EXTRACT, WATER, WHIPPED_CREAM, WHISK } = require('./ingredients');
const { COOKING_SUPPLIES } = require('./ingredient-categories');

const CRUST_DRY_INGREDIENTS = 'Crust Dry Ingredients';
const SUGAR_MIXTURE = 'Sugar Mixture';

module.exports = {
    wip: true,
    cardName: 'Pecan Pie Bars',
    name: 'Pecan Pie Bars with Maple Syrup',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN, GENRES.SOUTHERN],
    method: [METHODS.BAKE],
    protein: [],
    type: [TYPES.BAR, TYPES.DESSERT],
    yields: { amount: 16, unit: YIELD_UNITS.BAR },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pecan Pie Bars', link: 'https://theviewfromgreatisland.com/pecan-pie-bars-with-an-easy-press-in-crust-and-no-corn-syrup/', authors: ['Sue Moran'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CRUST_DRY_INGREDIENTS },
        { ...BROWN_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CRUST_DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CRUST_DRY_INGREDIENTS },

        { ...UNSALTED_BUTTER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold, cut into 1 tablespoon', section: SECTIONS.CRUST },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold', section: SECTIONS.CRUST },

        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...MAPLE_SYRUP, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },

        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'packed', section: SUGAR_MIXTURE },
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: SUGAR_MIXTURE },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SUGAR_MIXTURE },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SUGAR_MIXTURE },
        // { , amount: '1', unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'optional', section: SUGAR_MIXTURE },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SUGAR_MIXTURE },

        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...PECANS, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'halved', section: SECTIONS.FILLING },
        { ...WHIPPED_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        OVEN,
        { name: 'Blender or Food Processor', category: COOKING_SUPPLIES },
        STOVE,
    ],
    supplies: [
        BAKING_PAN,
        SAUCEPAN,
        WHISK,
    ],
    directions: [
        { step: `Preheat oven to 350°F.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Grease a baking pan.`, section: SECTIONS.PREP_PAN },

        { step: `In a blender or food processor, combine "${CRUST_DRY_INGREDIENTS}" section ingredients. Pulse to combine.`, section: SECTIONS.PREP_CRUST },
        { step: `Add cold butter pieces. Pulse until there are no large butter chunks.`, section: SECTIONS.PREP_CRUST },
        { step: `Add cold water. Pulse until the dough comes together (will still be crumbly).`, section: SECTIONS.PREP_CRUST },
        { step: `Crumble dough evenly in the baking pan and press in, going up sides about 1 inch.`, section: SECTIONS.PREP_CRUST },
        { step: `Bake crust (about 25 to 30 minutes). Halfway through, gently press down center with spoon to prevent puffing.`, section: SECTIONS.PREP_CRUST },
        { step: `Let it cool.`, section: SECTIONS.PREP_CRUST },

        { step: `Over medium heat, brown butter.`, section: SECTIONS.PREP_FILLING },
        { step: `Remove from heat. Add syrup. Stir frequently.`, section: SECTIONS.PREP_FILLING },
        { step: `Re-add back to the stove. Let it bubble and thicken (about 2 to 3 minutes).`, section: SECTIONS.PREP_FILLING },
        { step: `Let cool (about 10 to 15 minutes).`, section: SECTIONS.PREP_FILLING },
        { step: `In a mixing bowl, combine the "${SUGAR_MIXTURE}" section ingredients.`, section: SECTIONS.PREP_FILLING },
        { step: `Slowly add warm syrup.`, section: SECTIONS.PREP_FILLING },
        { step: `Fold in the pecans.`, section: SECTIONS.PREP_FILLING },

        { step: `Pour filling into the crust into an even layer.`, section: SECTIONS.ASSEMBLE },

        { step: `Bake until the filling is set (about 35 to 40 minutes).`, section: SECTIONS.BAKE },

        { step: `Remove from oven. Let it cool in the pan before slicing.`, section: SECTIONS.CHILL },

        { step: `Serve with whipped cream.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.COVERED,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bring to room temperature before serving, or warm briefly in 300°F oven',
        },
    ],
    mealPrep: true,
};