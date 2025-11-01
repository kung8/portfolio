const drumstick1 = '../assets/Products/baked-chicken-drumstick-1.jpeg';
const drumstick2 = '../assets/Products/baked-chicken-drumstick-2.jpeg';
const drumstick3 = '../assets/Products/baked-chicken-drumstick-3.jpeg';
const drumstick4 = '../assets/Products/baked-chicken-drumstick-4.jpeg';
const drumstick5 = '../assets/Products/baked-chicken-drumstick-5.jpeg';
const drumstick6 = '../assets/Products/baked-chicken-drumstick-6.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BAKING_PAN,
    BASTING_BRUSH,
    BLACK_PEPPER,
    CAYENNE_PEPPER,
    CHICKEN_DRUMSTICKS,
    GARLIC_POWDER,
    OLIVE_OIL,
    ONION_POWDER,
    OVEN,
    PAPRIKA,
    SALT,
    SMALL_BOWL,
} = require('./ingredients');

module.exports = {
    cardName: 'Baked Chicken Drumsticks',
    name: 'Baked Chicken Drumsticks',
    img: drumstick4,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.RICE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Baked Chicken',
            link: 'https://healthyrecipesblogs.com/baked-drumsticks/',
            authors: ['Vered DeLeeuw'],
            finder: 'Kevin Ung',
        },
    ],
    ingredients: [
        { ...CHICKEN_DRUMSTICKS, amount: 10, unit: INGREDIENT_UNITS.PIECE, additionalDetails: 'skin on', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...ONION_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CAYENNE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.OIL },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
        BASTING_BRUSH,
        SMALL_BOWL,
    ],
    directions: [
        { step: `Preheat the oven to 400ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Place the chicken in the baking pan in a single layer.`, section: SECTIONS.PREP_CHICKEN },

        { step: `In a bowl, mix the "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.PREP_SEASONINGS, img: drumstick1 },
        { step: `Add oil. Mix until incorporated.`, section: SECTIONS.PREP_SEASONINGS, img: drumstick2 },

        { step: `With a basting brush, coat the top of the chicken.`, section: SECTIONS.BASTE, img: drumstick3 },

        { step: `Bake until chicken is cooked (about 40 to 50 minutes).`, section: SECTIONS.BAKE, img: drumstick4 },

        { step: `Transfer out of pan to avoid the oil gelatinizing around the chicken.`, section: SECTIONS.TRANSFER, img: drumstick5 },

        { step: `Serve with rice and your favorite veggies.`, section: SECTIONS.SERVE, img: drumstick6 },
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
            instruction: 'Bake at 350ºF until it reaches an internal temperature of 165ºF (about 20 to 25 minutes).',
        },
    ],
    mealPrep: true,
};