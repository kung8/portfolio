const stirFry1 = '../assets/Products/pepper-steak-stir-fry-1.jpeg';
const stirFry2 = '../assets/Products/pepper-steak-stir-fry-2.jpeg';
const stirFry3 = '../assets/Products/pepper-steak-stir-fry-3.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, TIME_UNITS, TYPES, YIELD_UNITS } = require("./constants");
const {
    BEEF,
    BLACK_PEPPER,
    CORNSTARCH,
    GARLIC,
    GINGER,
    GREEN_BELL_PEPPER,
    LIGHT_SOY_SAUCE,
    RED_BELL_PEPPER,
    SALT,
    STOVE,
    VEGETABLE_OIL,
    WATER,
    WHITE_SUGAR,
    WOK,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Pepper Steak Stir Fry',
    name: 'Pepper Steak Stir Fry',
    img: stirFry2,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.RICE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Pepper Steak Stir Fry',
            link: 'https://www.dinneratthezoo.com/pepper-steak-stir-fry/',
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'divided', section: SECTIONS.MAIN },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', section: SECTIONS.MAIN },

        { ...BEEF, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },

        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced', section: SECTIONS.MAIN },

        { ...LIGHT_SOY_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CORNSTARCH, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.SAUCE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
    ],
    directions: [
        { step: `Over medium-high heat, heat 1 Tbsp of vegetable oil in a wok.`, section: SECTIONS.MAIN },
        { step: `Add peppers and onion. Cook until tender (about 3 to 4 minutes).`, section: SECTIONS.MAIN },
        { step: `Remove from wok and set aside.`, section: SECTIONS.MAIN },
        { step: `Increase the heat to high. Add 1 Tbsp of vegetable oil to the wok.`, section: SECTIONS.MAIN },
        { step: `Add the beef to the wok and salt and pepper.`, section: SECTIONS.MAIN },
        { step: `Cook until lightly browned (about 5 to 6 minutes).`, section: SECTIONS.MAIN },
        { step: `Add garlic and ginger. Cook for 30 seconds.`, section: SECTIONS.MAIN, img: stirFry1 },
        { step: `Re-add the veggies and mix.`, section: SECTIONS.MAIN },
        { step: `In a small bowl, mix together the soy sauce, sugar, cornstarch, and water.`, section: SECTIONS.MAIN },
        { step: `Pour the sauce mixture into the wok and bring to a simmer. Cook until sauce thickens (about 2 to 3 minutes).`, section: SECTIONS.MAIN },
        { step: `Serve with rice and enjoy this simple home cooked meal.`, section: SECTIONS.MAIN, img: stirFry3 },
    ],
    store: [
        // {
        //     duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
        //     location: STORAGE_LOCATION.FRIDGE,
        //     container: STORAGE_CONTAINER.AIRTIGHT,
        // },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: false,
};