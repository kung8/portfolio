// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, UNITS } = require('./constants');
const { GROUND_PORK, LIGHT_SOY_SAUCE, DARK_SOY_SAUCE, OYSTER_SAUCE, SESAME_OIL, WHITE_PEPPER, VEGETABLE_OIL, CHOW_MEIN_NOODLES, BABY_BOK_CHOY, ONION_POWDER, GREEN_ONIONS, FRIED_SHALLOTS, GARLIC, THAI_CHILI_PEPPERS } = require('./ingredients');

const MINCED_MEAT_SECTION = 'Minced Meat';
const NOODLE_SECTION = 'Noodle';
const BOK_CHOY_SECTION = 'Bok Choy';
const SAUCE_SECTION = 'Sauce';

const COOK_MINCED_MEAT = 'Cook Minced Meat';
const COOK_NOODLES = 'Cook Noodles';
const COOK_BOK_CHOY = 'Cook Bok Choy';
const ASSEMBLE_DISH = 'Assemble Dish';

module.exports = {
    wip: true,
    cardName: 'Kolo Mee',
    name: 'Kolo Mee',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.MALAYSIAN, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.PORK],
    type: [TYPES.NOODLE],
    yields: '2 servings',
    prepTime: '15 m',
    cookTime: '15 m',
    websites: [
        { label: 'Kolo Mee', link: 'https://tasteasianfood.com/kolo-mee-recipe/' }
    ],
    separated: true,
    ingredients: [
        { ...VEGETABLE_OIL, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...GROUND_PORK, amount: 6, unit: UNITS.OUNCE, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 2, unit: UNITS.TEASPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...DARK_SOY_SAUCE, amount: 1, unit: UNITS.TEASPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...OYSTER_SAUCE, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...SESAME_OIL, amount: 1 / 4, unit: UNITS.TEASPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },
        { ...WHITE_PEPPER, amount: 1 / 4, unit: UNITS.TEASPOON, additionalDetails: '', section: MINCED_MEAT_SECTION },

        { ...CHOW_MEIN_NOODLES, amount: 8, unit: UNITS.OUNCE, additionalDetails: '', section: NOODLE_SECTION },
        // { ...CHAR_SIU, amount: '', unit: '', additionalDetails: '', section: NOODLE_SECTION },
        { ...BABY_BOK_CHOY, amount: 2, unit: UNITS.STALK, additionalDetails: '', section: BOK_CHOY_SECTION },

        { ...LIGHT_SOY_SAUCE, amount: 3 / 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...OYSTER_SAUCE, amount: 1 / 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...ONION_POWDER, amount: 2, unit: UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },

        { ...GREEN_ONIONS, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...FRIED_SHALLOTS, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GARLIC, amount: 1, unit: UNITS.TABLESPOON, additionalDetails: 'browned and minced', section: SECTIONS.TOPPINGS },
        { ...THAI_CHILI_PEPPERS, amount: '', unit: '', additionalDetails: 'sliced', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
        { name: 'pot' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat oil in a wok.', type: COOK_MINCED_MEAT },
        { step: 'Add the "Minced Meat" section ingredients. Stir fry until browned.', type: COOK_MINCED_MEAT },
        { step: 'Set aside.', type: COOK_MINCED_MEAT },

        { step: 'Cook the chow mein noodles according to package instructions. As it loosens and is almost cooked, remove the noodles and place it in a cold water bath.', type: COOK_NOODLES },
        { step: 'Re-add the cooled noodles back to the boiling water until it is cooked.', type: COOK_NOODLES },
        { step: 'Drain. Set the noodles on a plate.', type: COOK_NOODLES },

        { step: 'Over medium-high heat, boil a pot of water.', type: COOK_BOK_CHOY },
        { step: 'Add bok choy. Cook until tender (about 1 to 2 minutes).', type: COOK_BOK_CHOY },
        { step: 'Drain. Set aside.', type: COOK_BOK_CHOY },

        { step: 'To the plate of noodles, add the "Sauce" section ingredients. Mix.', type: ASSEMBLE_DISH },
        { step: 'Top the dish with the minced meat, bok choy and any other preferred toppings.', type: ASSEMBLE_DISH },

        { step: 'Enjoy one of my favorite noodle dishes from where a piece of my heart is.', type: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'Fresh egg noodles is preferred but you can use dried noodles.' }
    ]
};