// const example1 = '../assets/Products/example-1.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS, PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');

const { ARBORIO_RICE, BEEF_BROTH, BLACK_PEPPER, DEEP_FRYER, EGG, GROUND_BEEF, LARGE_PAN, MOZZARELLA_CHEESE, OLIVE_OIL, PANKO_BREADCRUMBS, PARMIGIANO_REGGIANO, SALT, STOVE, TOMATO_PUREE, UNSALTED_BUTTER, VEGETABLE_OIL, WHITE_WINE, YELLOW_ONION } = require('./ingredients');

const MEAT_SAUCE = 'Meat Sauce';
const RICE_MIXTURE = 'Rice Mixture';
const SUPPLI_BALL = 'Supplì Ball';

const COOK_MEAT_SAUCE = 'Cook Meat Sauce';
const COOK_RICE_MIXTURE = 'Cook Rice Mixture';
const FORM_SUPPLI = 'Form Supplì';

module.exports = {
    wip: true,
    cardName: 'Supplì',
    name: 'Supplì',
    img: '',
    available: true,
    recommended: false,
    createdAt: '2026-06-06 22:26:27',
    modifiedAt: '2026-06-07 00:16:26',
    category: [CATEGORIES.APPETIZER, CATEGORIES.SIDE_DISH, CATEGORIES.SNACK],
    genre: [GENRES.ITALIAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.FINGER_FOOD, TYPES.SIDE_DISH],
    yields: { amount: 20, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Supplì', link: 'https://www.manusmenu.com/suppli-al-telefono', authors: ['Giallo Zafferano'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MEAT_SAUCE },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MEAT_SAUCE },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'minced', section: MEAT_SAUCE },
        { ...GROUND_BEEF, amount: 7, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: MEAT_SAUCE },
        { ...WHITE_WINE, amount: 3.33, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: MEAT_SAUCE },
        { ...TOMATO_PUREE, amount: 13.5, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: MEAT_SAUCE },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: MEAT_SAUCE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: MEAT_SAUCE },

        { ...ARBORIO_RICE, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: RICE_MIXTURE },
        { ...BEEF_BROTH, amount: 1, unit: INGREDIENT_UNITS.QUART, additionalDetails: '', section: RICE_MIXTURE },
        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RICE_MIXTURE },
        { ...PARMIGIANO_REGGIANO, amount: 4.25, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'grated', section: RICE_MIXTURE },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: RICE_MIXTURE },

        { ...MOZZARELLA_CHEESE, amount: 7, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'cubed', section: SUPPLI_BALL },
        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.DREDGING_STATION },
        { ...PANKO_BREADCRUMBS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.DREDGING_STATION },

        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: '', section: SECTIONS.FOR_FRYING },
    ],
    appliances: [
        STOVE,
        DEEP_FRYER,
    ],
    supplies: [
        LARGE_PAN,
    ],
    directions: [
        { step: `Over medium-high heat, add butter and olive oil to a large pan.`, section: COOK_MEAT_SAUCE },
        { step: `Add onion. Saute until soft.`, section: COOK_MEAT_SAUCE },
        { step: `Add ground beef. Cook until browned and break up.`, section: COOK_MEAT_SAUCE },
        { step: `Add wine. Let alcohol evaporate.`, section: COOK_MEAT_SAUCE },
        { step: `Add tomato puree, salt and black pepper.`, section: COOK_MEAT_SAUCE },
        { step: `Reduce to low heat. Simmer until sauce thickens (about 20 minutes).`, section: COOK_MEAT_SAUCE },

        { step: `Add rice and broth. Cook about 13 minutes.`, section: COOK_RICE_MIXTURE },
        { step: `Remove from heat.`, section: COOK_RICE_MIXTURE },
        { step: `Add butter and parmesan. Mix.`, section: COOK_RICE_MIXTURE },
        { step: `Add egg. Stir.`, section: COOK_RICE_MIXTURE },
        { step: `Spread rice on a baking pan.`, section: COOK_RICE_MIXTURE },
        { step: `Let it cool completely.`, section: COOK_RICE_MIXTURE },

        { step: `Once the rice has cooled enough to handle, form balls (about 20 balls). Keep your hands wet to help avoid stickage.`, section: FORM_SUPPLI },
        { step: `Make a hole in the center of each ball and add 2 to 3 mozzarella cubes.`, section: FORM_SUPPLI },
        { step: `Enclose cheese and shape balls to egg.`, section: FORM_SUPPLI },

        { step: `Prepare two dredging bowls: eggs and breadcrumbs.`, section: SECTIONS.DREDGE },
        { step: `Dredge supplì in egg and breadcrumbs. Press breadcrumb gently with your palm.`, section: SECTIONS.DREDGE },
        { step: `Re-dredge each supplì for a double coat.`, section: SECTIONS.DREDGE },

        { step: `Line a baking sheet with paper towels and place a wire rack on top.`, section: SECTIONS.FRY },
        { step: `Heat oil in a deep fryer until it gets to 350ºF.`, section: SECTIONS.FRY },
        { step: `Add and fry in batches. Cook until golden brown, turning occasionally with a slotted spoon.`, section: SECTIONS.FRY },
        { step: `Transfer to the dripping station.`, section: SECTIONS.FRY },

        { step: `Enjoy these delicious Italian street food.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `You can tell the alcohol evaporates based on the smell of rubbing alcohol or the density of the liquid.` },
    ],
    store: [
        {
            duration: { amount: 2, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through (about 10 minutes).',
        },
    ],
    mealPrep: true,
};