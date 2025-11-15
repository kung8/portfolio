// Add image imports here if available

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, APPLE_PIE_SPICE, BAKING_PAN, BAKING_POWDER, BAKING_SODA, BASTING_BRUSH, BROWN_SUGAR, BUTTERMILK, CINNAMON, CORNSTARCH, GRANNY_SMITH_APPLE, GREEK_YOGURT, MAPLE_SYRUP, MEDIUM_BOWL, MEDIUM_SAUCEPAN, MIXING_BOWL, OVEN, SALT, SALTED_BUTTER, SMALL_BOWL, STOVE, VANILLA_EXTRACT, WATER, WHITE_SUGAR } = require('./ingredients');

const FIRST_FILLING = 'First Filling';
const CORNSTARCH_SLURRY = 'Cornstarch Slurry';
const SECOND_FILLING = 'Second Filling';
const BISCUITS_1 = 'Biscuits 1';
const BISCUITS_2 = 'Biscuits 2';
const BISCUITS_3 = 'Biscuits 3';
const CINNAMON_SUGAR = 'Cinnamon Sugar';

module.exports = {
    wip: true,
    cardName: 'Apple Pie Cathead Biscuits',
    name: 'Cinnamon Crunch Apple Pie Cathead Biscuits',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT],
    genre: [GENRES.SOUTHERN],
    method: [METHODS.BAKE],
    type: [TYPES.BISCUIT, TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 7, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Cinnamon Crunch Apple Pie Cathead Biscuits',
            link: 'https://www.wellmadebykiley.com/blog/cinnamon-crunch-apple-pie-cathead-biscuits',
            authors: ['Kiley Heard'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...SALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FIRST_FILLING },
        { ...GRANNY_SMITH_APPLE, amount: 2, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'peeled and diced', section: FIRST_FILLING },
        { ...BROWN_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FIRST_FILLING },
        { ...MAPLE_SYRUP, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FIRST_FILLING },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FIRST_FILLING },
        { ...APPLE_PIE_SPICE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FIRST_FILLING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: FIRST_FILLING },

        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CORNSTARCH_SLURRY },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CORNSTARCH_SLURRY },

        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECOND_FILLING },

        { ...BUTTERMILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BISCUITS_1 },
        { ...GREEK_YOGURT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BISCUITS_1 },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BISCUITS_1 },

        { ...CORNSTARCH, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BISCUITS_2 },
        { ...ALL_PURPOSE_FLOUR, amount: 11 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BISCUITS_2 },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BISCUITS_2 },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BISCUITS_2 },
        { ...BAKING_SODA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BISCUITS_2 },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BISCUITS_2 },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BISCUITS_2 },

        { ...SALTED_BUTTER, amount: 12, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'cold and cut into 1/2" slices', section: BISCUITS_3 },

        { ...BROWN_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CINNAMON_SUGAR },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CINNAMON_SUGAR },
        { ...BUTTERMILK, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.COATING },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        MEDIUM_SAUCEPAN,
        { ...SMALL_BOWL, amount: 2 },
        BAKING_PAN,
        MEDIUM_BOWL,
        MIXING_BOWL,
        BASTING_BRUSH,
    ],
    directions: [
        { step: `Over medium-high heat, add the "${FIRST_FILLING}" section ingredients to a medium saucepan.`, section: SECTIONS.PREP_FILLING },
        { step: `Cook and stir occasionally until the sugar melts and the apple starts to soften (about 10 minutes).`, section: SECTIONS.PREP_FILLING },
        { step: `In a small bowl, combine the "${CORNSTARCH_SLURRY}" section ingredients.`, section: SECTIONS.PREP_FILLING },
        { step: `Add cornstarch slurry to apple mixture. Stir and cook until thickens (about 1 to 2 minutes).`, section: SECTIONS.PREP_FILLING },
        { step: `Remove from heat. Stir in vanilla.`, section: SECTIONS.PREP_FILLING },
        { step: `Let it cool completely.`, section: SECTIONS.PREP_FILLING },

        { step: `Preheat the oven to 425ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Grease baking pan with butter.`, section: SECTIONS.PREP_PAN },

        { step: `In a medium bowl, combine the "${BISCUITS_1}" section ingredients. Set aside.`, section: SECTIONS.PREP_BATTER },
        { step: `In a mixing bowl, combine the "${BISCUITS_2}" section ingredients.`, section: SECTIONS.PREP_BATTER },
        { step: `Add the butter to the flour mixture. Coat butter until it is crumbly.`, section: SECTIONS.PREP_BATTER },
        { step: `Make a well in the center. Slowly pour in the buttermilk mixture.`, section: SECTIONS.PREP_BATTER },
        { step: `Mix until just combined. Avoid overmixing.`, section: SECTIONS.PREP_BATTER },
        { step: `Pour apple pie filling in center and gently fold a few times.`, section: SECTIONS.PREP_BATTER },

        { step: `Scoop about 1/2 cup of biscuit batter and place in the baking pan.`, section: SECTIONS.ASSEMBLE },
        { step: `In a small bowl, combine the "${CINNAMON_SUGAR}" section ingredients.`, section: SECTIONS.ASSEMBLE },
        { step: `Brush the biscuit with the buttermilk.`, section: SECTIONS.ASSEMBLE },
        { step: `Sprinkle the cinnamon sugar over top.`, section: SECTIONS.ASSEMBLE },
        { step: `Bake until fluffy and golden brown (about 20 to 25 minutes).`, section: SECTIONS.BAKE },

        { step: `Let biscuits rest for at least 5 to 10 minutes.`, section: SECTIONS.COOL },
        { step: `Enjoy this delicious breakfast!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until warmed through (about 5 to 10 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Wrap the biscuits in a damp paper towel and microwave until warmed through in 20 to 30 second bursts.',
        },
    ],
    mealPrep: true,
};