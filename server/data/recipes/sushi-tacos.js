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
const { AIR_FRYER, AVOCADO, CUCUMBER, LIGHT_SOY_SAUCE, PLATE, RICE_WINE_VINEGAR, SALMON_FISH, SEAWEED, SUSHI_RICE, WASABI } = require('./ingredients');

const TACO_SHELL = 'Taco Shell';
const MAKE_TACO_SHELL = 'Make Taco Shell';

module.exports = {
    wip: true,
    cardName: 'Sushi Tacos',
    name: 'Sushi Tacos',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.JAPANESE],
    method: [METHODS.AIR_FRY],
    protein: [PROTEIN.ALTERNATIVE, PROTEIN.SHRIMP],
    type: [TYPES.FINGER_FOOD, TYPES.MAIN_COURSE, TYPES.RICE, TYPES.TACO],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Sushi Tacos', link: 'https://tuduu.it/en/recipes/mescolabene/crispy-air-fryer-sushi-tacos', authors: ['@mescolabene'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...SEAWEED, amount: 4, unit: INGREDIENT_UNITS.SHEET, additionalDetails: '', section: TACO_SHELL },
        { ...SUSHI_RICE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooked', section: TACO_SHELL },
        { ...RICE_WINE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: TACO_SHELL },
        { ...LIGHT_SOY_SAUCE, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...AVOCADO, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...CUCUMBER, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...SALMON_FISH, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
        { ...WASABI, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        AIR_FRYER
    ],
    supplies: [
        PLATE
    ],
    directions: [
        { step: `Cook the sushi rice according to package instructions.`, section: SECTIONS.COOK_RICE },
        { step: `Cut the seaweed into round shapes.`, section: MAKE_TACO_SHELL },
        { step: `Press the rice onto the seaweed rounds.`, section: MAKE_TACO_SHELL },
        { step: `Add rice vinegar.`, section: MAKE_TACO_SHELL },
        { step: `Let rice cool slightly.`, section: MAKE_TACO_SHELL },
        { step: `Shape the sheets into taco shells and place them in the air fryer really close.`, section: MAKE_TACO_SHELL },
        { step: `Cook at 400ºF until crispy (about 5 minutes).`, section: MAKE_TACO_SHELL },
        { step: `Fill the taco shell with your favorite sushi toppings.`, section: SECTIONS.ASSEMBLE },
        { step: `Serve immediately and enjoy!`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
            instructions: 'Store the taco shells separately from the fillings to maintain crispiness.',
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.AIR_FRY,
            instruction: 'Air fry at 400ºF for 2-3 minutes to re-crisp the shells.',
        },
    ],
    mealPrep: true,
};