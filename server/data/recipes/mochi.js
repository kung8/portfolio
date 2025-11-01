const mochi1 = '../assets/Products/mochi-1.jpeg';
const mochi2 = '../assets/Products/mochi-2.jpeg';
const mochi3 = '../assets/Products/mochi-3.jpeg';
const mochi4 = '../assets/Products/mochi-4.jpeg';
const mochi5 = '../assets/Products/mochi-5.jpeg';
const mochi6 = '../assets/Products/mochi-6.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_PAN, COCONUT_MILK, FOOD_COLORING, KNIFE, MIXING_BOWL, MOCHIKO, OVEN, POTATO_STARCH, WATER, WHITE_SUGAR } = require('./ingredients');

const MOCHI = 'Mochi';
const DUSTING = 'Dusting';

module.exports = {
    cardName: 'Mochi',
    name: 'Japanese Mochi',
    img: mochi6,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.JAPANESE],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 24, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Mochi', 
            link: 'https://www.mochimommy.com/easy-homemade-mochi/',
            authors: ['Mochi Mommy'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...MOCHIKO, amount: 7 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MOCHI },
        { ...WHITE_SUGAR, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MOCHI },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: MOCHI },
        { ...COCONUT_MILK, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MOCHI },
        { ...FOOD_COLORING, amount: 1, unit: INGREDIENT_UNITS.DROP, additionalDetails: 'preferred color', section: MOCHI },
        { ...POTATO_STARCH, amount: '', unit: '', additionalDetails: 'for dusting', section: DUSTING },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_PAN,
        ALUMINUM_FOIL, 
        KNIFE,
    ],
    directions: [
        { step: `Preheat the oven to 350ºF.`, section: MOCHI },
        { step: `Grease the baking pan.`, section: MOCHI },
        { step: `In a mixing bowl, combine the "Mochi" ingredients.`, section: MOCHI, img: [mochi1, mochi2] },
        { step: `Pour mochi batter into the baking pan.`, section: MOCHI, img: mochi3 },
        { step: `Tightly cover the pan with aluminum foil.`, section: MOCHI, img: mochi4 },
        { step: `Bake until the mochi is cooked through (about 45 to 55 minutes).`, section: MOCHI, img: mochi5 },
        { step: `Let mochi completely cool before dusting.`, section: MOCHI },
        { step: `Dust the mochi with potato starch to prevent sticking.`, section: DUSTING },
        { step: `Cut the mochi into rectangles. Add more starch if needed.`, section: DUSTING },
        { step: `Enjoy these light delicious treats.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};