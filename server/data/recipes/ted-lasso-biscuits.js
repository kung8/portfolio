const biscuits = '../assets/Products/ted-lasso-biscuits.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_PAN,
    MIXING_BOWL,
    OVEN,
    POWDERED_SUGAR,
    SALT,
    STAND_MIXER,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
} = require('./ingredients');

module.exports = {
    cardName: 'Lasso Biscuits',
    name: 'Ted Lasso Biscuits',
    img: biscuits,
    recipeAuthors: ['Laurel Randolph'],
    recipeFinder: 'Justin Ung',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BISCUIT, TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 15, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 60, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Ted Lasso', link: 'https://www.thekitchn.com/the-official-ted-lasso-biscuit-recipe-23211497' },
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'at room temperature', section: SECTIONS.MAIN },
        { ...POWDERED_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN,
        STAND_MIXER,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_PAN,
    ],
    directions: [
        { step: 'Place butter in mixing bowl and beat until fluffy (about 3 to 5 minutes).', section: SECTIONS.MAIN },
        { step: 'Gradually add powdered sugar while butter is mixing.', section: SECTIONS.MAIN },
        { step: 'Add flour and salt to the bowl and continue mixing on low speed.', section: SECTIONS.MAIN },
        { step: 'Pour batter into the baking pan and refrigerate for about 30 minutes.', section: SECTIONS.MAIN },
        { step: 'Slice into rectangles.', section: SECTIONS.MAIN },
        { step: 'Preheat the oven to 300ºF whenever ready to bake.', section: SECTIONS.MAIN },
        { step: 'Bake until the biscuits are golden brown (about 45 to 60 minutes).', section: SECTIONS.MAIN },
        { step: 'Enjoy these biscuits while you watch or re-watch the Ted Lasso television show. Cheers!', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: false,
};