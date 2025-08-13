const basilBlended = '../assets/Products/basil-pesto-basil-blended.jpeg';
const basil = '../assets/Products/basil-pesto-basil-in-blender.jpeg';
const pineBlended = '../assets/Products/basil-pesto-blended-pine-nuts.jpeg';
const fresh = '../assets/Products/basil-pesto-fresh-basil.jpeg';
const bowl = '../assets/Products/basil-pesto-in-bowl.jpeg';
const plated = '../assets/Products/basil-pesto-meal-plated.jpeg';
const mixed = '../assets/Products/basil-pesto-mixed.jpeg';
const parmesan = '../assets/Products/basil-pesto-parmesan.jpeg';
const parmesanBlended = '../assets/Products/basil-pesto-parmesan-blended.jpeg';
const pine = '../assets/Products/basil-pesto-pine-nuts.jpeg';
const topped = '../assets/Products/basil-pesto-topped.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, REHEAT_METHODS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const {
    PINE_NUTS,
    LEMON_JUICE,
    GARLIC,
    SEA_SALT,
    BLACK_PEPPER,
    BASIL_LEAF,
    OLIVE_OIL,
    PARMESAN_CHEESE,
    SPAGHETTI_NOODLES
} = require('./ingredients');

module.exports = {
    cardName: 'Basil Pesto',
    name: 'Basil Pesto',
    img: plated,
    recipeAuthors: ['Jeanine', 'Jack'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BLEND],
    protein: [PROTEIN.PINE_NUT],
    type: [TYPES.SAUCE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 1, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pesto', link: "https://www.loveandlemons.com/pesto-recipe" }
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
        { name: 'stove' },
    ],
    supplies: [
        { name: 'blender' },
    ],
    directions: [
        { step: 'In a blender, combine pine nuts, lemon juice, garlic, sea salt, and black pepper until blended.', section: SECTIONS.SAUCE, img: [pine, pineBlended] },
        { step: 'Add basil and oil. Blend.', section: SECTIONS.SAUCE, img: [fresh, basil, basilBlended] },
        { step: 'Add cheese. Blend.', section: SECTIONS.SAUCE },
        { step: 'For more smoother pesto, add more oil.', section: SECTIONS.SAUCE, img: [parmesan, parmesanBlended, bowl] },
        { step: 'Top noodles and mix together.', section: SECTIONS.SERVE, img: [topped, mixed] },
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