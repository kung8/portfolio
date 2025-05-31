const apples = '../assets/Products/apple-pie-apples.jpeg';
const zoomed2 = '../assets/Products/apple-pie-baked-zoomed-2.jpeg';
const baked = '../assets/Products/apple-pie-baked.jpeg';
const melted = '../assets/Products/apple-pie-melted-butter.jpeg';
const melting = '../assets/Products/apple-pie-melting-butter.jpeg';
const crust = '../assets/Products/apple-pie-pastry-dough.jpeg';
const plated = '../assets/Products/apple-pie-plated.jpeg';
const lattice = '../assets/Products/apple-pie-raw-lattice.jpeg';
const rawSauce = '../assets/Products/apple-pie-raw-with-sauce.jpeg';
const sauce = '../assets/Products/apple-pie-sauce.jpeg';
const sliced = '../assets/Products/apple-pie-sliced.jpeg';
const sugars = '../assets/Products/apple-pie-sugars.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, REHEAT_METHODS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { GRANNY_SMITH_APPLE, UNSALTED_BUTTER, ALL_PURPOSE_FLOUR, WHITE_SUGAR, BROWN_SUGAR, DOUBLE_CRUST_PIE_CRUST, WATER } = require('./ingredients');

module.exports = {
    cardName: 'Apple Pie',
    name: 'Apple Pie',
    img: baked,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE, METHODS.SIMMER],
    type: [TYPES.DESSERT, TYPES.PIE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 70, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Apple Pie', link: "https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/" },
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
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'saucepan' },
        { name: 'pie pan' },
    ],
    directions: [
        { step: 'Peel and cut the apple into thin slices.', section: SECTIONS.MAIN, img: apples },
        { step: 'Preheat the oven to 425ºF.', section: SECTIONS.MAIN },
        { step: 'Over medium heat, melt butter in a saucepan.', section: SECTIONS.MAIN, img: [melting, melted] },
        { step: 'Add flour and mix until it becomes a paste and fragrant (about 1 to 2 minutes).', section: SECTIONS.MAIN },
        { step: 'Add sugars and water. Bring to a boil.', section: SECTIONS.MAIN, img: [sugars] },
        { step: 'Lower to low heat. Simmer (about 3 to 5 minutes).', section: SECTIONS.MAIN },
        { step: 'Remove from heat.', section: SECTIONS.MAIN, img: sauce },
        { step: 'Position one pastry crust in a pie pan.', section: SECTIONS.MAIN, img: crust },
        { step: 'Roll the second pastry crust so it grows about 1 inch on all sides.', section: SECTIONS.MAIN },
        { step: 'Cut the pastry into 8 1-inch strip.', section: SECTIONS.MAIN },
        { step: 'Add the apple slices to the pie pan (a slight mound is fine).', section: SECTIONS.MAIN },
        { step: 'Lay out four of the pastry strips vertically evenly spaced.', section: SECTIONS.MAIN },
        { step: 'Weave the remaining pastry strips horizontally and alternating.', section: SECTIONS.MAIN },
        { step: 'Fold the lattice over the pie, trim any excess, and pinch.', section: SECTIONS.MAIN, img: lattice },
        { step: 'Pour the sugar mixture over the lattice and make sure that it (1) gets onto the apples and (2) does not spill over the sides.', section: SECTIONS.MAIN, img: rawSauce },
        { step: 'Bake for 15 minutes.', section: SECTIONS.MAIN },
        { step: 'Reduce to 350ºF and bake until apples are soft (about 35 to 45 minutes).', section: SECTIONS.MAIN },
        { step: 'Enjoy a taste of America\'s traditional dessert al la mode (i.e. topped with ice cream) or all by itself.', section: SECTIONS.MAIN, img: [plated, sliced, zoomed2] },
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