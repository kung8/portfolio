// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES } = require('./constants');
const { WARM_WATER, WHITE_SUGAR, YEAST, ALL_PURPOSE_FLOUR, YOGURT, SALT, OLIVE_OIL, UNSALTED_BUTTER, CILANTRO } = require('./ingredients');

const ACTIVATE_YEAST = 'Activate Yeast';
const MAKE_DOUGH = 'Make Dough';
const COOK_NAAN = 'Cook Naan';

module.exports = {
    wip: true,
    cardName: 'Naan',
    name: 'Naan',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.APPETIZER],
    genre: [GENRES.INDIAN],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: '8 naan',
    prepTime: '30 m',
    cookTime: '15 m',
    separated: true,
    ingredients: [
        { ...WARM_WATER, amount: '1/2 c', additionalDetails: '', section: ACTIVATE_YEAST },
        { ...WHITE_SUGAR, amount: '1 tsp', additionalDetails: '', section: ACTIVATE_YEAST },
        { ...YEAST, amount: '2 1/4 tsp', additionalDetails: '', section: ACTIVATE_YEAST },
        { ...ALL_PURPOSE_FLOUR, amount: '2 1/4 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...YOGURT, amount: '1/2 c', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '1/2 tsp', additionalDetails: 'plus more to taste', section: SECTIONS.MAIN },
        { ...OLIVE_OIL, amount: '1 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '3 Tbsp', additionalDetails: 'melted', section: SECTIONS.MAIN },
        { ...CILANTRO, amount: '2 sprigs', additionalDetails: 'chopped', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: '' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'dutch oven pan' },
        { name: '' },
        { name: '' },
        { name: '' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine warm water and sugar.', type: ACTIVATE_YEAST },
        { step: 'Slowly add the yeast.', type: ACTIVATE_YEAST },
        { step: 'Let the yeast activate and begin to foam (about 5 minutes).', type: ACTIVATE_YEAST },

        { step: 'Mix in flour.', type: MAKE_DOUGH },
        { step: 'Add yogurt, salt and oil. Mix.', type: MAKE_DOUGH },
        { step: 'Transfer dough to a clean work station.', type: MAKE_DOUGH },
        { step: 'Knead until the dough is smooth and shiny (about 10 minutes).', type: MAKE_DOUGH },
        { step: 'Lightly grease bowl.', type: MAKE_DOUGH },
        { step: 'Place dough in bowl and cover with a damp towel.', type: MAKE_DOUGH },
        { step: 'Place bowl in a warm location and let it double in size (about 1 hour).', type: MAKE_DOUGH },

        { step: 'Divide the dough into 8 pieces.', type: COOK_NAAN },
        { step: 'Roll out the dough into 8 inch circles.', type: COOK_NAAN },
        { step: 'Over medium-high heat, heat a dutch oven pan.', type: COOK_NAAN },
        { step: 'Brush one side of dough with water.', type: COOK_NAAN },
        { step: 'Place the dough in the hot pan, wet side down. Cover pan with a lid. Cook until dough puffs and there are some charred spots (about 1 minute).', type: COOK_NAAN },
        { step: 'Flip and cook the other side uncovered (about 1 minute).', type: COOK_NAAN },
        { step: 'Remove from pan and brush each cooked naan with melted butter and sprinkle salt and cilantro.', type: COOK_NAAN },
        { step: 'Repeat until all the other naan is cooked.', type: COOK_NAAN },

        { step: 'Enjoy these delicious breads with your favorite curries.', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Covering the pan with a lid immediately will help the naan puff up and be lighter in texture.' },
    ]
};