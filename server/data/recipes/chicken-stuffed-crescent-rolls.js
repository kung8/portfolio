const spices = '../assets/Products/chicken-stuffed-crescent-rolls-baked-with-spices.jpeg';
const baked = '../assets/Products/chicken-stuffed-crescent-rolls-baked.jpeg';
const fill = '../assets/Products/chicken-stuffed-crescent-rolls-fill-on-wrap.jpeg';
const filling = '../assets/Products/chicken-stuffed-crescent-rolls-filling.jpeg';
const melted = '../assets/Products/chicken-stuffed-crescent-rolls-melted-butter.jpeg';
const opened = '../assets/Products/chicken-stuffed-crescent-rolls-opened.jpeg';
const wrap = '../assets/Products/chicken-stuffed-crescent-rolls-wrap.jpeg';
const wrapped = '../assets/Products/chicken-stuffed-crescent-rolls-wrapped.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
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

module.exports = {
    cardName: 'Chicken Crescent Rolls',
    name: 'Chicken Stuffed Crescent Rolls',
    img: opened,
    recipeAuthors: [''],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 12, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...CRESCENT_ROLLS, amount: 1, unit: INGREDIENT_UNITS.CAN, additionalDetails: '', section: SECTIONS.MAIN },
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
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'melted', section: SECTIONS.MAIN },
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
        { step: 'Preheat oven to 375ºF.', section: SECTIONS.MAIN },
        { step: 'Combine shredded chicken, shredded cheese, cream cheese, bell peppers, onion, garlic powder, parsley, salt, pepper, and chili powder in a mixing bowl.', section: SECTIONS.MAIN, img: filling },
        { step: 'Unroll the crescent roll triangles and lay on the baking sheet.', section: SECTIONS.MAIN, img: wrap },
        { step: 'Place a ball of chicken filling on the wide end of the crescent roll.', section: SECTIONS.MAIN, img: fill },
        { step: 'Roll the dough to enclose as much of the filling.', section: SECTIONS.MAIN, img: wrapped },
        { step: 'Brush rolls with melted butter and optionally sprinkle with cheese.', section: SECTIONS.MAIN, img: melted },
        { step: 'Bake in oven for 10 to 12 minutes, or until golden brown.', section: SECTIONS.MAIN, img: spices },
        { step: 'Serve warm and enjoy this light appetizer.', section: SECTIONS.MAIN, img: baked },
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