// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { BONELESS_PORK_CHOPS, SALT, BLACK_PEPPER, ALL_PURPOSE_FLOUR, EGG, BREADCRUMBS, VEGETABLE_OIL, LEMON, PARSLEY } = require('./ingredients');

const PORK_CHOPS_SECTION = 'Pork Chops';
const FLOUR_MIXTURE_SECTION = 'Flour Mixture';
const DREDGING_STATION = 'Dredging Station';
const FRYING_OIL_SECTION = 'Frying Oil';

const PREP_PORK_CHOPS = 'Prep Pork Chops';
const FRY_PORK_CHOPS = 'Fry Pork Chops';

module.exports = {
    wip: true,
    cardName: 'German Schnitzel',
    name: 'German Schnitzel',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AUSTRIAN, GENRES.GERMAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'German Schnitzel', link: 'https://www.daringgourmet.com/traditional-german-pork-schnitzel/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_PORK_CHOPS, amount: 4, unit: '', additionalDetails: '', section: PORK_CHOPS_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: PORK_CHOPS_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: PORK_CHOPS_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FLOUR_MIXTURE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: FLOUR_MIXTURE_SECTION },
        { ...EGG, amount: 2, unit: '', additionalDetails: 'lightly beaten', section: DREDGING_STATION },
        { ...BREADCRUMBS, amount: 3 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: DREDGING_STATION },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: FRYING_OIL_SECTION },
        { ...LEMON, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
        { ...PARSLEY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'meat mallet' },
        { name: 'plastic wrap' },
        { name: 'pan' },
        { name: '3 small bowls' },
        { name: 'paper towels' },
        { name: 'plates' },
    ],
    directions: [
        { step: 'Place pork chops between two pieces of plastic wrap.', type: PREP_PORK_CHOPS },
        { step: 'Pound the chops to 1/4 inch thick with a meat mallet.', type: PREP_PORK_CHOPS },
        { step: 'Season both sides with salt and pepper.', type: PREP_PORK_CHOPS },
        { step: 'Heat a little less than 1/4 inch of oil in a pan. Bring the oil to 330ºF.', type: FRY_PORK_CHOPS },
        { step: 'Prepare dredging station bowls: (1) "Flour Mixture", (2) eggs, and (3) breadcrumbs.', type: FRY_PORK_CHOPS },
        { step: 'Dredge both sides of the pork chops in flour, eggs and breadcrumbs. Avoid pressing the breadcrumbs into the meat. Shake off excess breadcrumbs. Fry immediately.', type: FRY_PORK_CHOPS },
        { step: 'Fry the schnitzel until golden brown (about 2 to 3 minutes each side).', type: FRY_PORK_CHOPS },
        { step: 'Transfer to a paper towel-lined plate to drain excess oil.', type: FRY_PORK_CHOPS },
        { step: 'Top with lemon slices and parsley. Optionally serve with fries.', type: SECTIONS.SERVE },
    ]
};