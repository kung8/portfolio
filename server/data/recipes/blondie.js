const batterPan = '../assets/Products/blondie-batter-pan.jpeg';
const batter = '../assets/Products/blondie-batter.jpeg';
const butter = '../assets/Products/blondie-butter.jpeg';
const dry = '../assets/Products/blondie-dry.jpeg';
const eggs = '../assets/Products/blondie-eggs.jpeg';
const flour = '../assets/Products/blondie-flour.jpeg';
const pan = '../assets/Products/blondie-pan.jpeg';
const plated = '../assets/Products/blondie-plated.jpeg';
const sugars = '../assets/Products/blondie-sugars.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, UNITS, YIELD_UNITS } = require('./constants');
const {
    UNSALTED_BUTTER,
    BROWN_SUGAR,
    WHITE_SUGAR,
    EGG,
    EGG_YOLKS,
    VANILLA_EXTRACT,
    ALL_PURPOSE_FLOUR,
    CORNSTARCH,
    BAKING_POWDER,
    SALT,
    SEMI_SWEET_CHOCOLATE_CHIPS,
} = require('./ingredients');

module.exports = {
    cardName: 'Blondie',
    name: 'Blondie',
    img: plated,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.DESSERT],
    yields: { amount: 18, unit: YIELD_UNITS.SERVING },
    prepTime: '10 m',
    cookTime: '30 m',
    websites: [
        { label: 'Blondies', link: "https://sugarspunrun.com/blondies-recipe/" }
    ],
    separated: false,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: UNITS.CUP, additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...BROWN_SUGAR, amount: 5 / 4, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG_YOLKS, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 9 / 4, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CORNSTARCH, amount: 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_POWDER, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SEMI_SWEET_CHOCOLATE_CHIPS, amount: 2 / 3, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'spatula' },
        { name: 'baking pan' },
        { name: 'medium bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'Melt butter.', type: SECTIONS.MAIN, img: butter },
        { step: 'In a mixing bowl, combine melted butter and both sugars until well mixed.', type: SECTIONS.MAIN, img: sugars },
        { step: 'Add eggs, yolk and vanilla. Combine.', type: SECTIONS.MAIN, img: eggs },
        { step: 'In a medium bowl, combine flour, cornstarch, baking powder and salt.', type: SECTIONS.MAIN, img: dry },
        { step: 'Slowly combine the dry ingredients into the wet ingredients.', type: SECTIONS.MAIN, img: flour },
        { step: 'Fold in chocolate chips or other desired fillings.', type: SECTIONS.MAIN, img: batter },
        { step: 'Pour in batter in a baking pan. Line with parchment paper if using a metal pan.', type: SECTIONS.MAIN, img: batterPan },
        { step: 'Bake for 25 to 30 minutes or until toothpick comes out clean when inserted.', type: SECTIONS.MAIN, img: pan },
        { step: 'Enjoy these tasty, simple and light desserts.', type: SECTIONS.MAIN },
    ],
    notes: [
        { note: 'The melted butter and the extra yolk are what give these blondies their chewy texture.' },
    ]
};