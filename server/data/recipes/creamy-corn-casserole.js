const casserole1 = '../assets/Products/corn-casserole-1.jpeg';
const casserole2 = '../assets/Products/corn-casserole-2.jpeg';
const casserole3 = '../assets/Products/corn-casserole-3.jpeg';
const casserole4 = '../assets/Products/corn-casserole-4.jpeg';
const casserole5 = '../assets/Products/corn-casserole-5.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { CANNED_SWEET_CORN, CANNED_CREAMED_CORN, CORNBREAD_MIX, SOUR_CREAM, UNSALTED_BUTTER, EGG } = require('./ingredients');

const PREP_BAKE = 'Prep Bake';
const PREP_BATTER = 'Prep Batter';
const BAKE = 'Bake';

module.exports = {
    cardName: 'Creamy Corn Casserole',
    name: 'Creamy Corn Casserole',
    img: casserole5,
    recipeAuthor: '',
    recipeFinder: 'Samantha Pham',
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.APPETIZER],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.CASSEROLE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Creamy Corn Casserole', link: 'https://www.allrecipes.com/recipe/18906/awesome-and-easy-creamy-corn-casserole/' }
    ],
    separated: true,
    ingredients: [
        { ...CANNED_SWEET_CORN, amount: 15, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'drained', section: SECTIONS.MAIN },
        { ...CANNED_CREAMED_CORN, amount: 14.75, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORNBREAD_MIX, amount: 8.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SOUR_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...EGG, amount: 2, unit: '', additionalDetails: 'beaten', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'casserole dish' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: PREP_BAKE },
        { step: 'Lightly grease a casserole dish.', section: PREP_BAKE },
        { step: 'In a mixing bowl, combine all the ingredients.', section: PREP_BATTER, img: [casserole1, casserole2] },
        { step: 'Pour batter into the casserole dish.', section: PREP_BATTER, img: casserole3 },
        { step: 'Bake until the top is golden brown and a toothpick comes out clean (about 45 minutes).', section: BAKE, img: casserole4 },
        { step: 'Enjoy this simple casserole and crowd pleaser.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};