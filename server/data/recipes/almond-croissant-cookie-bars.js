// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { UNSALTED_BUTTER, BROWN_SUGAR, EGG, VANILLA_EXTRACT, ALMOND_EXTRACT, SALT, ALL_PURPOSE_FLOUR, BAKING_POWDER, WHITE_SUGAR, ALMOND_FLOUR, SLICED_ALMONDS, POWDERED_SUGAR } = require('./ingredients');

const CRUST_SECTION = 'Crust';
const FRANGIPANE_SECTION = 'Frangipane';
const ALMOND_TOPPING_SECTION = 'Almond';

const MAKE_CRUST = 'Make Crust';
const MAKE_FRANGIPANE = 'Make Frangipane';
const ASSEMBLE = 'Assemble';
const BAKE_BARS = 'Bake Bars';

module.exports = {
    wip: true,
    cardName: 'Almond Croissant Cookie Bars',
    name: 'Almond Croissant Cookie Bars',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT, TYPES.COOKIE, TYPES.BAR],
    yields: { amount: 16, unit: YIELD_UNITS.BAR },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 42, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 2, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Almond Croissant Cookie Bars', link: 'https://www.thekitchn.com/almond-croissant-cookie-bars-recipe-23712681' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 8, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted and cooled', section: CRUST_SECTION },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CRUST_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: CRUST_SECTION },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CRUST_SECTION },
        { ...ALMOND_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CRUST_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CRUST_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CRUST_SECTION },
        { ...BAKING_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CRUST_SECTION },

        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'room temperature', section: FRANGIPANE_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FRANGIPANE_SECTION },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FRANGIPANE_SECTION },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FRANGIPANE_SECTION },
        { ...ALMOND_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FRANGIPANE_SECTION },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: FRANGIPANE_SECTION },
        { ...ALMOND_FLOUR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FRANGIPANE_SECTION },

        { ...SLICED_ALMONDS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: ALMOND_TOPPING_SECTION },

        { ...POWDERED_SUGAR, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'parchment paper' },
        { name: 'mixing bowl' },
        { name: 'rubber spatula' },
        { name: 'cutting board' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', type: MAKE_CRUST },
        { step: 'Line a baking sheet with two sheets of parchment paper (perpendicular of each other).', type: MAKE_CRUST },
        { step: 'In a mixing bowl, combine all the "Crust" section ingredients except the flour and baking powder. Mix until smooth.', type: MAKE_CRUST },
        { step: 'Add the flour and baking powder. Mix until it forms a thick batter.', type: MAKE_CRUST },
        { step: 'Transfer the batter to the pan and spread to an even layer.', type: MAKE_CRUST },

        { step: 'In a stand mixer, combine butter, sugar and salt. Beat on medium until fluffy (about 1 to 2 minutes). Scrape down sides.', type: MAKE_FRANGIPANE },
        { step: 'While on low speed, add vanilla and almond extracts.', type: MAKE_FRANGIPANE },
        { step: 'Add in eggs one at a time. Wait until each are incorporated. Scrape down sides.', type: MAKE_FRANGIPANE },
        { step: 'Add in flour until just combined. Scrape down sides and fold in flour until smooth.', type: MAKE_FRANGIPANE },

        { step: 'Spread frangipane over crust in an even layer.', type: ASSEMBLE },
        { step: 'Sprinkle almonds over frangipane and press into frangipane.', type: ASSEMBLE },

        { step: 'Bake until golden brown and the center is puffed (about 38 to 42 minutes).', type: BAKE_BARS },
        { step: 'Let it completely cool (about 2 hours).', type: BAKE_BARS },

        { step: 'Dust with powdered sugar.', type: SECTIONS.SERVE },
        { step: 'Lift parchment paper and transfer to a cutting board. Cut and enjoy these yummy bars.', type: SECTIONS.SERVE },
    ]
};