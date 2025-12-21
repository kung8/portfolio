const cake1 = '../assets/Products/pineapple-upside-down-cake-1.jpeg';
const cake2 = '../assets/Products/pineapple-upside-down-cake-2.jpeg';
const cake3 = '../assets/Products/pineapple-upside-down-cake-3.jpeg';
const cake4 = '../assets/Products/pineapple-upside-down-cake-4.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_PAN, BROWN_SUGAR, CANNED_PINEAPPLE_SLICES, EGG, KNIFE, MARASCHINO_CHERRIES, OVEN, SERVING_PLATE, UNSALTED_BUTTER, VEGETABLE_OIL, YELLOW_CAKE_MIX } = require('./ingredients');

const PREHEATED_PAN_SECTION = 'Preheated Pan';

module.exports = {
    cardName: 'Pineapple Cake',
    name: 'Pineapple Upside Down Cake',
    img: cake4,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.CAKE],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 46, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Pineapple Upside Down Cake',
            link: 'https://www.bettycrocker.com/recipes/easy-pineapple-upside-down-cake/c4d3321d-fad9-41cb-8f29-8d91a4279b07',
            authors: ['Angela Ritchie'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PREHEATED_PAN_SECTION },

        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CANNED_PINEAPPLE_SLICES, amount: 20, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...MARASCHINO_CHERRIES, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...YELLOW_CAKE_MIX, amount: '', unit: '', additionalDetails: '', section: SECTIONS.BATTER },
        { ...VEGETABLE_OIL, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'or as stated on the cake mix box', section: SECTIONS.BATTER },
        { ...EGG, amount: 3, unit: '', additionalDetails: 'or as stated on the cake mix box', section: SECTIONS.BATTER },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
        KNIFE,
        SERVING_PLATE,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `In a baking pan, add butter.`, section: SECTIONS.PREP_PAN },
        { step: `Place baking pan on the center rack in the oven.`, section: SECTIONS.PREP_PAN },
        { step: `Remove the pan once the butter has melted (about 5 to 7 minutes).`, section: SECTIONS.PREP_PAN },

        { step: `Evenly sprinkle the brown sugar over the melted butter.`, section: SECTIONS.PREP_SAUCE },
        { step: `Arrange pineapple slices over the brown sugar.`, section: SECTIONS.PREP_SAUCE },
        { step: `Add cherries in the center of each pineapple slice. For any extra cherries, place them around the slices.`, section: SECTIONS.PREP_SAUCE, img: cake1 },
        { step: `Reserve the pineapple juice to replace the water needed for the yellow cake mix.`, section: SECTIONS.PREP_SAUCE },

        { step: `Make the yellow cake batter as directed from the box.`, section: SECTIONS.PREP_BATTER },
        { step: `Pour batter over the pineapples.`, section: SECTIONS.PREP_BATTER, img: cake2 },

        { step: `Bake until an inserted toothpick comes out clean (about 40 to 46 minutes).`, section: SECTIONS.BAKE, img: cake3 },

        { step: `After taking out the cake, loosen the cake by running a knife around the edges of the pan.`, section: SECTIONS.FLIP },
        { step: `Place serving plates/pan upside down over cake.`, section: SECTIONS.FLIP },
        { step: `Carefully turn plates and baking pan over. Leave the pan on top to let the sauce drizzle over the cake (about 5 minutes).`, section: SECTIONS.FLIP },

        { step: `Let cool for 30 minutes and enjoy this simple dish!`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `For shallow pans, bake for 35 to 40 minutes.` },
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