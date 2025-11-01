const katsudon1 = '../assets/Products/chicken-katsudon-1.jpeg';
const katsudon2 = '../assets/Products/chicken-katsudon-2.jpeg';
const katsudon3 = '../assets/Products/chicken-katsudon-3.jpeg';
const katsudon4 = '../assets/Products/chicken-katsudon-4.jpeg';
const katsudon5 = '../assets/Products/chicken-katsudon-5.jpeg';
const katsudon6 = '../assets/Products/chicken-katsudon-6.jpeg';
const katsudon7 = '../assets/Products/chicken-katsudon-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BAKING_SHEET,
    BLACK_PEPPER,
    BONELESS_PORK_CHOPS,
    CHICKEN_BROTH,
    COOLING_RACK,
    EGG,
    FRYING_PAN,
    GREEN_ONION,
    JASMINE_RICE,
    LARGE_POT,
    LIGHT_SOY_SAUCE,
    MEDIUM_BOWL,
    MIRIN,
    PANKO_BREADCRUMBS,
    PAPER_TOWELS,
    SALT,
    STOVE,
    VEGETABLE_OIL,
    WHITE_SUGAR,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Japanese Pork Katsudon',
    name: 'Japanese Pork Katsudon',
    img: katsudon7,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.DEEP_FRY],
    protein: [PROTEIN.EGG, PROTEIN.PORK, PROTEIN.ALTERNATIVE],
    type: [TYPES.RICE],
    allergies: [ALLERGIES.EGG, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 10, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Katsudon', 
            link: 'https://thewoksoflife.com/katsudon/',
            authors: ['Sarah Leung'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...BONELESS_PORK_CHOPS, amount: 10, unit: '', additionalDetails: 'pounded flat', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...ALL_PURPOSE_FLOUR, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...EGG, amount: 15, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...PANKO_BREADCRUMBS, amount: 5, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: '', unit: '', additionalDetails: 'for frying', section: SECTIONS.MAIN },
        { ...CHICKEN_BROTH, amount: 5 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.MAIN },
        { ...WHITE_SUGAR, amount: 10, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...LIGHT_SOY_SAUCE, amount: 5, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...MIRIN, amount: 10, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 5, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'thinly sliced', section: SECTIONS.MAIN },
        { ...JASMINE_RICE, amount: 5, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'steamed', section: SECTIONS.MAIN },
        { ...GREEN_ONION, amount: 5, unit: '', additionalDetails: 'chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        COOLING_RACK,
        PAPER_TOWELS,
        BAKING_SHEET,
        { ...MEDIUM_BOWL, amount: 5 },
        FRYING_PAN,
    ],
    directions: [
        { step: 'Set up 3 bowls for the dredging stations. One with flour, one with 5 beaten eggs, and one with panko.', section: SECTIONS.MAIN },
        { step: 'Season the pork chops with salt and pepper.', section: SECTIONS.MAIN },
        { step: 'Dust the pork chops with light coat of flour, then dip in beaten eggs, and coat with panko.', section: SECTIONS.MAIN },
        { step: 'Heat oil in a pot over medium heat until it gets to about 350 ºF. You can use a cooking thermometer to gauge this.', section: SECTIONS.MAIN },
        { step: 'Be careful as the oil is very hot by this point, so be sure to wear oven mitts to help protect your hands from getting burned.', section: SECTIONS.MAIN },
        { step: 'Place the pork chop in the hot oil, and cook for 5 - 6 minutes per side. Then flip.', section: SECTIONS.MAIN },
        { step: 'Line a baking sheet with paper towels and place a cooling rack on top.', section: SECTIONS.MAIN },
        { step: 'Place the pork chops on the cooling rack to drain any excess oil.', section: SECTIONS.MAIN, img: katsudon1 },
        { step: 'While the pork is resting, make the egg mixture and the sauce.', section: SECTIONS.MAIN },
        { step: 'In one bowl, combine the broth, sugar, soy sauce, and mirin. In another bowl, beat 10 eggs.', section: SECTIONS.MAIN },
        { step: 'For the next steps cook in batches to avoid overcrowding the pan.', section: SECTIONS.MAIN },
        { step: 'Over medium heat, add a tablespoon of oil to a pan', section: SECTIONS.MAIN },
        { step: 'Add the onions and cook until they are slightly caramelized. Split the onions evenly between the batches.', section: SECTIONS.MAIN, img: katsudon2 },
        { step: 'Add the portioned broth mixture over the onions.', section: SECTIONS.MAIN, img: katsudon3 },
        { step: 'Slice the katsudon into strips.', section: SECTIONS.MAIN, img: katsudon4 },
        { step: 'Place the sliced katsudon on top of the onions.', section: SECTIONS.MAIN, img: katsudon5 },
        { step: 'Drizzle some egg over the katsudon and cook until the egg is set.', section: SECTIONS.MAIN, img: katsudon6 },
        { step: 'Serve over rice and garnish with green onions.', section: SECTIONS.MAIN },
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
    mealPrep: false,
};