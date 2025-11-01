const kebabs1 = '../assets/Products/chicken-kebabs-1.jpeg';
const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALUMINUM_FOIL,
    BAKING_SHEET,
    BAMBOO_SKEWERS,
    BLACK_PEPPER,
    CHICKEN_THIGH,
    CUTTING_BOARD,
    GARLIC_POWDER,
    KNIFE,
    LIGHT_SOY_SAUCE,
    OVEN,
    RED_BELL_PEPPER,
    SALT,
    TERIYAKI_SAUCE,
    VEGETABLE_OIL,
    YELLOW_ONION,
    ZIPLOC_BAG,
} = require('./ingredients');

const PREP_SKEWERS = 'Prep Skewers';

module.exports = {
    cardName: 'Kebabs',
    name: 'Chicken Kebabs',
    img: kebabs1,
    available: true,
    category: [CATEGORIES.APPETIZER],
    genre: [GENRES.MIDDLE_EASTERN],
    method: [METHODS.BAKE],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.FINGER_FOOD, TYPES.PROTEIN],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 180, unit: TIME_UNITS.MINUTE },
    websites: [
        {
            label: 'Own Recipe',
            link: null,
            authors: ['Kevin Ung'],
            finder: 'Kevin Ung'
        }
    ],
    ingredients: [
        { ...LIGHT_SOY_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...TERIYAKI_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...VEGETABLE_OIL, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARLIC_POWDER, amount: 1, unit: '', additionalDetails: '', section: SECTIONS.MARINADE },

        { ...CHICKEN_THIGH, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 1-inch pieces', section: SECTIONS.MAIN },

        { ...RED_BELL_PEPPER, amount: 2, unit: '', additionalDetails: 'cut into 1-inch pieces', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'cut into 1-inch pieces', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        OVEN
    ],
    supplies: [
        CUTTING_BOARD,
        KNIFE,
        { ...ZIPLOC_BAG, additionalDetails: 'gallon-size' },
        BAMBOO_SKEWERS,
        BAKING_SHEET,
        ALUMINUM_FOIL,
    ],
    directions: [
        { step: `In a ziploc bag, combine the "${SECTIONS.MARINADE}" section ingrdients.`, section: SECTIONS.MARINATE_CHICKEN },
        { step: `Add cut chicken. Marinate for 1 to 3 hours.`, section: SECTIONS.MARINATE_CHICKEN },

        { step: `Preheat oven to 450ºF.`, section: SECTIONS.PREHEAT_OVEN },
        { step: `Place aluminum foil on the baking sheet.`, section: SECTIONS.PREP_PAN },
        { step: `Thread the skewers with chicken and veggies leaving enough space between each piece.`, section: PREP_SKEWERS },
        { step: `Place the prepared skewers on the baking sheet with space in between each other.`, section: PREP_SKEWERS },
        { step: `Bake until cooked through (about 15 to 25 minutes).`, section: SECTIONS.BAKE },
        { step: `Enjoy these simple appetizers.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Leaving space between each piece allows it to get cook evenly.' }
    ],
    store: [
        {
            duration: { amount: 4, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.BAKE,
            instruction: 'Wrap in foil and bake at 350ºF until heated through (about 30 minutes).',
        },
    ],
    mealPrep: false,
};