// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BABY_ARUGULA, BABY_KALE, BAKING_SHEET, BLACK_PEPPER, COOLING_RACK, CUTTING_BOARD, EGG, LEMON_JUICE, MEAT_MALLET, MIXING_BOWL, OLIVE_OIL, PANKO_BREADCRUMBS, PAPER_TOWELS, PARMESAN_CHEESE, PLASTIC_WRAP, PLATE, PORK_CHOPS, SALT, SMALL_BOWL, STOVE, UNSALTED_BUTTER } = require('./ingredients');

const DREDGE_PORK = 'Dredge Pork';

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
    allergies: [ALLERGIES.DAIRY, ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Pork Milanese', 
            link: 'https://www.billyparisi.com/pork-milanese-spring-kale-salad-recipe/',
            authors: ['Billy Parisi'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...PORK_CHOPS, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'bone-in', section: SECTIONS.PORK },
        { ...ALL_PURPOSE_FLOUR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.PORK },
        { ...EGG, amount: 3, unit: '', additionalDetails: '', section: SECTIONS.PORK },
        { ...PANKO_BREADCRUMBS, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.PORK },
        { ...OLIVE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.PORK },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.PORK },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.PORK },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.PORK },

        { ...LEMON_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SALAD },
        { ...OLIVE_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SALAD },
        { ...BABY_ARUGULA, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SALAD },
        { ...BABY_KALE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SALAD },
        { ...PARMESAN_CHEESE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'grated', section: SECTIONS.SALAD },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SALAD },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SALAD },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        CUTTING_BOARD,
        PLASTIC_WRAP,
        MEAT_MALLET,
        PAPER_TOWELS,
        BAKING_SHEET,
        COOLING_RACK,
        { ...SMALL_BOWL, amount: 3 },
        PLATE,
        MIXING_BOWL,
    ],
    directions: [
        { step: 'Place pork chop between two pieces of plastic wrap.', section: SECTIONS.PREP_PORK },
        { step: 'Pound the meat with a meat tenderizer until it is between 1/4 inch and 1/2 inch thick.', section: SECTIONS.PREP_PORK },
        { step: 'Season both sides of the pork chop with salt and pepper.', section: SECTIONS.PREP_PORK },
        { step: 'Line a baking sheet with paper towels and place a wire rack on top.', section: DREDGE_PORK },
        { step: 'Set up the dredging station bowls: (1) flour, (2) whisked eggs, and (3) panko breadcrumb.', section: DREDGE_PORK },
        { step: 'Dredge the pork on both sides in flour and shake excess off.', section: DREDGE_PORK },
        { step: 'Dredge in egg wash.', section: DREDGE_PORK },
        { step: 'Dredge in panko breadcrumbs.', section: DREDGE_PORK },
        { step: 'Place the breaded pork chops on a plate.', section: DREDGE_PORK },
        { step: 'Over medium heat, add oil to a frying pan.', section: SECTIONS.COOK_PORK },
        { step: 'Add breaded pork. ', section: SECTIONS.COOK_PORK },
        { step: 'Cook until the pork is light golden brown (about 3 to 4 minutes).', section: SECTIONS.COOK_PORK },
        { step: 'Flip. Add 1 tablespoon of butter to the pan.', section: SECTIONS.COOK_PORK },
        { step: 'Cook the other side until it is light golden brown (about 3 to 4 minutes).', section: SECTIONS.COOK_PORK },
        { step: 'Let it drain on the wire rack.', section: SECTIONS.COOK_PORK },
        { step: `In a mixing bowl, combine the "${SECTIONS.SALAD}" section ingredients.`, section: SECTIONS.PREP_SALAD },
        { step: 'Plate the pork chop and top with the salad.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the veggies, dressing and pork separately.'
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 375ºF until heated through (about 10 to 12 minutes).',
        },
    ],
    mealPrep: true,
};