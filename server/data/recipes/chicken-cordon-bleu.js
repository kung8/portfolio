const breadcrumb = '../assets/Products/chicken-cordon-bleu-breadcrumb.jpeg';
const cookedZoomed = '../assets/Products/chicken-cordon-bleu-cooked-zoomed.jpeg';
const cooked = '../assets/Products/chicken-cordon-bleu-cooked.jpeg';
const hamAndCheese = '../assets/Products/chicken-cordon-bleu-ham-and-cheese.jpeg';
const zoomed = '../assets/Products/chicken-cordon-bleu-on-plate-zoomed.jpeg';
const rawGrouped = '../assets/Products/chicken-cordon-bleu-raw-grouped.jpeg';
const rawSlices = '../assets/Products/chicken-cordon-bleu-raw-slices.jpeg';
const saltAndPepper = '../assets/Products/chicken-cordon-bleu-salt-and-pepper.jpeg';

const { CATEGORIES, SECTIONS, GENRES, METHODS, PROTEIN, TYPES } = require('./constants');
const {
    UNSALTED_BUTTER,
    MAYONNAISE,
    YELLOW_MUSTARD,
    SALT,
    BLACK_PEPPER,
    COOKED_HAM,
    CORN_FLAKES_CEREAL,
    SWISS_CHEESE,
    BONELESS_AND_SKINLESS_CHICKEN_BREAST,
} = require('./ingredients');

module.exports = {
    cardName: 'Chicken Cordon Bleu',
    name: 'Chicken Cordon Bleu',
    img: cookedZoomed,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: '8 servings',
    prepTime: '20 m',
    cookTime: '30 m',
    separated: true,
    websites: [
        'https://tastesbetterfromscratch.com/chicken-cordon-bleu/'
    ],
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: '4', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COOKED_HAM, amount: '8', additionalDetails: 'halved slices', section: SECTIONS.MAIN },
        { ...SWISS_CHEESE, amount: '8', additionalDetails: 'halved slices', section: SECTIONS.MAIN },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...CORN_FLAKES_CEREAL, amount: '3 c', additionalDetails: 'crushed', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: '6 Tbsp', additionalDetails: '', section: SECTIONS.MAIN },
        { ...MAYONNAISE, amount: '1 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...YELLOW_MUSTARD, amount: '1 - 2 tsp', additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'paper towel' },
        { name: 'small bowls' },
        { name: 'basting brush' },
        { name: 'baking pan' },
        { name: 'sauce pan' },
    ],
    directions: [
        { step: 'Cut chicken breast in half horizontally so it is less thick and will be easier to work with.', type: SECTIONS.MAIN, img: rawSlices },
        { step: 'Pat the chicken dry with paper towels.', type: SECTIONS.MAIN },
        { step: 'Lay the halved cheese slices and halved ham slices on top of the breasts.', type: SECTIONS.MAIN, img: hamAndCheese },
        { step: 'Fold over the chicken to enclose the ham and cheese.', type: SECTIONS.MAIN, img: rawGrouped },
        { step: 'Preheat the oven to 400ºF when ready to bake.', type: SECTIONS.MAIN },
        { step: 'Crush the cornflakes cereal until it becomes fine and place in a bowl as a "dredging" station.', type: SECTIONS.MAIN },
        { step: 'Add salt and pepper to the chicken on both sides.', type: SECTIONS.MAIN, img: saltAndPepper },
        { step: 'Melt the butter and brush the chicken on both sides.', type: SECTIONS.MAIN },
        { step: 'Dip the chicken into the cornflakes and place in a baking pan.', type: SECTIONS.MAIN, img: breadcrumb },
        { step: 'Bake on the center rack for 30 minutes, or until the chicken is cooked through (160ºF).', type: SECTIONS.MAIN, img: cooked },
        { step: 'Warm mayo and mustard together in a sauce pan right before you serve it with the chicken cordon bleu.', type: SECTIONS.SAUCE },
        { step: 'Serve the chicken cordon bleu with the warm mayo and mustard sauce.', type: SECTIONS.SERVE, img: zoomed },
    ],
    notes: [
        'You can choose to freeze the chicken cordon bleu up to 3 months. Thaw in the refrigerator overnight before baking.'
    ]
};