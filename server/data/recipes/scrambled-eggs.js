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
    separated: false,
    ingredients: [
        { ...EGG, amount: 3, unit: '', additionalDetails: '' },
        { ...MILK, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '' },
        { ...SOUR_CREAM, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '' },
        { ...GREEN_BELL_PEPPER, amount: 1 / 8, unit: '', additionalDetails: 'diced' },
        { ...YELLOW_ONION, amount: 1 / 8, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced' },
        { ...ROMA_TOMATO, amount: 1 / 8, unit: '', additionalDetails: 'diced' },
        { ...COOKED_HAM, amount: 1, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'diced' },
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '' },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste' },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste' },
        { ...BASIL, amount: '', unit: '', additionalDetails: 'to taste' },
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
        { step: 'Mix together the eggs, milk, sour cream, salt, pepper, and basil. Allow the seasonings some time to enrich the flavor.', section: SECTIONS.MAIN },
        { step: 'While the seasonings are doing their thing, prep all the cutting of these ingredients (and any additional ingredients that you may want to add to your eggs). Be sure any meats are cooked or else you will need to add some additional time for those ingredients to cook.', section: SECTIONS.MAIN },
        { step: 'Once the ingredients are prepped, heat up a pan over medium-high heat. Add just a little butter when the pan is hot.', section: SECTIONS.MAIN },
        { step: 'Once butter has melted, add the vegetables and ham being sure they are spread around the pan to ensure proper browning.', section: SECTIONS.MAIN },
        { step: 'Cook for about 3 - 4 minutes being sure to stir occasionally to prevent burnt pieces.', section: SECTIONS.MAIN },
        { step: 'Now pour in the egg batter over the vegetables.', section: SECTIONS.MAIN },
        { step: 'While still keeping it over the heat, tilt and angle the pan so the runny egg on top can spread to more parts of the pan and you can even take the spatula and lift the edges of the cooking egg and let gravity do its job to have the runny egg batter fill underneath it. Allow to cook for just a few minutes.', section: SECTIONS.MAIN },
        { step: 'Start scrambling the eggs and continue to cook until the egg pieces are brownish-yellow (and you can cook them to your preferred egg state).', section: SECTIONS.MAIN },
        { step: 'Serve and enjoy this nice warm start to a beautiful day!', section: SECTIONS.MAIN },
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