const wings1 = '../assets/Products/cowboy-butter-chicken-wings-1.jpeg';
const wings2 = '../assets/Products/cowboy-butter-chicken-wings-2.jpeg';
const wings3 = '../assets/Products/cowboy-butter-chicken-wings-3.jpeg';
const wings4 = '../assets/Products/cowboy-butter-chicken-wings-4.jpeg';
const wings5 = '../assets/Products/cowboy-butter-chicken-wings-5.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_SHEET, BLACK_PEPPER, CAYENNE_PEPPER, CHICKEN_WINGS, CHIVE, COOLING_RACK, DIJON_MUSTARD, GARLIC, LEMON_JUICE, MIXING_BOWL, OVEN, PARSLEY, SALT, SMOKED_PAPRIKA, UNSALTED_BUTTER } = require('./ingredients');

module.exports = {
    cardName: 'Cowboy Butter Chicken Wings',
    name: 'Cowboy Butter Chicken Wings',
    img: wings5,
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
        { 
            label: 'Cowboy Butter Chicken Wings', 
            link: 'https://www.thekitchn.com/cowboy-butter-chicken-wings-recipe-23708102',
            authors: ['Kelli Foster'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...CHICKEN_WINGS, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.SAUCE },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'finely chopped', section: SECTIONS.SAUCE },
        { ...CHIVE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'finely chopped', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...DIJON_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SMOKED_PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CAYENNE_PEPPER, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
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
        { step: `Preheat the oven to 425ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line a baking sheet with aluminum foil and place a wire rack on top.`, section: SECTIONS.PREP_PAN },
        { step: `Pat the chicken dry with paper towels`, section: SECTIONS.COOK_CHICKEN },
        { step: `Season the chicken with salt and pepper.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Place chicken on the wire rack in a single layer.`, section: SECTIONS.COOK_CHICKEN, img: wings1 },
        { step: `Bake the chicken until the skin is crispy and is cooked through (about 45 to 50 minutes).`, section: SECTIONS.COOK_CHICKEN, img: wings3 },
        { step: `In a mixing bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.PREP_SAUCE, img: wings2 },
        { step: `Toss the chicken in the butter mixture.`, section: SECTIONS.TOSS, img: wings4 },
        { step: `Serve these wings with your favorite dips and sides at your next tailgate, superbowl watch party, or any kind of party.`, section: SECTIONS.SERVE },
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