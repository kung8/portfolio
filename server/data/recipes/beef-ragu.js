const ragu1 = '../assets/Products/beef-ragu-1.jpeg';
const ragu2 = '../assets/Products/beef-ragu-2.jpeg';
const ragu3 = '../assets/Products/beef-ragu-3.jpeg';
const ragu4 = '../assets/Products/beef-ragu-4.jpeg';
const ragu5 = '../assets/Products/beef-ragu-5.jpeg';
const ragu6 = '../assets/Products/beef-ragu-6.jpeg';
const ragu7 = '../assets/Products/beef-ragu-7.jpeg';
const ragu8 = '../assets/Products/beef-ragu-8.jpeg';
const ragu9 = '../assets/Products/beef-ragu-9.jpeg';

const { CATEGORIES, GENRES, METHODS, PROTEIN, SECTIONS, TYPES, INGREDIENT_UNITS, YIELD_UNITS, TIME_UNITS } = require('./constants');
const { BEEF_CHUCK_ROAST, SALT, BLACK_PEPPER, OLIVE_OIL, GARLIC, CARROT, CELERY, CRUSHED_TOMATOES, TOMATO_PASTE, BEEF_BROTH, RED_WINE, THYME, BAY_LEAF, YELLOW_ONION, PAPPARDELLE_NOODLES, PARMESAN_CHEESE, PARSLEY, WATER } = require('./ingredients');

const BEEF_SECTION = 'Beef';
const RAGU_SECTION = 'Ragu';
const COOK_BEEF = 'Cook Beef';
const COOK_RAGU = 'Cook Ragu';
const COOK_PASTA = 'Cook Pasta';

module.exports = {
    cardName: 'Beef Ragu',
    name: 'Beef Ragu',
    img: ragu9,
    recipeAuthor: '',
    recipeFinder: 'Kevin Ung',
    available: true,
    recommended: false,
    category: [CATEGORIES.DINNER, CATEGORIES.LUNCH],
    genre: [GENRES.ITALIAN],
    method: [METHODS.BOIL, METHODS.SIMMER],
    protein: [PROTEIN.BEEF],
    type: [TYPES.PASTA],
    yields: { amount: 5, unit: YIELD_UNITS.SERVING },
    prepTime: { amount: 20, unit: TIME_UNITS.MINUTE },
    cookTime: { amount: 165, unit: TIME_UNITS.MINUTE },
    websites: [
        { label: 'Beef Ragu', link: 'https://www.recipetineats.com/slow-cooked-shredded-beef-ragu-pasta/' }
    ],
    separated: true,
    ingredients: [
        { ...BEEF_CHUCK_ROAST, amount: 5 / 2, unit: INGREDIENT_UNITS.POUND, additionalDetails: 'cut into 4 pieces', section: BEEF_SECTION },
        { ...SALT, amount: 1, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: BEEF_SECTION },
        { ...BLACK_PEPPER, amount: '', unit: '', additionalDetails: 'to taste', section: BEEF_SECTION },
        { ...OLIVE_OIL, amount: 1, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: BEEF_SECTION },

        { ...OLIVE_OIL, amount: 2, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RAGU_SECTION },
        { ...GARLIC, amount: 3, unit: INGREDIENT_UNITS.CLOVE, additionalDetails: 'minced', section: RAGU_SECTION },
        { ...YELLOW_ONION, amount: 1, unit: INGREDIENT_UNITS.SMALL, additionalDetails: 'diced', section: RAGU_SECTION },
        { ...CARROT, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: RAGU_SECTION },
        { ...CELERY, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'diced', section: RAGU_SECTION },
        { ...CRUSHED_TOMATOES, amount: 28, unit: INGREDIENT_UNITS.OUNCE, additionalDetails: '', section: RAGU_SECTION },
        { ...TOMATO_PASTE, amount: 3, unit: INGREDIENT_UNITS.TABLESPOON, additionalDetails: '', section: RAGU_SECTION },
        { ...BEEF_BROTH, amount: 2, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RAGU_SECTION },
        { ...RED_WINE, amount: 1, unit: INGREDIENT_UNITS.CUP, additionalDetails: '', section: RAGU_SECTION },
        { ...WATER, amount: 1.5, unit: INGREDIENT_UNITS.CUP, additionalDetails: 'warm', section: RAGU_SECTION },
        { ...THYME, amount: 3 / 4, unit: INGREDIENT_UNITS.TEASPOON, additionalDetails: '', section: RAGU_SECTION },
        { ...BAY_LEAF, amount: 3, unit: '', additionalDetails: '', section: RAGU_SECTION },

        { ...PAPPARDELLE_NOODLES, amount: 1, unit: INGREDIENT_UNITS.POUND, additionalDetails: '', section: SECTIONS.NOODLES },
        { ...PARMESAN_CHEESE, amount: '', unit: '', additionalDetails: 'grated', section: SECTIONS.TOPPINGS },
        { ...PARSLEY, amount: '', unit: '', additionalDetails: 'finely chopped', section: SECTIONS.TOPPINGS },
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
        { step: 'Pat beef dry with paper towels and season salt and pepper.', section: COOK_BEEF },
        { step: 'Over high heat, add olive oil to a large pot.', section: COOK_BEEF },
        { step: 'Add beef. Sear each side until browned (about 3 to 5 minutes). Remove and set aside.', section: COOK_BEEF, img: [ragu1, ragu3] },

        { step: 'Over medium-low heat, add olive oil to large pot.', section: COOK_RAGU },
        { step: 'Add garlic and onion. Saute for 2 minutes.', section: COOK_RAGU, img: ragu2 },
        { step: 'Add carrots and celery. Saute slowly for 5 minutes.', section: COOK_RAGU, img: ragu4 },
        { step: 'Add the rest of the sauce ingredients and the beef. Bring the heat to medium-high.', section: COOK_RAGU, img: [ragu5, ragu6] },
        { step: 'Once it begins to simmer, turn the heat down to low. Cover and let it cook until the beef is tender (about 2 hours).', section: COOK_RAGU },
        { step: 'Carefully transfer beef to a mixing bowl to shred with forks.', section: COOK_RAGU },
        { step: 'Re-add beef to the pot. Simmer until the sauce has reduced and thickened (about 30 minutes).', section: COOK_RAGU },
        { step: 'Taste and add more salt and pepper if needed. If the sauce is too sour, you can add 1/2 teaspoon of sugar.', section: COOK_RAGU },

        { step: '(After the shredded beef has been re-added) Bring a pot of water and salt to a boil.', section: COOK_PASTA },
        { step: 'Add pasta and cook until al dente (about 8 minutes or per package instructions).', section: COOK_PASTA, img: ragu7 },
        { step: 'Transfer the pasta to the sauce and add 3/4 cup of pasta water.', section: COOK_PASTA, img: ragu8 },
        { step: 'Stir the pasta and pasta water until it thickens the Ragu sauce.', section: COOK_PASTA },

        { step: 'Serve this immediately topped with parmesan and parsley.', section: SECTIONS.SERVE },
    ],
    notes: [
        { note: 'This ended up being too liquidy for me and the beef did not shred well after cooking for 2 1/2 hours. I ended up just cutting the beef instead of shredding it. I think adding more tomato paste would help thicken the sauce.' }
    ]
};