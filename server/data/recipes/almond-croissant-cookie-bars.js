const bars1 = '../assets/Products/almond-croissant-cookie-bar-1.jpeg';
const bars2 = '../assets/Products/almond-croissant-cookie-bar-2.jpeg';
const bars3 = '../assets/Products/almond-croissant-cookie-bar-3.jpeg';
const bars4 = '../assets/Products/almond-croissant-cookie-bar-4.jpeg';
const bars5 = '../assets/Products/almond-croissant-cookie-bar-5.jpeg';
const bars6 = '../assets/Products/almond-croissant-cookie-bar-6.jpeg';
const bars7 = '../assets/Products/almond-croissant-cookie-bar-7.jpeg';
const bars8 = '../assets/Products/almond-croissant-cookie-bar-8.jpeg';
const bars9 = '../assets/Products/almond-croissant-cookie-bar-9.jpeg';
const bars10 = '../assets/Products/almond-croissant-cookie-bar-10.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, ALMOND_EXTRACT, ALMOND_FLOUR, BAKING_POWDER, BAKING_SHEET, BROWN_SUGAR, CUTTING_BOARD, EGG, KNIFE, MIXING_BOWL, OVEN, PARCHMENT_PAPER, POWDERED_SUGAR, RUBBER_SPATULA, SALT, SLICED_ALMONDS, UNSALTED_BUTTER, VANILLA_EXTRACT, WHITE_SUGAR } = require('./ingredients');

const FRANGIPANE_SECTION = 'Frangipane';
const ALMOND_TOPPING_SECTION = 'Almond';

const MAKE_FRANGIPANE = 'Make Frangipane';
const BAKE_BARS = 'Bake Bars';

module.exports = {
    cardName: 'Almond Croissant Cookie Bars',
    name: 'Almond Croissant Cookie Bars',
    img: bars10,
    recipeAuthors: ['Kelli Foster'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
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
        { ...UNSALTED_BUTTER, amount: 8, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted and cooled', section: SECTIONS.CRUST },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CRUST },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.CRUST },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...ALMOND_EXTRACT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CRUST },
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CRUST },
        { ...BAKING_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CRUST },

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
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        PARCHMENT_PAPER,
        MIXING_BOWL,
        RUBBER_SPATULA,
        CUTTING_BOARD,
        KNIFE,
    ],
    directions: [
        { step: 'Preheat the oven to 350ºF.', section: SECTIONS.MAKE_CRUST },
        { step: 'Line a baking sheet with two sheets of parchment paper (perpendicular of each other).', section: SECTIONS.MAKE_CRUST },
        { step: `In a mixing bowl, combine all the "${SECTIONS.CRUST}" section ingredients except the flour and baking powder. Mix until smooth.`, section: SECTIONS.MAKE_CRUST, img: bars1 },
        { step: 'Add the flour and baking powder. Mix until it forms a thick batter.', section: SECTIONS.MAKE_CRUST, img: bars2 },
        { step: 'Transfer the batter to the pan and spread to an even layer.', section: SECTIONS.MAKE_CRUST, img: bars3 },

        { step: 'In the same empty mixing bowl, combine butter, sugar and salt. Combine with a rubber spatula. Beat until fluffy (about 1 to 2 minutes). Scrape down sides.', section: MAKE_FRANGIPANE, img: bars4 },
        { step: 'Add vanilla and almond extracts. Mix.', section: MAKE_FRANGIPANE },
        { step: 'Add in eggs one at a time. Wait until each are incorporated. Scrape down sides.', section: MAKE_FRANGIPANE, img: bars5 },
        { step: 'Add in flour until just combined. Scrape down sides and fold in flour until smooth.', section: MAKE_FRANGIPANE, img: bars6 },

        { step: 'Spread frangipane over crust in an even layer.', section: SECTIONS.ASSEMBLE, img: bars7 },
        { step: 'Sprinkle almonds over frangipane and press into frangipane.', section: SECTIONS.ASSEMBLE, img: bars8 },

        { step: 'Bake until golden brown and the center is puffed (about 38 to 42 minutes).', section: BAKE_BARS, img: bars9 },
        { step: 'Let it completely cool (about 2 hours).', section: BAKE_BARS },

        { step: 'Use a strainer to dust bars with powdered sugar.', section: SECTIONS.SERVE },
        { step: 'Lift parchment paper and transfer to a cutting board. Cut and enjoy these yummy bars.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The original recipe tells you to use a stand mixer, but you can use a hand mixer or even a rubber spatula. You do not need to wash an additional bowl.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Thaw at room temperature',
        },
    ],
    reheat: null,
    mealPrep: true,
};