const pie1 = '../assets/Products/apple-pie-1.jpeg';
const pie2 = '../assets/Products/apple-pie-2.jpeg';
const pie3 = '../assets/Products/apple-pie-3.jpeg';
const pie4 = '../assets/Products/apple-pie-4.jpeg';
const pie5 = '../assets/Products/apple-pie-5.jpeg';
const pie6 = '../assets/Products/apple-pie-6.jpeg';
const pie7 = '../assets/Products/apple-pie-7.jpeg';
const pie8 = '../assets/Products/apple-pie-8.jpeg';
const pie9 = '../assets/Products/apple-pie-9.jpeg';
const pie10 = '../assets/Products/apple-pie-10.jpeg';
const pie11 = '../assets/Products/apple-pie-11.jpeg';
const pie12 = '../assets/Products/apple-pie-12.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BROWN_SUGAR, DOUBLE_CRUST_PIE_CRUST, GRANNY_SMITH_APPLE, OVEN, PIE_PAN, SAUCEPAN, STOVE, UNSALTED_BUTTER, WATER, WHITE_SUGAR } = require('./ingredients');

module.exports = {
    cardName: 'Apple Pie',
    name: 'Apple Pie',
    img: pie12,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE, METHODS.SIMMER],
    type: [TYPES.DESSERT, TYPES.PIE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 70, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Apple Pie', 
            link: "https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/",
            author: ['Moshasmama'], 
            finder: 'Kevin Ung',
        },
    ],
    separated: false,
    ingredients: [
        { ...GRANNY_SMITH_APPLE, amount: 8, unit: '', additionalDetails: '', section: '' },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: '' },
        { ...ALL_PURPOSE_FLOUR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: '' },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: '' },
        { ...BROWN_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: '' },
        { ...WATER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: '' },
        { ...DOUBLE_CRUST_PIE_CRUST, amount: 1, unit: '', additionalDetails: 'thawed', section: '' },
    ],
    appliances: [
        STOVE,
        OVEN,
    ],
    supplies: [
        SAUCEPAN,
        PIE_PAN,
    ],
    directions: [
        { step: 'Peel and cut the apple into thin slices.', section: SECTIONS.MAIN, img: pie1 },
        { step: 'Preheat the oven to 425ºF.', section: SECTIONS.MAIN },
        { step: 'Over medium heat, melt butter in a saucepan.', section: SECTIONS.MAIN, img: [pie2, pie3] },
        { step: 'Add flour and mix until it becomes a paste and fragrant (about 1 to 2 minutes).', section: SECTIONS.MAIN },
        { step: 'Add sugars and water. Bring to a boil.', section: SECTIONS.MAIN, img: pie4 },
        { step: 'Lower to low heat. Simmer (about 3 to 5 minutes).', section: SECTIONS.MAIN },
        { step: 'Remove from heat.', section: SECTIONS.MAIN, img: pie5 },
        { step: 'Position one pastry crust in a pie pan.', section: SECTIONS.MAIN, img: pie6 },
        { step: 'Roll the second pastry crust so it grows about 1 inch on all sides.', section: SECTIONS.MAIN },
        { step: 'Cut the pastry into 8 1-inch strip.', section: SECTIONS.MAIN },
        { step: 'Add the apple slices to the pie pan (a slight mound is fine).', section: SECTIONS.MAIN },
        { step: 'Lay out four of the pastry strips vertically evenly spaced.', section: SECTIONS.MAIN },
        { step: 'Weave the remaining pastry strips horizontally and alternating.', section: SECTIONS.MAIN },
        { step: 'Fold the lattice over the pie, trim any excess, and pinch.', section: SECTIONS.MAIN, img: pie7 },
        { step: 'Pour the sugar mixture over the lattice and make sure that it (1) gets onto the apples and (2) does not spill over the sides.', section: SECTIONS.MAIN, img: pie8 },
        { step: 'Bake for 15 minutes.', section: SECTIONS.MAIN },
        { step: 'Reduce to 350ºF and bake until apples are soft (about 35 to 45 minutes).', section: SECTIONS.MAIN },
        { step: 'Enjoy a taste of America\'s traditional dessert al la mode (i.e. topped with ice cream) or all by itself.', section: SECTIONS.MAIN, img: [pie9, pie10, pie11] },
    ],
    notes: [
        { note: 'Slicing this pie is easier when it is cooled but it may come out crumbly but it\'s still good.' },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.ITS_OWN_CONTAINER,
            instruction: 'Make sure to cover the pie with foil or plastic wrap to prevent it from drying out.',
        },
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.ITS_OWN_CONTAINER,
            instruction: 'Make sure to cover the pie with foil or plastic wrap to prevent it from drying out.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through and crust is golden brown (about 15 to 20 minutes). Cool slightly before serving.',
        },
    ],
    mealPrep: true,
};