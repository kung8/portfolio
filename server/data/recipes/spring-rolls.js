// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { APPLE_CIDER_VINEGAR, BAKING_SHEET, BROWN_SUGAR, CABBAGE, CARROT, COOLING_RACK, CORNSTARCH, GARLIC, GROUND_PORK, KETCHUP, LIGHT_SOY_SAUCE, OYSTER_SAUCE, PAPER_TOWELS, SAUCEPAN, SPRING_ROLL_WRAPPER, STOVE, VEGETABLE_OIL, WATER, WOK } = require('./ingredients');

const SWEET_AND_SOUR_SAUCE_SECTION = 'Sweet and Sour Sauce';

module.exports = {
    wip: true,
    cardName: 'Spring Rolls',
    name: 'Spring Rolls',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.CHINESE],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.FINGER_FOOD],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 20, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Spring Rolls', 
            link: 'https://www.recipetineats.com/spring-rolls/',
            authors: ['Nagi Maehashi'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...GROUND_PORK, amount: 13, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CARROT, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.FILLING },
        { ...CABBAGE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.FILLING },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...OYSTER_SAUCE, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },

        { ...SPRING_ROLL_WRAPPER, amount: 20, unit: '', additionalDetails: '', section: SECTIONS.ASSEMBLY },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.ASSEMBLY },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.ASSEMBLY },

        { ...CORNSTARCH, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE_SECTION },
        { ...APPLE_CIDER_VINEGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE_SECTION },
        { ...BROWN_SUGAR, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE_SECTION },
        { ...KETCHUP, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SWEET_AND_SOUR_SAUCE_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
        BAKING_SHEET,
        COOLING_RACK,
        PAPER_TOWELS,
        SAUCEPAN,
    ],
    directions: [
        { step: `Over high heat, heat oil in a wok.`, section: SECTIONS.COOK_FILLING },
        { step: `Add garlic. Stir and cook for 30 seconds.`, section: SECTIONS.COOK_FILLING },
        { step: `Add pork. Cook until it turns white.`, section: SECTIONS.COOK_FILLING },
        { step: `Add carrots and cabbage. Cook until veggies wilt (about 3 minutes).`, section: SECTIONS.COOK_FILLING },
        { step: `Add cornstarch, oyster and soy sauce. Cook until liquid is gone (about 1 minute).`, section: SECTIONS.COOK_FILLING },
        { step: `Let filling cool.`, section: SECTIONS.COOK_FILLING },

        { step: `Place wrapper with a corner facing you.`, section: SECTIONS.ASSEMBLE },
        { step: `Place a spoonful of filling about 1 inch from corner nearest you.`, section: SECTIONS.ASSEMBLE },
        { step: `Roll wrapper to about the middle.`, section: SECTIONS.ASSEMBLE },
        { step: `Fold the sides over.`, section: SECTIONS.ASSEMBLE },
        { step: `Lightly brush the edges of the wrapper with water.`, section: SECTIONS.ASSEMBLE },
        { step: `Set aside each wrapped spring roll.`, section: SECTIONS.ASSEMBLE },

        { step: `Heat at least enough oil for double the height of the oil.`, section: SECTIONS.DEEP_FRY },
        { step: `Place 2 layers of paper towels on top of a baking sheet and then place the cooling rack on top of the paper towels.`, section: SECTIONS.DEEP_FRY },
        { step: `Deep fry spring rolls, 4 to 5 at a time, until golden brown (about 1 1/2 to 2 minutes).`, section: SECTIONS.DEEP_FRY },
        { step: `Transfer to the draining station.`, section: SECTIONS.DEEP_FRY },

        { step: `Over medium heat, combine all the "${SWEET_AND_SOUR_SAUCE_SECTION}" section ingredients in a saucepan.`, section: SECTIONS.COOK_SAUCE },
        { step: `Bring to a simmer.`, section: SECTIONS.COOK_SAUCE },
        { step: `Stir and simmer until it thickens (about 3 to 5 minutes).`, section: SECTIONS.COOK_SAUCE },

        { step: `Enjoy these spring rolls with the sweet and sour sauce.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Filling needs to cool before assembling the spring rolls so it does not burst.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Eat these fresh. Freeze uncooked spring rolls in a single layer.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 400ºF until heated through (about 5 minutes).',
        },
    ],
    mealPrep: false,
};