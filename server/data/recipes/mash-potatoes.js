const potatoes1 = '../assets/Products/mash-potatoes-1.jpeg';
const potatoes2 = '../assets/Products/mash-potatoes-2.jpeg';
const potatoes3 = '../assets/Products/mash-potatoes-3.jpeg';
const potatoes4 = '../assets/Products/mash-potatoes-4.jpeg';
const potatoes5 = '../assets/Products/mash-potatoes-5.jpeg';
const potatoes6 = '../assets/Products/mash-potatoes-6.jpeg';
const potatoes7 = '../assets/Products/mash-potatoes-7.jpeg';
const potatoes8 = '../assets/Products/mash-potatoes-8.jpeg';
const potatoes9 = '../assets/Products/mash-potatoes-9.jpeg';
const potatoes10 = '../assets/Products/mash-potatoes-10.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { YUKON_GOLD_POTATO, GARLIC, UNSALTED_BUTTER, MILK, SALT, BLACK_PEPPER, GREEN_ONION, SOUR_CREAM, CHEDDAR_CHEESE, CHIVE } = require('./ingredients');

module.exports = {
    cardName: 'Mash Potatoes',
    name: 'Mash Potatoes',
    img: potatoes8,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BOIL, METHODS.MASH],
    type: [TYPES.SIDE_DISH],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Mash Potatoes', link: 'https://www.spendwithpennies.com/how-to-make-mashed-potatoes/' }
    ],
    separated: true,
    ingredients: [
        { ...YUKON_GOLD_POTATO, amount: 4, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'peeled and quartered', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...MILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: 'thinly sliced', section: SECTIONS.TOPPINGS },
        { ...SOUR_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEDDAR_CHEESE, amount: '', unit: '', additionalDetails: 'shredded', section: SECTIONS.TOPPINGS },
        { ...CHIVE, amount: '', unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'masher' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Place quartered potatoes, salt, and garlic in a pot of cold water.', section: SECTIONS.MAIN, img: potatoes1 },
        { step: 'Bring pot to a boil.', section: SECTIONS.MAIN },
        { step: 'Cook uncovered until tender (about 15 minutes)', section: SECTIONS.MAIN, img: potatoes2 },
        { step: 'Drain. Transfer to a mixing bowl.', section: SECTIONS.MAIN, img: [potatoes4, potatoes5] },
        { step: 'In large pot, heat milk until warm.', section: SECTIONS.MAIN, img: potatoes3 },
        { step: 'Add melted butter to the potatoes and mash.', section: SECTIONS.MAIN, img: [potatoes6, potatoes7] },
        { step: 'Pour warm milk into the potatoes a little at a time while mashing.', section: SECTIONS.MAIN },
        { step: 'Season with salt and pepper until desired taste.', section: SECTIONS.MAIN },
        { step: 'Serve hot as a side dish. Top mashed potatoes with gravy and your favorite toppings.', section: SECTIONS.SERVE, img: [potatoes9, potatoes10] },
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