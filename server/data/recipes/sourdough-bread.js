const ball = '../assets/Products/sourdough-bread-ball.jpeg';
const covered = '../assets/Products/sourdough-bread-covered.jpeg';
const preheating = '../assets/Products/sourdough-bread-dutch-oven-preheating.jpeg';
const inPan = '../assets/Products/sourdough-bread-in-pan.jpeg';
const mixed = '../assets/Products/sourdough-bread-mixed.jpeg';
const risen = '../assets/Products/sourdough-bread-risen.jpeg';
const scored = '../assets/Products/sourdough-bread-scored.jpeg';
const uncovered = '../assets/Products/sourdough-bread-uncovered.jpeg';
const board = '../assets/Products/sourdough-bread-on-board.jpeg';
const bakedScored = '../assets/Products/sourdough-bread-baked-scored.jpeg';

const { METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_LOCATION, STORAGE_CONTAINER, STORAGE_DURATION_UNIT } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    SALT,
    SOURDOUGH_STARTER,
    WATER,
} = require('./ingredients');
const starter = require('./sourdough-starter');

const BAKING = 'Baking';

module.exports = {
    cardName: 'Sourdough Bread',
    name: 'Sourdough Bread',
    img: board,
    recipeAuthors: [''],
    recipeFinder: 'Justin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.SNACK],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.HOUR },
    separated: true,
    ingredients: [
        { ...SOURDOUGH_STARTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH, link: { id: starter.name, url: `recipes/${starter.name}` } },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.DOUGH },
        { ...SALT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'towel or cheesecloth' },
        { name: 'dutch oven pot' },
    ],
    directions: [
        { step: 'In a mixing bowl, blend together starter and water.', section: SECTIONS.DOUGH },
        { step: 'Mix in salt and flour.', section: SECTIONS.DOUGH, img: mixed },
        { step: 'Knead the dough a little bit and add some more flour as needed to make it less sticky.', section: SECTIONS.DOUGH },
        { step: 'Let the mixture rest for 30 to 45 minutes.', section: SECTIONS.DOUGH },
        { step: 'Fill a bowl or cup with water and have it nearby. Wet the tips of your fingers as needed when you do the coil fold.', section: SECTIONS.DOUGH },
        { step: 'Lift the dough and fold it over the dangling part (at the top). Rotate the bowl 180 degrees and repeat the lift and fold. Then turn it 90 degrees and repeat the lift and fold. And then 180 degrees and repeat the lift and fold. This is called the coil fold which helps strengthen the dough and develop gluten. Do the coil fold on the sides opposite for balance.', section: SECTIONS.DOUGH, img: ball },
        { step: 'Cover the bowl and let the dough rest for 5 to 10 hours. It should double in size.', section: SECTIONS.DOUGH, img: [covered, risen] },
        { step: 'When you\'re ready to bake, place a dutch oven pot with a lid on the center rack and set the oven temperature to 450ºF.', section: BAKING, img: preheating },
        { step: 'Score the dough with whatever preferred design.', section: BAKING, img: scored },
        { step: 'Once the oven has reached 450ºF, take out the dutch oven pot and place the dough ball in the pot and return the pot with the lid to the oven.', section: BAKING, img: [inPan, preheating] },
        { step: 'Bake for 25 minutes with the lid on.', section: BAKING },
        { step: 'Remove the lid and bake for an additional 20 minutes.', section: BAKING, img: uncovered },
        { step: 'Remove from oven and let cool.', section: BAKING, img: bakedScored },
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