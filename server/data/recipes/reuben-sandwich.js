// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { THOUSAND_ISLAND_DRESSING, PROVOLONE_CHEESE, CORNED_BEEF, UNSALTED_BUTTER, RYE_BREAD, SAUERKRAUT } = require('./ingredients');

const SANDWICH_SECTION = 'Sandwich';
const BUTTER_SECTION = 'Butter';
const COOK_SANDWICH = 'Cook Sandwich';

module.exports = {
    wip: true,
    cardName: 'Reuben Sandwich',
    name: 'Reuben Sandwich',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Reuben Sandwich', link: 'https://www.allrecipes.com/recipe/47717/reuben-sandwich-ii/' }
    ],
    separated: true,
    ingredients: [
        { ...RYE_BREAD, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SANDWICH_SECTION },
        { ...THOUSAND_ISLAND_DRESSING, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SANDWICH_SECTION },
        { ...PROVOLONE_CHEESE, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SANDWICH_SECTION },
        { ...CORNED_BEEF, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SANDWICH_SECTION },
        { ...SAUERKRAUT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SANDWICH_SECTION },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BUTTER_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large pan' },
        { name: 'knife' },
        { name: 'plate' },
        { name: 'cutting board' },
    ],
    directions: [
        { step: 'Over medium heat, heat a pan.', section: SECTIONS.ASSEMBLE },
        { step: 'Place 4 slices of bread on a plate or cutting board.', section: SECTIONS.ASSEMBLE },
        { step: 'Spread dressing on bread.', section: SECTIONS.ASSEMBLE },
        { step: 'Layer: 1 cheese slice, 2 corned beef slices, 1/4 sauerkraut, 1 cheese slice, and bread slice.', section: SECTIONS.ASSEMBLE },
        { step: 'Butter each bread top.', section: SECTIONS.ASSEMBLE },
        { step: 'Place sandwich in pan (butter side down). Butter the bread top. Warm until golden brown (about 5 minutes).', section: COOK_SANDWICH },
        { step: 'Flip and cook until the golden brown (about 5 minutes).', section: COOK_SANDWICH },
        { step: 'Enjoy this sandwich hot.', section: SECTIONS.SERVE },
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