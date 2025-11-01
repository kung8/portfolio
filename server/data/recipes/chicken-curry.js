const curry1 = '../assets/Products/chicken-curry-1.jpeg';
const curry2 = '../assets/Products/chicken-curry-2.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BAY_LEAF, BONELESS_AND_SKINLESS_CHICKEN_THIGH, COCONUT_MILK, CURRY_POWDER, GARLIC, GINGER, GREEN_BELL_PEPPER, MIXING_BOWL, RED_BELL_PEPPER, SALT, STOVE, THAI_CHILI_PEPPER, WOK, YELLOW_ONION, YUKON_GOLD_POTATO } = require('./ingredients');

const POTATO_SECTION = 'Potato';

module.exports = {
    cardName: 'Chicken Curry',
    name: 'Chicken Curry',
    img: curry2,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.VIETNAMESE, GENRES.ASIAN],
    method: [METHODS.SIMMER, METHODS.STIR_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    allergies: [],
    diet: [DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 8, unit: TIME_UNITS.HOUR },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Delia Delector'],
            finder: 'Delia Delector'
        }
    ],
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 2 inch pieces', section: SECTIONS.MARINADE },
        { ...CURRY_POWDER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...THAI_CHILI_PEPPER, amount: 1, unit: '', additionalDetails: 'to taste', section: SECTIONS.MARINADE },
        { ...BAY_LEAF, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SALT, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 5, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...YUKON_GOLD_POTATO, amount: 1, unit: '', additionalDetails: 'peeled and cut into bite size', section: POTATO_SECTION },

        { ...COCONUT_MILK, amount: 10, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.CURRY },

        { ...GREEN_BELL_PEPPER, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.VEGGIES },
    ],
    appliances: [
        STOVE
    ],
    supplies: [
        MIXING_BOWL,
        WOK,
    ],
    directions: [
        { step: `In a mixing bowl, combine the "${SECTIONS.MARINADE}" section ingredients.`, section: SECTIONS.PREP_MARINADE },
        { step: `Cover and place it in the refrigerator. Let it marinate overnight.`, section: SECTIONS.PREP_MARINADE },
        { step: `Over medium-high heat, heat a little oil in a wok.`, section: SECTIONS.COOK_CURRY },
        { step: `Add marinated chicken. Stir fry (about 5 to 6 minutes). It will not be cooked through.`, section: SECTIONS.COOK_CURRY },
        { step: `Add the potatoes. Cook (about 5 to 6 minutes).`, section: SECTIONS.COOK_CURRY, img: curry1 },
        { step: `Add coconut milk.`, section: SECTIONS.COOK_CURRY },
        { step: `Let it simmer and cook down to your desired level of remaining liquid (about 15 to 20 minutes).`, section: SECTIONS.COOK_CURRY },
        { step: `Add the veggies from the "${SECTIONS.VEGGIES}" section ingredients. Cook for about 3 to 4 minutes. This is meant to add some color and added near the end to prevent it from overcooking.`, section: SECTIONS.COOK_CURRY },
        { step: `Serve this over rice.`, section: SECTIONS.SERVE },
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
            instruction: 'Microwave until heated through, stirring halfway through (about 2 to 3 minutes).',
        },
    ],
    mealPrep: true,
};