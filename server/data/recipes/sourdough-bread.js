const zoomed = '../assets/Products/sourdough-bread-baked-zoomed.jpeg';
const baked = '../assets/Products/sourdough-bread-baked.jpeg';
const ball = '../assets/Products/sourdough-bread-ball.jpeg';
const covered = '../assets/Products/sourdough-bread-covered.jpeg';
const preheating = '../assets/Products/sourdough-bread-dutch-oven-preheating.jpeg';
const zoomedOut = '../assets/Products/sourdough-bread-in-pan-zoomed-out.jpeg';
const inPan = '../assets/Products/sourdough-bread-in-pan.jpeg';
const mixed = '../assets/Products/sourdough-bread-mixed.jpeg';
const risen = '../assets/Products/sourdough-bread-risen.jpeg';
const scored = '../assets/Products/sourdough-bread-scored.jpeg';
const uncovered = '../assets/Products/sourdough-bread-uncovered.jpeg';
const cut = '../assets/Products/sourdough-bread-cut.jpeg';
const board = '../assets/Products/sourdough-bread-on-board.jpeg';
const { METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    SALT,
    SOURDOUGH_STARTER,
    WARM_WATER,
} = require('./ingredients');

const BAKING = 'Baking';

module.exports = {
    cardName: 'Sourdough Bread',
    name: 'Sourdough Bread',
    img: board,
    available: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.SNACK],
    method: [METHODS.BAKE],
    type: [TYPES.BREAD],
    yields: '6 servings',
    prepTime: '25 m',
    cookTime: '50 m',
    websites: [],
    separated: true,
    ingredients: [
        { ...SOURDOUGH_STARTER, amount: '1 c', additionalDetails: '', section: SECTIONS.DOUGH, link: { id: 'sourdough-starter', url: 'recipes/sourdough-starter' } },
        { ...ALL_PURPOSE_FLOUR, amount: '2 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WARM_WATER, amount: '1 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: '1 1/2 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
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
        { step: 'In a mixing bowl, blend together starter and water.', type: SECTIONS.DOUGH },
        { step: 'Mix in salt and flour.', type: SECTIONS.DOUGH, img: mixed },
        { step: 'Let the mixture rest for 30 to 45 minutes.', type: SECTIONS.DOUGH },
        { step: 'Stretch the dough to loosen. Form a ball.', type: SECTIONS.DOUGH, img: ball },
        { step: 'Cover the bowl and let the dough rest for 5 to 10 hours. It should double in size.', type: SECTIONS.DOUGH, img: [covered, risen] },
        { step: 'When you\'re ready to bake, place a dutch oven pot with a lid on the center rack and set the oven temperature to 450ºF.', type: BAKING, img: preheating },
        { step: 'Score the dough with whatever preferred design.', type: BAKING, img: scored },
        { step: 'Once the oven has reached 450ºF, take out the dutch oven pot and place the dough ball in the pot and return the pot with the lid to the oven.', type: BAKING, img: [inPan, zoomedOut, preheating] },
        { step: 'Bake for 25 to 30 minutes with the lid on.', type: BAKING },
        { step: 'Remove the lid and bake for an additional 10 to 20 minutes.', type: BAKING, img: uncovered },
        { step: 'Remove from oven and let cool.', type: BAKING, img: [baked, zoomed, cut] },
    ]
};