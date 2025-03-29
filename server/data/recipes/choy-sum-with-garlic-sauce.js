// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { CHOY_SUM, OYSTER_SAUCE, LIGHT_SOY_SAUCE, WHITE_SUGAR, GARLIC, SALT, VEGETABLE_OIL } = require('./ingredients');

const CHOY_SUM_SECTION = 'Choy Sum';
const SAUCE_SECTION = 'Sauce';

const COOK_CHOY_SUM = 'Cook Choy Sum';
const COOK_SAUCE = 'Cook Sauce';

module.exports = {
    wip: true,
    cardName: 'Choy Sum',
    name: 'Choy Sum with Garlic Sauce',
    img: '',
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
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SAUCE_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: '', section: '' },
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
        { step: 'In a mixing bowl, soak the choy sum in water for a few minutes.', type: COOK_CHOY_SUM },
        { step: 'Run tap water over the choy sum to remove dirt.', type: COOK_CHOY_SUM },
        { step: 'Over medium-high heat, bring a pot of water to a boil.', type: COOK_CHOY_SUM },
        { step: 'Add salt and oil to the pot.', type: COOK_CHOY_SUM },
        { step: 'Add choy sum with stem side down. Cook the stem for 30 seconds to 1 minute.', type: COOK_CHOY_SUM },
        { step: 'Submerge the leaves into the water. Cook until it begins to become tender (about 1 to 2 minutes).', type: COOK_CHOY_SUM },
        { step: 'Drain and rinse under tap water to stop the cooking process.', type: COOK_CHOY_SUM },
        { step: 'Drain and dry with paper towels.', type: COOK_CHOY_SUM },
        { step: 'Transfer to a plate.', type: COOK_CHOY_SUM },
        { step: 'In a small bowl, combine the "Sauce" section ingredients.', type: COOK_SAUCE },
        { step: 'Over medium heat, heat oil in a saucepan.', type: COOK_SAUCE },
        { step: 'Add garlic. Stir and cook until fragrant (about 30 seconds).', type: COOK_SAUCE },
        { step: 'Add sauce. Cook until the sauce slightly thickens (about 30 seconds to 1 minute).', type: COOK_SAUCE },
        { step: 'Pour sauce over choy sum immediately.', type: COOK_SAUCE },
        { step: 'Enjoy this dish warm!', type: SECTIONS.SERVE },
    ]
};