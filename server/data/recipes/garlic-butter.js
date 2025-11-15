const butter1 = '../assets/Products/garlic-butter-1.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CHIVE, GARLIC, LEMON_JUICE, MEDIUM_BOWL, PARSLEY, UNSALTED_BUTTER } = require('./ingredients');

const GARLIC_BUTTER = 'Garlic Butter';

module.exports = {
    cardName: 'Garlic Butter',
    name: 'Garlic Butter',
    img: butter1,
    available: true,
    recommended: true,
    category: [CATEGORIES.TOPPING],
    genre: [GENRES.AMERICAN],
    method: [METHODS.MIX],
    type: [TYPES.SAUCE],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 3, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Garlic Butter', 
            link: 'https://www.spendwithpennies.com/best-homemade-garlic-butter/',
            authors: ['Holly Nilsson'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'softened', section: GARLIC_BUTTER },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: GARLIC_BUTTER },
        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: GARLIC_BUTTER },
        { ...CHIVE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'chopped', section: GARLIC_BUTTER },
        { ...LEMON_JUICE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: GARLIC_BUTTER },
    ],
    supplies: [
        MEDIUM_BOWL,
    ],
    directions: [
        { step: `In a medium bowl, combine the "${GARLIC_BUTTER}" section ingredients.`, section: SECTIONS.MIX },
        { step: `Enjoy this with your favorite bread, pasta or vegetables.`, section: SECTIONS.SERVE },
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    mealPrep: true,
};