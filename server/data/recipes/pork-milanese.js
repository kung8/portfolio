// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, UNITS, YIELD_UNITS } = require('./constants');
const { PORK_CHOPS, ALL_PURPOSE_FLOUR, EGG, PANKO_BREADCRUMBS, OLIVE_OIL, UNSALTED_BUTTER, SALT, BLACK_PEPPER, LEMON_JUICE, CUCUMBER, PARMESAN_CHEESE, ASPARAGUS, BABY_ARUGULA, BABY_KALE, RADISH, PEAS, MICROGREENS } = require('./ingredients');

const PORK_SECTION = 'Pork';
const SALAD_SECTION = 'Salad';

const PREP_PORK = 'Prep Pork';
const DREDGE_PORK = 'Dredge Pork';
const COOK_PORK = 'Cook Pork';
const PREP_SALAD = 'Prep Salad';

module.exports = {
    wip: true,
    cardName: 'Pork Milanese',
    name: 'Pork Milanese',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.PROTEIN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: '20 m',
    cookTime: '10 m',
    websites: [
        { label: 'Pork Milanese', link: 'https://www.billyparisi.com/pork-milanese-spring-kale-salad-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...PORK_CHOPS, amount: 2, unit: UNITS.POUND, additionalDetails: 'bone-in', section: PORK_SECTION },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: UNITS.CUP, additionalDetails: '', section: PORK_SECTION },
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: PORK_SECTION },
        { ...PANKO_BREADCRUMBS, amount: 2, unit: UNITS.CUP, additionalDetails: '', section: PORK_SECTION },
        { ...OLIVE_OIL, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: '', section: PORK_SECTION },
        { ...UNSALTED_BUTTER, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: PORK_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: PORK_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: PORK_SECTION },

        { ...LEMON_JUICE, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SALAD_SECTION },
        { ...OLIVE_OIL, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: '', section: SALAD_SECTION },
        { ...BABY_ARUGULA, amount: 2, unit: UNITS.CUP, additionalDetails: '', section: SALAD_SECTION },
        { ...BABY_KALE, amount: 2, unit: UNITS.CUP, additionalDetails: '', section: SALAD_SECTION },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: 'grated', section: SALAD_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SALAD_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SALAD_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'cutting board' },
        { name: 'plastic wrap' },
        { name: 'meat tenderizer' },
        { name: 'paper towels' },
        { name: 'baking sheet' },
        { name: 'wire rack' },
        { name: '3 shallow bowls' },
        { name: 'plate' },
        { name: 'mixing bowl' },
    ],
    directions: [
        { step: 'Place pork chop between two pieces of plastic wrap.', type: PREP_PORK },
        { step: 'Pound the meat with a meat tenderizer until it is between 1/4 inch and 1/2 inch thick.', type: PREP_PORK },
        { step: 'Season both sides of the pork chop with salt and pepper.', type: PREP_PORK },
        { step: 'Line a baking sheet with paper towels and place a wire rack on top.', type: DREDGE_PORK },
        { step: 'Set up the dredging station bowls: (1) flour, (2) whisked eggs, and (3) panko breadcrumb.', type: DREDGE_PORK },
        { step: 'Dredge the pork on both sides in flour and shake excess off.', type: DREDGE_PORK },
        { step: 'Dredge in egg wash.', type: DREDGE_PORK },
        { step: 'Dredge in panko breadcrumbs.', type: DREDGE_PORK },
        { step: 'Place the breaded pork chops on a plate.', type: DREDGE_PORK },
        { step: 'Over medium heat, add oil to a frying pan.', type: COOK_PORK },
        { step: 'Add breaded pork. ', type: COOK_PORK },
        { step: 'Cook until the pork is light golden brown (about 3 to 4 minutes).', type: COOK_PORK },
        { step: 'Flip. Add 1 tablespoon of butter to the pan.', type: COOK_PORK },
        { step: 'Cook the other side until it is light golden brown (about 3 to 4 minutes).', type: COOK_PORK },
        { step: 'Let it drain on the wire rack.', type: COOK_PORK },
        { step: 'In a mixing bowl, combine the "Salad" section ingredients.', type: PREP_SALAD },
        { step: 'Plate the pork chop and top with the salad.', type: SECTIONS.SERVE },
    ]
};