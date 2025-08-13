const eighty = '../assets/Products/cashew-chicken-80.jpeg';
const oneHundred = '../assets/Products/cashew-chicken-100.jpeg';
const raw = '../assets/Products/cashew-chicken-coated-raw-chicken.jpeg';
const cooked = '../assets/Products/cashew-chicken-cooked.jpeg';
const cooking = '../assets/Products/cashew-chicken-cooking-chicken.jpeg';
const oils = '../assets/Products/cashew-chicken-oils.jpeg';
const plated = '../assets/Products/cashew-chicken-plated.jpeg';
const sauce = '../assets/Products/cashew-chicken-sauce.jpeg';
const cashews = '../assets/Products/cashew-chicken-veggies-with-cashew.jpeg';
const veggies = '../assets/Products/cashew-chicken-veggies.jpeg';
const withSauce = '../assets/Products/cashew-chicken-with-sauce.jpeg';
const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_LOCATION, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, REHEAT_METHODS } = require('./constants');
const {
    BONELESS_AND_SKINLESS_CHICKEN_BREAST,
    BROCCOLI,
    CASHEWS,
    CORNSTARCH,
    EDAMAME,
    GROUND_GINGER,
    GREEN_ONION,
    HONEY,
    OLIVE_OIL,
    RED_BELL_PEPPER,
    RICE_WINE_VINEGAR,
    SALT,
    SESAME_OIL,
    SESAME_SEEDS,
    ASIAN_CHILI_GARLIC_SAUCE,
    LIGHT_SOY_SAUCE,
    BLACK_PEPPER,
} = require('./ingredients');

module.exports = {
    cardName: 'Cashew Chicken',
    name: 'Chinese Cashew Chicken',
    img: plated,
    recipeAuthors: ['Averie Sunshine'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN, PROTEIN.EDAMAME],
    type: [TYPES.RICE],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Cashew Chicken', link: "https://www.averiecooks.com/better-than-takeout-cashew-chicken" }
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
        { ...SESAME_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BROCCOLI, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...EDAMAME, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...CASHEWS, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...GREEN_ONION, amount: 4, unit: '', additionalDetails: 'chopped diagonally', section: SECTIONS.TOPPINGS },
        { ...SESAME_SEEDS, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
        { name: 'medium bowl' },
        { name: '2 large bowls' },
    ],
    directions: [
        { step: 'In a medium bowl, combine the sauce ingredients. Mix well.', section: SECTIONS.SAUCE, img: sauce },
        { step: 'In a large bowl, combine diced chicken, salt, pepper and cornstarch. Mix well until chicken is well coated.', section: SECTIONS.CHICKEN, img: raw },
        { step: 'Over medium-high heat, add the combination of oils in a wok.', section: SECTIONS.CHICKEN, img: oils },
        { step: 'Add the chicken and cook until the chicken is about 80% cooked through (about 3 to 4 minutes on each side).', section: SECTIONS.CHICKEN, img: cooking },
        { step: 'Remove chicken from the wok and transfer to a clean large bowl.', section: SECTIONS.CHICKEN, img: eighty },
        { step: 'Add the broccoli, bell peppers, frozen edamame, and garlic to the wok. Cook until the vegetables are tender (about 3 to 4 minutes).', section: SECTIONS.MAIN, img: veggies },
        { step: 'Add the cashews. Stir until mixed.', section: SECTIONS.MAIN, img: cashews },
        { step: 'Re-add the chicken. Stir until mixed and chicken is cooked through.', section: SECTIONS.MAIN, img: oneHundred },
        { step: 'Add the sauce and mix until well coated. Cook for a minute or two.', section: SECTIONS.MAIN, img: withSauce },
        { step: 'Turn off the stove and remove from heat.', section: SECTIONS.MAIN, img: cooked },
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