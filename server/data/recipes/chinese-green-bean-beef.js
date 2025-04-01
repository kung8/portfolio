const combinedZoomed1 = '../assets/Products/chinese-green-bean-and-beef-cooked-combined-zoomed-1.jpeg';
const combinedZoomed2 = '../assets/Products/chinese-green-bean-and-beef-cooked-combined-zoomed-2.jpeg';
const combined = '../assets/Products/chinese-green-bean-and-beef-cooked-combined.jpeg';
const greenOnionPan = '../assets/Products/chinese-green-bean-and-beef-green-onions-in-pan.jpeg';
const greenOnionsGarlic = '../assets/Products/chinese-green-bean-and-beef-green-onions-with-garlic.jpeg';
const plated2 = '../assets/Products/chinese-green-bean-and-beef-plated-2.jpeg';
const beef = '../assets/Products/chinese-green-bean-and-beef-raw-beef.jpeg';
const sauce = '../assets/Products/chinese-green-bean-and-beef-sauce.jpeg';
const sautedBeans = '../assets/Products/chinese-green-bean-and-beef-sauted-green-beans.jpeg';

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    GREEN_BEAN,
    BEEF_CHUCK_ROAST,
    SALT,
    BLACK_PEPPER,
    GARLIC,
    LIGHT_SOY_SAUCE,
    GREEN_ONION,
    CHICKEN_BROTH,
    OYSTER_SAUCE,
    RICE_WINE_VINEGAR,
    RED_PEPPER_FLAKES,
    VEGETABLE_OIL,
} = require('./ingredients');

module.exports = {
    cardName: 'Green Bean Beef',
    name: 'Green Bean Beef',
    img: combinedZoomed2,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.RICE, TYPES.VEGETABLE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { label: 'Green Bean Beef', link: "https://todayscreativelife.com/chinese-beef-green-beans/" }
    ],
    ingredients: [
        { ...CHICKEN_BROTH, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { ...RED_PEPPER_FLAKES, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', optional: false, section: SECTIONS.SAUCE },
        { ...VEGETABLE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', optional: false, section: SECTIONS.MAIN },
        { ...BEEF_CHUCK_ROAST, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'thin strips', optional: false, section: SECTIONS.MAIN },
        { ...GREEN_BEAN, amount: 24, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'cut to 2" pieces', optional: false, section: SECTIONS.MAIN },
        { ...GREEN_ONION, amount: 6, unit: '', additionalDetails: 'diagonally sliced', optional: false, section: SECTIONS.MAIN },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', optional: false, section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', optional: false, section: SECTIONS.MAIN },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
        { name: 'spatula' },
        { name: 'small bowl' },
    ],
    directions: [
        { step: 'In a bowl, combine broth, sauces, vinegar, and red pepper flakes. Set aside.', type: SECTIONS.SAUCE, img: sauce },
        { step: 'Over medium-high heat, heat 1 Tbsp of oil in a wok.', type: SECTIONS.MAIN },
        { step: 'Add green beans and cook for 4 minutes. Remove beans and set aside.', type: SECTIONS.MAIN, img: sautedBeans },
        { step: 'Add 1 Tbsp of oil to the wok.', type: SECTIONS.MAIN },
        { step: 'Add beef and cook for one minute. Do not stir.', type: SECTIONS.MAIN, img: beef },
        { step: 'Stir beef and cook for 3 to 4. Remove beef and set aside.', type: SECTIONS.MAIN },
        { step: 'Add 1 Tbsp of oil to the wok.', type: SECTIONS.MAIN },
        { step: 'Add green onions. Cook for 1 minute.', type: SECTIONS.MAIN, img: greenOnionPan },
        { step: 'Add garlic and ginger. Cook for 30 seconds.', type: SECTIONS.MAIN, img: greenOnionsGarlic },
        { step: 'Re-add the beef and green beans to the wok.', type: SECTIONS.MAIN, img: combined },
        { step: 'Add the sauce. Cook and stir until the sauce thickens (about 1 to 2 minutes).', type: SECTIONS.MAIN, img: combinedZoomed1 },
        { step: 'Season with salt and pepper as desired.', type: SECTIONS.MAIN },
        { step: 'Serve over rice and enjoy this Chinese stir-fry.', type: SECTIONS.MAIN, img: plated2 },
    ]
}