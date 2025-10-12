const cake1 = '../assets/Products/chocolate-cake-1.jpeg';
const cake2 = '../assets/Products/chocolate-cake-2.jpeg';
const cake3 = '../assets/Products/chocolate-cake-3.jpeg';
const cake4 = '../assets/Products/chocolate-cake-4.jpeg';
const cake5 = '../assets/Products/chocolate-cake-5.jpeg';
const cake6 = '../assets/Products/chocolate-cake-6.jpeg';
const cake7 = '../assets/Products/chocolate-cake-7.jpeg';
const cake8 = '../assets/Products/chocolate-cake-8.jpeg';
const cake9 = '../assets/Products/chocolate-cake-9.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_POWDER, BAKING_SHEET, BAKING_SODA, CAKE_PAN, COCOA_POWDER, COOKING_SPRAY, EGG, MILK, OVEN, SALT, STAND_MIXER, UNSALTED_BUTTER, VANILLA_EXTRACT, VEGETABLE_OIL, WATER, WHITE_SUGAR } = require('./ingredients');
const frosting = require('./chocolate-buttercream-frosting');

const CAKE_PAN_SECTION = 'Cake Pan';
const DRY_INGREDIENTS = 'Dry Ingredients';
const WET_INGREDIENTS = 'Wet Ingredients';
const BOILING_WATER_SECTION = 'Boiling Water';
const CHOCOLATE_BUTTERCREAM_FROSTING = {
    name: 'Chocolate Buttercream Frosting',
    category: CATEGORIES.DESSERT,
}

const PREP_CAKE_PAN = 'Prep Cake Pan';
const PREP_CAKE_BATTER = 'Prep Cake Batter';
const BAKE_CAKE = 'Bake Cake';
const COOL_CAKE = 'Cool Cake';
const DECORATE_CAKE = 'Decorate Cake';

module.exports = {
    cardName: 'Chocolate Cake',
    name: 'Chocolate Cake',
    img: cake9,
    recipeAuthors: ['Robyn Stone'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.CAKE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 24, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chocolate Cake', link: 'https://addapinch.com/the-best-chocolate-cake-recipe-ever/' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: CAKE_PAN_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.SPRINKLE, additionalDetails: '', section: CAKE_PAN_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...COCOA_POWDER, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...BAKING_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...BAKING_SODA, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },
        { ...COCOA_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DRY_INGREDIENTS },

        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_INGREDIENTS },
        { ...VEGETABLE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: WET_INGREDIENTS },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: WET_INGREDIENTS },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: WET_INGREDIENTS },

        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'boiling', section: BOILING_WATER_SECTION },

        { ...CHOCOLATE_BUTTERCREAM_FROSTING, amount: frosting.yields.amount, unit: frosting.yields.unit, additionalDetails: '', section: SECTIONS.DECORATING, link: { id: frosting.name, url: `recipes/${frosting.name}` } },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
    ],
    supplies: [
        { ...CAKE_PAN, amount: 2, additionalDetails: '9 inch' },
        COOKING_SPRAY,
        BAKING_SHEET,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: PREP_CAKE_PAN },
        { step: 'Spray cake pans with cooking spray, small amount of butter and lightly flour.', section: PREP_CAKE_PAN, img: cake1 },

        { step: `In a stand mixer combine the "${DRY_INGREDIENTS}" section ingredients.`, section: PREP_CAKE_BATTER, img: cake2 },
        { step: `Add the "${WET_INGREDIENTS}" section ingredients. Combine.`, section: PREP_CAKE_BATTER, img: [cake3, cake4] },
        { step: 'Carefully add the boiling water. Combine.', section: PREP_CAKE_BATTER, img: cake5 },

        { step: 'Pour batter into prepared cake pans.', section: BAKE_CAKE, img: cake6 },
        { step: 'Place a baking sheet underneath in case the cake overflows as it cooks.', section: BAKE_CAKE },
        { step: 'Bake until an inserted toothpick comes out clean (about 30 to 35 minutes).', section: BAKE_CAKE },

        { step: 'Remove the cake from the oven. Let it cool in the pan for about 10 to 15 minutes.', section: COOL_CAKE, img: cake7 },
        { step: 'Remove the cake from the pan. Allow it to completely cool before decorating.', section: COOL_CAKE },

        {
            step: 'Decorate with whatever frosting, icing and other toppings. Try out this ',
            section: DECORATE_CAKE,
            link: {
                text: 'Chocolate Buttercream Frosting',
                link: `https://kevinung8.com/#/recipes/${frosting.name}`,
                additionalText: '.',
            },
            img: cake8,
        },
        { step: 'Enjoy this very moist cake.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The boiling water is what makes this cake so moist as it helps activate the baking soda and baking powder.' },
        { note: 'The batter will look really thin after adding the boiling water and that is expected.' },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Allow the cake to cool completely before storing. Store in an airtight container or cover with plastic wrap.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.THAW,
            instruction: 'Allow the cake to thaw in the fridge overnight.',
        },
    ],
    mealPrep: true,
};