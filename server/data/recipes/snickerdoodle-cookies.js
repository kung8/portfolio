const butter = '../assets/Products/snickerdoodle-butter.jpeg';
const creamed = '../assets/Products/snickerdoodle-creamed-sugar.jpeg';
const flour = '../assets/Products/snickerdoodle-flour.jpeg';
const mixture = '../assets/Products/snickerdoodle-cinnamon-sugar-mixture.jpeg';
const ball = '../assets/Products/snickerdoodle-dough-balls.jpeg';
const doughWithMixture = '../assets/Products/snickerdoodle-dough-ball-with-mixture.jpeg';
const oven = '../assets/Products/snickerdoodle-baking-in-oven.jpeg';
const pan = '../assets/Products/snickerdoodle-dough-in-pan.jpeg';
const cooked = '../assets/Products/snickerdoodle-cooked.jpeg';
const full = '../assets/Products/snickerdoodle-cooked-full.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');

const COATING = 'Coating';

module.exports = {
    cardName: 'Snickerdoodle',
    name: 'Snickerdoodle Cookies',
    img: cooked,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: '3 dozen',
    prepTime: '10 m',
    cookTime: '10 m',
    websites: [
        'https://lilluna.com/snickerdoodles/',
    ],
    separated: true,
    ingredients: [
        { name: 'flour', amount: '2 3/4 c', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'cream of tartar', amount: '2 tsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'baking soda', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'salt', amount: '1/2 tsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'unsalted butter', amount: '1 c', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'sugar', amount: '1 1/2 c', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'eggs', amount: '2', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'vanilla extract', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'sugar', amount: '1/3 c', additionalDetails: '', optional: false, section: COATING },
        { name: 'cinnamon', amount: '2 Tbsp', additionalDetails: '', optional: false, section: COATING },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'small bowl' },
        { name: 'mixing bowl' },
        { name: 'spatula' },
        { name: 'plate' },
        { name: 'baking sheet' },
        { name: 'silicon baking mat' },
    ],
    directions: [
        { step: 'In a small bowl, combine the sugar and cinnamon together.', type: COATING, img: mixture },
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.MAIN },
        { step: 'Place the silicon baking mat on the baking sheet.', type: SECTIONS.MAIN },
        { step: 'In a mixing bowl, mix the softened butter until it is a consistent cream-like texture.', type: SECTIONS.MAIN, img: butter },
        { step: 'Cream together the sugar with the butter.', type: SECTIONS.MAIN, img: creamed },
        { step: 'Combine vanilla and eggs to the creamed butter mixture.', type: SECTIONS.MAIN },
        { step: 'Add the dry ingredients one at a time to the wet batter and mix well. I recommend adding the flour last.', type: SECTIONS.MAIN, img: flour },
        { step: 'Create 1-inch dough balls and place them on a plate to be rolled in the cinnamon-sugar mixture in the next step. I recommend this to keep your hands clean of the cinnamon-sugar.', type: SECTIONS.MAIN, img: ball },
        { step: 'Roll each ball in the cinnamon-sugar mixture.', type: SECTIONS.MAIN, img: doughWithMixture },
        { step: 'Place the coated dough balls on a baking sheet about 2-inches apart.', type: SECTIONS.MAIN, img: pan },
        { step: 'Bake for 8 to 10 minutes.', type: SECTIONS.MAIN, img: oven },
        { step: 'Enjoy these quick, light treats in any mood and any time of the day.', type: SECTIONS.MAIN, img: full },
    ]
};