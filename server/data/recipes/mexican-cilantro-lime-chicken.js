const cilantro1 = '../assets/Products/mexican-cilantro-lime-chicken-1.jpeg';
const cilantro2 = '../assets/Products/mexican-cilantro-lime-chicken-2.jpeg';
const cilantro3 = '../assets/Products/mexican-cilantro-lime-chicken-3.jpeg';
const cilantro4 = '../assets/Products/mexican-cilantro-lime-chicken-4.jpeg';
const cilantro5 = '../assets/Products/mexican-cilantro-lime-chicken-5.jpeg';
const cilantro6 = '../assets/Products/mexican-cilantro-lime-chicken-6.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    AVOCADO_OIL,
    BAKING_SHEET,
    BLACK_PEPPER,
    BLENDER,
    CAYENNE_PEPPER,
    CHICKEN_WINGS,
    CHILI_POWDER,
    CILANTRO,
    COOLING_RACK,
    GARLIC,
    LIME,
    OVEN,
    SALT,
    TONGS,
    ZIPLOC_BAG,
} = require('./ingredients');

module.exports = {
    cardName: 'Cilantro Lime Chicken',
    name: 'Mexican Cilantro Lime Chicken',
    img: cilantro6,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.MEXICAN],
    method: [METHODS.GRILL],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.PROTEIN, TYPES.RICE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.GLUTEN_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 40, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 4, unit: TIME_UNITS.HOUR },
    separated: true,
    websites: [
        { 
            label: 'Cilantro Lime Chicken Wings', 
            link: 'https://kaleforniakravings.com/easy-cilantro-lime-chicken-wings/',
            authors: ['Caitlin'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...CHICKEN_WINGS, amount: 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MEAT },
        { ...CILANTRO, amount: 1, unit: INGREDIENT_UNITS.BUNCH, additionalDetails: 'chopped', section: SECTIONS.DRESSING },
        { ...LIME, amount: 5, unit: '', additionalDetails: 'juiced', section: SECTIONS.DRESSING },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...AVOCADO_OIL, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...CHILI_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...BLACK_PEPPER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
        { ...CAYENNE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.DRESSING },
    ],
    appliances: [
        BLENDER,
        OVEN,
    ],
    supplies: [
        { ...ZIPLOC_BAG, additionalDetails: 'gallon-size' },
        COOLING_RACK,
        BAKING_SHEET,
        TONGS,
    ],
    directions: [
        { step: 'Combine all the dressing ingredients in a blender.', section: SECTIONS.DRESSING, img: [cilantro1, cilantro2] },
        { step: 'Pour 1/2 of the dressing into a ziploc bag and place the chicken wings and drum.', section: SECTIONS.MEAT, img: cilantro3 },
        { step: 'Let the chicken marinate for 4 hours.', section: SECTIONS.MEAT },
        { step: 'Preheat the oven to 400ºF.', section: SECTIONS.MAIN },
        { step: 'Place a wire rack on top of a baking pan.', section: SECTIONS.MAIN },
        { step: 'Use tongs to transfer chicken to wire rack in a single layer.', section: SECTIONS.MAIN, img: cilantro4 },
        { step: 'Bake for 30 to 35 minutes. Feel free to broil the wings for 2 to 3 minutes in addition to make it crispier.', section: SECTIONS.MAIN, img: cilantro5 },
        { step: 'Dip this chicken in the dressing and serve it with a side of salad and cilantro rice.', section: SECTIONS.SERVE },
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