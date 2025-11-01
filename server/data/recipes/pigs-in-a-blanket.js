const blanket1 = '../assets/Products/pigs-in-a-blanket-1.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_SHEET, BASTING_BRUSH, CROISSANT_DOUGH, CUTTING_BOARD, EGG, KNIFE, MINI_HOT_DOG, OVEN, PLATE } = require('./ingredients');

const PIGS_IN_A_BLANKET = 'Pigs In A Blanket';

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
            authors: ['Pillsbury'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...CROISSANT_DOUGH, amount: 2, unit: INGREDIENT_UNITS.CAN, additionalDetails: '', section: PIGS_IN_A_BLANKET },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: PIGS_IN_A_BLANKET },
        { ...MINI_HOT_DOG, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: PIGS_IN_A_BLANKET },
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
        { step: `Preheat oven to 375ºF.`, section: SECTIONS.PREHEAT_OVEN },

        { step: `Line baking sheet with aluminum foil.`, section: SECTIONS.PREP_PAN },

        { step: `Cut each croissant dough triangle into thirds.`, section: SECTIONS.ASSEMBLE },
        { step: `Place hot dog on one end of the croissant piece.`, section: SECTIONS.ASSEMBLE },
        { step: `Roll until it is snugly wrapped inside its blanket.`, section: SECTIONS.ASSEMBLE },
        { step: `Separate the egg white and the yolk. Lightly brush some of the yolk over the blanket to create a seal.`, section: SECTIONS.ASSEMBLE },

        { step: `Bake until golden brown (about 12 to 15 minutes).`, section: SECTIONS.BAKE },

        { step: `Serve with your favorite condiment, and enjoy this easy tailgate hors d'oeuvre!`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Tubs of croissant dough usually make about 8 croissants.' },
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