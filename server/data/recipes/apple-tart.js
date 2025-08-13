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

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { UNSALTED_BUTTER, WHITE_SUGAR, EGG_YOLK, VANILLA_EXTRACT, ALL_PURPOSE_FLOUR, ALMOND_FLOUR, REFRIGERATED_PUFF_PASTRY, PINK_LADY_APPLE, APRICOT_JELLY } = require('./ingredients');

const FRANGIPANE = 'Frangipane';
const BRUSH = 'Brush';

module.exports = {
    cardName: 'Apple Tart',
    name: 'Apple Tart',
    img: tart10,
    recipeAuthors: ['Rebecca Franklin'],
    recipeFinder: 'Sam Giraud-Carrier',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE],
    type: [TYPES.TART],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Apple Tart', link: 'https://www.thespruceeats.com/french-apple-tarte-aux-pommes-recipe-1375048' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1.5, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FRANGIPANE },
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FRANGIPANE },
        { ...ALMOND_FLOUR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FRANGIPANE },
        { ...EGG_YOLK, amount: 1, unit: '', additionalDetails: '', section: FRANGIPANE },
        { ...VANILLA_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FRANGIPANE },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FRANGIPANE },

        { ...REFRIGERATED_PUFF_PASTRY, amount: '', unit: '', additionalDetails: 'chilled until ready to use', section: SECTIONS.ASSEMBLE },
        { ...PINK_LADY_APPLE, amount: 4, unit: '', additionalDetails: 'cored, peeled and thinly sliced', section: SECTIONS.ASSEMBLE },
        { ...APRICOT_JELLY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'heated until partially melted', section: SECTIONS.ASSEMBLE },
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
        { step: 'In a mixing bowl, cream together butter and sugar.', section: FRANGIPANE, img: tart1 },
        { step: 'Mix in almond flour.', section: FRANGIPANE },
        { step: 'Gently mix in the egg yolks and vanilla.', section: FRANGIPANE, img: [tart2, tart3] },
        { step: 'Mix in all-purpose flour.', section: FRANGIPANE, img: tart4 },
        { step: 'Refrigerate until ready to use.', section: FRANGIPANE },

        { step: 'Preheat the oven to 400ºF.', section: SECTIONS.ASSEMBLE },
        { step: 'Place the chilled puff pastry on a baking sheet.', section: SECTIONS.ASSEMBLE },
        { step: 'Spread the frangipane evenly on the puff pastry.', section: SECTIONS.ASSEMBLE, img: tart5 },
        { step: 'Arrange the apple slices in overlapping rows.', section: SECTIONS.ASSEMBLE, img: tart6 },

        { step: 'Bake until crust begins to become golden brown (about 12 to 15 minutes).', section: SECTIONS.BAKE, img: tart7 },
        { step: 'Reduce heat to 350ºF.', section: SECTIONS.BAKE },
        { step: 'Cook until the apples are tender but not soft and the frangipane is cooked through and is not sticky (about 20 to 30 minutes).', section: SECTIONS.BAKE },
        { step: 'Remove the tart from the oven and let cool for 10 minutes.', section: SECTIONS.BAKE, img: tart8 },

        { step: 'Brush melted/heated jelly over the warm tart.', section: BRUSH, img: tart9 },

        { step: 'Let the tart cool to room temperature and enjoy this light dessert!', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The tart will need to be refrigerated if not eaten within a few hours because of the egg and dairy.', },
        { note: 'The original recipe recommends using a stand mixer though it only makes a small amount that is difficult for the stand mixer to get to (so unless you are making a larger amount you may as well mix this either by hand or with a hand mixer).', },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Wrap in foil and bake at 350ºF until heated through and crust is crispy (about 5 to 10 minutes).',
        },
    ],
    mealPrep: true,
};