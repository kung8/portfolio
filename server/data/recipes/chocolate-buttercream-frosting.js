const frosting1 = '../assets/Products/chocolate-buttercream-frosting-1.jpeg';
const frosting2 = '../assets/Products/chocolate-buttercream-frosting-2.jpeg';
const frosting3 = '../assets/Products/chocolate-buttercream-frosting-3.jpeg';
const frosting4 = '../assets/Products/chocolate-buttercream-frosting-4.jpeg';
const frosting5 = '../assets/Products/chocolate-buttercream-frosting-5.jpeg';
const frosting6 = '../assets/Products/chocolate-buttercream-frosting-6.jpeg';
const frosting7 = '../assets/Products/chocolate-buttercream-frosting-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { COCOA_POWDER, HEAVY_CREAM, POWDERED_SUGAR, UNSALTED_BUTTER, VANILLA_EXTRACT } = require('./ingredients');

const CREAM_SECTION = 'Cream';
const POWDERED_SUGAR_SECTION = 'Powdered Sugar';
const VANILLA_SECTION = 'Vanilla';

const CREAMING = 'Creaming';
const PREP_POWDERED_SUGAR = 'Prep Powdered Sugar';
const COMBINE_SUGAR = 'Combine Sugar';
const COMBINE_VANILLA = 'Combine Vanilla';

module.exports = {
    cardName: 'Buttercream Frosting',
    name: 'Chocolate Buttercream Frosting',
    img: frosting7,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.MIX],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 72, unit: YIELD_UNITS.TABLESPOON },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Chocolate Buttercream Frosting', 
            link: 'https://addapinch.com/perfect-chocolate-buttercream-frosting-recipe',
            authors: ['Robyn Stone'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...COCOA_POWDER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAM_SECTION },
        { ...UNSALTED_BUTTER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: CREAM_SECTION },
        { ...POWDERED_SUGAR, amount: 5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: POWDERED_SUGAR_SECTION },
        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: POWDERED_SUGAR_SECTION },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VANILLA_SECTION },
        { ...COCOA_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: VANILLA_SECTION },
    ],
    appliances: [
        { name: 'refrigerator' },
    ],
    supplies: [
        { name: '2 mixing bowls' },
        { name: 'whisk' },
        { name: 'spatula' },
    ],
    directions: [
        { step: `In a mixing bowl, whisk the cocoa powder to break up the powder.`, section: CREAMING, img: frosting1 },
        { step: `Add softened butter. Cream with a spatula.`, section: CREAMING, img: [frosting2, frosting3] },

        { step: `In another mixing bowl, whisk the powdered sugar.`, section: PREP_POWDERED_SUGAR },

        { step: `In the creamed butter bowl, add 1 cup of powdered sugar at a time and 1 tablespoon of heavy cream. Combine well.`, section: COMBINE_SUGAR, img: [frosting4, frosting5] },
        { step: `Add the "${VANILLA_SECTION}" section ingredients.`, section: COMBINE_VANILLA, img: frosting6 },
        { step: `Use this frosting to decorate your favorite desserts.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.THAW,
            instruction: 'Allow the frosting to come to room temperature. Whisk to restore texture.',
        },
    ],
    mealPrep: true,
};