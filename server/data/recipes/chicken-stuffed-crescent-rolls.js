const rolls1 = '../assets/Products/chicken-stuffed-crescent-rolls-1.jpeg';
const rolls2 = '../assets/Products/chicken-stuffed-crescent-rolls-2.jpeg';
const rolls3 = '../assets/Products/chicken-stuffed-crescent-rolls-3.jpeg';
const rolls4 = '../assets/Products/chicken-stuffed-crescent-rolls-4.jpeg';
const rolls5 = '../assets/Products/chicken-stuffed-crescent-rolls-5.jpeg';
const rolls6 = '../assets/Products/chicken-stuffed-crescent-rolls-6.jpeg';
const rolls7 = '../assets/Products/chicken-stuffed-crescent-rolls-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BAKING_SHEET,
    BLACK_PEPPER,
    CHICKEN_BREAST,
    CHILI_POWDER,
    CREAM_CHEESE,
    CRESCENT_ROLLS,
    GARLIC_POWDER,
    MIXING_BOWL,
    MOZZARELLA_CHEESE,
    OVEN,
    PARSLEY,
    RED_BELL_PEPPER,
    SALT,
    SILICON_BAKING_MAT,
    UNSALTED_BUTTER,
    YELLOW_ONION,
} = require('./ingredients');

const CHICKEN_SALAD = 'Chicken Salad';
const CRESCENT_ROLLS_SECTION = 'Crescent Rolls';
const PREP_CHICKEN_SALAD = 'Prep Chicken Salad';

module.exports = {
    cardName: 'Chicken Crescent Rolls',
    name: 'Chicken Stuffed Crescent Rolls',
    img: rolls7,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
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
        { ...CHICKEN_BREAST, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooked and shredded', section: SECTIONS.FILLING },
        { ...MOZZARELLA_CHEESE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'shredded', section: SECTIONS.FILLING },
        { ...CREAM_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.FILLING },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...YELLOW_ONION, amount: 3 / 4, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.FILLING },
        { ...GARLIC_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.FILLING },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.FILLING },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.FILLING },
        { ...CHILI_POWDER, amount: '', unit: '', additionalDetails: 'too taste', section: SECTIONS.FILLING },
        
        { ...CRESCENT_ROLLS, amount: 1, unit: INGREDIENT_UNITS.CAN, additionalDetails: '', section: CRESCENT_ROLLS_SECTION },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: CRESCENT_ROLLS_SECTION },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        SILICON_BAKING_MAT,
        MIXING_BOWL,
    ],
    directions: [
        { step: 'Preheat oven to 375ºF.', section: SECTIONS.PREHEAT_OVEN },
        
        { step: `In a mixing bowl, combine the "${CHICKEN_SALAD}" section ingredients.`, section: PREP_CHICKEN_SALAD, img: rolls1 },

        { step: 'Unroll the crescent roll triangles and lay on the baking sheet.', section: SECTIONS.ASSEMBLE, img: rolls2 },
        { step: 'Place a ball of chicken filling on the wide end of the crescent roll.', section: SECTIONS.ASSEMBLE, img: rolls3 },
        { step: 'Roll the dough to enclose as much of the filling.', section: SECTIONS.ASSEMBLE },
        { step: 'Brush rolls with melted butter and optionally sprinkle with cheese.', section: SECTIONS.ASSEMBLE, img: rolls4 },

        { step: 'Bake until golden brown (for 10 to 12 minutes).', section: SECTIONS.BAKE, img: rolls5 },

        { step: 'Serve warm and enjoy this light appetizer.', section: SECTIONS.SERVE, img: rolls6 },
    ],
    notes: [
        { note: 'Be sure to cook the dough completely.' }
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