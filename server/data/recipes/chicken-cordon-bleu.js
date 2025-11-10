const bleu1 = '../assets/Products/chicken-cordon-bleu-1.jpeg';
const bleu2 = '../assets/Products/chicken-cordon-bleu-2.jpeg';
const bleu3 = '../assets/Products/chicken-cordon-bleu-3.jpeg';
const bleu4 = '../assets/Products/chicken-cordon-bleu-4.jpeg';
const bleu5 = '../assets/Products/chicken-cordon-bleu-5.jpeg';
const bleu6 = '../assets/Products/chicken-cordon-bleu-6.jpeg';
const bleu7 = '../assets/Products/chicken-cordon-bleu-7.jpeg';
const bleu8 = '../assets/Products/chicken-cordon-bleu-8.jpeg';
const bleu9 = '../assets/Products/chicken-cordon-bleu-9.jpeg';
const bleu10 = '../assets/Products/chicken-cordon-bleu-10.jpeg';
const bleu11 = '../assets/Products/chicken-cordon-bleu-11.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BAKING_PAN,
    BASTING_BRUSH,
    BLACK_PEPPER,
    BONELESS_AND_SKINLESS_CHICKEN_BREAST,
    COOKED_HAM,
    CORN_FLAKES_CEREAL,
    CUTTING_BOARD,
    KNIFE,
    MAYONNAISE,
    OVEN,
    PAPER_TOWELS,
    PROVOLONE_CHEESE,
    SALT,
    SAUCEPAN,
    SMALL_BOWL,
    UNSALTED_BUTTER,
    YELLOW_MUSTARD,
} = require('./ingredients');

module.exports = {
    cardName: 'Chicken Cordon Bleu',
    name: 'Chicken Cordon Bleu',
    img: bleu11,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Chicken Cordon Bleu', 
            link: 'https://tastesbetterfromscratch.com/chicken-cordon-bleu/',
            authors: ['Lauren Allen'],
            finder: 'Kevin Ung', 
        }
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
        OVEN
    ],
    supplies: [
        CUTTING_BOARD,
        KNIFE,
        PAPER_TOWELS,
        SMALL_BOWL,
        BASTING_BRUSH,
        BAKING_PAN,
        SAUCEPAN,
    ],
    directions: [
        { step: `Cut chicken breast in half horizontally so it is less thick and will be easier to work with.`, section: SECTIONS.MAIN, img: bleu1 },
        { step: `Pat the chicken dry with paper towels.`, section: SECTIONS.MAIN },
        { step: `Lay the halved cheese slices and halved ham slices on top of the breasts.`, section: SECTIONS.MAIN, img: bleu2 },
        { step: `Fold over the chicken to enclose the ham and cheese.`, section: SECTIONS.MAIN, img: bleu3 },
        { step: `Preheat the oven to 400ºF when ready to bake.`, section: SECTIONS.MAIN },
        { step: `Crush the cornflakes cereal until it becomes fine and place in a bowl as a "dredging" station.`, section: SECTIONS.MAIN },
        { step: `Add salt and pepper to the chicken on both sides.`, section: SECTIONS.MAIN, img: bleu4 },
        { step: `Melt the butter and brush the chicken on both sides.`, section: SECTIONS.MAIN },
        { step: `Dip the chicken into the cornflakes and place in a baking pan.`, section: SECTIONS.MAIN, img: bleu5 },
        { step: `Bake on the center rack for 30 minutes, or until the chicken is cooked through (160ºF).`, section: SECTIONS.MAIN, img: bleu6 },
        { step: `Warm mayo and mustard together in a sauce pan right before you serve it with the chicken cordon bleu.`, section: SECTIONS.SAUCE, img: [bleu7, bleu8] },
        { step: `Serve the chicken cordon bleu with the warm mayo and mustard sauce.`, section: SECTIONS.SERVE, img: [bleu9, bleu10] },
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