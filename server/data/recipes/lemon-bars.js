const aerial = '../assets/Products/lemon-bars-baked-aerial.jpeg';
const bar = '../assets/Products/lemon-bars-baked-bar.jpeg';
const side = '../assets/Products/lemon-bars-baked-side.jpeg';
const zoomed = '../assets/Products/lemon-bars-baked-zoomed.jpeg';
const baked = '../assets/Products/lemon-bars-baked.jpeg';
const dough = '../assets/Products/lemon-bars-dough.jpeg';
const mixed = '../assets/Products/lemon-bars-dry-ingredients-mixed.jpeg';
const dry = '../assets/Products/lemon-bars-dry-ingredients.jpeg';
const eggsMixed = '../assets/Products/lemon-bars-eggs-mixed.jpeg';
const eggs = '../assets/Products/lemon-bars-eggs.jpeg';
const flattened = '../assets/Products/lemon-bars-flattened-dough.jpeg';
const flour = '../assets/Products/lemon-bars-flour-added.jpeg';
const juiceMixed = '../assets/Products/lemon-bars-lemon-juice-mixed.jpeg';
const juice = '../assets/Products/lemon-bars-lemon-juice.jpeg';
const melted = '../assets/Products/lemon-bars-melted-butter.jpeg';
const plated1 = '../assets/Products/lemon-bars-plated-1.jpeg';
const plated2 = '../assets/Products/lemon-bars-plated-2.jpeg';
const plated3 = '../assets/Products/lemon-bars-plated-3.jpeg';
const plated4 = '../assets/Products/lemon-bars-plated-4.jpeg';
const rack = '../assets/Products/lemon-bars-rack.jpeg';
const filling = '../assets/Products/lemon-bars-raw-filling.jpeg';
const zestMixed = '../assets/Products/lemon-bars-sugar-and-zest-mixed.jpeg';
const zest = '../assets/Products/lemon-bars-sugar-and-zest.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { ALL_PURPOSE_FLOUR, POWDERED_SUGAR, SALT, UNSALTED_BUTTER, LEMON_ZEST, WHITE_SUGAR, EGGS, LEMON_JUICE } = require('./ingredients');

module.exports = {
    cardName: 'Lemon Bars',
    name: 'Lemon Bars',
    img: plated2,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.BAR],
    yields: ' servings',
    prepTime: '20 m',
    cookTime: '55 m',
    websites: ["https://preppykitchen.com/lemon-bars"],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: '2 1/2 c', additionalDetails: '', section: SECTIONS.CRUST },
        { ...POWDERED_SUGAR, amount: '2/3 c', additionalDetails: '', section: SECTIONS.CRUST },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.CRUST },
        { ...UNSALTED_BUTTER, amount: '12 Tbsp', additionalDetails: 'melted', section: SECTIONS.CRUST },

        { ...WHITE_SUGAR, amount: '3 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...LEMON_ZEST, amount: '3 Tbsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...ALL_PURPOSE_FLOUR, amount: '1/2 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...EGGS, amount: '8', additionalDetails: 'room temperature', section: SECTIONS.FILLING },
        { ...LEMON_JUICE, amount: '1 c', additionalDetails: 'fresh', section: SECTIONS.FILLING },

        { ...POWDERED_SUGAR, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'parchment paper' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.CRUST },
        { step: 'Line a baking pan with parchment paper.', type: SECTIONS.CRUST },
        { step: 'In a mixing bowl, combine the flour, powdered sugar and salt.', type: SECTIONS.CRUST, img: [dry, mixed] },
        { step: 'Add the butter and mix.', type: SECTIONS.CRUST, img: [melted] },
        { step: 'Pour batter into baking pan and spread the batter until it coats the entire bottom and is an even layer.', type: SECTIONS.CRUST, img: [dough, flattened] },
        { step: 'Bake until it is a light golden color (about 20 minutes).', type: SECTIONS.CRUST, img: bar },
        { step: 'In a mixing bowl, combine sugar and lemon zest.', type: SECTIONS.FILLING, img: [zest, zestMixed] },
        { step: 'Add flour and mix.', type: SECTIONS.FILLING, img: flour },
        { step: 'Add lemon juice and eggs. Mix.', type: SECTIONS.FILLING, img: [eggs, eggsMixed, juice, juiceMixed] },
        { step: 'Pour the filling mixture onto the cooked crust.', type: SECTIONS.MAIN, img: filling },
        { step: 'Bake for 25 minutes (turning the pan about halfway). They will continue to set as they cool.', type: SECTIONS.MAIN },
        { step: 'Remove from the oven and let it cool for an hour.', type: SECTIONS.MAIN },
        { step: 'Chill in the fridge for 2 hours', type: SECTIONS.MAIN },
        { step: 'Top with powdered sugar.', type: SECTIONS.MAIN, img: [rack, baked, aerial, side, zoomed] },
        { step: 'Wet a sharp knife between cuts.', type: SECTIONS.MAIN },
        { step: 'Enjoy these sweet and tart treats.', type: SECTIONS.TOPPINGS, img: [plated1, plated3, plated4] },
    ]
};