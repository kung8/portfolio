const balls1 = '../assets/Products/popcorn-balls-1.jpeg';
const balls2 = '../assets/Products/popcorn-balls-2.jpeg';
const balls3 = '../assets/Products/popcorn-balls-3.jpeg';
const balls4 = '../assets/Products/popcorn-balls-4.jpeg';
const balls5 = '../assets/Products/popcorn-balls-5.jpeg';
const balls6 = '../assets/Products/popcorn-balls-6.jpeg';
const balls7 = '../assets/Products/popcorn-balls-7.jpeg';
const balls8 = '../assets/Products/popcorn-balls-8.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { COOKING_SPRAY, CORN_SYRUP, MINI_MARSHMALLOWS, POPCORN, POWDERED_SUGAR, UNSALTED_BUTTER, WATER } = require('./ingredients');

const POPCORN_SECTION = 'Popcorn';
const SUGAR_MIXTURE_SECTION = 'Sugar Mixture';
const POPCORN_BALL_SECTION = 'Popcorn Balls';

const PREP_POPCORN = 'Prepare Popcorn';
const COOK_SUGAR_MIXTURE = 'Cook Sugar Mixture';
const FORM_POPCORN_BALL = 'Form Popcorn Balls';

module.exports = {
    cardName: 'Popcorn Balls',
    name: 'Popcorn Balls',
    img: balls7,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.DESSERT],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 20, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Popcorn Balls',
            link: "https://www.allrecipes.com/recipe/20519/best-ever-popcorn-balls/",
            authors: ['Kelli'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...POPCORN, amount: 5, unit: INGREDIENT_UNITS.QUART, additionalDetails: 'plain', section: POPCORN_SECTION },

        { ...CORN_SYRUP, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE_SECTION },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'cold', section: SUGAR_MIXTURE_SECTION },
        { ...POWDERED_SUGAR, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE_SECTION },
        { ...MINI_MARSHMALLOWS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SUGAR_MIXTURE_SECTION },

        { ...COOKING_SPRAY, amount: '', unit: '', additionalDetails: '', section: POPCORN_BALL_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'large mixing bowl' },
        { name: 'plastic wrap or sandwich ziploc bag' },
    ],
    directions: [
        { step: `Prepare a baking sheet and line with parchment paper before beginning to cook.`, section: SECTIONS.PREP_PAN },

        { step: `Remove any unpopped kernels so you don't break your teeth.`, section: PREP_POPCORN, img: balls1 },

        { step: `Over medium heat, combine "${SUGAR_MIXTURE_SECTION}" section ingredients in a large pot.`, section: COOK_SUGAR_MIXTURE, img: [balls2, balls3] },
        { step: `Stir and continue to let the mixture melt.`, section: COOK_SUGAR_MIXTURE, img: balls4 },

        { step: `Slowly pour mixture over popcorn and mix until the popcorn is evenly coated.`, section: FORM_POPCORN_BALL, img: balls5 },
        { step: `Quickly grease hands with cooking spray and form the popcorn into balls.`, section: FORM_POPCORN_BALL },
        { step: `Place popcorn balls on the prepared baking sheet.`, section: FORM_POPCORN_BALL, img: balls6 },

        { step: `Wrap each ball in plastic wrap or in individual sandwich ziploc bags and keep at room temperature.`, section: SECTIONS.WRAP, img: balls8 },

        { step: `Enjoy these sweet treats while you watch a show or movie!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};