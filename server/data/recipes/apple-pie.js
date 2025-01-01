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

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { GRANNY_SMITH_APPLES, UNSALTED_BUTTER, ALL_PURPOSE_FLOUR, WHITE_SUGAR, BROWN_SUGAR, COLD_WATER, DOUBLE_CRUST_PIE_CRUST } = require('./ingredients');

module.exports = {
    cardName: 'Apple Pie',
    name: 'Apple Pie',
    img: baked,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE, METHODS.SIMMER],
    type: [TYPES.DESSERT, TYPES.PIE],
    yields: '8 servings',
    prepTime: '10 m',
    cookTime: '70 m',
    websites: [
        { label: 'Apple Pie', link: "https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/" },
    ],
    separated: false,
    ingredients: [
        { ...GRANNY_SMITH_APPLES, amount: '8', additionalDetails: '', section: '' },
        { ...UNSALTED_BUTTER, amount: '1/2 c', additionalDetails: '', section: '' },
        { ...ALL_PURPOSE_FLOUR, amount: '3 Tbsp', additionalDetails: '', section: '' },
        { ...WHITE_SUGAR, amount: '1/2 c', additionalDetails: '', section: '' },
        { ...BROWN_SUGAR, amount: '1/2 c', additionalDetails: '', section: '' },
        { ...COLD_WATER, amount: '1/4 c', additionalDetails: '', section: '' },
        { ...DOUBLE_CRUST_PIE_CRUST, amount: '1', additionalDetails: 'thawed', section: '' },
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
        { step: 'Peel and cut the apple into thin slices.', type: SECTIONS.MAIN, img: apples },
        { step: 'Preheat the oven to 425ºF.', type: SECTIONS.MAIN },
        { step: 'Over medium heat, melt butter in a saucepan.', type: SECTIONS.MAIN, img: [melting, melted] },
        { step: 'Add flour and mix until it becomes a paste and fragrant (about 1 to 2 minutes).', type: SECTIONS.MAIN },
        { step: 'Add sugars and water. Bring to a boil.', type: SECTIONS.MAIN, img: [sugars] },
        { step: 'Lower to low heat. Simmer (about 3 to 5 minutes).', type: SECTIONS.MAIN },
        { step: 'Remove from heat.', type: SECTIONS.MAIN, img: sauce },
        { step: 'Position one pastry crust in a pie pan.', type: SECTIONS.MAIN, img: crust },
        { step: 'Roll the second pastry crust so it grows about 1 inch on all sides.', type: SECTIONS.MAIN },
        { step: 'Cut the pastry into 8 1-inch strip.', type: SECTIONS.MAIN },
        { step: 'Add the apple slices to the pie pan (a slight mound is fine).', type: SECTIONS.MAIN },
        { step: 'Lay out four of the pastry strips vertically evenly spaced.', type: SECTIONS.MAIN },
        { step: 'Weave the remaining pastry strips horizontally and alternating.', type: SECTIONS.MAIN },
        { step: 'Fold the lattice over the pie, trim any excess, and pinch.', type: SECTIONS.MAIN, img: lattice },
        { step: 'Pour the sugar mixture over the lattice and make sure that it (1) gets onto the apples and (2) does not spill over the sides.', type: SECTIONS.MAIN, img: rawSauce },
        { step: 'Bake for 15 minutes.', type: SECTIONS.MAIN },
        { step: 'Reduce to 350ºF and bake until apples are soft (about 35 to 45 minutes).', type: SECTIONS.MAIN },
        { step: 'Enjoy a taste of America\'s traditional dessert al la mode (i.e. topped with ice cream) or all by itself.', type: SECTIONS.MAIN, img: [plated, sliced, zoomed2] },
    ],
    notes: [
        { note: 'Slicing this pie is easier when it is cooled but it may come out crumbly but it\'s still good.' },
    ]
};