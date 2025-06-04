// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { POTATO, SALT, BLACK_PEPPER, ALL_PURPOSE_FLOUR, MILK, EGG, UNSALTED_BUTTER, SOUR_CREAM } = require('./ingredients');

const POTATO_SECTION = 'Potato';
const FLOUR_MIXTURE_SECTION = 'Flour Mixture';

const BOIL_POTATOES = 'Boil Potatoes';
const PREP_POTATO_BATTER = 'Prep Potato Batter';
const FRY_PATTIES = 'Fry Patties';

module.exports = {
    wip: true,
    cardName: 'Irish Potato Boxty',
    name: 'Irish Potato Boxty',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.IRISH],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [],
    type: [TYPES.SIDE_DISH, TYPES.FINGER_FOOD],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Irish Potato Boxty', link: 'https://www.foodandwine.com/irish-potato-boxty-6422424' }
    ],
    separated: true,
    ingredients: [
        { ...POTATO, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: POTATO_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: POTATO_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: POTATO_SECTION },

        { ...ALL_PURPOSE_FLOUR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_MIXTURE_SECTION },
        { ...MILK, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_MIXTURE_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: FLOUR_MIXTURE_SECTION },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_MIXTURE_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_MIXTURE_SECTION },

        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: '' },
        { ...SOUR_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium saucepan' },
        { name: 'colander' },
        { name: 'mixing bowl' },
        { name: 'box grater' },
        { name: 'frying pan' },
    ],
    directions: [
        { step: 'Peel half the potatoes.', section: BOIL_POTATOES },
        { step: 'Cut the peeled potatoes into 1 inch pieces.', section: BOIL_POTATOES },
        { step: 'Over medium-high heat, add the peeled potato pieces and salted water to a medium saucepan. Bring to a simmer.', section: BOIL_POTATOES },
        { step: 'Cook the potatoes until tender (about 15 minutes).', section: BOIL_POTATOES },
        { step: 'Drain. Transfer to a bowl.', section: BOIL_POTATOES },

        { step: 'Peel the remaining potatoes.', section: PREP_POTATO_BATTER },
        { step: 'Grate the potatoes.', section: PREP_POTATO_BATTER },
        { step: 'Wrap the potatoes in a kitchen towel and squeeze.', section: PREP_POTATO_BATTER },
        { step: `Add grated potatoes and the "${FLOUR_MIXTURE_SECTION}" section ingredients to the bowl.`, section: PREP_POTATO_BATTER },
        
        { step: 'Form patties with about 1/3 cup worth of batter.', section: FRY_PATTIES },
        { step: 'Over medium heat, heat butter in a large skillet.', section: FRY_PATTIES },
        { step: 'Cook half the patties. Occasionally flipping. Cook until golden (about 8 minutes per batch).', section: FRY_PATTIES },
        { step: 'Serve with sour cream.', section: SECTIONS.SERVE },
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