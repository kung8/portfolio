const plated1 = '../assets/Products/sticky-toffee-pudding-plated-1.jpeg';
const plated2 = '../assets/Products/sticky-toffee-pudding-plated-2.jpeg';
const plated3 = '../assets/Products/sticky-toffee-pudding-plated-3.jpeg';
const plated4 = '../assets/Products/sticky-toffee-pudding-plated-4.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, UNITS, YIELD_UNITS } = require('./constants');
const { HEAVY_CREAM, UNSALTED_BUTTER, BROWN_SUGAR, VANILLA_EXTRACT, DATES, COLD_WATER, BAKING_SODA, ALL_PURPOSE_FLOUR, BAKING_POWDER, SALT, ALLSPICE, NUTMEG, WHITE_SUGAR, EGG, WALNUTS } = require('./ingredients');

const TOFFEE_SAUCE = 'Toffee Sauce';
const PUDDING = 'Pudding';

module.exports = {
    cardName: 'Sticky Toffee Pudding',
    name: 'Sticky Toffee Pudding',
    img: plated4,
    recipeCredit: 'Steve Kenny',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.BRITISH],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.CAKE],
    yields: { amount: 15, unit: YIELD_UNITS.SERVING },
    prepTime: '10 m',
    cookTime: '1 h',
    websites: [
        { label: 'Sticky Toffee Pudding', link: 'https://vanillaqueen.com/sticky-toffee-pudding/' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 16, unit: UNITS.TABLESPOON, additionalDetails: '', section: TOFFEE_SAUCE },
        { ...BROWN_SUGAR, amount: 2, unit: UNITS.CUP, additionalDetails: '', section: TOFFEE_SAUCE },
        { ...HEAVY_CREAM, amount: 10 / 3, unit: UNITS.CUP, additionalDetails: '', section: TOFFEE_SAUCE },
        { ...VANILLA_EXTRACT, amount: 2, unit: UNITS.TEASPOON, additionalDetails: '', section: TOFFEE_SAUCE },

        { ...DATES, amount: 6, unit: UNITS.OUNCE, additionalDetails: '', section: PUDDING },
        { ...COLD_WATER, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: PUDDING },
        { ...BAKING_SODA, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 4, unit: UNITS.CUP, additionalDetails: '', section: PUDDING },
        { ...BAKING_POWDER, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...SALT, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...ALLSPICE, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...NUTMEG, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...UNSALTED_BUTTER, amount: 4, unit: UNITS.TABLESPOON, additionalDetails: '', section: PUDDING },
        { ...WHITE_SUGAR, amount: 3 / 4, unit: UNITS.CUP, additionalDetails: '', section: PUDDING },
        { ...EGG, amount: 2, unit: '', additionalDetails: 'room temperature', section: PUDDING },
        { ...VANILLA_EXTRACT, amount: 3 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: PUDDING },
        { ...WALNUTS, amount: 3 / 4, unit: UNITS.CUP, additionalDetails: '', section: PUDDING },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: '2 medium saucepan' },
        { name: 'mixing bowl' },
        { name: 'chopstick' },
    ],
    directions: [
        { step: 'Over medium-high heat, add butter and brown sugar in a medium saucepan.', type: TOFFEE_SAUCE },
        { step: 'Bring the butter mixture to a boil. Stirring often.', type: TOFFEE_SAUCE },
        { step: 'Cook until the sugar completely melts and gets darker.', type: TOFFEE_SAUCE },
        { step: 'Add cream. Mix.', type: TOFFEE_SAUCE },
        { step: 'Lower heat. Stir constantly and simmer until it becomes thick (about 5 minutes).', type: TOFFEE_SAUCE },
        { step: 'Add vanilla. Stir.', type: TOFFEE_SAUCE },
        { step: 'Set aside or transfer to a heat-resistant container for later.', type: TOFFEE_SAUCE },

        { step: 'Preheat the oven to 350ºF.', type: PUDDING },
        { step: 'Butter a baking pan.', type: PUDDING },
        { step: 'Over medium-high heat, add dates and water.', type: PUDDING },
        { step: 'Bring water to a boil.', type: PUDDING },
        { step: 'Remove from heat and add in baking soda. Set aside while keeping it warm.', type: PUDDING },
        { step: 'In a mixing bowl, combine the flour, baking powder, salt, allspice and nutmeg.', type: PUDDING },
        { step: 'In a stand mixer bowl, cream the butter and sugar.', type: PUDDING },
        { step: 'Beat in one egg at a time.', type: PUDDING },
        { step: 'Add the vanilla.', type: PUDDING },
        { step: 'Add in half the flour mixture. Mix.', type: PUDDING },
        { step: 'Add the date mixture. Mix.', type: PUDDING },
        { step: 'Add the remaining flour mixture. Mix. Note: Do not over mix the batter.', type: PUDDING },
        { step: 'Carefully pour the batter into the baking pan.', type: PUDDING },
        { step: 'Bake for 15 minutes.', type: PUDDING },
        { step: 'Take out the cake and poke holes on the top with a chopstick and pour 1/4 of the sauce. Let the sauce fill the holes to help the marbling.', type: PUDDING },
        { step: 'Bake until a toothpick comes clean when inserted into the center of the cake (about 15 to 35 minutes).', type: PUDDING },
        { step: 'Let the cake cool before serving.', type: PUDDING },
        { step: 'Serve the cake with warmed up sauce.', type: SECTIONS.SERVE, img: [plated1, plated2, plated3] },
    ],
    notes: [
        { note: 'You can make the cake ahead of time. Cover and reheat it when you are ready to serve by covering it with foil and then warming it for 15 minutes at 300ºF.', }
    ],
};