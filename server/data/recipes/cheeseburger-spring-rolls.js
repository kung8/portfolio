const roll1 = '../assets/Products/cheeseburger-egg-rolls-1.jpeg';
const roll2 = '../assets/Products/cheeseburger-egg-rolls-2.jpeg';
const roll3 = '../assets/Products/cheeseburger-egg-rolls-3.jpeg';
const roll4 = '../assets/Products/cheeseburger-egg-rolls-4.jpeg';
const roll5 = '../assets/Products/cheeseburger-egg-rolls-5.jpeg';
const roll6 = '../assets/Products/cheeseburger-egg-rolls-6.jpeg';
const roll7 = '../assets/Products/cheeseburger-egg-rolls-7.jpeg';
const roll8 = '../assets/Products/cheeseburger-egg-rolls-8.jpeg';
const roll9 = '../assets/Products/cheeseburger-egg-rolls-9.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { AIR_FRYER, BLACK_PEPPER, CHEDDAR_CHEESE, COOKING_SPRAY, CUTTING_BOARD, DIJON_MUSTARD, FISH_SAUCE, GARLIC, GREEK_YOGURT, GROUND_BEEF, KETCHUP, MEDIUM_BOWL, MIXING_BOWL, PICKLES, PICKLE_JUICE, RED_ONION, SALT, SMOKED_PAPRIKA, SPRING_ROLL_WRAPPER } = require('./ingredients');

const SPRING_ROLL_SECTION = 'Spring Roll';

const PREP_SPRING_ROLLS = 'Prep Spring Rolls';
const COOK_SPRING_ROLLS = 'Cook Spring Rolls';

module.exports = {
    cardName: 'Cheeseburger Spring Rolls',
    name: 'Cheeseburger Spring Rolls',
    img: roll9,
    available: true,
    recommended: true,
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
        { 
            label: 'Cheeseburger Spring Rolls', 
            link: 'https://dishedbykate.com/cheeseburger-spring-rolls/',
            authors: ['Kate Phillips'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.FILLING },
        { ...RED_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.FILLING },
        { ...PICKLES, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.FILLING },
        { ...CHEDDAR_CHEESE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.FILLING },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...FISH_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },

        { ...GREEK_YOGURT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DIP },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DIP },
        { ...KETCHUP, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DIP },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.DIP },
        { ...PICKLES, amount: 3, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.DIP },
        { ...PICKLE_JUICE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DIP },
        { ...SMOKED_PAPRIKA, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DIP },

        { ...SPRING_ROLL_WRAPPER, amount: 12, unit: INGREDIENT_UNITS.PIECE, additionalDetails: '', section: SPRING_ROLL_SECTION },
        { ...COOKING_SPRAY, amount: '', unit: '', additionalDetails: '', section: SPRING_ROLL_SECTION },
    ],
    appliances: [
        AIR_FRYER,
    ],
    supplies: [
        MEDIUM_BOWL,
        MIXING_BOWL,
        CUTTING_BOARD
    ],
    directions: [
        { step: `In a medium bowl, combine the "${SECTIONS.DIP}" section ingredients. Set aside.`, section: SECTIONS.PREP_DIP, img: roll1 },

        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients. Mix until the seasoning is incorporated through the beef.`, section: SECTIONS.PREP_FILLING, img: roll2 },

        { step: `On a clean surface or cutting board, place the spring roll wrapper with a corner facing you.`, section: PREP_SPRING_ROLLS },
        { step: `Place 2 large tablespoons of the filling 1 1/2 inches from the corner nearest you.`, section: PREP_SPRING_ROLLS, img: roll3 },
        { step: `Carefully roll the spring roll wrapper until it reaches the middle.`, section: PREP_SPRING_ROLLS, img: roll4 },
        { step: `Fold over the sides.`, section: PREP_SPRING_ROLLS },
        { step: `Brush the exposed wrapper with water.`, section: PREP_SPRING_ROLLS },
        { step: `Finish rolling the spring roll.`, section: PREP_SPRING_ROLLS },
        { step: `Press to seal.`, section: PREP_SPRING_ROLLS, img: roll5 },

        { step: `In an air fryer, place the rolls in a single layer and spray with oil.`, section: COOK_SPRING_ROLLS },
        { step: `Cook at 400ºF for 15 minutes. Rotate around 7 minutes.`, section: COOK_SPRING_ROLLS, img: roll6 },

        { step: `Enjoy warm with the dipping sauce.`, section: SECTIONS.SERVE, img: roll8 },
    ],
    notes: [
        { note: 'I personally did not like the notes of the greek yogurt in the dipping sauce. So I would not use this sauce again.' },
        { note: 'Instead of a sauce I think if you replace the cheddar and use mozzarella instead I think it would taste more like a cheesesteak then you might not need a sauce. Just make sure there is enough cheese in each.' },
        { note: 'The original recipe suggests cooking it for 20 minutes, but next time I am going to try for 15 minutes.' },
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
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 350ºF until crispy (about 5 minutes).',
        },
    ],
    mealPrep: false,
};