const blanket1 = '../assets/Products/pigs-in-a-blanket-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_SHEET, BASTING_BRUSH, CROISSANT_DOUGH, CUTTING_BOARD, EGG, KNIFE, MINI_HOT_DOG, OVEN, PLATE } = require('./ingredients');

module.exports = {
    cardName: 'Pigs In A Blanket',
    name: 'Pigs In A Blanket',
    img: blanket1,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.FINGER_FOOD],
    allergies: [ALLERGIES.EGG],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.VEGETARIAN],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Pigs In A Blanket',
            link: 'https://www.pillsbury.com/recipes/pigs-in-a-blanket/e8abc84e-8a0e-42d6-ae7e-23b677a161ac',
            author: ['Pillsbury'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...CROISSANT_DOUGH, amount: 2, unit: INGREDIENT_UNITS.CAN, additionalDetails: '', optional: false },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...MINI_HOT_DOG, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', optional: false },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        ALUMINUM_FOIL,
        CUTTING_BOARD,
        KNIFE,
        BASTING_BRUSH,
        PLATE,
    ],
    directions: [
        { step: 'Preheat oven to 375ºF and line baking sheet with aluminum foil.', section: SECTIONS.MAIN },
        { step: 'Tubs of croissant dough usually make about 8 croissants. Cut each croissant dough triangle into thirds.', section: SECTIONS.MAIN },
        { step: 'Place hot dog on one end of the croissant piece and roll until it is snugly wrapped inside its blanket.', section: SECTIONS.MAIN },
        { step: 'Separate the egg white and the yolk. Lightly brush some of the yolk over the blanket to create a seal.', section: SECTIONS.MAIN },
        { step: 'Bake until golden brown (about 12 to 15 minutes).', section: SECTIONS.MAIN },
        { step: 'Serve with your favorite condiment, and enjoy this easy tailgate hors d\'oeuvre!', section: SECTIONS.MAIN },
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 325ºF until heated through (about 8 to 10 minutes).',
        },
    ],
    mealPrep: true,
};