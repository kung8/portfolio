const soup1 = '../assets/Products/broccoli-cheddar-soup-1.jpeg';
const soup2 = '../assets/Products/broccoli-cheddar-soup-2.jpeg';
const soup3 = '../assets/Products/broccoli-cheddar-soup-3.jpeg';
const soup4 = '../assets/Products/broccoli-cheddar-soup-4.jpeg';
const soup5 = '../assets/Products/broccoli-cheddar-soup-5.jpeg';
const soup6 = '../assets/Products/broccoli-cheddar-soup-6.jpeg';
const soup7 = '../assets/Products/broccoli-cheddar-soup-7.jpeg';

const { ALLERGIES, CATEGORIES, DIET, GENRES, INGREDIENT_UNITS, METHODS, REHEAT_METHODS, SECTIONS, STORAGE_CONTAINER, STORAGE_DURATION_UNIT, STORAGE_LOCATION, TIME_UNITS, TYPES, YIELD_UNITS } = require('./constants');
const {
    ALL_PURPOSE_FLOUR,
    BACON_BITS,
    BLACK_PEPPER,
    BREAD_BOWLS,
    BROCCOLI,
    CARROT,
    CHEDDAR_CHEESE,
    CHICKEN_BROTH,
    GREEN_ONION,
    HALF_AND_HALF,
    NUTMEG,
    SALT,
    SAUCEPAN,
    SOUR_CREAM,
    SPATULA,
    STOVE,
    UNSALTED_BUTTER,
    YELLOW_ONION,
} = require('./ingredients');

module.exports = {
    cardName: 'Broccoli Cheddar Soup',
    name: 'Broccoli Cheddar Soup',
    img: soup6,
    recipeAuthors: ['Christy Denney'],
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SLOW_COOK],
    type: [TYPES.BREAD, TYPES.SOUP],
    allergies: [ALLERGIES.DAIRY, ALLERGIES.GLUTEN, ALLERGIES.WHEAT],
    diet: [DIET.NO_BEEF, DIET.NO_LAMB, DIET.NO_SHELLFISH],
    yields: { amount: 6, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 10, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 25, unit: TIME_UNITS.MINUTE },
    separated: true,
    websites: [
        { label: 'Panera Broccoli Cheese Soup', link: 'https://www.the-girl-who-ate-everything.com/panera-broccoli-cheese-soup/' }
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SOUP },
        { ...YELLOW_ONION, amount: 1 / 2, unit: INGREDIENT_UNITS.MEDIUM, additionalDetails: 'diced', section: SECTIONS.SOUP },
        { ...ALL_PURPOSE_FLOUR, amount: 1 / 4, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SOUP },
        { ...HALF_AND_HALF, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SOUP },
        { ...CHICKEN_BROTH, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: SECTIONS.SOUP },
        { ...BROCCOLI, amount: 2, unit: INGREDIENT_UNITS.HEAD, additionalDetails: 'chopped', section: SECTIONS.SOUP },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'matchstick', section: SECTIONS.SOUP },
        { ...NUTMEG, amount: 1 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: SECTIONS.SOUP },
        { ...CHEDDAR_CHEESE, amount: 8, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: SECTIONS.SOUP },
        { ...SALT, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SOUP },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: SECTIONS.SOUP },
        { ...BREAD_BOWLS, amount: 6, unit: '', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SOUR_CREAM, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONION, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEDDAR_CHEESE, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BACON_BITS, amount: '', unit: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        STOVE,
    ],
    supplies: [
        { ...SAUCEPAN, additionalDetails: 'large' },
        SPATULA,
    ],
    directions: [
        { step: 'Over medium heat, melt butter.', section: SECTIONS.SOUP },
        { step: 'Sauté onions in butter until soft.', section: SECTIONS.SOUP, img: soup1 },
        { step: 'Sprinkle flour over mixture.', section: SECTIONS.SOUP },
        { step: 'Stir for 1 to 2 minutes.', section: SECTIONS.SOUP },
        { step: 'Stir in half and half and broth.', section: SECTIONS.SOUP, img: soup2 },
        { step: 'Bring to a boil and reduce to a low heat.', section: SECTIONS.SOUP },
        { step: 'Add broccoli and carrots and cook for 20 to 25 minutes.', section: SECTIONS.SOUP, img: [soup3, soup4] },
        { step: 'Add salt, pepper, and nutmeg as desired.', section: SECTIONS.SOUP },
        { step: 'Optionally blend the soup if you would like a smoother texture.', section: SECTIONS.SOUP },
        { step: 'Eat this in bread bowls or just serve with bread. Top with cheese and your favorite toppings.', section: SECTIONS.SERVE, img: [soup5, soup7] },
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
            method: REHEAT_METHODS.SIMMER,
            instruction: 'Over medium-low heat, reheat in a saucepan until heated through (about 5 to 10 minutes). Stir frequently.',
        },
    ],
    mealPrep: true,
};