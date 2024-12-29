const butter = '../assets/Products/snickerdoodle-butter.jpeg';
const creamed = '../assets/Products/snickerdoodle-creamed-sugar.jpeg';
const flour = '../assets/Products/snickerdoodle-flour.jpeg';
const mixture = '../assets/Products/snickerdoodle-cinnamon-sugar-mixture.jpeg';
const ball = '../assets/Products/snickerdoodle-dough-balls.jpeg';
const doughWithMixture = '../assets/Products/snickerdoodle-dough-balls-with-mixture.jpeg';
const oven = '../assets/Products/snickerdoodle-baking-in-oven.jpeg';
const pan = '../assets/Products/snickerdoodle-dough-in-pan.jpeg';
const cooked = '../assets/Products/snickerdoodle-cooked.jpeg';
const full = '../assets/Products/snickerdoodle-cooked-full.jpeg';

const plated1 = '../assets/Products/snickerdoodle-plated-1.jpeg';
const plated2 = '../assets/Products/snickerdoodle-plated-2.jpeg';
const plated3 = '../assets/Products/snickerdoodle-plated-3.jpeg';
const plated4 = '../assets/Products/snickerdoodle-plated-4.jpeg';
const plated5 = '../assets/Products/snickerdoodle-plated-5.jpeg';

const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    CREAM_OF_TARTAR,
    BAKING_SODA,
    SALT,
    UNSALTED_BUTTER,
    WHITE_SUGAR,
    EGGS,
    VANILLA_EXTRACT,
    CINNAMON,
} = require('./ingredients');

const COATING = 'Coating';

module.exports = {
    cardName: 'Snickerdoodles',
    name: 'Snickerdoodle Cookies',
    img: plated1,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: '3 dozen',
    prepTime: '10 m',
    cookTime: '10 m',
    websites: [
        { label: 'Snickerdoodles', link: 'https://lilluna.com/snickerdoodles/' },
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: '2 3/4 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...CREAM_OF_TARTAR, amount: '2 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...BAKING_SODA, amount: '1 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...UNSALTED_BUTTER, amount: '1 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: '1 1/2 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...EGGS, amount: '2', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...VANILLA_EXTRACT, amount: '1 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: '1/3 c', additionalDetails: '', section: COATING },
        { ...CINNAMON, amount: '2 Tbsp', additionalDetails: '', section: COATING },
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
        { step: 'Enjoy these quick, light treats in any mood and any time of the day.', type: SECTIONS.MAIN, img: [full, cooked, plated1, plated2, plated3, plated4, plated5] },
    ]
};