const basil1 = '../assets/Products/thai-basil-1.jpeg';
const basil2 = '../assets/Products/thai-basil-2.jpeg';
const basil3 = '../assets/Products/thai-basil-3.jpeg';
const basil4 = '../assets/Products/thai-basil-4.jpeg';
const basil5 = '../assets/Products/thai-basil-5.jpeg';
const basil6 = '../assets/Products/thai-basil-6.jpeg';
const basil7 = '../assets/Products/thai-basil-7.jpeg';
const basil8 = '../assets/Products/thai-basil-8.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BASIL_LEAF, BONELESS_AND_SKINLESS_CHICKEN_THIGH, BROWN_SUGAR, CHICKEN_BROTH, FISH_SAUCE, GARLIC, JASMINE_RICE, LIGHT_SOY_SAUCE, MIXING_BOWL, OYSTER_SAUCE, SHALLOT, STOVE, THAI_CHILI_PEPPER, VEGETABLE_OIL, WHITE_SUGAR, WOK } = require('./ingredients');

module.exports = {
    cardName: 'Spicy Thai Basil',
    name: 'Spicy Thai Basil (Pad Krapow Gai)',
    img: basil8,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.THAI],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.ALTERNATIVE],
    type: [TYPES.MAIN_COURSE],
    allergies: [ALLERGIES.FISH],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Thai Basil Chicken', 
            link: 'https://www.allrecipes.com/recipe/257938/spicy-thai-basil-chicken-pad-krapow-gai/',
            authors: ['John Mitzewich'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...CHICKEN_BROTH, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...FISH_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'chopped', section: SECTIONS.MAIN },
        { ...SHALLOT, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...THAI_CHILI_PEPPER, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...BASIL_LEAF, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'thinly sliced', section: SECTIONS.MAIN },

        { ...JASMINE_RICE, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'cooked', section: SECTIONS.SERVE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        WOK,
    ],
    directions: [
        { step: 'In a mixing bowl, combine the "Sauce" ingredients.', section: SECTIONS.SAUCE, img: basil1 },
        { step: 'Over high heat, add oil to a wok.', section: SECTIONS.MAIN },
        { step: 'Add chicken (or preferred protein) and stir fry until the protein has lost its raw color (about 2 to 3 minutes).', section: SECTIONS.MAIN, img: [basil2, basil3] },
        { step: 'Add the remaining ingredients except the basil. Mix and cook until the liquid begins caramelize on the bottom of the wok (about 2 or 3 minutes).', section: SECTIONS.MAIN, img: basil4 },
        { step: 'Add 1 tablespoon of the sauce. Cook and mix until the sauce caramelizes (about 1 minutes).', section: SECTIONS.MAIN },
        { step: 'Add the rest of the sauce. Cook and mix until the sauce has deglazed the wok.', section: SECTIONS.MAIN, img: basil5 },
        { step: 'Let the sauce glaze the meat (about 1 or 2 minutes).', section: SECTIONS.MAIN },
        { step: 'Remove from heat and add in the basil. Mix and let it wilt (about 20 seconds).', section: SECTIONS.MAIN, img: basil6 },
        { step: 'Enjoy this easy thai dish with rice.', section: SECTIONS.SERVE, img: basil7 },
    ],
    notes: [
        { note: 'The spice of the Thai chilies can be adjusted per your spice level preference. If you make multiple batches, it does not necessarily need to be multiplied too.' },
    ],
    store: [
        {
            duration: { amount: 7, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Over medium-high heat, add a little oil and noodles to a wok. Stir fry until heated through. Break up any clumps.',
        },
    ],
    mealPrep: true,
};