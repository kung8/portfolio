const plate = '../assets/Products/baked-lemon-chicken-plate.jpeg';
const full = '../assets/Products/baked-lemon-chicken-full-plate.jpeg';
const pan = '../assets/Products/baked-lemon-chicken-pan.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require("./constants");
const {
    CHICKEN_WINGS,
    UNSALTED_BUTTER,
    CHICKEN_BROTH,
    LEMON_JUICE,
    HONEY,
    GARLIC,
    ITALIAN_SEASONING,
    SALT,
    BLACK_PEPPER,
    ROSEMARY,
    LEMON
} = require('./ingredients');

module.exports = {
    cardName: 'Baked Lemon Chicken',
    name: 'Baked Lemon Chicken',
    img: full,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Baked Lemon Chicken', link: 'https://www.lecremedelacrumb.com/easy-healthy-baked-lemon-chicken/' }
    ],
    ingredients: [
        { ...CHICKEN_WINGS, amount: 10, unit: INGREDIENT_UNITS.PIECES, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: 1/3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LEMON_JUICE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...ITALIAN_SEASONING, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...ROSEMARY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...LEMON, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking pan' },
        { name: 'frying pan' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', type: SECTIONS.MAIN },
        { step: 'Over medium-high heat, melt butter.', type: SECTIONS.MAIN },
        { step: 'Add chicken wings to the pan and cook for 2 to 3 minutes on each side until browned.', type: SECTIONS.MAIN },
        { step: 'Transfer chicken to baking pan.', type: SECTIONS.MAIN },
        { step: 'In a small bowl, mix together chicken broth, lemon juice, honey, garlic, italian seasoning, salt and pepper.', type: SECTIONS.MAIN },
        { step: 'Pour the sauce over the chicken and add lemon slices.', type: SECTIONS.MAIN },
        { step: 'Bake for 20 to 30 minutes.', type: SECTIONS.MAIN, img: pan },
        { step: 'Serve with rice and garnish with fresh rosemary.', type: SECTIONS.SERVE, img: plate },
    ]
};