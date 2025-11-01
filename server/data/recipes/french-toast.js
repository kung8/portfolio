const frenchToast1 = '../assets/Products/french-toast-1.jpeg';
const frenchToast2 = '../assets/Products/french-toast-2.jpeg';
const frenchToast3 = '../assets/Products/french-toast-3.jpeg';
const frenchToast4 = '../assets/Products/french-toast-4.jpeg';
const frenchToast5 = '../assets/Products/french-toast-5.jpeg';
const frenchToast6 = '../assets/Products/french-toast-6.jpeg';
const frenchToast7 = '../assets/Products/french-toast-7.jpeg';
const frenchToast8 = '../assets/Products/french-toast-8.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BRIOCHE_BUNS,
    CINNAMON,
    EGG,
    FRYING_PAN,
    MEASURING_CUPS,
    MEASURING_SPOONS,
    MEDIUM_BOWL,
    MILK,
    RUBBER_SPATULA,
    STOVE,
    UNSALTED_BUTTER,
    VANILLA_EXTRACT,
} = require('./ingredients');

const EGG_BATTER = 'Egg Batter';
const FRENCH_TOAST_SECTION = 'French Toast';
const PREP_FRENCH_TOAST = 'Prep French Toast';
const COOK_FRENCH_TOAST = 'Cook French Toast';

module.exports = {
    cardName: 'French Toast',
    name: 'French Toast',
    img: frenchToast8,
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.BREAD],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'French Toast',
            link: 'https://www.loveandlemons.com/french-toast/',
            authors: ['Jeanine', 'Jack'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...EGG, amount: 4, unit: '', additionalDetails: '', section: EGG_BATTER },
        { ...VANILLA_EXTRACT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: EGG_BATTER },
        { ...CINNAMON, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: EGG_BATTER },
        { ...MILK, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: EGG_BATTER },
        
        { ...BRIOCHE_BUNS, amount: 8, unit: '', additionalDetails: '', section: FRENCH_TOAST_SECTION },
        { ...UNSALTED_BUTTER, amount: '', unit: '', additionalDetails: 'for cooking', section: FRENCH_TOAST_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MEDIUM_BOWL,
        FRYING_PAN,
        RUBBER_SPATULA,
        MEASURING_SPOONS,
        MEASURING_CUPS,
    ],
    directions: [
        { step: `In a medium bowl, combine the "${EGG_BATTER}" section ingredients.`, section: PREP_FRENCH_TOAST, img: [frenchToast1, frenchToast2] },
        { step: `Dredge bread on both sides one at a time right before pan frying.`, section: PREP_FRENCH_TOAST, img: [frenchToast3, frenchToast4] },
        { step: `Over medium heat, heat butter in a pan.`, section: COOK_FRENCH_TOAST },
        { step: `Brown each side of bread (about 30 seconds on each side).`, section: COOK_FRENCH_TOAST, img: [frenchToast5, frenchToast6] },
        { step: `Serve and add fruits, syrup, and all your favorite toppings.`, section: SECTIONS.SERVE, img: frenchToast7 },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};