const bruschetta1 = '../assets/Products/bruschetta-1.jpeg';
const bruschetta2 = '../assets/Products/bruschetta-2.jpeg';
const bruschetta3 = '../assets/Products/bruschetta-3.jpeg';
const bruschetta4 = '../assets/Products/bruschetta-4.jpeg';
const bruschetta5 = '../assets/Products/bruschetta-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAGUETTE, BAKING_SHEET, BALSAMIC_VINEGAR, BASIL_LEAF, BLACK_PEPPER, CHERRY_TOMATO, GARLIC, MEDIUM_BOWL, OLIVE_OIL, OVEN, SALT, SHALLOT } = require('./ingredients');

const BAGUETTE_SECTION = 'Baguette';
const BRUSCHETTA_SECTION = 'Bruschetta';
const BAKE_BAGUETTE = 'Bake Baguette';
const PREP_BRUSCHETTA = 'Prep Bruschetta';

module.exports = {
    cardName: 'Bruschetta',
    name: 'Balsamic Tomato Bruschetta',
    img: bruschetta4,
    available: true,
    recommended: true,
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH, CATEGORIES.SNACK],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BAKE],
    type: [TYPES.SIDE_DISH, TYPES.FINGER_FOOD],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 16, unit: YIELD_UNITS.SLICE },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Balsamic Tomato Bruschetta', 
            link: 'https://www.forkinthekitchen.com/balsamic-bruschetta-on-crostini/',
            authors: ['Becca Mills'],
            finder: 'Justin Ung', 
        }
    ],
    ingredients: [
        { ...BAGUETTE, amount: 1, unit: '', additionalDetails: 'sliced diagonally, 1/4 inch thick', section: BAGUETTE_SECTION },
        { ...OLIVE_OIL, amount: '', unit: '', additionalDetails: '', section: BAGUETTE_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: BAGUETTE_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: BAGUETTE_SECTION },

        { ...CHERRY_TOMATO, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: BRUSCHETTA_SECTION },
        { ...BASIL_LEAF, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chiffonade', section: BRUSCHETTA_SECTION },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: BRUSCHETTA_SECTION },
        { ...SHALLOT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'finely chopped', section: BRUSCHETTA_SECTION },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BRUSCHETTA_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: BRUSCHETTA_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: BRUSCHETTA_SECTION },
        { ...BALSAMIC_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BRUSCHETTA_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        MEDIUM_BOWL,
    ],
    directions: [
        { step: 'Preheat the oven to 375ºF.', section: BAKE_BAGUETTE },
        { step: 'Place sliced baguette on baking sheet.', section: BAKE_BAGUETTE, img: bruschetta2 },
        { step: 'Drizzle olive oil over bread (do not drench).', section: BAKE_BAGUETTE },
        { step: 'Season with salt and pepper.', section: BAKE_BAGUETTE },
        { step: 'Flip slices over and repeat with the other side.', section: BAKE_BAGUETTE },
        { step: 'Bake until golden brown and crispy (about 5 to 7 minutes on each side). Be careful not to burn them.', section: BAKE_BAGUETTE },
        { step: 'Drain the diced tomatoes as needed. Optionally add a pinch of salt.', section: PREP_BRUSCHETTA, img: bruschetta1 },
        { step: `In a medium bowl, combine the "${BRUSCHETTA_SECTION}" section ingredients.`, section: PREP_BRUSCHETTA, img: bruschetta3 },
        { step: 'Top each slice with about 2 tablespoons of the bruschetta mixture.', section: SECTIONS.ASSEMBLE, img: bruschetta5 },
        { step: 'Serve this appetizer immediately topped with more basil.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the bruschetta mixture separately from the baked baguettes. The baguettes will become soggy if stored together.',
        },
    ],
    reheat: null,
    mealPrep: true,
};