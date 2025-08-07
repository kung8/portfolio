// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS } = require('./constants');
const { PEANUT_BUTTER, LIGHT_SOY_SAUCE, SESAME_OIL, HONEY, WATER, VEGETABLE_OIL, GROUND_BEEF, GREEN_ONION, CARROT, NAPA_CABBAGE, BEAN_SPROUT, SHIITAKE_MUSHROOM } = require('./ingredients');

const FIRST_VEGETABLES_SECTION = 'First Vegetables';
const SECOND_VEGETABLES_SECTION = 'Second Vegetables';

module.exports = {
    wip: true,
    cardName: 'Peanut Noodles Stir-Fry',
    name: 'Peanut Noodles Stir-Fry',
    img: '',
    recipeAuthor: 'Kyrie Patterson',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.THAI],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.PEANUT],
    type: [TYPES.NOODLE, TYPES.STIR_FRY],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Peanut Noodles Stir-Fry', link: 'https://farmerxfoodie.com/easy-peanut-noodles-stir-fry/' }
    ],
    separated: true,
    ingredients: [
        { ...GENRES, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLES },

        { ...PEANUT_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'or as needed', section: SECTIONS.SAUCE },

        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BEEF },
        { ...GROUND_BEEF, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.BEEF },
        { ...CARROT, amount: 1, unit: '', additionalDetails: 'julienned', section: FIRST_VEGETABLES_SECTION },
        { ...NAPA_CABBAGE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'chopped', section: FIRST_VEGETABLES_SECTION },
        { ...SHIITAKE_MUSHROOM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'thinly sliced', section: FIRST_VEGETABLES_SECTION },

        { ...GREEN_ONION, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: 'sliced', section: SECOND_VEGETABLES_SECTION },
        { ...BEAN_SPROUT, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECOND_VEGETABLES_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'small bowl' },
        { name: 'wok' },
    ],
    directions: [
        { step: 'Cook the noodles per the package instructions.', section: SECTIONS.COOK_NOODLES },
        { step: 'Drain. Set aside.', section: SECTIONS.COOK_NOODLES },

        { step: `In a small bowl, combine the "${SECTIONS.SAUCE}" section ingredients. Whisk until it is smooth, pourable and thick.`, section: SECTIONS.PREP_SAUCE },

        { step: 'Over medium-high heat, heat oil in a wok.', section: SECTIONS.STIR_FRY },
        { step: 'Add beef. Cook until browned and cooked through.', section: SECTIONS.STIR_FRY },
        { step: `Add "${FIRST_VEGETABLES_SECTION}" section ingredients. Cook until vegetables are tender and crisp (about 5 minutes).`, section: SECTIONS.STIR_FRY },
        { step: `Add "${SECOND_VEGETABLES_SECTION}" section ingredients. Cook (about 2 minutes).`, section: SECTIONS.STIR_FRY },
        { step: 'Add cooked noodles and sauce. Toss until everything is covered.', section: SECTIONS.STIR_FRY },

        { step: 'Enjoy this Asian dish with your favorite toppings.', section: SECTIONS.SERVE },
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
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Heat in a wok over medium heat until warmed through.',
        },
    ],
    mealPrep: true,
};