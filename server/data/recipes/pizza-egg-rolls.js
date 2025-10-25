const rolls1 = '../assets/Products/pizza-egg-rolls-1.jpeg';
const rolls2 = '../assets/Products/pizza-egg-rolls-2.jpeg';
const rolls3 = '../assets/Products/pizza-egg-rolls-3.jpeg';
const rolls4 = '../assets/Products/pizza-egg-rolls-4.jpeg';
const rolls5 = '../assets/Products/pizza-egg-rolls-5.jpeg';
const rolls6 = '../assets/Products/pizza-egg-rolls-6.jpeg';
const rolls7 = '../assets/Products/pizza-egg-rolls-7.jpeg';
const rolls8 = '../assets/Products/pizza-egg-rolls-8.jpeg';
const rolls9 = '../assets/Products/pizza-egg-rolls-9.jpeg';
const rolls10 = '../assets/Products/pizza-egg-rolls-10.jpeg';
const rolls11 = '../assets/Products/pizza-egg-rolls-11.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, COOLING_RACK, DEEP_FRYER_OR_STOVE, GREEN_BELL_PEPPER, ITALIAN_SAUSAGE, MIXING_BOWL, MOZZARELLA_CHEESE, PAPER_TOWELS, PEPPERONI, PIZZA_SAUCE, RED_BELL_PEPPER, SPRING_ROLL_WRAPPER, TALL_NARROW_POT, VEGETABLE_OIL, YELLOW_ONION } = require('./ingredients');

const PREP_SPRING_ROLLS = 'Prep Spring Rolls';

module.exports = {
    cardName: 'Pizza Egg Rolls',
    name: 'Pizza Egg Rolls',
    img: rolls11,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.FINGER_FOOD],
    allergies: [],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 32, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Pizza Egg Rolls', 
            link: 'https://www.tasteofhome.com/recipes/pizza-rolls/',
            authors: ['Suzanne S. Wiley'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...MOZZARELLA_CHEESE, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.FILLING },
        { ...ITALIAN_SAUSAGE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cooked and drained', section: SECTIONS.FILLING },
        { ...PEPPERONI, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...RED_BELL_PEPPER, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...PIZZA_SAUCE, amount: 28, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SPRING_ROLL_WRAPPER, amount: 32, unit: INGREDIENT_UNITS.PIECE, additionalDetails: '', section: SECTIONS.WRAPPER },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.DEEP_FRY },
        { ...PIZZA_SAUCE, amount: '', unit: '', additionalDetails: 'warmed', section: SECTIONS.SERVE },
    ],
    appliances: [
        DEEP_FRYER_OR_STOVE
    ],
    supplies: [
        MIXING_BOWL,
        TALL_NARROW_POT,
        BAKING_SHEET,
        COOLING_RACK,
        PAPER_TOWELS,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.PREP_FILLING, img: rolls1 },

        { step: 'On a clean surface or cutting board, place the spring roll wrapper with a corner facing you.', section: PREP_SPRING_ROLLS },
        { step: 'Place a 1/4 cup of the filling 1 inch from the corner nearest you.', section: PREP_SPRING_ROLLS, img: rolls2 },
        { step: 'Carefully roll the spring roll wrapper until it reaches the middle.', section: PREP_SPRING_ROLLS, img: rolls3 },
        { step: 'Fold over the sides.', section: PREP_SPRING_ROLLS, img: rolls4 },
        { step: 'Brush the exposed wrapper with water.', section: PREP_SPRING_ROLLS },
        { step: 'Finish rolling the spring roll.', section: PREP_SPRING_ROLLS },
        { step: 'Press to seal.', section: PREP_SPRING_ROLLS, img: [rolls5, rolls6] },

        { step: 'Place 2 layers of paper towels on top of a baking sheet and then place the cooling rack on top of the paper towels.', section: SECTIONS.DEEP_FRY },
        { step: 'Heat 1 to 2 inches of oil to 375ºF.', section: SECTIONS.DEEP_FRY },
        { step: 'Deep fry pizza egg rolls until golden brown (about 1 to 2 minutes each side).', section: SECTIONS.DEEP_FRY, img: [rolls7, rolls8] },
        { step: 'Place on cooling rack to drain.', section: SECTIONS.DEEP_FRY, img: rolls9 },

        { step: 'Serve these warm with pizza sauce.', section: SECTIONS.SERVE, img: rolls10 },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Let the pizza egg rolls cool completely before storing. If there is more than one layer, place a paper towel between the layers.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over medium heat, reheat them in a pan until heated through. Turn them occasionally.',
        },
    ],
    mealPrep: true,
};