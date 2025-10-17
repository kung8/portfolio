const sloppy1 = '../assets/Products/sloppy-joes-1.jpeg';
const sloppy2 = '../assets/Products/sloppy-joes-2.jpeg';
const sloppy3 = '../assets/Products/sloppy-joes-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BLACK_PEPPER,
    BROWN_SUGAR,
    GARLIC,
    GROUND_BEEF,
    HAMBURGER_BUNS,
    OLIVE_OIL,
    RED_BELL_PEPPER,
    SALT,
    TOMATO_SAUCE,
    WORCESTERSHIRE_SAUCE,
    YELLOW_MUSTARD,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Sloppy Joes',
    name: 'Sloppy Joes',
    img: sloppy3,
    recipeAuthors: ['Natasha Kravchuk'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SAUTE],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_LAMB, DIET.NO_SHELLFISH],
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
        { step: 'Chop up the onions and bell peppers.', section: SECTIONS.MAIN },
        { step: 'Mince the garlic.', section: SECTIONS.MAIN },
        { step: 'In a bowl, combine the worcestershire sauce, mustard, brown sugar, and tomato sauce.', section: SECTIONS.MAIN },
        { step: 'Over medium heat, heat a pan with olive oil.', section: SECTIONS.MAIN },
        { step: 'Add the ground beef to the pan and saute and break up the beef chunks (about 5 minutes).', section: SECTIONS.MAIN, img: sloppy1 },
        { step: 'Season with salt and pepper and add the onions and peppers to the pan.', section: SECTIONS.MAIN, img: sloppy2 },
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