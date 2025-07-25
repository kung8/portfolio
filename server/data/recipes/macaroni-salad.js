const salad1 = '../assets/Products/macaroni-salad-1.jpeg';
const salad2 = '../assets/Products/macaroni-salad-2.jpeg';
const salad3 = '../assets/Products/macaroni-salad-3.jpeg';
const salad4 = '../assets/Products/macaroni-salad-4.jpeg';
const salad5 = '../assets/Products/macaroni-salad-5.jpeg';
const salad6 = '../assets/Products/macaroni-salad-6.jpeg';
// const salad7 = '../assets/Products/macaroni-salad-7.jpeg';

const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const {
    ELBOW_MACARONI,
    MAYONNAISE,
    WHITE_VINEGAR,
    WHITE_SUGAR,
    YELLOW_MUSTARD,
    SALT,
    BLACK_PEPPER,
    YELLOW_ONION,
    CELERY,
    GREEN_BELL_PEPPER,
} = require('./ingredients');

const MAYO_MIXTURE = 'Mayo Mixture';

module.exports = {
    cardName: 'Macaroni Salad',
    name: 'Macaroni Salad',
    img: salad5,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.SOUTHERN, GENRES.AMERICAN],
    method: [METHODS.BOIL],
    type: [TYPES.NOODLE],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...ELBOW_MACARONI, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.PASTA },

        { ...MAYONNAISE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MAYO_MIXTURE },
        { ...WHITE_VINEGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MAYO_MIXTURE },
        { ...WHITE_SUGAR, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: MAYO_MIXTURE },
        { ...YELLOW_MUSTARD, amount: 5 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MAYO_MIXTURE },
        { ...SALT, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MAYO_MIXTURE },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MAYO_MIXTURE },

        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...CELERY, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'sliced', section: SECTIONS.VEGGIES },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'large mixing bowl' },
        { name: 'rubber spatula' },
        { name: 'strainer' },
    ],
    directions: [
        { step: 'Over high heat, boil water and salt in a large pot.', section: SECTIONS.COOK_PASTA },
        { step: 'Once the water boils, add the pasta and cook until tender (about 8 to 10 minutes).', section: SECTIONS.COOK_PASTA },
        { step: 'Rinse the pasta under cold water.', section: SECTIONS.COOK_PASTA },
        { step: 'Drain in colander.', section: SECTIONS.COOK_PASTA, img: salad1 },

        { step: `In the mixing bowl, combine the "${MAYO_MIXTURE}" section ingredients.`, section: SECTIONS.ASSEMBLE, img: salad2 },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients. Mix until coated.`, section: SECTIONS.ASSEMBLE, img: salad3 },
        { step: 'Add the pasta. Mix until coated.', section: SECTIONS.ASSEMBLE, img: salad4 },
        { step: 'Cover. Chill overnight (or at least 4 hours).', section: SECTIONS.ASSEMBLE, img: salad6 },

        { step: 'Enjoy this sweet, creamy, fresh appetizer while you relax with some relaxing Hawaiian music.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: true,
};