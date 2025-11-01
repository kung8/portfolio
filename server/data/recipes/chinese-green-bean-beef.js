const bean1 = '../assets/Products/chinese-green-bean-beef-1.jpeg';
const bean2 = '../assets/Products/chinese-green-bean-beef-2.jpeg';
const bean3 = '../assets/Products/chinese-green-bean-beef-3.jpeg';
const bean4 = '../assets/Products/chinese-green-bean-beef-4.jpeg';
const bean5 = '../assets/Products/chinese-green-bean-beef-5.jpeg';
const bean6 = '../assets/Products/chinese-green-bean-beef-6.jpeg';
const bean7 = '../assets/Products/chinese-green-bean-beef-7.jpeg';
const bean8 = '../assets/Products/chinese-green-bean-beef-8.jpeg';
const bean9 = '../assets/Products/chinese-green-bean-beef-9.jpeg';

const { CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    BEEF_CHUCK_ROAST,
    BLACK_PEPPER,
    CHICKEN_BROTH,
    GARLIC,
    GREEN_BEAN,
    GREEN_ONION,
    LIGHT_SOY_SAUCE,
    OYSTER_SAUCE,
    RED_PEPPER_FLAKES,
    RICE_WINE_VINEGAR,
    SALT,
    SMALL_BOWL,
    SPATULA,
    STOVE,
    VEGETABLE_OIL,
    WOK,
} = require('./ingredients');

module.exports = {
    cardName: 'Green Bean Beef',
    name: 'Green Bean Beef',
    img: bean9,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.RICE, TYPES.VEGETABLE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_SHELLFISH],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Green Bean Beef', 
            link: "https://todayscreativelife.com/chinese-beef-green-beans/",
            authors: ['Kim'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...CHICKEN_BROTH, amount: 1 / 3, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RICE_WINE_VINEGAR, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...RED_PEPPER_FLAKES, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...VEGETABLE_OIL, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.MAIN },
        { ...BEEF_CHUCK_ROAST, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'thin strips', section: SECTIONS.MAIN },
        { ...GREEN_BEAN, amount: 24, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'cut to 2" pieces', section: SECTIONS.MAIN },
        { ...GREEN_ONION, amount: 6, unit: '', additionalDetails: 'diagonally sliced', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 4, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
        SPATULA,
        SMALL_BOWL,
    ],
    directions: [
        { step: `In a bowl, combine broth, sauces, vinegar, and red pepper flakes. Set aside.`, section: SECTIONS.SAUCE, img: bean1 },
        { step: `Over medium-high heat, heat 1 Tbsp of oil in a wok.`, section: SECTIONS.MAIN },
        { step: `Add green beans and cook for 4 minutes. Remove beans and set aside.`, section: SECTIONS.MAIN, img: bean2 },
        { step: `Add 1 Tbsp of oil to the wok.`, section: SECTIONS.MAIN },
        { step: `Add beef and cook for one minute. Do not stir.`, section: SECTIONS.MAIN, img: bean3 },
        { step: `Stir beef and cook for 3 to 4. Remove beef and set aside.`, section: SECTIONS.MAIN },
        { step: `Add 1 Tbsp of oil to the wok.`, section: SECTIONS.MAIN },
        { step: `Add green onions. Cook for 1 minute.`, section: SECTIONS.MAIN, img: bean4 },
        { step: `Add garlic and ginger. Cook for 30 seconds.`, section: SECTIONS.MAIN, img: bean5 },
        { step: `Re-add the beef and green beans to the wok.`, section: SECTIONS.MAIN, img: bean6 },
        { step: `Add the sauce. Cook and stir until the sauce thickens (about 1 to 2 minutes).`, section: SECTIONS.MAIN, img: bean7 },
        { step: `Season with salt and pepper as desired.`, section: SECTIONS.MAIN },
        { step: `Serve over rice and enjoy this Chinese stir-fry.`, section: SECTIONS.MAIN, img: bean8 },
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
}