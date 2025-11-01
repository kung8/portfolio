const biscuits1 = '../assets/Products/ted-lasso-biscuits-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_PAN,
    MIXING_BOWL,
    OVEN,
    POWDERED_SUGAR,
    REFRIGERATOR,
    SALT,
    STAND_MIXER,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
} = require('./ingredients');

module.exports = {
    cardName: 'Ted Lasso Biscuits',
    name: 'Ted Lasso Biscuits',
    img: biscuits1,
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
        {
            label: 'Ted Lasso',
            link: 'https://www.thekitchn.com/the-official-ted-lasso-biscuit-recipe-23211497',
            authors: ['Laurel Randolph'],
            finder: 'Justin Ung',
        },
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'at room temperature', section: SECTIONS.BATTER },
        { ...POWDERED_SUGAR, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BATTER },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BATTER },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BATTER },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BATTER },
    ],
    appliances: [
        STAND_MIXER,
        REFRIGERATOR,
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
    ],
    directions: [
        { step: 'In a stand mixer, beat the butter until fluffy (about 3 to 5 minutes).', section: SECTIONS.PREP_BATTER },
        { step: 'Gradually add powdered sugar while butter is mixing.', section: SECTIONS.PREP_BATTER },
        { step: 'Add flour and salt. Mix on low.', section: SECTIONS.PREP_BATTER },
        { step: 'Pour batter into the baking pan.', section: SECTIONS.PREP_BATTER },
        { step: 'Refrigerate for about 30 minutes.', section: SECTIONS.PREP_BATTER },
        { step: 'Slice into rectangles.', section: SECTIONS.PREP_BATTER },

        { step: 'Preheat the oven to 300ºF.', section: SECTIONS.PREHEAT_OVEN },

        { step: 'Bake until golden brown (about 45 to 60 minutes).', section: SECTIONS.BAKE },

        { step: 'Enjoy these biscuits while you watch or re-watch the Ted Lasso television show. Cheers!', section: SECTIONS.SERVE },
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