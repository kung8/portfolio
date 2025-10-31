const chicken1 = '../assets/Products/cashew-chicken-1.jpeg';
const chicken2 = '../assets/Products/cashew-chicken-2.jpeg';
const chicken3 = '../assets/Products/cashew-chicken-3.jpeg';
const chicken4 = '../assets/Products/cashew-chicken-4.jpeg';
const chicken5 = '../assets/Products/cashew-chicken-5.jpeg';
const chicken6 = '../assets/Products/cashew-chicken-6.jpeg';
const chicken7 = '../assets/Products/cashew-chicken-7.jpeg';
const chicken8 = '../assets/Products/cashew-chicken-8.jpeg';
const chicken9 = '../assets/Products/cashew-chicken-9.jpeg';
const chicken10 = '../assets/Products/cashew-chicken-10.jpeg';
const chicken11 = '../assets/Products/cashew-chicken-11.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ASIAN_CHILI_GARLIC_SAUCE,
    BLACK_PEPPER,
    BONELESS_AND_SKINLESS_CHICKEN_BREAST,
    BROCCOLI,
    CASHEWS,
    CORNSTARCH,
    EDAMAME,
    GREEN_ONION,
    GROUND_GINGER,
    HONEY,
    LARGE_BOWL,
    LIGHT_SOY_SAUCE,
    MEDIUM_BOWL,
    OLIVE_OIL,
    RED_BELL_PEPPER,
    RICE_WINE_VINEGAR,
    SALT,
    SESAME_OIL,
    SESAME_SEEDS,
    STOVE,
    WOK,
    GARLIC,
} = require('./ingredients');

const OILS_SECTION = 'Oils';

module.exports = {
    cardName: 'Cashew Chicken',
    name: 'Chinese Cashew Chicken',
    img: chicken11,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN, PROTEIN.EDAMAME],
    type: [TYPES.RICE],
    allergies: [ALLERGIES.SESAME, ALLERGIES.SOY, ALLERGIES.TREE_NUT],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Cashew Chicken',
            link: "https://www.averiecooks.com/better-than-takeout-cashew-chicken",
            authors: ['Averie Sunshine'],
            finder: 'Kevin Ung',
        }
    ],
    separated: true,
    ingredients: [
        { ...LIGHT_SOY_SAUCE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HONEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ASIAN_CHILI_GARLIC_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...GROUND_GINGER, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '1 inch cubes', section: SECTIONS.CHICKEN },
        { ...CORNSTARCH, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...BLACK_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...SESAME_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: OILS_SECTION },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: OILS_SECTION },

        { ...BROCCOLI, amount: 1, unit: '', additionalDetails: 'cut into florets', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'diced', section: SECTIONS.VEGGIES },
        { ...EDAMAME, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'frozen', section: SECTIONS.VEGGIES },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.VEGGIES },

        { ...CASHEWS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },

        { ...GREEN_ONION, amount: 4, unit: '', additionalDetails: 'chopped diagonally', section: SECTIONS.TOPPINGS },
        { ...SESAME_SEEDS, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
        MEDIUM_BOWL,
        { ...LARGE_BOWL, amount: 2 },
    ],
    directions: [
        { step: `In a medium bowl, combine the "${SECTIONS.SAUCE}" section ingredients. Mix well.`, section: SECTIONS.SAUCE, img: chicken1 },

        { step: `In a large bowl, combine the "${SECTIONS.CHICKEN}" section ingredients. Mix well until chicken is well coated.`, section: SECTIONS.CHICKEN, img: chicken2 },
        { step: 'Over medium-high heat, add the combination of oils in a wok.', section: SECTIONS.CHICKEN, img: chicken3 },
        { step: 'Add the chicken and cook until the chicken is about 80% cooked through (about 3 to 4 minutes on each side).', section: SECTIONS.CHICKEN, img: chicken4 },
        { step: 'Remove chicken from the wok and transfer to a clean large bowl.', section: SECTIONS.CHICKEN, img: chicken5 },

        { step: `In the wok, add the "${SECTIONS.VEGGIES}" section ingredients. Cook until the vegetables are tender (about 3 to 4 minutes).`, section: SECTIONS.MAIN, img: chicken6 },
        { step: 'Add the cashews. Stir until mixed.', section: SECTIONS.MAIN, img: chicken7 },
        { step: 'Re-add the chicken. Stir until mixed and chicken is cooked through.', section: SECTIONS.MAIN, img: chicken8 },
        { step: 'Add the sauce and mix until well coated. Cook for a minute or two.', section: SECTIONS.MAIN, img: chicken9 },
        { step: 'Turn off the stove and remove from heat.', section: SECTIONS.MAIN, img: chicken10 },

        { step: 'Top this dish with green onions and sesame seeds and serve wth steamed rice.', section: SECTIONS.SERVE },
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
            instruction: 'Add a little water. Cover with a microwave-safe lid. Microwave in 30-second intervals until heated through.',
        },
        {
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Add a little water to a wok. Bring to a simmer. Add the cashew chicken and stir-fry until heated through (about 3 minutes).',
        },
    ],
    mealPrep: true,
};