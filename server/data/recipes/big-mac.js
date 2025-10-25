const mac1 = '../assets/Products/big-mac-1.jpeg';
const mac2 = '../assets/Products/big-mac-2.jpeg';
const mac3 = '../assets/Products/big-mac-3.jpeg';
const mac4 = '../assets/Products/big-mac-4.jpeg';
const mac5 = '../assets/Products/big-mac-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BEEF_PATTIES, BLACK_PEPPER, CHEDDAR_CHEESE, GRILL_OR_STOVE, HAMBURGER_BUNS, KETCHUP, LETTUCE, MAYONNAISE, MIXING_BOWL, ONION_POWDER, PAPRIKA, PICKLES, SALT, YELLOW_MUSTARD, YELLOW_ONION } = require('./ingredients');

const BIG_MAC_SAUCE = 'Big Mac Sauce';

module.exports = {
    cardName: 'Big Mac',
    name: 'Big Mac',
    img: mac5,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.BEEF],
    type: [TYPES.BURGER],
    allergies: [],
    diet: [DIET.GLUTEN_FREE, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    separated: true,
    ingredients: [
        { ...MAYONNAISE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BIG_MAC_SAUCE },
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
        GRILL_OR_STOVE
    ],
    supplies: [
        MIXING_BOWL,
    ],
    directions: [
        { step: 'In a mixing bowl, combine the sauce ingredients.', section: BIG_MAC_SAUCE, img: [mac1, mac2] },
        { step: 'Place sauce in fridge to chill until ready to assemble the burgers.', section: BIG_MAC_SAUCE },
        { step: 'Cook the patties on a grill/skillet/pan to your preferred doneness.', section: SECTIONS.MAIN, img: [mac3] },
        { step: 'Assemble the burgers.', section: SECTIONS.MAIN, img: mac4 },
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