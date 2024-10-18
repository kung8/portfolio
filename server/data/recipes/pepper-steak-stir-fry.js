const pepperSteak = '../assets/Products/pepper-steak.jpeg';
const { CATEGORIES, GENRES, SECTIONS, TYPES, METHODS, PROTEIN } = require("./constants");
const {
    BEEF,
    RED_BELL_PEPPERS,
    MEDIUM_YELLOW_ONION,
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
    img: pepperSteak,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.ASIAN, GENRES.CHINESE],
    method: [METHODS.STIR_FRY],
    protein: [PROTEIN.BEEF],
    type: [TYPES.RICE],
    yields: '4 servings',
    prepTime: '10 m',
    cookTime: '25 m',
    separated: true,
    websites: [
        { label: 'Pepper Steak Stir Fry', link: 'https://www.dinneratthezoo.com/pepper-steak-stir-fry/' }
    ],
    ingredients: [
        { ...VEGETABLE_OIL, amount: '2 Tbsp', additionalDetails: 'divided', section: SECTIONS.MAIN },
        { ...RED_BELL_PEPPERS, amount: '1', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...GREEN_BELL_PEPPERS, amount: '1', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...MEDIUM_YELLOW_ONION, amount: '1', additionalDetails: 'sliced', section: SECTIONS.MAIN },

        { ...BEEF, amount: '1.5 lb', additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },

        { ...GARLIC, amount: '2 tsp', additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...GINGER, amount: '1 tsp', additionalDetails: 'minced', section: SECTIONS.MAIN },

        { ...LIGHT_SOY_SAUCE, amount: '1/4 c', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: '1 1/2 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CORNSTARCH, amount: '1 1/2 Tbsp', additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WARM_WATER, amount: '1/2 c', additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'wok' },
    ],
    directions: [
        { step: 'Over medium-high heat, heat 1 Tbsp of vegetable oil in a wok.', type: SECTIONS.MAIN },
        { step: 'Add peppers and onion. Cook until tender (about 3 to 4 minutes).', type: SECTIONS.MAIN },
        { step: 'Remove from wok and set aside.', type: SECTIONS.MAIN },
        { step: 'Increase the heat to high. Add 1 Tbsp of vegetable oil to the wok.', type: SECTIONS.MAIN },
        { step: 'Add the beef to the wok and salt and pepper.', type: SECTIONS.MAIN },
        { step: 'Cook until lightly browned (about 5 to 6 minutes).', type: SECTIONS.MAIN },
        { step: 'Add garlic and ginger. Cook for 30 seconds.', type: SECTIONS.MAIN },
        { step: 'Re-add the veggies and mix.', type: SECTIONS.MAIN },
        { step: 'In a small bowl, mix together the soy sauce, sugar, cornstarch, and water.', type: SECTIONS.MAIN },
        { step: 'Pour the sauce mixture into the wok and bring to a simmer. Cook until sauce thickens (about 2 to 3 minutes).', type: SECTIONS.MAIN },
        { step: 'Serve with rice and enjoy this simple home cooked meal.', type: SECTIONS.MAIN },
    ]
};