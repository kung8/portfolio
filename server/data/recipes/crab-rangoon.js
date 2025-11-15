// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAKING_SHEET, BASTING_BRUSH, CREAM_CHEESE, GARLIC, GARLIC_POWDER, GREEN_ONION, IMITATION_CRAB, LIGHT_SOY_SAUCE, MIXING_BOWL, OVEN, PARCHMENT_PAPER, PLATE, REFRIGERATED_BISCUIT_DOUGH, SESAME_SEEDS, SPATULA, SWEET_CHILI_SAUCE, UNSALTED_BUTTER, WHITE_SUGAR, WORCESTERSHIRE_SAUCE } = require('./ingredients');

const BISCUITS_DOUGH_SECTION = 'Biscuits Dough';
const BUTTER_TOPPING_SECTION = 'Butter Topping';

module.exports = {
    wip: true,
    cardName: 'Crab Rangoon',
    name: 'Crab Rangoon',
    img: '',
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
        { 
            label: 'Crab Rangoon', 
            link: 'https://recipesown.com/crab-rangoon-bombs-recipe/',
            authors: ['Wendy Balderas'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.FILLING },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...CREAM_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: SECTIONS.FILLING },
        { ...IMITATION_CRAB, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'finely chopped', section: SECTIONS.FILLING },
        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'finely sliced', section: SECTIONS.FILLING },
        { ...WORCESTERSHIRE_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...WHITE_SUGAR, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },

        { ...REFRIGERATED_BISCUIT_DOUGH, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: BISCUITS_DOUGH_SECTION },

        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: SECTIONS.TOPPINGS },
        { ...GARLIC_POWDER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...SESAME_SEEDS, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        
        { ...SWEET_CHILI_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SERVE },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        PARCHMENT_PAPER,
        MIXING_BOWL,
        SPATULA,
        PLATE,
        BASTING_BRUSH,
    ],
    directions: [
        { step: `Preheat the oven to 375ºF.`, section: SECTIONS.PREHEAT_OVEN },
        
        { step: `Line a baking sheet with parchment paper.`, section: SECTIONS.PREP_PAN },

        { step: `In a mixing bowl, combine the "${SECTIONS.FILLING}" section ingredients.`, section: SECTIONS.PREP_FILLING },

        { step: `On a plate, place the biscuit dough and begin to flatten it.`, section: SECTIONS.PREP_FILLING },

        { step: `Add a spoonful of the crab filling into the center of the flattened dough.`, section: SECTIONS.FORM_BALLS },
        { step: `Fold and pinch the edges and form them into a ball.`, section: SECTIONS.FORM_BALLS },
        { step: `Place them on the baking sheet seam-side down.`, section: SECTIONS.FORM_BALLS },

        { step: `Add garlic powder to the melted butter.`, section: SECTIONS.TOP },
        { step: `Brush with the melted butter mixture.`, section: SECTIONS.TOP },
        { step: `Sprinkle with sesame seed.`, section: SECTIONS.TOP },

        { step: `Bake until golden brown (about 12 to 15 minutes).`, section: SECTIONS.BAKE },

        { step: `Let cool for a few minutes.`, section: SECTIONS.COOL },
        
        { step: `Enjoy these with your favorite sauce.`, section: SECTIONS.SERVE },
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