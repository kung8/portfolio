const potatoes1 = '../assets/Products/mash-potatoes-1.jpeg';
const potatoes2 = '../assets/Products/mash-potatoes-2.jpeg';
const potatoes3 = '../assets/Products/mash-potatoes-3.jpeg';
const potatoes4 = '../assets/Products/mash-potatoes-4.jpeg';
const potatoes5 = '../assets/Products/mash-potatoes-5.jpeg';
const potatoes6 = '../assets/Products/mash-potatoes-6.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { YUKON_GOLD_POTATO, UNSALTED_BUTTER, MILK, SALT, BLACK_PEPPER, SOUR_CREAM } = require('./ingredients');

const POTATOES_SECTION = 'Potatoes';
const LIQUIDS_SECTION = 'Liquids';
const BOIL_POTATOES = 'Boil Potatoes';
const MASH_POTATOES = 'Mash Potatoes';
const FIRMING_POTATOES = 'Firming Potatoes';

module.exports = {
    cardName: 'Mash Potatoes',
    name: 'Mash Potatoes',
    img: potatoes6,
    recipeAuthors: ['Holly Nilsson'],
    recipeFinder: 'Justin Ung',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BOIL, METHODS.MASH],
    type: [TYPES.SIDE_DISH],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Mash Potatoes', link: 'https://www.spendwithpennies.com/how-to-make-mashed-potatoes/' }
    ],
    separated: true,

    ingredients: [
        { ...YUKON_GOLD_POTATO, amount: 2, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'peeled', section: POTATOES_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: LIQUIDS_SECTION },
        { ...MILK, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: LIQUIDS_SECTION },
        { ...SOUR_CREAM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: LIQUIDS_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'colander' },
        { name: 'masher' },
    ],
    directions: [
        { step: 'Over high heat, bring a large pot of water to a boil.', section: BOIL_POTATOES, },
        { step: 'Add potatoes to the pot. Boil until the potatoes have softened (about 25 minutes).', section: BOIL_POTATOES, img: [potatoes1, potatoes2] },
        { step: 'Drain potatoes.', section: BOIL_POTATOES, img: potatoes3 },
        { step: 'Re-add the potatoes to the pot.', section: BOIL_POTATOES, },
        { step: `Add "${LIQUIDS_SECTION}" section ingredients.`, section: MASH_POTATOES, },
        { step: 'Mash potatoes until it becomes a chowder consistency.', section: MASH_POTATOES, img: potatoes4 },
        { step: `Season the potatoes with "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.SEASON, },
        { step: 'Over high heat, re-add the pot. Stir until the mash potatoes becomes your preferred consistency.', section: FIRMING_POTATOES, img: potatoes5 },
        { step: 'Serve this warm as a side or by itself.', section: SECTIONS.SERVE, },
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