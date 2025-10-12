const cheesesteak1 = '../assets/Products/philly-cheesesteak-1.jpeg';
const cheesesteak2 = '../assets/Products/philly-cheesesteak-2.jpeg';
const cheesesteak3 = '../assets/Products/philly-cheesesteak-3.jpeg';
const cheesesteak4 = '../assets/Products/philly-cheesesteak-4.jpeg';

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
    recipeAuthors: ['Natalya Drozhzhin'],
    recipeFinder: 'Kevin Ung',
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
        { label: 'Philly Cheesesteak', link: 'https://momsdish.com/easy-philly-cheesesteak' }
    ],
    ingredients: [
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...RED_BELL_PEPPER, amount: 2, unit: '', additionalDetails: 'sliced strips', optional: false },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'sliced strips', optional: false },
        { ...MUSHROOM, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', optional: true },
        { ...PROVOLONE_CHEESE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', optional: false },
        { ...BEEF_RIBEYE_STEAK, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'thin strips', optional: false },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false },
        { ...HOAGIE_BREAD, amount: 6, unit: '', additionalDetails: '', optional: false },
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
        { step: 'Over high heat, heat oil in pan.', section: SECTIONS.MAIN },
        { step: 'Add onions, bell peppers and mushrooms into pan and caramelize. Saute until browned and set aside.', section: SECTIONS.MAIN, img: cheesesteak2 },
        { step: 'In same pan, add beef and season with salt and pepper. Cook until beef is cooked and set aside.', section: SECTIONS.MAIN, img: [cheesesteak3, cheesesteak4] },
        { step: 'Re-add the veggies to pan and stir.', section: SECTIONS.MAIN },
        { step: 'Layer cheese slices and melt (about a minute).', section: SECTIONS.MAIN },
        { step: 'Optionally toast the buns. Open up hoagie bread and layer with meat, cheese and vegetables to your hearts content.', section: SECTIONS.MAIN },
        { step: 'Enjoy the taste of freedom!', section: SECTIONS.MAIN },
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