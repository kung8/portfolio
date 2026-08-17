const thigh1 = '../assets/Products/honey-mustard-chicken-thigh-1.jpeg';

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
const { BAKING_PAN, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_THIGH, GARLIC, HONEY, MIXING_BOWL, ONION_POWDER, OVEN, SALT, VEGETABLE_OIL, WHITE_VINEGAR, YELLOW_MUSTARD } = require('./ingredients');

module.exports = {
    cardName: 'Honey Mustard Chicken Thighs',
    name: 'Honey Mustard Chicken Thighs',
    img: thigh1,
    available: true,
    recommended: true,
    createdAt: '2026-08-15 16:06:43',
    modifiedAt: '2026-08-17 13:05:46',
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 5, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 2, unit: TIME_UNITS.HOUR },
    websites: [
        { label: 'Honey Mustard Chicken', link: 'https://www.facebook.com/everydayisfeastday/videos/your-new-favorite-chicken-marinade-marinade-chicken-grill/2874525989551513/', authors: ['Bob Morano'], finder: 'Kevin Ung' }
    ],
    ingredients: [
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...HONEY, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...YELLOW_MUSTARD, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...ONION_POWDER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...WHITE_VINEGAR, amount: 3, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...VEGETABLE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },

        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.CHICKEN},
    ],
    appliances: [
        OVEN,
    ],
    supplies: [
        MIXING_BOWL,
        BAKING_PAN,
    ],
    directions: [
        { step: `In a mixing bowl, combine together the "${SECTIONS.MARINADE}" section ingredients until smooth.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: `Add chicken. Mix until coated.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: `Let it marinate for 2 hours (or overnight).`, section: SECTIONS.MARINATE_CHICKEN },
        { step: `Preheat the oven to 450ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Drain chicken. Place them in a baking pan.`, section: SECTIONS.PREP_CHICKEN },
        { step: `Bake until chicken reaches internal temperature of 165ºF (about 25 to 30 minutes).`, section: SECTIONS.BAKE },
        { step: `Enjoy this simple chicken dish with rice or your favorite grain.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: `If the chicken is cooked but not browned, broil for a few minutes but keep an eye on it so it does not burn.`, section: SECTIONS.BAKE },
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
            method: REHEAT_METHODS.BAKE,
            instruction: 'Bake at 350ºF until heated through (about 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};