const broccoli1 = '../assets/Products/broccoli-beef-1.jpeg';
const broccoli2 = '../assets/Products/broccoli-beef-2.jpeg';
const broccoli3 = '../assets/Products/broccoli-beef-3.jpeg';
const broccoli4 = '../assets/Products/broccoli-beef-4.jpeg';
const broccoli5 = '../assets/Products/broccoli-beef-5.jpeg';
const broccoli6 = '../assets/Products/broccoli-beef-6.jpeg';
const broccoli7 = '../assets/Products/broccoli-beef-7.jpeg';
const broccoli8 = '../assets/Products/broccoli-beef-8.jpeg';
const broccoli9 = '../assets/Products/broccoli-beef-9.jpeg';
const broccoli10 = '../assets/Products/broccoli-beef-10.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BAKING_SODA,
    BEEF,
    BROCCOLI,
    CORNSTARCH,
    GARLIC,
    GINGER,
    LARGE_BOWL,
    LARGE_POT,
    LIGHT_SOY_SAUCE,
    SALT,
    SESAME_OIL,
    SESAME_SEEDS,
    SHAOXING_WINE,
    STOVE,
    VEGETABLE_OIL,
    WATER,
    WHITE_SUGAR,
    WOK,
} = require('./ingredients');

const BEEF_SECTION = 'Beef';
const BROCCOLI_SECTION = 'Broccoli';

module.exports = {
    cardName: 'Broccoli Beef',
    name: 'Chinese Broccoli Beef',
    img: broccoli10,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY, METHODS.BLANCH],
    protein: [PROTEIN.BEEF],
    type: [TYPES.STIR_FRY],
    allergies: [ALLERGIES.SESAME],
    diet: [DIET.DAIRY_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Broccoli Beef', 
            link: "https://www.instagram.com/leahscohen/reel/C1a15_1OgWY/",
            author: ['Leahs Cohen'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...BEEF, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'sliced', section: BEEF_SECTION },
        { ...WATER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'warm', section: BEEF_SECTION },
        { ...SHAOXING_WINE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEEF_SECTION },
        { ...CORNSTARCH, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF_SECTION },
        { ...BAKING_SODA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEEF_SECTION },
        { ...VEGETABLE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WATER, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CORNSTARCH, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...SESAME_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROCCOLI, amount: 2, unit: INGREDIENT_UNITS.HEAD, additionalDetails: 'cut into florets', section: SECTIONS.MAIN },
        { ...GINGER, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 6, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...SESAME_SEEDS, amount: '', unit: '', additionalDetails: 'optional', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
        LARGE_POT,
        { ...LARGE_BOWL, amount: 2 },
    ],
    directions: [
        { step: 'In a large bowl, combine the beef marinade ingredients. Let it marinate for 30 minutes.', section: BEEF_SECTION, img: broccoli1 },
        { step: 'In a medium bowl, combine the sauce ingredients and set aside.', section: SECTIONS.SAUCE, img: broccoli2 },
        { step: 'In a large pot, boil water.', section: BROCCOLI_SECTION },
        { step: 'Add broccoli to the boiling water.', section: BROCCOLI_SECTION, img: broccoli3 },
        { step: 'Transfer to ice bath after 3 or 4 minutes.', section: BROCCOLI_SECTION, img: broccoli4 },
        { step: 'Over medium-high heat, heat up a wok and add beef.', section: SECTIONS.MAIN },
        { step: 'Cook beef just until cooked about 80% of the way.', section: SECTIONS.MAIN },
        { step: 'Remove beef from the wok.', section: SECTIONS.MAIN, img: broccoli5 },
        { step: 'Add oil.', section: SECTIONS.MAIN },
        { step: 'Add the garlic and ginger. Saute.', section: SECTIONS.MAIN, img: broccoli6 },
        { step: 'Add sauce. Cook until it thickens.', section: SECTIONS.MAIN, img: broccoli7 },
        { step: 'Add the beef and broccoli. Combine.', section: SECTIONS.MAIN, img: broccoli8 },
        { step: 'Cook until beef is cooked through.', section: SECTIONS.MAIN, img: broccoli9 },
        { step: 'Top with sesame seeds and serve with steamed rice.', section: SECTIONS.SERVE },
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