const kolo1 = '../assets/Products/kolo-mee-1.jpeg';
const kolo2 = '../assets/Products/kolo-mee-2.jpeg';
const kolo3 = '../assets/Products/kolo-mee-3.jpeg';
const kolo4 = '../assets/Products/kolo-mee-4.jpeg';
const kolo5 = '../assets/Products/kolo-mee-5.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BABY_BOK_CHOY, CHOW_MEIN_NOODLES, DARK_SOY_SAUCE, FRIED_SHALLOTS, GARLIC, GREEN_ONION, GROUND_PORK, LARGE_POT, LIGHT_SOY_SAUCE, ONION_POWDER, OYSTER_SAUCE, SESAME_OIL, STOVE, THAI_CHILI_PEPPER, VEGETABLE_OIL, WHITE_PEPPER, WOK } = require('./ingredients');

const MINCED_MEAT_SECTION = 'Minced Meat';
const BOK_CHOY_SECTION = 'Bok Choy';
const COOK_MINCED_MEAT = 'Cook Minced Meat';
const COOK_BOK_CHOY = 'Cook Bok Choy';

module.exports = {
    cardName: 'Kolo Mee',
    name: 'Kolo Mee',
    img: kolo5,
    available: true,
    recommended: true,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.NOODLE],
    allergies: [ALLERGIES.SESAME],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Kolo Mee', 
            link: 'https://tasteasianfood.com/kolo-mee-recipe/',
            authors: ['KP Kwan'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...GROUND_PORK, amount: 6, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...DARK_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...OYSTER_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...SESAME_OIL, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...WHITE_PEPPER, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },

        { ...CHOW_MEIN_NOODLES, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.NOODLE },
        // { ...CHAR_SIU, amount: '', unit: '', additionalDetails: '', section: SECTIONS.NOODLE },
        { ...BABY_BOK_CHOY, amount: 2, unit: INGREDIENT_UNITS.STALK, additionalDetails: '', section: BOK_CHOY_SECTION },

        { ...LIGHT_SOY_SAUCE, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...OYSTER_SAUCE, amount: 1 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...ONION_POWDER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },

        { ...GREEN_ONION, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...FRIED_SHALLOTS, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'browned and minced', section: SECTIONS.TOPPINGS },
        { ...THAI_CHILI_PEPPER, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        WOK,
        LARGE_POT,
    ],
    directions: [
        { step: `Over medium-high heat, heat oil in a wok.`, section: COOK_MINCED_MEAT },
        { step: `Add the "${MINCED_MEAT_SECTION}" section ingredients. Stir fry until browned.`, section: COOK_MINCED_MEAT },
        { step: `Set aside.`, section: COOK_MINCED_MEAT, img: kolo1 },

        { step: `Cook the chow mein noodles according to package instructions. As it loosens and is almost cooked, remove the noodles and place it in a cold water bath.`, section: SECTIONS.COOK_NOODLES },
        { step: `Re-add the cooled noodles back to the boiling water until it is cooked.`, section: SECTIONS.COOK_NOODLES },
        { step: `Drain. Set the noodles on a plate.`, section: SECTIONS.COOK_NOODLES, img: kolo3 },

        { step: `Over medium-high heat, boil a pot of water.`, section: COOK_BOK_CHOY },
        { step: `Add bok choy. Cook until tender (about 1 to 2 minutes).`, section: COOK_BOK_CHOY },
        { step: `Drain. Set aside.`, section: COOK_BOK_CHOY, img: kolo4 },

        { step: `To the plate of noodles, add the "${SECTIONS.SAUCE}" section ingredients. Mix.`, section: SECTIONS.ASSEMBLE },
        { step: `Top the dish with the minced meat, bok choy and any other preferred toppings.`, section: SECTIONS.ASSEMBLE, img: kolo2 },

        { step: `Enjoy one of my favorite noodle dishes from where a piece of my heart is.`, section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Fresh egg noodles is preferred but you can use dried noodles.' }
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