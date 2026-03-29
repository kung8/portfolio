const naan1 = '../assets/Products/naan-1.jpeg';
const naan2 = '../assets/Products/naan-2.jpeg';
const naan3 = '../assets/Products/naan-3.jpeg';
const naan4 = '../assets/Products/naan-4.jpeg';
const naan5 = '../assets/Products/naan-5.jpeg';
const naan6 = '../assets/Products/naan-6.jpeg';
const naan7 = '../assets/Products/naan-7.jpeg';
const naan8 = '../assets/Products/naan-8.jpeg';
const naan9 = '../assets/Products/naan-9.jpeg';
const naan10 = '../assets/Products/naan-10.jpeg';
const naan11 = '../assets/Products/naan-11.jpeg';
const naan12 = '../assets/Products/naan-12.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BASTING_BRUSH, CILANTRO, FRYING_PAN, MIXING_BOWL, OLIVE_OIL, ROLLING_PIN, SALT, STOVE, UNSALTED_BUTTER, WATER, WHITE_SUGAR, YEAST, YOGURT } = require('./ingredients');

const ACTIVATE_YEAST = 'Activate Yeast';
const MAKE_DOUGH = 'Make Dough';
const COOK_NAAN = 'Cook Naan';

module.exports = {
    cardName: 'Naan',
    name: 'Naan',
    img: naan12,
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.APPETIZER],
    genre: [GENRES.INDIAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        {
            bookTitle: 'Knife Drop: Creative Recipes Anyone Can Cook',
            label: 'Naan',
            link: null,
            authors: ['Nick DiGiovanni'],
            finder: 'Justin Ung'
        }
    ],
    ingredients: [
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: ACTIVATE_YEAST },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ACTIVATE_YEAST },
        { ...YEAST, amount: 9 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ACTIVATE_YEAST },
        { ...ALL_PURPOSE_FLOUR, amount: 9 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...YOGURT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'plus more to taste', section: SECTIONS.MAIN },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...CILANTRO, amount: 2, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: 'chopped', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        FRYING_PAN,
        BASTING_BRUSH,
        ROLLING_PIN,
    ],
    directions: [
        { step: `In a mixing bowl, combine warm water and sugar.`, section: ACTIVATE_YEAST },
        { step: `Slowly add the yeast.`, section: ACTIVATE_YEAST },
        { step: `Let the yeast activate and begin to foam (about 5 minutes).`, section: ACTIVATE_YEAST, img: naan1 },

        { step: `Mix in flour.`, section: MAKE_DOUGH, img: naan2 },
        { step: `Add yogurt, salt and oil. Mix.`, section: MAKE_DOUGH, img: naan3 },
        { step: `Transfer dough to a clean work station.`, section: MAKE_DOUGH, img: naan4 },
        { step: `Knead until the dough is smooth and shiny (about 10 minutes).`, section: MAKE_DOUGH, img: naan5 },
        { step: `Lightly grease bowl.`, section: MAKE_DOUGH },
        { step: `Place dough in bowl and cover with a damp towel.`, section: MAKE_DOUGH, img: [naan6, naan7] },
        { step: `Place bowl in a warm location and let it double in size (about 1 hour).`, section: MAKE_DOUGH, img: naan8 },

        { step: `Divide the dough into 8 pieces.`, section: COOK_NAAN, img: naan9 },
        { step: `Roll out the dough into 8 inch circles.`, section: COOK_NAAN, img: naan10 },
        { step: `Over medium heat, heat a frying pan.`, section: COOK_NAAN },
        { step: `Brush one side of dough with water.`, section: COOK_NAAN },
        { step: `Place the dough in the hot pan, wet side down. Cook until dough puffs and there are some charred spots (about 1 minute).`, section: COOK_NAAN, img: naan11 },
        { step: `Flip and cook the other side (about 1 minute).`, section: COOK_NAAN },
        { step: `Remove from pan and brush each cooked naan with melted butter and sprinkle salt and cilantro.`, section: COOK_NAAN },
        { step: `Repeat until all the other naan is cooked.`, section: COOK_NAAN },

        { step: `Enjoy these delicious breads with your favorite curries.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave for 10 to 15 seconds until warm. Then over medium heat, pan fry with a little oil until browned on both sides.',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until warmed through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};