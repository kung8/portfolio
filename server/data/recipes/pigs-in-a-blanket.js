const pigsInABlanket = '../assets/Products/pigs-in-a-blanket.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { CROISSANT_DOUGH, EGG, MINI_HOT_DOG } = require('./ingredients');

module.exports = {
    cardName: 'Pigs In A Blanket',
    name: 'Pigs In A Blanket',
    img: pigsInABlanket,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.BAKE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    ingredients: [
        { ...CROISSANT_DOUGH, amount: 2, unit: INGREDIENT_UNITS.CAN, additionalDetails: '', optional: false },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', optional: false },
        { ...MINI_HOT_DOG, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', optional: false },
    ],
    appliances: [
        { name: 'oven' },
    ],
    supplies: [
        { name: 'baking sheet' },
        { name: 'aluminum foil' },
        { name: 'cutting board' },
        { name: 'knife' },
        { name: 'basting brush' },
        { name: 'plate' },
    ],
    directions: [
        { step: 'Preheat oven to 375ºF and line baking sheet with aluminum foil.', section: SECTIONS.MAIN },
        { step: 'Tubs of croissant dough usually make about 8 croissants. Cut each croissant dough triangle into thirds.', section: SECTIONS.MAIN },
        { step: 'Place hot dog on one end of the croissant piece and roll until it is snugly wrapped inside its blanket.', section: SECTIONS.MAIN },
        { step: 'Separate the egg white and the yolk. Lightly brush some of the yolk over the blanket to create a seal.', section: SECTIONS.MAIN },
        { step: 'Bake for about 12 - 15 min or until golden brown.', section: SECTIONS.MAIN },
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