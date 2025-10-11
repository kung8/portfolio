const bbq = '../assets/Products/bbq-chicken-wings.jpeg';
const raw = '../assets/Products/bbq-chicken-wings-raw.jpeg';
const rawInPan = '../assets/Products/bbq-chicken-wings-raw-in-pan.jpeg';
const pan = '../assets/Products/bbq-chicken-wings-in-pan.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require("./constants");
const {
    BAKING_SODA,
    BLACK_PEPPER,
    CHICKEN_DRUMETTES,
    GARLIC,
    HONEY,
    KETCHUP,
    LARGE_BOWL,
    LARGE_PAN,
    LIGHT_SOY_SAUCE,
    PAPRIKA,
    ROOT_BEER,
    SALT,
    STOVE,
    UNSALTED_BUTTER,
    YELLOW_MUSTARD,
} = require('./ingredients');

module.exports = {
    cardName: 'BBQ Chicken Wings',
    name: 'BBQ Chicken Wings',
    img: bbq,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...CHICKEN_DRUMETTES, amount: 14, unit: INGREDIENT_UNITS.PIECE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BAKING_SODA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROOT_BEER, amount: 300, unit: INGREDIENT_UNITS.MILLILITER, additionalDetails: '', section: SECTIONS.MAIN },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...KETCHUP, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...YELLOW_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_BOWL,
        { ...LARGE_PAN, additionalDetails: 'with lid' },
    ],
    directions: [
        { step: 'Marinate chicken in baking soda and water.', section: SECTIONS.MARINADE, img: raw },
        { step: 'Let it rest for 15 minutes', section: SECTIONS.MARINADE },
        { step: 'Put in pan in a concentric circle and combine root beer, butter, salt, paprika, black pepper, garlic and soy sauce.', section: SECTIONS.MAIN, img: rawInPan },
        { step: 'Cover with a lid and cook for 5 minutes.', section: SECTIONS.MAIN },
        { step: 'Uncover and skim off the froth.', section: SECTIONS.MAIN },
        { step: 'Re-cover the pan and continue cooking for 10 minutes.', section: SECTIONS.MAIN },
        { step: 'Uncover and stir.', section: SECTIONS.MAIN },
        { step: 'Re-cover the pan and continue cooking for 5 minutes.', section: SECTIONS.MAIN },
        { step: 'Drain some of the residual liquid.', section: SECTIONS.MAIN },
        { step: 'Add the honey, ketchup and mustard in the pan. Stir.', section: SECTIONS.MAIN, img: pan },
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