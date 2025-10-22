const cabbage1 = '../assets/Products/cabbage-stir-fry-1.jpeg';
const cabbage2 = '../assets/Products/cabbage-stir-fry-2.jpeg';

const { CATEGORIES, GENRES, TYPES, PROTEIN, SECTIONS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_LOCATION, STORAGE_DURATION_UNIT, STORAGE_CONTAINER, REHEAT_METHODS, ALLERGIES, DIET } = require("./constants");
const {
    CABBAGE,
    FRYING_PAN,
    RED_PEPPER_FLAKES,
    SESAME_OIL,
    STOVE,
} = require('./ingredients');

module.exports = {
    cardName: 'Cabbage Stir Fry',
    name: 'Cabbage Stir Fry',
    img: cabbage2,
    available: true,
    recommended: true,
    category: [CATEGORIES.SIDE_DISH, CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.VEGETABLE],
    allergies: [ALLERGIES.SESAME],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 3, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            author: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...CABBAGE, amount: 1 / 2, unit: INGREDIENT_UNITS.HEAD, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...RED_PEPPER_FLAKES, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...SESAME_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN
    ],
    directions: [
        { step: 'Over medium-high heat, in a frying pan add cabbage.', section: SECTIONS.MAIN },
        { step: 'Top with oil and toss or mix until oil has coated cabbage.', section: SECTIONS.MAIN },
        { step: 'Add red pepper flakes as desired. Stir.', section: SECTIONS.MAIN, img: cabbage1 },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave in 30-second intervals until heated through (about 1 to 2 minutes).',
        },
        {
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Add a splash of water. Stir fry until heated through (about 1 to 3 minutes).',
        },
    ],
    mealPrep: true,
};