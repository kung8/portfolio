const beignets1 = '../assets/Products/beignets-1.jpeg';
const beignets2 = '../assets/Products/beignets-2.jpeg';
const beignets3 = '../assets/Products/beignets-3.jpeg';
const beignets4 = '../assets/Products/beignets-4.jpeg';
const beignets5 = '../assets/Products/beignets-5.jpeg';
const beignets6 = '../assets/Products/beignets-6.jpeg';
const beignets7 = '../assets/Products/beignets-7.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BREAD_FLOUR, COOKING_THERMOMETER, COOLING_RACK, EGG, EVAPORATED_MILK, MIXING_BOWL, PAPER_TOWELS, PEANUT_OIL, PLASTIC_WRAP, POWDERED_SUGAR, SALT, SLOTTED_SPOON, STAND_MIXER, STOVE, TALL_NARROW_POT, UNSALTED_BUTTER, VANILLA_EXTRACT, WATER, WHITE_SUGAR, YEAST } = require('./ingredients');

const YEAST_MIXTURE_SECTION = 'Yeast Mixture';
const DOUGH_SECTION = 'Dough';

const MAKE_YEAST_MIXTURE = 'Make Yeast Mixture';
const MAKE_DOUGH = 'Make Dough';
const DEEP_FRY = 'Deep Fry';

module.exports = {
    cardName: 'Beignets',
    name: 'Beignets',
    img: beignets7,
    available: true,
    recommended: true,
    category: [CATEGORIES.BREAKFAST, CATEGORIES.DESSERT],
    genre: [GENRES.FRENCH],
    method: [METHODS.DEEP_FRY],
    type: [TYPES.DESSERT],
    yields: { amount: 3, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 130, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Beignets',
            link: 'https://bakerbynature.com/new-orleans-style-beignets/',
            authors: ['Ashley Manila'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...WATER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: YEAST_MIXTURE_SECTION },
        { ...WHITE_SUGAR, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: YEAST_MIXTURE_SECTION },
        { ...YEAST, amount: 9 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: YEAST_MIXTURE_SECTION },

        { ...EGG, amount: 2, unit: '', additionalDetails: 'room temperature', section: DOUGH_SECTION },
        { ...EVAPORATED_MILK, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DOUGH_SECTION },
        { ...VANILLA_EXTRACT, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },
        { ...BREAD_FLOUR, amount: 3.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'first', section: DOUGH_SECTION },
        { ...UNSALTED_BUTTER, amount: 5, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'room temperature', section: DOUGH_SECTION },
        { ...BREAD_FLOUR, amount: 3.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'second', section: DOUGH_SECTION },
        { ...SALT, amount: 1.5, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DOUGH_SECTION },

        { ...PEANUT_OIL, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DEEP_FRY },
        { ...POWDERED_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
        STAND_MIXER,
    ],
    supplies: [
        MIXING_BOWL,
        PLASTIC_WRAP,
        BAKING_SHEET,
        PAPER_TOWELS,
        TALL_NARROW_POT,
        COOKING_THERMOMETER,
        COOLING_RACK,
        SLOTTED_SPOON,
    ],
    directions: [
        { step: `In a mixing bowl, combine together the "${YEAST_MIXTURE_SECTION}" section ingredients.`, section: MAKE_YEAST_MIXTURE },
        { step: `Set aside and let the mixture bubble (about 10 minutes).`, section: MAKE_YEAST_MIXTURE, img: beignets1 },

        { step: `In a stand mixer, beat the eggs.`, section: MAKE_DOUGH },
        { step: `Add vanilla and evaporate milk. Combine.`, section: MAKE_DOUGH },
        { step: `Add the first flour. Combine.`, section: MAKE_DOUGH },
        { step: `Turn on to low speed and slowly pour the yeast mixture. Combine.`, section: MAKE_DOUGH },
        { step: `Add butter. Combine.`, section: MAKE_DOUGH, img: beignets2 },
        { step: `Add the last half of the flour and salt. Combine (about 2 minutes).`, section: MAKE_DOUGH },
        { step: `Cover the bowl with plastic wrap. Chill for 2 hours (or up to 24 hours).`, section: MAKE_DOUGH, img: beignets3 },

        { step: `Line a baking sheet with 3 layers of paper towels and a wire rack.`, section: DEEP_FRY },
        { step: `Over medium-high heat, add 4 inches of oil to a deep pot. Bring it to 360ºF.`, section: DEEP_FRY },
        { step: `Remove the dough from the fridge.`, section: DEEP_FRY },
        { step: `Lightly flour a clean surface, roll out the dough into 1/4 inch thick rectangle.`, section: DEEP_FRY },
        { step: `Cut the dough into 2 1/2 inch squares.`, section: DEEP_FRY, img: beignets4 },
        { step: `Once the oil has reached 360ºF, you can start deep frying.`, section: DEEP_FRY },
        { step: `In batches, add up to 6 beignets at a time. The beignets will sink to the bottom. Slightly poke each beignet to get it to float up.`, section: DEEP_FRY, img: beignets5 },
        { step: `Periodically check one beignet to see if the bottom is golden brown. Place a chopstick in each hand and put one on top and one on bottom of the beignet. Carefully push and pull in a circular motion to flip.`, section: DEEP_FRY, img: beignets6 },
        { step: `Transfer the beignets with a slotted spoon to the dripping station.`, section: DEEP_FRY },
        { step: `Continue deep frying the remaining beignets.`, section: DEEP_FRY },

        { step: `Serve right away with powdered sugar.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Something about poking beignets get them to float up.' },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through (about 3 to 5 minutes).',
        },
    ],
    mealPrep: false,
};