const chicken1 = '../assets/Products/peruvian-chicken-1.jpeg';
const chicken2 = '../assets/Products/peruvian-chicken-2.jpeg';
const chicken3 = '../assets/Products/peruvian-chicken-3.jpeg';
const chicken4 = '../assets/Products/peruvian-chicken-4.jpeg';
const chicken5 = '../assets/Products/peruvian-chicken-5.jpeg';
const chicken6 = '../assets/Products/peruvian-chicken-6.jpeg';
const chicken7 = '../assets/Products/peruvian-chicken-7.jpeg';
const chicken8 = '../assets/Products/peruvian-chicken-8.jpeg';
const chicken9 = '../assets/Products/peruvian-chicken-9.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { ALUMINUM_FOIL, BAKING_PAN, BLACK_PEPPER, BLENDER, CHICKEN_DRUMETTES, CILANTRO, CUMIN, GARLIC, GREEK_YOGURT, GREEN_ONION, JALAPENO_PEPPER, LIGHT_SOY_SAUCE, LIME_JUICE, MAYONNAISE, MIXING_BOWL, OLIVE_OIL, OREGANO, OVEN, PAPRIKA, SALT } = require('./ingredients');

const CREAMY_GREEN_SAUCE = 'Creamy Green Sauce';

module.exports = {
    cardName: 'Peruvian Chicken',
    name: 'Peruvian Chicken',
    img: chicken9,
    recipeAuthors: ['Erin Lynch'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.PERUVIAN, GENRES.LATIN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.RICE],
    allergies: [ALLERGIES.DAIRY],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
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
        { ...JALAPENO_PEPPER, amount: 3, unit: '', additionalDetails: 'seeded and ribs removed, chopped', section: CREAMY_GREEN_SAUCE },
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
        BLENDER,
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_PAN,
        ALUMINUM_FOIL,
    ],
    directions: [
        { step: 'Combine marinade ingredients in a blender.', section: SECTIONS.MARINADE, img: chicken1 },
        { step: 'In a mixing bowl or ziploc bag, marinade the chicken for at least 8 hours (up to 24 hours).', section: SECTIONS.MARINADE, img: chicken2 },
        { step: `In a blender, add all the "${CREAMY_GREEN_SAUCE}" section ingredients. Blend.`, section: CREAMY_GREEN_SAUCE, img: chicken3 },
        { step: 'Transfer to a container and refrigerate.', section: CREAMY_GREEN_SAUCE, img: chicken4 },
        { step: 'Preheat the oven to 500ºF.', section: SECTIONS.MAIN },
        { step: 'Place the chicken in a baking pan.', section: SECTIONS.MAIN, img: chicken5 },
        { step: 'Add 1 cup of water to the pan.', section: SECTIONS.MAIN },
        { step: 'Bake for 30 minutes.', section: SECTIONS.MAIN, img: chicken6 },
        { step: 'Tent the pan with aluminum foil and cook until the chicken is cooked through (about 15 minutes).', section: SECTIONS.MAIN, img: chicken7 },
        { step: 'Serve the chicken with the creamy green sauce.', section: SECTIONS.SERVE, img: chicken8 },
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