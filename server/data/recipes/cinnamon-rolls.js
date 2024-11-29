const cooked1 = '../assets/Products/cinnamon-rolls-cooked-1.jpeg';
const cooked2 = '../assets/Products/cinnamon-rolls-cooked-2.jpeg';
const cooked3 = '../assets/Products/cinnamon-rolls-cooked-3.jpeg';
const dough1 = '../assets/Products/cinnamon-rolls-dough-1.jpeg';
const dough2 = '../assets/Products/cinnamon-rolls-dough-2.jpeg';
const dough3 = '../assets/Products/cinnamon-rolls-dough-3.jpeg';
const dough4 = '../assets/Products/cinnamon-rolls-dough-4.jpeg';
const dough5 = '../assets/Products/cinnamon-rolls-dough-5.jpeg';
const dough6 = '../assets/Products/cinnamon-rolls-dough-6.jpeg';
const dough7 = '../assets/Products/cinnamon-rolls-dough-7.jpeg';
const dough8 = '../assets/Products/cinnamon-rolls-dough-8.jpeg';
const dough9 = '../assets/Products/cinnamon-rolls-dough-9.jpeg';
const dough10 = '../assets/Products/cinnamon-rolls-dough-10.jpeg';
const filling1 = '../assets/Products/cinnamon-rolls-filling-1.jpeg';
const filling2 = '../assets/Products/cinnamon-rolls-filling-2.jpeg';
const filling3 = '../assets/Products/cinnamon-rolls-filling-3.jpeg';
const filling4 = '../assets/Products/cinnamon-rolls-filling-4.jpeg';
const filling5 = '../assets/Products/cinnamon-rolls-filling-5.jpeg';
const filling6 = '../assets/Products/cinnamon-rolls-filling-6.jpeg';
const filling7 = '../assets/Products/cinnamon-rolls-filling-7.jpeg';
const filling8 = '../assets/Products/cinnamon-rolls-filling-8.jpeg';
const filling9 = '../assets/Products/cinnamon-rolls-filling-9.jpeg';
const filling10 = '../assets/Products/cinnamon-rolls-filling-10.jpeg';
const filling11 = '../assets/Products/cinnamon-rolls-filling-11.jpeg';
const frosted1 = '../assets/Products/cinnamon-rolls-frosted-1.jpeg';
const frosted2 = '../assets/Products/cinnamon-rolls-frosted-2.jpeg';
const frosting1 = '../assets/Products/cinnamon-rolls-frosting-1.jpeg';
const frosting2 = '../assets/Products/cinnamon-rolls-frosting-2.jpeg';
const frosting3 = '../assets/Products/cinnamon-rolls-frosting-3.jpeg';
const frosting4 = '../assets/Products/cinnamon-rolls-frosting-4.jpeg';
const plated1 = '../assets/Products/cinnamon-rolls-plated-1.jpeg';
const plated2 = '../assets/Products/cinnamon-rolls-plated-2.jpeg';
const plated3 = '../assets/Products/cinnamon-rolls-plated-3.jpeg';
const plated4 = '../assets/Products/cinnamon-rolls-plated-4.jpeg';
const plated5 = '../assets/Products/cinnamon-rolls-plated-5.jpeg';
const { GENRES, METHODS, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { YEAST, WHITE_SUGAR, EGGS, EGG_YOLKS, UNSALTED_BUTTER, BREAD_FLOUR, SALT, BROWN_SUGAR, CINNAMON, CREAM_CHEESE, POWDERED_SUGAR, VANILLA_EXTRACT, MILK } = require('./ingredients');

module.exports = {
    cardName: 'Cinnamon Rolls',
    name: 'Cinnamon Rolls',
    img: plated3,
    available: true,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    yields: '9 servings',
    prepTime: '2 h',
    cookTime: '20 m',
    websites: [
        { label: 'Cinnamon Rolls', link: 'https://www.ambitiouskitchen.com/best-cinnamon-rolls/' }
    ],
    separated: true,
    ingredients: [
        { ...MILK, amount: '3/4 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...YEAST, amount: '2 1/4 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...WHITE_SUGAR, amount: '1/4 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...EGGS, amount: '1', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...EGG_YOLKS, amount: '1', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...UNSALTED_BUTTER, amount: '1/4 c', additionalDetails: 'melted', section: SECTIONS.DOUGH },
        { ...BREAD_FLOUR, amount: '3 c', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...SALT, amount: '3/4 tsp', additionalDetails: '', section: SECTIONS.DOUGH },
        { ...UNSALTED_BUTTER, amount: '1/4 c', additionalDetails: 'softened', section: SECTIONS.FILLING },
        { ...BROWN_SUGAR, amount: '2/3 c', additionalDetails: '', section: SECTIONS.FILLING },
        { ...CINNAMON, amount: '1 1/2 Tbsp', additionalDetails: '', section: SECTIONS.FILLING },
        { ...CREAM_CHEESE, amount: '4 oz', additionalDetails: 'softened', section: SECTIONS.FROSTING },
        { ...UNSALTED_BUTTER, amount: '3 Tbsp', additionalDetails: 'softened', section: SECTIONS.FROSTING },
        { ...POWDERED_SUGAR, amount: '3/4 c', additionalDetails: '', section: SECTIONS.FROSTING },
        { ...VANILLA_EXTRACT, amount: '1/2 tsp', additionalDetails: '', section: SECTIONS.FROSTING },
    ],
    appliances: [
        { name: 'microwave' },
        { name: 'stand mixer' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'microwavable bowl' },
        { name: '2 mixing bowls' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'Add milk to a microwavable bowl and microwave for 40 to 45 seconds. It should be about 110ºF (or like warm bath water).', type: SECTIONS.DOUGH, img: dough1 },
        { step: 'Transfer milk to a bowl in a stand mixer.', type: SECTIONS.DOUGH, img: dough2 },
        { step: 'Add egg, yolk, sugar, and melted butter. Mix.', type: SECTIONS.DOUGH, img: dough3 },
        { step: 'Add flour and salt. Mix until it forms a dough.', type: SECTIONS.DOUGH, img: [dough4, dough5] },
        { step: 'Attach the dough hook and knead the dough on medium speed for 8 minutes. It should form a ball and be only slightly sticky. If it\'s too sticky (i.e. sticking to the bottom of the mixer), add up to 2 tablespoons of bread flour.', type: SECTIONS.DOUGH },
        { step: 'Oil a mixing bowl, transfer dough.', type: SECTIONS.DOUGH, img: [dough6, dough7, dough8] },
        { step: 'Cover with plastic wrap and warm towel.', type: SECTIONS.DOUGH, img: [dough9, dough10] },
        { step: 'Let the dough double in size (about 1 to 1 1/2 hours).', type: SECTIONS.DOUGH },
        { step: 'Line a baking sheet with a silicon baking mat.', type: SECTIONS.DOUGH },
        { step: 'Roll out the dough on a clean, well-floured surface to about 14x9 inches.', type: SECTIONS.DOUGH, img: filling4 },
        { step: 'Spread softened butter on dough with a quarter inch from the border.', type: SECTIONS.FILLING, img: filling5 },
        { step: 'In a small bowl, combine brown sugar and cinnamon.', type: SECTIONS.FILLING, img: [filling1, filling2, filling3] },
        { step: 'Sprinkle cinnamon sugar over buttered dough.', type: SECTIONS.FILLING, img: filling6 },
        { step: 'Rub cinnamon sugar into the butter.', type: SECTIONS.FILLING, img: filling7 },
        { step: 'Tightly roll the dough from the shorter side.', type: SECTIONS.FILLING, img: [filling8, filling9] },
        { step: 'Using a serrated knife, cut the rolls into 1 inch.', type: SECTIONS.FILLING, img: filling10 },
        { step: 'Cover the rolls with plastic wrap and a warm towel. Let it rise again for 30 to 45 minutes.', type: SECTIONS.FILLING, img: filling11 },
        { step: 'Preheat the oven to 350ºF.', type: SECTIONS.BAKE },
        { step: 'Remove the plastic wrap and the towel.', type: SECTIONS.BAKE },
        { step: 'Bake until the edges are slightly golden brown (about 20 to 25 minutes). Do not bake all the way through to prevent it from being dried out in the center.', type: SECTIONS.BAKE, img: [cooked1, cooked2, cooked3] },
        { step: 'Let the rolls cooled for 5 to 10 minutes.', type: SECTIONS.BAKE },
        { step: 'In a mixing bowl, combine frosting ingredients.', type: SECTIONS.FROSTING, img: [frosting1, frosting2, frosting3, frosting4] },
        { step: 'Spread frosting over cinnamon rolls and enjoy warm!', type: SECTIONS.SERVE, img: [frosted1, frosted2, plated1, plated2, plated4, plated5] },
    ]
};