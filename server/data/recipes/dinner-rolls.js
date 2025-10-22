const rolls1 = '../assets/Products/dinner-rolls-1.jpeg';
const rolls2 = '../assets/Products/dinner-rolls-2.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_SHEET, EGG, MIXING_BOWL, OVEN, SALT, SILICON_BAKING_MAT, SPATULA, VEGETABLE_OIL, WATER, WHITE_SUGAR, YEAST } = require('./ingredients');

const YEAST_MIXTURE = 'Yeast Mixture';
const SUGAR_MIXTURE = 'Sugar Mixture';
const EGGS_SECTION = 'Egg';

module.exports = {
    cardName: 'Dinner Rolls',
    name: 'Dinner Rolls',
    img: rolls2,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    allergies: [ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 2, unit: YIELD_UNITS.DOZEN },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            author: ['Nanette Marx'],
            finder: 'Nanette Marx'
        }
    ],
    separated: true,
    ingredients: [
        { ...YEAST, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: YEAST_MIXTURE },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: YEAST_MIXTURE },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },
        { ...VEGETABLE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SUGAR_MIXTURE },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: EGGS_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 9 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        SPATULA,
        SILICON_BAKING_MAT,
        BAKING_SHEET,
    ],
    directions: [
        { step: 'In a small bowl, combine the "Yeast Mixture" ingredients.', section: YEAST_MIXTURE },
        { step: 'Let sit while preparing the other ingredients.', section: YEAST_MIXTURE },
        { step: 'In a mixing bowl, combine the "Sugar Mixture" ingredients.', section: SUGAR_MIXTURE },
        { step: 'In another small bowl, beat eggs.', section: EGGS_SECTION },
        { step: 'In the mixing bowl (Sugar Mixture), add the yeast mixture and the beaten eggs.', section: SECTIONS.DOUGH },
        { step: 'Add salt. Mix.', section: SECTIONS.DOUGH },
        { step: 'Mix in 4 cups of flour. If it is still wet, add up to 1/2 cup more flour (1/4 cup at a time).', section: SECTIONS.DOUGH },
        { step: 'Let it double in size (about 1 hour).', section: SECTIONS.DOUGH },
        { step: 'Preheat the oven to 375ºF.', section: SECTIONS.DOUGH },
        { step: 'Line a baking sheet with a silicon baking mat.', section: SECTIONS.DOUGH },
        { step: 'Roll out the dough on a lightly floured surface.', section: SECTIONS.DOUGH },
        { step: 'Form into rolls and place them on the baking sheet.', section: SECTIONS.DOUGH, img: rolls1 },
        { step: 'Bake for until golden brown (about 12 to 15 minutes).', section: SECTIONS.DOUGH },
        { step: 'Let cool for a few minutes.', section: SECTIONS.DOUGH },
        { step: 'Enjoy these delicious homemade rolls with any meal and on any occasion.', section: SECTIONS.DOUGH },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'From frozen. Wrap in foil and bake at 350ºF until heated through (about 7 to 10 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'From fridge or room temperature. Wrap in damp paper towel, microwave in 20 to 30 second intervals until warm through.',
        },
    ],
    mealPrep: true,
};