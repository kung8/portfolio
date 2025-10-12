const ramen1 = '../assets/Products/ground-beef-ramen-1.jpeg';
const ramen2 = '../assets/Products/ground-beef-ramen-2.jpeg';
const ramen3 = '../assets/Products/ground-beef-ramen-3.jpeg';
const ramen4 = '../assets/Products/ground-beef-ramen-4.jpeg';
const ramen5 = '../assets/Products/ground-beef-ramen-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { FROZEN_CARROTS, FROZEN_PEAS, GARLIC, GREEN_ONION, GROUND_BEEF, HOISIN_SAUCE, INSTANT_RAMEN, LARGE_PAN, LARGE_POT, LIGHT_SOY_SAUCE, RED_PEPPER_FLAKES, STOVE, VEGETABLE_OIL } = require('./ingredients');

const BEEF_AND_GARLIC_SECTION = 'Beef and Garlic';
const FROZEN_SECTION = 'Frozen';
const SAUTE_ADDITIONS = 'Sauté Additions';

module.exports = {
    cardName: 'Ground Beef Ramen',
    name: 'Ground Beef Ramen',
    img: ramen5,
    recipeAuthors: ['Erica'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE],
    method: [METHODS.BOIL, METHODS.PAN_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.NOODLE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Ground Beef Ramen', link: 'https://recipesfiber.com/ground-beef-ramen-skillet/' }
    ],
    separated: true,
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF_AND_GARLIC_SECTION },
        { ...GROUND_BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: BEEF_AND_GARLIC_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: BEEF_AND_GARLIC_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HOISIN_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FROZEN_PEAS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FROZEN_SECTION },
        { ...FROZEN_CARROTS, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: FROZEN_SECTION },

        { ...INSTANT_RAMEN, amount: 3, unit: INGREDIENT_UNITS.PACKET, additionalDetails: '', section: SECTIONS.NOODLES },

        { ...RED_PEPPER_FLAKES, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONION, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_PAN,
        LARGE_POT,
    ],
    directions: [
        { step: 'Over medium heat, heat oil in a large pan.', section: SAUTE_ADDITIONS },
        { step: 'Add ground beef. Brown and break apart (about 5 to 7 minutes).', section: SAUTE_ADDITIONS },
        { step: 'Drain.', section: SAUTE_ADDITIONS },
        { step: 'Add garlic. Cook until fragrant (about 30 seconds).', section: SAUTE_ADDITIONS, img: ramen1 },
        { step: `Add "${SECTIONS.SAUCE}" section ingredients. Mix until meat is coated.`, section: SAUTE_ADDITIONS, img: ramen2 },
        { step: `Add "${FROZEN_SECTION}" section ingredients. Cook until heated through (about 2 to 3 minutes).`, section: SAUTE_ADDITIONS, img: ramen3 },
        { step: 'Remove from heat. Set aside until noodles are cooked.', section: SAUTE_ADDITIONS },

        { step: 'Oven high heat, bring a pot of water to a boil.', section: SECTIONS.COOK_NOODLES },
        { step: 'Add ramen noodles. Cook until just tender (about 3 minutes).', section: SECTIONS.COOK_NOODLES },
        { step: 'Drain. Set aside.', section: SECTIONS.COOK_NOODLES },

        { step: 'Add noodles to the large pan. Mix well.', section: SECTIONS.ASSEMBLE, img: ramen4 },
        { step: 'Optionally add red pepper flakes. Mix.', section: SECTIONS.ASSEMBLE },
        { step: 'Remove from heat. Add green onions. Mix.', section: SECTIONS.ASSEMBLE },

        { step: 'Enjoy this easy college student ramen upgrade.', section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.PAN_FRY,
            instruction: 'Add a little water. Over medium-low heat, reheat in a pot until heated through (about 3 minutes). Stir frequently.',
        },
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Add a little water and cover. Microwave for 1 to 2 minutes (stirring halfway). Then microwave in 30 second intervals until heated through.',
        },
    ],
    mealPrep: true,
};