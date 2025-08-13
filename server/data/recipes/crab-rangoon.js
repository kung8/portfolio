// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { GARLIC, LIGHT_SOY_SAUCE, CREAM_CHEESE, IMITATION_CRAB, GREEN_ONION, WORCESTERSHIRE_SAUCE, WHITE_SUGAR, REFRIGERATED_BISCUIT_DOUGH, UNSALTED_BUTTER, GARLIC_POWDER, SESAME_SEEDS, SWEET_CHILI_SAUCE } = require('./ingredients');

const BISCUITS_DOUGH_SECTION = 'Biscuits Dough';
const BUTTER_TOPPING_SECTION = 'Butter Topping';

const PREP_BAKING = 'Prep Baking';
const PREP_CRAB_RANGOON = 'Prep Crab Rangoon';
const COOK_CRAB_RANGOON = 'Cook Crab Rangoon';

module.exports = {
    wip: true,
    cardName: 'Crab Rangoon',
    name: 'Crab Rangoon',
    img: '',
    recipeAuthors: ['Wendy Balderas'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.CHINESE, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.SEAFOOD],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Crab Rangoon', link: 'https://recipesown.com/crab-rangoon-bombs-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CREAM_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: SECTIONS.FILLING },
        { ...IMITATION_CRAB, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'finely chopped', section: SECTIONS.FILLING },
        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'finely sliced', section: SECTIONS.FILLING },
        { ...WORCESTERSHIRE_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...REFRIGERATED_BISCUIT_DOUGH, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: BISCUITS_DOUGH_SECTION },
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: BUTTER_TOPPING_SECTION },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BUTTER_TOPPING_SECTION },
        { ...SESAME_SEEDS, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BUTTER_TOPPING_SECTION },
        { ...SWEET_CHILI_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SERVE },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'parchment paper' },
        { name: 'mixing bowl' },
        { name: 'spatula' },
        { name: 'plate' },
        { name: 'basting brush' },
    ],
    directions: [
        { step: 'Preheat the oven to 375ºF.', section: PREP_BAKING },
        { step: 'Line a baking sheet with parchment paper.', section: PREP_BAKING },
        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: PREP_CRAB_RANGOON },
        { step: 'On a plate, place the biscuit dough and begin to flatten it.', section: PREP_CRAB_RANGOON },
        { step: 'Add a spoonful of the crab filling into the center of the flattened dough.', section: PREP_CRAB_RANGOON },
        { step: 'Fold and pinch the edges and form them into a ball.', section: PREP_CRAB_RANGOON },
        { step: 'Place them on the baking sheet seam-side down.', section: PREP_CRAB_RANGOON },
        { step: 'Add garlic powder to the melted butter.', section: PREP_CRAB_RANGOON },
        { step: 'Brush with the melted butter mixture.', section: PREP_CRAB_RANGOON },
        { step: 'Sprinkle with sesame seed.', section: PREP_CRAB_RANGOON },
        { step: 'Bake until golden brown (about 12 to 15 minutes).', section: COOK_CRAB_RANGOON },
        { step: 'Let cool for a few minutes.', section: COOK_CRAB_RANGOON },
        { step: 'Enjoy these with your favorite sauce.', section: SECTIONS.SERVE },
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