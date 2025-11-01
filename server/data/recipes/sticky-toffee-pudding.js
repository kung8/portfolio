const pudding1 = '../assets/Products/sticky-toffee-pudding-1.jpeg';
const pudding2 = '../assets/Products/sticky-toffee-pudding-2.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALLSPICE, ALL_PURPOSE_FLOUR, BAKING_PAN, BAKING_POWDER, BAKING_SODA, BROWN_SUGAR, CHOPSTICKS, DATE, EGG, HEAVY_CREAM, MIXING_BOWL, NUTMEG, OVEN, SALT, SAUCEPAN, STAND_MIXER, STOVE, UNSALTED_BUTTER, VANILLA_EXTRACT, WALNUTS, WATER, WHITE_SUGAR } = require('./ingredients');

const PUDDING = 'Pudding';
const MAKE_PUDDING = 'Make Pudding';

module.exports = {
    cardName: 'Sticky Toffee Pudding',
    name: 'Sticky Toffee Pudding',
    img: pudding2,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.BRITISH],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.CAKE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.TREE_NUT, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 15, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Sticky Toffee Pudding', 
            link: 'https://vanillaqueen.com/sticky-toffee-pudding/',
            authors: ['Patricia Rain'],
            finder: 'Steve Kenny', 
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 16, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HEAVY_CREAM, amount: 10 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...DATE, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PUDDING },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: PUDDING },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PUDDING },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...ALLSPICE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...NUTMEG, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: PUDDING },
        { ...WHITE_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PUDDING },
        { ...EGG, amount: 2, unit: '', additionalDetails: 'room temperature', section: PUDDING },
        { ...VANILLA_EXTRACT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...WALNUTS, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PUDDING },
    ],
    appliances: [
        STOVE,
        OVEN,
        STAND_MIXER,
    ],
    supplies: [
        BAKING_PAN,
        { ...SAUCEPAN, amount: 2, additionalDetails: 'medium' },
        MIXING_BOWL,
        CHOPSTICKS,
    ],
    directions: [
        { step: `Over medium-high heat, add butter and brown sugar in a medium saucepan.`, section: SECTIONS.COOK_SAUCE },
        { step: `Bring the butter mixture to a boil. Stirring often.`, section: SECTIONS.COOK_SAUCE },
        { step: `Cook until the sugar completely melts and gets darker.`, section: SECTIONS.COOK_SAUCE },
        { step: `Add cream. Mix.`, section: SECTIONS.COOK_SAUCE },
        { step: `Lower heat. Stir constantly and simmer until it becomes thick (about 5 minutes).`, section: SECTIONS.COOK_SAUCE },
        { step: `Add vanilla. Stir.`, section: SECTIONS.COOK_SAUCE },
        { step: `Set aside or transfer to a heat-resistant container for later.`, section: SECTIONS.COOK_SAUCE },

        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Butter a baking pan.`, section: MAKE_PUDDING },
        { step: `Over medium-high heat, add dates and water.`, section: MAKE_PUDDING },
        { step: `Bring water to a boil.`, section: MAKE_PUDDING },
        { step: `Remove from heat and add in baking soda. Set aside while keeping it warm.`, section: MAKE_PUDDING },
        { step: `In a mixing bowl, combine the flour, baking powder, salt, allspice and nutmeg.`, section: MAKE_PUDDING },
        { step: `In a stand mixer bowl, cream the butter and sugar.`, section: MAKE_PUDDING },
        { step: `Beat in one egg at a time.`, section: MAKE_PUDDING },
        { step: `Add the vanilla.`, section: MAKE_PUDDING },
        { step: `Add in half the flour mixture. Mix.`, section: MAKE_PUDDING },
        { step: `Add the date mixture. Mix.`, section: MAKE_PUDDING },
        { step: `Add the remaining flour mixture. Mix. Note: Do not over mix the batter.`, section: MAKE_PUDDING },
        { step: `Carefully pour the batter into the baking pan.`, section: MAKE_PUDDING },
        { step: `Bake for 15 minutes.`, section: MAKE_PUDDING },
        { step: `Take out the cake and poke holes on the top with a chopstick and pour 1/4 of the sauce. Let the sauce fill the holes to help the marbling.`, section: MAKE_PUDDING },
        { step: `Bake until a toothpick comes clean when inserted into the center of the cake (about 15 to 35 minutes).`, section: MAKE_PUDDING },
        { step: `Let the cake cool before serving.`, section: MAKE_PUDDING },

        { step: `Serve the cake with warmed up sauce.`, section: SECTIONS.SERVE, img: pudding1 },
    ],
    notes: [
        { note: 'You can make the cake ahead of time. Cover and reheat it when you are ready to serve by covering it with foil and then warming it for 15 minutes at 300ºF.', }
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave in 15-second intervals until warm.',
        },
    ],
    mealPrep: true,
};