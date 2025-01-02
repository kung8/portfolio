// const example = '../assets/Products/example.jpeg';
const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES } = require('./constants');
const { BEEF_CHUCK_ROAST, SALT, BLACK_PEPPER, OLIVE_OIL, GARLIC, MEDIUM_YELLOW_ONION, CARROTS, CELERY, CRUSHED_TOMATOES, TOMATO_PASTE, BEEF_BROTH, RED_WINE, WARM_WATER, THYME, BAY_LEAVES, SMALL_YELLOW_ONION, PAPPARDELLE_NOODLES, PARMESAN_CHEESE, PARSLEY } = require('./ingredients');

const BEEF_SECTION = 'Beef';
const RAGU_SECTION = 'Ragu';
const COOK_BEEF = 'Cook Beef';
const COOK_RAGU = 'Cook Ragu';
const COOK_PASTA = 'Cook Pasta';

module.exports = {
    wip: true,
    cardName: 'Beef Ragu',
    name: 'Beef Ragu',
    img: '',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.SIMMER],
    protein: [PROTEIN.BEEF],
    type: [TYPES.PASTA],
    yields: '5 servings',
    prepTime: '20 m',
    cookTime: '2 h 45 m',
    websites: [
        { label: 'Beef Ragu', link: 'https://www.recipetineats.com/slow-cooked-shredded-beef-ragu-pasta/' }
    ],
    separated: true,
    ingredients: [
        { ...BEEF_CHUCK_ROAST, amount: '2 1/2 lb', additionalDetails: 'cut into 4 pieces', section: BEEF_SECTION },
        { ...SALT, amount: '1 tsp', additionalDetails: '', section: BEEF_SECTION },
        { ...BLACK_PEPPER, amount: '', additionalDetails: 'to taste', section: BEEF_SECTION },
        { ...OLIVE_OIL, amount: '1 Tbsp', additionalDetails: '', section: BEEF_SECTION },

        { ...OLIVE_OIL, amount: '2 Tbsp', additionalDetails: '', section: RAGU_SECTION },
        { ...GARLIC, amount: '3 cloves', additionalDetails: 'minced', section: RAGU_SECTION },
        { ...SMALL_YELLOW_ONION, amount: '1', additionalDetails: 'diced', section: RAGU_SECTION },
        { ...CARROTS, amount: '1 c', additionalDetails: 'diced', section: RAGU_SECTION },
        { ...CELERY, amount: '1 c', additionalDetails: 'diced', section: RAGU_SECTION },
        { ...CRUSHED_TOMATOES, amount: '28 oz', additionalDetails: '', section: RAGU_SECTION },
        { ...TOMATO_PASTE, amount: '3 Tbsp', additionalDetails: '', section: RAGU_SECTION },
        { ...BEEF_BROTH, amount: '2 c', additionalDetails: '', section: RAGU_SECTION },
        { ...RED_WINE, amount: '1 c', additionalDetails: '', section: RAGU_SECTION },
        { ...WARM_WATER, amount: '1 1/2 c', additionalDetails: '', section: RAGU_SECTION },
        { ...THYME, amount: '3/4 tsp', additionalDetails: '', section: RAGU_SECTION },
        { ...BAY_LEAVES, amount: '3', additionalDetails: '', section: RAGU_SECTION },

        { ...PAPPARDELLE_NOODLES, amount: '1 lb', additionalDetails: '', section: SECTIONS.NOODLES },
        { ...PARMESAN_CHEESE, amount: '', additionalDetails: 'grated', section: SECTIONS.TOPPINGS },
        { ...PARSLEY, amount: '', additionalDetails: 'finely chopped', section: SECTIONS.TOPPINGS },
    ],
    appliances: [
        { name: 'stove' },
    ],
    supplies: [
        { name: 'paper towels' },
        { name: 'large pot' },
        { name: 'tongs' },
        { name: 'cutting board' },
        { name: 'forks' },
    ],
    directions: [
        { step: 'Pat beef dry with paper towels and season salt and pepper.', type: COOK_BEEF },
        { step: 'Over high heat, add olive oil to a large pot.', type: COOK_BEEF },
        { step: 'Add beef. Sear each side until browned (about 3 to 5 minutes). Remove and set aside.', type: COOK_BEEF },

        { step: 'Over medium-low heat, add olive oil to large pot.', type: COOK_RAGU },
        { step: 'Add garlic and onion. Saute for 2 minutes.', type: COOK_RAGU },
        { step: 'Add carrots and celery. Saute slowly for 5 minutes.', type: COOK_RAGU },
        { step: 'Add the rest of the sauce ingredients and the beef. Bring the heat to medium-high.', type: COOK_RAGU },
        { step: 'Once it begins to simmer, turn the heat down to low. Cover and let it cook until the beef is tender (about 2 hours).', type: COOK_RAGU },
        { step: 'Carefully transfer beef to a mixing bowl to shred with forks.', type: COOK_RAGU },
        { step: 'Re-add beef to the pot. Simmer until the sauce has reduced and thickened (about 30 minutes).', type: COOK_RAGU },
        { step: 'Taste and add more salt and pepper if needed. If the sauce is too sour, you can add 1/2 teaspoon of sugar.', type: COOK_RAGU },

        { step: '(After the shredded beef has been re-added) Bring a pot of water and salt to a boil.', type: COOK_PASTA },
        { step: 'Add pasta and cook until al dente (about 8 minutes or per package instructions).', type: COOK_PASTA },
        { step: 'Transfer the pasta to the sauce and add 3/4 cup of pasta water.', type: COOK_PASTA },
        { step: 'Stir the pasta and pasta water until it thickens the Ragu sauce.', type: COOK_PASTA },

        { step: 'Serve this immediately topped with parmesan and parsley.', type: SECTIONS.SERVE },
    ]
};