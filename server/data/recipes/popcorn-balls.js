const pouredZoomed = '../assets/Products/popcorn-balls-melted-poured-over-popcorn-zoomed.jpeg';
const moreMelted = '../assets/Products/popcorn-balls-more-melted.jpeg';
const rackStacked = '../assets/Products/popcorn-balls-on-rack-stacked.jpeg';
const popped = '../assets/Products/popcorn-balls-popped-corn.jpeg';
const rackZoomed = '../assets/Products/popcorn-balls-rack-zoomed.jpeg';
const mixed = '../assets/Products/popcorn-balls-unmelted-mixed.jpeg';
const unmeltedZoomed = '../assets/Products/popcorn-balls-unmelted-zoomed.jpeg';
const baggiesZoomed = '../assets/Products/popcorn-ball-in-baggies-zoomed.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, UNITS, YIELD_UNITS } = require('./constants');
const { POPCORN, CORN_SYRUP, UNSALTED_BUTTER, COLD_WATER, POWDERED_SUGAR, MINI_MARSHMALLOWS, COOKING_SPRAY } = require('./ingredients');

module.exports = {
    cardName: 'Popcorn Balls',
    name: 'Popcorn Balls',
    img: rackStacked,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.DESSERT],
    yields: { amount: 20, unit: YIELD_UNITS.SERVING },
    prepTime: '15 m',
    cookTime: '20 m',
    websites: [
        { label: 'Popcorn Balls', link: "https://www.allrecipes.com/recipe/20519/best-ever-popcorn-balls/" }
    ],
    separated: false,
    ingredients: [
        { ...POPCORN, amount: 5, unit: UNITS.QUART, additionalDetails: 'plain', section: SECTIONS.MAIN },
        { ...CORN_SYRUP, amount: 3 / 4, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...COLD_WATER, amount: 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...POWDERED_SUGAR, amount: 5 / 2, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MINI_MARSHMALLOWS, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...COOKING_SPRAY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'large mixing bowl' },
        { name: 'plastic wrap or sandwich ziploc bag' },
    ],
    directions: [
        { step: 'Remove any unpopped kernels so you don\'t break your teeth.', type: SECTIONS.MAIN, img: popped },
        { step: 'Prepare a baking sheet and line with parchment paper before beginning to cook.' },
        { step: 'Over medium heat, mix together corn syrup, butter, water, powdered sugar and marshmallows in a large pot.', type: SECTIONS.MAIN, img: [unmeltedZoomed, mixed] },
        { step: 'Stir and continue to let the mixture melt.', type: SECTIONS.MAIN, img: moreMelted },
        { step: 'Slowly pour mixture over popcorn and mix until the popcorn is evenly coated.', type: SECTIONS.MAIN, img: pouredZoomed },
        { step: 'Quickly grease hands with cooking spray and form the popcorn into balls.', type: SECTIONS.MAIN },
        { step: 'Place popcorn balls on the prepared baking sheet.', type: SECTIONS.MAIN, img: rackZoomed },
        { step: 'Wrap each ball in plastic wrap or in individual sandwich ziploc bags and keep at room temperature.', type: SECTIONS.MAIN, img: baggiesZoomed },
        { step: 'Enjoy these sweet treats while you watch a show or movie!', type: SECTIONS.MAIN },
    ]
};