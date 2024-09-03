const butter = '../assets/Products/american-omelette-melting-butter.jpeg';
const interior = '../assets/Products/american-omelette-raw-interior.jpeg';
const spinach = '../assets/Products/american-omelette-spinach-and-cheese.jpeg';
// E.g. of flipping method result
const aerial = '../assets/Products/american-omelette-plated-aerial.jpeg';
// E.g. of folding method result
const halved = '../assets/Products/american-omelette-plated-halved.jpeg';
const split = '../assets/Products/american-omelette-plated-split.jpeg';
const side = '../assets/Products/american-omelette-plated-side.jpeg';
const moreCooked = '../assets/Products/american-omelette-plated-more-cooked.jpeg';
const moreCookedZoomed = '../assets/Products/american-omelette-plated-more-cooked-zoomed.jpeg';
const moreCookedSide = '../assets/Products/american-omelette-plated-more-cooked-side.jpeg';

const { CATEGORIES, SECTIONS, GENRES, METHODS, PROTEIN } = require('./constants');
const {
    EGGS,
    COLD_WATER,
    SALT,
    BLACK_PEPPER,
    SMALL_YELLOW_ONION,
    RED_BELL_PEPPERS,
    ROMA_TOMATO,
    COOKED_HAM,
    BASIL,
    UNSALTED_BUTTER,
    MUSHROOMS,
} = require('./ingredients');

const FLIPPING_METHOD = 'Flipping Method';
const FOLDING_METHOD = 'Folding Method';

module.exports = {
    cardName: 'American Omelette',
    name: 'American Omelette',
    img: moreCookedZoomed,
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.EGG],
    yields: '1 serving',
    prepTime: '5 m',
    cookTime: '10 m',
    separated: true,
    ingredients: [
        { ...EGGS, amount: '2', additionalDetails: '', optional: false },
        { ...COLD_WATER, amount: '', additionalDetails: '', optional: false },
        { ...SALT, amount: '', additionalDetails: 'to taste', optional: false },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', optional: false },
        { ...SMALL_YELLOW_ONION, amount: '1/4', additionalDetails: 'diced', optional: false },
        { ...RED_BELL_PEPPERS, amount: '1/3', additionalDetails: 'diced', optional: false },
        { ...MUSHROOMS, amount: '4 or 5 slices', additionalDetails: 'chopped', optional: true },
        { ...ROMA_TOMATO, amount: '1/4', additionalDetails: 'diced', optional: false },
        { ...COOKED_HAM, amount: '1 slice', additionalDetails: 'diced', optional: false },
        { ...BASIL, amount: '', additionalDetails: 'to taste', optional: false },
        { ...UNSALTED_BUTTER, amount: '1/2 Tbsp', additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'curvy frying pan' },
        { name: 'cutting board and knife' },
        { name: 'small bowl' },
        { name: 'fork' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Prep the vegetables and ham (I use deli lunch meat) and set aside on cutting board.', type: SECTIONS.MAIN },
        { step: 'In a bowl, mix together the eggs, water (no more than 1 Tbsp), salt, pepper, and basil.', type: SECTIONS.MAIN },
        { step: 'Heat up the pan on a medium-high heat. Add the butter. Then add the peppers, mushrooms and onion.', type: SECTIONS.MAIN, img: butter },
        { step: 'Once the onions have browned a little, turn down to medium heat, and add the egg batter.', type: SECTIONS.MAIN, img: [interior, spinach] },
        { step: 'While still keeping it over the heat, tilt and angle the pan so the runny egg on top can spread to more parts of the pan and you can even take the spatula and lift the edges of the cooking egg and let gravity do its job to have the runny egg batter fill underneath it (try to keep it a circle).', type: SECTIONS.MAIN },
        { step: 'Follow either the flipping method or the folding method directions whichever you prefer. The folding method is much easier and quicker, but will definitely have a more gooey center.', type: SECTIONS.MAIN },
        { step: 'Once the egg has mostly cooked and you are able to slide the spatula around the egg, bring the heat back up to the medium-high heat.', type: FLIPPING_METHOD },
        { step: 'Let it cook about half a minute to a minute longer, then it\'s ready to flip. Note if you can slide the pan left and right in the air and the egg doesn\'t move, it is not ready.', type: FLIPPING_METHOD },
        { step: 'I recommend doing this next step over the sink: flipping time (I think it is the hardest part of this whole process). You are going to flip the egg in the air about the height of the diameter of the egg. Angle the pan about 45 degrees downward, and quickly catapult it up in the air with a quick thrust downward, causing it to flip. The tricky part is make sure you catch it.', type: FLIPPING_METHOD },
        { step: 'If you have successfully flipped it then the rest of this will be a piece of cake. Put it right back over the heat and add the tomatoes and ham to one half of the egg.', type: FLIPPING_METHOD },
        { step: 'Let the other side of the egg cook a few minutes.', type: FLIPPING_METHOD },
        { step: 'Fold over the side that doesn\'t have the tomatoes. If the egg could use more time you can carefully flip the egg over again using your spatula this time.', type: FLIPPING_METHOD, img: aerial },
        { step: 'Slowly check the bottom of the egg to see if it is a nice golden brown, add the spinach and cheese before folding the egg.', type: FOLDING_METHOD, img: [side, split, halved, moreCooked, moreCookedSide] },
        { step: 'Enjoy this beautiful piece of art.', type: SECTIONS.MAIN },
    ]
}