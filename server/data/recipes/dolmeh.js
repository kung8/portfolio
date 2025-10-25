const dolmeh1 = '../assets/Products/dolmeh-1.jpeg';
const dolmeh2 = '../assets/Products/dolmeh-2.jpeg';
const dolmeh3 = '../assets/Products/dolmeh-3.jpeg';
const dolmeh4 = '../assets/Products/dolmeh-4.jpeg';
const dolmeh5 = '../assets/Products/dolmeh-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BASMATI_RICE, BLACK_PEPPER, CHICKPEA, CILANTRO, DILL, FRYING_PAN, GARLIC, GRAPE_LEAF, GREEN_ONION, GROUND_BEEF, LARGE_POT, LEMON_JUICE, OLIVE_OIL, PARSLEY, PLATE, SALT, STOVE, TARRAGON, WATER, WHITE_SUGAR, YELLOW_ONION } = require('./ingredients');

const DOLMEH_SECTION = 'Dolmeh';
const LEMON_SUGAR_MIX = 'Lemon Sugar Mix';
const COOK_DOLMEH = 'Cook Dolmeh';

module.exports = {
    cardName: 'Dolmeh',
    name: 'Dolmeh',
    img: dolmeh5,
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.MIDDLE_EASTERN, GENRES.PERSIAN, GENRES.IRANIAN],
    method: [METHODS.SAUTE, METHODS.SIMMER],
    protein: [PROTEIN.BEEF],
    type: [TYPES.MAIN_COURSE, TYPES.SIDE_DISH],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 55, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 80, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Dolmeh', 
            link: 'https://www.unicornsinthekitchen.com/persian-dolmeh-recipe-video/',
            authors: ['Shadi Hasanzadenemati'],
            finder: 'Kasra Kamravani\'s Mom', 
        }
    ],
    separated: true,
    ingredients: [
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUTE },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'finely chopped', section: SECTIONS.SAUTE },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUTE },
        { ...GROUND_BEEF, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.SAUTE },
        { ...BASMATI_RICE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'par cooked', section: SECTIONS.RICE },
        { ...CHICKPEA, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooked', section: SECTIONS.RICE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...TARRAGON, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...DILL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...PARSLEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...CILANTRO, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.VEGGIES },
        { ...GREEN_ONION, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: SECTIONS.VEGGIES },

        { ...GRAPE_LEAF, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.WRAPPER },

        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: DOLMEH_SECTION },

        { ...WATER, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'hot', section: LEMON_SUGAR_MIX },
        { ...LEMON_JUICE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: LEMON_SUGAR_MIX },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: LEMON_SUGAR_MIX },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
        LARGE_POT,
        PLATE,
    ],
    directions: [
        { step: 'Over medium heat, heat oil in pan.', section: SECTIONS.PREP_FILLING },
        { step: 'Add onion and garlic. Saute until golden brown.', section: SECTIONS.PREP_FILLING },
        { step: 'Add beef. Brown.', section: SECTIONS.PREP_FILLING, img: dolmeh1 },
        { step: `Add "${SECTIONS.RICE}" section ingredients.`, section: SECTIONS.PREP_FILLING },
        { step: `Add "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.PREP_FILLING },
        { step: `Add "${SECTIONS.VEGGIES}" section ingredients. Cook for a few minutes.`, section: SECTIONS.PREP_FILLING, img: dolmeh2 },

        { step: 'On a clean surface, lay grape leaves flat.', section: SECTIONS.WRAP },
        { step: 'Add 1 tablespoon of filling in the center.', section: SECTIONS.WRAP },
        { step: 'Fold over the sides.', section: SECTIONS.WRAP },
        { step: 'Place folded side down.', section: SECTIONS.WRAP, img: dolmeh3 },

        { step: 'In a pot, add oil and cover the bottom with grape leaves.', section: COOK_DOLMEH },
        { step: 'Place stuffed dolmeh on the grape leaves tightly (folded side down). Layer until all dolmeh are in the pot.', section: COOK_DOLMEH },
        { step: 'Press down the dolmeh with a lid or plate.', section: COOK_DOLMEH },
        { step: `In a small bowl, combine "${LEMON_SUGAR_MIX}" section ingredients. Pour into pot.`, section: COOK_DOLMEH, img: dolmeh4 },
        { step: 'Cover with a lid. Place over medium heat.', section: COOK_DOLMEH },
        { step: 'Once water simmers, turn heat to low.', section: COOK_DOLMEH },
        { step: 'Cook until all the water has been absorbed and grape leaves should be cooked (about 1 hour). Dolmeh should be soft and rice is cooked completely.', section: COOK_DOLMEH },

        { step: 'Enjoy this Persian dish!', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 5, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave until heated through (about 3-4 minutes).',
        },
    ],
    mealPrep: true,
};