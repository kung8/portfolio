const scrambledEggs1 = '../assets/Products/scrambled-eggs-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BASIL,
    BLACK_PEPPER,
    COOKED_HAM,
    EGG,
    GREEN_BELL_PEPPER,
    MILK,
    ROMA_TOMATO,
    SALT,
    SOUR_CREAM,
    UNSALTED_BUTTER,
    YELLOW_ONION,
} = require('./ingredients');

const HAM_SECTION = 'Ham';
const SCRAMBLE_EGGS = 'Scramble Eggs';

module.exports = {
    cardName: 'Scrambled Eggs',
    name: 'Scrambled Eggs',
    img: scrambledEggs1,
    available: true,
    category: [CATEGORIES.BREAKFAST],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    type: [TYPES.MAIN_COURSE],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    protein: [PROTEIN.EGG],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    separated: true,
    ingredients: [
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.EGGS },
        { ...MILK, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.EGGS },
        { ...SOUR_CREAM, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.EGGS },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.EGGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.EGGS },
        { ...BASIL, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.EGGS },
        
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...GREEN_BELL_PEPPER, amount: 1 / 8, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1 / 8, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...ROMA_TOMATO, amount: 1 / 8, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...COOKED_HAM, amount: 1, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'diced', section: HAM_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'frying pan' },
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'spatula' },
        { name: 'measuring cups' },
        { name: 'medium bowl' },
    ],
    directions: [
        { step: `Mix together the "${SECTIONS.EGGS}". Let it rest for a few minutes.`, section: SECTIONS.PREP_EGGS },

        { step: 'Over medium-high heat, melt a little butter in a hot pan.', section: SECTIONS.COOK_VEGGIES },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients and ham.`, section: SECTIONS.COOK_VEGGIES },
        { step: 'Cook and stir (about 3 to 4 minutes).', section: SECTIONS.COOK_VEGGIES },

        { step: 'Pour in the egg batter over the pan fried ingredients.', section: SECTIONS.COOK_EGGS },
        { step: 'Within 30 seconds, lift the edges and tilt the pan so the runny eggs on top will go underneath. Cook for a few minutes.', section: SECTIONS.COOK_EGGS },

        { step: 'Scramble the eggs. Cook until the egg pieces are brownish-yellow.', section: SCRAMBLE_EGGS },

        { step: 'Serve and enjoy this nice warm start to a beautiful day!', section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave in 15 to 30 second intervals until heated through. Stir in between intervals to ensure even heating.',
        },
    ],
    mealPrep: false,
}