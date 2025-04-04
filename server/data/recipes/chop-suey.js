// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, BAKING_SODA, VEGETABLE_OIL, GARLIC, WHITE_ONION, CARROT, BABY_BOK_CHOY, MUSHROOM, BEAN_SPROUT, CORNSTARCH, LIGHT_SOY_SAUCE, OYSTER_SAUCE, SHAOXING_WINE, SESAME_OIL, WHITE_PEPPER, WATER } = require('./ingredients');

const MARINADE_SECTION = 'Marinade';
const SAUCE_SECTION = 'Sauce';
const STIR_FRY_SECTION = 'Stir Fry';

const MARINATE_CHICKEN = 'Marinate Chicken';
const MAKE_SAUCE = 'Make Sauce';
const STIR_FRY = 'Stir Fry';

module.exports = {
    wip: true,
    cardName: 'Chop Suey',
    name: 'Chop Suey',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.SIDE_DISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 7, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chop Suey', link: 'https://www.howtocook.recipes/homemade-chop-suey-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 4, unit: '', additionalDetails: 'sliced', section: MARINADE_SECTION },
        { ...BAKING_SODA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MARINADE_SECTION },

        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...OYSTER_SAUCE, amount: 5 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...SHAOXING_WINE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...WHITE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SAUCE_SECTION },

        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: STIR_FRY_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'minced', section: STIR_FRY_SECTION },
        { ...WHITE_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'sliced', section: STIR_FRY_SECTION },
        { ...CARROT, amount: 3, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', section: STIR_FRY_SECTION },
        { ...BABY_BOK_CHOY, amount: 3, unit: '', additionalDetails: '', section: STIR_FRY_SECTION },
        { ...MUSHROOM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'sliced', section: STIR_FRY_SECTION },
        { ...BEAN_SPROUT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: STIR_FRY_SECTION },

    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'medium bowl' },
        { name: 'wok' },
    ],
    directions: [
        { step: 'In a mixing bowl, combine the chicken and baking soda. Marinate for 20 to 30 minutes.', type: MARINATE_CHICKEN },
        { step: 'In a medium bowl, combine all the "Sauce" section ingredients.', type: MAKE_SAUCE },
        { step: 'Over high heat, heat oil in a wok.', type: STIR_FRY },
        { step: 'Add garlic and onion. Cook for a minute.', type: STIR_FRY },
        { step: 'Add chicken. Cook until chicken is no longer pink (for a few minutes).', type: STIR_FRY },
        { step: 'Add carrots, boy choy, and mushroom. Stir fry for a minute.', type: STIR_FRY },
        { step: 'Add bean sprouts and sauce. Cook until the sauce thickens and the vegetables should be crisp.', type: STIR_FRY },
        { step: 'Serve with rice.', type: SECTIONS.SERVE },
    ]
};