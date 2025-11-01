const cake1 = '../assets/Products/german-chocolate-cake-1.jpeg';
const cake2 = '../assets/Products/german-chocolate-cake-2.jpeg';
const cake3 = '../assets/Products/german-chocolate-cake-3.jpeg';
const cake4 = '../assets/Products/german-chocolate-cake-4.jpeg';
const cake5 = '../assets/Products/german-chocolate-cake-5.jpeg';
const cake6 = '../assets/Products/german-chocolate-cake-6.jpeg';
const cake7 = '../assets/Products/german-chocolate-cake-7.jpeg';
const cake8 = '../assets/Products/german-chocolate-cake-8.jpeg';
const cake9 = '../assets/Products/german-chocolate-cake-9.jpeg';
const cake10 = '../assets/Products/german-chocolate-cake-10.jpeg';
const cake11 = '../assets/Products/german-chocolate-cake-11.jpeg';
const cake12 = '../assets/Products/german-chocolate-cake-12.jpeg';
const cake13 = '../assets/Products/german-chocolate-cake-13.jpeg';
const cake14 = '../assets/Products/german-chocolate-cake-14.jpeg';
const cake15 = '../assets/Products/german-chocolate-cake-15.jpeg';
const cake16 = '../assets/Products/german-chocolate-cake-16.jpeg';
const cake17 = '../assets/Products/german-chocolate-cake-17.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_POWDER, BAKING_SODA, BROWN_SUGAR, BUTTERMILK, CAKE_PAN, COCOA_POWDER, COOLING_RACK, EGG, EGG_YOLK, EVAPORATED_MILK, MEDIUM_BOWL, MIXING_BOWL, OVEN, PARCHMENT_PAPER, PECANS, POWDERED_SUGAR, SALT, SAUCEPAN, SHREDDED_COCONUT, STOVE, UNSALTED_BUTTER, VANILLA_EXTRACT, VEGETABLE_OIL, WATER, WHITE_SUGAR } = require('./ingredients');

const CHOCOLATE_CAKE_DRY_INGREDIENTS_SECTION = 'Chocolate Cake Dry Ingredients';
const CHOCOLATE_CAKE_WET_INGREDIENTS_SECTION = 'Chocolate Cake Wet Ingredients';
const CHOCOLATE_CAKE_BOILING_WATER_SECTION = 'Chocolate Cake Boiling Water';
const COCONUT_FROSTING_HEATED_INGREDIENTS_SECTION = 'Coconut Frosting Heated Ingredients';
const COCONUT_FROSTING_ADDITIONAL_INGREDIENTS_SECTION = 'Coconut Frosting Additional Ingredients';
const CHOCOLATE_BUTTERCREAM_FROSTING_SECTION = 'Chocolate Buttercream Frosting';

const BAKE_CAKE = 'Bake Cake';
const COOK_COCONUT_FROSTING = 'Cook Coconut Frosting';
const COOK_CHOCOLATE_BUTTERCREAM_FROSTING = 'Cook Chocolate Buttercream Frosting';

module.exports = {
    cardName: 'German Chocolate Cake',
    name: 'German Chocolate Cake',
    img: cake17,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.CAKE],
    yields: { amount: 15, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'German Chocolate Cake', link: 'https://tastesbetterfromscratch.com/german-chocolate-cake/', authors: ['Lauren Allen'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_CAKE_DRY_INGREDIENTS_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 7 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_CAKE_DRY_INGREDIENTS_SECTION },
        { ...COCOA_POWDER, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_CAKE_DRY_INGREDIENTS_SECTION },
        { ...BAKING_POWDER, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHOCOLATE_CAKE_DRY_INGREDIENTS_SECTION },
        { ...BAKING_SODA, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHOCOLATE_CAKE_DRY_INGREDIENTS_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHOCOLATE_CAKE_DRY_INGREDIENTS_SECTION },

        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: CHOCOLATE_CAKE_WET_INGREDIENTS_SECTION },
        { ...BUTTERMILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_CAKE_WET_INGREDIENTS_SECTION },
        { ...VEGETABLE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_CAKE_WET_INGREDIENTS_SECTION },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHOCOLATE_CAKE_WET_INGREDIENTS_SECTION },

        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'boiling', section: CHOCOLATE_CAKE_BOILING_WATER_SECTION },

        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COCONUT_FROSTING_HEATED_INGREDIENTS_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COCONUT_FROSTING_HEATED_INGREDIENTS_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COCONUT_FROSTING_HEATED_INGREDIENTS_SECTION },
        { ...EGG_YOLK, amount: 3, unit: '', additionalDetails: '', section: COCONUT_FROSTING_HEATED_INGREDIENTS_SECTION },
        { ...EVAPORATED_MILK, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COCONUT_FROSTING_HEATED_INGREDIENTS_SECTION },

        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: COCONUT_FROSTING_ADDITIONAL_INGREDIENTS_SECTION },
        { ...PECANS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: COCONUT_FROSTING_ADDITIONAL_INGREDIENTS_SECTION },
        { ...SHREDDED_COCONUT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'sweetened', section: COCONUT_FROSTING_ADDITIONAL_INGREDIENTS_SECTION },

        { ...UNSALTED_BUTTER, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_BUTTERCREAM_FROSTING_SECTION },
        { ...COCOA_POWDER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_BUTTERCREAM_FROSTING_SECTION },
        { ...POWDERED_SUGAR, amount: 4.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_BUTTERCREAM_FROSTING_SECTION },
        { ...EVAPORATED_MILK, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHOCOLATE_BUTTERCREAM_FROSTING_SECTION },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHOCOLATE_BUTTERCREAM_FROSTING_SECTION },
    ],
    appliances: [
        OVEN,
        STOVE,
    ],
    supplies: [
        { ...CAKE_PAN, amount: 2, additionalDetails: '9-inch', },
        PARCHMENT_PAPER,
        { ...MIXING_BOWL, amount: 3 },
        MEDIUM_BOWL,
        COOLING_RACK,
        SAUCEPAN,
    ],
    directions: [
        { step: 'Preheat oven to 375ºF.', section: BAKE_CAKE },
        { step: 'Line baking pans with parchment paper.', section: BAKE_CAKE },
        { step: `In a mixing bowl, combine the "${CHOCOLATE_CAKE_DRY_INGREDIENTS_SECTION}" section ingredients.`, section: BAKE_CAKE },
        { step: `In a medium bowl, combine the "${CHOCOLATE_CAKE_WET_INGREDIENTS_SECTION}" section ingredients.`, section: BAKE_CAKE },
        { step: 'Add the wet ingredients to the dry ingredients. Mix.', section: BAKE_CAKE, img: cake1 },
        { step: 'Slowly stir in the boiling water.', section: BAKE_CAKE, img: cake2 },
        { step: 'Pour batter into baking pans.', section: BAKE_CAKE, img: cake3 },
        { step: 'Bake until an inserted toothpick comes out clean (about 25 to 35 minutes).', section: BAKE_CAKE },
        { step: 'Cool for 5 minutes in pan.', section: BAKE_CAKE, img: cake9 },
        { step: 'Transfer to wire rack by just inverting it. Let it completely cool.', section: BAKE_CAKE },

        { step: `In a saucepan, combine "${COCONUT_FROSTING_HEATED_INGREDIENTS_SECTION}" section ingredients.`, section: COOK_COCONUT_FROSTING, img: cake4 },
        { step: 'Over medium heat, bring the sauce to a low boil. Stir constantly until mixture begins to thicken.', section: COOK_COCONUT_FROSTING, img: [cake5, cake6] },
        { step: 'Remove saucepan from heat.', section: COOK_COCONUT_FROSTING },
        { step: `Add the "${COCONUT_FROSTING_ADDITIONAL_INGREDIENTS_SECTION}" section ingredients. Stir.`, section: COOK_COCONUT_FROSTING, img: cake7 },
        { step: 'Let it completely cool.', section: COOK_COCONUT_FROSTING, img: cake8 },

        { step: 'In a microwavable mixing bowl, melt butter.', section: COOK_CHOCOLATE_BUTTERCREAM_FROSTING },
        { step: 'Stir in cocoa powder.', section: COOK_CHOCOLATE_BUTTERCREAM_FROSTING, img: cake10 },
        { step: 'Alternate adding powdered sugar and milk. Beat as added.', section: COOK_CHOCOLATE_BUTTERCREAM_FROSTING, img: cake11 },
        { step: 'Add vanilla. Mix.', section: COOK_CHOCOLATE_BUTTERCREAM_FROSTING, img: cake12 },

        { step: 'Place one cake layer on your serving plate.', section: SECTIONS.ASSEMBLE },
        { step: 'Spread a thin layer of chocolate frosting.', section: SECTIONS.ASSEMBLE, img: cake13 },
        { step: 'Spread half the coconut frosting.', section: SECTIONS.ASSEMBLE, img: cake14 },
        { step: 'Place the second cake layer.', section: SECTIONS.ASSEMBLE, img: cake15 },
        { step: 'Spread chocolate frosting all over.', section: SECTIONS.ASSEMBLE, img: cake16 },
        { step: 'Spread the rest of the coconut frosting.', section: SECTIONS.ASSEMBLE },

        { step: 'Enjoy this rich dessert!', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The cake batter will be thin.' },
        { note: 'For the chocolate buttercream frosting, slowly add evaporated milk if too thick or powdered sugar if too thin.' },
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