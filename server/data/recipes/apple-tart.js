const tart1 = '../assets/Products/apple-tart-1.jpeg';
const tart2 = '../assets/Products/apple-tart-2.jpeg';
const tart3 = '../assets/Products/apple-tart-3.jpeg';
const tart4 = '../assets/Products/apple-tart-4.jpeg';
const tart5 = '../assets/Products/apple-tart-5.jpeg';
const tart6 = '../assets/Products/apple-tart-6.jpeg';
const tart7 = '../assets/Products/apple-tart-7.jpeg';
const tart8 = '../assets/Products/apple-tart-8.jpeg';
const tart9 = '../assets/Products/apple-tart-9.jpeg';
const tart10 = '../assets/Products/apple-tart-10.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, UNITS, YIELD_UNITS } = require('./constants');
const { UNSALTED_BUTTER, WHITE_SUGAR, EGG_YOLKS, VANILLA_EXTRACT, ALL_PURPOSE_FLOUR, ALMOND_FLOUR, REFRIGERATED_PUFF_PASTRY, PINK_LADY_APPLES, APRICOT_JELLY } = require('./ingredients');

const FRANGIPANE = 'Frangipane';
const BRUSH = 'Brush';

module.exports = {
    cardName: 'Apple Tart',
    name: 'Apple Tart',
    img: tart10,
    recipeCredit: 'Sam Giraud-Carrier',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE],
    type: [TYPES.TART],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: '25 m',
    cookTime: '45 m',
    websites: [
        { label: 'Apple Tart', link: 'https://www.thespruceeats.com/french-apple-tarte-aux-pommes-recipe-1375048' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1.5, unit: UNITS.TABLESPOON, additionalDetails: '', section: FRANGIPANE },
        { ...WHITE_SUGAR, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: FRANGIPANE },
        { ...ALMOND_FLOUR, amount: 1/4, unit: UNITS.CUP, additionalDetails: '', section: FRANGIPANE },
        { ...EGG_YOLKS, amount: 1, unit: '', additionalDetails: '', section: FRANGIPANE },
        { ...VANILLA_EXTRACT, amount: 1/2, unit: UNITS.TEASPOON, additionalDetails: '', section: FRANGIPANE },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: UNITS.TEASPOON, additionalDetails: '', section: FRANGIPANE },

        { ...REFRIGERATED_PUFF_PASTRY, amount: '', unit: '', additionalDetails: 'chilled until ready to use', section: SECTIONS.ASSEMBLY },
        { ...PINK_LADY_APPLES, amount: 4, unit: '', additionalDetails: 'cored, peeled and thinly sliced', section: SECTIONS.ASSEMBLY },
        { ...APRICOT_JELLY, amount: 1/4, unit: UNITS.CUP, additionalDetails: 'heated until partially melted', section: SECTIONS.ASSEMBLY },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'baking sheet' },
        { name: 'brush' },
    ],
    directions: [
        { step: 'In a mixing bowl, cream together butter and sugar.', type: FRANGIPANE, img: tart1 },
        { step: 'Mix in almond flour.', type: FRANGIPANE },
        { step: 'Gently mix in the egg yolks and vanilla.', type: FRANGIPANE, img: [tart2, tart3] },
        { step: 'Mix in all-purpose flour.', type: FRANGIPANE, img: tart4 },
        { step: 'Refrigerate until ready to use.', type: FRANGIPANE },

        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.ASSEMBLY },
        { step: 'Place the chilled puff pastry on a baking sheet.', type: SECTIONS.ASSEMBLY },
        { step: 'Spread the frangipane evenly on the puff pastry.', type: SECTIONS.ASSEMBLY, img: tart5 },
        { step: 'Arrange the apple slices in overlapping rows.', type: SECTIONS.ASSEMBLY, img: tart6 },

        { step: 'Bake until crust begins to become golden brown (about 12 to 15 minutes).', type: SECTIONS.BAKE, img: tart7 },
        { step: 'Reduce heat to 350ºF.', type: SECTIONS.BAKE },
        { step: 'Cook until the apples are tender but not soft and the frangipane is cooked through and is not sticky (about 20 to 30 minutes).', type: SECTIONS.BAKE },
        { step: 'Remove the tart from the oven and let cool for 10 minutes.', type: SECTIONS.BAKE, img: tart8 },

        { step: 'Brush melted/heated jelly over the warm tart.', type: BRUSH, img: tart9 },

        { step: 'Let the tart cool to room temperature and enjoy this light dessert!', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The tart will need to be refrigerated if not eaten within a few hours because of the egg and dairy.', },
        { note: 'The original recipe recommends using a stand mixer though it only makes a small amount that is difficult for the stand mixer to get to (so unless you are making a larger amount you may as well mix this either by hand or with a hand mixer).', },
    ]
};