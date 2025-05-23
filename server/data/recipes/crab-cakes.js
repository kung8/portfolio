// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { MAYONNAISE, EGG, DIJON_MUSTARD, WORCESTERSHIRE_SAUCE, HOT_SAUCE, CRAB, SALTINES, VEGETABLE_OIL, LEMON } = require('./ingredients');

const SAUCE_SECTION = 'Sauce';
const MARINADE_SECTION = 'Marinade';
const FRYING_SECTION = 'Frying';

const MARINATE_CRAB = 'Marinate Crab';
const COOK_CRAB_CAKES = 'Cook Crab Cakes';

module.exports = {
    wip: true,
    cardName: 'Crab Cakes',
    name: 'Crab Cakes',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.SEAFOOD],
    type: [TYPES.SIDE_DISH, TYPES.FINGER_FOOD],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Crab Cakes', link: 'https://www.foodandwine.com/recipes/baltimore-style-crab-cakes' }
    ],
    separated: true,
    ingredients: [
        { ...MAYONNAISE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SAUCE_SECTION },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...WORCESTERSHIRE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...HOT_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...CRAB, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: MARINADE_SECTION },
        { ...SALTINES, amount: 20, unit: INGREDIENT_UNITS.PIECE, additionalDetails: 'crushed', section: MARINADE_SECTION },
        { ...VEGETABLE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FRYING_SECTION },
        { ...LEMON, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'mixing bowl' },
        { name: 'large pan' },
    ],
    directions: [
        { step: 'In a medium bowl, combine the "Sauce" section ingredients.', section: MARINATE_CRAB },
        { step: 'In a mixing bowl, toss the crab together with the crushed saltines.', section: MARINATE_CRAB },
        { step: 'Fold in mayo mixture and stir. Cover and refrigerate for 1 hour.', section: MARINATE_CRAB },
        { step: 'Form 1 1/2 inch thick patties (about 1/3 cup).', section: COOK_CRAB_CAKES },
        { step: 'Over medium-high heat, heat oil in a large pan.', section: COOK_CRAB_CAKES },
        { step: 'Add crab cakes. Cook until golden and cooked through (about 3 minutes per side).', section: COOK_CRAB_CAKES },
        { step: 'Serve with lemon wedges. You no longer need to wait for a fancy party invitation to enjoy these hors d\'oeuvres.', section: SECTIONS.SERVE },
    ]
};