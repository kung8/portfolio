// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { TAPIOCA_STARCH, HOT_WATER, VEGETABLE_OIL, SALT, POWDERED_SUGAR, BAKING_SODA, PEANUT_OIL, DARK_SOY_SAUCE, WHITE_VINEGAR, RED_PEPPER_FLAKES, GARLIC, RICE_FLOUR, GLUTINOUS_RICE_FLOUR, GARLIC_CHIVES, LUKEWARM_WATER } = require('./ingredients');

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
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.THAI],
    method: [METHODS.PAN_FRY],
    type: [TYPES.SIDE_DISH],
    yields: '4 servings',
    prepTime: '25 m',
    cookTime: '20 m',
    websites: [
        { label: 'Chive Cakes (ingredients)', link: 'https://www.sbs.com.au/food/recipe/chive-cakes-khanom-gui-chai/gossuf95o' },
        { label: 'Chive Cakes (cooking)', link: 'https://www.foodrepublic.com/recipes/make-this-charles-phans-famous-chive-cakes-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...RICE_FLOUR, amount: '1 c', additionalDetails: '', section: DOUGH_SECTION },
        { ...GLUTINOUS_RICE_FLOUR, amount: '1 tsp', additionalDetails: '', section: DOUGH_SECTION },
        { ...TAPIOCA_STARCH, amount: '1 c', additionalDetails: '', section: DOUGH_SECTION },
        { ...HOT_WATER, amount: '2 c', additionalDetails: 'boiling', section: DOUGH_SECTION },
        { ...VEGETABLE_OIL, amount: '2 Tbsp', additionalDetails: '', section: DOUGH_SECTION },
        { ...LUKEWARM_WATER, amount: '3 Tbsp', additionalDetails: '', section: DOUGH_SECTION },

        { ...GARLIC_CHIVES, amount: '2 c', additionalDetails: '1/2 inch slices', section: CHIVE_SECTION },
        { ...SALT, amount: '1 Tbsp', additionalDetails: '', section: CHIVE_SECTION },
        { ...POWDERED_SUGAR, amount: '7/8 c', additionalDetails: '', section: CHIVE_SECTION },
        { ...BAKING_SODA, amount: '1 Tbsp', additionalDetails: '', section: CHIVE_SECTION },
        { ...PEANUT_OIL, amount: '2/3 c', additionalDetails: '', section: CHIVE_SECTION },

        { ...DARK_SOY_SAUCE, amount: '3/4 c', additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...WHITE_VINEGAR, amount: '1/2 c', additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...SALT, amount: '1 tsp', additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...POWDERED_SUGAR, amount: '7/8 c', additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...RED_PEPPER_FLAKES, amount: '2 Tbsp', additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...GARLIC, amount: '4 cloves of', additionalDetails: '', section: DIPPING_SAUCE_SECTION },
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
        { step: 'In a stand mixer, combine the "Chive" ingredients.', type: PREP_CHIVE_FILLING },
        { step: 'Beat on high for 2 minutes.', type: PREP_CHIVE_FILLING },
        { step: 'Drain the chives. Set aside.', type: PREP_CHIVE_FILLING },

        { step: 'Over low heat, combine all the "Sauce" ingredients except the red pepper flakes and the garlic in a saucepan.', type: PREP_DIPPING_SAUCE_SECTION },
        { step: 'Heat until the salt and sugar dissolves. Set aside.', type: PREP_DIPPING_SAUCE_SECTION },
        { step: 'Add red pepper flakes and garlic.', type: PREP_DIPPING_SAUCE_SECTION },

        { step: 'In a stand mixer, combine the rice flours and 2/3 of the tapioca starch.', type: DOUGH_SECTION },
        { step: 'Add the boiling water.', type: DOUGH_SECTION },
        { step: 'Beat on high until it has a smooth consistency and is glue-like.', type: DOUGH_SECTION },
        { step: 'Set bowl aside to cool.', type: DOUGH_SECTION },
        { step: 'Once it has cooled, add oil and the remaining tapioca starch. Beat on low until it is mixed.', type: DOUGH_SECTION },
        { step: 'With the mixer, slowly add water and mix until the dough does not bounce back when lightly pressing your finger (for about 3 minutes).', type: DOUGH_SECTION },

        { step: 'On a clean surface, dust it with rice flour.', type: ASSEMBLE_CHIVE_CAKES_SECTION },
        { step: 'Take a portion of dough and roll it out into a disc (1/2 inch thick, 2 3/4 inch wide).', type: ASSEMBLE_CHIVE_CAKES_SECTION },
        { step: 'Place a heaping spoonful of chive filling in the center of the disc.', type: ASSEMBLE_CHIVE_CAKES_SECTION },
        { step: 'Bring up the sides and seal the goodness in.', type: ASSEMBLE_CHIVE_CAKES_SECTION },
        { step: 'Repeat this for the rest of the chive cakes.', type: ASSEMBLE_CHIVE_CAKES_SECTION },

        { step: 'Over high heat, bring a large saucepan of water to a boil.', type: COOK_SECTION },
        { step: 'Place the chive cakes in the steamer (leaving space between each cake).', type: COOK_SECTION },
        { step: 'Steam until the dough is translucent (for about 5 to 7 minutes).', type: COOK_SECTION },
        { step: 'Brush the top of each chive cake with oil.', type: COOK_SECTION },
        { step: 'Over medium-high heat, place each of these cakes in a frying pan.', type: COOK_SECTION },
        { step: 'Pan fry until both sides are browned.', type: COOK_SECTION },

        { step: 'Enjoy these chive cakes with the dipping sauce.', type: SECTIONS.SERVE },
    ]
};