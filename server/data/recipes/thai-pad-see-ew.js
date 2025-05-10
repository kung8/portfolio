const broccoli = '../assets/Products/pad-see-ew-chinese-broccoli.jpeg';
const cookedChicken = '../assets/Products/pad-see-ew-cooked-chicken.jpeg';
const cookedEggs = '../assets/Products/pad-see-ew-cooked-eggs.jpeg';
const dry = '../assets/Products/pad-see-ew-dry-fry.jpeg';
const freshNoodles = '../assets/Products/pad-see-ew-fresh-noodles.jpeg';
const mixed = '../assets/Products/pad-see-ew-mixed.jpeg';
const noodlesWithSauce = '../assets/Products/pad-see-ew-noodles-with-sauce.jpeg';
const leaves = '../assets/Products/pad-see-ew-pan-fried-leaves.jpeg';
const fryVeggies = '../assets/Products/pad-see-ew-pan-fry-veggies.jpeg';
const partialChicken = '../assets/Products/pad-see-ew-partial-chicken.jpeg';
const paste = '../assets/Products/pad-see-ew-paste.jpeg';
const platedZoomed = '../assets/Products/pad-see-ew-plated-zoomed.jpeg';
const plated = '../assets/Products/pad-see-ew-plated.jpeg';
const thigh = '../assets/Products/pad-see-ew-raw-chicken-thigh.jpeg';
const sauce = '../assets/Products/pad-see-ew-sauce.jpeg';
const vinegar = '../assets/Products/pad-see-ew-thai-chili-vinegar.jpeg';
const veggies = '../assets/Products/pad-see-ew-veggies.jpeg';

const THAI_CHILI_PEPPER_SECTION = 'Thai Chili Pepper';

const { GENRES, METHODS, PROTEIN, SECTIONS, TYPES, CATEGORIES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const {
    CHICKEN_THIGH,
    LIGHT_SOY_SAUCE,
    OYSTER_SAUCE,
    VEGETABLE_OIL,
    CORNSTARCH,
    EGG,
    GARLIC,
    CHINESE_BROCCOLI,
    RED_BELL_PEPPER,
    YELLOW_ONION,
    SNOW_PEA,
    FRESH_RICE_NOODLES,
    DARK_SOY_SAUCE,
    BROWN_SUGAR,
    WHITE_PEPPER,
    WHITE_VINEGAR,
    THAI_CHILI_PEPPER,
} = require('./ingredients');

module.exports = {
    cardName: 'Pad See Ew',
    name: 'Thai Pad See Ew',
    img: platedZoomed,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.THAI, GENRES.ASIAN],
    method: [METHODS.PAN_FRY],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.NOODLE],
    yields: { amount: 3, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Chili Vinegar', link: "https://hot-thai-kitchen.com/chili-vinegar/" }
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
        { step: 'Dry fry the Thai chili peppers and garlic.', section: THAI_CHILI_PEPPER_SECTION, img: dry },
        { step: 'In a mortar and pestle, crush the peppers and garlic until it becomes a paste.', section: THAI_CHILI_PEPPER_SECTION, img: paste },
        { step: 'Add vinegar to the paste.', section: THAI_CHILI_PEPPER_SECTION, img: vinegar },

        { step: 'Marinate the chicken with all of the marinade ingredients.', section: SECTIONS.MAIN, img: thigh },
        { step: 'Combine all the sauce ingredients in a medium size bowl.', section: SECTIONS.MAIN, img: sauce },
        { step: 'Separate the chinese broccoli stems and leaves. Cut the stems about 2 inches.', section: SECTIONS.MAIN, img: broccoli },
        { step: 'Cut the onion and bell pepper into slices and mince the garlic.', section: SECTIONS.MAIN, img: veggies },
        { step: 'Sear chicken in a pan until it\'s about 80% cooked.', section: SECTIONS.MAIN, img: cookedChicken },
        { step: 'Remove from the pan.', section: SECTIONS.MAIN, img: partialChicken },
        { step: 'Add garlic, Chinese broccoli stems, sliced onion, snow peas and sliced pepper to the pan. Cook for 2 to 3 minutes.', section: SECTIONS.MAIN, img: fryVeggies },
        { step: 'Add the Chinese broccoli leaves. Cook until the leaves wilts.', section: SECTIONS.MAIN, img: leaves },
        { step: 'Remove the vegetables from the pan.', section: SECTIONS.MAIN },
        { step: 'Add eggs to the pan. Scramble for a few seconds and let it set. Remove the eggs from the pan.', section: SECTIONS.MAIN, img: cookedEggs },
        { step: 'Add a tablespoon of oil. Add rice noodles to the pan. Cook for a few minutes and let it char a little bit.', section: SECTIONS.MAIN, img: freshNoodles },
        { step: 'Add sauce over noodles and cook for 3 minutes on high.', section: SECTIONS.MAIN, img: noodlesWithSauce },
        { step: 'Re-add chicken. Cook the chicken the remainder of the way.', section: SECTIONS.MAIN },
        { step: 'Re-add the veggies and eggs. Toss everything together.', section: SECTIONS.MAIN, img: mixed },
        { step: 'Optionally top with the chili vinegar sauce.', section: SECTIONS.MAIN, img: plated },
    ]
};