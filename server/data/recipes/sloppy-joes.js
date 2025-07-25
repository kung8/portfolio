const beef = '../assets/Products/sloppy-joes-beef.jpeg';
const cooked = '../assets/Products/sloppy-joes-cooked.jpeg';
const cooking = '../assets/Products/sloppy-joes-cooking-beef.jpeg';
const garlic = '../assets/Products/sloppy-joes-garlic.jpeg';
const veggies = '../assets/Products/sloppy-joes-raw-veggies.jpeg';
const raw = '../assets/Products/sloppy-joes-raw.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const {
    YELLOW_ONION,
    RED_BELL_PEPPER,
    WORCESTERSHIRE_SAUCE,
    YELLOW_MUSTARD,
    BROWN_SUGAR,
    TOMATO_SAUCE,
    GROUND_BEEF,
    OLIVE_OIL,
    SALT,
    BLACK_PEPPER,
    GARLIC,
    HAMBURGER_BUNS,
} = require('./ingredients');

module.exports = {
    cardName: 'Sloppy Joes',
    name: 'Sloppy Joes',
    img: cooked,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Sloppy Joe', link: 'https://natashaskitchen.com/sloppy-joe-recipe/' }
    ],
    separated: false,
    ingredients: [
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...RED_BELL_PEPPER, amount: 1 / 2, unit: '', additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...WORCESTERSHIRE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...YELLOW_MUSTARD, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...TOMATO_SAUCE, amount: 15, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MAIN },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...HAMBURGER_BUNS, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pan' },
        { name: 'spatula' },
        { name: 'small pan' },
    ],
    directions: [
        { step: 'Chop up the onions and bell peppers.', section: SECTIONS.MAIN, img: veggies },
        { step: 'Mince the garlic.', section: SECTIONS.MAIN, img: garlic },
        { step: 'In a bowl, combine the worcestershire sauce, mustard, brown sugar, and tomato sauce.', section: SECTIONS.MAIN, img: raw },
        { step: 'Over medium heat, heat a pan with olive oil.', section: SECTIONS.MAIN },
        { step: 'Add the ground beef to the pan and saute and break up the beef chunks (about 5 minutes).', section: SECTIONS.MAIN, img: beef },
        { step: 'Season with salt and pepper and add the onions and peppers to the pan.', section: SECTIONS.MAIN, img: cooking },
        { step: 'Add garlic to the pan.', section: SECTIONS.MAIN },
        { step: 'Add the tomato sauce mixture to the pan and bring to a boil.', section: SECTIONS.MAIN },
        { step: 'Reduce to a low heat and let simmer for about 10 to 15 minutes.', section: SECTIONS.MAIN },
        { step: 'Add water to thin if desired.', section: SECTIONS.MAIN },
        { step: 'Toast hamburger buns in another pan with some butter.', section: SECTIONS.MAIN },
        { step: 'Enjoy these sweet sloppy joes. Feel free to add some heat with chili powder.', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store sloppy joe and buns separately. Buns can be stored at room temperature.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over low heat, reheat the sloppy joe in a pan until heated through (about 15 to 20 minutes).',
        },
    ],
    mealPrep: true,
};