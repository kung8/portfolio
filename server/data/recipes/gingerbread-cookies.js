const dough1 = '../assets/Products/gingerbread-men-cookies-dough-1.jpeg';
const dough2 = '../assets/Products/gingerbread-men-cookies-dough-2.jpeg';
const dough3 = '../assets/Products/gingerbread-men-cookies-dough-3.jpeg';
const dough4 = '../assets/Products/gingerbread-men-cookies-dough-4.jpeg';
const dough5 = '../assets/Products/gingerbread-men-cookies-dough-5.jpeg';
const dough6 = '../assets/Products/gingerbread-men-cookies-dough-6.jpeg';
const dough7 = '../assets/Products/gingerbread-men-cookies-dough-7.jpeg';
const dough8 = '../assets/Products/gingerbread-men-cookies-dough-8.jpeg';
const dough9 = '../assets/Products/gingerbread-men-cookies-dough-9.jpeg';
const dough11 = '../assets/Products/gingerbread-men-cookies-dough-11.jpeg';

const cookies1 = '../assets/Products/gingerbread-men-cookies-1.jpeg';
const cookies2 = '../assets/Products/gingerbread-men-cookies-2.jpeg';
const cookies3 = '../assets/Products/gingerbread-men-cookies-3.jpeg';
const cookies4 = '../assets/Products/gingerbread-men-cookies-4.jpeg';
const cookies5 = '../assets/Products/gingerbread-men-cookies-5.jpeg';
const cookies7 = '../assets/Products/gingerbread-men-cookies-7.jpeg';
const cookies8 = '../assets/Products/gingerbread-men-cookies-8.jpeg';
const cookies11 = '../assets/Products/gingerbread-men-cookies-11.jpeg';
const cookies13 = '../assets/Products/gingerbread-men-cookies-13.jpeg';

const frosting1 = '../assets/Products/gingerbread-men-cookies-frosting-1.jpeg';
const frosting2 = '../assets/Products/gingerbread-men-cookies-frosting-2.jpeg';
const frosting3 = '../assets/Products/gingerbread-men-cookies-frosting-3.jpeg';
const frosting4 = '../assets/Products/gingerbread-men-cookies-frosting-4.jpeg';

const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, UNITS, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BROWN_SUGAR, BAKING_SODA, CINNAMON, GROUND_GINGER, GROUND_CLOVES, SALT, UNSALTED_BUTTER, MOLASSES, MILK, POWDERED_SUGAR } = require('./ingredients');

const GINGERBREAD_DRY_INGREDIENTS = 'Gingerbread Dry Ingredients';
const GINGERBREAD_BATTER = 'Gingerbread Batter';
const BAKING = 'Baking';
const FROSTING = 'Frosting';

module.exports = {
    cardName: 'Gingerbread Cookies',
    name: 'Gingerbread Cookies',
    img: cookies13,
    available: true,
    recommended: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKING],
    type: [TYPES.COOKIE],
    yields: { amount: 2, unit: YIELD_UNITS.DOZEN },
    prepTime: '25 m',
    cookTime: '10 m',
    waitTime: '2 h',
    websites: [
        { label: 'Gingerbread Cookie', link: 'https://tastesbetterfromscratch.com/gingerbread-cookies/' }
    ],
    separated: true,
    ingredients: [
        { ...ALL_PURPOSE_FLOUR, amount: 3, unit: UNITS.CUP, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...BROWN_SUGAR, amount: 3 / 4, unit: UNITS.CUP, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...BAKING_SODA, amount: 3 / 4, unit: UNITS.TEASPOON, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...CINNAMON, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...GROUND_GINGER, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...GROUND_CLOVES, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },
        { ...SALT, amount: 1 / 2, unit: UNITS.TEASPOON, additionalDetails: '', section: GINGERBREAD_DRY_INGREDIENTS },

        { ...UNSALTED_BUTTER, amount: 12, unit: UNITS.TABLESPOON, additionalDetails: 'room temperature, divided into 12 pieces', section: GINGERBREAD_BATTER },
        { ...MOLASSES, amount: 3 / 4, unit: UNITS.CUP, additionalDetails: '', section: GINGERBREAD_BATTER },
        { ...MILK, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: GINGERBREAD_BATTER },

        { ...UNSALTED_BUTTER, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: FROSTING },
        { ...MILK, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: FROSTING },
        { ...POWDERED_SUGAR, amount: 2, unit: UNITS.CUP, additionalDetails: '', section: FROSTING },
    ],
    appliances: [
        { name: 'stand mixer' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'pastry blender/attachment' },
        { name: '2 baking sheets' },
        { name: '2 silicon baking mat' },
        { name: 'rolling pin' },
        { name: 'cooling rack' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'In a stand mixer, combine all the the "Gingerbread Dry Ingredients".', type: GINGERBREAD_DRY_INGREDIENTS, img: [dough1, dough2] },
        { step: 'Add the divided butter to the dry ingredients.', type: GINGERBREAD_BATTER, img: [dough3, dough4] },
        { step: 'Cut the butter using a pastry blender until it becomes very fine.', type: GINGERBREAD_BATTER, img: dough5 },
        { step: 'Add the molasses and milk to the bowl. Mix on low for about 30 seconds.', type: GINGERBREAD_BATTER, img: [dough6, dough7, dough8] },
        { step: 'Divide the dough into two. Form them into balls.', type: GINGERBREAD_BATTER, img: dough9 },
        { step: 'Wrap the balls with plastic wrap and refrigerate for 2 hours or overnight. This is to help the dough be less sticky.', type: GINGERBREAD_BATTER, img: dough11 },

        { step: 'Preheat the oven to 350ºF.', type: BAKING },
        { step: 'Place silicon baking mats on baking sheets.', type: BAKING, img: cookies2 },
        { step: 'Flour a clean surface and place one ball of dough on top.', type: BAKING, img: cookies1 },
        { step: 'Lightly flatten the dough so there is more surface area for the flour. Lightly top the dough and rolling pin with flour.', type: BAKING, img: cookies3 },
        { step: 'Roll out the dough to about 1/4 inch thick.', type: BAKING, img: cookies4 },
        { step: 'Use a cookie cutter to cut out gingerbread men or whatever design you want.', type: BAKING },
        { step: 'Place these cookies on a baking sheet and refrigerate while you prepare the second dough ball.', type: BAKING, img: [cookies5] },
        { step: 'Bake until the center is set and does not give much when lightly pressed (about 8 to 11 minutes). Avoid overbaking.', type: BAKING, img: cookies8 },
        { step: 'Transfer to a cooling rack and let cool completely before frosting.', type: BAKING, img: cookies7 },

        { step: 'In a mixing bowl, combine butter, milk and half of the powdered sugar. Mix until uniform.', type: FROSTING, img: [frosting1, frosting2] },
        { step: 'Add remaining powdered sugar. Mix until uniform.', type: FROSTING, img: [frosting3, frosting4] },

        { step: 'Optionally frost the gingerbread men and enjoy these simple childhood treats.', type: SECTIONS.SERVE, img: cookies11 },
    ],
    notes: [
        { note: 'I personally prefer this without the frosting.' }
    ]
};