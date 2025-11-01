const casserole1 = '../assets/Products/egg-casserole-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    ALUMINUM_FOIL,
    BAKING_PAN,
    BLACK_PEPPER,
    BREAD,
    CHEDDAR_CHEESE,
    COOKED_HAM,
    CUTTING_BOARD,
    EGG,
    FORK,
    KETCHUP,
    KNIFE,
    MEASURING_CUPS,
    MEASURING_SPOONS,
    MILK,
    MIXING_BOWL,
    OVEN,
    RED_BELL_PEPPER,
    REFRIGERATOR,
    SALSA,
    SALT,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Egg Casserole',
    name: 'Egg Casserole',
    img: casserole1,
    available: false,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.EGG],
    type: [TYPES.BREAD, TYPES.CASSEROLE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: '',
            link: '',
            authors: [''],
            finder: 'Kevin Ung'
        }
    ],
    separated: true,
    ingredients: [
        // { ...BREAD, amount: 8, unit: '', additionalDetails: 'cubed', section: SECTIONS.MAIN },
        // { ...CHEDDAR_CHEESE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.MAIN },
        // { ...COOKED_HAM, amount: 5 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.MAIN },
        // { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.MAIN },
        // { ...RED_BELL_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: SECTIONS.MAIN },
        // { ...EGG, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        // { ...MILK, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        // { ...SALT, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        // { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        // { ...KETCHUP, amount: '', unit: '', additionalDetails: '(optional)', section: SECTIONS.MAIN },
        // { ...SALSA, amount: '', unit: '', additionalDetails: '(optional)', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN,
        REFRIGERATOR,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_PAN,
        CUTTING_BOARD,
        KNIFE,
        FORK,
        MEASURING_CUPS,
        MEASURING_SPOONS,
        ALUMINUM_FOIL,
    ],
    directions: [
        // { step: 'Cut the bread, ham, onion, and bell peppers.', section: SECTIONS.MAIN },
        // { step: 'Mix together eggs, milk, salt, and pepper in the mixing bowl.', section: SECTIONS.MAIN },
        // { step: 'Layer the base of the baking pan with the cubes of bread.', section: SECTIONS.MAIN },
        // { step: 'Pour the egg batter over the bread, add the veggies, and cheese.', section: SECTIONS.MAIN },
        // { step: 'Cover with tin foil and refrigerate for at least 8 hours (or overnight).', section: SECTIONS.MAIN },
        // { step: 'Once ready to cook, preheat oven to 350ºF.', section: SECTIONS.MAIN },
        // { step: 'Uncover casserole and bake for 40 minutes - 1 hour (or until it sets). This mostly depends on your oven.', section: SECTIONS.MAIN },
        // { step: 'Once the casserole is cooked, let cool for a few minutes.', section: SECTIONS.MAIN },
        // { step: 'Serve and enjoy this simple, hot breakfast feast.', section: SECTIONS.MAIN },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};

// TODO: replace this recipe with this one
// https://tastesbetterfromscratch.com/breakfast-casserole/