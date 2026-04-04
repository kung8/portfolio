// const example1 = '../assets/Products/example-1.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALL_PURPOSE_FLOUR, BLACK_PEPPER, CAPER, CHICKEN_BREAST, CHICKEN_BROTH, FRYING_PAN, GARLIC_POWDER, HEAVY_CREAM, LEMON, LEMON_JUICE, OLIVE_OIL, PARMESAN_CHEESE, PARSLEY, SALT, STOVE, UNSALTED_BUTTER } = require('./ingredients');

module.exports = {
    wip: true,
    cardName: 'Chicken Piccata',
    name: 'Chicken Piccata',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.PAN_FRY, METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.MAIN_COURSE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chicken Piccata', link: 'https://www.saltandlavender.com/chicken-piccata/', authors: ['Unknown'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...CHICKEN_BREAST, amount: 2, unit: '', additionalDetails: 'halved horizontally', section: SECTIONS.CHICKEN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...GARLIC_POWDER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },

        { ...ALL_PURPOSE_FLOUR, amount: '', unit: '', additionalDetails: 'for dredging', section: SECTIONS.DREDGING_STATION },

        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.OIL },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.OIL },

        { ...CHICKEN_BROTH, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.DEGLAZE },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DEGLAZE },
        { ...LEMON, amount: 1, unit: '', additionalDetails: 'zested', section: SECTIONS.DEGLAZE },
        { ...UNSALTED_BUTTER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DEGLAZE },
        { ...CAPER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DEGLAZE },

        { ...HEAVY_CREAM, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...PARSLEY, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PARMESAN_CHEESE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        FRYING_PAN,
    ],
    directions: [
        { step: `Season the chicken with the "${SECTIONS.SEASONINGS}" section ingredients.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Dredge the chicken in flour.`, section: SECTIONS.PREP_CHICKEN },

        { step: `Over medium-high heat, add the "${SECTIONS.OIL}" section ingredients to a pan.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Add the chicken. Cook until each side is golden (about 4 to 5 minutes per side).`, section: SECTIONS.COOK_CHICKEN },
        { step: `Remove pan from heat.`, section: SECTIONS.COOK_CHICKEN },
        { step: `Transfer chicken to a plate.`, section: SECTIONS.COOK_CHICKEN },

        { step: `Add the "${SECTIONS.DEGLAZE}" section ingredients to the pan. Deglaze the pan.`, section: SECTIONS.COOK_SAUCE },
        { step: `Return pan back to heat, slowly add the cream.`, section: SECTIONS.COOK_SAUCE },
        { step: `Once it bubbles, add chicken to the pan.`, section: SECTIONS.COOK_SAUCE },
        { step: `Cook until chicken is cooked through and sauce reduces to desired level (about 5 minutes). Turn down heat as needed.`, section: SECTIONS.COOK_SAUCE },

        { step: `Serve with parsley and parmesan.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `Optionally, replace cream with chicken broth (1:1). Cream does help cut down the acidity and brightness from the lemon and does make it more silky. But removing it returns it to more of the traditional Italian dish.` },
        { note: `Add more broth if the sauce is too thick.` },
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
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over low heat, reheat until warmed through.',
        },
    ],
    mealPrep: true,
};