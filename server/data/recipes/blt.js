const blt1 = '../assets/Products/blt-1.jpeg';
const blt2 = '../assets/Products/blt-2.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BACON, BREAD, FRYING_PAN, KNIFE, LETTUCE, MAYONNAISE, PAPER_TOWELS, PLATE, ROMA_TOMATO, STOVE, TOASTER } = require('./ingredients');

const COOK_BACON = 'Cook Bacon';

module.exports = {
    cardName: 'B.L.T.',
    name: 'B.L.T.',
    img: blt2,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.SANDWICH],
    allergies: [ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 1, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'B.L.T.', 
            link: 'https://www.allrecipes.com/recipe/209578/blt/',
            authors: ['Mottsbela'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...BACON, amount: 4, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LETTUCE, amount: 2, unit: INGREDIENT_UNITS.LEAF, additionalDetails: '', section: SECTIONS.MAIN },
        { ...ROMA_TOMATO, amount: 2, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BREAD, amount: 2, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'toasted', section: SECTIONS.MAIN },
        { ...MAYONNAISE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
        TOASTER,
    ],
    supplies: [
        PLATE,
        PAPER_TOWELS,
        FRYING_PAN,
        KNIFE,
    ],
    directions: [
        { step: 'Line a plate with paper towels.', section: COOK_BACON },
        { step: 'Over medium-high heat, cook bacon in a frying pan until browned (about 10 minutes).', section: COOK_BACON },
        { step: 'Let the bacon drain on the paper towel.', section: COOK_BACON },
        { step: 'Spread the mayo on a slice of toasted bread.', section: SECTIONS.ASSEMBLE },
        { step: 'Layer the bacon, tomatoes and lettuce on the sandwich.', section: SECTIONS.ASSEMBLE, img: blt1 },
        { step: 'Enjoy this simple sandwich.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store the ingredients separately.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Since you will keep the ingredients separate, you can just follow the recipe again.',
        },
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'If the bacon was cooked, you can air fry it at 350ºF until heated through and crispy (about 2 to 4 minutes).',
        },
    ],
    mealPrep: false,
};