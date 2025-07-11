const yeast3 = '../assets/Products/crescent-rolls-yeast-3.jpeg';
const yeast4 = '../assets/Products/crescent-rolls-yeast-4.jpeg';
const yeast5 = '../assets/Products/crescent-rolls-yeast-5.jpeg';
const baked1 = '../assets/Products/crescent-rolls-baked-1.jpeg';
const baked3 = '../assets/Products/crescent-rolls-baked-3.jpeg';
const baked5 = '../assets/Products/crescent-rolls-baked-5.jpeg';
const basted = '../assets/Products/crescent-rolls-basted.jpeg';
const evaporated = '../assets/Products/crescent-rolls-evaporated-milk.jpeg';
const flour = '../assets/Products/crescent-rolls-flour.jpeg';
const plated2 = '../assets/Products/crescent-rolls-plated-2.jpeg';
const rolled = '../assets/Products/crescent-rolls-rolled.jpeg';
const triangleRolled = '../assets/Products/crescent-rolls-triangle-rolled.jpeg';
const triangle = '../assets/Products/crescent-rolls-triangle.jpeg';
const wrapped = '../assets/Products/crescent-rolls-wrapped.jpeg';
const butter = '../assets/Products/crescent-rolls-butter.jpeg';
const salt = '../assets/Products/crescent-rolls-salt.jpeg';
const dough1 = '../assets/Products/crescent-rolls-dough-1.jpeg';
const dough2 = '../assets/Products/crescent-rolls-dough-2.jpeg';
const balls = '../assets/Products/crescent-rolls-dough-balls.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { YEAST, WHITE_SUGAR, EVAPORATED_MILK, SALT, UNSALTED_BUTTER, EGG, ALL_PURPOSE_FLOUR, WATER } = require('./ingredients');

const YEAST_MIXTURE = 'Yeast Mixture';
const LIQUID_MIXTURE = 'Liquid Mixture';

module.exports = {
    cardName: 'Crescent Rolls',
    name: 'Crescent Rolls',
    img: baked3,
    available: true,
    recipeAuthor: 'Grandma Ward',
    recipeFinder: 'Grandma Ward',
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.AUSTRIAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: { amount: 32, unit: YIELD_UNITS.ROLL },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
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
        { name: 'oven' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'mixing bowl' },
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
    ],
    directions: [
        { step: 'Combine ingredients in medium bowl.', section: YEAST_MIXTURE, img: [yeast3, yeast4] },
        { step: 'Let mixture sit for 3 to 5 minutes.', section: YEAST_MIXTURE, img: yeast5 },
        { step: 'Combine ingredients in mixing bowl.', section: LIQUID_MIXTURE, img: evaporated },
        { step: 'Add yeast mixture into liquid mixture. Mix.', section: LIQUID_MIXTURE },
        { step: 'Preheat the oven to 325ºF.', section: SECTIONS.MAIN },
        { step: 'Place silicon baking mat on baking sheet.', section: SECTIONS.MAIN },
        { step: 'Add main ingredients to the mixing bowl and combine.', section: SECTIONS.MAIN, img: [butter, salt, flour, dough1, dough2] },
        { step: 'Split the dough into four equal parts.', section: SECTIONS.MAIN, img: balls },
        { step: 'Roll out dough into large circles (like pizza dough shape).', section: SECTIONS.MAIN, img: rolled },
        { step: 'Cut the dough into eighths (or more depending on the desired size).', section: SECTIONS.MAIN, img: triangle },
        { step: 'Separate. Roll each wedge from the outside to the center.', section: SECTIONS.MAIN, img: triangleRolled },
        { step: 'Place rolls on prepared baking sheet and let them rise for about 1 hour.', section: SECTIONS.MAIN, img: wrapped },
        { step: 'Baste with butter.', section: SECTIONS.MAIN, img: basted },
        { step: 'Bake for 20 minutes.', section: SECTIONS.MAIN, img: [baked1, baked5] },
        { step: 'Eat these rolls warm.', section: SECTIONS.MAIN, img: plated2 },
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