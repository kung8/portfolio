const example = '../assets/Products/example.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { WHITE_SUGAR, CORN_SYRUP, COLD_WATER, UNSALTED_PEANUTS, UNSALTED_BUTTER, BAKING_SODA, VANILLA_EXTRACT } = require('./ingredients');

module.exports = {
    cardName: 'Peanut Brittle',
    name: 'Peanut Brittle',
    img: '',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
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
        { ...WHITE_SUGAR, amount: '2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COLD_WATER, amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORN_SYRUP, amount: '1 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_PEANUTS, amount: '2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '2 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_SODA, amount: '1 1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: '1 1/2 tsp', additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Over medium heat, combine together sugar and water in a saucepan.', type: SECTIONS.MAIN },
        { step: 'Add in corn syrup. Stirring occasionally and bring to a boil.', type: SECTIONS.MAIN },
        { step: 'Continue to cook until the temperature reading is 250ºF.', type: SECTIONS.MAIN },
        { step: 'Add in peanuts and stir constantly.', type: SECTIONS.MAIN },
        { step: 'Remove from heat once the temperature reading is 300ºF.', type: SECTIONS.MAIN },
        { step: 'Immediately mix in butter, baking soda and vanilla extract. It should foam and change texture.', type: SECTIONS.MAIN },
        { step: 'Quickly and carefully pour onto the parchment paper and spread to an even layer using a spatula.', type: SECTIONS.MAIN },
        { step: 'Let it completely cool (about 30 minutes).', type: SECTIONS.MAIN },
        { step: 'Break apart and share with those you love.', type: SECTIONS.MAIN },
        { step: 'Store in an airtight container at room temperature. Do not refrigerate.', type: SECTIONS.MAIN },
    ]
};