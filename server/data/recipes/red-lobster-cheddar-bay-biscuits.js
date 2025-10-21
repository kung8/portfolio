// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, ALUMINUM_FOIL, BAKING_POWDER, BAKING_SHEET, BASTING_BRUSH, CHEDDAR_CHEESE, GARLIC_POWDER, MILK, MIXING_BOWL, OVEN, PARSLEY, SALT, UNSALTED_BUTTER } = require('./ingredients');

const FIRST_MIX_SECTION = 'First Mix';
const SECOND_MIX_SECTION = 'Second Mix';
const BUTTER_WASH_SECTION = 'Butter Wash';

const PREP_BATTER = 'Prep Batter';
const MAKE_BUTTER_WASH = 'Make Butter Wash';
const BAKE_BISCUITS = 'Bake Biscuits';

module.exports = {
    wip: true,
    cardName: 'Cheddar Bay Biscuits',
    name: 'Red Lobster Cheddar Bay Biscuits',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.SIDE_DISH, TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 12, unit: YIELD_UNITS.ROLL },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Red Lobster Cheddar Bay Biscuits', 
            link: 'https://www.mashed.com/76272/red-lobster-cheddar-bay-biscuits-recipe/',
            author: ['Jake Vigliotti'],
            finder: 'Justin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FIRST_MIX_SECTION },
        { ...BAKING_POWDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FIRST_MIX_SECTION },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FIRST_MIX_SECTION },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FIRST_MIX_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FIRST_MIX_SECTION },

        { ...MILK, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECOND_MIX_SECTION },
        { ...CHEDDAR_CHEESE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECOND_MIX_SECTION },

        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BUTTER_WASH_SECTION },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BUTTER_WASH_SECTION },

        { ...PARSLEY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        ALUMINUM_FOIL,
        BAKING_SHEET,
        MIXING_BOWL,
        BASTING_BRUSH,
    ],
    directions: [
        { step: 'Preheat the oven to 450ºF.', section: PREP_BATTER },
        { step: 'Line a baking sheet with aluminum foil.', section: PREP_BATTER },
        { step: `In a mixing bowl, combine the "${FIRST_MIX_SECTION}" section ingredients.`, section: PREP_BATTER },
        { step: 'Mix until flaky and small balls form.', section: PREP_BATTER },
        { step: 'Slowly add milk while stirring.', section: PREP_BATTER },
        { step: 'Slowly add cheese.', section: PREP_BATTER },
        { step: 'Form 12 small balls and place them on the baking sheet.', section: PREP_BATTER },

        { step: 'Melt the butter either in the microwave or over low heat.', section: MAKE_BUTTER_WASH },
        { step: 'Add the garlic powder. Mix.', section: MAKE_BUTTER_WASH },
        { step: 'Brush the tops of each biscuit with the butter wash. Keep remaining butter wash for later.', section: MAKE_BUTTER_WASH },

        { step: 'Bake until a toothpick comes out clean (about 10 to 12 minutes).', section: BAKE_BISCUITS },
        { step: 'Coat with more butter wash.', section: BAKE_BISCUITS },

        { step: 'Enjoy these Red Lobster copycats topped with parsley.', section: SECTIONS.SERVE },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};