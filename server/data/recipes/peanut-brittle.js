const boiling = '../assets/Products/peanut-brittle-boiling.jpeg';
const color = '../assets/Products/peanut-brittle-color-change.jpeg';
const syrup = '../assets/Products/peanut-brittle-corn-syrup.jpeg';
const mixing = '../assets/Products/peanut-brittle-mixing.jpeg';
const peanuts = '../assets/Products/peanut-brittle-peanuts.jpeg';
const setting = '../assets/Products/peanut-brittle-setting.jpeg';
const mixed = '../assets/Products/peanut-brittle-sugar-water-mixed.jpeg';
const sugar = '../assets/Products/peanut-brittle-sugar.jpeg';
// const temperature = '../assets/Products/peanut-brittle-temperature.jpeg';
const vanilla = '../assets/Products/peanut-brittle-vanilla.jpeg';
const water = '../assets/Products/peanut-brittle-water.jpeg';
const plated1 = '../assets/Products/peanut-brittle-plated-1.jpeg';
const plated2 = '../assets/Products/peanut-brittle-plated-2.jpeg';
const rebaked = '../assets/Products/peanut-brittle-rebaked.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, UNITS } = require('./constants');
const { WHITE_SUGAR, CORN_SYRUP, COLD_WATER, UNSALTED_PEANUTS, UNSALTED_BUTTER, BAKING_SODA, VANILLA_EXTRACT } = require('./ingredients');

module.exports = {
    cardName: 'Peanut Brittle',
    name: 'Peanut Brittle',
    img: plated2,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.FINGER_FOOD],
    yields: '50 servings',
    prepTime: '5 m',
    cookTime: '20 m',
    websites: [
        { label: 'Peanut Brittle', link: "https://tastesbetterfromscratch.com/peanut-brittle/" }
    ],
    separated: false,
    ingredients: [
        { ...WHITE_SUGAR, amount: 2, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...COLD_WATER, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORN_SYRUP, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_PEANUTS, amount: 2, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_SODA, amount: 3 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 3 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'parchment paper' },
        { name: 'saucepan' },
        { name: 'food thermometer' },
    ],
    directions: [
        { step: 'Place parchment paper on a baking sheet.', type: SECTIONS.MAIN },
        { step: 'Over medium heat, combine together sugar and water in a saucepan.', type: SECTIONS.MAIN, img: [sugar, water, mixed] },
        { step: 'Add in corn syrup. Stirring occasionally and bring to a boil.', type: SECTIONS.MAIN, img: [syrup, boiling] },
        { step: 'Continue to cook until the temperature reading is 250ºF.', type: SECTIONS.MAIN },
        { step: 'Add in peanuts and stir constantly.', type: SECTIONS.MAIN, img: peanuts },
        { step: 'Remove from heat once the temperature reading is 300ºF. This is really important to evaporate the water from the sugar so that it will harden this dessert.', type: SECTIONS.MAIN },
        { step: 'Immediately mix in butter, baking soda and vanilla extract. It should foam and change texture.', type: SECTIONS.MAIN, img: [vanilla, color, mixing] },
        { step: 'Quickly and carefully pour onto the parchment paper and spread to an even layer using a spatula.', type: SECTIONS.MAIN, img: setting },
        { step: 'Let it completely cool (about 30 minutes).', type: SECTIONS.MAIN },
        { step: 'Break apart and share with those you love.', type: SECTIONS.MAIN, img: plated1 },
        { step: 'Store in an airtight container at room temperature. Do not refrigerate.', type: SECTIONS.MAIN },
        { step: 'If the peanut brittle is not hard enough there are two solutions that I found: (1) you can bake it in the oven at 300ºF until the edges are brown. Be careful not to burn it and make sure the pan is large enough or else it will spill over. or (2) you can remix the dessert into a pot and reheat until the temperature is 300ºF. Make sure to stir constantly to ensure that it does not burn.', type: SECTIONS.MAIN, img: rebaked },
    ]
};