const choy1 = '../assets/Products/choy-sum-with-garlic-sauce-1.jpeg';
const choy2 = '../assets/Products/choy-sum-with-garlic-sauce-2.jpeg';
const choy3 = '../assets/Products/choy-sum-with-garlic-sauce-3.jpeg';
const choy4 = '../assets/Products/choy-sum-with-garlic-sauce-4.jpeg';
const choy5 = '../assets/Products/choy-sum-with-garlic-sauce-5.jpeg';
const choy6 = '../assets/Products/choy-sum-with-garlic-sauce-6.jpeg';
const choy7 = '../assets/Products/choy-sum-with-garlic-sauce-7.jpeg';
const choy8 = '../assets/Products/choy-sum-with-garlic-sauce-8.jpeg';
const choy9 = '../assets/Products/choy-sum-with-garlic-sauce-9.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { CHOY_SUM, OYSTER_SAUCE, LIGHT_SOY_SAUCE, WHITE_SUGAR, GARLIC, SALT, VEGETABLE_OIL } = require('./ingredients');

const CHOY_SUM_SECTION = 'Choy Sum';
const SAUCE_SECTION = 'Sauce';
const GARLIC_SECTION = 'Garlic';

const COOK_CHOY_SUM = 'Cook Choy Sum';
const COOK_SAUCE = 'Cook Sauce';

module.exports = {
    cardName: 'Choy Sum',
    name: 'Choy Sum with Garlic Sauce',
    img: choy8,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    type: [TYPES.VEGETABLE],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Choy Sum with Garlic Sauce', link: 'https://omnivorescookbook.com/choy-sum-with-garlic-sauce/' }
    ],
    separated: true,
    ingredients: [
        { ...CHOY_SUM, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: CHOY_SUM_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: CHOY_SUM_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHOY_SUM_SECTION },
        { ...OYSTER_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...WHITE_SUGAR, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: GARLIC_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'chopped', section: GARLIC_SECTION },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'mixing bowl' },
        { name: 'large pot' },
        { name: 'colander' },
        { name: 'paper towels' },
        { name: 'small bowl' },
        { name: 'saucepan' },
    ],
    directions: [
        { step: 'In a mixing bowl, soak the choy sum in water for a few minutes.', type: COOK_CHOY_SUM, img: choy1 },
        { step: 'Run tap water over the choy sum to remove dirt.', type: COOK_CHOY_SUM },
        { step: 'Over medium-high heat, bring a pot of water to a boil.', type: COOK_CHOY_SUM },
        { step: 'Add salt and oil to the pot.', type: COOK_CHOY_SUM },
        { step: 'Add choy sum with stem side down. Cook the stem for 30 seconds to 1 minute.', type: COOK_CHOY_SUM, img: choy2 },
        { step: 'Submerge the leaves into the water. Cook until it begins to become tender (about 1 to 2 minutes).', type: COOK_CHOY_SUM },
        { step: 'Drain and rinse under tap water to stop the cooking process.', type: COOK_CHOY_SUM, img: choy3 },
        { step: 'Drain and dry with paper towels.', type: COOK_CHOY_SUM, img: choy4 },
        { step: 'Transfer to a plate.', type: COOK_CHOY_SUM },

        { step: 'In a small bowl, combine the "Sauce" section ingredients.', type: COOK_SAUCE },
        { step: 'Over medium heat, heat oil in a saucepan.', type: COOK_SAUCE },
        { step: 'Add garlic. Stir and cook until fragrant (about 30 seconds).', type: COOK_SAUCE, img: choy5 },
        { step: 'Add sauce. Cook until the sauce slightly thickens (about 30 seconds to 1 minute).', type: COOK_SAUCE, img: choy6 },
        { step: 'Pour sauce over choy sum immediately.', type: COOK_SAUCE, img: choy7 },

        { step: 'Enjoy this fresh tasting dish warm!', type: SECTIONS.SERVE, img: choy9 },
    ],
    notes: [
        { note: 'I liked this dish but I think it ended up being colder than I would have liked. Next time I would stir fry it for 20 to 30 seconds after the sauce has thickened. If that works, I would consider recommending it for its freshness and simplicity.' }
    ]
};