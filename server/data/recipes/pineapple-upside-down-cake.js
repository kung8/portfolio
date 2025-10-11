// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BROWN_SUGAR, CANNED_PINEAPPLE_SLICES, EGG, MARASCHINO_CHERRIES, UNSALTED_BUTTER, VEGETABLE_OIL, YELLOW_CAKE_MIX } = require('./ingredients');

const PREHEATED_PAN_SECTION = 'Preheated Pan';
const PINEAPPLE_SUGAR_SAUCE = 'Pineapple Sugar Sauce';
const YELLOW_CAKE_MIX_SECTION = 'Yellow Cake Mix';

const PREP_BAKING_PAN = 'Prep Baking Pan';
const PREP_PINEAPPLE_SUGAR_SAUCE = 'Prep Pineapple Sugar Sauce';
const PREP_YELLOW_CAKE_MIX = 'Prep Yellow Cake Mix';
const BAKE_CAKE = 'Bake Cake';
const FLIP_CAKE = 'Flip Cake';

module.exports = {
    wip: true,
    cardName: 'Pineapple Cake',
    name: 'Pineapple Upside Down Cake',
    img: '',
    recipeAuthors: ['Angela Ritchie'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.CAKE],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 46, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pineapple Upside Down Cake', link: 'https://www.bettycrocker.com/recipes/easy-pineapple-upside-down-cake/c4d3321d-fad9-41cb-8f29-8d91a4279b07' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PREHEATED_PAN_SECTION },

        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PINEAPPLE_SUGAR_SAUCE },
        { ...CANNED_PINEAPPLE_SLICES, amount: 20, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PINEAPPLE_SUGAR_SAUCE },
        { ...MARASCHINO_CHERRIES, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PINEAPPLE_SUGAR_SAUCE },
        { ...YELLOW_CAKE_MIX, amount: '', unit: '', additionalDetails: '', section: YELLOW_CAKE_MIX_SECTION },
        { ...VEGETABLE_OIL, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'or as stated on the cake mix box', section: YELLOW_CAKE_MIX_SECTION },
        { ...EGG, amount: 3, unit: '', additionalDetails: 'or as stated on the cake mix box', section: YELLOW_CAKE_MIX_SECTION },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'knife' },
        { name: 'serving plates/pan' },
    ],
    directions: [
        { step: 'In a baking pan, add butter.', section: PREP_BAKING_PAN },
        { step: 'Place baking pan on the center rack in the oven.', section: PREP_BAKING_PAN },
        { step: 'Preheat the oven to 350ºF.', section: PREP_BAKING_PAN },
        { step: 'Remove the pan once the butter has melted (about 5 to 7 minutes).', section: PREP_BAKING_PAN },

        { step: 'Evenly sprinkle the brown sugar over the melted butter.', section: PREP_PINEAPPLE_SUGAR_SAUCE },
        { step: 'Arrange pineapple slices over the brown sugar.', section: PREP_PINEAPPLE_SUGAR_SAUCE },
        { step: 'Add cherries in the center of each pineapple slice. For any extra cherries, place them around the slices.', section: PREP_PINEAPPLE_SUGAR_SAUCE },
        { step: 'Reserve the pineapple juice to replace the water needed for the yellow cake mix.', section: PREP_PINEAPPLE_SUGAR_SAUCE },

        { step: 'Make the yellow cake batter as directed from the box.', section: PREP_YELLOW_CAKE_MIX },
        { step: 'Pour batter over the pineapples.', section: PREP_YELLOW_CAKE_MIX },

        { step: 'Bake until an inserted toothpick comes out clean (about 40 to 46 minutes).', section: BAKE_CAKE },

        { step: 'After taking out the cake, loosen the cake by running a knife around the edges of the pan.', section: FLIP_CAKE },
        { step: 'Place serving plates/pan upside down over cake.', section: FLIP_CAKE },
        { step: 'Carefully turn plates and baking pan over. Leave the pan on top to let the sauce drizzle over the cake (about 5 minutes).', section: FLIP_CAKE },

        { step: 'Let cool for 30 minutes and enjoy this simple dish!', section: SECTIONS.SERVE },
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
            instruction: 'Optionally reheat. Microwave in 15-second intervals until warm.',
        },
    ],
    mealPrep: true,
};