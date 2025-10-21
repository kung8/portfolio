const brittle1 = '../assets/Products/peanut-brittle-1.jpeg';
const brittle2 = '../assets/Products/peanut-brittle-2.jpeg';
const brittle3 = '../assets/Products/peanut-brittle-3.jpeg';
const brittle4 = '../assets/Products/peanut-brittle-4.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BAKING_SODA, COOKING_THERMOMETER, CORN_SYRUP, PARCHMENT_PAPER, SAUCEPAN, STOVE, UNSALTED_BUTTER, UNSALTED_PEANUT, VANILLA_EXTRACT, WATER, WHITE_SUGAR } = require('./ingredients');

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
            author: ['Lauren Allen'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: false,
    ingredients: [
        { ...WHITE_SUGAR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: SECTIONS.MAIN },
        { ...CORN_SYRUP, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_PEANUT, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_SODA, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Place parchment paper on a baking sheet.', section: SECTIONS.MAIN },
        { step: 'Over medium heat, combine together sugar and water in a saucepan.', section: SECTIONS.MAIN },
        { step: 'Add in corn syrup. Stirring occasionally and bring to a boil.', section: SECTIONS.MAIN },
        { step: 'Continue to cook until the temperature reading is 250ºF.', section: SECTIONS.MAIN },
        { step: 'Add in peanuts and stir constantly.', section: SECTIONS.MAIN, img: brittle1 },
        { step: 'Remove from heat once the temperature reading is 300ºF. This is really important to evaporate the water from the sugar so that it will harden this dessert.', section: SECTIONS.MAIN },
        { step: 'Immediately mix in butter, baking soda and vanilla extract. It should foam and change texture.', section: SECTIONS.MAIN, img: brittle2 },
        { step: 'Quickly and carefully pour onto the parchment paper and spread to an even layer using a spatula.', section: SECTIONS.MAIN, img: brittle3 },
        { step: 'Let it completely cool (about 30 minutes).', section: SECTIONS.MAIN },
        { step: 'Break apart and share with those you love.', section: SECTIONS.MAIN },
        { step: 'Store in an airtight container at room temperature. Do not refrigerate.', section: SECTIONS.MAIN },
        { step: 'If the peanut brittle is not hard enough there are two solutions that I found: (1) you can bake it in the oven at 300ºF until the edges are brown. Be careful not to burn it and make sure the pan is large enough or else it will spill over. or (2) you can remix the dessert into a pot and reheat until the temperature is 300ºF. Make sure to stir constantly to ensure that it does not burn.', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 6, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
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