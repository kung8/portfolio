const single = '../assets/Products/pretzel-zoomed-in.jpeg';
const pretzels = '../assets/Products/pretzels.jpeg';
const additional = '../assets/Products/pretzel-additional-ingredients.jpeg';
const ball = '../assets/Products/pretzel-dough-ball.jpeg';
const dough = '../assets/Products/pretzel-dough.jpeg';
const drained = '../assets/Products/pretzel-drained.jpeg';
const yeast = '../assets/Products/pretzel-water-and-yeast.jpeg';
const boiled = '../assets/Products/pretzels-boiled.jpeg';
const covered = '../assets/Products/pretzels-dough-covered.jpeg';
const formed = '../assets/Products/pretzels-formed.jpeg';
// const oven = '../assets/Products/pretzels-in-oven.jpeg';
const raw = '../assets/Products/pretzels-on-baking-sheet-raw.jpeg';
const rope = '../assets/Products/pretzels-rope.jpeg';
const { CATEGORIES, SECTIONS, GENRES, METHODS } = require("./constants");

module.exports = {
    cardName: 'Pretzel',
    name: 'Pretzel',
    img: single,
    available: true,
    category: [CATEGORIES.DESSERT, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    yields: '12',
    prepTime: '25 m',
    cookTime: '15 m',
    separated: true,
    ingredients: [
        { name: 'warm water', amount: '1 1/2 c', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'instant yeast', amount: '2 1/4 tsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'salt', amount: '1 tsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'brown sugar', amount: '1 Tbsp', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'unsalted butter', amount: '1 Tbsp', additionalDetails: 'melted', optional: false, section: SECTIONS.DOUGH },
        { name: 'all-purpose flour', amount: '4 c', additionalDetails: '', optional: false, section: SECTIONS.DOUGH },
        { name: 'coarse salt', amount: '', additionalDetails: 'sprinkling', optional: false, section: SECTIONS.DOUGH },
        { name: 'baking soda', amount: '1/2 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { name: 'water', amount: '9 c', additionalDetails: '', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'stand mixer (or hand mixer)' },
        { name: 'slotted spatula' },
        { name: 'silicon mats' },
        { name: 'baking sheets' },
    ],
    directions: [
        { step: 'In a stand mixer bowl, whisk yeast and warm water.', type: SECTIONS.DOUGH, img: yeast },
        { step: 'Let it stand for 1 minute.', type: SECTIONS.DOUGH },
        { step: 'Whisk in salt, brown sugar, and melted butter into mixer.', type: SECTIONS.DOUGH, img: additional },
        { step: 'Add 3 cups of flour into the mix, one at a time.', type: SECTIONS.DOUGH },
        { step: 'Continue to mix until the dough is no longer sticky. Add 3/4 to 1 cup of flour to help with the stickiness.', type: SECTIONS.DOUGH, img: dough },
        { step: 'Once that is ready, continue mixing for a few more minutes (or you can knead the dough).', type: SECTIONS.DOUGH },
        { step: 'Form the dough into a ball.', type: SECTIONS.DOUGH, img: ball },
        { step: 'Cover with a light towel and let sit for 10 minutes.', type: SECTIONS.DOUGH, img: covered },
        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.MAIN },
        { step: 'Prepare baking sheets by lining them with silicon baking mats.', type: SECTIONS.MAIN },
        { step: 'Over medium heat, boil water and the baking soda.', type: SECTIONS.MAIN },
        { step: 'Divide the dough into about 12 balls (1/3 cup sections).', type: SECTIONS.MAIN },
        { step: 'Roll each dough ball into 20"-22" ropes on a clean counter.', type: SECTIONS.MAIN, img: rope },
        { step: 'Form the pretzel shape by holding the ends of the rope and crossing the ends as if tying your shoe. Then twist slightly with your right hand so it comes around the other side and place the two rope ends over the bottom of the pretzel.', type: SECTIONS.MAIN, img: formed },
        { step: 'Once all of the pretzels are created, you will carefully drop in one or two pretzels at a time into the boiling water. And let each of the pretzels sit in the water for 20 to 30 seconds.', type: SECTIONS.MAIN, img: boiled },
        { step: 'Remove each pretzel with a slotted spatula and let the excess water drain.', type: SECTIONS.MAIN, img: drained },
        { step: 'Place on the baking sheet and sprinkle coarse salt as desired.', type: SECTIONS.MAIN, img: raw },
        { step: 'Bake for 12 to 15 minutes, or until they are golden brown.', type: SECTIONS.MAIN, img: pretzels },
    ]
};