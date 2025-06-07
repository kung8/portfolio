const plated = '../assets/Products/peruvian-chicken-plated.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { GARLIC, LIGHT_SOY_SAUCE, LIME_JUICE, OLIVE_OIL, CUMIN, PAPRIKA, OREGANO, BLACK_PEPPER, JALAPENO_PEPPER, CILANTRO, GREEN_ONION, MAYONNAISE, SALT, GREEK_YOGURT, CHICKEN_DRUMETTES } = require('./ingredients');

const CREAMY_GREEN_SAUCE = 'Creamy Green Sauce';

module.exports = {
    wip: true,
    cardName: 'Peruvian Chicken',
    name: 'Peruvian Chicken',
    img: plated,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.PERUVIAN, GENRES.LATIN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 35, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 8, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Peruvian Chicken', link: 'https://www.platingsandpairings.com/peruvian-grilled-chicken-creamy-green-sauce/' }
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_DRUMETTES, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 5, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...LIME_JUICE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...CUMIN, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...PAPRIKA, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...OREGANO, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...JALAPENO_PEPPER, amount: 3, unit: '', additionalDetails: 'seeds and ribs removed, chopped', section: CREAMY_GREEN_SAUCE },
        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAMY_GREEN_SAUCE },
        { ...GREEN_ONION, amount: 2, unit: '', additionalDetails: 'chopped', section: CREAMY_GREEN_SAUCE },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: CREAMY_GREEN_SAUCE },
        { ...MAYONNAISE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAMY_GREEN_SAUCE },
        { ...GREEK_YOGURT, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: CREAMY_GREEN_SAUCE },
        { ...LIME_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CREAMY_GREEN_SAUCE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CREAMY_GREEN_SAUCE },
        { ...BLACK_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CREAMY_GREEN_SAUCE },
        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CREAMY_GREEN_SAUCE },
    ],
    appliances: [
        { name: 'blender' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'baking pan' },
        { name: 'aluminum foil' },
    ],
    directions: [
        { step: 'Combine marinade ingredients in a blender.', section: SECTIONS.MARINADE },
        { step: 'In a mixing bowl or ziploc bag, marinade the chicken for at least 8 hours (up to 24 hours).', section: SECTIONS.MARINADE },
        { step: 'In a blender, add all the sauce ingredients except the oil.', section: CREAMY_GREEN_SAUCE },
        { step: 'Blend and slowly add the olive oil.', section: CREAMY_GREEN_SAUCE },
        { step: 'Transfer to a container and refrigerate.', section: CREAMY_GREEN_SAUCE },
        { step: 'Preheat the oven to 500ºF.', section: SECTIONS.MAIN },
        { step: 'Place the chicken in a baking pan.', section: SECTIONS.MAIN },
        { step: 'Add 1 cup of water to the pan.', section: SECTIONS.MAIN },
        { step: 'Bake for 30 minutes.', section: SECTIONS.MAIN },
        { step: 'Tent the pan with aluminum foil and cook until the chicken is cooked through (about 15 minutes).', section: SECTIONS.MAIN },
        { step: 'Serve the chicken with the creamy green sauce.', section: SECTIONS.SERVE },
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