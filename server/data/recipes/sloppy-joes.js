const sloppy1 = '../assets/Products/sloppy-joes-1.jpeg';
const sloppy2 = '../assets/Products/sloppy-joes-2.jpeg';
const sloppy3 = '../assets/Products/sloppy-joes-3.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
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
        {
            label: 'Sloppy Joe',
            link: 'https://natashaskitchen.com/sloppy-joe-recipe/',
            authors: ['Natasha Kravchuk'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...WORCESTERSHIRE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...YELLOW_MUSTARD, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...TOMATO_SAUCE, amount: 15, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BEEF },

        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'chopped', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1 / 2, unit: '', additionalDetails: 'chopped', section: SECTIONS.VEGGIES },

        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.HERBS },

        { ...HAMBURGER_BUNS, amount: 4, unit: '', additionalDetails: '', section: SECTIONS.SERVE },
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
        { step: `In a bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE },

        { step: 'Over medium heat, heat a pan with olive oil.', section: SECTIONS.COOK_BEEF },
        { step: 'Add ground beef. Saute and break up the beef chunks (about 5 minutes).', section: SECTIONS.COOK_BEEF, img: sloppy1 },

        { step: `In the pan, add the "${SECTIONS.VEGGIES}" section ingredients.`, section: SECTIONS.COOK_VEGGIES, img: sloppy2 },

        { step: 'Add garlic. Cook until fragrant (about 30 seconds).', section: SECTIONS.COOK_HERBS },

        { step: 'Add sauce mixture. Bring to a boil.', section: SECTIONS.BOIL },

        { step: 'Reduce to a low heat. Simmer for about 10 to 15 minutes.', section: SECTIONS.SIMMER },
        { step: 'Add water to thin if desired.', section: SECTIONS.THIN },

        { step: 'Toast hamburger buns in another pan with some butter.', section: SECTIONS.PREP_BUNS },

        { step: 'Enjoy these sweet sloppy joes. Feel free to add some heat with chili powder.', section: SECTIONS.SERVE },
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