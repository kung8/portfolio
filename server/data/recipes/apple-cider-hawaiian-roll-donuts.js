const donuts1 = '../assets/Products/apple-cider-hawaiian-roll-donuts-1.jpeg';
const donuts2 = '../assets/Products/apple-cider-hawaiian-roll-donuts-2.jpeg';
const donuts3 = '../assets/Products/apple-cider-hawaiian-roll-donuts-3.jpeg';
const donuts4 = '../assets/Products/apple-cider-hawaiian-roll-donuts-4.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    APPLE_CIDER_MIX,
    APPLE_PIE_FILLING,
    BAKING_SHEET,
    BASTING_BRUSH,
    CINNAMON,
    HAWAIIAN_ROLLS,
    MEDIUM_BOWL,
    MIXING_BOWL,
    OVEN,
    SILICONE_BAKING_MAT,
    UNSALTED_BUTTER,
    WHITE_SUGAR,
} = require('./ingredients');

module.exports = {
    cardName: 'Apple Cider Donuts',
    name: 'Apple Cider Hawaiian Roll Donuts',
    img: donuts3,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD, TYPES.DESSERT],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Apple Cider Hawaiian Roll Donuts',
            link: 'https://www.allrecipes.com/apple-cider-hawaiian-roll-donuts-recipe-11786958',
            authors: ['Nicole McLaughlin'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...HAWAIIAN_ROLLS, amount: 12, unit: '', additionalDetails: '', section: SECTIONS.BREAD },

        { ...APPLE_PIE_FILLING, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...APPLE_CIDER_MIX, amount: 0.37, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },

        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BUTTER },

        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CINNAMON, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...APPLE_CIDER_MIX, amount: 0.37, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        SILICONE_BAKING_MAT,
        MIXING_BOWL,
        { ...MEDIUM_BOWL, amount: 2 },
        BASTING_BRUSH,
    ],
    directions: [
        { step: `Preheat the oven to 350°F.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line a baking sheet with a silicon baking mat.`, section: SECTIONS.PREP_PAN },

        { step: `Roughly chop the apple pie filling.`, section: SECTIONS.PREP_FILLING },
        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.PREP_FILLING, img: donuts1 },

        { step: `Separate Hawaiian rolls.`, section: SECTIONS.PREP_ROLLS },
        { step: `Create a hole in the side of each roll, large enough for about a tablespoon of filling.`, section: SECTIONS.PREP_ROLLS },
        { step: `Add a spoonful of filling in each roll.`, section: SECTIONS.PREP_ROLLS },
        { step: `Melt butter.`, section: SECTIONS.PREP_ROLLS },
        { step: `Brush butter on all sides of the roll with a basting brush.`, section: SECTIONS.PREP_ROLLS },
        { step: `Place rolls on a lined baking sheet.`, section: SECTIONS.PREP_ROLLS, img: donuts2 },
        
        { step: `Bake until golden brown (about 10 minutes).`, section: SECTIONS.BAKE },
        
        { step: `In a medium bowl, combine the "${SECTIONS.TOPPINGS}" section ingredients.`, section: SECTIONS.COAT },
        { step: `Immediately after removing rolls from the oven, brush the rolls with leftover melted butter.`, section: SECTIONS.COAT },
        { step: `Coat each roll with the sugar mixture.`, section: SECTIONS.COAT },

        { step: `Serve warm and enjoy these delightful apple cider donuts!`, section: SECTIONS.SERVE, img: donuts4 },
    ],
    notes: [
        { note: `The original recipe did the coating after baking, but I accidentally did it before baking and it turned out great!` },
        { note: `Be careful not to bake for too long, as the rolls can dry out.` },
        { note: `These rolls got stuck to the baking mat a bit, so be gentle when removing them. I did not use any liners, foil or parchment paper.` },
        { note: `Feel free to adjust the amount of the apple cider mix in the filling and topping to suit your taste preference. I decreased the topping by half of the original recipe.` },
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