const base = '../assets/Products/sourdough-starter-base.jpeg';
const risen = '../assets/Products/sourdough-starter-risen.jpeg';
const zoomed = '../assets/Products/sourdough-starter-risen-zoomed.jpeg';
const flour = '../assets/Products/sourdough-starter-feeding-flour.jpeg';
const water = '../assets/Products/sourdough-starter-feeding-water.jpeg';
const mix = '../assets/Products/sourdough-starter-feeding-mix.jpeg';
const mixed = '../assets/Products/sourdough-starter-feeding-mixed.jpeg';

const { ALL_PURPOSE_FLOUR, WATER } = require('./ingredients');
const { INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');

const CREATING_STARTER = 'Creating Starter';
const FEEDING_STARTER = 'Feeding Starter';

module.exports = {
    cardName: 'Sourdough Starter',
    name: 'Sourdough Starter',
    img: risen,
    recipeAuthor: '',
    recipeFinder: 'Justin Ung',
    available: true,
    yields: { amount: 'Infinite', unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Sourdough Starter', link: "https://littlespoonfarm.com/sourdough-starter-recipe/" }
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
        { step: 'In a jar, combine 1 cup of flour and 1/2 c of warm water until mixed. Make sure there are no lumps.', type: CREATING_STARTER },
        { step: 'Loosely cover the jar with a cheesecloth.', type: CREATING_STARTER },
        { step: 'Keep the jar in a warm location for 24 hours.', type: CREATING_STARTER },
        { step: 'Day 2, stir the mixture to give it some air.', type: CREATING_STARTER },
        { step: 'Day 3, discard 1/2 cup of the starter mixture and feed it flour and warm water (refer to the "Feeding Starter" ingredients for amounts).', type: CREATING_STARTER },
        { step: 'Continue to discard 1/2 cup of the starter mixture and feed the starter mixture for the next 4 days around the same time.', type: CREATING_STARTER },
        { step: 'The starter should be ready to use in your recipes.', type: CREATING_STARTER, img: base },
        { step: 'Once you have created the starter, you just need to feed it at least once a week. When it\'s not being fed you will refrigerate it.', type: FEEDING_STARTER },
        { step: 'When you are feeding the starter, take it out of the fridge and remove 1/2 cup of starter. To make room for the new amount of ingredients. This removed portion can be used to make a new starter if you want.', type: FEEDING_STARTER },
        { step: 'Mix in flour and warm water and leave it in a warm area for the next 24 hours. Bubbling means it is alive and is eating the new.', type: FEEDING_STARTER, img: [flour, water, mix, mixed] },
        { step: 'Refrigerate the starter after it has grown.', type: FEEDING_STARTER, img: zoomed },
    ]
}; 