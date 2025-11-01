const bread1 = '../assets/Products/sourdough-bread-1.jpeg';
const bread2 = '../assets/Products/sourdough-bread-2.jpeg';
const bread3 = '../assets/Products/sourdough-bread-3.jpeg';
const bread4 = '../assets/Products/sourdough-bread-4.jpeg';
const bread5 = '../assets/Products/sourdough-bread-5.jpeg';
const bread6 = '../assets/Products/sourdough-bread-6.jpeg';
const bread7 = '../assets/Products/sourdough-bread-7.jpeg';
const bread8 = '../assets/Products/sourdough-bread-8.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    CHEESECLOTH,
    DUTCH_OVEN_POT,
    MIXING_BOWL,
    OVEN,
    SALT,
    SOURDOUGH_STARTER,
    WATER,
} = require('./ingredients');
const starter = require('./sourdough-starter');

const BAKING = 'Baking';

module.exports = {
    cardName: 'Sourdough Bread',
    name: 'Sourdough Bread',
    img: bread8,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    allergies: [ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: '',
            link: '',
            authors: [''],
            finder: 'Justin Ung'
        }
    ],
    ingredients: [
        { ...SOURDOUGH_STARTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH, link: { id: starter.name, url: `recipes/${starter.name}` } },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.DOUGH },
        { ...SALT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        { ...CHEESECLOTH, additionalDetails: 'towel' },
        DUTCH_OVEN_POT,
    ],
    directions: [
        { step: `In a mixing bowl, blend together starter and water.`, section: SECTIONS.DOUGH },
        { step: `Mix in salt and flour.`, section: SECTIONS.DOUGH, img: bread1 },
        { step: `Knead the dough a little bit and add some more flour as needed to make it less sticky.`, section: SECTIONS.DOUGH },
        { step: `Let the mixture rest for 30 to 45 minutes.`, section: SECTIONS.DOUGH },
        { step: `Fill a bowl or cup with water and have it nearby. Wet the tips of your fingers as needed when you do the coil fold.`, section: SECTIONS.DOUGH },
        { step: `Lift the dough and fold it over the dangling part (at the top). Rotate the bowl 180 degrees and repeat the lift and fold. Then turn it 90 degrees and repeat the lift and fold. And then 180 degrees and repeat the lift and fold. This is called the coil fold which helps strengthen the dough and develop gluten. Do the coil fold on the sides opposite for balance.`, section: SECTIONS.DOUGH, img: bread2 },
        { step: `Cover the bowl and let the dough rest for 5 to 10 hours. It should double in size.`, section: SECTIONS.DOUGH, img: [bread3, bread4] },
        { step: `When you're ready to bake, place a dutch oven pot with a lid on the center rack and set the oven temperature to 450ºF.`, section: BAKING },
        { step: `Score the dough with whatever preferred design.`, section: BAKING, img: bread5 },
        { step: `Once the oven has reached 450ºF, take out the dutch oven pot and place the dough ball in the pot and return the pot with the lid to the oven.`, section: BAKING, img: bread6 },
        { step: `Bake for 25 minutes with the lid on.`, section: BAKING },
        { step: `Remove the lid and bake for an additional 20 minutes.`, section: BAKING },
        { step: `Remove from oven and let cool.`, section: BAKING, img: bread7 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.PAPER_BAG,
            instruction: 'Allow it to breathe by not sealing it in an airtight container.',
        },
    ],
    reheat: null,
    mealPrep: true,
};