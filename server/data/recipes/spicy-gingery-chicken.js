const chicken1 = '../assets/Products/spicy-gingery-chicken-1.jpeg';
const chicken2 = '../assets/Products/spicy-gingery-chicken-2.jpeg';
const chicken3 = '../assets/Products/spicy-gingery-chicken-3.jpeg';

const {
    CATEGORIES,
    GENRES,
    INGREDIENT_UNITS,
    METHODS,
    PROTEIN,
    REHEAT_METHODS,
    SECTIONS,
    STORAGE_CONTAINER,
    STORAGE_DURATION_UNIT,
    STORAGE_LOCATION,
    TIME_UNITS,
    TYPES,
    YIELD_UNITS
} = require('./constants');
const { ALUMINUM_FOIL, BAKING_SHEET, BLACK_PEPPER, CHICKEN_THIGH, CORNSTARCH, EGG, GARLIC, GINGER, GREEN_BELL_PEPPER, GREEN_ONION, GROUND_GINGER, HONEY, JASMINE_RICE, LIGHT_SOY_SAUCE, MIXING_BOWL, OLIVE_OIL, OVEN, PANKO_BREADCRUMBS, POMEGRANATE_JUICE, RED_BELL_PEPPER, RED_PEPPER_FLAKES, RICE_WINE_VINEGAR, SALT, SHALLOT, TONGS, UNSALTED_PEANUT, WOK } = require('./ingredients');

const BELL_PEPPER_SECTIONS = 'Bell Peppers';
const SHALLOT_AND_PEANUTS = 'Shallots and Peanuts';
const PREP_PEPPERS = 'Prep Peppers';

module.exports = {
    cardName: 'Spicy Gingery Chicken',
    name: 'Spicy Gingery Chicken',
    img: chicken3,
    available: true,
    recommended: true,
    createdAt: '2026-06-07 02:58:05',
    modifiedAt: '2026-06-14 19:54:00',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            bookTitle: 'Half Baked Harvest Super Simple',
            label: 'Spicy Gingery Chicken',
            link: null,
            authors: ['Tieghan Gerard'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...CHICKEN_THIGH, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1 inch pieces', section: SECTIONS.CHICKEN },
        { ...CORNSTARCH, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...GROUND_GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...EGG, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...PANKO_BREADCRUMBS, amount: 1.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'thinly sliced', section: BELL_PEPPER_SECTIONS },
        { ...GREEN_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'thinly sliced', section: BELL_PEPPER_SECTIONS },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BELL_PEPPER_SECTIONS },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: BELL_PEPPER_SECTIONS },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: BELL_PEPPER_SECTIONS },

        { ...SHALLOT, amount: 3, unit: '', additionalDetails: 'thinly sliced', section: SHALLOT_AND_PEANUTS },
        { ...UNSALTED_PEANUT, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SHALLOT_AND_PEANUTS },

        { ...LIGHT_SOY_SAUCE, amount: 2 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...POMEGRANATE_JUICE, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HONEY, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.INCH, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.SAUCE },
        { ...RED_PEPPER_FLAKES, amount: 3, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...JASMINE_RICE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.SERVE },
        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'sliced', section: SECTIONS.SERVE },
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        BAKING_SHEET,
        ALUMINUM_FOIL,
        MIXING_BOWL,
        TONGS,
        WOK,
    ],
    directions: [
        { step: `Preheat the oven to 475ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Line a baking sheet with aluminum foil.`, section: SECTIONS.PREP_PAN },

        { step: `In a mixing bowl, combine the "${SECTIONS.CHICKEN}" section ingredients. Toss until coated.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Place chicken on one side of the baking sheet.`, section: SECTIONS.PREP_CHICKEN },

        { step: `In the mixing bowl, combine the "${BELL_PEPPER_SECTIONS}" section ingredients.`, section: PREP_PEPPERS },
        { step: `Place the bell peppers on the other side of the baking sheet.`, section: PREP_PEPPERS, img: chicken1 },

        { step: `Bake for 12 minutes.`, section: SECTIONS.BAKE },
        { step: `Flip chicken and toss peppers.`, section: SECTIONS.BAKE },
        { step: `Add "${SHALLOT_AND_PEANUTS}" section ingredients.`, section: SECTIONS.BAKE },
        { step: `Broil until chicken is cooked through (about 5 minutes). Be careful not to burn the peanuts and shallots.`, section: SECTIONS.BAKE },
        { step: `Remove baking sheet from the oven.`, section: SECTIONS.BAKE },

        { step: `In a wok, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.COOK_SAUCE },
        { step: `Over medium-high heat, bring sauce to a boil.`, section: SECTIONS.COOK_SAUCE },
        { step: `Cook until the sauce thickens and reduces (about 5 to 8 minutes).`, section: SECTIONS.COOK_SAUCE },
        { step: `Remove wok from stovetop.`, section: SECTIONS.COOK_SAUCE },

        { step: `Add the chicken and peppers into the sauce. Toss to coat.`, section: SECTIONS.ASSEMBLE, img: chicken2 },

        { step: `Enjoy this Chinese dish with rice topped with green onions.`, section: SECTIONS.SERVE },
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
            instruction: 'Over medium heat, add a drizzle of oil to a wok. Add chicken and peppers. Stir fry until warmed through, about 5 minutes.',
        },
    ],
    mealPrep: true,
};