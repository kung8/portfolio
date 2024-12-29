// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { CANNED_SWEET_CORN, CANNED_CREAMED_CORN, CORNBREAD_MIX, SOUR_CREAM, UNSALTED_BUTTER, EGGS } = require('./ingredients');

const PREP_BAKE = 'Prep Bake';
const PREP_BATTER = 'Prep Batter';

module.exports = {
    wip: true,
    cardName: 'Creamy Corn Casserole',
    name: 'Creamy Corn Casserole',
    img: '',
    recipeCredit: 'Samm Pham',
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.APPETIZER],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.CASSEROLE],
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '45 m',
    websites: [
        { label: 'Creamy Corn Casserole', link: 'https://www.allrecipes.com/recipe/18906/awesome-and-easy-creamy-corn-casserole/' }
    ],
    separated: true,
    ingredients: [
        { ...CANNED_SWEET_CORN, amount: '15 oz', additionalDetails: 'drained', section: SECTIONS.MAIN },
        { ...CANNED_CREAMED_CORN, amount: '14.75 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORNBREAD_MIX, amount: '8.5 oz', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SOUR_CREAM, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '1/2 c', additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...EGGS, amount: '2', additionalDetails: 'beaten', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'casserole dish' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: PREP_BAKE },
        { step: 'Lightly grease a casserole dish.', type: PREP_BAKE },
        { step: 'In a mixing bowl, combine all the ingredients.', type: PREP_BATTER },
        { step: 'Pour batter into the casserole dish.', type: PREP_BATTER },
        { step: 'Bake until the top is golden brown and a toothpick comes out clean (about 45 minutes).', type: '' },
        { step: 'Enjoy this simple casserole and crowd pleaser.', type: '' },
    ]
};