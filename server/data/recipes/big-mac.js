const beef1 = '../assets/Products/big-mac-1.jpeg';
const beef2 = '../assets/Products/big-mac-2.jpeg';
const beef3 = '../assets/Products/big-mac-3.jpeg';
const sauce1 = '../assets/Products/big-mac-sauce-1.jpeg';
const sauce2 = '../assets/Products/big-mac-sauce-2.jpeg';
const sauce3 = '../assets/Products/big-mac-sauce-3.jpeg';
const sauce4 = '../assets/Products/big-mac-sauce-4.jpeg';
const plated1 = '../assets/Products/big-mac-plated-1.jpeg';
const plated2 = '../assets/Products/big-mac-plated-2.jpeg';
const plated3 = '../assets/Products/big-mac-plated-3.jpeg';
const plated4 = '../assets/Products/big-mac-plated-4.jpeg';
const plated5 = '../assets/Products/big-mac-plated-5.jpeg';
const plated6 = '../assets/Products/big-mac-plated-6.jpeg';
const plated7 = '../assets/Products/big-mac-plated-7.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES } = require('./constants');
const { MAYONNAISE, KETCHUP, YELLOW_MUSTARD, PICKLES, SMALL_YELLOW_ONION, PAPRIKA, ONION_POWDER, SALT, BLACK_PEPPER, HAMBURGER_BUNS, BEEF_PATTIES, LETTUCE, CHEDDAR_CHEESE } = require('./ingredients');

const BIG_MAC_SAUCE = 'Big Mac Sauce';

module.exports = {
    cardName: 'Big Mac',
    name: 'Big Mac',
    img: plated7,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.BEEF],
    type: [TYPES.BURGER],
    yields: '4 servings',
    prepTime: '5 m',
    cookTime: '15 m',
    separated: true,
    ingredients: [
        { ...MAYONNAISE, amount: '1/4 c', additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...KETCHUP, amount: '2 Tbsp', additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...YELLOW_MUSTARD, amount: '1 tsp', additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...PICKLES, amount: '2 Tbsp', additionalDetails: 'diced', section: BIG_MAC_SAUCE },
        { ...SMALL_YELLOW_ONION, amount: '2 Tbsp', additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...PAPRIKA, amount: '1 tsp', additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...ONION_POWDER, amount: '1 tsp', additionalDetails: '', section: BIG_MAC_SAUCE },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: BIG_MAC_SAUCE },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: BIG_MAC_SAUCE },

        { ...HAMBURGER_BUNS, amount: '6', additionalDetails: '', section: SECTIONS.ASSEMBLY },
        { ...BEEF_PATTIES, amount: '8', additionalDetails: '', section: SECTIONS.ASSEMBLY },
        { ...LETTUCE, amount: '8 oz', additionalDetails: 'shredded', section: SECTIONS.ASSEMBLY },
        { ...CHEDDAR_CHEESE, amount: '8', additionalDetails: 'slices', section: SECTIONS.ASSEMBLY },
    ],
    appliances: [
        { name: 'grill/stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the sauce ingredients.', type: BIG_MAC_SAUCE, img: [sauce1, sauce2, sauce3, sauce4] },
        { step: 'Place sauce in fridge to chill until ready to assemble the burgers.', type: BIG_MAC_SAUCE },
        { step: 'Cook the patties on a grill/skillet/pan to your preferred doneness.', type: SECTIONS.MAIN, img: [beef1, beef2, beef3] },
        { step: 'Assemble the burgers.', type: SECTIONS.MAIN, img: [plated1, plated2, plated3, plated4, plated5, plated6] },
        { step: 'You might not ever need to go to McDonald\'s ever again unless you are missing their fries, nuggets or McFlurries.', type: SECTIONS.MAIN },
    ],
    notes: [
        { note: 'The burgers will shrink a bit when cooked so either get bigger patties or smaller buns.' },
    ]
};