// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { MOZZARELLA_CHEESE, ITALIAN_SAUSAGE, PEPPERONI, GREEN_BELL_PEPPER, RED_BELL_PEPPER, YELLOW_ONION, PIZZA_SAUCE, SPRING_ROLL_WRAPPER, VEGETABLE_OIL } = require('./ingredients');

const PREP_SPRING_ROLLS = 'Prep Spring Rolls';

module.exports = {
    wip: true,
    cardName: 'Pizza Egg Rolls',
    name: 'Pizza Egg Rolls',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SNACK],
    genre: [GENRES.AMERICAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 32, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Pizza Egg Rolls', link: 'https://www.tasteofhome.com/recipes/pizza-rolls/' }
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
        { name: 'deep fryer or stove' },

    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'deep fryer or tall narrow pot' },
        { name: 'baking sheet' },
        { name: 'cooling rack' },
        { name: 'paper towels' },
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.PREP_FILLING },

        { step: 'On a clean surface or cutting board, place the spring roll wrapper with a corner facing you.', section: PREP_SPRING_ROLLS },
        { step: 'Place a 1/4 cup of the filling 1 inch from the corner nearest you.', section: PREP_SPRING_ROLLS },
        { step: 'Carefully roll the spring roll wrapper until it reaches the middle.', section: PREP_SPRING_ROLLS },
        { step: 'Fold over the sides.', section: PREP_SPRING_ROLLS },
        { step: 'Brush the exposed wrapper with water.', section: PREP_SPRING_ROLLS },
        { step: 'Finish rolling the spring roll.', section: PREP_SPRING_ROLLS },
        { step: 'Press to seal.', section: PREP_SPRING_ROLLS },


        { step: 'Place 2 layers of paper towels on top of a baking sheet and then place the cooling rack on top of the paper towels.', section: SECTIONS.DEEP_FRY },
        { step: 'Heat 1 to 2 inches of oil to 375ºF.', section: SECTIONS.DEEP_FRY },
        { step: 'Deep fry pizza egg rolls until golden brown (about 1 to 2 minutes each side).', section: SECTIONS.DEEP_FRY },
        { step: 'Place on cooling rack to drain.', section: SECTIONS.DEEP_FRY },

        { step: 'Serve these warm with pizza sauce.', section: SECTIONS.SERVE },
    ]
};