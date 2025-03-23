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

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, UNITS, YIELD_UNITS } = require('./constants');
const { TAPIOCA_STARCH, HOT_WATER, VEGETABLE_OIL, SALT, POWDERED_SUGAR, BAKING_SODA, PEANUT_OIL, DARK_SOY_SAUCE, WHITE_VINEGAR, RED_PEPPER_FLAKES, GARLIC, RICE_FLOUR, GLUTINOUS_RICE_FLOUR, GARLIC_CHIVES, LUKEWARM_WATER, UNSALTED_PEANUTS } = require('./ingredients');

const DOUGH_SECTION = 'Dough';
const CHIVE_SECTION = 'Chive';
const DIPPING_SAUCE_SECTION = 'Dipping Sauce';
const PREP_DIPPING_SAUCE_SECTION = 'Prep Dipping Sauce';
const PREP_CHIVE_FILLING = 'Prep Chive Filling';
const ASSEMBLE_CHIVE_CAKES_SECTION = 'Assemble Chive Cakes';
const COOK_SECTION = 'Cook';

module.exports = {
    wip: true,
    cardName: 'Chive Cakes',
    name: 'Chive Cakes (Khanom Gui Chai)',
    img: cakes19,
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.THAI],
    method: [METHODS.PAN_FRY],
    type: [TYPES.SIDE_DISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: '25 m',
    cookTime: '20 m',
    websites: [
        { label: 'Chive Cakes (ingredients)', link: 'https://www.sbs.com.au/food/recipe/chive-cakes-khanom-gui-chai/gossuf95o' },
        { label: 'Chive Cakes (cooking)', link: 'https://www.foodrepublic.com/recipes/make-this-charles-phans-famous-chive-cakes-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...RICE_FLOUR, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...GLUTINOUS_RICE_FLOUR, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...TAPIOCA_STARCH, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...HOT_WATER, amount: 2, unit: UNITS.CUP, additionalDetails: 'boiling', section: DOUGH_SECTION },
        { ...VEGETABLE_OIL, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...LUKEWARM_WATER, amount: 3, unit: UNITS.TABLESPOON, additionalDetails: '', section: DOUGH_SECTION },

        { ...GARLIC_CHIVES, amount: 2, unit: UNITS.CUP, additionalDetails: '1/2 inch slices', section: CHIVE_SECTION },
        { ...SALT, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: CHIVE_SECTION },
        { ...POWDERED_SUGAR, amount: 7 / 8, unit: UNITS.CUP, additionalDetails: '', section: CHIVE_SECTION },
        { ...BAKING_SODA, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: CHIVE_SECTION },
        { ...PEANUT_OIL, amount: 2 / 3, unit: UNITS.CUP, additionalDetails: '', section: CHIVE_SECTION },
        { ...UNSALTED_PEANUTS, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: 'chopped', section: CHIVE_SECTION },

        { ...DARK_SOY_SAUCE, amount: 3 / 4, unit: UNITS.CUP, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...WHITE_VINEGAR, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...SALT, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...POWDERED_SUGAR, amount: 7 / 8, unit: UNITS.CUP, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...RED_PEPPER_FLAKES, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...GARLIC, amount: 4, unit: UNITS.CLOVE, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
    ],
    appliances: [
        { name: 'stand mixer' },
        { name: 'stove' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'rolling pin' },
        { name: 'large saucepan' },
        { name: 'steamer' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Chive" ingredients.', type: PREP_CHIVE_FILLING, img: [cakes6, cakes7, cakes8] },
        { step: 'Drain the chives. Set aside.', type: PREP_CHIVE_FILLING, img: [cakes9, cakes10] },

        { step: 'Over low heat, combine all the "Sauce" ingredients except the red pepper flakes and the garlic in a saucepan.', type: PREP_DIPPING_SAUCE_SECTION },
        { step: 'Heat until the salt and sugar dissolves. Set aside.', type: PREP_DIPPING_SAUCE_SECTION },
        { step: 'Add red pepper flakes and garlic.', type: PREP_DIPPING_SAUCE_SECTION },

        { step: 'In a stand mixer, combine the rice flours and 2/3 of the tapioca starch.', type: DOUGH_SECTION, img: cakes1 },
        { step: 'Add the boiling water.', type: DOUGH_SECTION, img: cakes2 },
        { step: 'Beat on high until it has a smooth consistency and is glue-like.', type: DOUGH_SECTION, img: cakes3 },
        { step: 'Set bowl aside to cool.', type: DOUGH_SECTION },
        { step: 'Once it has cooled, add oil and the remaining tapioca starch. Beat on low until it is mixed.', type: DOUGH_SECTION, img: cakes4 },
        { step: 'With the mixer, slowly add water and mix until the dough does not bounce back when lightly pressing your finger (for about 3 minutes).', type: DOUGH_SECTION, img: cakes5 },

        { step: 'On a clean surface, dust it with rice flour. I had to add about a cup of rice flour because it was still very sticky.', type: ASSEMBLE_CHIVE_CAKES_SECTION },
        { step: 'Take a portion of dough and roll it out into a disc (1/2 inch thick, 2 3/4 inch wide).', type: ASSEMBLE_CHIVE_CAKES_SECTION, img: cakes11 },
        { step: 'Place a heaping spoonful of chive filling in the center of the disc.', type: ASSEMBLE_CHIVE_CAKES_SECTION, img: cakes12 },
        { step: 'Bring up the sides and seal the goodness in.', type: ASSEMBLE_CHIVE_CAKES_SECTION, img: cakes13 },
        { step: 'Repeat this for the rest of the chive cakes.', type: ASSEMBLE_CHIVE_CAKES_SECTION },

        { step: 'Over high heat, bring a large saucepan of water to a boil.', type: COOK_SECTION },
        { step: 'Place the chive cakes in the steamer (leaving space between each cake).', type: COOK_SECTION, img: [cakes14, cakes15] },
        { step: 'Steam until the dough is translucent (for about 5 to 7 minutes).', type: COOK_SECTION, img: cakes16 },
        { step: 'Over medium-high heat, heat some vegetable oil and cook cakes in batches.', type: COOK_SECTION, img: cakes17 },
        { step: 'Pan fry until both sides are browned.', type: COOK_SECTION, img: cakes18 },

        { step: 'Enjoy these chive cakes with the dipping sauce.', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The dough was difficult to get right. I still need to work on it. I had to add a lot of rice flour to get it to a workable consistency.', },
        { note: 'After about 10 minutes of steaming the dough never became translucent, so I need to experiment more with that.', },
        { note: 'I need to rework this recipe. It didn\'t taste good.' }
    ]
};