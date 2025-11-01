const wings1 = '../assets/Products/bbq-chicken-wings-1.jpeg';
const wings2 = '../assets/Products/bbq-chicken-wings-2.jpeg';
const wings3 = '../assets/Products/bbq-chicken-wings-3.jpeg';
const wings4 = '../assets/Products/bbq-chicken-wings-4.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BAKING_SODA,
    BLACK_PEPPER,
    CHICKEN_DRUMETTES,
    GARLIC,
    HONEY,
    KETCHUP,
    LARGE_PAN,
    LIGHT_SOY_SAUCE,
    MIXING_BOWL,
    PAPRIKA,
    ROOT_BEER,
    SALT,
    STOVE,
    UNSALTED_BUTTER,
    YELLOW_MUSTARD,
} = require('./ingredients');

const CONDIMENTS_SECTION = 'Condiments';
const ADD_CONDIMENTS = 'Add Condiments';

module.exports = {
    cardName: 'BBQ Chicken Wings',
    name: 'BBQ Chicken Wings',
    img: wings4,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: '',
            link: '',
            authors: [''],
            finder: 'Kevin Ung'
        }
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_DRUMETTES, amount: 14, unit: INGREDIENT_UNITS.PIECE, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...ROOT_BEER, amount: 300, unit: INGREDIENT_UNITS.MILLILITER, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CONDIMENTS_SECTION },
        { ...KETCHUP, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CONDIMENTS_SECTION },
        { ...YELLOW_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CONDIMENTS_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        { ...LARGE_PAN, additionalDetails: 'with lid' },
    ],
    directions: [
        { step: 'In a mixing bowl, add chicken and baking soda.', section: SECTIONS.MARINATE_CHICKEN },
        { step: 'Fill the bowl with water to cover the chicken.', section: SECTIONS.MARINATE_CHICKEN },
        { step: 'Marinate chicken for 15 minutes.', section: SECTIONS.MARINATE_CHICKEN, img: wings1 },

        { step: 'Place chicken in a circle.', section: SECTIONS.COOK_CHICKEN, img: wings2 },
        { step: `In mixing bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.COOK_CHICKEN, img: wings2 },
        { step: 'Cover with a lid and cook for 5 minutes.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Uncover and skim off the froth.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Re-cover the pan and continue cooking for 10 minutes.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Uncover and stir.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Re-cover the pan and continue cooking for 5 minutes.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Drain some of the residual liquid.', section: SECTIONS.COOK_CHICKEN },

        { step: `Add the "${CONDIMENTS_SECTION}" section ingredients. Stir.`, section: ADD_CONDIMENTS, img: wings3 },

        { step: 'Enjoy this light appetizer. Feel free to add some spice if you like a kick.', section: SECTIONS.SERVE },
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
            instruction: 'Cover with foil and bake at 350ºF until heated through (about 10 to 20 minutes). Flip halfway through. Remove foil for the last 5 minutes for crispy wings.',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until heated through (about 5 tto 7 minutes). Flip halfway through.',
        },
    ],
    mealPrep: true,
};