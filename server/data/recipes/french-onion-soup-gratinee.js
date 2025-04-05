// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { UNSALTED_BUTTER, RED_ONION, SWEET_ONION, SALT, CHICKEN_BROTH, BEEF_BROTH, RED_WINE, WORCESTERSHIRE_SAUCE, PARSLEY, FRESH_THYME, BAY_LEAF, BALSAMIC_VINEGAR, BLACK_PEPPER, FRENCH_BREAD, GRUYERE_CHEESE, ASIAGO_CHEESE, PAPRIKA } = require('./ingredients');

const CARAMELIZED_ONIONS_SECTION = 'Caramelized Onions';
const HERB_BUNDLE = 'Herb Bundle';
const BROTH_SECTION = 'Broth';

const CARAMELIZE_ONIONS = 'Caramelize Onions';
const BUNDLE_HERBS = 'Bundle Herbs';
const MAKE_SOUP = 'Make Soup';
const TOAST_BREAD = 'Toast Bread';
const BAKE_SOUP = 'Bake Soup';

module.exports = {
    wip: true,
    cardName: 'French Onion Soup',
    name: 'French Onion Soup Gratinee',
    img: '',
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER, CATEGORIES.SIDE_DISH],
    genre: [GENRES.FRENCH],
    method: [METHODS.BAKE, METHODS.SIMMER],
    protein: [],
    type: [TYPES.SOUP, TYPES.BREAD],
    yields: { amount: 4, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 1, unit: TIME_UNITS.HOUR },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'French Onion Soup Gratinee', link: 'https://www.allrecipes.com/recipe/91192/french-onion-soup-gratinee/' }
    ],
    separated: true,
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 4, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: CARAMELIZED_ONIONS_SECTION },
        { ...RED_ONION, amount: 2, unit: '', additionalDetails: 'sliced', section: CARAMELIZED_ONIONS_SECTION },
        { ...SWEET_ONION, amount: 2, unit: '', additionalDetails: 'sliced', section: CARAMELIZED_ONIONS_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: CARAMELIZED_ONIONS_SECTION },

        { ...PARSLEY, amount: 2, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', section: HERB_BUNDLE },
        { ...FRESH_THYME, amount: 1, unit: INGREDIENT_UNITS.SPRIG, additionalDetails: '', section: HERB_BUNDLE },
        { ...BAY_LEAF, amount: 1, unit: '', additionalDetails: '', section: HERB_BUNDLE },

        { ...CHICKEN_BROTH, amount: 48, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: BROTH_SECTION },
        { ...BEEF_BROTH, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: BROTH_SECTION },
        { ...RED_WINE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: BROTH_SECTION },
        { ...WORCESTERSHIRE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BROTH_SECTION },


        { ...BALSAMIC_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: '' },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: '' },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: '' },
        { ...FRENCH_BREAD, amount: 4, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: '' },
        { ...GRUYERE_CHEESE, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'room-temperature', section: '' },
        { ...ASIAGO_CHEESE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'room-temperature', section: '' },
        { ...PAPRIKA, amount: 4, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: '' },
    ],
    appliances: [
        { name: 'stove' },
        { name: 'oven' },
    ],
    supplies: [
        { name: 'large pot' },
        { name: 'kitchen twine' },
        { name: 'baking sheet' },
        { name: '' },
    ],
    directions: [
        { step: 'Over medium-high heat, melt butter in a large pot.', type: CARAMELIZE_ONIONS },
        { step: 'Add onions and salt. Cook and stir frequently until onions are caramelized (about 35 minutes).', type: CARAMELIZE_ONIONS },

        { step: 'Tie together the "Herb Bundle" section ingredients with kitchen twine.', type: BUNDLE_HERBS },

        { step: 'Add the bundled herbs and the "Broth" section ingredients.', type: MAKE_SOUP },
        { step: 'Lower to medium heat. Simmer and stir occasionally for 20 minutes.', type: MAKE_SOUP },
        { step: 'Lower to low heat. Remove the herb bundle.', type: MAKE_SOUP },
        { step: 'Add vinegar, salt and pepper. Stir and cover.', type: MAKE_SOUP },

        { step: 'Adjust the oven rack to about 6 inches from the top.', type: TOAST_BREAD },
        { step: 'Arrange bread on a baking sheet.', type: TOAST_BREAD },
        { step: 'Broil. Toasting both sides (about 3 minutes each side).', type: TOAST_BREAD },
        { step: 'Remove from the oven.', type: TOAST_BREAD },

        { step: 'Arrange 4 oven-safe bowls on a baking pan. Fill bowls up to 2/3 with soup.', type: BAKE_SOUP },
        { step: 'Top each bowl with toasted bread, 2 Gruyere cheese slices, 1/4 of Asiago cheese, and paprika.', type: BAKE_SOUP },
        { step: 'Broil until bubbly and golden brown (about 5 minutes).', type: BAKE_SOUP },

        { step: 'Enjoy this on a brisk Autumn day.', type: SECTIONS.SERVE },
    ]
};