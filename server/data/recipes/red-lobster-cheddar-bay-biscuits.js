const biscuits1 = '../assets/Products/red-lobster-cheddar-bay-biscuits-1.jpeg';
const biscuits2 = '../assets/Products/red-lobster-cheddar-bay-biscuits-2.jpeg';
const biscuits3 = '../assets/Products/red-lobster-cheddar-bay-biscuits-3.jpeg';
const biscuits4 = '../assets/Products/red-lobster-cheddar-bay-biscuits-4.jpeg';
const biscuits5 = '../assets/Products/red-lobster-cheddar-bay-biscuits-5.jpeg';
const biscuits6 = '../assets/Products/red-lobster-cheddar-bay-biscuits-6.jpeg';
const biscuits7 = '../assets/Products/red-lobster-cheddar-bay-biscuits-7.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BAKING_POWDER, BAKING_SHEET, BASTING_BRUSH, CHEDDAR_CHEESE, COOKING_SPRAY, GARLIC_POWDER, MILK, MIXING_BOWL, OVEN, PARSLEY, SALT, STAND_MIXER, UNSALTED_BUTTER } = require('./ingredients');

const FIRST_MIX_SECTION = 'First Mix';
const SECOND_MIX_SECTION = 'Second Mix';
const BUTTER_WASH_SECTION = 'Butter Wash';

const PREP_BATTER = 'Prep Batter';
const MAKE_BUTTER_WASH = 'Make Butter Wash';
const BAKE_BISCUITS = 'Bake Biscuits';

module.exports = {
    cardName: 'Cheddar Bay Biscuits',
    name: 'Red Lobster Cheddar Bay Biscuits',
    img: biscuits7,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.SIDE_DISH, TYPES.FINGER_FOOD],
    yields: { amount: 12, unit: YIELD_UNITS.ROLL },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Red Lobster Cheddar Bay Biscuits', 
            link: 'https://www.mashed.com/76272/red-lobster-cheddar-bay-biscuits-recipe/',
            authors: ['Jake Vigliotti'],
            finder: 'Justin Ung', 
        }
    ],
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FIRST_MIX_SECTION },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FIRST_MIX_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FIRST_MIX_SECTION },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FIRST_MIX_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold and cut into 1/2" slices', section: FIRST_MIX_SECTION },

        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECOND_MIX_SECTION },
        { ...CHEDDAR_CHEESE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECOND_MIX_SECTION },

        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BUTTER_WASH_SECTION },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BUTTER_WASH_SECTION },

        { ...PARSLEY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
    ],
    supplies: [
        BAKING_SHEET,
        COOKING_SPRAY,
        MIXING_BOWL,
        BASTING_BRUSH,
    ],
    directions: [
        { step: `Preheat the oven to 450ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Lightly grease a baking sheet with cooking spray.`, section: PREP_BATTER },
        { step: `In a mixing bowl, combine the "${FIRST_MIX_SECTION}" section ingredients.`, section: PREP_BATTER },
        { step: `Mix until flaky and small balls form.`, section: PREP_BATTER, img: biscuits1 },
        { step: `Slowly add milk while stirring.`, section: PREP_BATTER, img: biscuits2 },
        { step: `Slowly add cheese.`, section: PREP_BATTER, img: biscuits3 },
        { step: `Form 1.5 inch balls and place them on the baking sheet.`, section: PREP_BATTER },

        { step: `Melt the butter either in the microwave or over low heat.`, section: MAKE_BUTTER_WASH },
        { step: `Add the garlic powder. Mix.`, section: MAKE_BUTTER_WASH },
        { step: `Brush the tops of each biscuit with the butter wash. Keep remaining butter wash for later.`, section: MAKE_BUTTER_WASH, img: biscuits4 },

        { step: `Bake until a toothpick comes out clean (about 10 to 12 minutes).`, section: BAKE_BISCUITS, img: biscuits5 },
        { step: `Add parsley to the melted butter.`, section: BAKE_BISCUITS, img: biscuits6 },
        { step: `Brush hot biscuits with more butter wash.`, section: BAKE_BISCUITS, img: biscuits6 },

        { step: `Enjoy these Red Lobster copycats!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until warmed through (about 5 to 10 minutes).',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Cover with a wet paper towel and microwave until warmed through (about 50 seconds).',
        },
    ],
    mealPrep: false,
};