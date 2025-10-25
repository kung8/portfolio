const rolls1 = '../assets/Products/crescent-rolls-1.jpeg';
const rolls2 = '../assets/Products/crescent-rolls-2.jpeg';
const rolls3 = '../assets/Products/crescent-rolls-3.jpeg';
const rolls4 = '../assets/Products/crescent-rolls-4.jpeg';
const rolls5 = '../assets/Products/crescent-rolls-5.jpeg';
const rolls6 = '../assets/Products/crescent-rolls-6.jpeg';
const rolls7 = '../assets/Products/crescent-rolls-7.jpeg';
const rolls8 = '../assets/Products/crescent-rolls-8.jpeg';
const rolls9 = '../assets/Products/crescent-rolls-9.jpeg';
const rolls10 = '../assets/Products/crescent-rolls-10.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, EGG, EVAPORATED_MILK, MEDIUM_BOWL, MIXING_BOWL, OVEN, SALT, SILICON_BAKING_MAT, UNSALTED_BUTTER, WATER, WHITE_SUGAR, YEAST } = require('./ingredients');

const YEAST_MIXTURE = 'Yeast Mixture';
const LIQUID_MIXTURE = 'Liquid Mixture';

module.exports = {
    cardName: 'Crescent Rolls',
    name: 'Crescent Rolls',
    img: rolls9,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.AUSTRIAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 32, unit: YIELD_UNITS.ROLL },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Grandma Ward'],
            finder: 'Grandma Ward'
        }
    ],
    separated: true,
    ingredients: [
        { ...WATER, amount: 3 / 8, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: YEAST_MIXTURE },
        { ...YEAST, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: YEAST_MIXTURE },
        { ...WHITE_SUGAR, amount: 7, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: YEAST_MIXTURE },

        { ...EVAPORATED_MILK, amount: 1, unit: INGREDIENT_UNITS.CAN, additionalDetails: '', section: LIQUID_MIXTURE },
        { ...WATER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: LIQUID_MIXTURE },

        { ...SALT, amount: 9 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 8, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MEDIUM_BOWL,
        MIXING_BOWL,
        BAKING_SHEET,
        SILICON_BAKING_MAT,
    ],
    directions: [
        { step: `In a medium bowl, combine the "${YEAST_MIXTURE}" section ingredients.`, section: YEAST_MIXTURE },
        { step: 'Let mixture sit for 3 to 5 minutes.', section: YEAST_MIXTURE, img: rolls1 },

        { step: `In a mixing bowl, combine the "${LIQUID_MIXTURE}" section ingredients.`, section: LIQUID_MIXTURE, img: rolls2 },
        { step: 'Add yeast mixture into liquid mixture. Mix.', section: LIQUID_MIXTURE },

        { step: 'Preheat the oven to 325ºF.', section: SECTIONS.MAIN },
        { step: 'Place silicon baking mat on baking sheet.', section: SECTIONS.MAIN },
        { step: 'Add main ingredients to the mixing bowl and combine.', section: SECTIONS.MAIN, img: rolls3 },
        { step: 'Split the dough into four equal parts.', section: SECTIONS.MAIN, img: rolls4 },
        { step: 'Roll out dough into large circles (like pizza dough shape).', section: SECTIONS.MAIN, img: rolls5 },
        { step: 'Cut the dough into eighths (or more depending on the desired size).', section: SECTIONS.MAIN, img: rolls6 },
        { step: 'Separate. Roll each wedge from the outside to the center.', section: SECTIONS.MAIN, img: rolls7 },
        { step: 'Place rolls on prepared baking sheet and let them rise for about 1 hour.', section: SECTIONS.MAIN, img: rolls8 },
        { step: 'Baste with butter.', section: SECTIONS.MAIN },
        { step: 'Bake for 20 minutes.', section: SECTIONS.MAIN },
        { step: 'Eat these rolls warm.', section: SECTIONS.MAIN, img: rolls10 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through (about 2 to 3 minutes from room temperature and 7 to 10 minutes from frozen).',
        },
    ],
    mealPrep: true,
};