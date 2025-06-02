const bar = '../assets/Products/lemon-bars-baked-bar.jpeg';
const baked = '../assets/Products/lemon-bars-baked.jpeg';
const dough = '../assets/Products/lemon-bars-dough.jpeg';
const dry = '../assets/Products/lemon-bars-dry-ingredients.jpeg';
const eggsMixed = '../assets/Products/lemon-bars-eggs-mixed.jpeg';
const flattened = '../assets/Products/lemon-bars-flattened-dough.jpeg';
const flour = '../assets/Products/lemon-bars-flour-added.jpeg';
const juiceMixed = '../assets/Products/lemon-bars-lemon-juice-mixed.jpeg';
const juice = '../assets/Products/lemon-bars-lemon-juice.jpeg';
const melted = '../assets/Products/lemon-bars-melted-butter.jpeg';
const plated1 = '../assets/Products/lemon-bars-plated-1.jpeg';
const plated2 = '../assets/Products/lemon-bars-plated-2.jpeg';
const rack = '../assets/Products/lemon-bars-rack.jpeg';
const filling = '../assets/Products/lemon-bars-raw-filling.jpeg';
const zestMixed = '../assets/Products/lemon-bars-sugar-and-zest-mixed.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { ALL_PURPOSE_FLOUR, POWDERED_SUGAR, SALT, UNSALTED_BUTTER, LEMON_ZEST, WHITE_SUGAR, EGG, LEMON_JUICE } = require('./ingredients');

module.exports = {
    cardName: 'Lemon Bars',
    name: 'Lemon Bars',
    img: plated2,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.BAR],
    yields: { amount: 3 / 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Lemon Bars', link: "https://preppykitchen.com/lemon-bars" }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CRUST },
        { ...POWDERED_SUGAR, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CRUST },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...UNSALTED_BUTTER, amount: 12, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.CRUST },

        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...LEMON_ZEST, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...EGG, amount: 8, unit: '', additionalDetails: 'room temperature', section: SECTIONS.FILLING },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'fresh', section: SECTIONS.FILLING },

        { ...POWDERED_SUGAR, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
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
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.CRUST },
        { step: 'Line a baking pan with parchment paper.', section: SECTIONS.CRUST },
        { step: 'In a mixing bowl, combine the flour, powdered sugar and salt.', section: SECTIONS.CRUST, img: dry },
        { step: 'Add the butter and mix.', section: SECTIONS.CRUST, img: [melted] },
        { step: 'Pour batter into baking pan and spread the batter until it coats the entire bottom and is an even layer.', section: SECTIONS.CRUST, img: [dough, flattened] },
        { step: 'Bake until it is a light golden color (about 20 minutes).', section: SECTIONS.CRUST, img: bar },
        { step: 'In a mixing bowl, combine sugar and lemon zest.', section: SECTIONS.FILLING, img: zestMixed },
        { step: 'Add flour and mix.', section: SECTIONS.FILLING, img: flour },
        { step: 'Add lemon juice and eggs. Mix.', section: SECTIONS.FILLING, img: [eggsMixed, juice, juiceMixed] },
        { step: 'Pour the filling mixture onto the cooked crust.', section: SECTIONS.MAIN, img: filling },
        { step: 'Bake for 25 minutes (turning the pan about halfway). They will continue to set as they cool.', section: SECTIONS.MAIN },
        { step: 'Remove from the oven and let it cool for an hour.', section: SECTIONS.MAIN },
        { step: 'Chill in the fridge for 2 hours', section: SECTIONS.MAIN },
        { step: 'Top with powdered sugar.', section: SECTIONS.MAIN, img: [rack, baked] },
        { step: 'Wet a sharp knife between cuts.', section: SECTIONS.MAIN },
        { step: 'Enjoy these sweet and tart treats.', section: SECTIONS.TOPPINGS, img: plated1 },
    ],
    store: [
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};