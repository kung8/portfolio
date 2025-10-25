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
    separated: false,
    ingredients: [
        { ...POPCORN, amount: 5, unit: INGREDIENT_UNITS.QUART, additionalDetails: 'plain', section: SECTIONS.MAIN },
        { ...CORN_SYRUP, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WATER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'cold', section: SECTIONS.MAIN },
        { ...POWDERED_SUGAR, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MINI_MARSHMALLOWS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...COOKING_SPRAY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
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
        { step: 'Remove any unpopped kernels so you don\'t break your teeth.', section: SECTIONS.MAIN, img: balls1 },
        { step: 'Prepare a baking sheet and line with parchment paper before beginning to cook.' },
        { step: 'Over medium heat, mix together corn syrup, butter, water, powdered sugar and marshmallows in a large pot.', section: SECTIONS.MAIN, img: [balls2, balls3] },
        { step: 'Stir and continue to let the mixture melt.', section: SECTIONS.MAIN, img: balls4 },
        { step: 'Slowly pour mixture over popcorn and mix until the popcorn is evenly coated.', section: SECTIONS.MAIN, img: balls5 },
        { step: 'Quickly grease hands with cooking spray and form the popcorn into balls.', section: SECTIONS.MAIN },
        { step: 'Place popcorn balls on the prepared baking sheet.', section: SECTIONS.MAIN, img: balls6 },
        { step: 'Wrap each ball in plastic wrap or in individual sandwich ziploc bags and keep at room temperature.', section: SECTIONS.MAIN, img: balls8 },
        { step: 'Enjoy these sweet treats while you watch a show or movie!', section: SECTIONS.MAIN },
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