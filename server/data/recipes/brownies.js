const plated = '../assets/Products/brownies-plated.jpeg';
const pan = '../assets/Products/brownies-pan.jpeg';
const zoomed = '../assets/Products/brownies-zoomed.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require("./constants");
const {
    MIXING_BOWL,
    UNSALTED_BUTTER,
    WHITE_SUGAR,
    SALT,
    VANILLA_EXTRACT,
    EGG,
    ALL_PURPOSE_FLOUR,
    COCOA_POWDER,
    OVEN,
    BAKING_PAN,
    SPATULA,
} = require('./ingredients');

module.exports = {
    cardName: 'Brownies',
    name: 'Brownies',
    img: plated,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...COCOA_POWDER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 3, unit: INGREDIENT_UNITS.LARGE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Preheat oven to 350ºF.', section: SECTIONS.MAIN },
        { step: 'Grease and add a little cocoa powder on the baking pan.', section: SECTIONS.MAIN },
        { step: 'Melt butter in the microwave.', section: SECTIONS.MAIN },
        { step: 'In a mixing bowl, combine melted butter, cocoa powder, and sugar. Mix well.', section: SECTIONS.MAIN },
        { step: 'Add salt, vanilla, and eggs and mix.', section: SECTIONS.MAIN },
        { step: 'Mix in the flour.', section: SECTIONS.MAIN },
        { step: 'Spread the batter into the baking pan.', section: SECTIONS.MAIN },
        { step: 'Bake for 30 to 35 minutes or until a toothpick comes out clean.', section: SECTIONS.MAIN, img: [pan, zoomed] },
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