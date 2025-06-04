const angled = '../assets/Products/peppermint-bark-chilled-angled.jpeg';
const crushed = '../assets/Products/peppermint-bark-crushed-peppermint.jpeg';
const peppermint = '../assets/Products/peppermint-bark-peppermint.jpeg';
const chocolate = '../assets/Products/peppermint-bark-chocolate-chips.jpeg';
const layeredPeppermint = '../assets/Products/peppermint-bark-layered-peppermint.jpeg';
const layeredWhite = '../assets/Products/peppermint-bark-layered-white-chocolate.jpeg';
const meltedChocolate = '../assets/Products/peppermint-bark-melted-chocolate.jpeg';
const meltedWhite = '../assets/Products/peppermint-bark-melted-white-chocolate-chip.jpeg';
const parchment = '../assets/Products/peppermint-bark-parchment-paper.jpeg';
const plated2 = '../assets/Products/peppermint-bark-plated-2.jpeg';
const plated4 = '../assets/Products/peppermint-bark-plated-4.jpeg';
const set = '../assets/Products/peppermint-bark-set-chocolate.jpeg';
const white = '../assets/Products/peppermint-bark-white-chocolate-chips.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { SEMI_SWEET_CHOCOLATE_CHIPS, WHITE_CHOCOLATE_CHIPS, PEPPERMINT_EXTRACT, CANDY_CANES } = require('./ingredients');

module.exports = {
    cardName: 'Peppermint Bark',
    name: 'Peppermint Bark',
    img: plated4,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.MELT, METHODS.CHILLED],
    type: [TYPES.DESSERT],
    yields: { amount: 16, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Peppermint Bark', link: "https://www.dinneratthezoo.com/peppermint-bark-recipe/" }
    ],
    separated: false,
    ingredients: [
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_CHOCOLATE_CHIPS, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PEPPERMINT_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CANDY_CANES, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'crushed', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'microwave' },
    ],
    supplies: [
        { name: '2 microwaveable bowls' },
        { name: 'parchment paper' },
        { name: 'baking sheet' },
        { name: 'spatula' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Place some parchment paper on a baking sheet.', section: SECTIONS.MAIN, img: parchment },
        { step: 'In a microwaveable bowl, melt the semisweet chocolate chips in 30 second intervals.', section: SECTIONS.MAIN, img: chocolate },
        { step: 'Pour the chocolate on the parchment paper and carefully spread until it\'s a thin layer of chocolate.', section: SECTIONS.MAIN, img: meltedChocolate },
        { step: 'Chill in the fridge to help it partially set (up to 10 minutes). Any more time past that will cause it to not stick to the melted white chocolate layer.', section: SECTIONS.MAIN, img: set },
        { step: 'Repeat the melting process for the white chocolate chips.', section: SECTIONS.MAIN, img: [white, meltedWhite] },
        { step: 'Mix in peppermint extract.', section: SECTIONS.MAIN },
        { step: 'Spread the melted white chocolate over the semisweet chocolate.', section: SECTIONS.MAIN, img: layeredWhite },
        { step: 'Sprinkle the crushed candy cane over the white chocolate.', section: SECTIONS.MAIN, img: [peppermint, crushed, layeredPeppermint] },
        { step: 'Chill in the fridge until the chocolate is completely set (about 20 minutes).', section: SECTIONS.MAIN, img: angled },
        { step: 'Take the bark and let it sit at room temperature before cutting (about 20 minutes).', section: SECTIONS.MAIN },
        { step: 'Using a sharp knife, cut through the bark and enjoy.', section: SECTIONS.MAIN, img: plated2 },
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