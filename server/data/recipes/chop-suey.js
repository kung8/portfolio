const suey1 = '../assets/Products/chop-suey-1.jpeg';
const suey2 = '../assets/Products/chop-suey-2.jpeg';
const suey3 = '../assets/Products/chop-suey-3.jpeg';
const suey4 = '../assets/Products/chop-suey-4.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_BREAST, BAKING_SODA, VEGETABLE_OIL, GARLIC, WHITE_ONION, CARROT, BABY_BOK_CHOY, MUSHROOM, BEAN_SPROUT, CORNSTARCH, LIGHT_SOY_SAUCE, OYSTER_SAUCE, SHAOXING_WINE, SESAME_OIL, WHITE_PEPPER, WATER } = require('./ingredients');

module.exports = {
    cardName: 'Chop Suey',
    name: 'Chop Suey',
    img: suey4,
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
        { ...BONELESS_AND_SKINLESS_CHICKEN_BREAST, amount: 4, unit: '', additionalDetails: 'sliced', section: SECTIONS.MARINADE },
        { ...BAKING_SODA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: 5 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SHAOXING_WINE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SESAME_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.SAUCE },

        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.STIR_FRY },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'minced', section: SECTIONS.STIR_FRY },
        { ...WHITE_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'sliced', section: SECTIONS.STIR_FRY },
        { ...CARROT, amount: 3, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', section: SECTIONS.STIR_FRY },
        { ...BABY_BOK_CHOY, amount: 3, unit: '', additionalDetails: 'chopped', section: SECTIONS.STIR_FRY },
        { ...MUSHROOM, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'sliced', section: SECTIONS.STIR_FRY },
        { ...BEAN_SPROUT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.STIR_FRY },

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
        { step: 'In a mixing bowl, combine the chicken and baking soda. Marinate for 20 to 30 minutes.', section: SECTIONS.MARINATE_CHICKEN },
        { step: `In a medium bowl, combine all the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.COOK_SAUCE },
        { step: 'Over high heat, heat oil in a wok.', section: SECTIONS.STIR_FRY },
        { step: 'Add garlic and onion. Cook for a minute.', section: SECTIONS.STIR_FRY },
        { step: 'Add chicken. Cook until chicken is no longer pink (for a few minutes).', section: SECTIONS.STIR_FRY, img: [suey1, suey2] },
        { step: 'Add carrots, boy choy, and mushroom. Stir fry for a minute.', section: SECTIONS.STIR_FRY, img: suey3 },
        { step: 'Add bean sprouts and sauce. Cook until the sauce thickens and the vegetables should be crisp.', section: SECTIONS.STIR_FRY },
        { step: 'Serve with rice.', section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        // {
        //     method: REHEAT_METHODS.BAKE,
        //     instruction: '',
        // },
    ],
    mealPrep: true,
};