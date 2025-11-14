// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { WHITE_SUGAR, WATER, UNSALTED_BUTTER, VANILLA_EXTRACT, CINNAMON, APPLE, REFRIGERATED_BISCUIT_DOUGH, OVEN, BAKING_PAN, SMALL_BOWL } = require('./ingredients');

const APPLE_DOUGH = 'Apple Dough';

module.exports = {
    wip: true,
    cardName: 'Apple Dumplings',
    name: 'Apple Dumplings',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DESSERT],
    genre: [GENRES.AMERICAN],
    method: [METHODS.BAKE],
    type: [TYPES.DESSERT],
    allergies: [],
    diet: [],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Apple Dumplings',
            link: 'https://www.allrecipes.com/recipe/18980/apple-dumplings-i/',
            authors: ['Allrecipes Member'],
            finder: 'Kevin Ung',
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BUTTER },

        { ...REFRIGERATED_BISCUIT_DOUGH, amount: 16, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: APPLE_DOUGH },
        { ...APPLE, amount: 4, unit: '', additionalDetails: 'peeled, cored and halved', section: APPLE_DOUGH },

        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...UNSALTED_BUTTER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'melted', section: SECTIONS.SAUCE },
        { ...VANILLA_EXTRACT, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...CINNAMON, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_PAN,
        SMALL_BOWL,
    ],
    directions: [
        { step: `Preheat oven to 350ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Butter the baking pan.`, section: SECTIONS.ASSEMBLE },
        { step: `Separate biscuit dough and flatten.`, section: SECTIONS.ASSEMBLE },
        { step: `Wrap dough around each apple halves.`, section: SECTIONS.ASSEMBLE },
        { step: `Place in pan seamside down.`, section: SECTIONS.ASSEMBLE },
        { step: `In a small bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.ASSEMBLE },
        { step: `Pour sauce over dumplings.`, section: SECTIONS.ASSEMBLE },
        { step: `Sprinkle cinnamon on top.`, section: SECTIONS.ASSEMBLE },
        { step: `Bake until golden brown (about 35 to 40 minutes).`, section: SECTIONS.BAKE },
        { step: `Enjoy these hot!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 1, unit: STORAGE_DURATION_UNIT.WEEK },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.ITS_OWN_CONTAINER,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Wrap in foil and bake at 350ºF until heated through and crust is crispy (about 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};