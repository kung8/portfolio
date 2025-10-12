const cakes1 = '../assets/Products/chive-cakes-1.jpeg';
const cakes2 = '../assets/Products/chive-cakes-2.jpeg';
const cakes3 = '../assets/Products/chive-cakes-3.jpeg';
const cakes4 = '../assets/Products/chive-cakes-4.jpeg';
const cakes5 = '../assets/Products/chive-cakes-5.jpeg';
const cakes6 = '../assets/Products/chive-cakes-6.jpeg';
const cakes7 = '../assets/Products/chive-cakes-7.jpeg';
const cakes8 = '../assets/Products/chive-cakes-8.jpeg';
const cakes9 = '../assets/Products/chive-cakes-9.jpeg';
const cakes10 = '../assets/Products/chive-cakes-10.jpeg';
const cakes11 = '../assets/Products/chive-cakes-11.jpeg';
const cakes12 = '../assets/Products/chive-cakes-12.jpeg';
const cakes13 = '../assets/Products/chive-cakes-13.jpeg';
const cakes14 = '../assets/Products/chive-cakes-14.jpeg';
const cakes15 = '../assets/Products/chive-cakes-15.jpeg';
const cakes16 = '../assets/Products/chive-cakes-16.jpeg';
const cakes17 = '../assets/Products/chive-cakes-17.jpeg';
const cakes18 = '../assets/Products/chive-cakes-18.jpeg';
const cakes19 = '../assets/Products/chive-cakes-19.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SODA, DARK_SOY_SAUCE, FRYING_PAN, GARLIC, GARLIC_CHIVE, GLUTINOUS_RICE_FLOUR, HOT_WATER, PEANUT_OIL, POWDERED_SUGAR, RED_PEPPER_FLAKES, RICE_FLOUR, ROLLING_PIN, SALT, SAUCEPAN, STAND_MIXER, STEAMER, STOVE, TAPIOCA_STARCH, UNSALTED_PEANUT, VEGETABLE_OIL, WATER, WHITE_VINEGAR } = require('./ingredients');

const CHIVE_SECTION = 'Chive';
const COOK_SECTION = 'Cook';

module.exports = {
    wip: true,
    cardName: 'Chive Cakes',
    name: 'Chive Cakes (Khanom Gui Chai)',
    img: cakes19,
    recipeAuthors: ['Charles Phan, Sareen Rojanametin, Jean Thamthanakorn'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.THAI],
    method: [METHODS.PAN_FRY],
    type: [TYPES.SIDE_DISH],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chive Cakes (ingredients)', link: 'https://www.sbs.com.au/food/recipe/chive-cakes-khanom-gui-chai/gossuf95o' },
        { label: 'Chive Cakes (cooking)', link: 'https://www.foodrepublic.com/recipes/make-this-charles-phans-famous-chive-cakes-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...RICE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...GLUTINOUS_RICE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...TAPIOCA_STARCH, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...HOT_WATER, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'boiling', section: SECTIONS.DOUGH },
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WATER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: SECTIONS.DOUGH },

        { ...GARLIC_CHIVE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '1/2 inch slices', section: CHIVE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHIVE_SECTION },
        { ...POWDERED_SUGAR, amount: 7 / 8, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHIVE_SECTION },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CHIVE_SECTION },
        { ...PEANUT_OIL, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CHIVE_SECTION },
        { ...UNSALTED_PEANUT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: CHIVE_SECTION },

        { ...DARK_SOY_SAUCE, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_VINEGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...POWDERED_SUGAR, amount: 7 / 8, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RED_PEPPER_FLAKES, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        STAND_MIXER,
        STOVE,
    ],
    supplies: [
        SAUCEPAN,
        ROLLING_PIN,
        SAUCEPAN,
        STEAMER,
        FRYING_PAN,
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Chive" ingredients.', section: SECTIONS.PREP_FILLING, img: [cakes6, cakes7, cakes8] },
        { step: 'Drain the chives. Set aside.', section: SECTIONS.PREP_FILLING, img: [cakes9, cakes10] },

        { step: 'Over low heat, combine all the "Sauce" ingredients except the red pepper flakes and the garlic in a saucepan.', section: SECTIONS.PREP_DIP },
        { step: 'Heat until the salt and sugar dissolves. Set aside.', section: SECTIONS.PREP_DIP },
        { step: 'Add red pepper flakes and garlic.', section: SECTIONS.PREP_DIP },

        { step: 'In a stand mixer, combine the rice flours and 2/3 of the tapioca starch.', section: SECTIONS.MAKE_DOUGH, img: cakes1 },
        { step: 'Add the boiling water.', section: SECTIONS.MAKE_DOUGH, img: cakes2 },
        { step: 'Beat on high until it has a smooth consistency and is glue-like.', section: SECTIONS.MAKE_DOUGH, img: cakes3 },
        { step: 'Set bowl aside to cool.', section: SECTIONS.MAKE_DOUGH },
        { step: 'Once it has cooled, add oil and the remaining tapioca starch. Beat on low until it is mixed.', section: SECTIONS.MAKE_DOUGH, img: cakes4 },
        { step: 'With the mixer, slowly add water and mix until the dough does not bounce back when lightly pressing your finger (for about 3 minutes).', section: SECTIONS.MAKE_DOUGH, img: cakes5 },

        { step: 'On a clean surface, dust it with rice flour. I had to add about a cup of rice flour because it was still very sticky.', section: SECTIONS.ASSEMBLE },
        { step: 'Take a portion of dough and roll it out into a disc (1/2 inch thick, 2 3/4 inch wide).', section: SECTIONS.ASSEMBLE, img: cakes11 },
        { step: 'Place a heaping spoonful of chive filling in the center of the disc.', section: SECTIONS.ASSEMBLE, img: cakes12 },
        { step: 'Bring up the sides and seal the goodness in.', section: SECTIONS.ASSEMBLE, img: cakes13 },
        { step: 'Repeat this for the rest of the chive cakes.', section: SECTIONS.ASSEMBLE },

        { step: 'Over high heat, bring a large saucepan of water to a boil.', section: COOK_SECTION },
        { step: 'Place the chive cakes in the steamer (leaving space between each cake).', section: COOK_SECTION, img: [cakes14, cakes15] },
        { step: 'Steam until the dough is translucent (for about 5 to 7 minutes).', section: COOK_SECTION, img: cakes16 },
        { step: 'Over medium-high heat, heat some vegetable oil and cook cakes in batches.', section: COOK_SECTION, img: cakes17 },
        { step: 'Pan fry until both sides are browned.', section: COOK_SECTION, img: cakes18 },

        { step: 'Enjoy these chive cakes with the dipping sauce.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The dough was difficult to get right. I still need to work on it. I had to add a lot of rice flour to get it to a workable consistency.', },
        { note: 'After about 10 minutes of steaming the dough never became translucent, so I need to experiment more with that.', },
        { note: 'I need to rework this recipe. It didn\'t taste good.' }
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};