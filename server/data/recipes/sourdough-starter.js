const starter1 = '../assets/Products/sourdough-starter-1.jpeg';
const starter2 = '../assets/Products/sourdough-starter-2.jpeg';
const starter3 = '../assets/Products/sourdough-starter-3.jpeg';
const starter4 = '../assets/Products/sourdough-starter-4.jpeg';
const starter5 = '../assets/Products/sourdough-starter-5.jpeg';
const starter6 = '../assets/Products/sourdough-starter-6.jpeg';
const starter7 = '../assets/Products/sourdough-starter-7.jpeg';

const { ALL_PURPOSE_FLOUR, WATER } = require('./ingredients');
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');

const CREATING_STARTER = 'Creating Starter';
const FEEDING_STARTER = 'Feeding Starter';

module.exports = {
    cardName: 'Sourdough Starter',
    name: 'Sourdough Starter',
    img: starter7,
    available: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.FERMENT],
    type: [TYPES.BREAD],
    allergies: [ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 'Infinite', unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Sourdough Starter', 
            link: "https://littlespoonfarm.com/sourdough-starter-recipe/",
            authors: ['Amy Duska'],
            finder: 'Justin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 7 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'divided', section: CREATING_STARTER },
        { ...WATER, amount: 7 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm and divided', section: CREATING_STARTER },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FEEDING_STARTER },
        { ...WATER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: FEEDING_STARTER },
    ],
    supplies: [
        { name: 'jar' },
        { name: 'cheesecloth' },
    ],
    directions: [
        { step: 'In a jar, combine 1 cup of flour and 1/2 c of warm water until mixed. Make sure there are no lumps.', section: CREATING_STARTER },
        { step: 'Loosely cover the jar with a cheesecloth.', section: CREATING_STARTER },
        { step: 'Keep the jar in a warm location for 24 hours.', section: CREATING_STARTER },
        { step: 'Day 2, stir the mixture to give it some air.', section: CREATING_STARTER },
        { step: 'Day 3, discard 1/2 cup of the starter mixture and feed it flour and warm water (refer to the "Feeding Starter" ingredients for amounts).', section: CREATING_STARTER },
        { step: 'Continue to discard 1/2 cup of the starter mixture and feed the starter mixture for the next 4 days around the same time.', section: CREATING_STARTER },
        { step: 'The starter should be ready to use in your recipes.', section: CREATING_STARTER, img: starter1 },
        { step: 'Once you have created the starter, you just need to feed it at least once a week. When it\'s not being fed you will refrigerate it.', section: FEEDING_STARTER },
        { step: 'When you are feeding the starter, take it out of the fridge and remove 1/2 cup of starter. To make room for the new amount of ingredients. This removed portion can be used to make a new starter if you want.', section: FEEDING_STARTER },
        { step: 'Mix in flour and warm water and leave it in a warm area for the next 24 hours. Bubbling means it is alive and is eating the new.', section: FEEDING_STARTER, img: [starter2, starter3, starter4, starter5] },
        { step: 'Refrigerate the starter after it has grown.', section: FEEDING_STARTER, img: starter6 },
    ],
    store: [
        {
            duration: { amount: '', unit: STORAGE_DURATION_UNIT.INFINITE },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
}; 