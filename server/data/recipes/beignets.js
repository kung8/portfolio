// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, UNITS, YIELD_UNITS } = require('./constants');
const { WARM_WATER, WHITE_SUGAR, YEAST, EGG, EVAPORATED_MILK, VANILLA_EXTRACT, BREAD_FLOUR, SALT, UNSALTED_BUTTER, PEANUT_OIL, POWDERED_SUGAR } = require('./ingredients');

const YEAST_MIXTURE_SECTION = 'Yeast Mixture';
const DOUGH_SECTION = 'Dough';

const MAKE_YEAST_MIXTURE = 'Make Yeast Mixture';
const MAKE_DOUGH = 'Make Dough';
const DEEP_FRY = 'Deep Fry';

module.exports = {
    wip: true,
    cardName: 'Beignets',
    name: 'Beignets',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.DEEP_FRY],
    type: [TYPES.DESSERT],
    yields: { amount: 3, unit: YIELD_UNITS.DOZEN },
    prepTime: '30 m',
    cookTime: '15 m',
    websites: [
        { label: 'Beignets', link: 'https://bakerbynature.com/new-orleans-style-beignets/' }
    ],
    separated: true,
    ingredients: [
        { ...WARM_WATER, amount: 3 / 2, unit: UNITS.CUP, additionalDetails: '', section: YEAST_MIXTURE_SECTION },
        { ...WHITE_SUGAR, amount: 2 / 3, unit: UNITS.CUP, additionalDetails: '', section: YEAST_MIXTURE_SECTION },
        { ...YEAST, amount: 9 / 4, unit: UNITS.TEASPOON, additionalDetails: '', section: YEAST_MIXTURE_SECTION },
        { ...EGG, amount: 2, unit: '', additionalDetails: 'room temperature', section: DOUGH_SECTION },
        { ...EVAPORATED_MILK, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...VANILLA_EXTRACT, amount: 5 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...BREAD_FLOUR, amount: 7, unit: UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...SALT, amount: 1.5, unit: UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...UNSALTED_BUTTER, amount: 5, unit: UNITS.TABLESPOON, additionalDetails: 'room temperature', section: DOUGH_SECTION },
        { ...PEANUT_OIL, amount: 4, unit: UNITS.CUP, additionalDetails: '', section: DEEP_FRY },
        { ...POWDERED_SUGAR, amount: 2, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'plastic wrap' },
        { name: 'baking sheet' },
        { name: 'paper towels' },
        { name: 'narrow, deep pot' },
        { name: 'cooking thermometer' },
        { name: 'wire rack' },
        { name: 'slotted spoon' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine together the "Yeast Mixture" section ingredients.', type: MAKE_YEAST_MIXTURE },
        { step: 'Set aside and let the mixture bubble (about 10 minutes).', type: MAKE_YEAST_MIXTURE },

        { step: 'In a stand mixer, beat the eggs.', type: MAKE_DOUGH },
        { step: 'Add vanilla and evaporate milk. Combine.', type: MAKE_DOUGH },
        { step: 'Add half the flour. Combine.', type: MAKE_DOUGH },
        { step: 'Turn on to low speed and slowly pour the yeast mixture. Combine.', type: MAKE_DOUGH },
        { step: 'Add butter. Combine.', type: MAKE_DOUGH },
        { step: 'Add the last half of the flour and salt. Combine (about 2 minutes).', type: MAKE_DOUGH },
        { step: 'Cover the bowl with plastic wrap. Chill for 2 hours (or up to 24 hours).', type: MAKE_DOUGH },

        { step: 'Line a baking sheet with 3 layers of paper towels and a wire rack.', type: DEEP_FRY },
        { step: 'Over medium-high heat, add 4 inches of oil in a deep pot. Bring it to 360ºF.', type: DEEP_FRY },
        { step: 'Remove the dough from the fridge.', type: DEEP_FRY },
        { step: 'Lightly flour a clean surface, roll out the dough into 1/4 inch thick rectangle.', type: DEEP_FRY },
        { step: 'Cut the dough into 2 1/2 inch squares.', type: DEEP_FRY },
        { step: 'Once the oil has reached 360ºF, you can start deep frying.', type: DEEP_FRY },
        { step: 'In batches, fry the dough until they puff up and are golden brown (about 1 minute).', type: DEEP_FRY },
        { step: 'Transfer the beignets with a slotted spoon to the dripping station.', type: DEEP_FRY },
        { step: 'Continue deep frying the remaining beignets.', type: DEEP_FRY },

        { step: 'Serve right away with powdered sugar.', type: SECTIONS.SERVE },
    ]
};