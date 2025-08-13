const breadcrumb = '../assets/Products/chicken-cordon-bleu-breadcrumb.jpeg';
const cookedZoomed = '../assets/Products/chicken-cordon-bleu-cooked-zoomed.jpeg';
const hamAndCheese = '../assets/Products/chicken-cordon-bleu-ham-and-cheese.jpeg';
const zoomed = '../assets/Products/chicken-cordon-bleu-on-plate-zoomed.jpeg';
const rawGrouped = '../assets/Products/chicken-cordon-bleu-raw-grouped.jpeg';
const rawSlices = '../assets/Products/chicken-cordon-bleu-raw-slices.jpeg';
const saltAndPepper = '../assets/Products/chicken-cordon-bleu-salt-and-pepper.jpeg';
const plated1 = '../assets/Products/chicken-cordon-bleu-plated-1.jpeg';
const sauce1 = '../assets/Products/chicken-cordon-bleu-sauce-1.jpeg';
const sauce3 = '../assets/Products/chicken-cordon-bleu-sauce-3.jpeg';
const cooked1 = '../assets/Products/chicken-cordon-bleu-cooked-1.jpeg';

const { CATEGORIES, SECTIONS, GENRES, METHODS, PROTEIN, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, REHEAT_METHODS, STORAGE_LOCATION, STORAGE_CONTAINER, STORAGE_DURATION_UNIT } = require('./constants');
const {
    UNSALTED_BUTTER,
    MAYONNAISE,
    YELLOW_MUSTARD,
    SALT,
    BLACK_PEPPER,
    COOKED_HAM,
    CORN_FLAKES_CEREAL,
    BONELESS_AND_SKINLESS_CHICKEN_BREAST,
    PROVOLONE_CHEESE,
} = require('./ingredients');

module.exports = {
    cardName: 'Chicken Cordon Bleu',
    name: 'Chicken Cordon Bleu',
    img: zoomed,
    recipeAuthors: ['Lauren Allen'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { label: 'Chicken Cordon Bleu', link: 'https://tastesbetterfromscratch.com/chicken-cordon-bleu/' }
    ],
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...COOKED_HAM, amount: 8, unit: '', additionalDetails: 'halved slices', section: SECTIONS.MAIN },
        { ...PROVOLONE_CHEESE, amount: 8, unit: '', additionalDetails: 'halved slices', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...CORN_FLAKES_CEREAL, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'crushed', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 6, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MAYONNAISE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...YELLOW_MUSTARD, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
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
        { step: 'Cut chicken breast in half horizontally so it is less thick and will be easier to work with.', section: SECTIONS.MAIN, img: rawSlices },
        { step: 'Pat the chicken dry with paper towels.', section: SECTIONS.MAIN },
        { step: 'Lay the halved cheese slices and halved ham slices on top of the breasts.', section: SECTIONS.MAIN, img: hamAndCheese },
        { step: 'Fold over the chicken to enclose the ham and cheese.', section: SECTIONS.MAIN, img: rawGrouped },
        { step: 'Preheat the oven to 400ºF when ready to bake.', section: SECTIONS.MAIN },
        { step: 'Crush the cornflakes cereal until it becomes fine and place in a bowl as a "dredging" station.', section: SECTIONS.MAIN },
        { step: 'Add salt and pepper to the chicken on both sides.', section: SECTIONS.MAIN, img: saltAndPepper },
        { step: 'Melt the butter and brush the chicken on both sides.', section: SECTIONS.MAIN },
        { step: 'Dip the chicken into the cornflakes and place in a baking pan.', section: SECTIONS.MAIN, img: breadcrumb },
        { step: 'Bake on the center rack for 30 minutes, or until the chicken is cooked through (160ºF).', section: SECTIONS.MAIN, img: cooked1 },
        { step: 'Warm mayo and mustard together in a sauce pan right before you serve it with the chicken cordon bleu.', section: SECTIONS.SAUCE, img: [sauce1, sauce3] },
        { step: 'Serve the chicken cordon bleu with the warm mayo and mustard sauce.', section: SECTIONS.SERVE, img: [cookedZoomed, plated1] },
    ],
    notes: [
        'You can choose to freeze the chicken cordon bleu up to 3 months. Thaw in the refrigerator overnight before baking.'
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Place on a wire rack in a baking sheet. Bake at 350ºF until heat through (about 10 to 15 minutes).',
        },
    ],
    mealPrep: false,
};