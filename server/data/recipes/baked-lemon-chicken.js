const chicken1 = '../assets/Products/baked-lemon-chicken-1.jpeg';
const chicken2 = '../assets/Products/baked-lemon-chicken-2.jpeg';
const chicken3 = '../assets/Products/baked-lemon-chicken-3.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
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

const LEMON_SLICES_SECTION = 'Lemon Slices';

module.exports = {
    cardName: 'Baked Lemon Chicken',
    name: 'Baked Lemon Chicken',
    img: chicken3,
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
        {
            label: 'Baked Lemon Chicken',
            link: 'https://www.lecremedelacrumb.com/easy-healthy-baked-lemon-chicken/',
            authors: ['Tiffany'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CHICKEN_WINGS, amount: 10, unit: INGREDIENT_UNITS.PIECES, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...CHICKEN_BROTH, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON_JUICE, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...ITALIAN_SEASONING, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SAUCE },

        { ...LEMON, amount: '', unit: '', additionalDetails: 'sliced', section: LEMON_SLICES_SECTION },

        { ...ROSEMARY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
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
        { step: `Preheat the oven to 400ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Over medium-high heat, melt butter.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Add chicken wings to the pan and cook for 2 to 3 minutes on each side until browned.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Transfer chicken to baking pan.`, section: SECTIONS.COOK_CHICKEN },

        { step: `In a small bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE },
        { step: `Pour the sauce over the chicken and add lemon slices.`, section: SECTIONS.ASSEMBLE },
        { step: `Bake for 20 to 30 minutes.`, section: SECTIONS.BAKE, img: chicken1 },
        { step: `Serve with rice and garnish with fresh rosemary.`, section: SECTIONS.SERVE, img: chicken2 },
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