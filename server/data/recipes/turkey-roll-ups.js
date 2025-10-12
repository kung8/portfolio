const roll1 = '../assets/Products/turkey-roll-up-1.jpeg';
const roll2 = '../assets/Products/turkey-roll-up-2.jpeg';
const roll3 = '../assets/Products/turkey-roll-up-3.jpeg';
const roll4 = '../assets/Products/turkey-roll-up-4.jpeg';
const roll5 = '../assets/Products/turkey-roll-up-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CRANBERRY_SAUCE, CREAM_CHEESE, FLOUR_TORTILLA, PROVOLONE_CHEESE, ROMAINE_LETTUCE, SLICER_TOMATO, TURKEY } = require('./ingredients');

module.exports = {
    cardName: 'Turkey Roll Ups',
    name: 'Turkey Roll Ups',
    img: roll4,
    recipeAuthors: ['Meggan Hill'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.RAW],
    protein: [PROTEIN.TURKEY],
    type: [TYPES.WRAP],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Turkey Roll Up (Costco Copycat)', link: 'https://www.culinaryhill.com/turkey-rollups-with-cranberry-cream-cheese/' }
    ],
    separated: true,
    ingredients: [
        { ...CREAM_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'softened', section: SECTIONS.ASSEMBLE },
        { ...CRANBERRY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...FLOUR_TORTILLA, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...ROMAINE_LETTUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.HEAD, additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...TURKEY, amount: 16, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...PROVOLONE_CHEESE, amount: 16, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'halved', section: SECTIONS.ASSEMBLE },
        { ...SLICER_TOMATO, amount: 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'halved and sliced', section: SECTIONS.ASSEMBLE },
    ],
    supplies: [
        { name: 'medium bowl' },
        { name: 'cutting board' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'In a medium bowl, combine cream cheese and cranberry sauce.', section: SECTIONS.ASSEMBLE, img: roll1 },
        { step: 'On a cutting board, lay a tortilla.', section: SECTIONS.ASSEMBLE },
        { step: 'Smear the sauce on the tortilla. The sauce helps hold the wrap together.', section: SECTIONS.ASSEMBLE, img: roll2 },
        { step: 'Layer 1/4 of the ingredients in the center of the tortilla.', section: SECTIONS.ASSEMBLE, img: roll3 },
        { step: 'Roll the tortilla tightly.', section: SECTIONS.ASSEMBLE },
        { step: 'Wrap in plastic wrap and chill in the fridge until serving.', section: SECTIONS.CHILL },
        { step: 'Cut each into 8 equal pieces and enjoy.', section: SECTIONS.SERVE, img: roll5 },
    ],
    notes: [
        { note: 'This does not keep very well, maybe two days at most. This tastes better chilled for a few hours though.' },
        { note: 'Also the original recipe calls for swiss cheese but I think it would be better to replace with provolone.' }
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: null,
    mealPrep: false,
};