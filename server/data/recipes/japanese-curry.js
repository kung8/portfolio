const curry1 = '../assets/Products/japanese-curry-1.jpeg';
const curry2 = '../assets/Products/japanese-curry-2.jpeg';
const curry3 = '../assets/Products/japanese-curry-3.jpeg';
const curry4 = '../assets/Products/japanese-curry-4.jpeg';
const curry5 = '../assets/Products/japanese-curry-5.jpeg';
const curry6 = '../assets/Products/japanese-curry-6.jpeg';
const curry7 = '../assets/Products/japanese-curry-7.jpeg';
const curry8 = '../assets/Products/japanese-curry-8.jpeg';
const curry9 = '../assets/Products/japanese-curry-9.jpeg';
const curry10 = '../assets/Products/japanese-curry-10.jpeg';
const curry11 = '../assets/Products/japanese-curry-11.jpeg';
const curry12 = '../assets/Products/japanese-curry-12.jpeg';
const curry13 = '../assets/Products/japanese-curry-13.jpeg';
const curry14 = '../assets/Products/japanese-curry-14.jpeg';
const curry15 = '../assets/Products/japanese-curry-15.jpeg';

const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, PROTEIN, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { APPLE, BAMBOO_SKEWERS, BLACK_PEPPER, BONELESS_AND_SKINLESS_CHICKEN_THIGH, CARROT, CHICKEN_BROTH, GARLIC, GINGER, HONEY, JAPANESE_CURRY_MIX, KETCHUP, LADLE, LARGE_POT, LIGHT_SOY_SAUCE, STOVE, STRAINER, VEGETABLE_OIL, YELLOW_ONION, YUKON_GOLD_POTATO } = require('./ingredients');

const PREP_VEGGIES = 'Prep Veggies';
const PREP_CHICKEN = 'Prep Chicken';
const COOK_CURRY = 'Cook Curry';

module.exports = {
    cardName: 'Japanese Curry',
    name: 'Japanese Curry',
    img: curry14,
    recipeAuthors: ['Namiko Hirasawa Chen'],
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.JAPANESE, GENRES.ASIAN],
    method: [METHODS.SIMMER],
    protein: [PROTEIN.CHICKEN],
    type: [TYPES.CURRY],
    yields: { amount: 8, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 50, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Japanese Chicken Curry', link: 'https://www.justonecookbook.com/simple-chicken-curry/' }
    ],
    separated: true,
    ingredients: [
        { ...YELLOW_ONION, amount: 2, unit: INGREDIENT_UNITS.LARGE, additionalDetails: 'sliced', section: SECTIONS.MAIN },
        { ...CARROT, amount: 2, unit: '', additionalDetails: 'rolling wedges', section: SECTIONS.MAIN },
        { ...YUKON_GOLD_POTATO, amount: 3, unit: '', additionalDetails: 'quartered', section: SECTIONS.MAIN },
        { ...GINGER, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'grated', section: SECTIONS.MAIN },
        { ...GARLIC, amount: 2, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: SECTIONS.MAIN },
        { ...APPLE, amount: 1 / 2, unit: '', additionalDetails: 'peeled, cored, quartered, and grated', section: SECTIONS.MAIN },
        { ...BONELESS_AND_SKINLESS_CHICKEN_THIGH, amount: 3 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut diagonally into bite size', section: SECTIONS.MAIN },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.MAIN },
        { ...VEGETABLE_OIL, amount: 3 / 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...CHICKEN_BROTH, amount: 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...HONEY, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...LIGHT_SOY_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...KETCHUP, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SAUCE },
        { ...JAPANESE_CURRY_MIX, amount: 1, unit: INGREDIENT_UNITS.PACKAGE, additionalDetails: '', section: SECTIONS.SAUCE },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        LARGE_POT,
        STRAINER,
        BAMBOO_SKEWERS,
        LADLE,
    ],
    directions: [
        { step: 'Prep the vegetables, chicken and aromatics.', section: PREP_VEGGIES, img: curry2 },
        { step: 'Season the sliced chicken with black pepper.', section: PREP_CHICKEN, img: curry1 },
        { step: 'Over medium heat, add vegetable oil to a large pot.', section: COOK_CURRY },
        { step: 'Add onions. Saute and stir occasionally until translucent, golden and tender (about 5 minutes). Caramelizing the onions adds flavor.', section: COOK_CURRY, img: curry3 },
        { step: 'Add garlic and ginger. Mix.', section: COOK_CURRY, img: curry4 },
        { step: 'Add chicken. Cook and stir often until no longer pink. Reduce heat to medium-low temporarily if the onions are too brown.', section: COOK_CURRY, img: [curry5, curry6] },
        { step: 'Add chicken broth.', section: COOK_CURRY, img: curry7 },
        { step: 'Add apple, honey, soy sauce and ketchup. Mix.', section: COOK_CURRY, img: curry8 },
        { step: 'Add carrots and potatoes.', section: COOK_CURRY, img: curry9 },
        { step: 'Smooth out the ingredients so the broth barely covers ingredients. More liquid will be released from the meat and vegetables.', section: COOK_CURRY },
        { step: 'Reduce heat to medium-low heat and cover with a lid. Let it simmer for 15 minutes.', section: COOK_CURRY, img: curry10 },
        { step: 'Once boiling, skim the scum and foams off the surface using a fine-mesh strainer.', section: COOK_CURRY },
        { step: 'Cook covered until a skewer can go through the carrots and potatoes. Turn off heat.', section: COOK_CURRY },
        { step: 'In a ladle of broth, add 1 to 2 cubes of the Japanese curry mix. Stir within the ladle to help it dissolve then mix it into the pot.', section: COOK_CURRY, img: [curry11, curry12] },
        { step: 'Continue this process with the remaining cubes. It should be about 1 cube per person (so 8 in total for this recipe).', section: COOK_CURRY },
        { step: 'Over medium-low heat, simmer uncovered while stirring often until the curry becomes thick (about 5 to 10 minutes). Thin curry out with water if needed. When stirring, be sure to scrape the bottom to prevent burning.', section: COOK_CURRY, img: curry13 },
        { step: 'Enjoy this curry over Japanese rice.', section: SECTIONS.SERVE, img: curry15 },
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