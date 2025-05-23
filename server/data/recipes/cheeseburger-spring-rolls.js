// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { GROUND_BEEF, RED_ONION, PICKLES, CHEDDAR_CHEESE, DIJON_MUSTARD, FISH_SAUCE, SALT, BLACK_PEPPER, SPRING_ROLL_RICE_WRAPPERS, SPRING_ROLL_WRAPPER, OLIVE_OIL, GREEK_YOGURT, KETCHUP, GARLIC, PICKLE_JUICE, SMOKED_PAPRIKA, COOKING_SPRAY } = require('./ingredients');

const SPRING_ROLL_FILLING_SECTION = 'Spring Roll Filling';
const SPRING_ROLL_SECTION = 'Spring Roll';
const DIPPING_SAUCE_SECTION = 'Dipping Sauce';

const PREP_FILLING = 'Prep Filling';
const PREP_DIPPING_SAUCE = 'Prep Dipping Sauce';
const PREP_SPRING_ROLLS = 'Prep Spring Rolls';
const ASSEMBLE = 'Assemble';
const COOK_SPRING_ROLLS = 'Cook Spring Rolls';

module.exports = {
    wip: true,
    cardName: 'Cheeseburger Spring Rolls',
    name: 'Cheeseburger Spring Rolls',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.AIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.WRAP, TYPES.FINGER_FOOD],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Cheeseburger Spring Rolls', link: 'https://dishedbykate.com/cheeseburger-spring-rolls/' }
    ],
    separated: true,
    ingredients: [
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SPRING_ROLL_FILLING_SECTION },
        { ...RED_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SPRING_ROLL_FILLING_SECTION },
        { ...PICKLES, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SPRING_ROLL_FILLING_SECTION },
        { ...CHEDDAR_CHEESE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SPRING_ROLL_FILLING_SECTION },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SPRING_ROLL_FILLING_SECTION },
        { ...FISH_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPRING_ROLL_FILLING_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPRING_ROLL_FILLING_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SPRING_ROLL_FILLING_SECTION },

        { ...GREEK_YOGURT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...KETCHUP, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...PICKLES, amount: 3, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...PICKLE_JUICE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DIPPING_SAUCE_SECTION },
        { ...SMOKED_PAPRIKA, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: DIPPING_SAUCE_SECTION },

        { ...SPRING_ROLL_WRAPPER, amount: 12, unit: INGREDIENT_UNITS.PIECE, additionalDetails: '', section: SPRING_ROLL_SECTION },
        { ...COOKING_SPRAY, amount: '', unit: '', additionalDetails: '', section: SPRING_ROLL_SECTION },
    ],
    appliances: [
        { name: 'air fryer' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'medium bowl' },
        { name: 'cutting board' },
        { name: 'basting brush' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Spring Roll Filling" section ingredients. Mix until the seasoning is incorporated through the beef.', section: PREP_FILLING },

        { step: 'In a medium bowl, combine the "Dipping Sauce" section ingredients. Set aside.', section: PREP_DIPPING_SAUCE },

        { step: 'On a clean surface or cutting board, place the spring roll wrapper with a corner facing you.', section: PREP_SPRING_ROLLS },
        { step: 'Place a large tablespoon of the filling 1 inch from the corner nearest you.', section: PREP_SPRING_ROLLS },
        { step: 'Carefully roll the spring roll wrapper until it reaches the middle.', section: PREP_SPRING_ROLLS },
        { step: 'Fold over the sides.', section: PREP_SPRING_ROLLS },
        { step: 'Brush the exposed wrapper with water.', section: PREP_SPRING_ROLLS },
        { step: 'Finish rolling the spring roll.', section: PREP_SPRING_ROLLS },
        { step: 'Press to seal.', section: PREP_SPRING_ROLLS },

        { step: 'In an air fryer, place the rolls in a single layer and spray with oil.', section: COOK_SPRING_ROLLS },
        { step: 'Cook at 400ºF for 20 minutes. Rotate around 10 minutes.', section: COOK_SPRING_ROLLS },

        { step: 'Enjoy warm with the dipping sauce.', section: SECTIONS.SERVE },
    ]
};