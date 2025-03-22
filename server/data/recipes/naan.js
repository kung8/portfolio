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
const naan13 = '../assets/Products/naan-13.jpeg';
const naan14 = '../assets/Products/naan-14.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { WARM_WATER, WHITE_SUGAR, YEAST, ALL_PURPOSE_FLOUR, YOGURT, SALT, OLIVE_OIL, UNSALTED_BUTTER, CILANTRO } = require('./ingredients');

const ACTIVATE_YEAST = 'Activate Yeast';
const MAKE_DOUGH = 'Make Dough';
const COOK_NAAN = 'Cook Naan';

module.exports = {
    cardName: 'Naan',
    name: 'Naan',
    img: naan14,
    recipeCredit: 'Nick DiGiovanni',
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.APPETIZER],
    genre: [GENRES.INDIAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: '4 naan',
    prepTime: '30 m',
    cookTime: '15 m',
    separated: true,
    ingredients: [
        { ...WARM_WATER, amount: '1/2 c', unit: '', additionalDetails: '', section: ACTIVATE_YEAST },
        { ...WHITE_SUGAR, amount: '1 tsp', unit: '', additionalDetails: '', section: ACTIVATE_YEAST },
        { ...YEAST, amount: '2 1/4 tsp', unit: '', additionalDetails: '', section: ACTIVATE_YEAST },
        { ...ALL_PURPOSE_FLOUR, amount: '2 1/4 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...YOGURT, amount: '1/2 c', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '1/2 tsp', unit: '', additionalDetails: 'plus more to taste', section: SECTIONS.MAIN },
        { ...OLIVE_OIL, amount: '1 Tbsp', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '3 Tbsp', unit: '', additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...CILANTRO, amount: '2 sprigs', unit: '', additionalDetails: 'chopped', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'dutch oven pan' },
        { name: 'cooking brush' },
        { name: 'rolling pin' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine warm water and sugar.', type: ACTIVATE_YEAST },
        { step: 'Slowly add the yeast.', type: ACTIVATE_YEAST },
        { step: 'Let the yeast activate and begin to foam (about 5 minutes).', type: ACTIVATE_YEAST, img: naan1 },

        { step: 'Mix in flour.', type: MAKE_DOUGH, img: naan2 },
        { step: 'Add yogurt, salt and oil. Mix.', type: MAKE_DOUGH, img: naan3 },
        { step: 'Transfer dough to a clean work station.', type: MAKE_DOUGH, img: naan4 },
        { step: 'Knead until the dough is smooth and shiny (about 10 minutes).', type: MAKE_DOUGH, img: naan5 },
        { step: 'Lightly grease bowl.', type: MAKE_DOUGH },
        { step: 'Place dough in bowl and cover with a damp towel.', type: MAKE_DOUGH, img: [naan6, naan7] },
        { step: 'Place bowl in a warm location and let it double in size (about 1 hour).', type: MAKE_DOUGH, img: naan8 },

        { step: 'Divide the dough into 8 pieces.', type: COOK_NAAN, img: naan9 },
        { step: 'Roll out the dough into 8-inch circles.', type: COOK_NAAN, img: naan10 },
        { step: 'Over medium heat, heat a dutch oven pan.', type: COOK_NAAN },
        { step: 'Brush one side of dough with water.', type: COOK_NAAN },
        { step: 'Place the dough in the hot pan, wet side down. Cover pan with a lid. Cook until dough puffs and there are some charred spots (about 1 minute).', type: COOK_NAAN, img: naan11 },
        { step: 'Flip and cook the other side uncovered (about 1 minute).', type: COOK_NAAN, img: naan12 },
        { step: 'Remove from pan and brush each cooked naan with melted butter and sprinkle salt and cilantro.', type: COOK_NAAN },
        { step: 'Repeat until all the other naan is cooked.', type: COOK_NAAN },

        { step: 'Enjoy these delicious breads with your favorite curries.', type: SECTIONS.SERVE, img: naan13 },
    ],
    notes: [
        { note: 'Covering the pan with a lid immediately will help the naan puff up and be lighter in texture.' },
        { note: 'The original recipe suggests cooking it over medium-high heat, but it was charring way too quickly.' },
        { note: 'I missed the 8-inch circles for the size of the naan so I think this recipe actually only makes 4 naan.' },
        { note: 'Be careful over charring the naan, but the texture of the naan was soft and on point.' },
        { note: 'The larger recommended naan size might fix the issue of charring actually since it would be quicker to add and remove one at a time instead of three or four 😛.' },
        { note: 'Even after it was charred a bit, it was still delicious.' },
    ]
};