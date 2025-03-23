const cookedVeggies = '../assets/Products/pepper-steak-stir-fry-cooked-veggies.jpeg';
const fragrantMixed2 = '../assets/Products/pepper-steak-stir-fry-fragrant-mixed-in-pan-2.jpeg';
const mixed5 = '../assets/Products/pepper-steak-stir-fry-mixed-5.jpeg';
const mixed6 = '../assets/Products/pepper-steak-stir-fry-mixed-6.jpeg';
const mixed7 = '../assets/Products/pepper-steak-stir-fry-mixed-7.jpeg';
const plated3 = '../assets/Products/pepper-steak-stir-fry-plated-3.jpeg';
const pan3 = '../assets/Products/pepper-steak-stir-fry-steak-in-pan-3.jpeg';
const pan4 = '../assets/Products/pepper-steak-stir-fry-steak-in-pan-4.jpeg';
const veggiesPan = '../assets/Products/pepper-steak-stir-fry-veggies-in-pan.jpeg';

const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN, UNITS, YIELD_UNITS } = require("./constants");
const {
    BEEF,
    RED_BELL_PEPPERS,
    YELLOW_ONION,
    GARLIC,
    LIGHT_SOY_SAUCE,
    WARM_WATER,
    SALT,
    BLACK_PEPPER,
    VEGETABLE_OIL,
    GREEN_BELL_PEPPERS,
    GINGER,
    WHITE_SUGAR,
    CORNSTARCH,
} = require('./ingredients');

module.exports = {
    cardName: 'Pepper Steak Stir Fry',
    name: 'Pepper Steak Stir Fry',
    img: mixed6,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.RICE],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: '10 m',
    cookTime: '25 m',
    separated: true,
    websites: [
        { label: 'Pepper Steak Stir Fry', link: 'https://www.dinneratthezoo.com/pepper-steak-stir-fry/' }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: 2, unit: UNITS.TABLESPOON, additionalDetails: 'divided', section: SECTIONS.MAIN },
        { ...RED_BELL_PEPPERS, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...GREEN_BELL_PEPPERS, amount: 1, unit: '', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...YELLOW_ONION, amount: 1, unit: UNITS.MEDIUM, additionalDetails: 'sliced', section: SECTIONS.MAIN },

        { ...BEEF, amount: 3 / 2, unit: UNITS.POUND, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },

        { ...GARLIC, amount: 2, unit: UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...GINGER, amount: 1, unit: UNITS.TEASPOON, additionalDetails: 'minced', section: SECTIONS.MAIN },

        { ...LIGHT_SOY_SAUCE, amount: 1 / 4, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 3 / 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CORNSTARCH, amount: 3 / 2, unit: UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WARM_WATER, amount: 1 / 2, unit: UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat 1 Tbsp of vegetable oil in a wok.', type: SECTIONS.MAIN },
        { step: 'Add peppers and onion. Cook until tender (about 3 to 4 minutes).', type: SECTIONS.MAIN, img: veggiesPan },
        { step: 'Remove from wok and set aside.', type: SECTIONS.MAIN, img: cookedVeggies },
        { step: 'Increase the heat to high. Add 1 Tbsp of vegetable oil to the wok.', type: SECTIONS.MAIN },
        { step: 'Add the beef to the wok and salt and pepper.', type: SECTIONS.MAIN, img: pan3 },
        { step: 'Cook until lightly browned (about 5 to 6 minutes).', type: SECTIONS.MAIN, img: pan4 },
        { step: 'Add garlic and ginger. Cook for 30 seconds.', type: SECTIONS.MAIN, img: fragrantMixed2 },
        { step: 'Re-add the veggies and mix.', type: SECTIONS.MAIN, img: mixed5 },
        { step: 'In a small bowl, mix together the soy sauce, sugar, cornstarch, and water.', type: SECTIONS.MAIN },
        { step: 'Pour the sauce mixture into the wok and bring to a simmer. Cook until sauce thickens (about 2 to 3 minutes).', type: SECTIONS.MAIN, img: mixed7 },
        { step: 'Serve with rice and enjoy this simple home cooked meal.', type: SECTIONS.MAIN, img: plated3 },
    ]
};