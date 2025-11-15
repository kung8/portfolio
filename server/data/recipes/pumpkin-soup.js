// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const { BLACK_PEPPER, BLENDER, BUTTERNUT_SQUASH, CARROT, GARLIC, GINGER, LARGE_POT, PUMPKIN_PUREE, PUMPKIN_SEEDS, SALT, SMOKED_PAPRIKA, SOUR_CREAM, STOVE, TOMATO_PASTE, UNSALTED_BUTTER, VEGETABLE_BROTH, YELLOW_ONION } = require('./ingredients');

const OTHER_VEGGIES_SECTION = 'Other Veggies';
const SQUASH_SECTION = 'Squash';

module.exports = {
    wip: true,
    cardName: 'Pumpkin Soup',
    name: 'Pumpkin Soup',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SIMMER],
    type: [TYPES.SOUP],
    yields: { amount: 2, unit: YIELD_UNITS.QUART },
    prepTime: { amount: 15, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 30, unit: TIME_UNITS.MINUTE },
    waitTime: { amount: 0, unit: TIME_UNITS.MINUTE },
    websites: [
        { 
            label: 'Pumpkin Soup', 
            link: 'https://www.delish.com/cooking/recipe-ideas/a45025736/pumpkin-soup-recipe/',
            authors: ['Anna Painter'],
            finder: 'Kevin Ung', 
        }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: OTHER_VEGGIES_SECTION },
        { ...CARROT, amount: 2, unit: '', additionalDetails: 'thinly sliced', section: OTHER_VEGGIES_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: '', section: OTHER_VEGGIES_SECTION },
        { ...GARLIC, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: 'minced', section: OTHER_VEGGIES_SECTION },
        { ...GINGER, amount: 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: 'minced', section: OTHER_VEGGIES_SECTION },
        { ...SALT, amount: '', unit: '', additionalDetails: '', section: OTHER_VEGGIES_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: '', section: OTHER_VEGGIES_SECTION },

        { ...BUTTERNUT_SQUASH, amount: 12, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: 'peeled and 1/2" cubes', section: SQUASH_SECTION },

        { ...TOMATO_PASTE, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: SECTIONS.SOUP },
        { ...SMOKED_PAPRIKA, amount: 1 / 2, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SOUP },
        { ...PUMPKIN_PUREE, amount: 15, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SOUP },
        { ...VEGETABLE_BROTH, amount: 6, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SOUP },

        { ...SOUR_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...PUMPKIN_SEEDS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
        BLENDER,
    ],
    supplies: [
        LARGE_POT,
    ],
    directions: [
        { step: `Over medium heat, melt butter in a large pot.`, section: SECTIONS.MAKE_SOUP },
        { step: `Add the rest of the "${OTHER_VEGGIES_SECTION}" section ingredients.`, section: SECTIONS.MAKE_SOUP },
        { step: `Cover. Cook, stir occasionally, until veggies are tender (about 5 to 6 minutes).`, section: SECTIONS.MAKE_SOUP },
        { step: `Add squash. Cover and cook until barely tender (about 4 to 5 minutes). Stir occasionally.`, section: SECTIONS.MAKE_SOUP },
        { step: `Add tomato paste and paprika. Cook until the sauce becomes red (about 1 to 2 minutes).`, section: SECTIONS.MAKE_SOUP },
        { step: `Add pumpkin puree and broth.`, section: SECTIONS.MAKE_SOUP },
        { step: `Increase to high heat. Partially cover pot with lid. Bring to a boil.`, section: SECTIONS.MAKE_SOUP },
        { step: `Reduce to medium-low. Simmer until squash is tender (about 15 minutes). Stir occasionally.`, section: SECTIONS.MAKE_SOUP },
        { step: `Remove from heat.`, section: SECTIONS.MAKE_SOUP },
        { step: `Carefully blend the soup in batches. Adding additional broth if the soup is too thick.`, section: SECTIONS.MAKE_SOUP },
        { step: `Taste and add salt and pepper as needed.`, section: SECTIONS.MAKE_SOUP },
        { step: `Serve with sour cream and pumpkin seeds.`, section: SECTIONS.SERVE },
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