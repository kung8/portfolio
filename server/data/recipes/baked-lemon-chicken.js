const plate = '../assets/Products/baked-lemon-chicken-plate.jpeg';
const full = '../assets/Products/baked-lemon-chicken-full-plate.jpeg';
const pan = '../assets/Products/baked-lemon-chicken-pan.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require("./constants");
const {
    BAKING_PAN,
    BLACK_PEPPER,
    CHICKEN_BROTH,
    CHICKEN_WINGS,
    FRYING_PAN,
    GARLIC,
    HONEY,
    ITALIAN_SEASONING,
    LEMON,
    LEMON_JUICE,
    OVEN,
    ROSEMARY,
    SALT,
    SMALL_BOWL,
    UNSALTED_BUTTER,
} = require('./ingredients');

module.exports = {
    cardName: 'Baked Lemon Chicken',
    name: 'Baked Lemon Chicken',
    img: full,
    recipeAuthors: ['Tiffany'],
    recipeFinder: 'Kevin Ung',
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
        { ...CHICKEN_BROTH, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
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
        OVEN
    ],
    supplies: [
        BAKING_PAN,
        FRYING_PAN,
        SMALL_BOWL,
    ],
    directions: [
        { step: 'Preheat the oven to 400ºF.', section: SECTIONS.MAIN },
        { step: 'Over medium-high heat, melt butter.', section: SECTIONS.MAIN },
        { step: 'Add chicken wings to the pan and cook for 2 to 3 minutes on each side until browned.', section: SECTIONS.MAIN },
        { step: 'Transfer chicken to baking pan.', section: SECTIONS.MAIN },
        { step: 'In a small bowl, mix together chicken broth, lemon juice, honey, garlic, italian seasoning, salt and pepper.', section: SECTIONS.MAIN },
        { step: 'Pour the sauce over the chicken and add lemon slices.', section: SECTIONS.MAIN },
        { step: 'Bake for 20 to 30 minutes.', section: SECTIONS.MAIN, img: pan },
        { step: 'Serve with rice and garnish with fresh rosemary.', section: SECTIONS.SERVE, img: plate },
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
            instruction: 'Cover loosely with foil and bake at 350ºF until it reaches an internal temperature of 165ºF (about 15 to 20 minutes).',
        },
    ],
    mealPrep: true,
};