const wings1 = '../assets/Products/cowboy-butter-chicken-wings-1.jpeg';
const wings2 = '../assets/Products/cowboy-butter-chicken-wings-2.jpeg';
const wings3 = '../assets/Products/cowboy-butter-chicken-wings-3.jpeg';
const wings4 = '../assets/Products/cowboy-butter-chicken-wings-4.jpeg';
const wings5 = '../assets/Products/cowboy-butter-chicken-wings-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_SHEET, BLACK_PEPPER, CAYENNE_PEPPER, CHICKEN_WINGS, CHIVE, COOLING_RACK, DIJON_MUSTARD, GARLIC, LEMON_JUICE, MIXING_BOWL, OVEN, PARSLEY, SALT, SMOKED_PAPRIKA, UNSALTED_BUTTER } = require('./ingredients');

const COWBOY_BUTTER = 'Cowboy Butter'
const PREP_COOKING = 'Prep Cooking';
const PREP_COWBOY_BUTTER = 'Prep Cowboy Butter';
const COAT_CHICKEN = 'Coat Chicken';

module.exports = {
    cardName: 'Cowboy Butter Chicken Wings',
    name: 'Cowboy Butter Chicken Wings',
    img: wings5,
    recipeAuthors: ['Kelli Foster'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.AMERICAN, GENRES.WESTERN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Cowboy Butter Chicken Wings', link: 'https://www.thekitchn.com/cowboy-butter-chicken-wings-recipe-23708102' }
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_WINGS, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: COWBOY_BUTTER },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'finely chopped', section: COWBOY_BUTTER },
        { ...CHIVE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'finely chopped', section: COWBOY_BUTTER },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: COWBOY_BUTTER },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COWBOY_BUTTER },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COWBOY_BUTTER },
        { ...SMOKED_PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COWBOY_BUTTER },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COWBOY_BUTTER },
        { ...CAYENNE_PEPPER, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: COWBOY_BUTTER },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        ALUMINUM_FOIL,
        COOLING_RACK,
        MIXING_BOWL,
    ],
    directions: [
        { step: 'Preheat the oven to 425ºF.', section: PREP_COOKING },
        { step: 'Line a baking sheet with aluminum foil and place a wire rack on top.', section: PREP_COOKING },
        { step: 'Pat the chicken dry with paper towels', section: SECTIONS.COOK_CHICKEN },
        { step: 'Season the chicken with salt and pepper.', section: SECTIONS.COOK_CHICKEN },
        { step: 'Place chicken on the wire rack in a single layer.', section: SECTIONS.COOK_CHICKEN, img: wings1 },
        { step: 'Bake the chicken until the skin is crispy and is cooked through (about 45 to 50 minutes).', section: SECTIONS.COOK_CHICKEN, img: wings3 },
        { step: `In a mixing bowl, combine the "${COWBOY_BUTTER}" section ingredients.`, section: PREP_COWBOY_BUTTER, img: wings2 },
        { step: 'Toss the chicken in the butter mixture.', section: COAT_CHICKEN, img: wings4 },
        { step: 'Serve these wings with your favorite dips and sides at your next tailgate, superbowl watch party, or any kind of party.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};