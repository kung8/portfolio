// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BAKING_SHEET,
    BASTING_BRUSH,
    BOWL,
    CINNAMON,
    HAWAIIAN_ROLLS,
    MIXING_BOWL,
    OVEN,
    SPOON,
    UNSALTED_BUTTER,
    WHITE_SUGAR,
    APPLE_PIE_FILLING,
    APPLE_CIDER_MIX,
    SILICONE_BAKING_MAT,
} = require('./ingredients');

const SUGAR_MIXTURE = 'Sugar Mixture';

module.exports = {
    wip: true,
    cardName: 'Apple Cider Donuts',
    name: 'Apple Cider Hawaiian Roll Donuts',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT],
    allergies: [ALLERGIES.GLUTEN, ALLERGIES.WHEAT, ALLERGIES.DAIRY, ALLERGIES.EGG],
    diet: [DIET.VEGETARIAN, DIET.NO_PORK, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Apple Cider Hawaiian Roll Donuts',
            link: 'https://www.allrecipes.com/apple-cider-hawaiian-roll-donuts-recipe-11786958',
            authors: ['Nicole McLaughlin'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...HAWAIIAN_ROLLS, amount: 1, unit: INGREDIENT_UNITS.PACKAGE, additionalDetails: '12-count', section: SECTIONS.BREAD },

        { ...APPLE_PIE_FILLING, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...APPLE_CIDER_MIX, amount: 0.74, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },

        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BUTTER },

        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...APPLE_CIDER_MIX, amount: 0.74, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.TOPPINGS },

        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        SILICONE_BAKING_MAT,
        BASTING_BRUSH,
        BOWL,
        MIXING_BOWL,
        SPOON,
    ],
    directions: [
        { step: `Preheat the oven to 350°F.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line a baking sheet with a silicon baking mat.`, section: SECTIONS.PREP_PAN },

        { step: `Roughly chop the apple pie filling.`, section: SECTIONS.PREP_FILLING },
        { step: `In a bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.PREP_FILLING },

        { step: `Separate Hawaiian rolls.`, section: SECTIONS.PREP_ROLLS },
        { step: `Create a hole in the side of each roll, large enough for about a tablespoon of filling.`, section: SECTIONS.PREP_ROLLS },
        { step: `Add a spoonful of filling in each roll.`, section: SECTIONS.PREP_ROLLS },
        { step: `Melt butter.`, section: SECTIONS.PREP_ROLLS },
        { step: `Brush butter on all sides of the roll with a basting brush.`, section: SECTIONS.PREP_ROLLS },
        { step: `Place rolls on a lined baking sheet.`, section: SECTIONS.PREP_ROLLS },

        { step: `Bake until golden brown (about 12 to 14 minutes).`, section: SECTIONS.BAKE },

        { step: `In a medium bowl, combine the "${SUGAR_MIXTURE}" section ingredients.`, section: SECTIONS.TOP },
        { step: `Melt butter.`, section: SECTIONS.TOP },
        { step: `Brush tops of rolls with melted butter.`, section: SECTIONS.TOP },
        { step: `Coat each roll in sugar mixture.`, section: SECTIONS.TOP },

        { step: `Serve warm and enjoy these delightful apple cider donuts!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave for 10-15 seconds to warm through.',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 300°F oven until heated through (about 3 to 5 minutes from room temperature or about 10 to 15 minutes from fridge).',
        },
    ],
    mealPrep: false,
};