const brownies1 = '../assets/Products/brownies-1.jpeg';
const brownies2 = '../assets/Products/brownies-2.jpeg';
const brownies3 = '../assets/Products/brownies-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    ALL_PURPOSE_FLOUR,
    BAKING_PAN,
    COCOA_POWDER,
    EGG,
    MIXING_BOWL,
    OVEN,
    SALT,
    SPATULA,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
    WHITE_SUGAR,
} = require('./ingredients');

const BROWNIES_SECTION = 'Brownies';

module.exports = {
    cardName: 'Brownies',
    name: 'Brownies',
    img: brownies3,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BROWNIES_SECTION },
        { ...COCOA_POWDER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BROWNIES_SECTION },
        { ...WHITE_SUGAR, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BROWNIES_SECTION },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BROWNIES_SECTION },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BROWNIES_SECTION },
        { ...EGG, amount: 3, unit: INGREDIENT_UNITS.LARGE, additionalDetails: '', section: BROWNIES_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BROWNIES_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_PAN,
        SPATULA,
    ],
    directions: [
        { step: `Preheat oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        
        { step: `Grease and add a little cocoa powder on the baking pan.`, section: SECTIONS.PREP_PAN },
        
        { step: `Melt butter in the microwave.`, section: SECTIONS.PREP_BATTER },
        { step: `In a mixing bowl, combine melted butter, cocoa powder, and sugar. Mix well.`, section: SECTIONS.PREP_BATTER },
        { step: `Add salt, vanilla, and eggs. Mix.`, section: SECTIONS.PREP_BATTER },
        { step: `Mix in the flour.`, section: SECTIONS.PREP_BATTER },
        { step: `Spread the batter into the baking pan.`, section: SECTIONS.PREP_BATTER },
        
        { step: `Bake until an inserted toothpick comes out clean (about 30 to 35 minutes).`, section: SECTIONS.BAKE, img: [brownies1, brownies2] },

        { step: `Enjoy these sweets!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};