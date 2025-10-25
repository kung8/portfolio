const choy1 = '../assets/Products/choy-sum-with-garlic-sauce-1.jpeg';
const choy2 = '../assets/Products/choy-sum-with-garlic-sauce-2.jpeg';
const choy3 = '../assets/Products/choy-sum-with-garlic-sauce-3.jpeg';
const choy4 = '../assets/Products/choy-sum-with-garlic-sauce-4.jpeg';
const choy5 = '../assets/Products/choy-sum-with-garlic-sauce-5.jpeg';
const choy6 = '../assets/Products/choy-sum-with-garlic-sauce-6.jpeg';
const choy7 = '../assets/Products/choy-sum-with-garlic-sauce-7.jpeg';
const choy8 = '../assets/Products/choy-sum-with-garlic-sauce-8.jpeg';
const choy9 = '../assets/Products/choy-sum-with-garlic-sauce-9.jpeg';
const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { CHOY_SUM, COLANDER, GARLIC, LARGE_POT, LIGHT_SOY_SAUCE, MIXING_BOWL, OYSTER_SAUCE, PAPER_TOWELS, SALT, SAUCEPAN, SMALL_BOWL, STOVE, VEGETABLE_OIL, WHITE_SUGAR } = require('./ingredients');

const CHOY_SUM_SECTION = 'Choy Sum';
const GARLIC_SECTION = 'Garlic';
const COOK_CHOY_SUM = 'Cook Choy Sum';

module.exports = {
    cardName: 'Choy Sum',
    name: 'Choy Sum with Garlic Sauce',
    img: choy8,
    available: true,
    recommended: false,
    category: [CATEGORIES.SIDE_DISH],
    genre: [GENRES.CHINESE, GENRES.ASIAN],
    method: [METHODS.STIR_FRY],
    type: [TYPES.VEGETABLE],
    allergies: [],
    diet: [DIET.DAIRY_FREE, DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_PORK, DIET.NO_RED_MEAT, DIET.NO_SHELLFISH, DIET.PLANT_BASED, DIET.VEGAN, DIET.VEGETARIAN],
    yields: { amount: 2, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Choy Sum with Garlic Sauce', 
            link: 'https://omnivorescookbook.com/choy-sum-with-garlic-sauce/',
            authors: ['Maggie Zhu'],
            finder: 'Kevin Ung',
        }
    ],
    separated: true,
    ingredients: [
        { ...CHOY_SUM, amount: 1 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: CHOY_SUM_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: CHOY_SUM_SECTION },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CHOY_SUM_SECTION },
        { ...OYSTER_SAUCE, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...WHITE_SUGAR, amount: 1 / 8, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...VEGETABLE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: GARLIC_SECTION },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'chopped', section: GARLIC_SECTION },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        MIXING_BOWL,
        LARGE_POT,
        COLANDER,
        PAPER_TOWELS,
        SMALL_BOWL,
        SAUCEPAN,
    ],
    directions: [
        { step: 'In a mixing bowl, soak the choy sum in water for a few minutes.', section: COOK_CHOY_SUM, img: choy1 },
        { step: 'Run tap water over the choy sum to remove dirt.', section: COOK_CHOY_SUM },
        { step: 'Over medium-high heat, bring a pot of water to a boil.', section: COOK_CHOY_SUM },
        { step: 'Add salt and oil to the pot.', section: COOK_CHOY_SUM },
        { step: 'Add choy sum with stem side down. Cook the stem for 30 seconds to 1 minute.', section: COOK_CHOY_SUM, img: choy2 },
        { step: 'Submerge the leaves into the water. Cook until it begins to become tender (about 1 to 2 minutes).', section: COOK_CHOY_SUM },
        { step: 'Drain and rinse under tap water to stop the cooking process.', section: COOK_CHOY_SUM, img: choy3 },
        { step: 'Drain and dry with paper towels.', section: COOK_CHOY_SUM, img: choy4 },
        { step: 'Transfer to a plate.', section: COOK_CHOY_SUM },

        { step: `In a small bowl, combine the "${SECTIONS.SAUCE}" section ingredients.`, section: SECTIONS.COOK_SAUCE },
        { step: 'Over medium heat, heat oil in a saucepan.', section: SECTIONS.COOK_SAUCE },
        { step: 'Add garlic. Stir and cook until fragrant (about 30 seconds).', section: SECTIONS.COOK_SAUCE, img: choy5 },
        { step: 'Add sauce. Cook until the sauce slightly thickens (about 30 seconds to 1 minute).', section: SECTIONS.COOK_SAUCE, img: choy6 },
        { step: 'Pour sauce over choy sum immediately.', section: SECTIONS.COOK_SAUCE, img: choy7 },

        { step: 'Enjoy this fresh tasting dish warm!', section: SECTIONS.SERVE, img: choy9 },
    ],
    notes: [
        { note: 'I liked this dish but I think it ended up being colder than I would have liked. Next time I would stir fry it for 20 to 30 seconds after the sauce has thickened. If that works, I would consider recommending it for its freshness and simplicity.' }
    ],
    store: [
        {
            duration: { amount: 3, unit: STORAGE_DURATION_UNIT.DAY },
            location: STORAGE_LOCATION.FRIDGE,
            container: STORAGE_CONTAINER.AIRTIGHT,
        },
    ],
    reheat: [
        {
            method: REHEAT_METHODS.MICROWAVE,
            instruction: 'Microwave for 30 seconds to 1 minute, stirring halfway through.',
        },
    ],
    mealPrep: true,
};