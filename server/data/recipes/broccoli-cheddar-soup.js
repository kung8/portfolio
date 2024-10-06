const bowl1 = '../assets/Products/broccoli-cheddar-soup-bread-bowl-1.jpeg';
const bowl2 = '../assets/Products/broccoli-cheddar-soup-bread-bowl-2.jpeg';
const broccoliCarrots = '../assets/Products/broccoli-cheddar-soup-broccoli-and-carrots.jpeg';
const broccoli = '../assets/Products/broccoli-cheddar-soup-broccoli.jpeg';
const broth = '../assets/Products/broccoli-cheddar-soup-broth.jpeg';
const butter = '../assets/Products/broccoli-cheddar-soup-butter.jpeg';
const zoomed = '../assets/Products/broccoli-cheddar-soup-combined-zoomed.jpeg';
const combined = '../assets/Products/broccoli-cheddar-soup-combined.jpeg';
const half = '../assets/Products/broccoli-cheddar-soup-half-and-half.jpeg';
const hollowed = '../assets/Products/broccoli-cheddar-soup-hollowed-bread-bowl.jpeg';
const melting = '../assets/Products/broccoli-cheddar-soup-melting-butter.jpeg';
const onions = '../assets/Products/broccoli-cheddar-soup-onions.jpeg';
const sauteed = '../assets/Products/broccoli-cheddar-soup-sauteed-onion.jpeg';
const simmering1 = '../assets/Products/broccoli-cheddar-soup-simmering-zoomed-1.jpeg';
const simmering2 = '../assets/Products/broccoli-cheddar-soup-simmering-zoomed-2.jpeg';
const baked = '../assets/Products/carrot-cake-baked-bread-bowls.jpeg';
const dough = '../assets/Products/carrot-cake-baked-bread-bowl-dough.jpeg';
const plated = '../assets/Products/carrot-cake-baked-plated-bread-bowl.jpeg';
const { CATEGORIES, SECTIONS, GENRES, TYPES, METHODS } = require('./constants');
const {
    UNSALTED_BUTTER,
    MEDIUM_YELLOW_ONION,
    ALL_PURPOSE_FLOUR,
    CHICKEN_BROTH,
    BROCCOLI,
    NUTMEG,
    CHEDDAR_CHEESE,
    SALT,
    BLACK_PEPPER,
    SOUR_CREAM,
    GREEN_ONIONS,
    BACON_BITS,
    HALF_AND_HALF,
    CARROTS,
    BREAD_BOWLS,
} = require('./ingredients');

module.exports = {
    cardName: 'Broccoli Cheddar Soup',
    name: 'Broccoli Cheddar Soup',
    img: simmering2,
    available: true,
    category: [CATEGORIES.LUNCH, CATEGORIES.DINNER],
    genre: [GENRES.AMERICAN],
    method: [METHODS.SLOW_COOK],
    type: [TYPES.BREAD, TYPES.SOUP],
    yields: '6 servings',
    prepTime: '10 m',
    cookTime: '25 m',
    separated: true,
    websites: [
        'https://www.the-girl-who-ate-everything.com/panera-broccoli-cheese-soup/'
    ],
    ingredients: [
        { ...UNSALTED_BUTTER, amount: '1/4 c', additionalDetails: '', section: SECTIONS.SOUP },
        { ...MEDIUM_YELLOW_ONION, amount: '1/2', additionalDetails: 'diced', section: SECTIONS.SOUP },
        { ...ALL_PURPOSE_FLOUR, amount: '1/4 c', additionalDetails: '', section: SECTIONS.SOUP },
        { ...HALF_AND_HALF, amount: '2 c', additionalDetails: '', section: SECTIONS.SOUP },
        { ...CHICKEN_BROTH, amount: '2 c', additionalDetails: '', section: SECTIONS.SOUP },
        { ...BROCCOLI, amount: '2 heads of', additionalDetails: 'chopped', section: SECTIONS.SOUP },
        { ...CARROTS, amount: '1 c', additionalDetails: 'matchstick', section: SECTIONS.SOUP },
        { ...NUTMEG, amount: '1/4 tsp', additionalDetails: '', section: SECTIONS.SOUP },
        { ...CHEDDAR_CHEESE, amount: '8 oz', additionalDetails: '', section: SECTIONS.SOUP },
        { ...SALT, amount: '', additionalDetails: 'to taste', section: SECTIONS.SOUP },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: SECTIONS.SOUP },
        { ...BREAD_BOWLS, amount: '6', additionalDetails: '', section: SECTIONS.MAIN },
        { ...SOUR_CREAM, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...GREEN_ONIONS, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...CHEDDAR_CHEESE, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
        { ...BACON_BITS, amount: '', additionalDetails: '', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'large saucepan' },
        { name: 'spatula' },
    ],
    directions: [
        { step: 'Over medium heat, melt butter.', type: SECTIONS.SOUP, img: [butter, melting] },
        { step: 'Sauté onions in butter until soft.', type: SECTIONS.SOUP, img: [onions, sauteed] },
        { step: 'Sprinkle flour over mixture.', type: SECTIONS.SOUP },
        { step: 'Stir for 1 to 2 minutes.', type: SECTIONS.SOUP },
        { step: 'Stir in half and half and broth.', type: SECTIONS.SOUP, img: [broth, half] },
        { step: 'Bring to a boil and reduce to a low heat.', type: SECTIONS.SOUP },
        { step: 'Add broccoli and carrots and cook for 20 to 25 minutes.', type: SECTIONS.SOUP, img: [broccoliCarrots, broccoli, combined, zoomed] },
        { step: 'Add salt, pepper, and nutmeg as desired.', type: SECTIONS.SOUP },
        { step: 'Optionally blend the soup if you would like a smoother texture.', type: SECTIONS.SOUP },
        { step: 'Eat this in bread bowls or just serve with bread. Top with cheese and your favorite toppings.', type: SECTIONS.SERVE, img: [simmering1, dough, baked, plated, hollowed, bowl1, bowl2] },
    ]
};