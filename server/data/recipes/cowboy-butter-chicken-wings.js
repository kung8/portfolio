// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const { CHICKEN_WINGS, SALT, BLACK_PEPPER, UNSALTED_BUTTER, PARSLEY, CHIVES, GARLIC, DIJON_MUSTARD, LEMON_JUICE, SMOKED_PAPRIKA, CAYENNE_PEPPER } = require('./ingredients');

const CHICKEN_SECTION = 'Chicken';
const COWBOY_BUTTER = 'Cowboy Butter';

const PREP_COOKING = 'Prep Cooking';
const COOK_CHICKEN = 'Cook Chicken';
const PREP_COWBOY_BUTTER = 'Prep Cowboy Butter';
const COAT_CHICKEN = 'Coat Chicken';

module.exports = {
    wip: true,
    cardName: 'Cowboy Butter Chicken Wings',
    name: 'Cowboy Butter Chicken Wings',
    img: '',
    recipeCredit: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN, GENRES.WESTERN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Cowboy Butter Chicken Wings', link: 'https://www.thekitchn.com/cowboy-butter-chicken-wings-recipe-23708102' }
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_WINGS, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: CHICKEN_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHICKEN_SECTION },
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: COWBOY_BUTTER },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'finely chopped', section: COWBOY_BUTTER },
        { ...CHIVES, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'finely chopped', section: COWBOY_BUTTER },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: COWBOY_BUTTER },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COWBOY_BUTTER },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COWBOY_BUTTER },
        { ...SMOKED_PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COWBOY_BUTTER },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COWBOY_BUTTER },
        { ...CAYENNE_PEPPER, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COWBOY_BUTTER },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'aluminum foil' },
        { name: 'wire rack' },
        { name: '' },
    ],
    directions: [
        { step: 'Preheat the oven to 425ºF.', type: PREP_COOKING },
        { step: 'Line a baking sheet with aluminum foil and place a wire rack on top.', type: PREP_COOKING },
        { step: 'Pat the chicken dry with paper towels', type: COOK_CHICKEN },
        { step: 'Season the chicken with salt and pepper.', type: COOK_CHICKEN },
        { step: 'Place chicken on the wire rack in a single layer.', type: COOK_CHICKEN },
        { step: 'Bake the chicken until the skin is crispy and is cooked through (about 45 to 50 minutes).', type: COOK_CHICKEN },
        { step: 'In a mixing bowl, combine the "Cowboy Butter" section ingredients.', type: PREP_COWBOY_BUTTER },
        { step: 'Toss the chicken in the butter mixture.', type: COAT_CHICKEN },
        { step: 'Serve these wings with your favorite dips and sides at your next tailgate, superbowl watch party, or any kind of party.', type: SECTIONS.SERVE },
    ]
};