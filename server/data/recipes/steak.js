const steak1 = '../assets/Products/steak-1.jpeg';
const steak2 = '../assets/Products/steak-2.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BEEF_NEW_YORK_STRIP, BLACK_PEPPER, ONION_POWDER, SALT, UNSALTED_BUTTER } = require('./ingredients');

const BUTTER_SECTION = 'Butter';
const RESTING_BEEF = 'Resting Beef';

module.exports = {
    cardName: 'Steak',
    name: 'Steak',
    img: steak1,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.BEEF],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            author: ['Darci Billmire'],
            finder: 'Darci Billmire'
        }
    ],
    separated: true,
    ingredients: [
        { ...BEEF_NEW_YORK_STRIP, amount: 2, unit: INGREDIENT_UNITS.PIECE, additionalDetails: '', section: SECTIONS.BEEF },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...ONION_POWDER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BUTTER_SECTION },
    ],
    appliances: [
        { name: 'grill' },
    ],
    supplies: [
        { name: 'fork' },
        { name: 'tongs' },
        { name: 'knife' },
    ],
    directions: [
        { step: 'With a fork, poke holes on both sides of the steak.', section: SECTIONS.PREP_BEEF },
        { step: `Season the steaks on both side with the desired amount of "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.PREP_BEEF },
        { step: 'Grill the steak. For medium-well, grill for 4 minutes on each side. For medium-rare, grill for 3 to 3.5 minutes per side.', section: SECTIONS.GRILL },
        { step: 'For the last minute or two, add a piece of butter and allow it to melt.', section: SECTIONS.GRILL },
        { step: 'Let the steak rest to allow for the juices to circulate (about 5 to 10 minutes) before cutting or serving.', section: RESTING_BEEF },
        { step: 'Enjoy this simple steak recipe however you like your steak and with whatever sides.', section: SECTIONS.SERVE, img: steak2 },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Make sure to store the steak within 2 hours of cooking to ensure food safety.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 250ºF until the temperature reaches 110ºF (about 20 to 30 minutes).',
        },
    ],
    mealPrep: true,
};