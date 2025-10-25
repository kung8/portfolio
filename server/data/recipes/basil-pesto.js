const pesto1 = '../assets/Products/basil-pesto-1.jpeg';
const pesto2 = '../assets/Products/basil-pesto-2.jpeg';
const pesto3 = '../assets/Products/basil-pesto-3.jpeg';
const pesto4 = '../assets/Products/basil-pesto-4.jpeg';
const pesto5 = '../assets/Products/basil-pesto-5.jpeg';
const pesto6 = '../assets/Products/basil-pesto-6.jpeg';
const pesto7 = '../assets/Products/basil-pesto-7.jpeg';
const pesto8 = '../assets/Products/basil-pesto-8.jpeg';
const pesto9 = '../assets/Products/basil-pesto-9.jpeg';
const pesto10 = '../assets/Products/basil-pesto-10.jpeg';
const pesto11 = '../assets/Products/basil-pesto-11.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BASIL_LEAF,
    BLACK_PEPPER,
    BLENDER,
    GARLIC,
    LEMON_JUICE,
    OLIVE_OIL,
    PARMESAN_CHEESE,
    PINE_NUTS,
    SEA_SALT,
    SPAGHETTI_NOODLES,
    STOVE,
} = require('./ingredients');

module.exports = {
    cardName: 'Basil Pesto',
    name: 'Basil Pesto',
    img: pesto11,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.PINE_NUT],
    type: [TYPES.SAUCE],
    allergies: [ALLERGIES.TREE_NUT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Pesto', 
            link: "https://www.loveandlemons.com/pesto-recipe",
            authors: ['Jeanine', 'Jack'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...PINE_NUTS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SEA_SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BASIL_LEAF, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OLIVE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SPAGHETTI_NOODLES, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'cooked', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
        BLENDER,
    ],
    directions: [
        { step: 'In a blender, combine pine nuts, lemon juice, garlic, sea salt, and black pepper until blended.', section: SECTIONS.SAUCE, img: [pesto1, pesto2] },
        { step: 'Add basil and oil. Blend.', section: SECTIONS.SAUCE, img: [pesto3, pesto4, pesto5] },
        { step: 'Add cheese. Blend.', section: SECTIONS.SAUCE },
        { step: 'For more smoother pesto, add more oil.', section: SECTIONS.SAUCE, img: [pesto6, pesto7, pesto8] },
        { step: 'Top noodles and mix together.', section: SECTIONS.SERVE, img: [pesto9, pesto10] },
    ],
    store: [
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over low heat, add a little olive oil or water to the pan. Add pesto and stir until heated through.',
        },
    ],
    mealPrep: false,
};