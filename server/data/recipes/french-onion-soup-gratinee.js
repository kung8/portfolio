// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS, STORAGE_DURATION_UNIT, STORAGE_LOCATION, STORAGE_CONTAINER, REHEAT_METHODS  } = require('./constants');
const { UNSALTED_BUTTER, RED_ONION, SWEET_ONION, SALT, CHICKEN_BROTH, BEEF_BROTH, RED_WINE, WORCESTERSHIRE_SAUCE, PARSLEY, FRESH_THYME, BAY_LEAF, BALSAMIC_VINEGAR, BLACK_PEPPER, FRENCH_BREAD, GRUYERE_CHEESE, ASIAGO_CHEESE, PAPRIKA } = require('./ingredients');

const CARAMELIZED_ONIONS_SECTION = 'Caramelized Onions';
const HERB_BUNDLE = 'Herb Bundle';
const BAKED_SECTION = 'Baked';

const CARAMELIZE_ONIONS = 'Caramelize Onions';
const BUNDLE_HERBS = 'Bundle Herbs';
const TOAST_BREAD = 'Toast Bread';

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

        { ...CHICKEN_BROTH, amount: 48, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.BROTH },
        { ...BEEF_BROTH, amount: 14, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.BROTH },
        { ...RED_WINE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.BROTH },
        { ...WORCESTERSHIRE_SAUCE, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.BROTH },


        { ...BALSAMIC_VINEGAR, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SEASONINGS },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SEASONINGS },
        { ...FRENCH_BREAD, amount: 4, unit: INGREDIENT_UNITS.SLICE, additionalDetails: '', section: BAKED_SECTION },
        { ...GRUYERE_CHEESE, amount: 8, unit: INGREDIENT_UNITS.SLICE, additionalDetails: 'room-temperature', section: BAKED_SECTION },
        { ...ASIAGO_CHEESE, amount: 1 / 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'room-temperature', section: BAKED_SECTION },
        { ...PAPRIKA, amount: 4, unit: INGREDIENT_UNITS.PINCH, additionalDetails: '', section: BAKED_SECTION },
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
        { step: 'Over medium-high heat, melt butter in a large pot.', section: CARAMELIZE_ONIONS },
        { step: 'Add onions and salt. Cook and stir frequently until onions are caramelized (about 35 minutes).', section: CARAMELIZE_ONIONS },

        { step: `Tie together the "${HERB_BUNDLE}" section ingredients with kitchen twine.`, section: BUNDLE_HERBS },

        { step: `Add the bundled herbs and the "${SECTIONS.BROTH}" section ingredients.`, section: SECTIONS.MAKE_SOUP },
        { step: 'Lower to medium heat. Simmer and stir occasionally for 20 minutes.', section: SECTIONS.MAKE_SOUP },
        { step: 'Lower to low heat. Remove the herb bundle.', section: SECTIONS.MAKE_SOUP },
        { step: 'Add vinegar, salt and pepper. Stir and cover.', section: SECTIONS.MAKE_SOUP },

        { step: 'Adjust the oven rack to about 6 inches from the top.', section: TOAST_BREAD },
        { step: 'Arrange bread on a baking sheet.', section: TOAST_BREAD },
        { step: 'Broil. Toasting both sides (about 3 minutes each side).', section: TOAST_BREAD },
        { step: 'Remove from the oven.', section: TOAST_BREAD },

        { step: 'Arrange 4 oven-safe bowls on a baking pan. Fill bowls up to 2/3 with soup.', section: SECTIONS.BAKE },
        { step: 'Top each bowl with toasted bread, 2 Gruyere cheese slices, 1/4 of Asiago cheese, and paprika.', section: SECTIONS.BAKE },
        { step: 'Broil until bubbly and golden brown (about 5 minutes).', section: SECTIONS.BAKE },

        { step: 'Enjoy this on a brisk Autumn day.', section: SECTIONS.SERVE },
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