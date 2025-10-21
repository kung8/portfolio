const teriyaki1 = '../assets/Products/teriyaki-chicken-1.jpeg';
const teriyaki2 = '../assets/Products/teriyaki-chicken-2.jpeg';
const teriyaki3 = '../assets/Products/teriyaki-chicken-3.jpeg';
const teriyaki4 = '../assets/Products/teriyaki-chicken-4.jpeg';
const teriyaki5 = '../assets/Products/teriyaki-chicken-5.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BONELESS_AND_SKINLESS_CHICKEN_THIGH, BROWN_SUGAR, GARLIC, GINGER, GREEN_ONION, LIGHT_SOY_SAUCE, PINEAPPLE_JUICE } = require('./ingredients');

const GRILL_CHICKEN = 'Grill Chicken';

module.exports = {
    cardName: 'Hawaiian Teriyaki Chicken',
    name: 'Hawaiian Teriyaki Chicken',
    img: teriyaki5,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN, GENRES.HAWAIIAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.MAIN_COURSE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.HOUR },
    websites: [
        { 
            label: 'Hawaiian Grilled Teriyaki Chicken', 
            link: 'https://www.favfamilyrecipes.com/grilled-hawaiian-teriyaki-chicken/',
            author: ['Erica Walker'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'pounded to an even thickness', section: SECTIONS.CHICKEN },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...PINEAPPLE_JUICE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MARINADE },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'minced', section: SECTIONS.MARINADE },
        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'grill' },
    ],
    supplies: [
        { name: 'ziploc bag' },
        { name: 'saucepan' },
        { name: 'aluminum foil' },
        { name: 'baking pan' },
    ],
    directions: [
        { step: `In a ziploc bag, combine the "${SECTIONS.MARINADE}" section ingredients. Mix until the sugar dissolves.`, section: SECTIONS.MARINATE_CHICKEN, img: teriyaki1 },
        { step: 'Add chicken to the marinade. Massage the marinade into the chicken until chicken is completely covered.', section: SECTIONS.MARINATE_CHICKEN, img: teriyaki2 },
        { step: 'Let it marinate (at least 4 hours or overnight).', section: SECTIONS.MARINATE_CHICKEN },
        { step: 'Set the chicken on a plate and pour marinade into a saucepan.', section: GRILL_CHICKEN },
        { step: 'Bring the marinade to a simmer (about 5 to 10 minutes).', section: GRILL_CHICKEN },
        { step: 'Pour some hot marinade over the chicken.', section: GRILL_CHICKEN, img: [teriyaki3, teriyaki4] },
        { step: 'Grill the chicken until it reaches an internal temperature of 165ºF.', section: GRILL_CHICKEN },
        { step: 'Cover in foil and let it rest for 5 to 10 minutes.', section: GRILL_CHICKEN },
        { step: 'Enjoy the chicken thighs whole or sliced.', section: SECTIONS.SERVE },
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
            instruction: 'Bake at 350ºF until heated through (for 10 to 15 minutes).',
        },
    ],
    mealPrep: true,
};