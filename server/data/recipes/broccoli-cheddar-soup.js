const bowl2 = '../assets/Products/broccoli-cheddar-soup-bread-bowl-2.jpeg';
const broccoli = '../assets/Products/broccoli-cheddar-soup-broccoli.jpeg';
const zoomed = '../assets/Products/broccoli-cheddar-soup-combined-zoomed.jpeg';
const half = '../assets/Products/broccoli-cheddar-soup-half-and-half.jpeg';
const sauteed = '../assets/Products/broccoli-cheddar-soup-sauteed-onion.jpeg';
const simmering1 = '../assets/Products/broccoli-cheddar-soup-simmering-zoomed-1.jpeg';
const simmering2 = '../assets/Products/broccoli-cheddar-soup-simmering-zoomed-2.jpeg';

const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS, INGREDIENT_UNITS, YIELD_UNITS , TIME_UNITS } = require('./constants');
const {
    UNSALTED_BUTTER,
    YELLOW_ONION,
    ALL_PURPOSE_FLOUR,
    CHICKEN_BROTH,
    BROCCOLI,
    NUTMEG,
    CHEDDAR_CHEESE,
    SALT,
    BLACK_PEPPER,
    SOUR_CREAM,
    GREEN_ONION,
    BACON_BITS,
    HALF_AND_HALF,
    CARROT,
    BREAD_BOWLS,
} = require('./ingredients');

module.exports = {
    cardName: 'Broccoli Cheddar Soup',
    name: 'Broccoli Cheddar Soup',
    img: simmering2,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.WESTERN, GENRES.AMERICAN],
    method: [METHODS.SLOW_COOK],
    type: [TYPES.BREAD, TYPES.SOUP],
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
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large saucepan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Over medium heat, melt butter.', section: SECTIONS.SOUP },
        { step: 'Sauté onions in butter until soft.', section: SECTIONS.SOUP, img: sauteed },
        { step: 'Sprinkle flour over mixture.', section: SECTIONS.SOUP },
        { step: 'Stir for 1 to 2 minutes.', section: SECTIONS.SOUP },
        { step: 'Stir in half and half and broth.', section: SECTIONS.SOUP, img: half },
        { step: 'Bring to a boil and reduce to a low heat.', section: SECTIONS.SOUP },
        { step: 'Add broccoli and carrots and cook for 20 to 25 minutes.', section: SECTIONS.SOUP, img: [broccoli, zoomed] },
        { step: 'Add salt, pepper, and nutmeg as desired.', section: SECTIONS.SOUP },
        { step: 'Optionally blend the soup if you would like a smoother texture.', section: SECTIONS.SOUP },
        { step: 'Eat this in bread bowls or just serve with bread. Top with cheese and your favorite toppings.', section: SECTIONS.SERVE, img: [simmering1, bowl2] },
    ]
};