const cheesesteak1 = '../assets/Products/philly-cheesesteak-1.jpeg';
const cheesesteak2 = '../assets/Products/philly-cheesesteak-2.jpeg';
const cheesesteak3 = '../assets/Products/philly-cheesesteak-3.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BEEF_RIBEYE_STEAK,
    BLACK_PEPPER,
    CUTTING_BOARD,
    FRYING_PAN,
    HOAGIE_BREAD,
    KNIFE,
    MEDIUM_BOWL,
    MUSHROOM,
    OLIVE_OIL,
    PLATE,
    PROVOLONE_CHEESE,
    RED_BELL_PEPPER,
    SALT,
    STOVE,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Philly Cheesesteak',
    name: 'Philly Cheesesteak',
    img: cheesesteak1,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.SANDWICH],
    allergies: [],
    diet: [DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Philly Cheesesteak',
            link: 'https://momsdish.com/easy-philly-cheesesteak',
            authors: ['Natalya Drozhzhin'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 2, unit: '', additionalDetails: 'sliced strips', section: SECTIONS.VEGGIES },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'sliced strips', section: SECTIONS.VEGGIES },
        { ...MUSHROOM, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', optional: true, section: SECTIONS.VEGGIES },

        { ...BEEF_RIBEYE_STEAK, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'thin strips', section: SECTIONS.BEEF },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.BEEF },

        { ...PROVOLONE_CHEESE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHEESE },
        { ...HOAGIE_BREAD, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        CUTTING_BOARD,
        KNIFE,
        MEDIUM_BOWL,
        PLATE,
    ],
    directions: [
        { step: 'Over high heat, heat oil in pan.', section: SECTIONS.COOK_VEGGIES },
        { step: `Add the "${SECTIONS.VEGGIES}" section ingredients.`, section: SECTIONS.COOK_VEGGIES },
        { step: `Caramelize and saute until browned. Set aside.`, section: SECTIONS.COOK_VEGGIES, img: cheesesteak2 },

        { step: `In the same pan, add the "${SECTIONS.BEEF}" section ingredients`, section: SECTIONS.COOK_BEEF },
        { step: `Saute until cooked. Set aside.`, section: SECTIONS.COOK_BEEF, img: cheesesteak3 },

        { step: 'Re-add the veggies. Stir.', section: SECTIONS.ASSEMBLE },
        { step: 'Layer cheese slices on top. Let it melt (about a minute).', section: SECTIONS.ASSEMBLE },
        { step: 'Optionally toast the buns.', section: SECTIONS.ASSEMBLE },
        { step: 'Open up hoagie bread and fill to your heart\'s content.', section: SECTIONS.ASSEMBLE },

        { step: 'Enjoy the taste of freedom!', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instruction: 'Store the ingredients separately. Bread can be stored at room temperature.',
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};