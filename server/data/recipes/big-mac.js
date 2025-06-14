const beef3 = '../assets/Products/big-mac-3.jpeg';
const sauce2 = '../assets/Products/big-mac-sauce-2.jpeg';
const sauce4 = '../assets/Products/big-mac-sauce-4.jpeg';
const plated6 = '../assets/Products/big-mac-plated-6.jpeg';
const plated7 = '../assets/Products/big-mac-plated-7.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES , INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { MAYONNAISE, KETCHUP, YELLOW_MUSTARD, PICKLES, YELLOW_ONION, PAPRIKA, ONION_POWDER, SALT, BLACK_PEPPER, HAMBURGER_BUNS, BEEF_PATTIES, LETTUCE, CHEDDAR_CHEESE } = require('./ingredients');

const BIG_MAC_SAUCE = 'Big Mac Sauce';

module.exports = {
    cardName: 'Big Mac',
    name: 'Big Mac',
    img: plated7,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.BEEF],
    type: [TYPES.BURGER],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    separated: true,
    ingredients: [
        { ...MAYONNAISE, amount: 1/2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...KETCHUP, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...YELLOW_MUSTARD, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...PICKLES, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'diced', section: BIG_MAC_SAUCE },
        { ...YELLOW_ONION, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...ONION_POWDER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: BIG_MAC_SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: BIG_MAC_SAUCE },

        { ...HAMBURGER_BUNS, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...BEEF_PATTIES, amount: 8, unit: '', additionalDetails: '', section: SECTIONS.ASSEMBLE },
        { ...LETTUCE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'shredded', section: SECTIONS.ASSEMBLE },
        { ...CHEDDAR_CHEESE, amount: 8, unit: '', additionalDetails: 'slices', section: SECTIONS.ASSEMBLE },
    ],
    appliances: [
        { name: 'grill/stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the sauce ingredients.', section: BIG_MAC_SAUCE, img: [sauce2, sauce4] },
        { step: 'Place sauce in fridge to chill until ready to assemble the burgers.', section: BIG_MAC_SAUCE },
        { step: 'Cook the patties on a grill/skillet/pan to your preferred doneness.', section: SECTIONS.MAIN, img: [beef3] },
        { step: 'Assemble the burgers.', section: SECTIONS.MAIN, img: plated6 },
        { step: 'You might not ever need to go to McDonald\'s ever again unless you are missing their fries, nuggets or McFlurries.', section: SECTIONS.MAIN },
    ],
    notes: [
        { note: 'The burgers will shrink a bit when cooked so either get bigger patties or smaller buns.' },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Wrap in paper towel and microwave until heated through (about 30 seconds).',
        },
    ],
    mealPrep: true,
};