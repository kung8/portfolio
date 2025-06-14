const baguette1 = '../assets/Products/french-baguette-1.jpeg';
const baguette2 = '../assets/Products/french-baguette-2.jpeg';
const baguette3 = '../assets/Products/french-baguette-3.jpeg';
const baguette4 = '../assets/Products/french-baguette-4.jpeg';
const baguette5 = '../assets/Products/french-baguette-5.jpeg';
const baguette6 = '../assets/Products/french-baguette-6.jpeg';
const baguette7 = '../assets/Products/french-baguette-7.jpeg';
const baguette8 = '../assets/Products/french-baguette-8.jpeg';
const baguette9 = '../assets/Products/french-baguette-9.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { ALL_PURPOSE_FLOUR, SALT, YEAST, WATER } = require('./ingredients');

const BAGUETTES = 'Baguettes';

module.exports = {
    cardName: 'French Baguettes',
    name: 'French Baguettes',
    img: baguette9,
    recipeAuthor: '',
    recipeFinder: 'Sam Giraud-Carrier',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: { amount: 4, unit: YIELD_UNITS.LOAF },
    prepTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 19, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 45, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BAGUETTES },
        { ...WATER, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cold', section: BAGUETTES },
        { ...SALT, amount: 5 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BAGUETTES },
        { ...YEAST, amount: 9 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BAGUETTES },
    ],
    appliances: [
        { name: 'oven' },
        { name: 'stand mixer' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'baguette pan' },
    ],
    directions: [
        { step: 'In a stand mixer, combine flour and water.', section: SECTIONS.DOUGH, img: baguette1 },
        { step: 'Let it rest for 10 minutes.', section: SECTIONS.DOUGH, img: baguette2 },
        { step: 'Mix in salt and yeast.', section: SECTIONS.DOUGH, img: baguette3 },
        { step: 'Knead until the dough is nice, smooth and elastic.', section: SECTIONS.DOUGH, img: baguette4 },
        { step: 'Cover and let it raise for 20 minutes.', section: SECTIONS.DOUGH },
        { step: 'Lightly stretch one side of the dough and fold it on itself.', section: SECTIONS.DOUGH },
        { step: 'Repeat the fold two more times every 20 minutes.', section: SECTIONS.DOUGH },
        { step: 'Cover and let the dough double or triple in size.', section: SECTIONS.DOUGH },
        { step: 'Cut the dough into four parts while trying to not lose too much air.', section: SECTIONS.DOUGH },
        { step: 'Lightly stretch them lengthwise and roll to become baguette shape.', section: SECTIONS.DOUGH, img: baguette5 },
        { step: 'Cover and let the dough rise for at least 45 minutes.', section: SECTIONS.DOUGH },
        { step: 'Place a pan of water on one of the lower oven racks.', section: SECTIONS.BAKE, img: baguette7 },
        { step: 'Preheat the oven to as hot as your oven can get.', section: SECTIONS.BAKE },
        { step: 'Place the dough on a baguette pan.', section: SECTIONS.BAKE, img: baguette6 },
        { step: 'Add 1 more cup of water to the baking pan.', section: SECTIONS.BAKE },
        { step: 'Immediately add the baguette pan in the oven.', section: SECTIONS.BAKE, img: baguette8 },
        { step: 'Lower the temperature to 475ºF and bake until browned (about 19 minutes).', section: SECTIONS.BAKE },
        { step: 'Let it cool.', section: SECTIONS.BAKE },
        { step: 'Enjoy these authentic French baguette with your favorite toppings or by itself.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'The original recipe suggests to use the stand mixer to knead the dough. However the dough was pretty tough so to avoid breaking your stand mixer I\'d recommend kneading it by hand.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.ROOM_TEMPERATURE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};