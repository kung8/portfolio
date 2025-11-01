// const example = '../assets/Products/example.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, CHICKEN_BROTH, GARLIC, PARSLEY, SALT, UNSALTED_BUTTER, WHITE_RICE, YELLOW_ONION } = require('./ingredients');

const ONION_MIXTURE_SECTION = 'Onion Mixture';
const COOK_ONION = 'Cook Onion';
const STEAM_RICE = 'Steam Rice';

module.exports = {
    wip: true,
    cardName: 'Rice Pilaf',
    name: 'Rice Pilaf',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MIDDLE_EASTERN],
    method: [METHODS.SIMMER],
    type: [TYPES.RICE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Rice Pilaf', 
            link: 'https://tastesbetterfromscratch.com/how-to-make-easy-rice-pilaf/',
            authors: ['Lauren Allen'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...WHITE_RICE, amount: 3 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.RICE },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.RICE },

        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'finely chopped', section: ONION_MIXTURE_SECTION },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: ONION_MIXTURE_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ONION_MIXTURE_SECTION },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: ONION_MIXTURE_SECTION },

        { ...CHICKEN_BROTH, amount: 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BROTH },
        { ...PARSLEY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'strainer' },
        { name: 'saucepan with lid' },
    ],
    directions: [
        { step: 'Run the rice under water until it comes out clear. Drain.', section: SECTIONS.PREP_RICE },
        { step: 'Over medium heat, melt butter in a saucepan.', section: SECTIONS.COOK_RICE },
        { step: 'Add rice. Cook and stir until golden.', section: SECTIONS.COOK_RICE },
        { step: `Add "${ONION_MIXTURE_SECTION}" section ingredients to the pan. Cook until the onions are softened.`, section: COOK_ONION },
        { step: 'Add broth. Bring to a boil.', section: STEAM_RICE },
        { step: 'Reduce to low heat. Cover with a lid. Cook for 15 to 18 minutes. Do not remove lid during the simmering process.', section: STEAM_RICE },
        { step: 'Remove pot from heat and let rest for 10 minutes. Leave the lid on.', section: STEAM_RICE },
        { step: 'Remove lid and fluff rice.', section: STEAM_RICE },
        { step: 'Top with parsley and serve with your favorite side dishes.', section: SECTIONS.SERVE },
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
            instruction: 'Add a tablespoon of water. Cover with a damp paper towel. Microwave in 30-second intervals until heated through. Stir in between intervals.',
        },
        {
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Over low heat, add a splash of water and rice pilaf to a pan. Cover with a lid and reheat until heated through (about 5 to 10 minutes). Stir occasionally to prevent sticking and burning.',
        },
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Add a splash of water. Make sure the rice pilaf is in an even layer in baking dish. Cover with foil and bake at 300ºF until heated through (about 20 minutes).',
        }
    ],
    mealPrep: true,
};