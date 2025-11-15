const pretzel1 = '../assets/Products/pretzel-1.jpeg';
const pretzel2 = '../assets/Products/pretzel-2.jpeg';
const pretzel3 = '../assets/Products/pretzel-3.jpeg';
const pretzel4 = '../assets/Products/pretzel-4.jpeg';
const pretzel5 = '../assets/Products/pretzel-5.jpeg';
const pretzel6 = '../assets/Products/pretzel-6.jpeg';
const pretzel7 = '../assets/Products/pretzel-7.jpeg';
const pretzel8 = '../assets/Products/pretzel-8.jpeg';
const pretzel9 = '../assets/Products/pretzel-9.jpeg';
const pretzel10 = '../assets/Products/pretzel-10.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    ALL_PURPOSE_FLOUR,
    BAKING_SHEET,
    BAKING_SODA,
    BROWN_SUGAR,
    COARSE_SALT,
    OVEN,
    SALT,
    SILICONE_BAKING_MAT,
    SLOTTED_SPOON,
    STAND_MIXER,
    STOVE,
    UNSALTED_BUTTER,
    WATER,
    YEAST,
} = require('./ingredients');

module.exports = {
    cardName: 'Pretzel',
    name: 'Pretzel',
    img: pretzel10,
    available: true,
    category: [CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 12, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Soft Pretzel',
            link: 'https://sallysbakingaddiction.com/easy-homemade-soft-pretzels/',
            authors: ['Sally McKenney'],
            finder: 'Kevin Ung'
        }
    ],
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
        STOVE,
        OVEN,
        { ...STAND_MIXER, additionalDetails: 'or hand mixer' },
    ],
    supplies: [
        SLOTTED_SPOON,
        SILICONE_BAKING_MAT,
        BAKING_SHEET,
    ],
    directions: [
        { step: `In a stand mixer bowl, whisk yeast and warm water.`, section: SECTIONS.MAKE_DOUGH },
        { step: `Let it stand for 1 minute.`, section: SECTIONS.MAKE_DOUGH },
        { step: `Whisk in salt, brown sugar, and melted butter into mixer.`, section: SECTIONS.MAKE_DOUGH, img: pretzel1 },
        { step: `Add 3 cups of flour into the mix, one at a time.`, section: SECTIONS.MAKE_DOUGH },
        { step: `Continue to mix until the dough is no longer sticky. Add 3/4 to 1 cup of flour to help with the stickiness.`, section: SECTIONS.MAKE_DOUGH, img: pretzel2 },
        { step: `Once that is ready, continue mixing for a few more minutes (or you can knead the dough).`, section: SECTIONS.MAKE_DOUGH },
        { step: `Form the dough into a ball.`, section: SECTIONS.MAKE_DOUGH, img: pretzel3 },
        { step: `Cover with a light towel and let sit for 10 minutes.`, section: SECTIONS.MAKE_DOUGH },

        { step: `Preheat the oven to 400ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Prepare baking sheets by lining them with silicon baking mats.`, section: SECTIONS.PREP_PAN },

        { step: `Over medium heat, boil water and the baking soda.`, section: SECTIONS.MAIN },
        { step: `Divide the dough into about 12 balls (1/3 cup sections).`, section: SECTIONS.MAIN },
        { step: `Roll each dough ball into 20"-22" ropes on a clean counter.`, section: SECTIONS.MAIN, img: pretzel4 },
        { step: `Form the pretzel shape by holding the ends of the rope and crossing the ends as if tying your shoe. Then twist slightly with your right hand so it comes around the other side and place the two rope ends over the bottom of the pretzel.`, section: SECTIONS.MAIN, img: pretzel5 },
        { step: `Once all of the pretzels are created, you will carefully drop in one or two pretzels at a time into the boiling water. And let each of the pretzels sit in the water for 20 to 30 seconds.`, section: SECTIONS.MAIN, img: pretzel6 },
        { step: `Remove each pretzel with a slotted spatula and let the excess water drain.`, section: SECTIONS.MAIN, img: pretzel7 },
        { step: `Place on the baking sheet and sprinkle coarse salt as desired.`, section: SECTIONS.MAIN, img: pretzel8 },
        
        { step: `Bake for 12 to 15 minutes, or until they are golden brown.`, section: SECTIONS.BAKE, img: pretzel9 },
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