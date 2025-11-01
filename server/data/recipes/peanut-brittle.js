const brittle1 = '../assets/Products/peanut-brittle-1.jpeg';
const brittle2 = '../assets/Products/peanut-brittle-2.jpeg';
const brittle3 = '../assets/Products/peanut-brittle-3.jpeg';
const brittle4 = '../assets/Products/peanut-brittle-4.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BAKING_SODA, COOKING_THERMOMETER, CORN_SYRUP, PARCHMENT_PAPER, SAUCEPAN, STOVE, UNSALTED_BUTTER, UNSALTED_PEANUT, VANILLA_EXTRACT, WATER, WHITE_SUGAR } = require('./ingredients');

const SUGARS_SECTION = 'Sugars';
const PEANUTS_SECTION = 'Peanuts';
const FOAM_SECTION = 'Foam';

const COOK_SUGARS = 'Cook Sugars';
const COOK_PEANUTS = 'Cook Peanuts';
const CREATE_FOAM = 'Create Foam';
const FORM_BRITTLE = 'Form Brittle';

module.exports = {
    cardName: 'Peanut Brittle',
    name: 'Peanut Brittle',
    img: brittle4,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 50, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Peanut Brittle',
            link: "https://tastesbetterfromscratch.com/peanut-brittle/",
            authors: ['Lauren Allen'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGARS_SECTION },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SUGARS_SECTION },
        { ...CORN_SYRUP, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGARS_SECTION },

        { ...UNSALTED_PEANUT, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: PEANUTS_SECTION },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: FOAM_SECTION },
        { ...BAKING_SODA, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FOAM_SECTION },
        { ...VANILLA_EXTRACT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FOAM_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        BAKING_SHEET,
        PARCHMENT_PAPER,
        SAUCEPAN,
        COOKING_THERMOMETER,
    ],
    directions: [
        { step: `Place parchment paper on a baking sheet.`, section: COOK_SUGARS },
        { step: `Over medium heat, mix sugar and water in a saucepan.`, section: COOK_SUGARS },
        { step: `Add in corn syrup. Stirring occasionally and bring to a boil.`, section: COOK_SUGARS },
        { step: `Continue to cook until the temperature reading is 250ºF.`, section: COOK_SUGARS },

        { step: `Add in peanuts and stir constantly.`, section: COOK_PEANUTS, img: brittle1 },
        { step: `Remove from heat once the temperature reading is 300ºF. This is really important to evaporate the water from the sugar so that it will harden this dessert.`, section: COOK_PEANUTS },

        { step: `Immediately mix in butter, baking soda and vanilla extract. It should foam and change texture.`, section: CREATE_FOAM, img: brittle2 },

        { step: `Quickly and carefully pour onto the parchment paper and spread to an even layer using a spatula.`, section: FORM_BRITTLE, img: brittle3 },
        { step: `Let it completely cool (about 30 minutes).`, section: FORM_BRITTLE },

        { step: `Break apart and share with those you love.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'If the peanut brittle is not hard enough there are two solutions that I found: (1) you can bake it in the oven at 300ºF until the edges are brown. Be careful not to burn it and make sure the pan is large enough or else it will spill over. or (2) you can remix the dessert into a pot and reheat until the temperature is 300ºF. Make sure to stir constantly to ensure that it does not burn.' }
    ],
    store: [
        {
            duration: { amount: 6, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store in an airtight container at room temperature. Do not refrigerate.',
        },
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.MONTH },
            location: STORAGE_LOCATION.FREEZER,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};