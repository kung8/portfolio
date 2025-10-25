const noodles1 = '../assets/Products/pad-see-ew-1.jpeg';
const noodles2 = '../assets/Products/pad-see-ew-2.jpeg';
const noodles3 = '../assets/Products/pad-see-ew-3.jpeg';
const noodles4 = '../assets/Products/pad-see-ew-4.jpeg';
const noodles5 = '../assets/Products/pad-see-ew-5.jpeg';
const noodles6 = '../assets/Products/pad-see-ew-6.jpeg';
const noodles7 = '../assets/Products/pad-see-ew-7.jpeg';
const noodles8 = '../assets/Products/pad-see-ew-8.jpeg';

const THAI_CHILI_PEPPER_SECTION = 'Thai Chili Pepper';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BROWN_SUGAR,
    CHICKEN_THIGH,
    CHINESE_BROCCOLI,
    CORNSTARCH,
    DARK_SOY_SAUCE,
    EGG,
    FRESH_RICE_NOODLES,
    GARLIC,
    LIGHT_SOY_SAUCE,
    OYSTER_SAUCE,
    RED_BELL_PEPPER,
    SNOW_PEA,
    THAI_CHILI_PEPPER,
    VEGETABLE_OIL,
    WHITE_PEPPER,
    WHITE_VINEGAR,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Pad See Ew',
    name: 'Thai Pad See Ew',
    img: noodles8,
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.NOODLE],
    allergies: [ALLERGIES.EGG],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Chili Vinegar', 
            link: "https://hot-thai-kitchen.com/chili-vinegar/",
            authors: ['Pailin Chongchinant'],
            finder: 'Kevin Ung', 
        }
    ],
    separated: true,
    ingredients: [
        { ...CHICKEN_THIGH, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 2 inches', section: SECTIONS.CHICKEN },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...OYSTER_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },
        { ...CORNSTARCH, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.CHICKEN },

        { ...EGG, amount: 2, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...CHINESE_BROCCOLI, amount: 5, unit: INGREDIENT_UNITS.PIECE, additionalDetails: 'leaves and stems separated', section: SECTIONS.MAIN },
        { ...RED_BELL_PEPPER, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...SNOW_PEA, amount: 4, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...FRESH_RICE_NOODLES, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.MAIN },

        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...DARK_SOY_SAUCE, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...BROWN_SUGAR, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_PEPPER, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: THAI_CHILI_PEPPER_SECTION },
        { ...THAI_CHILI_PEPPER, amount: 3, unit: '', additionalDetails: '', section: THAI_CHILI_PEPPER_SECTION },
        { ...WHITE_VINEGAR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: THAI_CHILI_PEPPER_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'pot' },
        { name: 'bowl' },
        { name: 'wok' },
        { name: 'small bowl' },
        { name: 'mortar and pestle' },
    ],
    directions: [
        { step: 'Dry fry the Thai chili peppers and garlic.', section: THAI_CHILI_PEPPER_SECTION, img: noodles1 },
        { step: 'In a mortar and pestle, crush the peppers and garlic until it becomes a paste.', section: THAI_CHILI_PEPPER_SECTION, img: noodles2 },
        { step: 'Add vinegar to the paste.', section: THAI_CHILI_PEPPER_SECTION, img: noodles3 },

        { step: 'Marinate the chicken with all of the marinade ingredients.', section: SECTIONS.MAIN },
        { step: 'Combine all the sauce ingredients in a medium size bowl.', section: SECTIONS.MAIN },
        { step: 'Separate the chinese broccoli stems and leaves. Cut the stems about 2 inches.', section: SECTIONS.MAIN },
        { step: 'Cut the onion and bell pepper into slices and mince the garlic.', section: SECTIONS.MAIN },
        { step: 'Sear chicken in a pan until it\'s about 80% cooked.', section: SECTIONS.MAIN },
        { step: 'Remove from the pan.', section: SECTIONS.MAIN, img: noodles4 },
        { step: 'Add garlic, Chinese broccoli stems, sliced onion, snow peas and sliced pepper to the pan. Cook for 2 to 3 minutes.', section: SECTIONS.MAIN },
        { step: 'Add the Chinese broccoli leaves. Cook until the leaves wilts.', section: SECTIONS.MAIN, img: noodles5 },
        { step: 'Remove the vegetables from the pan.', section: SECTIONS.MAIN },
        { step: 'Add eggs to the pan. Scramble for a few seconds and let it set. Remove the eggs from the pan.', section: SECTIONS.MAIN },
        { step: 'Add a tablespoon of oil. Add rice noodles to the pan. Cook for a few minutes and let it char a little bit.', section: SECTIONS.MAIN },
        { step: 'Add sauce over noodles and cook for 3 minutes on high.', section: SECTIONS.MAIN, img: noodles6 },
        { step: 'Re-add chicken. Cook the chicken the remainder of the way.', section: SECTIONS.MAIN },
        { step: 'Re-add the veggies and eggs. Toss everything together.', section: SECTIONS.MAIN, img: noodles7 },
        { step: 'Optionally top with the chili vinegar sauce.', section: SECTIONS.MAIN },
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
            method: REHEAT_METHODS.STIR_FRY,
            instruction: 'Add a little oil to a wok. Over medium-high heat, heat the noodles and break up the clumps. Add a splash of water. Cook until heated through.',
        },
    ],
    mealPrep: true,
};