const single = '../assets/Products/pretzel-zoomed-in.jpeg';
const pretzels = '../assets/Products/pretzels.jpeg';
const additional = '../assets/Products/pretzel-additional-ingredients.jpeg';
const ball = '../assets/Products/pretzel-dough-ball.jpeg';
const dough = '../assets/Products/pretzel-dough.jpeg';
const drained = '../assets/Products/pretzel-drained.jpeg';
const yeast = '../assets/Products/pretzel-water-and-yeast.jpeg';
const boiled = '../assets/Products/pretzels-boiled.jpeg';
const covered = '../assets/Products/pretzels-dough-covered.jpeg';
const formed = '../assets/Products/pretzels-formed.jpeg';
// const oven = '../assets/Products/pretzels-in-oven.jpeg';
const raw = '../assets/Products/pretzels-on-baking-sheet-raw.jpeg';
const rope = '../assets/Products/pretzels-rope.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_LOCATION, STORAGE_DURATION_UNIT, STORAGE_CONTAINER } = require("./constants");
const {
    YEAST,
    SALT,
    BROWN_SUGAR,
    UNSALTED_BUTTER,
    ALL_PURPOSE_FLOUR,
    COARSE_SALT,
    BAKING_SODA,
    WATER,
} = require('./ingredients');

module.exports = {
    cardName: 'Pretzel',
    name: 'Pretzel',
    img: single,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...WATER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.DOUGH },
        { ...YEAST, amount: 9 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.DOUGH },
        { ...ALL_PURPOSE_FLOUR, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DOUGH },
        { ...COARSE_SALT, amount: '', unit: '', additionalDetails: 'sprinkling', section: SECTIONS.DOUGH },
        { ...BAKING_SODA, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WATER, amount: 9, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'stand mixer (or hand mixer)' },
        { name: 'slotted spatula' },
        { name: 'silicon mats' },
        { name: 'baking sheets' },
    ],
    directions: [
        { step: 'In a stand mixer bowl, whisk yeast and warm water.', section: SECTIONS.DOUGH, img: yeast },
        { step: 'Let it stand for 1 minute.', section: SECTIONS.DOUGH },
        { step: 'Whisk in salt, brown sugar, and melted butter into mixer.', section: SECTIONS.DOUGH, img: additional },
        { step: 'Add 3 cups of flour into the mix, one at a time.', section: SECTIONS.DOUGH },
        { step: 'Continue to mix until the dough is no longer sticky. Add 3/4 to 1 cup of flour to help with the stickiness.', section: SECTIONS.DOUGH, img: dough },
        { step: 'Once that is ready, continue mixing for a few more minutes (or you can knead the dough).', section: SECTIONS.DOUGH },
        { step: 'Form the dough into a ball.', section: SECTIONS.DOUGH, img: ball },
        { step: 'Cover with a light towel and let sit for 10 minutes.', section: SECTIONS.DOUGH, img: covered },
        { step: 'Preheat the oven to 400ºF.', section: SECTIONS.MAIN },
        { step: 'Prepare baking sheets by lining them with silicon baking mats.', section: SECTIONS.MAIN },
        { step: 'Over medium heat, boil water and the baking soda.', section: SECTIONS.MAIN },
        { step: 'Divide the dough into about 12 balls (1/3 cup sections).', section: SECTIONS.MAIN },
        { step: 'Roll each dough ball into 20"-22" ropes on a clean counter.', section: SECTIONS.MAIN, img: rope },
        { step: 'Form the pretzel shape by holding the ends of the rope and crossing the ends as if tying your shoe. Then twist slightly with your right hand so it comes around the other side and place the two rope ends over the bottom of the pretzel.', section: SECTIONS.MAIN, img: formed },
        { step: 'Once all of the pretzels are created, you will carefully drop in one or two pretzels at a time into the boiling water. And let each of the pretzels sit in the water for 20 to 30 seconds.', section: SECTIONS.MAIN, img: boiled },
        { step: 'Remove each pretzel with a slotted spatula and let the excess water drain.', section: SECTIONS.MAIN, img: drained },
        { step: 'Place on the baking sheet and sprinkle coarse salt as desired.', section: SECTIONS.MAIN, img: raw },
        { step: 'Bake for 12 to 15 minutes, or until they are golden brown.', section: SECTIONS.MAIN, img: pretzels },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};